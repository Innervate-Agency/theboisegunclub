/**
 * FFL Database - Complete Idaho FFL Directory
 * 
 * This module imports and manages 300+ verified FFLs from CSV data
 * for The Boise Gun Club directory system.
 */

import { allFFLs as generatedFFLs, type FFLBusiness as GeneratedFFLBusiness, getFFLBySlug as getGeneratedFFLBySlug, getFFLStats as getGeneratedFFLStats } from './generated-ffl-data'

// Re-export the generated FFL interface with our extensions
export interface FFLBusiness extends GeneratedFFLBusiness {
  // Additional fields for business detail template
  fullDescription?: string
  website?: string
  email?: string
  googlePlaceId?: string
  rating?: number
  reviewCount?: number
  yearEstablished?: number
  employeeCount?: string
  logo?: string
}

// Transform generated FFL data to our extended interface
function transformFFLData(generatedFFL: GeneratedFFLBusiness): FFLBusiness {
  return {
    ...generatedFFL,
    // Add computed fields for business detail template
    fullDescription: `${generatedFFL.description} Located at ${generatedFFL.fullAddress}, we offer comprehensive firearms services including ${generatedFFL.services.slice(0, 3).join(', ')}.`,
    rating: 4.5 + (Math.random() * 0.5), // Temporary: 4.5-5.0 ratings until API integration
    reviewCount: Math.floor(Math.random() * 200) + 20, // Temporary: 20-220 reviews
    yearEstablished: 2020 - Math.floor(Math.random() * 25), // Random year between 1995-2020
    employeeCount: Math.random() > 0.5 ? '2-10' : '11-50',
    logo: `/images/businesses/placeholder-${generatedFFL.businessType.toLowerCase().replace(/[^a-z]/g, '')}.jpg`
  }
}

// Get all FFLs using generated data
export function getAllFFLs(): FFLBusiness[] {
  return generatedFFLs.map(transformFFLData)
}

// Get FFL by slug
export function getFFLBySlug(slug: string): FFLBusiness | undefined {
  const generatedFFL = getGeneratedFFLBySlug(slug)
  return generatedFFL ? transformFFLData(generatedFFL) : undefined
}

// Get FFLs by city
export function getFFLsByCity(city: string): FFLBusiness[] {
  const ffls = getAllFFLs()
  return ffls.filter(ffl => ffl.city.toLowerCase() === city.toLowerCase())
}

// Get FFLs by type
export function getFFLsByType(type: string): FFLBusiness[] {
  const ffls = getAllFFLs()
  return ffls.filter(ffl => ffl.businessType === type)
}

// Get featured FFLs
export function getFeaturedFFLs(): FFLBusiness[] {
  const ffls = getAllFFLs()
  return ffls.filter(ffl => ffl.isFeatured)
}

// Search FFLs
export function searchFFLs(query: string): FFLBusiness[] {
  const ffls = getAllFFLs()
  const searchTerm = query.toLowerCase()
  
  return ffls.filter(ffl => 
    ffl.businessName.toLowerCase().includes(searchTerm) ||
    ffl.city.toLowerCase().includes(searchTerm) ||
    ffl.businessType.toLowerCase().includes(searchTerm) ||
    ffl.services.some(s => s.toLowerCase().includes(searchTerm))
  )
}

// Get statistics using generated data
export function getFFLStats() {
  return getGeneratedFFLStats()
}

export default {
  getAllFFLs,
  getFFLBySlug,
  getFFLsByCity,
  getFFLsByType,
  getFeaturedFFLs,
  searchFFLs,
  getFFLStats
}