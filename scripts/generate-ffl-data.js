#!/usr/bin/env node

/**
 * Generate FFL data from CSV files for static import
 * This script reads the CSVs and generates a TypeScript file
 * that can be imported without Node.js fs dependencies
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

// Generate URL-friendly slug from business name
function generateSlug(businessName) {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60)
}

// Determine business type based on name patterns
function inferBusinessType(businessName) {
  const name = businessName.toLowerCase()
  
  if (name.includes('range') || name.includes('shooting')) return 'Shooting Range'
  if (name.includes('gunsmith') || name.includes('custom')) return 'Gunsmith'
  if (name.includes('tactical') || name.includes('defense')) return 'Tactical/Training'
  if (name.includes('pawn')) return 'Pawn Shop'
  if (name.includes('sporting') || name.includes('outdoor')) return 'Sporting Goods'
  if (name.includes('armory') || name.includes('arsenal')) return 'Gun Store'
  if (name.includes('supply') || name.includes('ammo')) return 'Ammunition/Supplies'
  if (name.includes('club')) return 'Gun Club'
  
  return 'FFL Dealer'
}

// Generate business description
function generateDescription(businessName, businessType, city) {
  return `${businessName} is a licensed ${businessType} serving ${city} and the surrounding Treasure Valley area. ` +
    `As a verified Federal Firearms License holder, we provide professional firearms sales, transfers, and related services ` +
    `to the Idaho shooting community.`
}

// Infer services based on business type
function inferServices(businessType) {
  const baseServices = ['FFL Transfers', 'Background Checks', 'Firearm Sales']
  
  switch (businessType) {
    case 'Shooting Range':
      return [...baseServices, 'Range Rental', 'Safety Courses', 'Equipment Rental', 'Target Sales']
    case 'Gunsmith':
      return [...baseServices, 'Firearm Repair', 'Custom Work', 'Restoration', 'Barrel Threading', 'Cerakote']
    case 'Tactical/Training':
      return [...baseServices, 'Training Courses', 'CCW Classes', 'Tactical Gear', 'Private Instruction']
    case 'Sporting Goods':
      return [...baseServices, 'Hunting Supplies', 'Outdoor Gear', 'Optics', 'Camping Equipment']
    case 'Gun Store':
      return [...baseServices, 'New Firearms', 'Used Firearms', 'Consignment', 'Special Orders', 'Layaway']
    default:
      return baseServices
  }
}

// Process CSV files
console.log('🔄 Processing FFL CSV files...')

const businesses = []
const processedSlugs = new Set()

// Load retail FFLs
const retailPath = path.join(process.cwd(), 'docs', 'ffl_boise_retail_150.csv')
if (fs.existsSync(retailPath)) {
  const retailData = fs.readFileSync(retailPath, 'utf-8')
  const retailLines = retailData.split('\n').filter(line => line.trim())
  
  console.log(`📋 Processing ${retailLines.length - 1} retail FFLs...`)
  
  for (let i = 1; i < retailLines.length; i++) {
    const fields = parseCSVLine(retailLines[i])
    if (fields.length >= 7) {
      const [licenseName, businessName, street, city, state, zip, phone] = fields
      
      const actualBusinessName = businessName || licenseName
      const slug = generateSlug(actualBusinessName)
      
      if (processedSlugs.has(slug)) continue // Skip duplicates
      processedSlugs.add(slug)
      
      const businessType = inferBusinessType(actualBusinessName)
      
      const business = {
        slug,
        businessName: actualBusinessName,
        licenseName,
        address: street,
        city,
        state,
        zip,
        fullAddress: `${street}, ${city}, ${state} ${zip}`,
        phone: phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
        businessType,
        description: generateDescription(actualBusinessName, businessType, city),
        hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed',
        services: inferServices(businessType),
        specialties: ['Federal Firearms License', 'Licensed Dealer', 'ATF Compliant'],
        certifications: ['FFL', 'ATF Licensed'],
        isVerified: true,
        verificationStatus: 'Verified FFL Dealer',
        tier: 'free',
        isSponsored: false,
        isFeatured: i <= 10,
        dataSource: 'retail',
        serviceArea: [city, 'Treasure Valley', 'Southwest Idaho'],
        paymentMethods: ['Cash', 'Credit Card', 'Debit Card'],
        images: [`/images/businesses/placeholder-${businessType.toLowerCase().replace(/[^a-z]/g, '')}.jpg`]
      }
      
      businesses.push(business)
    }
  }
}

// Load candidate FFLs
const candidatePath = path.join(process.cwd(), 'docs', 'ffl_candidates_top150.csv')
if (fs.existsSync(candidatePath)) {
  const candidateData = fs.readFileSync(candidatePath, 'utf-8')
  const candidateLines = candidateData.split('\n').filter(line => line.trim())
  
  console.log(`📋 Processing ${candidateLines.length - 1} candidate FFLs...`)
  
  for (let i = 1; i < candidateLines.length; i++) {
    const fields = parseCSVLine(candidateLines[i])
    if (fields.length >= 7) {
      const [licenseName, businessName, street, city, state, zip, phone] = fields
      
      const actualBusinessName = businessName || licenseName
      const slug = generateSlug(actualBusinessName)
      
      if (processedSlugs.has(slug)) continue // Skip duplicates
      processedSlugs.add(slug)
      
      const businessType = inferBusinessType(actualBusinessName)
      
      const business = {
        slug,
        businessName: actualBusinessName,
        licenseName,
        address: street,
        city,
        state,
        zip,
        fullAddress: `${street}, ${city}, ${state} ${zip}`,
        phone: phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
        businessType,
        description: generateDescription(actualBusinessName, businessType, city),
        hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed',
        services: inferServices(businessType),
        specialties: ['Federal Firearms License', 'Licensed Dealer', 'ATF Compliant'],
        certifications: ['FFL', 'ATF Licensed'],
        isVerified: true,
        verificationStatus: 'Verified FFL Dealer',
        tier: 'free',
        isSponsored: false,
        isFeatured: false,
        dataSource: 'candidate',
        serviceArea: [city, 'Treasure Valley', 'Southwest Idaho'],
        paymentMethods: ['Cash', 'Credit Card', 'Debit Card'],
        images: [`/images/businesses/placeholder-${businessType.toLowerCase().replace(/[^a-z]/g, '')}.jpg`]
      }
      
      businesses.push(business)
    }
  }
}

console.log(`✅ Processed ${businesses.length} unique FFLs`)

// Generate TypeScript file
const tsContent = `/**
 * Generated FFL Data - Auto-generated from CSV files
 * Generated on: ${new Date().toISOString()}
 * Total businesses: ${businesses.length}
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
  dataSource: 'retail' | 'candidate'
  serviceArea: string[]
  paymentMethods: string[]
  images: string[]
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

export const getFFLStats = () => {
  const byCity = allFFLs.reduce((acc, ffl) => {
    acc[ffl.city] = (acc[ffl.city] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byType = allFFLs.reduce((acc, ffl) => {
    acc[ffl.businessType] = (acc[ffl.businessType] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    total: allFFLs.length,
    verified: allFFLs.filter(f => f.isVerified).length,
    featured: allFFLs.filter(f => f.isFeatured).length,
    byCity,
    byType,
    dataSource: {
      retail: allFFLs.filter(f => f.dataSource === 'retail').length,
      candidate: allFFLs.filter(f => f.dataSource === 'candidate').length
    }
  }
}

export default allFFLs
`

// Write the generated file
const outputPath = path.join(process.cwd(), 'src', 'lib', 'generated-ffl-data.ts')
fs.writeFileSync(outputPath, tsContent)

console.log(`📝 Generated: ${outputPath}`)
console.log(`   Total FFLs: ${businesses.length}`)
console.log(`   Featured: ${businesses.filter(b => b.isFeatured).length}`)
console.log(`   Cities: ${new Set(businesses.map(b => b.city)).size}`)
console.log(`   Types: ${new Set(businesses.map(b => b.businessType)).size}`)
console.log('🚀 Ready for deployment!')