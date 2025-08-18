'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from './badge';
import { Button } from './button';
import { UnifiedArchiveCard } from './unified-archive-card';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon, 
  StarIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftEllipsisIcon, 
  BuildingStorefrontIcon, 
  WrenchScrewdriverIcon, 
  AcademicCapIcon, 
  ShoppingBagIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { ReviewsDisplay } from './reviews-display';

// TBGC Business-Specific VendorCard - Strategic Restraint Implementation
const vendorCardVariants = cva(
  // BASE: Clean professional foundation for all tiers
  "relative overflow-hidden transition-all duration-300 bg-card text-card-foreground rounded-(--radius-lg) group hover:scale-[1.02] cursor-pointer h-full flex flex-col",
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
        gold: "relative shadow-present hover:shadow-hero bg-card border border-rusty-orange/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/8 before:via-transparent before:to-rusty-orange/6 dark:before:from-rusty-orange/12 dark:before:to-rusty-orange/10 before:rounded-none before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-rusty-orange after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-sm"
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
  
  // Navigation
  slug?: string | undefined;
  href?: string | undefined;
}

// Get business type gradient for hero section
const getBusinessTypeGradient = (businessType: string) => {
  if (businessType.includes('Range') || businessType.includes('Club')) return 'card-gradient-range'
  if (businessType.includes('Gunsmith') || businessType.includes('Custom')) return 'card-gradient-gunsmith'
  if (businessType.includes('Training') || businessType.includes('Academy')) return 'card-gradient-training-biz'
  if (businessType.includes('FFL') || businessType.includes('Dealer') || businessType.includes('Retail')) return 'card-gradient-retail'
  if (businessType.includes('Gun Club') || businessType.includes('Shooting Club')) return 'card-gradient-club'
  return 'card-gradient-directory'
}

// Get small business type icon for gradient overlay
const getBusinessTypeIcon = (businessType: string) => {
  const iconClass = "size-6 text-white/80"
  if (businessType.includes('Range') || businessType.includes('Club')) return <MapPinIcon className={iconClass} />
  if (businessType.includes('Gunsmith') || businessType.includes('Custom')) return <WrenchScrewdriverIcon className={iconClass} />
  if (businessType.includes('Training') || businessType.includes('Academy')) return <AcademicCapIcon className={iconClass} />
  if (businessType.includes('FFL') || businessType.includes('Dealer') || businessType.includes('Retail')) return <ShoppingBagIcon className={iconClass} />
  if (businessType.includes('Gun Club') || businessType.includes('Shooting Club')) return <UserGroupIcon className={iconClass} />
  return <BuildingStorefrontIcon className={iconClass} />
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
  size,
  className,
  slug,
  href,
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

  // Generate slug from business name if not provided
  const generateSlug = (name: string): string => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }
  
  // Use provided href or generate from slug
  const businessHref = href || `/directory/${slug || generateSlug(businessName)}`

  // Strategic tier-based features
  const showSponsored = tier === 'gold' && isSponsored;
  const showEnhancedFeatures = tier === 'silver' || tier === 'gold';

  return (
    <Link href={businessHref} className="block">
      <div 
        className={cn(vendorCardVariants({ tier, size }), className)}
        {...props}
      >
      {/* Quick Actions Overlay - Appears on Hover */}
      <div className="absolute top-sm right-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <div className="flex gap-xs">
          <Button 
            size="sm" 
            variant="outline"
            className="bg-card/90 backdrop-blur-sm border-border/50"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Compare functionality
            }}
            title="Compare business"
          >
            📊
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="bg-card/90 backdrop-blur-sm border-border/50"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Contact/call functionality
              if (phone) {
                window.open(`tel:${phone}`, '_self')
              }
            }}
            title="Call business"
          >
            <PhoneIcon className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      {/* Enhanced Header with Larger Business Photo */}
      <div className="mb-lg">
        {/* Boise Landscape Gradient Business Hero Section */}
        <div className={cn(
          "relative mb-sm -m-lg mt-[-24px] mx-[-24px] h-24 overflow-hidden",
          imageUrl && !imgError ? "" : getBusinessTypeGradient(businessType)
        )}>
          {imageUrl && !imgError ? (
            <Image
              src={imageUrl}
              alt={businessName}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <>
              {/* Subtle overlay for gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Small contextual icon - bottom right */}
              <div className="absolute bottom-xs right-xs">
                {getBusinessTypeIcon(businessType)}
              </div>
              
              {/* Subtle texture particles */}
              <div className="absolute top-1 right-4 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-3 right-8 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            </>
          )}
          
          {/* Enhanced tier badge overlay */}
          {tier !== 'free' && (
            <div className="absolute top-sm right-sm">
              <Badge 
                variant={tier === 'gold' ? 'elite' : tier === 'silver' ? 'nav-directory' : 'default'}
                size="sm"
                className="font-rajdhani font-bold text-xs bg-black/40 backdrop-blur-sm border-white/20 text-white"
              >
                {tier.toUpperCase()}
              </Badge>
            </div>
          )}
        </div>
        
        <div className="flex items-start gap-sm">
          {/* Compact Avatar for Fallback */}
          <Avatar className="h-12 w-12 rounded-sm flex-shrink-0">
            <AvatarFallback className="rounded-sm bg-nav-directory/10 border border-nav-directory/20 font-rajdhani font-bold text-lg text-nav-directory">
              {businessName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-xs flex-1">
            <div className="space-y-xs">
              <div className="flex items-center gap-xs">
                <h3 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight transition-colors duration-200 group-hover:text-nav-directory">
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
              <p className="text-sm text-muted-foreground leading-tight">{businessType}</p>
              
              {/* Enhanced Rating Display - Prominent Position */}
              {(rating || reviewCount) && (
                <div className="flex items-center gap-sm">
                  <div className="flex items-center gap-xs">
                    {rating && (
                      <>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={cn(
                                "size-4",
                                i < Math.floor(rating) ? "text-nav-directory fill-nav-directory" : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                        <span className="font-rajdhani font-bold text-lg text-nav-directory">
                          {rating.toFixed(1)}
                        </span>
                      </>
                    )}
                    {reviewCount && (
                      <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tier-specific badges - now below name block */}
        {(isVerified || showSponsored) && (
          <div className="flex gap-sm mt-sm">
            {isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge 
                      variant={tier === 'gold' ? 'elite' : 'default'}
                      size="sm"
                    >
                      <ShieldCheckIcon className="w-icon-xs h-icon-xs mr-xs" />
                      Verified
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{verificationStatus || 'Verified Idaho firearms business'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {showSponsored && (
              <Badge variant={tier === 'gold' ? 'elite' : 'default'} size="sm">
                <StarIcon className="w-icon-xs h-icon-xs mr-xs" />
                Sponsored
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Enhanced Description */}
      {description && (
        <p className="text-sm text-muted-foreground mb-lg line-clamp-3 leading-relaxed">
          {description}
        </p>
      )}

      {/* Enhanced Contact Information */}
      <div className="space-y-sm mb-lg bg-muted/30 p-sm rounded-xs">
        {address && (
          <div className="flex items-start gap-sm text-sm">
            <MapPinIcon className="size-4 flex-shrink-0 text-nav-directory mt-0.5" />
            <span className="text-muted-foreground leading-tight">{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-sm text-sm">
            <PhoneIcon className="size-4 flex-shrink-0 text-nav-directory" />
            <span className="font-medium text-card-foreground">{phone}</span>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-sm text-sm">
            <ClockIcon className="size-4 flex-shrink-0 text-nav-directory" />
            <span className="text-muted-foreground">{hours}</span>
          </div>
        )}
      </div>

      {/* Enhanced Reviews Section */}
      <div className="mb-lg">
        {reviewsData ? (
          <ReviewsDisplay 
            reviewsData={reviewsData}
            showHeader={false}
            variant="compact"
            autoPlay={false}
          />
        ) : googlePlaceId ? (
          <div className="bg-card border border-border/50 p-sm rounded-xs">
            <Button
              variant="ghost"
              size="sm"
              onClick={loadReviews}
              disabled={loadingReviews}
              className="p-0 h-auto font-normal text-muted-foreground hover:text-nav-directory transition-colors"
            >
              <ChatBubbleLeftEllipsisIcon className="size-4 mr-xs text-nav-directory" />
              {loadingReviews ? 'Loading reviews...' : 'View customer reviews'}
            </Button>
          </div>
        ) : (
          <div className="bg-muted/20 p-sm rounded-xs border border-dashed border-muted-foreground/20">
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


      {/* Enhanced Action Buttons */}
      <div className="flex gap-xs pt-sm">
        <Button 
          size="sm" 
          variant="outline"
          className="flex-1 border-nav-directory/30 text-nav-directory hover:bg-nav-directory hover:text-white hover:border-nav-directory font-rajdhani font-bold transition-all duration-300"
          animationType="arrow"
        >
          View Details
        </Button>
        {showEnhancedFeatures && website && (
          <Button 
            size="sm" 
            variant="outline"
            className="flex-shrink-0 border-nav-directory/30 text-nav-directory hover:bg-nav-directory hover:text-white hover:border-nav-directory transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(website, '_blank', 'noopener,noreferrer')
            }}
            title={`Visit ${businessName}'s website (opens in new tab)`}
          >
            <GlobeAltIcon className="size-4" />
          </Button>
        )}
      </div>
      </div>
    </Link>
  );
}

export { vendorCardVariants };