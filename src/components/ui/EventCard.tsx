'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const eventCardVariants = cva(
  "p-md transition-all duration-300 group relative overflow-hidden",
  {
    variants: {
      featured: {
        true: "border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-elevated hover:shadow-commanding",
        false: "shadow-present hover:shadow-prominent"
      }
    },
    defaultVariants: {
      featured: false
    }
  }
)

export interface EventCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
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

  const getEventBadgeVariant = (type: string): VariantProps<typeof Badge>["variant"] => {
    switch (type) {
      case 'Competition': return 'foothills-purple'
      case 'Training': return 'info-river'
      case 'Expo': return 'sandy-ochre'
      case 'Charity': return 'sagebrush-green'
      case 'Social': return 'light-peachy'
      case 'Demo': return 'warning-clay'
      default: return 'default'
    }
  }

  const badgeVariant = getEventBadgeVariant(eventType)

  return (
    <Card
      variant="interactive"
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
      {featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
      )}
      
      <div className="space-y-base">
        <div className="flex items-start justify-between">
          <div className="space-y-xs flex-1">
            <div className="flex items-center gap-xs">
              <Badge 
                variant={badgeVariant}
                size="sm"
              >
                {eventType}
              </Badge>
              {featured && (
                <Badge variant="featured" size="sm">
                  Featured
                </Badge>
              )}
            </div>
            
            <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground leading-tight line-clamp-2">
              {title}
            </h3>
          </div>
          
          {price && (
            <div className="text-right ml-base">
              <div className="text-heading-lg font-rajdhani font-bold text-foreground">
                {price}
              </div>
            </div>
          )}
        </div>

        <p className="text-body-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="space-y-xs text-body-sm">
          <div className="flex items-center gap-xs text-muted-foreground">
            <Calendar className="size-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock className="size-4 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className="size-4 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {capacity && (
          <div className="flex items-center justify-between text-body-sm bg-muted/50 px-base py-xs rounded-sm">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users className="size-4" />
              <span>Capacity: {capacity}</span>
            </div>
            <div className={cn(
              "font-medium",
              spotsLeft && spotsLeft <= 10 ? "text-destructive" : "text-card-foreground"
            )}>
              {registeredCount || 0} registered
              {spotsLeft && spotsLeft <= 10 && (
                <span className="text-destructive ml-micro">
                  • {spotsLeft} left
                </span>
              )}
            </div>
          </div>
        )}

        {registrationUrl && (
          <div className="pt-xs">
            <Button 
              variant="outline"
              size="sm"
              className="w-full" 
              animationType="arrow"
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
