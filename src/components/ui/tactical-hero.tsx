'use client'

import React from 'react'
import { Button } from './button'
import { TrustIndicators } from './trust-indicators'
import { MotionDiv, MotionH1, MotionP } from './optimized-motion'
import { DynamicHeroOverhang } from './dynamic-loader'

export function TacticalHero() {
  return (
    <section className="relative overflow-visible">
      {/* Clean Tactical Background */}
      <div className="absolute inset-0 bg-gradient-home-hero hero-height-tactical">
        <div className="absolute inset-0 hero-tactical-grid opacity-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 pt-24 sm:pt-32 pb-48 sm:pb-56">
        <div className="container mx-auto px-mobile-sm sm:px-lg container-mobile">
          <div className="text-center space-y-lg sm:space-y-xl max-w-4xl mx-auto">
            {/* Main Headlines - Clean & Direct */}
            <MotionDiv className="space-y-base">
              <MotionH1 
                className="font-rajdhani text-4xl sm:text-6xl md:text-7xl text-crisp-off-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="font-bold">THE BOISE</span> <span className="font-light">GUN CLUB</span>
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
                className="text-base sm:text-lg text-crisp-off-white/80 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Your central hub for all things firearms in the Treasure Valley. Connect with local gun owners, discover trusted FFLs and ranges, find training opportunities, and stay informed about Idaho's shooting sports scene.
              </MotionP>
            </MotionDiv>

            {/* Action Buttons - Tactical & Direct */}
            <MotionDiv 
              className="flex flex-col sm:flex-row items-center justify-center gap-base sm:gap-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <Button animationType="arrow"
                className="bg-sandy-ochre text-dark-chocolate hover:bg-sandy-ochre/90 font-rajdhani font-bold shadow-elevated"
              >
                JOIN COMMUNITY
              </Button>
              <Button 
                variant="outline" animationType="arrow"
                className="border-crisp-off-white text-crisp-off-white hover:bg-crisp-off-white/10 font-rajdhani font-bold tactical-border"
              >
                BROWSE DIRECTORY
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