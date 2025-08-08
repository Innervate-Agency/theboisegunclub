'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const megaHeroVariants = cva(
  "relative w-full flex items-center justify-center overflow-hidden py-[var(--space-3xl)]",
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
        home: "bg-gradient-to-br from-[var(--color-rusty-orange)] to-[color-mix(in_srgb,var(--color-rusty-orange)_80%,var(--color-ember-glow))]",
        events: "bg-gradient-to-br from-[var(--color-slate-blue)] to-[color-mix(in_srgb,var(--color-slate-blue)_80%,black)]",
        directory: "bg-gradient-to-br from-[var(--color-sagebrush-green)] to-[color-mix(in_srgb,var(--color-sagebrush-green)_80%,var(--color-sandy-ochre))]",
        guides: "bg-gradient-to-br from-[var(--color-info-river)] to-[color-mix(in_srgb,var(--color-info-river)_80%,var(--color-warning-clay))]",
        map: "bg-gradient-to-br from-[var(--color-sandy-ochre)] to-[color-mix(in_srgb,var(--color-sandy-ochre)_80%,var(--color-sagebrush-green))]",
        marketplace: "bg-gradient-to-br from-[var(--color-warning-clay)] to-[color-mix(in_srgb,var(--color-warning-clay)_80%,var(--color-sagebrush-green))]",
        community: "bg-gradient-to-br from-[var(--color-ember-glow)] to-[color-mix(in_srgb,var(--color-ember-glow)_80%,var(--color-rusty-orange))]",
        gunclub: "bg-gradient-to-br from-[var(--color-light-peachy)] via-[var(--color-crisp-off-white)] to-[var(--color-light-peachy)]"
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
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-md py-[var(--space-2xl)]">
        <div className={cn(
          "space-y-[var(--space-lg)]",
          centerContent && "text-center"
        )}>
          
          {/* Icon */}
          {icon && (
            <div className={cn(
              "text-[var(--color-crisp-off-white)]",
              centerContent ? "flex justify-center" : "flex"
            )}>
              {icon}
            </div>
          )}

          {/* Main content */}
          <div className="space-y-[var(--space-md)]">
            {subtitle && (
              <p className="text-body-sm uppercase tracking-wider font-medium text-[var(--color-crisp-off-white)]">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-heading-xl md:text-display-sm lg:text-6xl font-rajdhani font-bold text-[var(--color-crisp-off-white)] tracking-tight leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-body-lg md:text-heading-sm text-[var(--color-crisp-off-white)]/90 font-noto-sans leading-relaxed max-w-3xl mx-auto">
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
                  className="px-base py-xs bg-[var(--color-crisp-off-white)]/20 backdrop-blur-sm border border-[var(--color-crisp-off-white)]/30 rounded-card text-body-sm font-medium text-[var(--color-crisp-off-white)] shadow-xs"
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