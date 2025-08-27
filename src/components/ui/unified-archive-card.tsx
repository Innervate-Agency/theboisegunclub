'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
// Badge import removed - used by consuming components
import { Button } from './button'

/**
 * Unified Archive Card Component
 * 
 * This component replaces the nested card structures found in:
 * - MarketplaceDealCard (Card inside TacticalCase)
 * - VendorCard (custom variants with conflicting tokens)
 * - EventCard (Card inside TacticalCase)
 * 
 * Design Philosophy:
 * - Single card implementation with consistent design tokens
 * - Theme-aware styling based on page context
 * - Eliminates nested containers that cause token conflicts
 * - Uses unified Boise landscape palette and shadow system
 */

const unifiedArchiveCardVariants = cva(
  // Base: Clean foundation using design system tokens
  "relative overflow-hidden transition-all duration-300 group cursor-pointer min-w-[320px] flex flex-col h-full",
  {
    variants: {
      // Theme determines color context (buysell, directory, events)
      theme: {
        buysell: [
          "mica", // Uses unified mica glassmorphism
          "border border-nav-buysell/20",
          "hover:border-nav-buysell/40",
          "hover:shadow-elevated", // Semantic shadow progression
          "bg-card text-card-foreground"
        ],
        directory: [
          "mica",
          "border border-nav-directory/20", 
          "hover:border-nav-directory/40",
          "hover:shadow-elevated",
          "bg-card text-card-foreground"
        ],
        events: [
          "mica",
          "border border-nav-events/20",
          "hover:border-nav-events/40", 
          "hover:shadow-elevated",
          "bg-card text-card-foreground"
        ]
      },
      // Consistent size system
      size: {
        compact: "p-base", // 16px
        standard: "p-lg",  // 24px  
        spacious: "p-xl"   // 32px
      },
      // Featured status with elevated styling
      featured: {
        true: "shadow-prominent hover:shadow-commanding border-2",
        false: "shadow-present"
      },
      // Interactive hover effects
      interactive: {
        true: "hover:scale-[1.02]",
        false: ""
      }
    },
    defaultVariants: {
      theme: "buysell",
      size: "standard", 
      featured: false,
      interactive: true
    }
  }
)

// Hero section gradient mappings using existing globals.css tokens
const getHeroGradient = (theme: string, category?: string) => {
  if (theme === 'buysell') {
    if (category?.includes('Firearms')) return 'card-gradient-firearms'
    if (category?.includes('Ammunition')) return 'card-gradient-ammunition'
    if (category?.includes('Optics')) return 'card-gradient-optics'
    if (category?.includes('Accessories')) return 'card-gradient-accessories'
    return 'card-gradient-buysell'
  }
  
  if (theme === 'directory') {
    if (category?.includes('Range')) return 'card-gradient-range'
    if (category?.includes('Gunsmith')) return 'card-gradient-gunsmith'
    if (category?.includes('Training')) return 'card-gradient-training-biz'
    if (category?.includes('Retail')) return 'card-gradient-retail'
    return 'card-gradient-directory'
  }
  
  if (theme === 'events') {
    if (category === 'Competition') return 'card-gradient-competition'
    if (category === 'Training') return 'card-gradient-training'
    if (category === 'Expo') return 'card-gradient-expo'
    if (category === 'Charity') return 'card-gradient-charity'
    if (category === 'Social') return 'card-gradient-social'
    return 'card-gradient-events'
  }
  
  return 'card-gradient-buysell'
}

// Theme color mappings
const getThemeColors = (theme: string) => {
  switch (theme) {
    case 'buysell':
      return {
        primary: 'text-nav-buysell',
        primaryBg: 'bg-nav-buysell',
        primaryHover: 'hover:bg-nav-buysell',
        primaryBorder: 'border-nav-buysell'
      }
    case 'directory':
      return {
        primary: 'text-nav-directory',
        primaryBg: 'bg-nav-directory', 
        primaryHover: 'hover:bg-nav-directory',
        primaryBorder: 'border-nav-directory'
      }
    case 'events':
      return {
        primary: 'text-nav-events',
        primaryBg: 'bg-nav-events',
        primaryHover: 'hover:bg-nav-events', 
        primaryBorder: 'border-nav-events'
      }
    default:
      return {
        primary: 'text-slate-blue',
        primaryBg: 'bg-slate-blue',
        primaryHover: 'hover:bg-slate-blue',
        primaryBorder: 'border-slate-blue'
      }
  }
}

export interface UnifiedArchiveCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof unifiedArchiveCardVariants> {
  // Core content
  title: string
  href: string
  
  // Hero section
  heroContent?: ReactNode
  heroImage?: string
  heroGradientCategory?: string
  
  // Header content
  headerBadges?: ReactNode
  headerActions?: ReactNode
  
  // Main content
  description?: string
  contentSections?: ReactNode[]
  
  // Footer content  
  footerContent?: ReactNode
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  
  // Styling
  theme?: 'buysell' | 'directory' | 'events'
  featured?: boolean
  interactive?: boolean
}

export function UnifiedArchiveCard({
  className,
  title,
  href,
  heroContent,
  heroImage,
  heroGradientCategory,
  headerBadges,
  headerActions,
  description,
  contentSections = [],
  footerContent,
  primaryAction,
  secondaryAction,
  theme = 'buysell',
  size = 'standard',
  featured = false,
  interactive = true,
  ...props
}: UnifiedArchiveCardProps) {
  
  const themeColors = getThemeColors(theme)
  const heroGradient = getHeroGradient(theme, heroGradientCategory)
  
  return (
    <Link href={href} className="block">
      <div 
        className={cn(unifiedArchiveCardVariants({ 
          theme, 
          size, 
          featured, 
          interactive 
        }), className)}
        {...props}
      >
        {/* Hero Section - Consistent height and styling */}
        {(heroContent || heroImage || heroGradientCategory) && (
          <div className={cn(
            "relative h-32 -m-lg mb-lg overflow-hidden",
            heroImage ? "" : heroGradient
          )}>
            {heroImage ? (
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Tactical texture particles */}
                <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
              </>
            )}
            
            {/* Custom hero content overlay */}
            {heroContent && (
              <div className="absolute inset-0 flex items-center justify-center">
                {heroContent}
              </div>
            )}
          </div>
        )}
        
        {/* Header Section */}
        <div className="flex items-start justify-between mb-base">
          <div className="flex-1">
            {headerBadges && (
              <div className="flex items-center gap-xs mb-xs">
                {headerBadges}
              </div>
            )}
            
            <h3 className={cn(
              "font-rajdhani font-bold text-xl leading-tight line-clamp-2 transition-colors duration-200",
              `group-hover:${themeColors.primary}`
            )}>
              {title}
            </h3>
          </div>
          
          {headerActions && (
            <div className="flex-shrink-0 ml-sm">
              {headerActions}
            </div>
          )}
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-lg">
            {description}
          </p>
        )}
        
        {/* Content Sections */}
        {contentSections.length > 0 && (
          <div className="space-y-base mb-lg flex-1">
            {contentSections.map((section, index) => (
              <div key={index}>{section}</div>
            ))}
          </div>
        )}
        
        {/* Footer Content */}
        {footerContent && (
          <div className="mb-base">
            {footerContent}
          </div>
        )}
        
        {/* Action Buttons */}
        {(primaryAction || secondaryAction) && (
          <div className="flex gap-sm pt-sm border-t border-border">
            {primaryAction && (
              <Button
                size="sm"
                className={cn(
                  "flex-1 font-rajdhani font-bold",
                  themeColors.primaryBg,
                  "text-white",
                  `${themeColors.primaryHover}/90`
                )}
                animationType="arrow"
                onClick={(e) => {
                  if (primaryAction.onClick) {
                    e.preventDefault()
                    e.stopPropagation()
                    primaryAction.onClick()
                  } else if (primaryAction.href) {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(primaryAction.href, '_blank')
                  }
                }}
              >
                {primaryAction.label}
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                size="sm"
                variant="outline"
                className={cn(
                  "font-rajdhani font-bold",
                  primaryAction ? "flex-shrink-0" : "flex-1",
                  `${themeColors.primaryBorder}/30`,
                  themeColors.primary,
                  themeColors.primaryHover,
                  "hover:text-white",
                  `hover:${themeColors.primaryBorder}`
                )}
                onClick={(e) => {
                  if (secondaryAction.onClick) {
                    e.preventDefault()
                    e.stopPropagation()
                    secondaryAction.onClick()
                  } else if (secondaryAction.href) {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(secondaryAction.href, '_blank')
                  }
                }}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
        
        {/* Featured indicator */}
        {featured && (
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
            `from-${theme === 'buysell' ? 'nav-buysell' : theme === 'directory' ? 'nav-directory' : 'nav-events'}`,
            `to-${theme === 'buysell' ? 'nav-buysell' : theme === 'directory' ? 'nav-directory' : 'nav-events'}/50`
          )} />
        )}
      </div>
    </Link>
  )
}

export { unifiedArchiveCardVariants }