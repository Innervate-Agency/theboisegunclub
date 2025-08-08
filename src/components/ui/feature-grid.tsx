'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const featureGridVariants = cva(
  "w-full py-[var(--space-2xl)]",
  {
    variants: {
      variant: {
        default: "bg-background",
        warm: "bg-gradient-hero-warm",
        glass: "mica-overlay"
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

const featureCardVariants = cva(
  "group relative bg-card rounded-card border-border p-md shadow-flat hover:shadow-md transition-all duration-200 ease-out",
  {
    variants: {
      cardVariant: {
        default: "border-border hover:border-scope-blue/30",
        glass: "mica-card border-border/30 hover:shadow-elevated transition-shadow duration-200",
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
  icon?: React.ReactElement<{ className?: string }>
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
      <div className="max-w-6xl mx-auto px-md">
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-[var(--space-xl)]">
            {subtitle && (
              <p className="text-body-sm font-rajdhani font-semibold text-rusty-orange mb-[var(--space-xs)] tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-heading-lg md:text-heading-xl font-rajdhani font-bold text-dark-chocolate mb-[var(--space-base)]">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-body-lg text-warning-amber font-noto-sans max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={cn("grid gap-md", gridCols[columns])}>
          {features.map((feature, index) => {
            
            return (
              <div
                key={index}
                className={cn(featureCardVariants({ cardVariant }))}
              >
                <div className="space-y-[var(--space-base)]">
                  {/* Icon */}
                  {feature.icon && (
                    <div className="flex items-center justify-center w-12 h-12 bg-sandy-ochre/10 rounded-card group-hover:bg-sandy-ochre/20 transition-colors duration-200">
                      {React.cloneElement(feature.icon, { className: "icon-lg icon-primary group-hover:scale-110 transition-transform duration-200" })}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="space-y-[var(--space-sm)]">
                    <h3 className="text-heading-sm font-rajdhani font-bold text-dark-chocolate group-hover:text-sandy-ochre transition-colors duration-200">
                      {feature.title}
                    </h3>
                    
                    <p className="text-body-sm text-warning-amber font-noto-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Link */}
                  {feature.link && (
                    <div className="pt-[var(--space-xs)]">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn p-0 h-auto font-rajdhani font-semibold text-sandy-ochre hover:text-rusty-orange"
                        onClick={feature.link.onClick}
                      >
                        {feature.link.text}
                        <ArrowRight className="ml-[var(--space-xs)] icon-sm group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sandy-ochre to-rusty-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
