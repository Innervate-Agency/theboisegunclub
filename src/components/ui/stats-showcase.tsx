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
        glass: "bg-card/80 backdrop-blur-sm"
      },
      spacing: {
        comfortable: "py-16",
        compact: "py-12",
        minimal: "py-8"
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
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-case-hardened font-noto-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <div
                key={index}
                className="group relative bg-card border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 ease-out"
              >
                <div className="space-y-4">
                  {/* Icon and Value */}
                  <div className="flex items-center justify-between">
                    {Icon && (
                      <div className="p-2 bg-copper-orange/10 rounded-lg">
                        <Icon className="h-5 w-5 text-copper-orange" />
                      </div>
                    )}
                    
                    {stat.change && (
                      <div className="flex items-center gap-1 text-xs">
                        {stat.change.trend === 'up' && (
                          <TrendingUp className="h-3 w-3 text-clubhouse-lawn-green" />
                        )}
                        {stat.change.trend === 'down' && (
                          <TrendingDown className="h-3 w-3 text-copper-orange" />
                        )}
                        <span className={cn(
                          "font-medium",
                          stat.change.trend === 'up' && "text-clubhouse-lawn-green",
                          stat.change.trend === 'down' && "text-copper-orange",
                          stat.change.trend === 'neutral' && "text-case-hardened"
                        )}>
                          {stat.change.value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Main Stat */}
                  <div className="space-y-1">
                    <div className="text-3xl font-rajdhani font-bold text-card-foreground group-hover:text-copper-orange transition-colors duration-200">
                      {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    </div>
                    <div className="text-sm font-noto-sans font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  {stat.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </div>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-copper-orange to-brass-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
