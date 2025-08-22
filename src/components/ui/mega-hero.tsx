'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const megaHeroVariants = cva(
  "relative w-full flex items-center justify-center overflow-hidden py-16",
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
        home: "bg-gradient-home-hero",
        events: "bg-gradient-events-hero", 
        directory: "bg-gradient-directory-hero",
        guides: "bg-gradient-to-br from-(--color-info-river) to-[color-mix(in_srgb,var(--color-info-river)_80%,var(--color-warning-clay))]",
        map: "bg-gradient-intel-hero",
        marketplace: "bg-gradient-marketplace-hero",
        armory: "bg-gradient-armory-hero",
        community: "bg-gradient-to-br from-(--color-ember-glow) to-[color-mix(in_srgb,var(--color-ember-glow)_80%,var(--color-rusty-orange))]",
        gunclub: "bg-gradient-to-br from-(--color-light-peachy) via-(--color-crisp-off-white) to-(--color-light-peachy)"
      }
    },
    defaultVariants: {
      height: "lg",
      backgroundPreset: "home"
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
      
      <div className="relative z-10 w-full max-w-site mx-auto px-4 py-16">
        <div className={cn(
          "space-y-4",
          centerContent && "text-center"
        )}>
          
          {/* Icon */}
          {icon && (
            <div className={cn(
              "text-(--color-crisp-off-white)",
              centerContent ? "flex justify-center" : "flex"
            )}>
              {icon}
            </div>
          )}

          {/* Main content */}
          <div className="space-y-4">
            {subtitle && (
              <p className="text-body-sm uppercase tracking-wider font-medium text-(--color-crisp-off-white)">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-heading-xl md:text-display-sm lg:text-display-lg font-rajdhani font-bold text-(--color-crisp-off-white) tracking-tight leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-body-lg md:text-heading-sm text-(--color-crisp-off-white)/90 font-noto-sans leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className={cn(
              "flex gap-(--spacing-base) flex-wrap",
              centerContent ? "justify-center" : "justify-start"
            )}>
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-16 bg-(var(--color-crisp-off-white))/20 backdrop-blur-sm border border-(var(--color-crisp-off-white))/30 rounded-(--radius-base) text-body-sm font-medium text-(--color-crisp-off-white) shadow-(--shadow-xs)"
                >
                  {badge}
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className={cn(
              "flex gap-(--spacing-base) flex-wrap",
              centerContent ? "justify-center" : "justify-start"
            )}>
              {primaryCTA && (
                <Button
                  variant="default" onClick={primaryCTA.onClick}
                  className="shadow-present hover:shadow-elevated transition-all duration-150"
                >
                  {primaryCTA.icon}
                  {primaryCTA.text}
                </Button>
              )}
              
              {secondaryCTA && (
                <Button
                  variant="outline" onClick={secondaryCTA.onClick}
                  className="shadow-flat hover:shadow-present transition-all duration-150"
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