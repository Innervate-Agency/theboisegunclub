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
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'For Parts'
  price: number
  originalPrice?: number
  seller: string
  location: string
  postedDate: string
  availability: 'Available' | 'Pending' | 'Sold'
  description?: string
  manufacturer?: string
  model?: string
  expires?: string
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
}

export function UnifiedBuySellCard({
  title,
  category,
  condition,
  price,
  originalPrice,
  seller,
  location,
  postedDate,
  availability = 'Available',
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
  const discount = originalPrice && originalPrice > price 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0
  
  // Price info for hero section
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          <div className="font-rajdhani font-bold text-lg text-white leading-none">
            ${price.toLocaleString()}
          </div>
          {discount > 0 && (
            <div className="text-xs text-green-400 font-bold mt-xs">
              {discount}% OFF
            </div>
          )}
          {originalPrice && discount > 0 && (
            <div className="text-xs text-white/70 line-through">
              ${originalPrice.toLocaleString()}
            </div>
          )}
          <div className="font-rajdhani text-xs text-white/90 mt-xs">
            {condition}
          </div>
        </div>
      </div>
    </div>
  )
  
  // Calculate days since posted
  const daysSincePosted = Math.floor((Date.now() - new Date(postedDate).getTime()) / (1000 * 60 * 60 * 24))
  
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
        { icon: ClockIcon, label: "Posted", value: `${daysSincePosted} days ago` },
        { icon: CurrencyDollarIcon, label: "Price", value: `$${price.toLocaleString()}` }
      ]}
      primaryAction={{
        label: "View Listing",
        href: listingHref
      }}
    />
  )
}