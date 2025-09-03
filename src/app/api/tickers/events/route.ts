import { NextRequest, NextResponse } from 'next/server'
import { getUpcomingEvents } from '@/lib/comprehensive-events-data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '8')
    
    // Get upcoming events from comprehensive dataset
    const upcomingEvents = getUpcomingEvents()
    
    // Transform for ticker format
    const tickerEvents = upcomingEvents.slice(0, limit).map(event => ({
      title: event.title,
      date: event.date,
      location: event.location,
      eventType: event.eventType,
      price: event.price,
      featured: event.featured,
      slug: event.slug
    }))
    
    return NextResponse.json({
      success: true,
      data: tickerEvents,
      count: tickerEvents.length,
      lastUpdated: new Date().toISOString()
    })
    
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events ticker data',
        data: []
      },
      { status: 500 }
    )
  }
}