import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Tabler Icons - Primary choice for SSR compatibility
import {
  IconMapPin, IconShield, IconShieldCheck, IconTarget, IconMountain,
  IconCompass, IconBuilding, IconBuildingStore, IconHome, IconTree,
  IconFlame, IconAlertTriangle, IconAlertCircle, IconCircleCheck, 
  IconCircleX, IconClock, IconCalendar, IconStar, IconStarFilled,
  IconBolt, IconCurrencyDollar, IconTag, IconTrophy, IconMedal,
  IconCrown, IconDiamond, IconEye, IconEyeOff, IconLock, IconLockOpen,
  IconKey, IconFingerprint, IconThumbUp, IconThumbDown, IconHeart,
  IconSnowflake, IconSun, IconCloudRain, IconWind, IconTemperature,
  IconCaretUp, IconCaretDown, IconTrendingUp, IconTrendingDown,
  IconInfoCircle, IconQuestionMark, IconPlus, IconMinus, IconX,
  IconCheck, IconPoint, IconUsers, IconUser, IconUserCheck, IconUserX,
  IconUserPlus, IconStorefront, IconShoppingCart, IconPackage, IconTruck,
  IconCoin, IconTool, IconSettings, IconHammer, IconScrewdriver,
  IconBook, IconCertificate, IconSchool, IconUserGraduate,
  IconMessageCircle, IconBell, IconBellRinging, IconSpeakerphone,
  IconFlag, IconFlag3, IconBookmark, IconBookmarkFilled,
  IconNavigation, IconMap2
} from "@tabler/icons-react"

const badgeVariants = cva(
  "inline-flex items-center gap-xs font-rajdhani font-semibold text-button-xs border transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        // Intel Page Badges - Theme-adaptive using CSS custom properties
        "intel-location": "bg-[var(--nav-intel)] bg-opacity-10 text-[var(--nav-intel)] border-[var(--nav-intel)] border-opacity-30 rounded-xs",
        "intel-weather": "bg-slate-blue/10 text-slate-blue border-slate-blue/30 rounded-xs", 
        "intel-verified": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "intel-unverified": "bg-warning-clay/10 text-warning-clay border-warning-clay/30 rounded-xs",
        "intel-priority": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "intel-access": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "intel-restricted": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",
        "intel-closed": "bg-[var(--theme-muted)] bg-opacity-20 text-[var(--theme-muted-foreground)] border-[var(--theme-muted)] border-opacity-40 rounded-xs",
        "intel-distance": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "intel-elevation": "bg-foothills-purple/10 text-foothills-purple border-foothills-purple/30 rounded-xs",

        // Directory Page Badges - Theme-adaptive
        "directory-business": "bg-[var(--nav-directory)] bg-opacity-10 text-[var(--nav-directory)] border-[var(--nav-directory)] border-opacity-30 rounded-xs",
        "directory-verified": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "directory-gold": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "directory-silver": "bg-pale-stone/10 text-[var(--theme-foreground)] border-[var(--theme-foreground)] border-opacity-30 rounded-xs",
        "directory-copper": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",
        "directory-free": "bg-[var(--theme-card)] border-[var(--theme-foreground)] border-opacity-20 text-[var(--theme-foreground)] rounded-xs",
        "directory-ffl": "bg-slate-blue/10 text-slate-blue border-slate-blue/30 rounded-xs",
        "directory-range": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "directory-training": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "directory-gunsmith": "bg-deep-earth/10 text-deep-earth border-deep-earth/30 rounded-xs",

        // Events Page Badges - Theme-adaptive
        "events-featured": "bg-[var(--nav-events)] bg-opacity-10 text-[var(--nav-events)] border-[var(--nav-events)] border-opacity-30 rounded-xs",
        "events-competition": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "events-training": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "events-social": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "events-members": "bg-slate-blue/10 text-slate-blue border-slate-blue/30 rounded-xs",
        "events-public": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "events-cancelled": "bg-[var(--theme-muted)] bg-opacity-20 text-[var(--theme-muted-foreground)] border-[var(--theme-muted)] border-opacity-40 rounded-xs",
        "events-soldout": "bg-[var(--theme-destructive)] bg-opacity-10 text-[var(--theme-destructive)] border-[var(--theme-destructive)] border-opacity-30 rounded-xs",
        "events-registration": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "events-free": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",

        // Marketplace Page Badges - Theme-adaptive
        "marketplace-featured": "bg-[var(--nav-marketplace)] bg-opacity-10 text-[var(--nav-marketplace)] border-[var(--nav-marketplace)] border-opacity-30 rounded-xs",
        "marketplace-new": "bg-ember-glow/10 text-ember-glow border-ember-glow/30 rounded-xs",
        "marketplace-sale": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "marketplace-sold": "bg-[var(--theme-muted)] bg-opacity-20 text-[var(--theme-muted-foreground)] border-[var(--theme-muted)] border-opacity-40 rounded-xs",
        "marketplace-verified": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "marketplace-premium": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "marketplace-local": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "marketplace-shipping": "bg-slate-blue/10 text-slate-blue border-slate-blue/30 rounded-xs",
        "marketplace-cash": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "marketplace-trade": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",

        // Home Page Badges - Theme-adaptive
        "home-hero": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "home-community": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs", 
        "home-featured": "bg-slate-blue/10 text-slate-blue border-slate-blue/30 rounded-xs",
        "home-news": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",
        "home-update": "bg-ember-glow/10 text-ember-glow border-ember-glow/30 rounded-xs",
        "home-announcement": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",

        // General Status Badges - Theme-adaptive
        "status-active": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "status-inactive": "bg-[var(--theme-muted)] bg-opacity-20 text-[var(--theme-muted-foreground)] border-[var(--theme-muted)] border-opacity-40 rounded-xs",
        "status-pending": "bg-warning-clay/10 text-warning-clay border-warning-clay/30 rounded-xs",
        "status-error": "bg-[var(--theme-destructive)] bg-opacity-10 text-[var(--theme-destructive)] border-[var(--theme-destructive)] border-opacity-30 rounded-xs",
        "status-success": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "status-warning": "bg-ember-glow/10 text-ember-glow border-ember-glow/30 rounded-xs",
        "status-info": "bg-info-river/10 text-info-river border-info-river/30 rounded-xs",

        // Weather Status Badges - Theme-adaptive
        "weather-excellent": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "weather-good": "bg-[var(--theme-secondary)] bg-opacity-10 text-[var(--theme-secondary)] border-[var(--theme-secondary)] border-opacity-30 rounded-xs",
        "weather-caution": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs", 
        "weather-poor": "bg-canyon-clay/10 text-canyon-clay border-canyon-clay/30 rounded-xs",
        "weather-extreme": "bg-[var(--theme-destructive)] bg-opacity-10 text-[var(--theme-destructive)] border-[var(--theme-destructive)] border-opacity-30 rounded-xs",

        // Fire Danger Badges - Theme-adaptive
        "fire-low": "bg-[var(--theme-accent)] bg-opacity-10 text-[var(--theme-accent)] border-[var(--theme-accent)] border-opacity-30 rounded-xs",
        "fire-moderate": "bg-warning-amber/10 text-warning-amber border-warning-amber/30 rounded-xs",
        "fire-high": "bg-[var(--theme-primary)] bg-opacity-10 text-[var(--theme-primary)] border-[var(--theme-primary)] border-opacity-30 rounded-xs",
        "fire-extreme": "bg-[var(--theme-destructive)] bg-opacity-10 text-[var(--theme-destructive)] border-[var(--theme-destructive)] border-opacity-30 rounded-xs"
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

// Page-specific icon mappings using Tabler icons for SSR compatibility
const pageIcons = {
  // Intel Page Icons
  "intel-location": IconMapPin,
  "intel-weather": IconSun, 
  "intel-verified": IconShieldCheck,
  "intel-unverified": IconShield,
  "intel-priority": IconBolt,
  "intel-access": IconLockOpen,
  "intel-restricted": IconAlertTriangle,
  "intel-closed": IconLock,
  "intel-distance": IconNavigation,
  "intel-elevation": IconMountain,

  // Directory Page Icons  
  "directory-business": IconBuilding,
  "directory-verified": IconCircleCheck,
  "directory-gold": IconCrown,
  "directory-silver": IconMedal,
  "directory-copper": IconTrophy, 
  "directory-free": IconTag,
  "directory-ffl": IconCertificate,
  "directory-range": IconTarget,
  "directory-training": IconSchool,
  "directory-gunsmith": IconTool,

  // Events Page Icons
  "events-featured": IconStar,
  "events-competition": IconTrophy,
  "events-training": IconBook,
  "events-social": IconUsers,
  "events-members": IconUser,
  "events-public": IconHome,
  "events-cancelled": IconCircleX,
  "events-soldout": IconX,
  "events-registration": IconCalendar,
  "events-free": IconCoin,

  // Marketplace Page Icons
  "marketplace-featured": IconStarFilled,
  "marketplace-new": IconBolt,
  "marketplace-sale": IconTag,
  "marketplace-sold": IconCircleCheck,
  "marketplace-verified": IconShieldCheck,
  "marketplace-premium": IconDiamond,
  "marketplace-local": IconMapPin,
  "marketplace-shipping": IconTruck,
  "marketplace-cash": IconCurrencyDollar,
  "marketplace-trade": IconPackage,

  // Home Page Icons
  "home-hero": IconFlag,
  "home-community": IconUsers,
  "home-featured": IconStar,
  "home-news": IconBell,
  "home-update": IconTrendingUp,
  "home-announcement": IconSpeakerphone,

  // General Status Icons
  "status-active": IconCircleCheck,
  "status-inactive": IconCircleX, 
  "status-pending": IconClock,
  "status-error": IconAlertCircle,
  "status-success": IconCheck,
  "status-warning": IconAlertTriangle,
  "status-info": IconInfoCircle,

  // Weather Status Icons
  "weather-excellent": IconSun,
  "weather-good": IconCircleCheck,
  "weather-caution": IconAlertTriangle,
  "weather-poor": IconCloudRain,
  "weather-extreme": IconAlertCircle,

  // Fire Danger Icons
  "fire-low": IconPoint,
  "fire-moderate": IconFlame,
  "fire-high": IconFlame,
  "fire-extreme": IconAlertCircle
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  hideIcon?: boolean
}

function Badge({ className, variant, size, icon, hideIcon = false, children, ...props }: BadgeProps) {
  const IconComponent = variant ? pageIcons[variant] : IconInfoCircle
  
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {!hideIcon && (
        <>
          {icon ? icon : IconComponent && <IconComponent className="h-3 w-3" stroke={2} />}
        </>
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }