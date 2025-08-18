import { NextRequest, NextResponse } from 'next/server'
import { fetchGoogleReviews } from '@/lib/google-reviews-service'
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
    
    // Fetch reviews using existing service
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

// Handle GET requests with query params for Google Reviews service
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const businessName = searchParams.get('businessName')
    const location = searchParams.get('location') || 'Idaho'
    
    if (!businessName) {
      return NextResponse.json(
        { error: 'businessName query parameter is required' },
        { status: 400 }
      )
    }
    
    // Use Google Reviews service for business directory pages
    const reviewsData = await fetchGoogleReviews(businessName, location)
    
    return NextResponse.json(reviewsData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800', // 1 day cache, 7 day stale
      }
    })
    
  } catch (error) {
    console.error('Google Reviews API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Google reviews' },
      { status: 500 }
    )
  }
}