'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"

/**
 * Unified Gallery Card System
 * 
 * ELIMINATES RUSSIAN NESTING DOLL PROBLEMS:
 * - Single source of truth for all card animations
 * - Consistent visual hierarchy across all sections
 * - Unified filter and view-type integration
 * - Standardized hover states and interactions
 */

const unifiedGalleryCardVariants = cva(
  // Base: Clean foundation with single animation source
  "group relative overflow-hidden cursor-pointer transition-all duration-300 ease-out",
  {
    variants: {
      section: {
        events: "bg-nav-events/5 hover:bg-nav-events/8",
        directory: "bg-nav-directory/5 hover:bg-nav-directory/8", 
        armory: "bg-nav-armory/5 hover:bg-nav-armory/8",
        intel: "bg-nav-intel/5 hover:bg-nav-intel/8",
        buysell: "bg-nav-buysell/5 hover:bg-nav-buysell/8",
        forums: "bg-nav-forums/5 hover:bg-nav-forums/8"
      },
      viewMode: {
        grid: "flex flex-col h-full min-h-full",
        dense: "flex flex-col h-full min-h-full",
        card: "flex flex-col h-full min-h-full",
        compact: "flex flex-row items-center gap-md p-md h-auto",
        list: "flex flex-row items-center gap-lg p-lg h-auto",
        table: "flex flex-row items-center gap-xl p-base h-auto"
      },
      tier: {
        free: "",
        premium: "ring-1 ring-rusty-orange/20",
        featured: "ring-2 ring-nav-events/30"
      },
      size: {
        sm: "p-mobile-sm sm:p-base",
        md: "p-mobile-md sm:p-md", 
        lg: "p-mobile-lg sm:p-lg"
      }
    },
    defaultVariants: {
      section: "events",
      viewMode: "grid",
      tier: "free",
      size: "md"
    }
  }
)

export interface UnifiedGalleryCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof unifiedGalleryCardVariants> {
  // Core content
  title: string
  subtitle?: string
  description?: string
  href: string
  
  // Hero section (optional)
  heroGradient?: string
  heroIcon?: React.ComponentType<{ className?: string }>
  heroContent?: React.ReactNode
  
  // Metadata
  metadata?: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
  }>
  
  // Badges and status
  badges?: Array<{
    label: string
    variant?: string
    color?: string
  }>
  
  // Actions
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryActions?: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick: () => void
  }>
  
  // Content slots
  beforeContent?: React.ReactNode
  afterContent?: React.ReactNode
  sideContent?: React.ReactNode // For compact/list/table modes
}

const UnifiedGalleryCard = React.forwardRef<HTMLDivElement, UnifiedGalleryCardProps>(
  ({ 
    className,
    section = "events",
    viewMode = "grid", 
    tier = "free",
    size = "md",
    title,
    subtitle,
    description,
    href,
    heroGradient,
    heroIcon: HeroIcon,
    heroContent,
    metadata = [],
    badges = [],
    primaryAction,
    secondaryActions = [],
    beforeContent,
    afterContent,
    sideContent,
    ...props 
  }, ref) => {
    
    const isCompactView = viewMode === 'compact' || viewMode === 'list' || viewMode === 'table'
    
    // Get section color theme
    const getSectionColors = (section: string) => {
      const colorMap = {
        events: {
          primary: 'nav-events',
          text: 'text-nav-events',
          border: 'border-nav-events',
          bg: 'bg-nav-events'
        },
        directory: {
          primary: 'nav-directory',
          text: 'text-nav-directory', 
          border: 'border-nav-directory',
          bg: 'bg-nav-directory'
        },
        armory: {
          primary: 'nav-armory',
          text: 'text-nav-armory',
          border: 'border-nav-armory', 
          bg: 'bg-nav-armory'
        },
        intel: {
          primary: 'nav-intel',
          text: 'text-nav-intel',
          border: 'border-nav-intel',
          bg: 'bg-nav-intel'
        },
        buysell: {
          primary: 'nav-buysell', 
          text: 'text-nav-buysell',
          border: 'border-nav-buysell',
          bg: 'bg-nav-buysell'
        },
        forums: {
          primary: 'nav-forums',
          text: 'text-nav-forums',
          border: 'border-nav-forums',
          bg: 'bg-nav-forums'
        }
      }
      return colorMap[section as keyof typeof colorMap] || colorMap.events
    }
    
    const colors = getSectionColors(section)
    
    return (
      <Link href={href} className="block h-full">
        <Card
          variant="tactical-events"
          tacticalTheme={section}
          showCategoryIcon={false}
          className={cn(
            unifiedGalleryCardVariants({ section, viewMode, tier, size }),
            "rounded-xs h-full",
            // Intel-style shadow animation - perfect hover effect
            "shadow-whisper hover:shadow-elevated hover:-translate-y-1",
            className
          )}
          ref={ref}
          {...props}
        >
          {beforeContent}
          
          {/* Hero Section - only for grid views */}
          {!isCompactView && (HeroIcon || heroContent || heroGradient) && (
            <div className={cn(
              "relative mb-lg -m-lg mt-[-24px] mx-[-24px] h-32 overflow-hidden border-b border-white/10",
              heroGradient || "bg-gradient-to-br from-slate-500 to-slate-600"
            )}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {HeroIcon && (
                <div className="absolute top-sm left-sm">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
                    <HeroIcon className="size-6 text-white" />
                  </div>
                </div>
              )}
              
              {heroContent}
            </div>
          )}
          
          {/* Content Layout */}
          <div className={cn(
            isCompactView ? "flex items-center gap-md flex-1" : "flex flex-col gap-md flex-1"
          )}>
            
            {/* Side content for compact views */}
            {isCompactView && sideContent && (
              <div className="flex-shrink-0">
                {sideContent}
              </div>
            )}
            
            {/* Main content - restructured for proper button alignment */}
            <div className={cn(
              isCompactView ? "flex-1 min-w-0" : "flex-1 flex flex-col"
            )}>
              
              {/* Content area that can grow */}
              <div className="flex-1 flex flex-col">
                {/* Title and description */}
                <div className={cn(
                  isCompactView ? "mb-sm" : "mb-md"
                )}>
                  <h3 className={cn(
                    "font-rajdhani font-bold leading-none group-hover:transition-colors duration-200",
                    isCompactView ? "text-xl" : "text-2xl",
                    `group-hover:${colors.text}`,
                    "text-card-foreground"
                  )}>
                    {title}
                  </h3>
                  {subtitle && (
                    <h4 className={cn(
                      "font-rajdhani font-medium text-base text-card-foreground/80 leading-none mt-xs mb-md",
                      isCompactView ? "mb-sm" : "mb-md"
                    )}>
                      {subtitle}
                    </h4>
                  )}
                  {description && (
                    <p className={cn(
                      "text-muted-foreground",
                      isCompactView ? "text-sm line-clamp-1" : "text-sm line-clamp-3"
                    )}>
                      {description}
                    </p>
                  )}
                </div>
                
                {/* Badges */}
                {badges.length > 0 && (
                  <div className={cn(
                    "flex flex-wrap gap-xs",
                    isCompactView ? "mb-sm" : "mb-md"
                  )}>
                    {badges.map((badge, index) => (
                      <Badge 
                        key={index}
                        variant={badge.variant || "outline"}
                        size="xs"
                        className={cn(
                          "font-rajdhani font-bold text-[10px] uppercase tracking-wide px-sm py-xs",
                          badge.color ? `bg-${badge.color}/10 text-${badge.color} border-${badge.color}/30` : ''
                        )}
                      >
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {/* Metadata - grows to fill space */}
                {metadata.length > 0 ? (
                  <div className="space-y-xs bg-muted/30 rounded-xs p-sm flex-1">
                    {metadata.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex items-center gap-sm text-sm">
                          <Icon className={`size-4 flex-shrink-0 ${colors.text}`} />
                          <span className="font-medium text-card-foreground">{item.label}:</span>
                          <span className="text-muted-foreground">{item.value}</span>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex-1"></div>
                )}
              </div>
              
              {/* Actions - always at bottom */}
              {(primaryAction || secondaryActions.length > 0) && (
                <div className={cn(
                  "mt-md flex-shrink-0",
                  isCompactView ? "flex items-center gap-sm" : ""
                )}>
                  {primaryAction && (
                    <Button
                      size={isCompactView ? "sm" : "sm"}
                      variant="outline"
                      className={cn(
                        `border-${colors.primary}/30 ${colors.text} group-hover:bg-${colors.primary} group-hover:text-white group-hover:border-${colors.primary}`,
                        "transition-all duration-300 font-rajdhani font-bold",
                        isCompactView ? "flex-shrink-0" : "w-full"
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (primaryAction.onClick) primaryAction.onClick()
                        else if (primaryAction.href) window.open(primaryAction.href, '_blank')
                      }}
                    >
                      {primaryAction.label}
                    </Button>
                  )}
                  
                  {secondaryActions.length > 0 && (
                    <div className="flex gap-xs">
                      {secondaryActions.map((action, index) => {
                        const Icon = action.icon
                        return (
                          <button
                            key={index}
                            className={cn(
                              "w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center transition-all duration-200",
                              `hover:bg-${colors.primary} hover:border-${colors.primary}`
                            )}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              action.onClick()
                            }}
                            title={action.label}
                          >
                            <Icon className="h-4 w-4 text-white" />
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {afterContent}
        </Card>
      </Link>
    )
  }
)

UnifiedGalleryCard.displayName = "UnifiedGalleryCard"

export { UnifiedGalleryCard, unifiedGalleryCardVariants }
export type { UnifiedGalleryCardProps }