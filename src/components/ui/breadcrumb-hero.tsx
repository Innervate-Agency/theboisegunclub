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
        sm: "py-lg",
        md: "py-16", 
        lg: "py-16"
      },
      backgroundPreset: {
        warm: "bg-gradient-to-br from-range-white via-rusty-orange/15 to-card-surface",
        cool: "bg-gradient-to-br from-range-white via-scope-blue/20 to-trigger-blue/10", 
        mixed: "bg-gradient-to-br from-sandy-ochre/15 via-scope-blue/12 to-rusty-orange/18",
        subtle: "bg-gradient-to-br from-white via-card-surface/50 to-range-white",
        premium: "bg-gradient-to-br from-sandy-ochre/12 via-rusty-orange/15 to-range-white",
        mesh: "bg-gradient-to-br from-sandy-ochre/20 via-rusty-orange/15 to-walnut-stock/12"
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
      
      <div className="relative z-10 w-full max-w-site mx-auto px-md">
        <div className="space-y-4">
          
          {/* Back Link */}
          {backLink && (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="shadow-flat -ml-(--spacing-xs) text-warning-amber hover:text-dark-chocolate"
                onClick={() => window.location.href = backLink.href}
              >
                <ArrowLeft className="size-4 mr-(--spacing-xs)" />
                {backLink.label}
              </Button>
            </div>
          )}

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-(--spacing-xs) text-body-sm">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item.href}>
                {index === 0 ? (
                  <a
                    href={item.href}
                    className="flex items-center text-warning-amber hover:text-dark-chocolate transition-colors duration-150"
                  >
                    <Home className="size-4 mr-(--spacing-xs)" />
                    {item.label}
                  </a>
                ) : (
                  <>
                    <ChevronRight className="size-4 text-warning-amber/60" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-dark-chocolate font-medium">
                        {item.label}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-warning-amber hover:text-dark-chocolate transition-colors duration-150"
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
          <div className="space-y-4">
            <div className="flex items-start gap-base">
              {/* Icon */}
              {Icon && (
                <div className="flex-shrink-0">
                  <div className="p-sm bg-sandy-ochre/10 rounded-sm border border-sandy-ochre/20">
                    <Icon className="size-6 text-sandy-ochre" />
                  </div>
                </div>
              )}

              {/* Title and Description */}
              <div className="flex-1 min-w-0">
                <h1 className="text-heading-md md:text-heading-lg lg:text-heading-xl font-rajdhani font-bold text-dark-chocolate tracking-tight leading-tight">
                  {title}
                </h1>
                
                {description && (
                  <p className="text-body md:text-body-lg text-warning-amber font-noto-sans leading-relaxed mt-(--spacing-xs) max-w-3xl">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-xs">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="default"
                    className="bg-card/80 text-blued-steel border border-sandy-ochre/20 shadow-flat"
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
