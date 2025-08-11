'use client'

import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Button } from './button';
import Image from 'next/image';
import { MapPin, Phone, Clock, Star, Globe, TrendingUp, Shield} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

// TBGC Business-Specific VendorCard - Strategic Restraint Implementation
const vendorCardVariants = cva(
  // BASE: Clean professional foundation for all tiers
  "relative overflow-hidden transition-all duration-300 bg-card text-card-foreground rounded-(--radius-lg) group",
  {
    variants: {
      tier: {
        // FREE: Clean baseline - foundational presence
        free: "shadow-present hover:shadow-elevated",
        
        // COPPER: Enhanced copper presence - premium depth with tactical warmth
        copper: "shadow-elevated hover:shadow-prominent bg-rusty-orange/[0.02] hover:bg-rusty-orange/[0.03] relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-walnut-stock after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // SILVER: Professional prominence with sophisticated glassmorphism
        silver: "relative shadow-prominent hover:shadow-commanding bg-gradient-to-br from-card/98 via-card/95 to-card/98 before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-blue/6 before:via-transparent before:to-scope-blue/4 dark:before:from-slate-blue/8 dark:before:to-scope-blue/6 before:rounded-none before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-warm-stone after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-lg",
        
        // GOLD: Hero-level commanding presence with premium tactical depth
        gold: "relative shadow-commanding hover:shadow-hero bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-warm-stone/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-rusty-orange/14 dark:before:to-rusty-orange/12 before:rounded-none before:pointer-events-none after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-rusty-orange after:transition-all after:duration-300 after:ease-out after:z-10 hover:after:w-full after:rounded-b-lg"
      },
      size: {
        sm: "p-base",           // 16px - compact cards
        md: "p-(--card-padding)",         // 24px - standard Stripe card padding
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
  
  // Social Proof
  rating?: number | undefined;
  reviewCount?: number | undefined;
  isVerified?: boolean | undefined;
  
  // Tier-Specific Features
  tier: 'free' | 'copper' | 'silver' | 'gold';
  specialties?: string[] | undefined;
  isSponsored?: boolean | undefined;
  monthlyLeads?: number | undefined;
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
  tier,
  specialties = [],
  isSponsored,
  monthlyLeads,
  size,
  className,
  ...props
}: VendorCardProps) {
  const [imgError, setImgError] = useState(false);

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
      <div className="mb-(--spacing-md)">
        <div className="flex items-center gap-sm mb-(--spacing-xs)">
          {/* Business logo/image */}
          <Avatar className="h-(--icon-3xl) w-(--icon-3xl) rounded-(--radius-lg) flex-shrink-0">
            {imageUrl && !imgError ? (
              <AvatarImage
                src={imageUrl}
                alt={businessName}
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : null}
            <AvatarFallback className="rounded-(--radius-lg) bg-muted font-rajdhani font-bold text-heading-sm text-muted-foreground">
              {businessName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-(--spacing-micro) flex-1">
            <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground leading-tight transition-colors duration-200 group-hover:text-rusty-orange">
              {businessName}
            </h3>
            <p className="text-body-sm text-muted-foreground leading-tight">{businessType}</p>
          </div>
        </div>

        {/* Tier-specific badges - now below name block */}
        {(isVerified || showSponsored) && (
          <div className="flex gap-sm ml-[calc(3rem+var(--spacing-sm))]">
            {isVerified && (
              <Badge 
                variant={tier === 'gold' ? 'elite' : 'default'}
                size="sm"
              >
                <Shield className="w-icon-xs h-icon-xs mr-(--spacing-xs)" />
                Verified
              </Badge>
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
        <p className="text-body-sm text-muted-foreground mb-(--spacing-md) line-clamp-2">
          {description}
        </p>
      )}

      {/* Contact Information */}
      <div className="space-y-(--spacing-xs) mb-(--spacing-md)">
        {address && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <MapPin className="w-icon-sm h-icon-sm flex-shrink-0" />
            <span className="truncate">{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <Phone className="w-icon-sm h-icon-sm flex-shrink-0" />
            <span>{phone}</span>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
            <Clock className="w-icon-sm h-icon-sm flex-shrink-0" />
            <span>{hours}</span>
          </div>
        )}
      </div>

      {/* Rating */}
      {rating && reviewCount && (
        <div className="flex items-center gap-xs mb-(--spacing-md)">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "w-icon-sm h-icon-sm",
                  star <= rating 
                    ? "fill-rusty-orange text-rusty-orange" 
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-body-sm text-muted-foreground">
            {rating} ({reviewCount} reviews)
          </span>
        </div>
      )}

      {/* Specialties */}
      {specialties.length > 0 && (
        <div className="flex flex-wrap gap-(--spacing-tiny) mb-(--spacing-md)">
          {specialties.slice(0, 3).map((specialty, index) => (
            <Badge 
              key={index} 
              variant={tier === 'gold' ? 'elite' : tier === 'silver' ? 'info' : 'default'} 
              size="sm"
            >
              {specialty}
            </Badge>
          ))}
          {specialties.length > 3 && (
            <Badge 
              variant={tier === 'gold' ? 'elite' : tier === 'silver' ? 'info' : 'default'} 
              size="sm"
            >
              +{specialties.length - 3} more
            </Badge>
          )}
        </div>
      )}

      {/* Enhanced features for Silver/Gold tiers */}
      {showLeads && (
        <div className="flex items-center gap-xs mb-(--spacing-md) p-xs bg-rifling-green/10 rounded-(--radius-md)">
          <TrendingUp className="w-icon-sm h-icon-sm text-rifling-green" />
          <span className="text-body-sm text-rifling-green font-medium">
            {monthlyLeads} leads this month
          </span>
        </div>
      )}

      {/* Action buttons - flat inside card container */}
      <div className="flex gap-xs pt-(--spacing-sm)">
        <Button 
          size="sm" 
          variant="solid-accent"
          className="flex-1 bg-card-surface text-card-foreground border-0 shadow-none hover:bg-card-surface/80 group-hover:!bg-rusty-orange group-hover:!text-primary transition-all duration-300"
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
              <Globe className="w-icon-sm h-icon-sm" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export { vendorCardVariants };