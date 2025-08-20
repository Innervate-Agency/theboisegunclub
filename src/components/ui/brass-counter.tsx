'use client'

import React from 'react'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { useTacticalTracker } from '@/hooks/useTacticalTracker'
import { Trophy, Target, Star } from '@phosphor-icons/react'

interface BrassCounterProps {
  className?: string
  showProgress?: boolean
}

export function BrassCounter({ className, showProgress = false }: BrassCounterProps) {
  const { stats, getProgressToNextAchievement, mounted } = useTacticalTracker()

  // Don't render on server to prevent hydration issues
  if (!mounted) {
    return null
  }

  const nextAchievement = getProgressToNextAchievement()

  return (
    <MotionDiv 
      className={`flex items-center gap-xs text-xs text-muted-foreground ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Brass Casings Counter */}
      <div className="flex items-center gap-xs">
        <div className="w-1 h-1 rounded-full bg-weathered-gold" />
        <span className="font-mono text-weathered-gold">
          {stats.brassCasings}
        </span>
        <span className="hidden sm:inline">brass</span>
      </div>

      {/* Achievement Badges */}
      {stats.achievements.length > 0 && (
        <>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-xs">
            {stats.achievements.includes('explorer') && (
              <div title="Range Explorer - Visited all sections">
                🗺️
              </div>
            )}
            {stats.achievements.includes('marksman') && (
              <div title="Marksman - 50+ page visits">
                <Target className="size-3 text-rusty-orange" />
              </div>
            )}
            {stats.achievements.includes('regular') && (
              <div title="Range Regular - 10+ sessions">
                <Star className="size-3 text-slate-blue" />
              </div>
            )}
          </div>
        </>
      )}

      {/* Progress Indicator (optional) */}
      {showProgress && nextAchievement && (
        <>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-xs text-xs">
            <span>{nextAchievement.icon}</span>
            <div className="w-8 h-1 bg-muted rounded-full overflow-hidden">
              <MotionDiv
                className="h-full bg-nav-armory rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(nextAchievement.progress / nextAchievement.total) * 100}%` 
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="font-mono text-[10px]">
              {nextAchievement.progress}/{nextAchievement.total}
            </span>
          </div>
        </>
      )}
    </MotionDiv>
  )
}