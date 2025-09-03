'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CurrencyDollarIcon, StarIcon, TagIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

/**
 * Unified Armory Card
 * 
 * ARMORY-SPECIFIC IMPLEMENTATION:
 * - Gear reviews and ratings
 * - Price information and availability
 * - Category and manufacturer details
 * - User recommendations and testing notes
 */

export interface UnifiedArmoryCardProps {
  title: string
  category: string
  manufacturer?: string
  model?: string
  price?: string
  rating?: number
  reviewCount?: number
  availability?: 'In Stock' | 'Limited' | 'Out of Stock' | 'Pre-Order'
  description?: string
  testedBy?: string
  recommendedFor?: string[]
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
}

export function UnifiedArmoryCard({
  title,
  category,
  manufacturer,
  model,
  price,
  rating,
  reviewCount,
  availability = 'In Stock',
  description,
  testedBy,
  recommendedFor = [],
  slug,
  href,
  viewMode = 'grid'
}: UnifiedArmoryCardProps) {
  
  // Generate href if not provided
  const armoryHref = href || `/armory/${slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Get category gradient
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Handguns': 
        return 'bg-gradient-to-br from-nav-armory via-foothills-purple to-canyon-clay'
      case 'Rifles': 
        return 'bg-gradient-to-br from-rusty-orange via-canyon-clay to-sandy-ochre'
      case 'Shotguns': 
        return 'bg-gradient-to-br from-slate-blue via-scope-blue to-info-river'
      case 'Optics': 
        return 'bg-gradient-to-br from-sagebrush-green via-lodgepole-green to-info-river'
      case 'Accessories': 
        return 'bg-gradient-to-br from-warm-stone via-aged-paper to-parchment'
      case 'Ammunition': 
        return 'bg-gradient-to-br from-weathered-gold via-sandy-ochre to-rusty-orange'
      default: 
        return 'bg-gradient-to-br from-nav-armory via-foothills-purple to-canyon-clay'
    }
  }
  
  // Get availability color
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'sagebrush-green'
      case 'Limited': return 'sandy-ochre'
      case 'Out of Stock': return 'canyon-clay'
      case 'Pre-Order': return 'slate-blue'
      default: return 'nav-armory'
    }
  }
  
  // Rating and category info for hero section
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {category}
          </div>
          {rating && (
            <div className="flex items-center justify-center gap-xs mt-xs">
              <StarIcon className="size-4 text-yellow-400 fill-current" />
              <span className="text-sm font-bold text-white">{rating.toFixed(1)}</span>
            </div>
          )}
          {price && (
            <div className="font-rajdhani font-bold text-xs text-white/90 mt-xs">
              {price}
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="armory"
      viewMode={viewMode}
      title={title}
      description={description}
      href={armoryHref}
      heroGradient={getCategoryGradient(category)}
      heroContent={heroContent}
      badges={[
        { 
          label: availability.toUpperCase(), 
          variant: "outline",
          color: getAvailabilityColor(availability)
        },
        ...(manufacturer ? [{ label: manufacturer.toUpperCase(), variant: "outline" }] : []),
        ...(rating ? [{ 
          label: `${rating.toFixed(1)} ★ (${reviewCount || 0})`.toUpperCase(), 
          variant: "outline" 
        }] : [])
      ]}
      metadata={[
        ...(manufacturer && model ? [{ icon: TagIcon, label: "Model", value: `${manufacturer} ${model}` }] : []),
        ...(price ? [{ icon: CurrencyDollarIcon, label: "Price", value: price }] : []),
        ...(testedBy ? [{ icon: WrenchScrewdriverIcon, label: "Tested By", value: testedBy }] : [])
      ]}
      primaryAction={{
        label: "View Review",
        href: armoryHref
      }}
    />
  )
}