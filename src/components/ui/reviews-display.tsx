'use client'

import React from 'react'
import { TestimonialCarousel, type TestimonialCarouselProps } from './testimonial-carousel'
import { Badge } from './badge'
import { Shield } from 'lucide-react'

interface GoogleReview {
  id: string
  author: string
  authorAvatar?: string
  rating: number
  date: string
  content: string
  isLocalGuide: boolean
  likes?: number
  response?: {
    author: string
    date: string
    content: string
  }
}

interface ReviewsData {
  businessName: string
  placeId: string
  averageRating?: number
  totalReviews?: number
  reviews: GoogleReview[]
  lastUpdated: string
}

interface ReviewsDisplayProps extends Omit<TestimonialCarouselProps, 'testimonials'> {
  reviewsData: ReviewsData
  showHeader?: boolean
}

// Transform Google Reviews to testimonial format for carousel
function transformReviewsToTestimonials(reviews: GoogleReview[]) {
  return reviews.map(review => ({
    name: review.author,
    role: review.isLocalGuide ? 'Local Guide' : 'Customer',
    content: review.content,
    rating: review.rating,
    avatar: review.authorAvatar,
    company: review.isLocalGuide ? 'Google Local Guide' : undefined
  }))
}

export function ReviewsDisplay({
  reviewsData,
  showHeader = true,
  variant = "default",
  autoPlay = false, // Don't auto-advance reviews by default
  ...props
}: ReviewsDisplayProps) {
  
  if (!reviewsData.reviews.length) {
    return (
      <div className="text-center py-lg">
        <p className="text-muted-foreground">No reviews available yet.</p>
        <p className="text-sm text-muted-foreground mt-xs">Be the first to leave a review!</p>
      </div>
    )
  }

  const testimonials = transformReviewsToTestimonials(reviewsData.reviews)

  return (
    <div className="space-y-base">
      {showHeader && (
        <div className="text-center space-y-xs">
          <div className="flex items-center justify-center gap-xs">
            <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
              Customer Reviews
            </h3>
            {reviewsData.averageRating && (
              <div className="flex items-center gap-micro ml-sm">
                <span className="font-rajdhani text-2xl font-bold text-warning-amber">
                  {reviewsData.averageRating.toFixed(1)}
                </span>
                <div className="text-xs text-muted-foreground">
                  ({reviewsData.totalReviews} reviews)
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-center gap-xs">
            <Badge variant="secondary" size="sm">
              <Shield className="size-3 mr-xs" />
              Verified Google Reviews
            </Badge>
            <span className="text-xs text-muted-foreground">
              Updated {reviewsData.lastUpdated}
            </span>
          </div>
        </div>
      )}
      
      <TestimonialCarousel
        testimonials={testimonials}
        variant={variant}
        autoPlay={autoPlay}
        {...props}
      />
    </div>
  )
}