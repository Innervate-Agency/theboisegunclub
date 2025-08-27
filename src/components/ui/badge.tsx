'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Phosphor Icons - Primary choice for tactical aesthetic
import { AcademicCapIcon, ArchiveBoxIcon, ArrowLongRightIcon, ArrowTrendingUpIcon, BanknotesIcon, BellIcon, BoltIcon, BookOpenIcon, BuildingOfficeIcon, CalendarIcon, CheckCircleIcon, CheckIcon, ClockIcon, CloudIcon, CurrencyDollarIcon, DocumentCheckIcon, EllipsisHorizontalIcon, ExclamationCircleIcon, ExclamationTriangleIcon, FireIcon, FlagIcon, HomeIcon, InformationCircleIcon, LockClosedIcon, LockOpenIcon, MapPinIcon, ShieldCheckIcon, ShieldExclamationIcon, SparklesIcon, SpeakerWaveIcon, StarIcon, SunIcon, TagIcon, TrophyIcon, TruckIcon, UserGroupIcon, UserIcon, ViewfinderCircleIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"

const badgeVariants = cva(
  "inline-flex items-center gap-xs font-rajdhani font-semibold text-button-xs border transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        // Intel Page Badges - Theme-adaptive using CSS custom properties
        "intel-location": "bg-[var(--nav-intel)] bg-opacity-10 text-[var(--nav-intel)] border-[var(--nav-intel)] border-opacity-30 rounded-xs",
        "intel-weather": "bg-primary/10 text-primary border-primary/30 rounded-xs", 
        "intel-verified": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "intel-unverified": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "intel-priority": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "intel-access": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "intel-restricted": "bg-destructive/10 text-destructive border-destructive/30 rounded-xs",
        "intel-closed": "bg-[var(--muted)] bg-opacity-20 text-[var(--muted-foreground)] border-[var(--muted)] border-opacity-40 rounded-xs",
        "intel-distance": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "intel-elevation": "bg-foothills-purple/10 text-foothills-purple border-foothills-purple/30 rounded-xs",

        // Directory Page Badges - Theme-adaptive
        "directory-business": "bg-[var(--nav-directory)] bg-opacity-10 text-[var(--nav-directory)] border-[var(--nav-directory)] border-opacity-30 rounded-xs",
        "directory-verified": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "directory-gold": "bg-weathered-gold/10 text-weathered-gold border-weathered-gold/30 rounded-xs",
        "directory-silver": "bg-pale-stone/10 text-gunmetal border-gunmetal/30 rounded-xs",
        "directory-copper": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",
        "directory-free": "bg-[var(--card)] border-[var(--foreground)] border-opacity-20 text-[var(--foreground)] rounded-xs",
        "directory-ffl": "bg-primary/10 text-primary border-primary/30 rounded-xs",
        "directory-range": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "directory-training": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "directory-gunsmith": "bg-gunmetal/10 text-gunmetal border-gunmetal/30 rounded-xs",

        // Events Page Badges - Theme-adaptive
        "events-featured": "bg-[var(--nav-events)] bg-opacity-10 text-[var(--nav-events)] border-[var(--nav-events)] border-opacity-30 rounded-xs",
        "events-competition": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "events-training": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "events-social": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "events-members": "bg-primary/10 text-primary border-primary/30 rounded-xs",
        "events-public": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "events-cancelled": "bg-[var(--muted)] bg-opacity-20 text-[var(--muted-foreground)] border-[var(--muted)] border-opacity-40 rounded-xs",
        "events-soldout": "bg-[var(--destructive)] bg-opacity-10 text-[var(--destructive)] border-[var(--destructive)] border-opacity-30 rounded-xs",
        "events-registration": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "events-free": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",

        // Marketplace Page Badges - Theme-adaptive
        "buysell-featured": "bg-[var(--nav-buysell)] bg-opacity-10 text-[var(--nav-buysell)] border-[var(--nav-buysell)] border-opacity-30 rounded-xs",
        "buysell-new": "bg-rusty-orange/10 text-rusty-orange border-rusty-orange/30 rounded-xs",
        "buysell-sale": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "buysell-sold": "bg-[var(--muted)] bg-opacity-20 text-[var(--muted-foreground)] border-[var(--muted)] border-opacity-40 rounded-xs",
        "buysell-verified": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "buysell-premium": "bg-weathered-gold/10 text-weathered-gold border-weathered-gold/30 rounded-xs",
        "buysell-local": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "buysell-shipping": "bg-primary/10 text-primary border-primary/30 rounded-xs",
        "buysell-cash": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "buysell-trade": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",

        // Home Page Badges - Theme-adaptive
        "home-hero": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "home-community": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs", 
        "home-featured": "bg-primary/10 text-primary border-primary/30 rounded-xs",
        "home-news": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "home-update": "bg-rusty-orange/10 text-rusty-orange border-rusty-orange/30 rounded-xs",
        "home-announcement": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",

        // General Status Badges - Theme-adaptive
        "status-active": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "status-inactive": "bg-[var(--muted)] bg-opacity-20 text-[var(--muted-foreground)] border-[var(--muted)] border-opacity-40 rounded-xs",
        "status-pending": "bg-warning-clay/10 text-warning-clay border-warning-clay/30 rounded-xs",
        "status-error": "bg-[var(--destructive)] bg-opacity-10 text-[var(--destructive)] border-[var(--destructive)] border-opacity-30 rounded-xs",
        "status-success": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "status-warning": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "status-info": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",

        // Weather Status Badges - Theme-adaptive
        "weather-excellent": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "weather-good": "bg-[var(--secondary)] bg-opacity-10 text-[var(--secondary)] border-[var(--secondary)] border-opacity-30 rounded-xs",
        "weather-caution": "bg-warning-clay/10 text-warning-clay border-warning-clay/30 rounded-xs",
        "weather-poor": "bg-destructive/10 text-destructive border-destructive/30 rounded-xs",
        "weather-extreme": "bg-[var(--destructive)] bg-opacity-10 text-[var(--destructive)] border-[var(--destructive)] border-opacity-30 rounded-xs",

        // FireIcon Danger Badges - Theme-adaptive
        "fire-low": "bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border-[var(--accent)] border-opacity-30 rounded-xs",
        "fire-moderate": "bg-warning-clay/10 text-warning-clay border-warning-clay/30 rounded-xs",
        "fire-high": "bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border-[var(--primary)] border-opacity-30 rounded-xs",
        "fire-extreme": "bg-[var(--destructive)] bg-opacity-10 text-[var(--destructive)] border-[var(--destructive)] border-opacity-30 rounded-xs"
      },
      size: {
        xs: "px-xs py-[0.0625rem] text-button-xs",
        sm: "px-sm py-micro text-button-xs", 
        md: "px-base py-micro text-button-sm",
        lg: "px-lg py-micro text-button-sm"
      }
    },
    defaultVariants: {
      variant: "status-info",
      size: "sm"
    }
  }
)

// Page-specific icon mappings using Phosphor icons
const pageIcons = {
  // Intel Page Icons
  "intel-location": MapPinIcon,
  "intel-weather": SunIcon, 
  "intel-verified": ShieldCheckIcon,
  "intel-unverified": ShieldExclamationIcon,
  "intel-priority": BoltIcon,
  "intel-access": LockOpenIcon,
  "intel-restricted": ExclamationTriangleIcon,
  "intel-closed": LockClosedIcon,
  "intel-distance": ArrowLongRightIcon,
  "intel-elevation": ViewfinderCircleIcon,

  // Directory Page Icons  
  "directory-business": BuildingOfficeIcon,
  "directory-verified": CheckCircleIcon,
  "directory-gold": TrophyIcon,
  "directory-silver": StarIcon,
  "directory-copper": StarIcon, 
  "directory-free": TagIcon,
  "directory-ffl": DocumentCheckIcon,
  "directory-range": ViewfinderCircleIcon,
  "directory-training": AcademicCapIcon,
  "directory-gunsmith": WrenchScrewdriverIcon,

  // Events Page Icons
  "events-featured": StarIcon,
  "events-competition": TrophyIcon,
  "events-training": BookOpenIcon,
  "events-social": UserGroupIcon,
  "events-members": UserIcon,
  "events-public": HomeIcon,
  "events-cancelled": XCircleIcon,
  "events-soldout": XMarkIcon,
  "events-registration": CalendarIcon,
  "events-free": CurrencyDollarIcon,

  // Marketplace Page Icons
  "buysell-featured": StarIcon,
  "buysell-new": BoltIcon,
  "buysell-sale": TagIcon,
  "buysell-sold": CheckCircleIcon,
  "buysell-verified": ShieldCheckIcon,
  "buysell-premium": SparklesIcon,
  "buysell-local": MapPinIcon,
  "buysell-shipping": TruckIcon,
  "buysell-cash": BanknotesIcon,
  "buysell-trade": ArchiveBoxIcon,

  // Home Page Icons
  "home-hero": FlagIcon,
  "home-community": UserGroupIcon,
  "home-featured": StarIcon,
  "home-news": BellIcon,
  "home-update": ArrowTrendingUpIcon,
  "home-announcement": SpeakerWaveIcon,

  // General Status Icons
  "status-active": CheckCircleIcon,
  "status-inactive": XCircleIcon, 
  "status-pending": ClockIcon,
  "status-error": ExclamationCircleIcon,
  "status-success": CheckIcon,
  "status-warning": ExclamationTriangleIcon,
  "status-info": InformationCircleIcon,

  // Weather Status Icons
  "weather-excellent": SunIcon,
  "weather-good": CheckCircleIcon,
  "weather-caution": ExclamationTriangleIcon,
  "weather-poor": CloudIcon,
  "weather-extreme": ExclamationCircleIcon,

  // FireIcon Danger Icons
  "fire-low": MapPinIcon,
  "fire-moderate": FireIcon,
  "fire-high": FireIcon,
  "fire-extreme": ExclamationCircleIcon
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  hideIcon?: boolean
}

function Badge({ className, variant, size, icon, hideIcon = false, children, ...props }: BadgeProps) {
  const IconComponent = variant ? pageIcons[variant] : InformationCircleIcon
  
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {!hideIcon && (
        <>
          {icon ? icon : IconComponent && <IconComponent className="h-3 w-3" />}
        </>
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }