'use client'

import React from 'react'
import { Badge } from './badge'
import { cn } from '@/lib/utils'
import { TrendingUp, MapPin, Shield, Target, Star } from 'lucide-react'

interface CompactStatsBarProps {
  stats: {
    totalLocations: number
    verifiedLocations: number
    publicAreas: number
    avgRating: number
    milesOfLand?: number
    publicClubs?: number
    privateClubs?: number
  }
  className?: string
}

export function CompactStatsBar({ stats, className }: CompactStatsBarProps) {
  const {
    totalLocations,
    verifiedLocations,
    publicAreas,
    avgRating,
    milesOfLand,
    publicClubs,
    privateClubs
  } = stats

  return (
    <div className={cn(
      "bg-card border rounded-sm px-sm py-xs shadow-whisper hover:shadow-present transition-all duration-200",
      className
    )}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        {/* Primary Stats - Always Visible */}
        <div className="flex items-center gap-md flex-wrap">
          <div className="flex items-center gap-tiny">
            <div className="w-2 h-2 bg-nav-intel rounded-full"></div>
            <span className="text-sm font-medium text-card-foreground">{totalLocations}</span>
            <span className="text-xs text-muted-foreground">Total Locations</span>
          </div>
          
          <div className="flex items-center gap-tiny">
            <Shield className="w-3 h-3 text-sagebrush-green" />
            <span className="text-sm font-medium text-card-foreground">{verifiedLocations}</span>
            <span className="text-xs text-muted-foreground">Verified</span>
          </div>
          
          <div className="flex items-center gap-tiny">
            <MapPin className="w-3 h-3 text-info-river" />
            <span className="text-sm font-medium text-card-foreground">{publicAreas}</span>
            <span className="text-xs text-muted-foreground">Public Areas</span>
          </div>
          
          <div className="flex items-center gap-tiny">
            <Star className="w-3 h-3 text-warning-clay fill-current" />
            <span className="text-sm font-medium text-card-foreground">{avgRating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">Avg Rating</span>
          </div>
        </div>

        {/* Secondary Stats - Optional */}
        {(milesOfLand || publicClubs || privateClubs) && (
          <div className="flex items-center gap-sm text-xs text-muted-foreground">
            {milesOfLand && (
              <div className="flex items-center gap-micro">
                <Target className="w-3 h-3" />
                <span>{milesOfLand}K+ acres</span>
              </div>
            )}
            
            {publicClubs && privateClubs && (
              <>
                <div className="w-px h-3 bg-border"></div>
                <span>{publicClubs} public, {privateClubs} private</span>
              </>
            )}
          </div>
        )}

        {/* Trend Indicator */}
        <Badge variant="secondary" className="text-xs">
          <TrendingUp className="w-3 h-3 mr-1" />
          Updated daily
        </Badge>
      </div>
    </div>
  )
}