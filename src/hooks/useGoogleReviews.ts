'use client'

import { useState, useEffect } from 'react'
import { ProcessedReviewData } from '@/lib/google-reviews-service'

interface UseGoogleReviewsOptions {
  enabled?: boolean
  refetchOnMount?: boolean
}

interface UseGoogleReviewsReturn {
  data: ProcessedReviewData | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useGoogleReviews(
  businessName: string,
  location: string = 'Idaho',
  options: UseGoogleReviewsOptions = {}
): UseGoogleReviewsReturn {
  const { enabled = true, refetchOnMount = true } = options
  
  const [data, setData] = useState<ProcessedReviewData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReviews = async () => {
    if (!businessName || !enabled) return

    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        businessName,
        location
      })

      const response = await fetch(`/api/reviews?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const reviewsData: ProcessedReviewData = await response.json()
      setData(reviewsData)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch reviews'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (refetchOnMount && enabled && businessName) {
      fetchReviews()
    }
  }, [businessName, location, enabled, refetchOnMount])

  return {
    data,
    loading,
    error,
    refetch: fetchReviews
  }
}