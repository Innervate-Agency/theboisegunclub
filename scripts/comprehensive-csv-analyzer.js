#!/usr/bin/env node

/**
 * Comprehensive CSV Analyzer for The Boise Gun Club
 * Analyzes ALL CSV files in /docs/ and cross-references with existing 283 businesses
 * Identifies missing businesses for PostgreSQL import
 */

const fs = require('fs')
const path = require('path')

// Parse CSV line (handles commas in quoted fields)
function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  
  result.push(current.trim())
  return result
}

// Normalize business name for comparison
function normalizeBusinessName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/llc|inc|corp|ltd|co\b/g, '')
    .trim()
}

// Generate URL-friendly slug
function generateSlug(businessName) {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60)
}

// Determine business type based on name and type field
function inferBusinessType(businessName, typeField = '') {
  const combined = `${businessName} ${typeField}`.toLowerCase()
  
  if (combined.includes('range') || combined.includes('shooting')) return 'Shooting Range'
  if (combined.includes('gunsmith') || combined.includes('custom')) return 'Gunsmith'
  if (combined.includes('tactical') || combined.includes('defense') || combined.includes('training')) return 'Tactical/Training'
  if (combined.includes('pawn')) return 'Pawn Shop'
  if (combined.includes('sporting') || combined.includes('outdoor')) return 'Sporting Goods'
  if (combined.includes('armory') || combined.includes('arsenal')) return 'Gun Store'
  if (combined.includes('supply') || combined.includes('ammo') || combined.includes('ammunition')) return 'Ammunition/Supplies'
  if (combined.includes('club')) return 'Gun Club'
  if (combined.includes('manufacturer') || combined.includes('manufacturing')) return 'Gun Manufacturer'
  
  return 'FFL Dealer'
}

// Standardize phone number
function standardizePhone(phone) {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`
  }
  return phone
}

console.log('🔍 Comprehensive CSV Analysis Starting...')
console.log('=' .repeat(60))

// Load existing businesses from generated file
const existingPath = path.join(process.cwd(), 'src', 'lib', 'generated-ffl-data.ts')
let existingBusinesses = new Set()

if (fs.existsSync(existingPath)) {
  const existingContent = fs.readFileSync(existingPath, 'utf-8')
  const match = existingContent.match(/Total businesses: (\d+)/)
  if (match) {
    console.log(`📊 Current database has: ${match[1]} businesses`)
  }
  
  // Extract business names from existing data for comparison
  const businessMatches = existingContent.match(/"businessName": "([^"]+)"/g)
  if (businessMatches) {
    businessMatches.forEach(match => {
      const name = match.match(/"businessName": "([^"]+)"/)[1]
      existingBusinesses.add(normalizeBusinessName(name))
    })
  }
}

console.log(`📋 Existing businesses loaded: ${existingBusinesses.size}`)
console.log()

// Find all CSV files in docs directory
const docsPath = path.join(process.cwd(), 'docs')
const csvFiles = fs.readdirSync(docsPath)
  .filter(file => file.endsWith('.csv'))
  .filter(file => !file.includes('Zone.Identifier'))

console.log(`📁 Found ${csvFiles.length} CSV files:`)
csvFiles.forEach(file => console.log(`   - ${file}`))
console.log()

// Analysis results
const analysisResults = {
  totalRecords: 0,
  newBusinesses: [],
  duplicatesFound: 0,
  errors: [],
  fileResults: {}
}

// Process each CSV file
for (const csvFile of csvFiles) {
  console.log(`🔄 Processing: ${csvFile}`)
  const filePath = path.join(docsPath, csvFile)
  
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const lines = data.split('\n').filter(line => line.trim())
    
    if (lines.length < 2) {
      console.log(`   ⚠️  Skipping empty file`)
      continue
    }
    
    const headers = parseCSVLine(lines[0])
    console.log(`   📝 Headers: ${headers.join(', ')}`)
    console.log(`   📊 Records: ${lines.length - 1}`)
    
    const fileResult = {
      totalRecords: lines.length - 1,
      newBusinesses: 0,
      duplicates: 0,
      errors: 0,
      headers: headers
    }
    
    // Process each business record
    for (let i = 1; i < lines.length; i++) {
      const fields = parseCSVLine(lines[i])
      analysisResults.totalRecords++
      
      try {
        let business = null
        
        // Handle different CSV formats
        if (headers.includes('license_name') && headers.includes('business_name')) {
          // FFL format (ffl_boise_retail_150.csv, ffl_candidates_top150.csv, treasure_valley_ffls.csv)
          const licenseNameIdx = headers.indexOf('license_name')
          const businessNameIdx = headers.indexOf('business_name')
          const streetIdx = headers.indexOf('premise_street')
          const cityIdx = headers.indexOf('premise_city')
          const phoneIdx = headers.indexOf('voice_phone')
          
          const licenseName = fields[licenseNameIdx] || ''
          const businessName = fields[businessNameIdx] || licenseName
          const street = fields[streetIdx] || ''
          const city = fields[cityIdx] || ''
          const phone = fields[phoneIdx] || ''
          
          if (businessName.trim()) {
            business = {
              name: businessName.trim(),
              licenseName: licenseName.trim(),
              address: street.trim(),
              city: city.trim(),
              phone: standardizePhone(phone),
              businessType: inferBusinessType(businessName),
              dataSource: csvFile,
              format: 'ffl'
            }
          }
        } else if (headers.includes('Name') && headers.includes('Type')) {
          // County directory format (ada_county_gun_stores_comprehensive.csv, canyon_county_firearms_directory.csv, etc.)
          const nameIdx = headers.indexOf('Name')
          const typeIdx = headers.indexOf('Type')
          const phoneIdx = headers.indexOf('Phone')
          const addressIdx = headers.indexOf('Address')
          const cityIdx = headers.indexOf('City')
          const websiteIdx = headers.indexOf('Website')
          
          const name = fields[nameIdx] || ''
          const type = fields[typeIdx] || ''
          const phone = fields[phoneIdx] || ''
          const address = fields[addressIdx] || ''
          const city = fields[cityIdx] || ''
          const website = fields[websiteIdx] || ''
          
          if (name.trim()) {
            business = {
              name: name.trim(),
              licenseName: '',
              address: address.trim(),
              city: city.trim(),
              phone: standardizePhone(phone),
              businessType: inferBusinessType(name, type),
              website: website !== 'N/A' ? website.trim() : '',
              dataSource: csvFile,
              format: 'county_directory'
            }
          }
        }
        
        if (business) {
          const normalizedName = normalizeBusinessName(business.name)
          
          if (existingBusinesses.has(normalizedName)) {
            fileResult.duplicates++
            analysisResults.duplicatesFound++
          } else {
            business.slug = generateSlug(business.name)
            analysisResults.newBusinesses.push(business)
            fileResult.newBusinesses++
            existingBusinesses.add(normalizedName) // Add to prevent duplicates within this run
          }
        }
      } catch (error) {
        analysisResults.errors.push(`${csvFile}:${i} - ${error.message}`)
        fileResult.errors++
      }
    }
    
    analysisResults.fileResults[csvFile] = fileResult
    console.log(`   ✅ New: ${fileResult.newBusinesses}, Duplicates: ${fileResult.duplicates}, Errors: ${fileResult.errors}`)
    
  } catch (error) {
    console.log(`   ❌ Error reading file: ${error.message}`)
    analysisResults.errors.push(`${csvFile} - ${error.message}`)
  }
  
  console.log()
}

// Generate summary report
console.log('📊 ANALYSIS SUMMARY')
console.log('=' .repeat(60))
console.log(`Total CSV records processed: ${analysisResults.totalRecords}`)
console.log(`New businesses found: ${analysisResults.newBusinesses.length}`)
console.log(`Duplicates skipped: ${analysisResults.duplicatesFound}`)
console.log(`Errors encountered: ${analysisResults.errors.length}`)
console.log()

// Group new businesses by city
const businessesByCity = analysisResults.newBusinesses.reduce((acc, business) => {
  const city = business.city || 'Unknown'
  if (!acc[city]) acc[city] = []
  acc[city].push(business)
  return acc
}, {})

console.log('🏙️  NEW BUSINESSES BY CITY:')
Object.entries(businessesByCity)
  .sort(([,a], [,b]) => b.length - a.length)
  .forEach(([city, businesses]) => {
    console.log(`   ${city}: ${businesses.length} businesses`)
  })
console.log()

// Group by business type
const businessesByType = analysisResults.newBusinesses.reduce((acc, business) => {
  const type = business.businessType
  if (!acc[type]) acc[type] = []
  acc[type].push(business)
  return acc
}, {})

console.log('🏢 NEW BUSINESSES BY TYPE:')
Object.entries(businessesByType)
  .sort(([,a], [,b]) => b.length - a.length)
  .forEach(([type, businesses]) => {
    console.log(`   ${type}: ${businesses.length} businesses`)
  })
console.log()

// Show data sources
console.log('📋 BY DATA SOURCE:')
Object.entries(analysisResults.fileResults).forEach(([file, result]) => {
  console.log(`   ${file}: ${result.newBusinesses} new (${result.duplicates} duplicates, ${result.errors} errors)`)
})
console.log()

// Show errors if any
if (analysisResults.errors.length > 0) {
  console.log('❌ ERRORS:')
  analysisResults.errors.forEach(error => console.log(`   ${error}`))
  console.log()
}

// Save detailed results for PostgreSQL import
const outputFile = path.join(process.cwd(), 'docs', 'csv-analysis-results.json')
fs.writeFileSync(outputFile, JSON.stringify({
  analysis: analysisResults,
  summary: {
    totalNewBusinesses: analysisResults.newBusinesses.length,
    businessesByCity,
    businessesByType,
    dataSourceBreakdown: analysisResults.fileResults
  },
  newBusinesses: analysisResults.newBusinesses
}, null, 2))

console.log(`💾 Detailed results saved to: ${outputFile}`)
console.log()

if (analysisResults.newBusinesses.length > 0) {
  console.log(`🚀 READY FOR IMPORT: ${analysisResults.newBusinesses.length} new businesses ready for PostgreSQL`)
  console.log('   Next step: Run the PostgreSQL import script to add these businesses')
} else {
  console.log('✅ ALL BUSINESSES ALREADY IN DATABASE')
  console.log('   Your database appears to be up to date with all CSV data')
}

console.log()
console.log('🎯 Analysis complete!')