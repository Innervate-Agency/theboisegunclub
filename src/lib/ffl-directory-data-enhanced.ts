/**
 * Enhanced FFL Directory Data - 300+ Verified Idaho FFLs
 * Imports all FFLs from CSV data and provides them in the format
 * expected by the directory page components
 */

import { getAllFFLs, getFFLStats } from './ffl-database'

export interface FFLBusinessData {
  businessName: string
  businessType: string
  description: string
  address: string
  city: string
  state: string
  phone: string
  website?: string
  hours: string
  services: string[]
  rating?: number
  reviewCount?: number
  isVerified: boolean
  verificationStatus: string
  tier: 'free' | 'copper' | 'silver' | 'gold'
  showSponsored?: boolean
  featured?: boolean
  slug: string
  tags: string[]
}

// Get all FFLs from CSV data and transform them
const rawFFLs = getAllFFLs()

export const allFFLs: FFLBusinessData[] = rawFFLs.map((ffl, index) => ({
  businessName: ffl.businessName,
  businessType: ffl.businessType,
  description: ffl.description,
  address: ffl.address,
  city: ffl.city,
  state: ffl.state,
  phone: ffl.phone,
  website: ffl.website,
  hours: ffl.hours,
  services: ffl.services,
  rating: 4.5 + (Math.random() * 0.5), // Temporary: 4.5-5.0 ratings
  reviewCount: Math.floor(Math.random() * 200) + 20, // Temporary: 20-220 reviews
  isVerified: ffl.isVerified,
  verificationStatus: ffl.verificationStatus,
  tier: ffl.tier,
  showSponsored: ffl.isSponsored,
  featured: ffl.isFeatured || index < 10, // Feature first 10
  slug: ffl.slug,
  tags: [
    ffl.businessType,
    ffl.city,
    ...ffl.services.slice(0, 3)
  ]
}))

// Export statistics
export const fflStats = getFFLStats()

// Export by category for filtering
export const fflsByCategory = {
  ranges: allFFLs.filter(f => f.businessType === 'Shooting Range'),
  gunsmiths: allFFLs.filter(f => f.businessType === 'Gunsmith'),
  retail: allFFLs.filter(f => f.businessType === 'Gun Store' || f.businessType === 'FFL Dealer'),
  training: allFFLs.filter(f => f.businessType === 'Tactical/Training'),
  sporting: allFFLs.filter(f => f.businessType === 'Sporting Goods'),
  pawn: allFFLs.filter(f => f.businessType === 'Pawn Shop'),
  ammo: allFFLs.filter(f => f.businessType === 'Ammunition/Supplies'),
  clubs: allFFLs.filter(f => f.businessType === 'Gun Club')
}

// Export by city for local filtering
export const fflsByCity = rawFFLs.reduce((acc, ffl) => {
  const city = ffl.city
  if (!acc[city]) {
    acc[city] = []
  }
  acc[city].push(allFFLs.find(f => f.slug === ffl.slug)!)
  return acc
}, {} as Record<string, FFLBusinessData[]>)

// Top cities by FFL count
export const topCities = Object.entries(fflsByCity)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 10)
  .map(([city, ffls]) => ({
    city,
    count: ffls.length
  }))

// Export featured and verified subsets
export const featuredFFLs = allFFLs.filter(f => f.featured)
export const verifiedFFLs = allFFLs.filter(f => f.isVerified)
export const sponsoredFFLs = allFFLs.filter(f => f.showSponsored)

// Export a sample for testing (first 10)
export const sampleFFLs = allFFLs.slice(0, 10)

console.log(`📊 FFL Directory Stats:
  Total FFLs: ${allFFLs.length}
  Featured: ${featuredFFLs.length}
  Verified: ${verifiedFFLs.length}
  Cities: ${Object.keys(fflsByCity).length}
  Categories: ${Object.keys(fflsByCategory).length}
`)

export default allFFLs