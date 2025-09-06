'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CurrencyDollarIcon, MapPinIcon, ClockIcon, TagIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

/**
 * Unified Buy/Sell Card
 * 
 * BUYSELL-SPECIFIC IMPLEMENTATION:
 * - Listing prices and discounts
 * - Seller information and location
 * - Item condition and availability
 * - Time remaining and urgency indicators
 */

export interface UnifiedBuySellCardProps {
  title: string
  category: string
  condition: 'New' | 'Used' | 'Refurbished'
  salePrice: number
  originalPrice: number
  business: string
  location: string
  expiresAt?: string
  availability: 'In Stock' | 'Limited' | 'Last Few'
  description?: string
  manufacturer?: string
  model?: string
  expires?: string
  slug?: string
  href?: string
  viewMode?: 'waterfall' | 'grid' | 'list' | 'compact' | 'table'
}

export function UnifiedBuySellCard({
  title,
  category,
  condition,
  salePrice,
  originalPrice,
  business,
  location,
  expiresAt,
  availability = 'In Stock',
  description,
  manufacturer,
  model,
  expires,
  slug,
  href,
  viewMode = 'grid'
}: UnifiedBuySellCardProps) {
  
  // Generate href if not provided
  const listingHref = href || `/buysell/${slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Get category gradient
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Handguns': 
        return 'bg-gradient-to-br from-nav-buysell via-sagebrush-green to-lodgepole-green'
      case 'Rifles': 
        return 'bg-gradient-to-br from-rusty-orange via-canyon-clay to-sandy-ochre'
      case 'Shotguns': 
        return 'bg-gradient-to-br from-slate-blue via-scope-blue to-info-river'
      case 'Optics': 
        return 'bg-gradient-to-br from-foothills-purple via-canyon-clay to-rusty-orange'
      case 'Accessories': 
        return 'bg-gradient-to-br from-warm-stone via-aged-paper to-parchment'
      case 'Ammunition': 
        return 'bg-gradient-to-br from-weathered-gold via-sandy-ochre to-rusty-orange'
      default: 
        return 'bg-gradient-to-br from-nav-buysell via-sagebrush-green to-lodgepole-green'
    }
  }
  
  // Get condition color
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'New': return 'sagebrush-green'
      case 'Like New': return 'lodgepole-green'
      case 'Good': return 'sandy-ochre'
      case 'Fair': return 'canyon-clay'
      case 'For Parts': return 'warm-stone'
      default: return 'nav-buysell'
    }
  }
  
  // Get availability color
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'sagebrush-green'
      case 'Pending': return 'sandy-ochre'
      case 'Sold': return 'canyon-clay'
      default: return 'nav-buysell'
    }
  }
  
  // Calculate discount if original price exists
  const discount = originalPrice && originalPrice > salePrice 
    ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
    : 0
  
  // Price info for hero section
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          <div className="font-rajdhani font-bold text-lg text-white leading-none">
            ${salePrice?.toLocaleString() || '0'}
          </div>
          {discount > 0 && (
            <div className="text-xs text-green-400 font-bold mt-xs">
              {discount}% OFF
            </div>
          )}
          {originalPrice && discount > 0 && (
            <div className="text-xs text-white/70 line-through">
              ${originalPrice?.toLocaleString() || '0'}
            </div>
          )}
          <div className="font-rajdhani text-xs text-white/90 mt-xs">
            {condition}
          </div>
        </div>
      </div>
    </div>
  )
  
  // Get seller/business info
  const businessName = business || 'Unknown Seller'
  
  return (
    <UnifiedGalleryCard
      section="buysell"
      viewMode={viewMode}
      title={title}
      description={description}
      href={listingHref}
      heroGradient={getCategoryGradient(category)}
      heroContent={heroContent}
      badges={[
        { 
          label: availability.toUpperCase(), 
          variant: "outline",
          color: getAvailabilityColor(availability)
        },
        { 
          label: condition.toUpperCase(), 
          variant: "outline",
          color: getConditionColor(condition)
        },
        ...(discount > 0 ? [{ 
          label: `${discount}% OFF`, 
          variant: "outline",
          color: "sagebrush-green"
        }] : [])
      ]}
      metadata={[
        ...(manufacturer && model ? [{ icon: TagIcon, label: "Model", value: `${manufacturer} ${model}` }] : []),
        { icon: MapPinIcon, label: "Location", value: location },
        { icon: ClockIcon, label: "Seller", value: businessName },
        { icon: CurrencyDollarIcon, label: "Price", value: `$${salePrice?.toLocaleString() || '0'}` }
      ]}
      primaryAction={{
        label: "View Listing",
        href: listingHref
      }}
    />
  )
}