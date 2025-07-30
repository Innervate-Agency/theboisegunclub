'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { ChevronDown } from "lucide-react"

const pageHeroVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      size: {
        sm: "py-12",
        md: "py-16", 
        lg: "py-20",
        xl: "py-24"
      },
      backgroundPreset: {
        warm: "bg-gradient-to-br from-brass-yellow/5 via-copper-orange/5 to-walnut-stock/5",
        cool: "bg-gradient-to-br from-scope-blue/5 via-trigger-blue/5 to-cerakote-blue/5", 
        mixed: "bg-gradient-to-br from-brass-yellow/5 via-scope-blue/5 to-walnut-stock/5",
        gunclub: "bg-gradient-to-br from-range-white to-shooting-bench"
      },
      intensity: {
        subtle: "bg-opacity-30",
        medium: "bg-opacity-60", 
        premium: "bg-opacity-90"
      }
    },
    defaultVariants: {
      size: "md",
      backgroundPreset: "gunclub",
      intensity: "medium"
    }
  }
)

interface ActionProps {
  text: string
  href: string
}

export interface PageHeroProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof pageHeroVariants> {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  primaryAction?: ActionProps
  secondaryAction?: ActionProps
  icon?: React.ComponentType<{ className?: string }>
  showScrollIndicator?: boolean
}

export function PageHero({
  className,
  title,
  subtitle,
  description,
  badge,
  primaryAction,
  secondaryAction,
  icon: Icon,
  size,
  backgroundPreset,
  intensity,
  showScrollIndicator = false,
  ...props
}: PageHeroProps) {
  return (
    <section
      className={cn(pageHeroVariants({ size, backgroundPreset, intensity }), className)}
      {...props}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh-warm opacity-20" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          
          {/* Icon */}
          {Icon && (
            <div className="flex justify-center">
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-full border border-brass-yellow/20 shadow-sm">
                <Icon className="h-8 w-8 text-brass-yellow" />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="space-y-6">
            {badge && (
              <div className="flex justify-center">
                <div className="px-4 py-2 bg-brass-yellow/10 border border-brass-yellow/20 rounded-full text-sm font-medium text-brass-yellow">
                  {badge}
                </div>
              </div>
            )}
            
            {subtitle && (
              <p className="text-sm uppercase tracking-wider font-medium text-case-hardened">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani font-bold text-gunmetal-black tracking-tight leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg text-case-hardened font-noto-sans leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-4 justify-center flex-wrap">
              {primaryAction && (
                <Button
                  variant="flat"
                  size="lg"
                  className="shadow-flat"
                  onClick={() => window.location.href = primaryAction.href}
                >
                  {primaryAction.text}
                </Button>
              )}
              
              {secondaryAction && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="shadow-flat"
                  onClick={() => window.location.href = secondaryAction.href}
                >
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div className="flex justify-center pt-8">
              <div className="animate-bounce">
                <ChevronDown className="h-6 w-6 text-case-hardened/60" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}