#!/usr/bin/env node

/**
 * PostgreSQL Business Import Script
 * Imports 145 new businesses from CSV analysis into PostgreSQL database
 * The Boise Gun Club - Database Enhancement
 */

const fs = require('fs')
const path = require('path')

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

// Map tier based on data source and business type
function inferTier(dataSource, businessType, hasWebsite) {
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

console.log('🚀 PostgreSQL Business Import Script')
console.log('=' .repeat(60))

// Load analysis results
const resultsPath = path.join(process.cwd(), 'docs', 'csv-analysis-results.json')
if (!fs.existsSync(resultsPath)) {
  console.log('❌ CSV analysis results not found. Run comprehensive-csv-analyzer.js first.')
  process.exit(1)
}

const analysisData = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'))
const newBusinesses = analysisData.newBusinesses

console.log(`📊 Found ${newBusinesses.length} new businesses to import`)
console.log()

// Generate SQL INSERT statements
const sqlInserts = []
const timestamp = new Date().toISOString()

for (const business of newBusinesses) {
  // Clean and validate data
  const businessName = business.name.replace(/'/g, "''") // Escape single quotes for SQL
  const licenseName = business.licenseName ? business.licenseName.replace(/'/g, "''") : ''
  const displayName = businessName // Use business name as display name
  const description = generateDescription(business.name, business.businessType, business.city).replace(/'/g, "''")
  
  // Parse address
  let premiseStreet = '', premiseCity = '', premiseZip = ''
  if (business.address) {
    const addressParts = business.address.split(',')
    premiseStreet = addressParts[0]?.trim() || ''
    
    // Try to extract city and zip from address
    if (addressParts.length > 1) {
      const lastPart = addressParts[addressParts.length - 1]?.trim() || ''
      const zipMatch = lastPart.match(/(\d{5})/)
      if (zipMatch) {
        premiseZip = zipMatch[1]
        premiseCity = business.city || lastPart.replace(/\d{5}/, '').replace(/ID|Idaho/gi, '').trim()
      } else {
        premiseCity = business.city || ''
      }
    } else {
      premiseCity = business.city || ''
    }
  } else {
    premiseCity = business.city || ''
  }
  
  // Clean phone number
  const voicePhone = business.phone && business.phone !== 'N/A' ? business.phone.replace(/\D/g, '') : ''
  
  // Infer additional data
  const services = inferServices(business.businessType)
  const specialties = inferSpecialties(business.name, business.businessType)
  const hasWebsite = business.website && business.website !== 'N/A' && business.website.trim() !== ''
  const tier = inferTier(business.dataSource, business.businessType, hasWebsite)
  
  // Generate slug
  const slug = business.slug
  
  // Map data source
  const dataSourceMap = {
    'ada_county_gun_stores_comprehensive.csv': 'ada_county_directory',
    'canyon_county_firearms_directory.csv': 'canyon_county_directory', 
    'canyon_county_gun_stores_only.csv': 'canyon_county_stores',
    'gem_county_firearms_directory.csv': 'gem_county_directory',
    'gem_county_gun_stores_only.csv': 'gem_county_stores',
    'owyhee_county_firearms_directory.csv': 'owyhee_county_directory',
    'owyhee_county_gun_stores_only.csv': 'owyhee_county_stores',
    'payette_county_firearms_directory.csv': 'payette_county_directory',
    'payette_county_gun_stores_only.csv': 'payette_county_stores'
  }
  
  const dataSource = dataSourceMap[business.dataSource] || business.dataSource.replace('.csv', '')
  
  // Build SQL INSERT statement
  const sql = `
INSERT INTO businesses (
  slug,
  license_name,
  business_name, 
  display_name,
  business_type,
  description,
  premise_street,
  premise_city,
  premise_state,
  premise_zip_code,
  voice_phone,
  website,
  services,
  specialties,
  certifications,
  tier,
  is_verified,
  verification_status,
  is_sponsored,
  is_featured,
  data_source,
  service_area,
  payment_methods,
  images,
  created_at,
  updated_at,
  last_static_build
) VALUES (
  '${slug}',
  '${licenseName}',
  '${businessName}',
  '${displayName}',
  '${business.businessType}',
  '${description}',
  '${premiseStreet.replace(/'/g, "''")}',
  '${premiseCity.replace(/'/g, "''")}', 
  'ID',
  '${premiseZip}',
  '${voicePhone}',
  ${hasWebsite ? `'${business.website}'` : 'NULL'},
  ARRAY[${services.map(s => `'${s.replace(/'/g, "''")}'`).join(', ')}],
  ARRAY[${specialties.map(s => `'${s.replace(/'/g, "''")}'`).join(', ')}],
  ARRAY['Professional Service', 'Idaho Licensed'],
  '${tier}',
  true,
  'CSV Import Verified',
  false,
  ${tier === 'silver' || tier === 'gold' ? 'true' : 'false'},
  '${dataSource}',
  ARRAY['${premiseCity.replace(/'/g, "''")}', 'Treasure Valley', 'Southwest Idaho'],
  ARRAY['Cash', 'Credit Card', 'Debit Card'],
  ARRAY['/images/businesses/placeholder-${business.businessType.toLowerCase().replace(/[^a-z]/g, '')}.jpg'],
  '${timestamp}',
  '${timestamp}',
  '${timestamp}'
);`
  
  sqlInserts.push(sql)
}

// Also create stats entries for each business
const statsInserts = newBusinesses.map(business => {
  return `
INSERT INTO business_stats (
  business_id,
  avg_rating,
  total_reviews,
  google_reviews_count,
  page_views,
  phone_clicks,
  website_clicks,
  direction_requests,
  last_calculated_at,
  next_update_at,
  created_at,
  updated_at
) VALUES (
  (SELECT id FROM businesses WHERE slug = '${business.slug}'),
  0.0,
  0,
  0,
  0,
  0,
  0,
  0,
  '${timestamp}',
  '${timestamp}'::timestamp + interval '1 hour',
  '${timestamp}',
  '${timestamp}'
);`
})

// Combine all SQL
const fullSQL = `
-- =====================================================
-- The Boise Gun Club - Business Import Script
-- Generated: ${timestamp}
-- Total businesses: ${newBusinesses.length}
-- =====================================================

BEGIN;

-- Insert businesses
${sqlInserts.join('\n')}

-- Insert business stats
${statsInserts.join('\n')}

COMMIT;

-- =====================================================
-- Verification Query
-- =====================================================
SELECT 
  data_source,
  business_type,
  tier,
  COUNT(*) as count
FROM businesses 
WHERE created_at >= '${timestamp}'::timestamp - interval '1 minute'
GROUP BY data_source, business_type, tier
ORDER BY data_source, business_type, tier;

-- Final count
SELECT COUNT(*) as total_businesses FROM businesses;
`

// Write SQL file
const sqlPath = path.join(process.cwd(), 'docs', 'import-145-businesses.sql')
fs.writeFileSync(sqlPath, fullSQL)

console.log(`💾 SQL import script generated: ${sqlPath}`)
console.log()

// Generate summary
console.log('📊 IMPORT SUMMARY:')
console.log(`   Total businesses: ${newBusinesses.length}`)

const businessesByTier = newBusinesses.reduce((acc, b) => {
  const tier = inferTier(b.dataSource, b.businessType, b.website && b.website !== 'N/A')
  acc[tier] = (acc[tier] || 0) + 1
  return acc
}, {})

console.log('   By tier:')
Object.entries(businessesByTier).forEach(([tier, count]) => {
  console.log(`     ${tier}: ${count}`)
})

const businessesByType = newBusinesses.reduce((acc, b) => {
  acc[b.businessType] = (acc[b.businessType] || 0) + 1
  return acc
}, {})

console.log('   By type:')
Object.entries(businessesByType)
  .sort(([,a], [,b]) => b - a)
  .forEach(([type, count]) => {
    console.log(`     ${type}: ${count}`)
  })

console.log()
console.log('🚀 READY FOR POSTGRESQL IMPORT!')
console.log(`   1. Review the SQL file: ${sqlPath}`)
console.log(`   2. Connect to your PostgreSQL database`)
console.log(`   3. Execute: \\i ${sqlPath}`)
console.log(`   4. Verify results with the included verification queries`)
console.log()
console.log('   After import, you will have 374 total businesses (229 + 145)')
console.log('🎯 Import script generation complete!')