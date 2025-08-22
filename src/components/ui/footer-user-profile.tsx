'use client'

import React from 'react'
import { useRealStats } from '@/hooks/useRealStats'
import { BrassCounter } from '@/components/ui/brass-counter'
import { BuildingStorefrontIcon, CalendarDaysIcon, CalendarIcon, MapPinIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/outline';

interface FooterUserProfileProps {
  className?: string
}

export function FooterUserProfile({ className }: FooterUserProfileProps) {
  const stats = useRealStats()

  // Demo user data - in real app this would come from auth context
  const demoUser = {
    name: "Member",
    joinDate: "2024",
    memberType: "Community",
    isSignedIn: false // In real app, check auth state
  }

  const compactStats = [
    { label: 'Businesses', value: `${stats.totalBusinesses}+`, icon: BuildingStorefrontIcon },
    { label: 'Events', value: `${stats.totalEvents}+`, icon: CalendarIcon },
    { label: 'Facilities', value: `${stats.totalRanges}+`, icon: MapPinIcon },
    { label: 'Dealers', value: `${stats.totalGunStores}+`, icon: ShieldCheckIcon }
  ]

  return (
    <div className={`space-y-4 ${className}`}>
      {/* User Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-muted/50 rounded-sm flex items-center justify-center">
          <UserIcon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <div className="font-rajdhani font-bold text-base text-card-foreground">
            {demoUser.isSignedIn ? demoUser.name : "Welcome, Visitor"}
          </div>
          <div className="text-sm text-muted-foreground">
            {demoUser.isSignedIn 
              ? `${demoUser.memberType} • Since ${demoUser.joinDate}`
              : "Join our community"
            }
          </div>
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="space-y-2">
        {demoUser.isSignedIn ? (
          <>
            <a href="/dashboard" className="block text-sm text-muted-foreground hover:text-rusty-orange transition-colors font-rajdhani">
              → Dashboard
            </a>
            <a href="/profile" className="block text-sm text-muted-foreground hover:text-rusty-orange transition-colors font-rajdhani">
              → My Profile
            </a>
            <button className="block text-sm text-muted-foreground hover:text-rusty-orange transition-colors font-rajdhani text-left">
              → Sign Out
            </button>
          </>
        ) : (
          <>
            <a href="/sign-in" className="block text-sm text-muted-foreground hover:text-rusty-orange transition-colors font-rajdhani">
              → Sign In
            </a>
            <a href="/join" className="block text-sm text-muted-foreground hover:text-rusty-orange transition-colors font-rajdhani">
              → Join Community
            </a>
          </>
        )}
      </div>

      {/* Brass Collected Section - Soft Launch Feature */}
      <div className="pt-3 border-t border-border/50">
        <div className="flex items-center justify-between">
          <h4 className="font-rajdhani font-bold text-sm text-card-foreground uppercase tracking-wide">
            Brass Collected
          </h4>
          <BrassCounter />
        </div>
        <div className="text-xs text-muted-foreground/80 leading-relaxed mt-1">
          Community activity tracker
        </div>
      </div>

      {/* Compact Community Stats */}
      <div className="pt-3 border-t border-border/50">
        <h4 className="font-rajdhani font-bold text-sm text-card-foreground mb-2 uppercase tracking-wide">
          Community Stats
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {compactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-rajdhani font-bold text-xs text-rusty-orange">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-none">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Real-time data disclaimer */}
      <div className="text-xs text-muted-foreground/80 leading-relaxed">
        Real-time data from verified Idaho firearms businesses. Updated daily.
      </div>
    </div>
  )
}