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

  // Color mapping for event types using our 10-color system
  const getEventColors = (type: string) => {
    switch (type) {
      case 'Competition': return { bg: 'slate-blue/10', border: 'slate-blue/30', text: 'slate-blue', accent: 'slate-blue' }
      case 'Training': return { bg: 'sandy-ochre/10', border: 'sandy-ochre/30', text: 'sandy-ochre', accent: 'sandy-ochre' }
      case 'Expo': return { bg: 'info-river/10', border: 'info-river/30', text: 'info-river', accent: 'info-river' }
      case 'Charity': return { bg: 'sagebrush-green/10', border: 'sagebrush-green/30', text: 'sagebrush-green', accent: 'sagebrush-green' }
      case 'Social': return { bg: 'rusty-orange/10', border: 'rusty-orange/30', text: 'rusty-orange', accent: 'rusty-orange' }
      case 'Demo': return { bg: 'warning-clay/10', border: 'warning-clay/30', text: 'warning-clay', accent: 'warning-clay' }
      default: return { bg: 'pale-stone/10', border: 'pale-stone/30', text: 'dried-clay', accent: 'pale-stone' }
    }
  }

  const colors = getEventColors(eventType)

  return (
    <Card
      variant="interactive"
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
      {/* Color-coded accent bar for all events */}\n      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${colors.accent}`} />\n      {/* Additional featured accent */}
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
                className={cn(
                  `bg-${colors.bg} text-${colors.text} border-${colors.border}`
                )}
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
            <Calendar className={`h-4 w-4 text-${colors.accent} flex-shrink-0`} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock className={`h-4 w-4 text-${colors.accent} flex-shrink-0`} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className={`h-4 w-4 text-${colors.accent} flex-shrink-0`} />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Capacity Info */}
        {capacity && (
          <div className="flex items-center justify-between text-sm bg-muted/50 px-base py-xs rounded">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users className={`h-4 w-4 text-${colors.accent}`} />
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