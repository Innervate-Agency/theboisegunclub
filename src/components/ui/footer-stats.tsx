'use client'

import React from 'react'
import { useRealStats } from '@/hooks/useRealStats'
import { BrassCounter } from '@/components/ui/brass-counter'

interface FooterStatsProps {
  className?: string
}

export function FooterStats({ className }: FooterStatsProps) {
  const stats = useRealStats()

  const displayStats = [
    {
      value: `${stats.totalBusinesses}+`,
      label: 'Verified Businesses',
      description: 'Idaho FFL & Service Providers'
    },
    {
      value: `${stats.totalRanges}+`,
      label: 'Shooting Facilities', 
      description: 'Ranges, Clubs & Training Centers'
    },
    {
      value: `${stats.totalEvents}+`,
      label: 'Annual Events',
      description: 'Competitions & Training Sessions'
    },
    {
      value: `${stats.totalGunStores}+`,
      label: 'Licensed Dealers',
      description: 'Federal Firearms License Holders'
    }
  ]

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
          Community Stats
        </h3>
        <BrassCounter />
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {displayStats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="font-rajdhani font-black text-3xl text-rusty-orange">
              {stat.value}
            </div>
            <div className="font-rajdhani font-bold text-base text-card-foreground">
              {stat.label}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Real-time data from verified Idaho firearms businesses and community events. Updated daily.
        </p>
      </div>
    </div>
  )
}