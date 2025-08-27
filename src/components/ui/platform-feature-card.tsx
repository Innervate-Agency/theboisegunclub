'use client'

import { Card, CardContent } from './card'
import { BookOpenIcon, BuildingStorefrontIcon, CalendarDaysIcon, MapIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

interface PlatformFeatureCardProps {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  title: string
  description: string
  helpText: string
  borderColor?: string
  iconBgColor?: string
  iconColor?: string
  className?: string
}

export function PlatformFeatureCard({
  icon: Icon,
  title,
  description,
  helpText,
  borderColor = "border-rusty-orange/20",
  iconBgColor = "bg-rusty-orange/20",
  iconColor = "text-rusty-orange",
  className
}: PlatformFeatureCardProps) {
  return (
    <Card className={`shadow-whisper hover:shadow-present transition-all duration-300 ${borderColor} ${className}`}>
      <CardContent className="p-lg text-center space-y-base">
        <div className={`w-12 h-12 ${iconBgColor} rounded-xs flex items-center justify-center mx-auto`}>
          <Icon className={`h-6 w-6 ${iconColor}`} weight="bold" />
        </div>
        <h3 className="font-rajdhani font-bold text-body-xl text-card-foreground">{title}</h3>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="space-y-xs">
          <p className="text-body-xs text-card-foreground font-medium">How you can help:</p>
          <p className="text-body-xs text-muted-foreground">{helpText}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Pre-configured platform feature cards for the 7 pillars
export const platformFeatures = [
  {
    icon: CalendarDaysIcon,
    title: "Events",
    description: "Your gateway to competitions, training, and community gatherings across Treasure Valley.",
    helpText: "Share events you discover at ranges and clubs",
    borderColor: "border-rusty-orange/20",
    iconBgColor: "bg-rusty-orange/20",
    iconColor: "text-rusty-orange"
  },
  {
    icon: BookOpenIcon,
    title: "Directory", 
    description: "Verified local businesses. FFLs, ranges, trainers, and services you can trust.",
    helpText: "Review businesses you've used",
    borderColor: "border-sagebrush-green/20",
    iconBgColor: "bg-sagebrush-green/20", 
    iconColor: "text-sagebrush-green"
  },
  {
    icon: ShieldCheckIcon,
    title: "The Armory",
    description: "Knowledge is power and safety. Training guides, legal updates, and safety resources.",
    helpText: "Share your expertise and submit articles",
    borderColor: "border-slate-blue/20",
    iconBgColor: "bg-slate-blue/20",
    iconColor: "text-slate-blue"
  },
  {
    icon: MapIcon,
    title: "Intel",
    description: "Real-time range conditions. Weather data for Black's Creek, Morley Nelson, and more.",
    helpText: "Submit range photos and condition reports",
    borderColor: "border-canyon-clay/20",
    iconBgColor: "bg-canyon-clay/20",
    iconColor: "text-canyon-clay"
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Buy & Sell",
    description: "Local deals, no corporate middleman. Direct connections with Treasure Valley dealers.",
    helpText: "Share deals you find at local shops",
    borderColor: "border-warm-stone/20",
    iconBgColor: "bg-warm-stone/20",
    iconColor: "text-warm-stone"
  },
  {
    icon: UsersIcon,
    title: "Forums",
    description: "Your voice matters. Idaho-focused discussions without coastal politics or corporate agenda.",
    helpText: "Join conversations and share local knowledge",
    borderColor: "border-dark-chocolate/20",
    iconBgColor: "bg-dark-chocolate/20",
    iconColor: "text-dark-chocolate"
  }
]