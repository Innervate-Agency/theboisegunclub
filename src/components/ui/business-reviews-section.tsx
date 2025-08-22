'use client'

import * as React from 'react'
import { StarIcon } from '@heroicons/react/24/outline';
import { useGoogleReviews } from '@/hooks/useGoogleReviews'

interface BusinessReviewsSectionProps {
  businessName: string
  city: string
  state: string
}

export function BusinessReviewsSection({ businessName, city, state }: BusinessReviewsSectionProps) {
  const { data: reviewsData, loading: loadingReviews, error: reviewsError } = useGoogleReviews(
    businessName,
    `${city}, ${state}`
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
      {/* Left Column: Google Reviews */}
      <div className="space-y-base">
        <div className="flex items-center gap-base">
          <h3 className="font-rajdhani text-2xl font-bold text-foreground">Customer Reviews</h3>
          {reviewsData && (
            <div className="flex items-center gap-xs">
              <div className="flex items-center gap-xs">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(reviewsData.overallRating)
                        ? 'text-rusty-orange fill-current'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-body-sm font-medium">{reviewsData.overallRating}</span>
              <span className="text-body-sm text-muted-foreground">({reviewsData.totalReviews} reviews)</span>
            </div>
          )}
        </div>

        {loadingReviews ? (
          <div className="space-y-base">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card p-base rounded-none border border-border/30 animate-pulse">
                <div className="space-y-sm">
                  <div className="flex items-center gap-base">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-24 h-4 bg-muted rounded mb-xs"></div>
                      <div className="w-16 h-3 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <div className="w-full h-3 bg-muted rounded"></div>
                    <div className="w-3/4 h-3 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : reviewsError ? (
          <div className="bg-card p-base rounded-none border border-border/30">
            <p className="text-body-sm text-muted-foreground">
              Unable to load reviews at this time. Please check back later.
            </p>
          </div>
        ) : reviewsData && reviewsData.recentReviews.length > 0 ? (
          <div className="space-y-base">
            {reviewsData.recentReviews.slice(0, 4).map((review: { author: string; rating: number; text: string; date: string }, index: number) => (
              <div key={index} className="bg-card p-base rounded-none border border-border/30 shadow-whisper">
                <div className="space-y-sm">
                  {/* Review Header */}
                  <div className="flex items-center gap-base">
                    <div className="w-8 h-8 bg-nav-directory text-nav-directory-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {review.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-body-sm">{review.username}</div>
                      <div className="flex items-center gap-xs">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating
                                  ? 'text-rusty-orange fill-current'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {review.review}
                  </p>
                  
                  {/* Owner Response */}
                  {review.ownerResponse && (
                    <div className="mt-sm p-sm bg-muted/50 rounded-none border-l-2 border-nav-directory/30">
                      <div className="text-xs font-medium text-nav-directory mb-xs">Response from {businessName}</div>
                      <p className="text-xs text-muted-foreground">{review.ownerResponse.text}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* View More Reviews Link */}
            <div className="pt-base">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(businessName + ' ' + city + ' ' + state)}&tbm=lcl#lrd=0x0:0x0,1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs text-nav-directory hover:underline font-medium"
              >
                View all {reviewsData.totalReviews} reviews on Google →
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-card p-base rounded-none border border-border/30">
            <p className="text-body-sm text-muted-foreground">No reviews available at this time.</p>
          </div>
        )}
      </div>

      {/* Right Column: Empty for now */}
      <div className="space-y-base">
        <h3 className="font-rajdhani text-2xl font-bold text-foreground">Community Insights</h3>
        <div className="bg-card p-base rounded-none border border-border/30">
          <p className="text-body-sm text-muted-foreground">
            Community-contributed insights and reviews coming soon. This section will feature verified customer experiences and local community feedback.
          </p>
        </div>
      </div>
    </div>
  )
}