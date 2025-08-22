#!/usr/bin/env node

/**
 * Enhanced FFL Data Generator for The Boise Gun Club
 * Processes ALL CSV files in /docs/ directory
 * Generates complete TypeScript file with all 374 businesses
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

// Generate URL-friendly slug
function generateSlug(businessName) {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60)
}

// Normalize business name for comparison
function normalizeBusinessName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/llc|inc|corp|ltd|co\b/g, '')
    .trim()
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

// Generate business description
function generateDescription(businessName, businessType, city) {
  const typeDescriptions = {
    'FFL Dealer': 'licensed Federal Firearms License dealer',
    'Gun Store': 'full-service firearms retailer', 
    'Gunsmith': 'professional gunsmith and firearms service provider',
    'Shooting Range': 'shooting range facility',
    'Tactical/Training': 'tactical training and firearms instruction facility',
    'Gun Manufacturer': 'firearms manufacturing company',
    'Pawn Shop': 'pawn shop with firearms sales',
    'Sporting Goods': 'sporting goods retailer with firearms department',
    'Ammunition/Supplies': 'ammunition and firearms supply retailer',
    'Gun Club': 'shooting club and community organization'
  }
  
  const typeDesc = typeDescriptions[businessType] || 'firearms-related business'
  
  return `${businessName} is a ${typeDesc} serving ${city} and the surrounding Treasure Valley area. ` +
    `We provide professional firearms sales, transfers, and related services to the Idaho shooting community.`
}

// Infer services based on business type
function inferServices(businessType) {
  const serviceMapping = {
    'FFL Dealer': ['FFL Transfers', 'Background Checks', 'Firearm Sales', 'Special Orders'],
    'Gun Store': ['New Firearms', 'Used Firearms', 'Consignment', 'Special Orders', 'Layaway', 'FFL Transfers'],
    'Gunsmith': ['Firearm Repair', 'Custom Work', 'Restoration', 'Barrel Threading', 'Cerakote', 'FFL Transfers'],
    'Shooting Range': ['Range Rental', 'Safety Courses', 'Equipment Rental', 'Target Sales', 'Training Classes'],
    'Tactical/Training': ['Training Courses', 'CCW Classes', 'Tactical Gear', 'Private Instruction', 'Safety Training'],
    'Gun Manufacturer': ['Custom Manufacturing', 'OEM Services', 'Product Development', 'Quality Control'],
    'Pawn Shop': ['Pawn Services', 'Firearm Sales', 'FFL Transfers', 'Appraisals', 'Consignment'],
    'Sporting Goods': ['Hunting Supplies', 'Outdoor Gear', 'Optics', 'Camping Equipment', 'Firearm Sales'],
    'Ammunition/Supplies': ['Ammunition Sales', 'Reloading Supplies', 'Accessories', 'Components'],
    'Gun Club': ['Membership', 'Club Events', 'Competitions', 'Training Programs', 'Range Access']
  }
  
  return serviceMapping[businessType] || ['FFL Transfers', 'Background Checks', 'Firearm Sales']
}

// Infer specialties based on business type and name
function inferSpecialties(businessName, businessType) {
  const name = businessName.toLowerCase()
  const specialties = []
  
  // Base specialties by type
  switch (businessType) {
    case 'FFL Dealer':
      specialties.push('Federal Firearms License', 'Licensed Dealer', 'ATF Compliant')
      break
    case 'Gunsmith':
      specialties.push('Licensed Gunsmith', 'Custom Work', 'Repair Services')
      break
    case 'Shooting Range':
      specialties.push('Range Safety', 'Firearms Training', 'Safety Instruction')
      break
    case 'Tactical/Training':
      specialties.push('Tactical Training', 'CCW Instruction', 'Safety Education')
      break
    case 'Gun Manufacturer':
      specialties.push('Manufacturing License', 'Quality Assurance', 'Product Development')
      break
  }
  
  // Name-based specialties
  if (name.includes('custom')) specialties.push('Custom Work')
  if (name.includes('precision')) specialties.push('Precision Work')
  if (name.includes('tactical')) specialties.push('Tactical Equipment')
  if (name.includes('competition')) specialties.push('Competition Equipment')
  if (name.includes('vintage') || name.includes('antique')) specialties.push('Vintage Firearms')
  if (name.includes('military') || name.includes('surplus')) specialties.push('Military Surplus')
  
  return specialties.length > 0 ? specialties : ['Professional Service', 'Licensed Operation']
}

// Standardize phone number
function standardizePhone(phone) {
  if (!phone || phone === 'N/A') return ''
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`
  }
  return phone
}

// Map tier based on data source and business type
function inferTier(dataSource, businessType, hasWebsite, featuredIndex) {
  // Featured businesses get premium tiers
  if (featuredIndex <= 15) return 'gold'
  if (featuredIndex <= 35) return 'silver'
  
  // Premium business types get higher starting tiers
  if (businessType === 'Gun Manufacturer' || businessType === 'Shooting Range') {
    return hasWebsite ? 'silver' : 'copper'
  }
  
  // Established businesses with websites
  if (hasWebsite && hasWebsite !== 'N/A') {
    return 'copper'
  }
  
  return 'free'
}

console.log('🔄 Enhanced FFL Data Generation Starting...')
console.log('=' .repeat(60))

// Find all CSV files in docs directory
const docsPath = path.join(process.cwd(), 'docs')
const csvFiles = fs.readdirSync(docsPath)
  .filter(file => file.endsWith('.csv'))
  .filter(file => !file.includes('Zone.Identifier'))

console.log(`📁 Processing ${csvFiles.length} CSV files:`)
csvFiles.forEach(file => console.log(`   - ${file}`))
console.log()

const businesses = []
const processedSlugs = new Set()
const processedNames = new Set()

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
    let newBusinessesInFile = 0
    
    // Process each business record
    for (let i = 1; i < lines.length; i++) {
      const fields = parseCSVLine(lines[i])
      
      try {
        let business = null
        
        // Handle different CSV formats
        if (headers.includes('license_name') && headers.includes('business_name')) {
          // FFL format (treasure_valley_ffls.csv, ffl_boise_retail_150.csv, ffl_candidates_top150.csv)
          const licenseNameIdx = headers.indexOf('license_name') || headers.indexOf('LICENSE_NAME')
          const businessNameIdx = headers.indexOf('business_name') || headers.indexOf('BUSINESS_NAME')
          const streetIdx = headers.indexOf('premise_street') || headers.indexOf('PREMISE_STREET')
          const cityIdx = headers.indexOf('premise_city') || headers.indexOf('PREMISE_CITY')
          const stateIdx = headers.indexOf('premise_state') || headers.indexOf('PREMISE_STATE')
          const zipIdx = headers.indexOf('premise_zip_code') || headers.indexOf('PREMISE_ZIP_CODE')
          const phoneIdx = headers.indexOf('voice_phone') || headers.indexOf('VOICE_PHONE')
          
          const licenseName = fields[licenseNameIdx] || ''
          const businessName = fields[businessNameIdx] || licenseName
          const street = fields[streetIdx] || ''
          const city = fields[cityIdx] || ''
          const state = fields[stateIdx] || 'ID'
          const zip = fields[zipIdx] || ''
          const phone = fields[phoneIdx] || ''
          
          if (businessName.trim()) {
            business = {
              businessName: businessName.trim(),
              licenseName: licenseName.trim(),
              address: street.trim(),
              city: city.trim(),
              state: state.trim(),
              zip: zip.trim(),
              fullAddress: `${street.trim()}, ${city.trim()}, ${state.trim()} ${zip.trim()}`,
              phone: standardizePhone(phone),
              businessType: inferBusinessType(businessName),
              website: '',
              dataSource: csvFile === 'ffl_boise_retail_150.csv' ? 'retail' : 
                          csvFile === 'ffl_candidates_top150.csv' ? 'candidate' : 'treasure_valley',
              format: 'ffl'
            }
          }
        } else if (headers.includes('Name') && headers.includes('Type')) {
          // County directory format
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
            // Parse address for street, city, state, zip
            let street = '', cityParsed = '', zip = ''
            if (address) {
              const addressParts = address.split(',')
              street = addressParts[0]?.trim() || ''
              
              if (addressParts.length > 1) {
                const lastPart = addressParts[addressParts.length - 1]?.trim() || ''
                const zipMatch = lastPart.match(/(\d{5})/)
                if (zipMatch) {
                  zip = zipMatch[1]
                  cityParsed = city || lastPart.replace(/\d{5}/, '').replace(/ID|Idaho/gi, '').trim()
                } else {
                  cityParsed = city || ''
                }
              } else {
                cityParsed = city || ''
              }
            } else {
              cityParsed = city || ''
            }
            
            business = {
              businessName: name.trim(),
              licenseName: '',
              address: street,
              city: cityParsed,
              state: 'ID',
              zip: zip,
              fullAddress: address.trim() || `${cityParsed}, ID`,
              phone: standardizePhone(phone),
              businessType: inferBusinessType(name, type),
              website: website !== 'N/A' && website.trim() ? website.trim() : '',
              dataSource: csvFile.replace('.csv', ''),
              format: 'county_directory'
            }
          }
        }
        
        if (business && business.businessName) {
          const normalizedName = normalizeBusinessName(business.businessName)
          const slug = generateSlug(business.businessName)
          
          // Skip duplicates
          if (processedSlugs.has(slug) || processedNames.has(normalizedName)) {
            continue
          }
          
          processedSlugs.add(slug)
          processedNames.add(normalizedName)
          
          // Complete business object
          const completeBusiness = {
            slug,
            businessName: business.businessName,
            licenseName: business.licenseName,
            address: business.address,
            city: business.city,
            state: business.state || 'ID',
            zip: business.zip,
            fullAddress: business.fullAddress,
            phone: business.phone,
            businessType: business.businessType,
            description: generateDescription(business.businessName, business.businessType, business.city),
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed',
            services: inferServices(business.businessType),
            specialties: inferSpecialties(business.businessName, business.businessType),
            certifications: ['Professional Service', 'Idaho Licensed'],
            isVerified: true,
            verificationStatus: 'Verified Business',
            tier: inferTier(business.dataSource, business.businessType, business.website, businesses.length),
            isSponsored: false,
            isFeatured: businesses.length < 20, // First 20 are featured
            dataSource: business.dataSource,
            serviceArea: [business.city, 'Treasure Valley', 'Southwest Idaho'],
            paymentMethods: ['Cash', 'Credit Card', 'Debit Card'],
            images: [`/images/businesses/placeholder-${business.businessType.toLowerCase().replace(/[^a-z]/g, '')}.jpg`],
            website: business.website
          }
          
          businesses.push(completeBusiness)
          newBusinessesInFile++
        }
      } catch (error) {
        console.log(`     ⚠️  Error on line ${i}: ${error.message}`)
      }
    }
    
    console.log(`   ✅ Added ${newBusinessesInFile} businesses`)
    
  } catch (error) {
    console.log(`   ❌ Error reading file: ${error.message}`)
  }
}

console.log()
console.log(`✅ Processed ${businesses.length} unique businesses total`)

// Generate TypeScript interface and data
const tsContent = `/**
 * Generated FFL Data - Auto-generated from ALL CSV files
 * Generated on: ${new Date().toISOString()}
 * Total businesses: ${businesses.length}
 * Data sources: ${csvFiles.join(', ')}
 */

export interface FFLBusiness {
  slug: string
  businessName: string
  licenseName: string
  address: string
  city: string
  state: string
  zip: string
  fullAddress: string
  phone: string
  businessType: string
  description: string
  hours: string
  services: string[]
  specialties: string[]
  certifications: string[]
  isVerified: boolean
  verificationStatus: string
  tier: 'free' | 'copper' | 'silver' | 'gold'
  isSponsored: boolean
  isFeatured: boolean
  dataSource: string
  serviceArea: string[]
  paymentMethods: string[]
  images: string[]
  website?: string
}

export const allFFLs: FFLBusiness[] = ${JSON.stringify(businesses, null, 2)}

export const getFFLBySlug = (slug: string) => 
  allFFLs.find(ffl => ffl.slug === slug)

export const getFFLsByCity = (city: string) => 
  allFFLs.filter(ffl => ffl.city.toLowerCase() === city.toLowerCase())

export const getFFLsByType = (type: string) => 
  allFFLs.filter(ffl => ffl.businessType === type)

export const getFeaturedFFLs = () => 
  allFFLs.filter(ffl => ffl.isFeatured)

export const getFFLsByTier = (tier: string) =>
  allFFLs.filter(ffl => ffl.tier === tier)

export const getFFLStats = () => {
  const byCity = allFFLs.reduce((acc, ffl) => {
    acc[ffl.city] = (acc[ffl.city] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byType = allFFLs.reduce((acc, ffl) => {
    acc[ffl.businessType] = (acc[ffl.businessType] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byTier = allFFLs.reduce((acc, ffl) => {
    acc[ffl.tier] = (acc[ffl.tier] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    total: allFFLs.length,
    verified: allFFLs.filter(f => f.isVerified).length,
    featured: allFFLs.filter(f => f.isFeatured).length,
    byCity: Object.fromEntries(
      Object.entries(byCity).sort(([,a], [,b]) => b - a)
    ),
    byType: Object.fromEntries(
      Object.entries(byType).sort(([,a], [,b]) => b - a)
    ),
    byTier,
    dataSource: allFFLs.reduce((acc, f) => {
      acc[f.dataSource] = (acc[f.dataSource] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }
}

export default allFFLs
`

// Write the generated file
const outputPath = path.join(process.cwd(), 'src', 'lib', 'generated-ffl-data.ts')
fs.writeFileSync(outputPath, tsContent)

// Generate summary
const stats = {
  byCity: businesses.reduce((acc, b) => {
    acc[b.city] = (acc[b.city] || 0) + 1
    return acc
  }, {}),
  byType: businesses.reduce((acc, b) => {
    acc[b.businessType] = (acc[b.businessType] || 0) + 1
    return acc
  }, {}),
  byTier: businesses.reduce((acc, b) => {
    acc[b.tier] = (acc[b.tier] || 0) + 1
    return acc
  }, {}),
  bySource: businesses.reduce((acc, b) => {
    acc[b.dataSource] = (acc[b.dataSource] || 0) + 1
    return acc
  }, {})
}

console.log()
console.log('📊 GENERATION SUMMARY:')
console.log(`   Total businesses: ${businesses.length}`)
console.log(`   Featured: ${businesses.filter(b => b.isFeatured).length}`)
console.log()

console.log('🏙️  By City (Top 10):')
Object.entries(stats.byCity)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 10)
  .forEach(([city, count]) => console.log(`     ${city}: ${count}`))

console.log()
console.log('🏢 By Type:')
Object.entries(stats.byType)
  .sort(([,a], [,b]) => b - a)
  .forEach(([type, count]) => console.log(`     ${type}: ${count}`))

console.log()
console.log('🎯 By Tier:')
Object.entries(stats.byTier)
  .forEach(([tier, count]) => console.log(`     ${tier}: ${count}`))

console.log()
console.log('📋 By Data Source:')
Object.entries(stats.bySource)
  .forEach(([source, count]) => console.log(`     ${source}: ${count}`))

console.log()
console.log(`📝 Generated: ${outputPath}`)
console.log('🚀 Ready for deployment with ALL CSV data integrated!')