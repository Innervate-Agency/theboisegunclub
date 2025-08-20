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
        sm: "py-16",
        md: "py-16", 
        lg: "py-16",
        xl: "py-16"
      },
      backgroundPreset: {
        warm: "bg-gradient-to-br from-sandy-ochre/5 via-rusty-orange/5 to-walnut-stock/5",
        cool: "bg-gradient-to-br from-scope-blue/5 via-trigger-blue/5 to-cerakote-blue/5", 
        mixed: "bg-gradient-to-br from-sandy-ochre/5 via-scope-blue/5 to-walnut-stock/5",
        gunclub: "bg-gradient-to-br from-range-white to-card-surface"
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
      
      <div className="relative z-10 w-full max-w-site mx-auto px-md">
        <div className="text-center space-y-4">
          
          {/* Icon */}
          {Icon && (
            <div className="flex justify-center">
              <div className="p-base bg-card/80 backdrop-blur-sm rounded-full border border-sandy-ochre/20 shadow-flat">
                <Icon className="size-8 text-sandy-ochre" />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="space-y-4">
            {badge && (
              <div className="flex justify-center">
                <div className="px-base py-xs bg-sandy-ochre/10 border border-sandy-ochre/20 rounded-full text-body-sm font-medium text-sandy-ochre">
                  {badge}
                </div>
              </div>
            )}
            
            {subtitle && (
              <p className="text-body-sm uppercase tracking-wider font-medium text-warning-amber">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-heading-lg md:text-heading-xl lg:text-display-sm font-rajdhani font-bold text-dark-chocolate tracking-tight leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-body-lg text-warning-amber font-noto-sans leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-base justify-center flex-wrap">
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
            <div className="flex justify-center pt-(--spacing-lg)">
              <div className="animate-bounce">
                <ChevronDown className="size-6 text-warning-amber/60" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}