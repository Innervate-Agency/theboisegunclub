'use client'

import React from 'react'
import { Star, Quote, Clock } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useBusinessReviews } from '@/hooks/useBusinessReviews'
import { type ProcessedReviewData } from '@/lib/google-reviews-service'

interface BusinessReviewsDisplayProps {
  businessName: string
  location?: string
  showHeader?: boolean
  maxReviews?: number
  compact?: boolean
  className?: string
}

export function BusinessReviewsDisplay({ 
  businessName, 
  location = "Idaho",
  showHeader = true,
  maxReviews = 3,
  compact = false,
  className = ""
}: BusinessReviewsDisplayProps) {
  const { reviews, loading, error } = useBusinessReviews(businessName, location)

  if (loading) {
    return (
      <div className={`space-y-sm ${className}`}>
        {showHeader && (
          <div className="flex items-center gap-sm">
            <div className="h-4 w-20 bg-muted animate-pulse rounded-xs" />
            <div className="h-4 w-16 bg-muted animate-pulse rounded-xs" />
          </div>
        )}
        <div className="space-y-xs">
          {Array.from({ length: maxReviews }).map((_, i) => (
            <div key={i} className="p-sm bg-muted/50 rounded-xs animate-pulse">
              <div className="space-y-xs">
                <div className="h-3 w-3/4 bg-muted rounded-xs" />
                <div className="h-3 w-1/2 bg-muted rounded-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error || !reviews) {
    return null // Gracefully hide if no reviews available
  }

  const displayReviews = reviews.recentReviews.slice(0, maxReviews)

  return (
    <div className={`space-y-sm ${className}`}>
      {showHeader && (
        <div className="flex items-center gap-sm">
          <div className="flex items-center gap-xs">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(reviews.overallRating)
                      ? 'text-warning-amber fill-warning-amber'
                      : 'text-muted-foreground'
                  }`}
                  weight="fill"
                />
              ))}
            </div>
            <span className="font-rajdhani font-bold text-heading-sm">
              {reviews.overallRating.toFixed(1)}
            </span>
          </div>
          <Badge variant="outline" className="text-xs">
            {reviews.totalReviews} reviews
          </Badge>
        </div>
      )}
      
      <div className="space-y-xs">
        {displayReviews.map((review, index) => (
          <ReviewCard 
            key={index} 
            review={review} 
            compact={compact}
          />
        ))}
      </div>
      
      {reviews.lastUpdated && (
        <p className="text-xs text-muted-foreground">
          <Clock className="inline h-3 w-3 mr-xs" />
          Last updated: {reviews.lastUpdated}
        </p>
      )}
    </div>
  )
}

interface ReviewCardProps {
  review: ProcessedReviewData['recentReviews'][0]
  compact?: boolean
}

function ReviewCard({ review, compact }: ReviewCardProps) {
  if (compact) {
    return (
      <div className="p-sm bg-muted/30 rounded-xs border border-border">
        <div className="flex items-start gap-xs">
          <div className="flex items-center gap-xs flex-shrink-0">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < review.rating
                      ? 'text-warning-amber fill-warning-amber'
                      : 'text-muted-foreground'
                  }`}
                  weight="fill"
                />
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground line-clamp-2">
              "{review.review}"
            </p>
            <div className="flex items-center gap-xs mt-xs">
              <span className="text-xs font-medium text-card-foreground">
                {review.username}
              </span>
              <span className="text-xs text-muted-foreground">
                {review.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className="shadow-whisper">
      <CardContent className="p-sm">
        <div className="space-y-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <span className="font-rajdhani font-medium text-heading-sm text-card-foreground">
                {review.username}
              </span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < review.rating
                        ? 'text-warning-amber fill-warning-amber'
                        : 'text-muted-foreground'
                    }`}
                    weight="fill"
                  />
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">
              {review.date}
            </span>
          </div>
          
          <div className="relative">
            <Quote className="absolute top-0 left-0 h-4 w-4 text-muted-foreground opacity-30" />
            <p className="text-sm text-muted-foreground pl-lg leading-relaxed">
              {review.review}
            </p>
          </div>
          
          {review.ownerResponse && (
            <div className="mt-sm p-xs bg-muted/50 rounded-xs border-l-2 border-slate-blue">
              <div className="flex items-center gap-xs mb-xs">
                <Badge variant="slate-blue" size="sm" className="text-xs">
                  Owner Response
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {review.ownerResponse.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {review.ownerResponse.text}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Alternative compact version for cards and lists
export function BusinessRatingBadge({ 
  businessName, 
  location = "Idaho",
  showCount = true,
  className = ""
}: {
  businessName: string
  location?: string
  showCount?: boolean
  className?: string
}) {
  const { reviews, loading } = useBusinessReviews(businessName, location)

  if (loading) {
    return (
      <div className={`flex items-center gap-xs ${className}`}>
        <div className="h-3 w-16 bg-muted animate-pulse rounded-xs" />
      </div>
    )
  }

  if (!reviews || reviews.overallRating === 0) {
    return null
  }

  return (
    <div className={`flex items-center gap-xs ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < Math.floor(reviews.overallRating)
                ? 'text-warning-amber fill-warning-amber'
                : 'text-muted-foreground'
            }`}
            weight="fill"
          />
        ))}
      </div>
      <span className="text-xs font-medium text-card-foreground">
        {reviews.overallRating.toFixed(1)}
      </span>
      {showCount && (
        <span className="text-xs text-muted-foreground">
          ({reviews.totalReviews})
        </span>
      )}
    </div>
  )
}