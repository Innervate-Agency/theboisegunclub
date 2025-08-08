'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from 'lucide-react'

const statsShowcaseVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "bg-card",
        branded: "bg-gradient-hero-warm",
        glass: "mica-card"
      },
      spacing: {
        comfortable: "py-[var(--space-2xl)]",
        compact: "py-[var(--space-xl)]",
        minimal: "py-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      spacing: "comfortable"
    }
  }
)

interface StatItem {
  label: string
  value: string | number
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  change?: {
    value: string
    trend: 'up' | 'down' | 'neutral'
  }
}

export interface StatsShowcaseProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof statsShowcaseVariants> {
  title?: string
  subtitle?: string
  stats: StatItem[]
}

export function StatsShowcase({
  className,
  title,
  subtitle,
  stats,
  variant,
  spacing,
  ...props
}: StatsShowcaseProps) {
  return (
    <section
      className={cn(statsShowcaseVariants({ variant, spacing }), className)}
      {...props}
    >
      <div className="w-full max-w-6xl mx-auto px-md">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-[var(--space-xl)]">
            {title && (
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-rajdhani font-bold text-foreground mb-[var(--space-sm)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body-lg text-muted-foreground font-noto-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <div
                key={index}
                className="group relative bg-card border-border rounded-card p-md shadow-flat hover:shadow-md transition-all duration-200 ease-out"
              >
                <div className="space-y-[var(--space-base)]">
                  {/* Icon and Value */}
                  <div className="flex items-center justify-between">
                    {Icon && (
                      <div className="p-xs bg-rusty-orange/10 rounded-card">
                        <Icon className="h-5 w-5 text-rusty-orange" />
                      </div>
                    )}
                    
                    {stat.change && (
                      <div className="flex items-center gap-xs text-caption">
                        {stat.change.trend === 'up' && (
                          <TrendingUp className="h-3 w-3 text-rifling-green" />
                        )}
                        {stat.change.trend === 'down' && (
                          <TrendingDown className="h-3 w-3 text-rusty-orange" />
                        )}
                        <span className={cn(
                          "font-medium",
                          stat.change.trend === 'up' && "text-rifling-green",
                          stat.change.trend === 'down' && "text-rusty-orange",
                          stat.change.trend === 'neutral' && "text-muted-foreground"
                        )}>
                          {stat.change.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Main Stat */}
                  <div className="space-y-[var(--space-micro)]">
                    <div className="text-heading-lg font-rajdhani font-bold text-card-foreground group-hover:text-rusty-orange transition-colors duration-200">
                      {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    </div>
                    <div className="text-body-sm font-noto-sans font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  {stat.description && (
                    <p className="text-caption text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </div>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
