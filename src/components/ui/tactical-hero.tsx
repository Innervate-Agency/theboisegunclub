'use client'

import React from 'react'
import { Button } from './button'
import { TrustIndicators } from './trust-indicators'
import { MotionDiv, MotionH1, MotionP } from './optimized-motion'
import { DynamicHeroOverhang } from './dynamic-loader'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { StarIcon, ShieldCheckIcon, UsersIcon, BuildingStorefrontIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export function TacticalHero() {
  // Community stats card for right-hand side
  const heroRightContent = (
    <Card className="mica-card border-rusty-orange/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rusty-orange/20 to-rusty-orange/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre"></div>
      
      <CardContent className="p-sm relative z-10">
        <div className="flex items-center justify-between mb-base">
          <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30 font-rajdhani font-bold text-[10px]">
            <StarIcon className="h-3 w-3 mr-xs" />
            COMMUNITY HUB
          </Badge>
          <div className="flex items-center gap-xs text-xs text-muted-foreground">
            <ShieldCheckIcon className="h-3 w-3 text-rusty-orange" />
            <span>Verified</span>
          </div>
        </div>
        
        <div className="space-y-base">
          <div>
            <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">Treasure Valley Firearms Community</h3>
            <div className="flex items-center gap-xs text-xs text-muted-foreground">
              <UsersIcon className="h-3 w-3 text-rusty-orange" />
              <span>Active Community</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            Connect with local gun owners, find trusted businesses, and stay informed about Idaho's firearms community.
          </p>
          
          <div className="grid grid-cols-2 gap-base pt-base border-t border-border">
            <div className="space-y-xs">
              <div className="flex items-center gap-xs">
                <BuildingStorefrontIcon className="h-3 w-3 text-rusty-orange" />
                <span className="text-xs text-muted-foreground">150+ Businesses</span>
              </div>
              <div className="flex items-center gap-xs">
                <CalendarDaysIcon className="h-3 w-3 text-rusty-orange" />
                <span className="text-xs text-muted-foreground">200+ Events</span>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button 
                size="sm"
                className="bg-rusty-orange hover:bg-rusty-orange/90 text-white font-rajdhani font-bold text-xs rounded-xs shadow-none"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="relative overflow-visible">
      {/* Clean Tactical Background */}
      <div className="absolute inset-0 bg-gradient-home-hero hero-height-tactical">
        <div className="absolute inset-0 hero-tactical-grid opacity-20" />
      </div>

      {/* Hero Content - Now with grid layout */}
      <div className="relative z-20 pt-24 sm:pt-32 pb-48 sm:pb-56">
        <div className="container mx-auto px-mobile-sm sm:px-lg container-mobile">
          <div className="hero-grid-layout">
            {/* Left Content - Main hero content */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-lg sm:space-y-xl">
              {/* Main Headlines - Clean & Direct */}
              <MotionDiv className="space-y-base">
                <MotionH1 
                  className="font-rajdhani text-4xl sm:text-6xl md:text-7xl text-crisp-off-white leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="font-bold">The Boise</span> <span className="font-light">Gun Club</span>
                </MotionH1>
                <MotionP 
                  className="font-rajdhani font-semibold text-xl sm:text-2xl text-dark-chocolate lowercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  treasure valley firearms & firearms sports collective
                </MotionP>
                <MotionP 
                  className="text-base sm:text-lg text-crisp-off-white/80 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  Your central hub for all things firearms in the Treasure Valley. Connect with local gun owners, discover trusted FFLs and ranges, find training opportunities, and stay informed about Idaho's shooting sports scene.
                </MotionP>
              </MotionDiv>

              {/* Action Buttons - Tactical & Direct */}
              <MotionDiv 
                className="flex flex-col sm:flex-row items-start gap-base sm:gap-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <Button animationType="arrow"
                  className="bg-sandy-ochre text-dark-chocolate hover:bg-sandy-ochre/90 font-rajdhani font-bold shadow-elevated"
                >
                  Join Community
                </Button>
                <Button 
                  variant="outline" animationType="arrow"
                  className="border-crisp-off-white text-crisp-off-white hover:bg-crisp-off-white/10 font-rajdhani font-bold tactical-border"
                >
                  Browse Directory
                </Button>
              </MotionDiv>

              {/* Trust Indicators - Clean Stats */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="pt-base"
              >
                <TrustIndicators />
              </MotionDiv>
            </div>

            {/* Right Content - Community Stats Card */}
            <div className="lg:col-span-1 flex items-center justify-center py-mobile-md sm:py-md">
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="w-full max-w-sm"
              >
                {heroRightContent}
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

      {/* Overhang Navigation - positioned at bottom center of hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
        <div className="w-[1200px] px-lg">
          <div className="bg-light-peachy dark:bg-rich-loam rounded-t-3xl pb-8" style={{borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}>
            <DynamicHeroOverhang />
          </div>
        </div>
      </div>
    </section>
  )
}