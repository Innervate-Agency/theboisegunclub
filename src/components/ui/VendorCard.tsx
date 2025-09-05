'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from './badge';
import { Button } from './button';
import { UnifiedArchiveCard } from './unified-archive-card';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { AcademicCapIcon, BuildingStorefrontIcon, BusinessTypeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon, GlobeAltIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon, ShoppingBagIcon, StarIcon, UserGroupIcon, ViewfinderCircleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { ReviewsDisplay } from './reviews-display';

// TBGC Business-Specific VendorCard - Strategic Restraint Implementation
const vendorCardVariants = cva(
  // BASE: Clean professional foundation for all tiers - mobile-optimized
  "relative overflow-hidden transition-all duration-300 bg-card text-card-foreground rounded-(--radius-lg) group hover:scale-[1.02] cursor-pointer h-full flex flex-col card-mobile touch-target",
  {
    variants: {
      tier: {
        // FREE: Clean baseline - foundational presence
        free: "shadow-present hover:shadow-hero tactical-underline-base tactical-underline-directory",
        
        // COPPER: Enhanced copper presence - premium depth with tactical warmth
        copper: "shadow-present hover:shadow-hero bg-rusty-orange/[0.02] hover:bg-rusty-orange/[0.03] tactical-underline-base tactical-underline-fire",
        
        // SILVER: Professional prominence with sophisticated glassmorphism
        silver: "relative shadow-present hover:shadow-hero bg-gradient-to-br from-card/98 via-card/95 to-card/98 before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-blue/6 before:via-transparent before:to-scope-blue/4 dark:before:from-slate-blue/8 dark:before:to-scope-blue/6 before:rounded-none before:pointer-events-none tactical-underline-base tactical-underline-directory",
        
        // GOLD: Hero-level commanding presence with premium tactical depth
        gold: "relative shadow-present hover:shadow-hero bg-card border border-rusty-orange/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/8 before:via-transparent before:to-rusty-orange/6 dark:before:from-rusty-orange/12 dark:before:to-rusty-orange/10 before:rounded-none before:pointer-events-none tactical-underline-base tactical-underline-premium"
      },
      size: {
        sm: "p-mobile-sm sm:p-base",           // Mobile-first responsive padding
        md: "p-mobile-md sm:p-md",             // Mobile-first responsive padding
        lg: "p-mobile-lg sm:p-lg"              // Mobile-first responsive padding
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
  if (businessType.includes('Range') || businessType.includes('Club')) return <ViewfinderCircleIcon className={iconClass} />
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
  // Generate slug from business name if not provided
  const generateSlug = (name: string): string => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }
  
  // Use provided href or generate from slug
  const businessHref = href || `/directory/${slug || generateSlug(businessName)}`

  return (
    <Link href={businessHref} className="block">
      <div 
        className={cn(
          "transition-all duration-300 group relative overflow-hidden cursor-pointer rounded-xs",
          "bg-card text-card-foreground border border-border",
          "shadow-ghost hover:shadow-present",
          "tactical-underline-base tactical-underline-directory",
          className
        )}
        {...props}
      >
      
      {/* Tactical Hero Section - Matching EventCard */}
      <div className={cn(
        "relative mb-lg -m-lg mt-[-24px] mx-[-24px] h-32 overflow-hidden border-b border-white/10",
        getBusinessTypeGradient(businessType)
      )}>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Tactical Action Buttons - top right */}
        <div className="absolute top-sm right-sm flex gap-xs">
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-directory hover:border-nav-directory transition-all duration-200"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (phone) {
                window.open(`tel:${phone}`, '_self')
              }
            }}
            title="Call business"
          >
            <PhoneIcon className="h-4 w-4 text-white" />
          </button>
          
          {website && (
            <button
              className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-directory hover:border-nav-directory transition-all duration-200"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(website, '_blank', 'noopener,noreferrer')
              }}
              title="Visit website"
            >
              <GlobeAltIcon className="h-4 w-4 text-white" />
            </button>
          )}
        </div>
        
        {/* Tier badge overlay */}
        {tier !== 'free' && (
          <div className="absolute top-sm left-sm">
            <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
              <div className="text-center">
                <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
                  {tier}
                </div>
                <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                  Member
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Small contextual icon */}
        <div className="absolute bottom-xs right-xs">
          {getBusinessTypeIcon(businessType)}
        </div>
        
        {/* Subtle texture particles */}
        <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="space-y-md">
        {/* Header - Matching EventCard Typography */}
        <div className="space-y-sm">
          <div className="space-y-0">
            <h2 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-directory transition-colors duration-200">
              {businessName}
            </h2>
            <h3 className="font-noto-serif text-base text-muted-foreground leading-tight">
              {businessType} • {address?.split(',')[0] || 'Idaho'}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description || `Professional ${businessType.toLowerCase()} serving the Idaho firearms community.`}
        </p>

        {/* Smart Badges - Verification and Specialties */}
        <div className="flex flex-wrap gap-xs">
          {isVerified && (
            <Badge variant="status-info" size="sm">
              <ShieldCheckIcon className="w-3 h-3 mr-xs" />
              Verified
            </Badge>
          )}
          {tier === 'gold' && isSponsored && (
            <Badge variant="default" size="sm">
              <StarIcon className="w-3 h-3 mr-xs" />
              Sponsored
            </Badge>
          )}
          {specialties.slice(0, 2).map((specialty, index) => (
            <Badge key={index} variant="outline" size="sm">
              {specialty}
            </Badge>
          ))}
        </div>

        {/* InformationCircleIcon Grid - Matching EventCard */}
        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
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
          {(rating || reviewCount) && (
            <div className="flex items-center gap-sm text-sm">
              <StarIcon className="size-4 flex-shrink-0 text-nav-directory" />
              <span className="font-medium text-card-foreground">
                {rating ? `${rating.toFixed(1)} stars` : 'Not rated'}
                {reviewCount && ` (${reviewCount} reviews)`}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button - Matching EventCard */}
        <div className="pt-sm">
          <Button 
            size="sm"
            variant="outline"
            className="w-full border-nav-directory/30 text-nav-directory group-hover:bg-nav-directory group-hover:text-white group-hover:border-nav-directory transition-all duration-300 font-rajdhani font-bold" 
            animationType="arrow"
          >
            View Details
          </Button>
        </div>
      </div>
      </div>
    </Link>
  );
}

export { vendorCardVariants };