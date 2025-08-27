'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { TacticalCase } from './tactical-case'
import { TacticalTypography } from './tactical-typography'
import { Button } from './button'
import { Badge } from './badge'
import { MotionDiv } from './optimized-motion'
import { ArrowRightIcon, BookOpenIcon, BuildingStorefrontIcon, CalendarDaysIcon, MapPinIcon, ShieldCheckIcon, ThemeIcon, UsersIcon } from '@heroicons/react/24/outline';

const tacticalHeroVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      theme: {
        home: "card-gradient-home",
        events: "card-gradient-events", 
        directory: "card-gradient-directory",
        armory: "card-gradient-armory",
        intel: "card-gradient-intel",
        marketplace: "card-gradient-marketplace",
        forums: "card-gradient-forums"
      },
      size: {
        compact: "py-12 md:py-16",
        standard: "py-16 md:py-20",
        large: "py-20 md:py-24",
        hero: "py-24 md:py-32"
      },
      layout: {
        centered: "text-center",
        left: "text-left",
        split: "text-left"
      }
    },
    defaultVariants: {
      theme: "home",
      size: "standard", 
      layout: "centered"
    }
  }
)

export interface TacticalHeroProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tacticalHeroVariants> {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  badges?: Array<{ label: string; variant?: string }>
  primaryCTA?: {
    label: string
    href?: string
    onClick?: () => void
    icon?: React.ElementType
  }
  secondaryCTA?: {
    label: string
    href?: string
    onClick?: () => void
    variant?: "outline" | "ghost"
  }
  stats?: Array<{
    label: string
    value: string | number
    icon?: React.ElementType
  }>
  backgroundPattern?: boolean
  showTacticalGrid?: boolean
}

export function TacticalHero({
  className,
  theme = "home",
  size = "standard",
  layout = "centered",
  title,
  subtitle,
  description,
  breadcrumbs,
  badges,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundPattern = true,
  showTacticalGrid = false,
  ...props
}: TacticalHeroProps) {

  // Get theme icon
  const getThemeIcon = (theme: string) => {
    const iconMap = {
      home: TrophyIcon,
      events: CalendarDaysIcon,
      directory: BookOpenIcon,
      armory: ShieldCheckIcon,
      intel: CursorArrowRaysIcon,
      marketplace: BuildingStorefrontIcon,
      forums: UsersIcon
    }
    return iconMap[theme as keyof typeof iconMap] || TrophyIcon
  }

  const ThemeIcon = getThemeIcon(theme || 'home')
  
  // Get theme color for tactical elements
  const getThemeColor = (theme: string) => {
    const colorMap = {
      home: 'nav-home',
      events: 'nav-events',
      directory: 'nav-directory', 
      armory: 'nav-armory',
      intel: 'nav-intel',
      marketplace: 'nav-marketplace',
      forums: 'nav-forums'
    }
    return colorMap[theme as keyof typeof colorMap] || 'nav-home'
  }

  const themeColor = getThemeColor(theme || 'home')

  return (
    <section 
      className={cn(tacticalHeroVariants({ theme, size, layout }), className)}
      {...props}
    >
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Tactical Grid Pattern */}
          {showTacticalGrid && (
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--${themeColor}) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--${themeColor}) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          )}
          
          {/* Subtle Particles */}
          <div className="absolute top-4 right-8 w-1 h-1 bg-card/30 rounded-full animate-pulse" />
          <div className="absolute bottom-8 left-12 w-1 h-1 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-12 right-20 w-1 h-1 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        </div>
      )}

      <div className="relative z-10 max-w-site mx-auto px-sm sm:px-md">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-lg">
            <ol className="flex items-center gap-xs text-body-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-xs">
                  {index > 0 && (
                    <ArrowRightIcon className="size-3 text-white/60" weight="bold" />
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-white/80 hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white/60">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={cn(
          "flex flex-col gap-lg",
          layout === "split" ? "lg:flex-row lg:items-center lg:justify-between" : "items-center"
        )}>
          {/* Content */}
          <div className={cn(
            "space-y-md",
            layout === "split" ? "lg:flex-1 lg:max-w-2xl" : "max-w-4xl"
          )}>
            {/* Theme Icon & Badges */}
            <div className={cn(
              "flex items-center gap-md",
              layout === "centered" ? "justify-center" : "justify-start"
            )}>
              <MotionDiv
                className={`text-${themeColor} p-sm border-2 border-${themeColor}/30 rounded-sm bg-${themeColor}/10`}
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                <ThemeIcon className="size-8" weight="bold" />
              </MotionDiv>
              
              {badges && badges.length > 0 && (
                <div className="flex items-center gap-xs">
                  {badges.map((badge, index) => (
                    <Badge key={index} variant={badge.variant as any || "default"}>
                      {badge.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Subtitle */}
            {subtitle && (
              <TacticalTypography
                variant="tactical-label"
                theme={theme as any}
                className="text-white/80"
              >
                {subtitle}
              </TacticalTypography>
            )}

            {/* Title */}
            <TacticalTypography
              variant="mission-title"
              className="text-white drop-shadow-sm"
              as="h1"
            >
              {title}
            </TacticalTypography>

            {/* Description */}
            {description && (
              <TacticalTypography
                variant="intel-brief"
                className="text-white/90 max-w-2xl"
              >
                {description}
              </TacticalTypography>
            )}

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className={cn(
                "flex items-center gap-md",
                layout === "centered" ? "justify-center" : "justify-start"
              )}>
                {primaryCTA && (
                  <Button className={`bg-${themeColor} text-white hover:bg-${themeColor}/90 font-rajdhani font-bold`}
                    onClick={primaryCTA.onClick}
                    animationType="arrow"
                  >
                    {primaryCTA.icon && React.createElement(primaryCTA.icon, { 
                      className: "size-5 mr-xs", 
                      weight: "bold" 
                    })}
                    {primaryCTA.label}
                  </Button>
                )}
                
                {secondaryCTA && (
                  <Button
                    variant={secondaryCTA.variant || "outline"} className="border-white/30 text-white hover:bg-card/10 font-rajdhani font-medium"
                    onClick={secondaryCTA.onClick}
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className={cn(
              "grid gap-md",
              layout === "split" ? "lg:grid-cols-1" : "grid-cols-1 sm:grid-cols-3",
              stats.length <= 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            )}>
              {stats.map((stat, index) => (
                <TacticalCase
                  key={index}
                  variant="elevated"
                  size="sm"
                  theme={theme as any}
                  showCornerBrackets={true}
                  showLatches={false}
                  className="text-center"
                >
                  <div className="space-y-xs">
                    {stat.icon && React.createElement(stat.icon, {
                      className: `size-6 mx-auto text-${themeColor}`,
                      weight: "bold"
                    })}
                    <TacticalTypography variant="heading-lg" className="text-white">
                      {stat.value}
                    </TacticalTypography>
                    <TacticalTypography variant="body-sm" className="text-white/80">
                      {stat.label}
                    </TacticalTypography>
                  </div>
                </TacticalCase>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}