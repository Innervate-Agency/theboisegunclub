#!/usr/bin/env node

/**
 * CSV to PostgreSQL Import Script
 * Imports all CSV data sources into the PostgreSQL database
 * Run: node scripts/import-csv-to-postgres.js
 */

const fs = require('fs')
const path = require('path')
const { Pool } = require('pg')

// CSV parsing function
function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n')
  if (lines.length < 2) return []
  
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim())
  const rows = []
  
  for (let i = 1; i < lines.length; i++) {
    const values = []
    let current = ''
    let inQuotes = false
    
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    values.push(current.trim()) // Last value
    
    if (values.length === headers.length) {
      const row = {}
      headers.forEach((header, index) => {
        row[header.toLowerCase().replace(/[^a-z0-9]/g, '_')] = values[index] || null
      })
      rows.push(row)
    }
  }
  
  return rows
}

// Generate slug from business name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/-+/g, '-')          // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')        // Remove leading/trailing hyphens
}

// Categorize business type
function categorizeBusinessType(licenseName, businessName, services = []) {
  const name = (licenseName || businessName || '').toLowerCase()
  const serviceStr = services.join(' ').toLowerCase()
  
  if (name.includes('gun shop') || name.includes('sporting goods')) return 'Gun Shop'
  if (name.includes('gunsmith') || serviceStr.includes('gunsmith')) return 'Gunsmith'
  if (name.includes('range') || name.includes('shooting')) return 'Shooting Range'
  if (name.includes('tactical') || name.includes('training')) return 'Tactical/Training'
  if (name.includes('armory')) return 'Armory'
  if (name.includes('manufacturer') || name.includes('mfg')) return 'Manufacturer'
  if (name.includes('indoor')) return 'Indoor Range'
  if (name.includes('club')) return 'Gun Club'
  if (name.includes('outdoor')) return 'Outdoor Range'
  
  return 'FFL Dealer'
}

// Extract services from business type or name
function extractServices(businessType, licenseName, businessName) {
  const services = ['FFL Transfers', 'Background Checks']
  const text = (businessType + ' ' + licenseName + ' ' + businessName).toLowerCase()
  
  if (text.includes('gunsmith')) services.push('Gunsmith Services', 'Firearm Repairs')
  if (text.includes('training')) services.push('Training Classes', 'Safety Instruction')
  if (text.includes('range') || text.includes('shooting')) {
    services.push('Range Time', 'Target Practice')
  }
  if (text.includes('tactical')) services.push('Tactical Gear', 'Advanced Training')
  if (text.includes('competition')) services.push('Competition Support')
  if (text.includes('custom')) services.push('Custom Work')
  if (text.includes('retail') || text.includes('shop')) {
    services.push('Firearms Sales', 'Ammunition Sales', 'Accessories')
  }
  if (text.includes('manufacturer')) services.push('Manufacturing', 'Custom Builds')
  
  return services
}

async function importData() {
  console.log('🔫 The Boise Gun Club - CSV to PostgreSQL Import')
  console.log('================================================\n')
  
  // Database connection
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost/boise_gun_club'
  })
  
  try {
    await pool.query('SELECT NOW()') // Test connection
    console.log('✅ Connected to PostgreSQL database')
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    console.log('💡 Make sure PostgreSQL is running and DATABASE_URL is set')
    process.exit(1)
  }
  
  const docsDir = path.join(__dirname, '../docs')
  const csvFiles = [
    {
      file: 'ffl_boise_retail_150.csv',
      source: 'ffl_retail',
      description: 'FFL Retail Businesses - Boise Area'
    },
    {
      file: 'ffl_candidates_top150.csv', 
      source: 'ffl_candidates',
      description: 'FFL Candidate Businesses - Top 150'
    },
    {
      file: 'treasure_valley_ffls.csv',
      source: 'treasure_valley',
      description: 'Treasure Valley FFLs - Comprehensive List'
    },
    {
      file: 'canyon_county_firearms_directory.csv',
      source: 'canyon_county',
      description: 'Canyon County Firearms Directory'
    },
    {
      file: 'gem_county_firearms_directory.csv',
      source: 'gem_county', 
      description: 'Gem County Firearms Directory'
    },
    {
      file: 'owyhee_county_firearms_directory.csv',
      source: 'owyhee_county',
      description: 'Owyhee County Firearms Directory'
    },
    {
      file: 'payette_county_firearms_directory.csv',
      source: 'payette_county',
      description: 'Payette County Firearms Directory'
    }
  ]
  
  let totalImported = 0
  const duplicateTracker = new Set()
  
  for (const csvFile of csvFiles) {
    const filePath = path.join(docsDir, csvFile.file)
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${csvFile.file}`)
      continue
    }
    
    console.log(`\n📊 Processing: ${csvFile.description}`)
    console.log(`📁 File: ${csvFile.file}`)
    
    try {
      const csvContent = fs.readFileSync(filePath, 'utf8')
      const data = parseCSV(csvContent)
      
      console.log(`   Found ${data.length} records`)
      
      let imported = 0
      let skipped = 0
      
      for (const row of data) {
        // Normalize data based on CSV structure
        let businessData = {}
        
        if (csvFile.source === 'ffl_retail' || csvFile.source === 'ffl_candidates') {
          // FFL CSV format
          businessData = {
            license_name: row.license_name,
            business_name: row.business_name || row.license_name,
            premise_street: row.premise_street,
            premise_city: row.premise_city,
            premise_state: row.premise_state || 'ID',
            premise_zip_code: row.premise_zip_code,
            voice_phone: row.voice_phone,
            lic_regn: row.lic_regn,
            lic_dist: row.lic_dist,
            lic_cnty: row.lic_cnty,
            lic_type: row.lic_type,
            lic_xprdte: row.lic_xprdte,
            lic_seqn: row.lic_seqn
          }
        } else {
          // County directory format
          businessData = {
            business_name: row.name,
            business_type: row.type,
            premise_street: row.address,
            premise_city: row.city,
            premise_state: 'ID',
            voice_phone: row.phone,
            website: row.website === 'N/A' ? null : row.website
          }
        }
        
        // Skip if essential data is missing
        if (!businessData.business_name || businessData.business_name.trim() === '') {
          skipped++
          continue
        }
        
        // Generate slug and check for duplicates
        const slug = generateSlug(businessData.business_name)
        if (duplicateTracker.has(slug)) {
          skipped++
          continue
        }
        duplicateTracker.add(slug)
        
        // Prepare database insert
        const displayName = businessData.business_name
        const businessType = categorizeBusinessType(
          businessData.license_name, 
          businessData.business_name,
          businessData.business_type ? [businessData.business_type] : []
        )
        
        const services = extractServices(
          businessType,
          businessData.license_name || '',
          businessData.business_name
        )
        
        const description = `${displayName} is a licensed ${businessType} serving ${businessData.premise_city || 'Idaho'} and the surrounding Treasure Valley area. As a verified Federal Firearms License holder, we provide professional firearms sales, transfers, and related services to the Idaho shooting community.`
        
        // Format phone number
        let formattedPhone = null
        if (businessData.voice_phone) {
          const phone = businessData.voice_phone.replace(/\D/g, '')
          if (phone.length === 10) {
            formattedPhone = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`
          } else {
            formattedPhone = businessData.voice_phone
          }
        }
        
        try {
          // Insert into database
          const insertQuery = `
            INSERT INTO businesses (
              slug, license_name, business_name, display_name, business_type, description,
              premise_street, premise_city, premise_state, premise_zip_code,
              voice_phone, website, services, data_source,
              lic_regn, lic_dist, lic_cnty, lic_type, lic_xprdte, lic_seqn,
              hours, specialties, tier, is_verified
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
            ON CONFLICT (slug) DO UPDATE SET
              business_name = EXCLUDED.business_name,
              updated_at = NOW()
          `
          
          await pool.query(insertQuery, [
            slug,
            businessData.license_name,
            businessData.business_name,
            displayName,
            businessType,
            description,
            businessData.premise_street,
            businessData.premise_city,
            businessData.premise_state,
            businessData.premise_zip_code,
            formattedPhone,
            businessData.website,
            services,
            csvFile.source,
            businessData.lic_regn,
            businessData.lic_dist,
            businessData.lic_cnty,
            businessData.lic_type,
            businessData.lic_xprdte,
            businessData.lic_seqn,
            JSON.stringify({
              "Mon-Fri": "9:00 AM - 6:00 PM",
              "Sat": "10:00 AM - 5:00 PM",
              "Sun": "Closed"
            }),
            businessType === 'Gunsmith' ? 
              ['Custom Work', 'Repairs', 'Modifications'] : 
              ['Firearms Sales', 'Transfers', 'Accessories'],
            'free',
            true
          ])
          
          imported++
          
        } catch (dbError) {
          console.log(`   ❌ Error importing ${businessData.business_name}: ${dbError.message}`)
          skipped++
        }
      }
      
      console.log(`   ✅ Imported: ${imported}`)
      console.log(`   ⏭️  Skipped: ${skipped}`)
      totalImported += imported
      
    } catch (error) {
      console.error(`❌ Error processing ${csvFile.file}:`, error.message)
    }
  }
  
  console.log(`\n🎉 Import Complete!`)
  console.log(`📊 Total businesses imported: ${totalImported}`)
  
  // Create business_stats entries for all businesses
  console.log(`\n📈 Creating business statistics records...`)
  try {
    const statsResult = await pool.query(`
      INSERT INTO business_stats (business_id, avg_rating, total_reviews, google_reviews_count)
      SELECT id, 0.0, 0, 0 FROM businesses
      ON CONFLICT (business_id) DO NOTHING
    `)
    console.log(`✅ Created ${statsResult.rowCount} business statistics records`)
  } catch (error) {
    console.log(`⚠️  Error creating business statistics: ${error.message}`)
  }
  
  // Show summary statistics
  try {
    const summary = await pool.query(`
      SELECT 
        data_source,
        COUNT(*) as count,
        COUNT(CASE WHEN is_verified THEN 1 END) as verified_count
      FROM businesses 
      GROUP BY data_source
      ORDER BY count DESC
    `)
    
    console.log(`\n📋 Import Summary by Source:`)
    summary.rows.forEach(row => {
      console.log(`   ${row.data_source}: ${row.count} businesses (${row.verified_count} verified)`)
    })
    
    const businessTypes = await pool.query(`
      SELECT business_type, COUNT(*) as count
      FROM businesses 
      GROUP BY business_type
      ORDER BY count DESC
    `)
    
    console.log(`\n🏢 Businesses by Type:`)
    businessTypes.rows.forEach(row => {
      console.log(`   ${row.business_type}: ${row.count}`)
    })
    
  } catch (error) {
    console.log(`⚠️  Error generating summary: ${error.message}`)
  }
  
  await pool.end()
  console.log(`\n✨ Database connection closed`)
  console.log(`🚀 Ready for 500+ page generation!`)
}

// Run the import
if (require.main === module) {
  importData().catch(error => {
    console.error('💥 Import failed:', error)
    process.exit(1)
  })
}

module.exports = { importData, parseCSV, generateSlug }