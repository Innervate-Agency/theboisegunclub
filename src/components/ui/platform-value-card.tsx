'use client'

import { Card, CardContent } from './card'
import { Badge } from './badge'

interface PlatformValueCardProps {
  icon: React.ComponentType<{ className?: string; weight?: string }>
  title: string
  description: string
  benefits: string[]
  badgeText?: string
  badgeVariant?: string
  iconColor?: string
  iconBgColor?: string
  className?: string
}

export function PlatformValueCard({
  icon: Icon,
  title,
  description,
  benefits,
  badgeText,
  badgeVariant = "default",
  iconColor = "text-slate-blue",
  iconBgColor = "bg-slate-blue/20",
  className
}: PlatformValueCardProps) {
  return (
    <Card className={`shadow-whisper hover:shadow-present transition-all duration-300 group ${className}`}>
      <CardContent className="p-lg space-y-lg">
        {/* Header */}
        <div className="space-y-base">
          <div className="flex items-center gap-base">
            <div className={`w-12 h-12 ${iconBgColor} rounded-xs flex items-center justify-center flex-shrink-0`}>
              <Icon className={`h-6 w-6 ${iconColor}`} weight="bold" />
            </div>
            {badgeText && (
              <Badge variant={badgeVariant} size="sm">
                {badgeText}
              </Badge>
            )}
          </div>
          
          <h3 className="font-rajdhani font-bold text-2xl text-card-foreground group-hover:text-rusty-orange transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-sm">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-sm">
              <div className="w-1.5 h-1.5 bg-rusty-orange rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-card-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Pre-configured value proposition cards
export const platformValueCards = [
  {
    icon: ({ className, weight }: { className?: string; weight?: string }) => {
      const { Shield } = require('@phosphor-icons/react')
      return <Shield className={className} weight={weight} />
    },
    title: "Community First",
    description: "Built by Idaho gun owners, for Idaho gun owners. No corporate agenda, no coastal politics.",
    benefits: [
      "Local ownership and control",
      "Idaho-focused discussions and content", 
      "Community-driven features and improvements",
      "Direct access to platform developers"
    ],
    badgeText: "100% Idaho Owned",
    badgeVariant: "slate-blue",
    iconColor: "text-slate-blue",
    iconBgColor: "bg-slate-blue/20"
  },
  {
    icon: ({ className, weight }: { className?: string; weight?: string }) => {
      const { Users } = require('@phosphor-icons/react')
      return <Users className={className} weight={weight} />
    },
    title: "Authentic Connections",
    description: "Connect with real people in your community. No bots, no fake reviews, just genuine recommendations.",
    benefits: [
      "Verified local business listings",
      "Real user reviews and ratings",
      "Direct contact with business owners",
      "Community-moderated discussions"
    ],
    badgeText: "Verified Network",
    badgeVariant: "sagebrush-green",
    iconColor: "text-sagebrush-green", 
    iconBgColor: "bg-sagebrush-green/20"
  },
  {
    icon: ({ className, weight }: { className?: string; weight?: string }) => {
      const { MapTrifold } = require('@phosphor-icons/react')
      return <MapTrifold className={className} weight={weight} />
    },
    title: "Local Knowledge",
    description: "Real-time intel from people who actually shoot at these ranges and train with these instructors.",
    benefits: [
      "Current range conditions and weather",
      "Event updates and cancellations",
      "Traffic and access road conditions", 
      "Equipment and ammo availability"
    ],
    badgeText: "Real-Time Intel",
    badgeVariant: "canyon-clay",
    iconColor: "text-canyon-clay",
    iconBgColor: "bg-canyon-clay/20"
  }
]