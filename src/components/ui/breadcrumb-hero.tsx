'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { ChevronRight, ArrowLeft, Home } from 'lucide-react'

const breadcrumbHeroVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      size: {
        sm: "py-[var(--space-lg)]",
        md: "py-[var(--space-xl)]", 
        lg: "py-[var(--space-2xl)]"
      },
      backgroundPreset: {
        warm: "bg-gradient-to-br from-range-white via-copper-orange/15 to-shooting-bench",
        cool: "bg-gradient-to-br from-range-white via-scope-blue/20 to-trigger-blue/10", 
        mixed: "bg-gradient-to-br from-brass-yellow/15 via-scope-blue/12 to-copper-orange/18",
        subtle: "bg-gradient-to-br from-white via-shooting-bench/50 to-range-white",
        premium: "bg-gradient-to-br from-brass-yellow/12 via-copper-orange/15 to-range-white",
        mesh: "bg-gradient-to-br from-brass-yellow/20 via-copper-orange/15 to-walnut-stock/12"
      }
    },
    defaultVariants: {
      size: "md",
      backgroundPreset: "subtle"
    }
  }
)

interface BreadcrumbItem {
  label: string
  href: string
}

interface BackLinkProps {
  href: string
  label: string
}

export interface BreadcrumbHeroProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof breadcrumbHeroVariants> {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  badges?: string[]
  backLink?: BackLinkProps
}

export function BreadcrumbHero({
  className,
  breadcrumbs,
  title,
  description,
  icon: Icon,
  badges,
  backLink,
  size,
  backgroundPreset,
  ...props
}: BreadcrumbHeroProps) {
  return (
    <section
      className={cn(breadcrumbHeroVariants({ size, backgroundPreset }), className)}
      {...props}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh-warm opacity-20" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-[var(--space-md)]">
        <div className="space-y-[var(--space-md)]">
          
          {/* Back Link */}
          {backLink && (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="shadow-flat -ml-[var(--space-xs)] text-case-hardened hover:text-gunmetal-black"
                onClick={() => window.location.href = backLink.href}
              >
                <ArrowLeft className="h-4 w-4 mr-[var(--space-xs)]" />
                {backLink.label}
              </Button>
            </div>
          )}

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-[var(--space-xs)] text-body-sm">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item.href}>
                {index === 0 ? (
                  <a
                    href={item.href}
                    className="flex items-center text-case-hardened hover:text-gunmetal-black transition-colors duration-150"
                  >
                    <Home className="h-4 w-4 mr-[var(--space-xs)]" />
                    {item.label}
                  </a>
                ) : (
                  <>
                    <ChevronRight className="h-4 w-4 text-case-hardened/60" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gunmetal-black font-medium">
                        {item.label}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-case-hardened hover:text-gunmetal-black transition-colors duration-150"
                      >
                        {item.label}
                      </a>
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Hero Content */}
          <div className="space-y-[var(--space-base)]">
            <div className="flex items-start gap-[var(--space-base)]">
              {/* Icon */}
              {Icon && (
                <div className="flex-shrink-0">
                  <div className="p-[var(--space-sm)] bg-brass-yellow/10 rounded-card border border-brass-yellow/20">
                    <Icon className="h-6 w-6 text-brass-yellow" />
                  </div>
                </div>
              )}

              {/* Title and Description */}
              <div className="flex-1 min-w-0">
                <h1 className="text-heading-md md:text-heading-lg lg:text-heading-xl font-rajdhani font-bold text-gunmetal-black tracking-tight leading-tight">
                  {title}
                </h1>
                
                {description && (
                  <p className="text-body md:text-body-lg text-case-hardened font-noto-sans leading-relaxed mt-[var(--space-xs)] max-w-3xl">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-[var(--space-xs)]">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="default"
                    className="bg-card/80 text-blued-steel border border-brass-yellow/20 shadow-flat"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
