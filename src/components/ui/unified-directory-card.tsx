'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { BuildingStorefrontIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline'

/**
 * Unified Directory Card
 * 
 * DIRECTORY-SPECIFIC IMPLEMENTATION:
 * - Business verification badges and indicators
 * - Contact information and location details
 * - Business hours and services
 * - Review ratings and trust indicators
 */

export interface UnifiedDirectoryCardProps {
  businessName: string
  businessType: string
  address: string
  phone?: string
  isVerified?: boolean
  verificationLevel?: 'Fully Verified' | 'ATF/SOS Verified' | 'ATF Record Only' | 'Inactive/Closed'
  rating?: number
  reviewCount?: number
  hours?: string
  services?: string[]
  description?: string
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
}

export function UnifiedDirectoryCard({
  businessName,
  businessType,
  address,
  phone,
  isVerified = false,
  verificationLevel = 'ATF Record Only',
  rating,
  reviewCount,
  hours,
  services = [],
  description,
  slug,
  href,
  viewMode = 'grid'
}: UnifiedDirectoryCardProps) {
  
  // Generate href if not provided
  const businessHref = href || `/directory/${slug || businessName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Get business type gradient aligned with filter color system
  const getBusinessTypeGradient = (type: string) => {
    const typeLower = type.toLowerCase()
    
    // Range types
    if (typeLower.includes('range') || typeLower.includes('shooting')) {
      return 'bg-gradient-to-br from-nav-armory via-rusty-orange to-sandy-ochre'
    }
    
    // Retail types  
    if (typeLower.includes('store') || typeLower.includes('dealer') || typeLower.includes('retail') || typeLower.includes('firearms')) {
      return 'bg-gradient-to-br from-nav-buysell via-sagebrush-green to-lodgepole-green'
    }
    
    // Gunsmith types
    if (typeLower.includes('gunsmith') || typeLower.includes('repair') || typeLower.includes('custom')) {
      return 'bg-gradient-to-br from-nav-intel via-canyon-clay to-warm-stone'
    }
    
    // Training types
    if (typeLower.includes('training') || typeLower.includes('academy') || typeLower.includes('instruction')) {
      return 'bg-gradient-to-br from-nav-events via-slate-blue to-scope-blue'
    }
    
    // Club types
    if (typeLower.includes('club') || typeLower.includes('society') || typeLower.includes('organization')) {
      return 'bg-gradient-to-br from-nav-forums via-foothills-purple to-canyon-clay'
    }
    
    // Service types (NFA, FFL, etc.)
    if (typeLower.includes('service') || typeLower.includes('nfa') || typeLower.includes('class iii')) {
      return 'bg-gradient-to-br from-nav-directory via-weathered-gold to-sandy-ochre'
    }
    
    // Default directory gradient
    return 'bg-gradient-to-br from-nav-directory via-sagebrush-green to-lodgepole-green'
  }
  
  // Get verification badge color
  const getVerificationColor = (level: string) => {
    switch (level) {
      case 'Fully Verified': return 'sagebrush-green'
      case 'ATF/SOS Verified': return 'slate-blue'
      case 'ATF Record Only': return 'sandy-ochre'
      case 'Inactive/Closed': return 'canyon-clay'
      default: return 'nav-directory'
    }
  }
  
  // Business info badge for hero section
  const heroContent = (
    <div className="absolute top-lg left-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          {isVerified && (
            <ShieldCheckIcon className="size-5 text-white mx-auto mb-xs" />
          )}
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {businessType}
          </div>
          {rating && (
            <div className="flex items-center justify-center gap-xs mt-xs">
              <StarIcon className="size-3 text-yellow-400 fill-current" />
              <span className="text-xs text-white">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="directory"
      viewMode={viewMode}
      title={businessName}
      description={description}
      href={businessHref}
      heroGradient={getBusinessTypeGradient(businessType)}
      heroContent={heroContent}
      badges={[
        { 
          label: verificationLevel.toUpperCase(), 
          variant: "outline",
          color: getVerificationColor(verificationLevel)
        },
        ...(rating ? [{ 
          label: `${rating.toFixed(1)} ★ (${reviewCount || 0})`.toUpperCase(), 
          variant: "outline" 
        }] : [])
      ]}
      metadata={[
        { icon: MapPinIcon, label: "Address", value: address },
        ...(phone ? [{ icon: PhoneIcon, label: "Phone", value: phone }] : []),
        ...(hours ? [{ icon: BuildingStorefrontIcon, label: "Hours", value: hours }] : [])
      ]}
      primaryAction={{
        label: "View Details",
        href: businessHref
      }}
    />
  )
}