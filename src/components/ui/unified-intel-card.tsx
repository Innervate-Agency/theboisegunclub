'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CloudIcon, ExclamationTriangleIcon, MapPinIcon, ClockIcon, ThermometerIcon, ArrowTrendingUpIcon, GlobeAltIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { getContentTypeGradient, getContentTypeColor, generateGradientCSS } from '@/lib/content-type-colors'

/**
 * Unified Intel Card
 * 
 * INTEL-SPECIFIC IMPLEMENTATION:
 * - Weather conditions and range data
 * - Location information and access details
 * - Safety alerts and restrictions
 * - Real-time conditions and forecasts
 */

export interface UnifiedIntelCardProps {
  name: string
  type?: string
  category: string
  description?: string
  address?: string
  distanceFromBoise: number
  access: string
  difficulty: string
  elevation: number
  amenities?: string[]
  verified: boolean
  rating?: number
  hours?: string
  slug?: string
  href?: string
  viewMode?: 'waterfall' | 'grid' | 'list' | 'compact' | 'table'
}

export function UnifiedIntelCard({
  name,
  type,
  category,
  description,
  address,
  distanceFromBoise,
  access,
  difficulty,
  elevation,
  amenities = [],
  verified,
  rating,
  hours,
  slug,
  href,
  viewMode = 'waterfall'
}: UnifiedIntelCardProps) {
  
  // Generate href if not provided
  const intelHref = href || `/intel/locations/${slug || name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Generate subtitle from location data (matching Events pattern)
  const getLocationSubtitle = () => {
    const elements = []
    
    if (verified) elements.push('Verified Location')
    elements.push(`${distanceFromBoise} mi from Boise`)
    if (access?.toLowerCase().includes('free')) elements.push('Free Access')
    if (difficulty) elements.push(difficulty)
    
    return elements.join(' • ')
  }
  
  // Get category gradient using content type system (matching Events)
  const getCategoryGradient = (category: string) => {
    const gradientColors = getContentTypeGradient('intel', category)
    return generateGradientCSS(gradientColors, 'to-br')
  }
  
  // Get category color using content type system (matching Events)
  const getCategoryColor = (category: string) => {
    return getContentTypeColor('intel', category)
  }
  
  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'sagebrush-green'
      case 'moderate': return 'sandy-ochre'
      case 'difficult': return 'rusty-orange'
      default: return 'nav-intel'
    }
  }
  
  // Enhanced hero section with distance and category info (matching Events style)
  const heroContent = (
    <div className="absolute top-lg left-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center space-y-xs">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {distanceFromBoise}
          </div>
          <div className="font-rajdhani font-black text-xl text-white leading-none">
            MI
          </div>
          <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
            {difficulty}
          </div>
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="intel"
      viewMode={viewMode}
      title={name}
      subtitle={getLocationSubtitle()}
      description={description}
      href={intelHref}
      heroGradient={getCategoryGradient(category)}
      heroContent={heroContent}
      contentType={category}
      badges={[
        { 
          label: category, 
          variant: "outline",
          color: getCategoryColor(category)
        },
        { 
          label: verified ? 'Verified' : 'Needs Verification', 
          variant: "outline",
          color: verified ? 'sagebrush-green' : 'warning-amber'
        },
        { 
          label: difficulty, 
          variant: "outline",
          color: getDifficultyColor(difficulty)
        },
        ...(access?.toLowerCase().includes('free') ? [{ label: 'Free Access', variant: "outline", color: "sagebrush-green" }] : []),
        ...(difficulty === 'Difficult' ? [{ label: '4WD Required', variant: "outline", color: "rusty-orange" }] : [])
      ]}
      metadata={[
        { icon: MapPinIcon, label: "Category", value: category },
        { icon: ArrowTrendingUpIcon, label: "Elevation", value: `${elevation}ft` },
        { icon: GlobeAltIcon, label: "Access", value: access },
        ...(rating && rating > 0 ? [{ icon: StarIcon, label: "Rating", value: `${rating.toFixed(1)} stars` }] : []),
        ...(amenities.length > 0 ? [{ icon: ShieldCheckIcon, label: "Features", value: `${amenities.length} amenities` }] : [])
      ]}
      primaryAction={{
        label: "View Details",
        href: intelHref
      }}
    />
  )
}