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

  // Clean event type color mapping using globals.css system
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Competition': return 'nav-events'      // Red - high energy
      case 'Training': return 'sandy-ochre'       // Educational warmth  
      case 'Expo': return 'info-river'            // Informational blue
      case 'Charity': return 'sagebrush-green'    // Community giving
      case 'Social': return 'nav-home'            // Warm gathering orange
      case 'Demo': return 'warning-clay'          // Hands-on demonstration
      default: return 'nav-events'                // Default to page primary
    }
  }

  const eventColor = getEventTypeColor(eventType)

  return (
    <Card
      variant="interactive"
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
      {/* Color-coded accent bar for all events */}
      <div className={cn("absolute bottom-0 left-0 right-0 h-1", `bg-${eventColor}`)} />
      {/* Featured events get gradient accent */}
      {featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-page-gradient" />
      )}
      
      <div className="space-y-base">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-xs flex-1">
            <div className="flex items-center gap-xs">
              <Badge 
                variant="outline" 
                size="sm"
                className={`bg-${eventColor}/10 text-${eventColor} border-${eventColor}/30`}
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
              <div className={`text-lg font-rajdhani font-bold text-${eventColor}`}>
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
            <Calendar className={`h-4 w-4 flex-shrink-0 text-${eventColor}`} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock className={`h-4 w-4 flex-shrink-0 text-${eventColor}`} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className={`h-4 w-4 flex-shrink-0 text-${eventColor}`} />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Capacity Info */}
        {capacity && (
          <div className="flex items-center justify-between text-sm bg-muted/50 px-base py-xs rounded">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users className={`h-4 w-4 text-${eventColor}`} />
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