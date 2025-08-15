'use client'

import React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
// Phosphor Icons - Primary choice for tactical aesthetic
import { Calendar, MapPin, Clock, Users } from '@phosphor-icons/react'

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
  slug?: string
  href?: string
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
  slug,
  href,
  ...props
}: EventCardProps) {
  const spotsLeft = capacity && registeredCount ? capacity - registeredCount : null
  
  // Generate slug from title if not provided
  const generateSlug = (title: string, date: string): string => {
    const dateSlug = new Date(date).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    }).toLowerCase().replace(' ', '-')
    
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim() + '-' + dateSlug.split('-')[0]
  }
  
  // Use provided href or generate from slug
  const eventHref = href || `/events/${slug || generateSlug(title, date)}`

  const getEventBadgeVariant = (type: string): VariantProps<typeof Badge>["variant"] => {
    switch (type) {
      case 'Competition': return 'events-competition'
      case 'Training': return 'events-training'
      case 'Expo': return 'events-featured'
      case 'Charity': return 'events-social'
      case 'Social': return 'events-social'
      case 'Demo': return 'events-registration'
      default: return 'status-info'
    }
  }

  const badgeVariant = getEventBadgeVariant(eventType)

  return (
    <Link href={eventHref} className="block">
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
                <Badge variant="events-featured" size="sm">
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
            <Calendar weight="bold" className="size-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <Clock weight="bold" className="size-4 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin weight="bold" className="size-4 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {capacity && (
          <div className="flex items-center justify-between text-body-sm bg-muted/50 px-base py-xs rounded-xs">
            <div className="flex items-center gap-xs text-muted-foreground">
              <Users weight="bold" className="size-4" />
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
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(registrationUrl, '_blank')
              }}
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
      </Card>
    </Link>
  )
}
