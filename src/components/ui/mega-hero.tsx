'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const megaHeroVariants = cva(
  "relative w-full flex items-center justify-center overflow-hidden",
  {
    variants: {
      height: {
        sm: "min-h-[400px]",
        md: "min-h-[500px]", 
        lg: "min-h-[600px]",
        xl: "min-h-[700px]",
        full: "min-h-screen"
      },
      backgroundPreset: {
        warm: "bg-gradient-to-br from-brass-yellow/10 via-copper-orange/10 to-walnut-stock/10",
        cool: "bg-gradient-to-br from-scope-blue/10 via-trigger-blue/10 to-cerakote-blue/10", 
        mixed: "bg-gradient-to-br from-brass-yellow/10 via-scope-blue/10 to-walnut-stock/10",
        gunclub: "bg-gradient-to-br from-range-white via-shooting-bench to-range-white"
      }
    },
    defaultVariants: {
      height: "lg",
      backgroundPreset: "gunclub"
    }
  }
)

interface CTAProps {
  text: string
  onClick: () => void
  icon?: React.ReactNode
}

export interface MegaHeroProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof megaHeroVariants> {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: CTAProps
  secondaryCTA?: CTAProps
  badges?: string[]
  centerContent?: boolean
  icon?: React.ReactNode
}

export function MegaHero({
  className,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badges,
  height,
  backgroundPreset,
  centerContent = true,
  icon,
  ...props
}: MegaHeroProps) {
  return (
    <section
      className={cn(megaHeroVariants({ height, backgroundPreset }), className)}
      {...props}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh-warm opacity-30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-md py-[var(--space-2xl)]">
        <div className={cn(
          "space-y-[var(--space-lg)]",
          centerContent && "text-center"
        )}>
          
          {/* Icon */}
          {icon && (
            <div className={cn(
              "text-brass-yellow",
              centerContent ? "flex justify-center" : "flex"
            )}>
              {icon}
            </div>
          )}

          {/* Main content */}
          <div className="space-y-[var(--space-md)]">
            {subtitle && (
              <p className="text-body-sm uppercase tracking-wider font-medium text-case-hardened">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-heading-xl md:text-display-sm lg:text-6xl font-rajdhani font-bold text-gunmetal-black tracking-tight leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-body-lg md:text-heading-sm text-case-hardened font-noto-sans leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className={cn(
              "flex gap-base flex-wrap",
              centerContent ? "justify-center" : "justify-start"
            )}>
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="px-base py-xs bg-card/80 backdrop-blur-sm border border-brass-yellow/20 rounded-card text-body-sm font-medium text-blued-steel shadow-xs"
                >
                  {badge}
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className={cn(
              "flex gap-base flex-wrap",
              centerContent ? "justify-center" : "justify-start"
            )}>
              {primaryCTA && (
                <Button
                  variant="accent"
                  size="lg"
                  onClick={primaryCTA.onClick}
                  className="shadow-md hover:shadow-elevated transition-all duration-150"
                >
                  {primaryCTA.icon}
                  {primaryCTA.text}
                </Button>
              )}
              
              {secondaryCTA && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={secondaryCTA.onClick}
                  className="shadow-flat hover:shadow-md transition-all duration-150"
                >
                  {secondaryCTA.icon}
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}