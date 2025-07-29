'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const featureGridVariants = cva(
  "w-full py-16",
  {
    variants: {
      variant: {
        default: "bg-background",
        warm: "bg-gradient-hero-warm",
        glass: "mica-overlay"
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

const featureCardVariants = cva(
  "group relative bg-card rounded-lg border-border p-6 shadow-sm hover:shadow-md transition-all duration-200 ease-out",
  {
    variants: {
      cardVariant: {
        default: "border-border hover:border-scope-blue/30",
        glass: "mica-card border-border/30 hover:shadow-lg transition-shadow duration-200",
        branded: "border-scope-blue/20 hover:border-scope-blue/40 hover:bg-scope-blue/5"
      }
    },
    defaultVariants: {
      cardVariant: "default"
    }
  }
)

interface Feature {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  link?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

export interface FeatureGridProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof featureGridVariants> {
  title?: string
  subtitle?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  cardVariant?: VariantProps<typeof featureCardVariants>['cardVariant']
}

export function FeatureGrid({
  className,
  title,
  subtitle,
  description,
  features,
  columns = 3,
  cardVariant = "default",
  variant,
  spacing,
  ...props
}: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }
  
  return (
    <section className={cn(featureGridVariants({ variant, spacing }), className)} {...props}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-rajdhani font-semibold text-copper-orange mb-2 tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-gunmetal-black mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-case-hardened font-noto-sans max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={cn("grid gap-6", gridCols[columns])}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <div
                key={index}
                className={cn(featureCardVariants({ cardVariant }))}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  {Icon && (
                    <div className="flex items-center justify-center w-12 h-12 bg-brass-yellow/10 rounded-lg group-hover:bg-brass-yellow/20 transition-colors duration-200">
                      <Icon className="icon-lg icon-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-rajdhani font-bold text-gunmetal-black group-hover:text-brass-yellow transition-colors duration-200">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-case-hardened font-noto-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Link */}
                  {feature.link && (
                    <div className="pt-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn p-0 h-auto font-rajdhani font-semibold text-brass-yellow hover:text-copper-orange"
                        onClick={feature.link.onClick}
                      >
                        {feature.link.text}
                        <ArrowRight className="ml-1 icon-sm group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brass-yellow to-copper-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
