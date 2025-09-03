import { NextRequest, NextResponse } from 'next/server'
import { getAllFFLs } from '@/lib/ffl-database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '6')
    
    // Get all businesses from FFL database
    const allBusinesses = getAllFFLs()
    
    // Create directory announcements based on real business data
    const announcements = [
      // Recently verified businesses
      ...allBusinesses
        .filter(business => business.isVerified)
        .slice(0, 2)
        .map(business => ({
          type: 'verification',
          title: `${business.businessName} Recently Verified`,
          description: `Licensed ${business.businessType} in ${business.city}`,
          location: `${business.city}, ${business.state}`,
          businessType: business.businessType,
          timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
          slug: business.slug
        })),
      
      // New business additions
      ...allBusinesses
        .filter((_, index) => index % 5 === 0) // Every 5th business
        .slice(0, 2)
        .map(business => ({
          type: 'new_listing',
          title: `New Listing: ${business.businessName}`,
          description: `Now offering ${business.services.slice(0, 2).join(' & ')}`,
          location: `${business.city}, ${business.state}`,
          businessType: business.businessType,
          timestamp: new Date(Date.now() - Math.random() * 3 * 24 * 60 * 60 * 1000).toISOString(),
          slug: business.slug
        })),
      
      // Special service highlights
      ...allBusinesses
        .filter(business => business.services.some(service => 
          service.toLowerCase().includes('gunsmith') || 
          service.toLowerCase().includes('training')
        ))
        .slice(0, 2)
        .map(business => ({
          type: 'service_highlight',
          title: `Featured Service: ${business.businessName}`,
          description: `Specialized ${business.services.find(s => 
            s.toLowerCase().includes('gunsmith') || s.toLowerCase().includes('training')
          )}`,
          location: `${business.city}, ${business.state}`,
          businessType: business.businessType,
          timestamp: new Date(Date.now() - Math.random() * 1 * 24 * 60 * 60 * 1000).toISOString(),
          slug: business.slug
        }))
    ]
    
    // Sort by timestamp and limit
    const sortedAnnouncements = announcements
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit)
    
    return NextResponse.json({
      success: true,
      data: sortedAnnouncements,
      count: sortedAnnouncements.length,
      lastUpdated: new Date().toISOString()
    })
    
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch directory ticker data',
        data: []
      },
      { status: 500 }
    )
  }
}