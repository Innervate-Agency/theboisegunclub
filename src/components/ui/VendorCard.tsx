'use client'

import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Button } from './button';
import Image from 'next/image';
import { MapPin, Phone, Clock, Star, Globe, TrendingUp, Shield, ChatsCircle} from '@phosphor-icons/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { ReviewsDisplay } from './reviews-display';

// TBGC Business-Specific VendorCard - Strategic Restraint Implementation
const vendorCardVariants = cva(
  // BASE: Clean professional foundation for all tiers
  "relative overflow-hidden transition-all duration-300 bg-card text-card-foreground rounded-(--radius-lg) group",
  {
    variants: {
      tier: {
        // FREE: Clean baseline - foundational presence
        free: "shadow-present hover:shadow-hero",
        
        // COPPER: Enhanced copper presence - premium depth with tactical warmth
        copper: "shadow-present hover:shadow-hero bg-rusty-orange/[0.02] hover:bg-rusty-orange/[0.03] relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-walnut-stock after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm",
        
        // SILVER: Professional prominence with sophisticated glassmorphism
        silver: "relative shadow-present hover:shadow-hero bg-gradient-to-br from-card/98 via-card/95 to-card/98 before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-blue/6 before:via-transparent before:to-scope-blue/4 dark:before:from-slate-blue/8 dark:before:to-scope-blue/6 before:rounded-none before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-warm-stone after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-sm",
        
        // GOLD: Hero-level commanding presence with premium tactical depth
        gold: "relative shadow-present hover:shadow-hero mica-card before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-rusty-orange/14 dark:before:to-rusty-orange/12 before:rounded-none before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-rusty-orange after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-sm"
      },
      size: {
        sm: "p-base",           // 16px - compact cards
        md: "p-md",         // 24px - Stripe-standard card padding
        lg: "p-lg"              // 32px - spacious cards
      }
    },
    defaultVariants: {
      tier: "free",
      size: "md"
    }
  }
)

export interface VendorCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof vendorCardVariants> {
  // Business Information
  businessName: string;
  businessType: string;
  description?: string | undefined;
  imageUrl?: string | undefined;
  
  // Contact & Location  
  address?: string | undefined;
  phone?: string | undefined;
  website?: string | undefined;
  hours?: string | undefined;
  
  // Social Proof & Reviews
  rating?: number | undefined;
  reviewCount?: number | undefined;
  isVerified?: boolean | undefined;
  verificationStatus?: string | undefined;
  googlePlaceId?: string | undefined;
  
  // Tier-Specific Features
  tier: 'free' | 'copper' | 'silver' | 'gold';
  specialties?: string[] | undefined;
  isSponsored?: boolean | undefined;
  monthlyLeads?: number | undefined;
}

// Map business types to badge variants
const getBusinessBadgeVariant = (businessType: string): VariantProps<typeof Badge>["variant"] => {
    if (businessType.includes('FFL') || businessType.includes('Dealer')) return 'slate-blue';
    if (businessType.includes('Range') || businessType.includes('Club')) return 'lodgepole-green';
    if (businessType.includes('Gunsmith') || businessType.includes('Custom')) return 'warm-stone';
    if (businessType.includes('Training') || businessType.includes('Academy') || businessType.includes('Education')) return 'info-river';
    if (businessType.includes('Gun Club') || businessType.includes('Shooting Club')) return 'sagebrush-green';
    return 'default';
}

export function VendorCard({
  businessName,
  businessType,
  description,
  imageUrl,
  address,
  phone,
  website,
  hours,
  rating,
  reviewCount,
  isVerified,
  verificationStatus,
  googlePlaceId,
  tier,
  specialties = [],
  isSponsored,
  monthlyLeads,
  size,
  className,
  ...props
}: VendorCardProps) {
  const [imgError, setImgError] = useState(false)
  const [reviewsData, setReviewsData] = useState<any>(null)
  const [loadingReviews, setLoadingReviews] = useState(false)
  
  // Load reviews function
  const loadReviews = async () => {
    if (!googlePlaceId || loadingReviews) return
    
    setLoadingReviews(true)
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          placeId: googlePlaceId, 
          businessName 
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        setReviewsData(data)
      }
    } catch (error) {
      console.error('Failed to load reviews:', error)
    } finally {
      setLoadingReviews(false)
    }
  }

  // Strategic tier-based features
  const showSponsored = tier === 'gold' && isSponsored;
  const showLeads = tier === 'gold' && monthlyLeads;
  const showEnhancedFeatures = tier === 'silver' || tier === 'gold';

  return (
    <div 
      className={cn(vendorCardVariants({ tier, size }), className)}
      {...props}
    >
      {/* Header with business info */}
      <div className="mb-md">
        <div className="flex items-center gap-sm mb-xs">
          {/* Business logo/image */}
          <Avatar className="h-[var(--icon-3xl)] w-[var(--icon-3xl)] rounded-sm flex-shrink-0">
            {imageUrl && !imgError ? (
              <AvatarImage
                src={imageUrl}
                alt={businessName}
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : null}
            <AvatarFallback className="rounded-sm bg-muted font-rajdhani font-bold text-heading-sm text-muted-foreground">
              {businessName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-micro flex-1">
            <div className="flex items-center gap-xs mb-xs">
              <h3 className="font-rajdhani font-bold text-2xl md:text-3xl text-card-foreground leading-tight transition-colors duration-200 group-hover:text-rusty-orange">
                {businessName}
              </h3>
              <Badge 
                variant={getBusinessBadgeVariant(businessType)}
                size="sm"
              >
                {businessType.includes('Range') ? 'Range' :
                 businessType.includes('Gunsmith') || businessType.includes('Custom') ? 'Gunsmith' :
                 businessType.includes('Training') || businessType.includes('Academy') ? 'Training' :
                 businessType.includes('FFL') || businessType.includes('Dealer') ? 'FFL' :
                 businessType.includes('Gun Club') ? 'Club' : 'Business'}
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground leading-tight">{businessType}</p>
          </div>
        </div>

        {/* Tier-specific badges - now below name block */}
        {(isVerified || showSponsored) && (
          <div className="flex gap-sm ml-[calc(4rem+0.75rem)]">
            {isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge 
                      variant={tier === 'gold' ? 'elite' : 'default'}
                      size="sm"
                    >
                      <Shield className="w-icon-xs h-icon-xs mr-xs" weight="bold" />
                      Verified
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{verificationStatus}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {showSponsored && (
              <Badge variant={tier === 'gold' ? 'elite' : 'default'} size="sm">
                Sponsored
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-body-sm text-muted-foreground mb-md line-clamp-tiny">
          {description}
        </p>
      )}

      {/* Contact Information */}
      <div className="space-y-xs mb-md">
        {address && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <MapPin className="w-icon-sm h-icon-sm flex-shrink-0" weight="bold" />
            <span className="truncate">{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <Phone className="w-icon-sm h-icon-sm flex-shrink-0" weight="bold" />
            <span>{phone}</span>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <Clock className="w-icon-sm h-icon-sm flex-shrink-0" weight="bold" />
            <span>{hours}</span>
          </div>
        )}
      </div>

      {/* Reviews section */}
      <div className="mb-md">
        {reviewsData ? (
          <ReviewsDisplay 
            reviewsData={reviewsData}
            showHeader={false}
            variant="default"
            autoPlay={false}
          />
        ) : googlePlaceId ? (
          <div className="flex items-center gap-xs">
            <Button
              variant="ghost"
              size="sm"
              onClick={loadReviews}
              disabled={loadingReviews}
              className="p-0 h-auto font-normal text-muted-foreground hover:text-card-foreground"
            >
              <ChatsCircle className="size-4 mr-xs" weight="bold" />
              {loadingReviews ? 'Loading reviews...' : 'View customer reviews'}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-xs">
            <span className="text-sm text-muted-foreground italic">
              Reviews coming soon • Be the first to review!
            </span>
          </div>
        )}
      </div>

      {/* Specialties */}
      {specialties.length > 0 && (
        <div className="flex flex-wrap gap-tiny mb-md">
          {specialties.slice(0, 3).map((specialty, index) => (
            <Badge 
              key={index} 
              variant={tier === 'gold' ? 'foothills-purple' : tier === 'silver' ? 'info-river' : 'default'} 
              size="sm"
            >
              {specialty}
            </Badge>
          ))}
          {specialties.length > 3 && (
            <Badge 
              variant={tier === 'gold' ? 'foothills-purple' : tier === 'silver' ? 'info-river' : 'default'} 
              size="sm"
            >
              +{specialties.length - 3} more
            </Badge>
          )}
        </div>
      )}

      {/* Enhanced features for Silver/Gold tiers */}
      {showLeads && (
        <div className="flex items-center gap-xs mb-md p-xs bg-rifling-green/10 rounded-xs">
          <TrendingUp className="w-icon-sm h-icon-sm text-rifling-green" weight="bold" />
          <span className="text-body-sm text-rifling-green font-medium">
            {monthlyLeads} leads this month
          </span>
        </div>
      )}

      {/* Action buttons - flat inside card container */}
      <div className="flex gap-xs pt-sm">
        <Button 
          size="sm" 
          variant="micro"
          animationType="arrow"
          className="flex-1"
        >
          View Details
        </Button>
        {showEnhancedFeatures && website && (
          <Button 
            size="sm" 
            variant="ghost"
            className="flex-shrink-0 text-muted-foreground hover:text-card-foreground"
            asChild
          >
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              title={`Visit ${businessName}'s website (opens in new tab)`}
            >
              <Globe className="w-icon-sm h-icon-sm" weight="bold" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export { vendorCardVariants };