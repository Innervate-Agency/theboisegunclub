'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from './badge'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { BuildingStorefrontIcon, CalendarDaysIcon, CategoryIcon, CursorArrowRaysIcon, MapPinIcon, PhoneIcon, ArrowTrendingDownIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';

interface BuySellDeal {
  title: string
  business: string
  location: string
  originalPrice: number
  salePrice: number
  discount: number
  description: string
  category: string
  condition: 'New' | 'Used' | 'Refurbished'
  availability: 'In Stock' | 'Limited' | 'Last Few'
  expiresAt?: string
  rating?: number
  reviewCount?: number
  phone?: string
  isVerified?: boolean
  isFeatured?: boolean
  imageUrl?: string
  slug?: string
  href?: string
  manufacturer?: string
  model?: string
}

// Removed: Using unified card variants instead

interface BuySellDealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  deal: BuySellDeal
  showContact?: boolean
  featured?: boolean
  size?: 'compact' | 'standard' | 'spacious'
  viewMode?: string // Accept but don't pass to DOM
}

export function BuySellDealCard({
  deal,
  showContact = true,
  featured = false,
  size = "standard",
  className,
  viewMode, // Destructure viewMode so it doesn't get passed to DOM
  ...props
}: BuySellDealCardProps) {
  const getCategoryBadgeVariant = (category: string) => {
    if (category.includes('Ammunition')) return 'rusty-orange'
    if (category.includes('Firearms')) return 'slate-blue'
    if (category.includes('Accessories')) return 'sagebrush-green'
    if (category.includes('Optics')) return 'canyon-clay'
    if (category.includes('Training')) return 'warm-stone'
    return 'default'
  }

  const getAvailabilityBadgeVariant = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'sagebrush-green'
      case 'Limited': return 'rusty-orange' 
      case 'Last Few': return 'canyon-clay'
      default: return 'default'
    }
  }

  const getConditionBadgeVariant = (condition: string) => {
    switch (condition) {
      case 'New': return 'slate-blue'
      case 'Used': return 'warm-stone'
      case 'Refurbished': return 'canyon-clay'
      default: return 'default'
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  // Generate product slug and href
  const generateSlug = (title: string, manufacturer?: string): string => {
    const fullTitle = manufacturer ? `${manufacturer} ${title}` : title
    return fullTitle.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }
  
  const productHref = deal.href || `/buysell/${deal.slug || generateSlug(deal.title, deal.manufacturer)}`
  
  const discountPercentage = Math.round(deal.discount)

  // Header badges
  const headerBadges = (
    <>
      <Badge variant={getCategoryBadgeVariant(deal.category)} size="sm">
        {deal.category}
      </Badge>
      <Badge variant={getConditionBadgeVariant(deal.condition)} size="sm">
        {deal.condition}
      </Badge>
      <Badge 
        variant={getAvailabilityBadgeVariant(deal.availability)} 
        size="sm"
      >
        {deal.availability}
      </Badge>
      {deal.isFeatured && (
        <Badge variant="default" size="sm">
          <StarIcon className="size-3 mr-xs" />
          Featured
        </Badge>
      )}
    </>
  )

  // Hero content with discount and category info
  const heroContent = (
    <>
      {discountPercentage > 0 && (
        <div className="absolute top-sm left-sm">
          <div className="bg-black/60 backdrop-blur-sm text-white px-sm py-xs rounded-xs font-rajdhani font-bold text-sm flex items-center gap-xs border border-white/20">
            <ArrowTrendingDownIcon className="size-3" />
            {discountPercentage}% OFF
          </div>
        </div>
      )}
      
      {/* Category icon overlay */}
      <div className="absolute bottom-sm right-sm">
        {deal.category.includes('Firearms') && <CursorArrowRaysIcon className="size-6 text-white/80" />}
        {deal.category.includes('Ammunition') && <ArchiveBoxIcon className="size-6 text-white/80" />}
        {deal.category.includes('Optics') && <Binoculars className="size-6 text-white/80" />}
        {deal.category.includes('Accessories') && <CursorArrowRaysIcon className="size-6 text-white/80" />}
        {!deal.category.includes('Firearms') && !deal.category.includes('Ammunition') && !deal.category.includes('Optics') && !deal.category.includes('Accessories') && (
          <ShoppingBagIcon className="size-6 text-white/80" />
        )}
      </div>
    </>
  )

  // Content sections
  const contentSections = [
    // Manufacturer info
    deal.manufacturer && (
      <p className="text-sm text-nav-buysell font-medium uppercase tracking-wide">
        {deal.manufacturer}
      </p>
    ),
    
    // Pricing section
    <div className="bg-muted/30 p-sm rounded-xs">
      <div className="flex items-center justify-between">
        <div className="space-y-xs">
          <p className="font-rajdhani font-bold text-2xl text-nav-buysell">
            {formatPrice(deal.salePrice)}
          </p>
          {deal.originalPrice > deal.salePrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(deal.originalPrice)}
            </p>
          )}
        </div>
        {deal.originalPrice > deal.salePrice && (
          <div className="text-center px-sm py-xs bg-sagebrush-green/10 rounded-xs border border-sagebrush-green/20">
            <p className="text-xs text-sagebrush-green font-medium uppercase tracking-wide">You Save</p>
            <p className="font-rajdhani font-bold text-lg text-sagebrush-green">
              {formatPrice(deal.originalPrice - deal.salePrice)}
            </p>
          </div>
        )}
      </div>
    </div>,

    // Business info
    <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
      <div className="flex items-center gap-sm">
        <BuildingStorefrontIcon className="size-4 text-nav-buysell" />
        <span className="font-medium text-card-foreground">{deal.business}</span>
        {deal.isVerified && (
          <Badge variant="nav-buysell" size="sm">
            ✓ Verified
          </Badge>
        )}
      </div>
      
      <div className="flex items-center gap-sm text-sm">
        <MapPinIcon className="size-4 text-nav-buysell" />
        <span className="text-muted-foreground">{deal.location}</span>
      </div>

      {deal.rating && deal.reviewCount && (
        <div className="flex items-center gap-sm text-sm">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  "size-3",
                  i < Math.floor(deal.rating!) ? "text-nav-buysell fill-nav-buysell" : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="font-medium text-nav-buysell">{deal.rating}</span>
          <span className="text-muted-foreground">({deal.reviewCount})</span>
        </div>
      )}
    </div>
  ].filter(Boolean)

  // Footer content for expiration
  const footerContent = deal.expiresAt && (
    <div className="flex items-center gap-sm p-sm bg-destructive/10 border border-destructive/20 rounded-xs">
      <CalendarDaysIcon className="size-4 text-destructive" />
      <span className="text-sm text-destructive font-medium">
        🔥 Deal expires {deal.expiresAt}
      </span>
    </div>
  )

  // Get category-specific gradient for hero section
  const getCategoryGradient = (category: string) => {
    if (category.includes('Firearms')) return 'card-gradient-firearms'
    if (category.includes('Ammunition')) return 'card-gradient-ammo'
    if (category.includes('Optics')) return 'card-gradient-optics'
    if (category.includes('Accessories')) return 'card-gradient-accessories'
    return 'card-gradient-buysell'
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const iconClass = "size-8 text-white/80 relative z-10"
    if (category.includes('Firearms')) return <CursorArrowRaysIcon className={iconClass} />
    if (category.includes('Ammunition')) return <ArchiveBoxIcon className={iconClass} />
    if (category.includes('Optics')) return <Binoculars className={iconClass} />
    if (category.includes('Accessories')) return <CursorArrowRaysIcon className={iconClass} />
    return <ShoppingBagIcon className={iconClass} />
  }

  return (
    <Link href={productHref} className="block">
      <div 
        className={cn(
          "transition-all duration-300 group relative overflow-hidden cursor-pointer rounded-xs",
          "bg-card text-card-foreground border border-border",
          "shadow-ghost hover:shadow-present",
          "tactical-underline-base tactical-underline-buysell",
          className
        )}
        {...props}
      >
      
      {/* Tactical Hero Section - Matching EventCard */}
      <div className={cn(
        "relative mb-lg -m-lg mt-[-24px] mx-[-24px] h-32 overflow-hidden border-b border-white/10",
        getCategoryGradient(deal.category)
      )}>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Tactical Action Buttons - top right */}
        <div className="absolute top-sm right-sm flex gap-xs">
          {deal.phone && (
            <button
              className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-buysell hover:border-nav-buysell transition-all duration-200"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(`tel:${deal.phone}`, '_self')
              }}
              title="Call dealer"
            >
              <PhoneIcon className="h-4 w-4 text-white" />
            </button>
          )}
          
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-buysell hover:border-nav-buysell transition-all duration-200"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(productHref, '_blank')
            }}
            title="View deal"
          >
            <ShoppingBagIcon className="h-4 w-4 text-white" />
          </button>
        </div>
        
        {/* Discount badge overlay */}
        {discountPercentage > 0 && (
          <div className="absolute top-sm left-sm">
            <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
              <div className="text-center">
                <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
                  {discountPercentage}%
                </div>
                <div className="font-rajdhani font-black text-lg text-white leading-none">
                  OFF
                </div>
                <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                  Sale
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Category icon */}
        <div className="absolute bottom-xs right-xs">
          {getCategoryIcon(deal.category)}
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
            <h2 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-buysell transition-colors duration-200">
              {deal.title}
            </h2>
            <h3 className="font-noto-serif text-base text-muted-foreground leading-tight">
              {deal.category} • {deal.business}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {deal.description}
        </p>

        {/* Smart Badges - Category, Condition, Availability */}
        <div className="flex flex-wrap gap-xs">
          <Badge variant={getConditionBadgeVariant(deal.condition)} size="sm">
            {deal.condition}
          </Badge>
          <Badge variant={getAvailabilityBadgeVariant(deal.availability)} size="sm">
            {deal.availability}
          </Badge>
          {deal.isFeatured && (
            <Badge variant="default" size="sm">
              <StarIcon className="w-3 h-3 mr-xs" />
              Featured
            </Badge>
          )}
        </div>

        {/* Price Section */}
        <div className="bg-nav-buysell/10 p-sm rounded-xs border border-nav-buysell/20">
          <div className="flex items-center justify-between">
            <div className="space-y-xs">
              <p className="font-rajdhani font-bold text-2xl text-nav-buysell">
                {formatPrice(deal.salePrice)}
              </p>
              {deal.originalPrice > deal.salePrice && (
                <p className="text-sm text-muted-foreground line-through">
                  {formatPrice(deal.originalPrice)}
                </p>
              )}
            </div>
            {deal.originalPrice > deal.salePrice && (
              <div className="text-center px-sm py-xs bg-sagebrush-green/10 rounded-xs border border-sagebrush-green/20">
                <p className="text-xs text-sagebrush-green font-medium uppercase tracking-wide">You Save</p>
                <p className="font-rajdhani font-bold text-lg text-sagebrush-green">
                  {formatPrice(deal.originalPrice - deal.salePrice)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* InformationCircleIcon Grid - Matching EventCard */}
        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
          <div className="flex items-center gap-sm text-sm">
            <BuildingStorefrontIcon className="size-4 flex-shrink-0 text-nav-buysell" />
            <span className="font-medium text-card-foreground">{deal.business}</span>
            {deal.isVerified && (
              <Badge variant="nav-buysell" size="sm">
                ✓ Verified
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-sm text-sm">
            <MapPinIcon className="size-4 flex-shrink-0 text-nav-buysell" />
            <span className="text-muted-foreground">{deal.location}</span>
          </div>
          {deal.phone && (
            <div className="flex items-center gap-sm text-sm">
              <PhoneIcon className="size-4 flex-shrink-0 text-nav-buysell" />
              <span className="text-muted-foreground">{deal.phone}</span>
            </div>
          )}
          {deal.rating && deal.reviewCount && (
            <div className="flex items-center gap-sm text-sm">
              <StarIcon className="size-4 flex-shrink-0 text-nav-buysell" />
              <span className="font-medium text-card-foreground">
                {deal.rating} stars ({deal.reviewCount} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Expiration Warning */}
        {deal.expiresAt && (
          <div className="flex items-center gap-sm p-sm bg-destructive/10 border border-destructive/20 rounded-xs">
            <CalendarDaysIcon className="size-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">
              🔥 Deal expires {deal.expiresAt}
            </span>
          </div>
        )}

        {/* CTA Button - Matching EventCard */}
        <div className="pt-sm">
          <Button 
            size="sm"
            variant="outline"
            className="w-full border-nav-buysell/30 text-nav-buysell group-hover:bg-nav-buysell group-hover:text-white group-hover:border-nav-buysell transition-all duration-300 font-rajdhani font-bold" 
            animationType="arrow"
          >
            {deal.availability === 'Last Few' ? '🔥 Buy Now - Last Few!' : 'View Deal'}
          </Button>
        </div>
      </div>
      </div>
    </Link>
  )
}