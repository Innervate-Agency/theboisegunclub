import { NextRequest, NextResponse } from 'next/server'
import { fetchReviewsForBusiness } from '@/lib/reviews-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { placeId, businessName } = body
    
    // Validation
    if (!placeId || !businessName) {
      return NextResponse.json(
        { error: 'placeId and businessName are required' },
        { status: 400 }
      )
    }
    
    // Fetch reviews
    const reviewsData = await fetchReviewsForBusiness(placeId, businessName)
    
    // Return with caching headers
    return NextResponse.json(reviewsData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200', // 24h cache, 12h stale
      }
    })
    
  } catch (error) {
    console.error('Reviews API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

// Handle GET requests with query params as fallback
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const placeId = searchParams.get('placeId')
    const businessName = searchParams.get('businessName')
    
    if (!placeId || !businessName) {
      return NextResponse.json(
        { error: 'placeId and businessName query parameters are required' },
        { status: 400 }
      )
    }
    
    const reviewsData = await fetchReviewsForBusiness(placeId, businessName)
    
    return NextResponse.json(reviewsData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      }
    })
    
  } catch (error) {
    console.error('Reviews API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}