'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'

const eventCardVariants = cva(
  "p-md transition-all duration-300 group relative overflow-hidden",
  {
    variants: {
      featured: {
        true: "border-rusty-orange/20 bg-gradient-to-br from-card to-rusty-orange/5 hover:shadow-md",
        false: ""
      }
    },
    defaultVariants: {
      featured: false
    }
  }
)

export interface EventCardProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof eventCardVariants> {
  title: string
  date: string
  time: string
  location: string
  description: string
  eventType: string
  capacity?: number
  registeredCount?: number
  registrationUrl?: string
  price?: string
  featured?: boolean
}

export function EventCard({
  className,
  title,
  date,
  time,
  location,
  description,
  eventType,
  capacity,
  registeredCount,
  registrationUrl,
  price,
  featured = false,
  ...props
}: EventCardProps) {
  const spotsLeft = capacity && registeredCount ? capacity - registeredCount : null

  // Color mapping for event types using our 10-color system with explicit CSS variables
  const getEventColors = (type: string) => {
    switch (type) {
      case 'Competition': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-slate-blue)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]', 
        text: 'text-(--color-slate-blue)', 
        accent: 'bg-(--color-slate-blue)',
        iconColor: 'text-(--color-slate-blue)'
      }
      case 'Training': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-sandy-ochre)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-sandy-ochre)_30%,transparent)]', 
        text: 'text-(--color-sandy-ochre)', 
        accent: 'bg-(--color-sandy-ochre)',
        iconColor: 'text-(--color-sandy-ochre)'
      }
      case 'Expo': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-info-river)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-info-river)_30%,transparent)]', 
        text: 'text-(--color-info-river)', 
        accent: 'bg-(--color-info-river)',
        iconColor: 'text-(--color-info-river)'
      }
      case 'Charity': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-sagebrush-green)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-sagebrush-green)_30%,transparent)]', 
        text: 'text-(--color-sagebrush-green)', 
        accent: 'bg-(--color-sagebrush-green)',
        iconColor: 'text-(--color-sagebrush-green)'
      }
      case 'Social': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-rusty-orange)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-rusty-orange)_30%,transparent)]', 
        text: 'text-(--color-rusty-orange)', 
        accent: 'bg-(--color-rusty-orange)',
        iconColor: 'text-(--color-rusty-orange)'
      }
      case 'Demo': return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-warning-clay)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-warning-clay)_30%,transparent)]', 
        text: 'text-(--color-warning-clay)', 
        accent: 'bg-(--color-warning-clay)',
        iconColor: 'text-(--color-warning-clay)'
      }
      default: return { 
        bg: 'bg-[color-mix(in_srgb,var(--color-slate-blue)_10%,transparent)]', 
        border: 'border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]', 
        text: 'text-(--color-slate-blue)', 
        accent: 'bg-(--color-slate-blue)',
        iconColor: 'text-(--color-slate-blue)'
      }
    }
  }

  const colors = getEventColors(eventType)

  return (
    <Card
      variant="interactive"
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
      {/* Color-coded accent bar for all events */}
      <div className={cn("absolute bottom-0 left-0 right-0 h-1", colors.accent)} />
      {/* Additional featured accent */}
      {featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre" />
      )}
      
      <div className="space-y-base">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-xs flex-1">
            <div className="flex items-center gap-xs">
              <Badge 
                variant="outline" 
                size="sm"
                className={cn(colors.bg, colors.text, colors.border)}
              >
                {eventType}
              </Badge>
              {featured && (
                <Badge variant="destructive" size="sm" className="bg-safety-red text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <h3 className="font-rajdhani font-bold text-lg text-card-foreground leading-tight line-clamp-2">
              {title}
            </h3>
          </div>
          
          {/* Price Display */}
          {price && (
            <div className="text-right ml-base">
              <div className="text-lg font-rajdhani font-bold text-rusty-orange">
                {price}
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-xs text-sm">
          <div className="flex items-center gap-xs text-muted-foreground">
            <Calendar className={cn("h-4 w-4 flex-shrink-0", colors.iconColor)} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock className={cn("h-4 w-4 flex-shrink-0", colors.iconColor)} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className={cn("h-4 w-4 flex-shrink-0", colors.iconColor)} />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Capacity Info */}
        {capacity && (
          <div className="flex items-center justify-between text-sm bg-muted/50 px-base py-xs rounded">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users className={cn("h-4 w-4", colors.iconColor)} />
              <span>Capacity: {capacity}</span>
            </div>
            <div className={cn(
              "font-medium",
              spotsLeft && spotsLeft <= 10 ? "text-safety-red" : "text-card-foreground"
            )}>
              {registeredCount || 0} registered
              {spotsLeft && spotsLeft <= 10 && (
                <span className="text-safety-red ml-1">
                  • {spotsLeft} left
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        {registrationUrl && (
          <div className="pt-xs">
            <Button 
              variant="outline" 
              className="w-full gap-xs shadow-none" 
              onClick={() => window.open(registrationUrl, '_blank')}
            >
              Register Now
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}