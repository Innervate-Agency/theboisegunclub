'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CloudIcon, ExclamationTriangleIcon, MapPinIcon, ClockIcon, ThermometerIcon } from '@heroicons/react/24/outline'

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
  locationName: string
  locationType: string
  address?: string
  currentTemp?: number
  conditions?: string
  windSpeed?: number
  visibility?: string
  alerts?: string[]
  hours?: string
  access?: 'Public' | 'Members Only' | 'Permit Required' | 'Restricted'
  description?: string
  lastUpdated?: string
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
}

export function UnifiedIntelCard({
  locationName,
  locationType,
  address,
  currentTemp,
  conditions,
  windSpeed,
  visibility,
  alerts = [],
  hours,
  access = 'Public',
  description,
  lastUpdated,
  slug,
  href,
  viewMode = 'grid'
}: UnifiedIntelCardProps) {
  
  // Generate href if not provided
  const intelHref = href || `/intel/${slug || locationName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Get location type gradient
  const getLocationTypeGradient = (type: string) => {
    switch (type) {
      case 'Shooting Range': 
        return 'bg-gradient-to-br from-nav-intel via-scope-blue to-info-river'
      case 'Public Land': 
        return 'bg-gradient-to-br from-sagebrush-green via-lodgepole-green to-info-river'
      case 'BLM Area': 
        return 'bg-gradient-to-br from-warm-stone via-aged-paper to-parchment'
      case 'National Forest': 
        return 'bg-gradient-to-br from-lodgepole-green via-sagebrush-green to-nav-intel'
      case 'State Park': 
        return 'bg-gradient-to-br from-slate-blue via-nav-intel to-scope-blue'
      default: 
        return 'bg-gradient-to-br from-nav-intel via-scope-blue to-info-river'
    }
  }
  
  // Get access level color
  const getAccessColor = (access: string) => {
    switch (access) {
      case 'Public': return 'sagebrush-green'
      case 'Members Only': return 'slate-blue'
      case 'Permit Required': return 'sandy-ochre'
      case 'Restricted': return 'canyon-clay'
      default: return 'nav-intel'
    }
  }
  
  // Weather info for hero section
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {locationType}
          </div>
          {currentTemp && (
            <div className="flex items-center justify-center gap-xs mt-xs">
              <ThermometerIcon className="size-4 text-white" />
              <span className="text-sm font-bold text-white">{currentTemp}°F</span>
            </div>
          )}
          {conditions && (
            <div className="font-rajdhani text-xs text-white/90 mt-xs">
              {conditions}
            </div>
          )}
          {alerts.length > 0 && (
            <ExclamationTriangleIcon className="size-4 text-red-400 mx-auto mt-xs" />
          )}
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="intel"
      viewMode={viewMode}
      title={locationName}
      description={description}
      href={intelHref}
      heroGradient={getLocationTypeGradient(locationType)}
      heroContent={heroContent}
      badges={[
        { 
          label: access.toUpperCase(), 
          variant: "outline",
          color: getAccessColor(access)
        },
        ...(alerts.length > 0 ? [{ 
          label: `${alerts.length} ALERT${alerts.length > 1 ? 'S' : ''}`, 
          variant: "outline",
          color: "canyon-clay"
        }] : [])
      ]}
      metadata={[
        ...(address ? [{ icon: MapPinIcon, label: "Location", value: address }] : []),
        ...(windSpeed ? [{ icon: CloudIcon, label: "Wind", value: `${windSpeed} mph` }] : []),
        ...(hours ? [{ icon: ClockIcon, label: "Hours", value: hours }] : [])
      ]}
      primaryAction={{
        label: "View Conditions",
        href: intelHref
      }}
    />
  )
}