'use client'

import { useState, useEffect } from 'react'
import { fetchGoogleReviews, fetchMultipleBusinessReviews, type ProcessedReviewData } from '@/lib/google-reviews-service'

interface UseBusinessReviewsReturn {
  reviews: ProcessedReviewData | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useBusinessReviews(businessName: string, location: string = "Idaho"): UseBusinessReviewsReturn {
  const [reviews, setReviews] = useState<ProcessedReviewData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchReviews = async () => {
    if (!businessName) return
    
    try {
      setLoading(true)
      setError(null)
      const reviewData = await fetchGoogleReviews(businessName, location)
      setReviews(reviewData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch reviews')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [businessName, location])

  return {
    reviews,
    loading,
    error,
    refetch: fetchReviews
  }
}

interface UseMultipleBusinessReviewsReturn {
  reviewsMap: Map<string, ProcessedReviewData>
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useMultipleBusinessReviews(
  businesses: Array<{name: string, location?: string}>
): UseMultipleBusinessReviewsReturn {
  const [reviewsMap, setReviewsMap] = useState<Map<string, ProcessedReviewData>>(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAllReviews = async () => {
    if (!businesses.length) return
    
    try {
      setLoading(true)
      setError(null)
      const reviewsData = await fetchMultipleBusinessReviews(businesses)
      
      const newMap = new Map<string, ProcessedReviewData>()
      reviewsData.forEach((review, index) => {
        const businessKey = businesses[index].name.toLowerCase().replace(/[^a-z0-9]/g, '_')
        newMap.set(businessKey, review)
      })
      
      setReviewsMap(newMap)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch reviews')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllReviews()
  }, [businesses.length]) // Only re-run if the number of businesses changes

  return {
    reviewsMap,
    loading,
    error,
    refetch: fetchAllReviews
  }
}

// Helper hook to get reviews for a specific business from the map
export function useBusinessReviewFromMap(
  reviewsMap: Map<string, ProcessedReviewData>,
  businessName: string
): ProcessedReviewData | null {
  const businessKey = businessName.toLowerCase().replace(/[^a-z0-9]/g, '_')
  return reviewsMap.get(businessKey) || null
}