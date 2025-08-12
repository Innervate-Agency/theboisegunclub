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
        true: "border-rusty-orange/20 bg-gradient-to-br from-card to-rusty-orange/5 hover:shadow-present",
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

  // Map event types to badge variants
  const getEventBadgeVariant = (type: string) => {
    switch (type) {
      case 'Competition': return 'competition'
      case 'Training': return 'training'  
      case 'Expo': return 'expo'
      case 'Charity': return 'charity'
      case 'Social': return 'social'
      case 'Demo': return 'demo'
      default: return 'competition'
    }
  }

  const badgeVariant = getEventBadgeVariant(eventType)

  return (
    <Card
      variant="interactive"
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
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
                variant={badgeVariant as any}
                size="sm"
              >
                {eventType}
              </Badge>
              {featured && (
                <Badge variant="destructive" size="sm" className="bg-safety-red text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <h3 className="font-rajdhani font-bold text-lg text-card-foreground leading-tight line-clamp-tiny">
              {title}
            </h3>
          </div>
          
          {/* Price Display */}
          {price && (
            <div className="text-right ml-base">
              <div className="text-lg font-rajdhani font-bold text-foreground">
                {price}
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-xs">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-xs text-sm">
          <div className="flex items-center gap-xs text-muted-foreground">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-micro">{location}</span>
          </div>
        </div>

        {/* Capacity Info */}
        {capacity && (
          <div className="flex items-center justify-between text-sm bg-muted/50 px-base py-xs rounded">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users className="h-4 w-4" />
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
              variant="micro"
              size="sm"
              className="w-full" 
              onClick={() => window.open(registrationUrl, '_blank')}
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}