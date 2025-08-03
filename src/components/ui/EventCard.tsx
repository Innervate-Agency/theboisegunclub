'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'

const eventCardVariants = cva(
  "p-[var(--card-padding)] transition-all duration-300",
  {
    variants: {
      featured: {
        true: "border-copper-orange/20 bg-gradient-to-br from-card to-copper-orange/5",
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

  return (
    <Card 
      variant="interactive" 
      className={cn(eventCardVariants({ featured }), className)}
      {...props}
    >
      <div className="space-y-[var(--space-sm)]">
        {/* Header */}
        <div className="flex items-start justify-between gap-sm">
          <div className="flex-1">
            <div className="flex items-center gap-sm mb-[var(--space-xs)]">
              <Badge variant="default" className="text-caption">
                {eventType}
              </Badge>
              {featured && (
                <Badge variant="default" className="bg-copper-orange text-card-foreground text-caption">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="font-rajdhani font-semibold text-[var(--card-title-size)] text-card-foreground leading-tight">
              {title}
            </h3>
          </div>
          {price && (
            <div className="text-right">
              <div className="text-body-sm font-medium text-card-foreground">
                {price}
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--card-body-size)] text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-[var(--space-xs)]">
          <div className="flex items-center gap-sm text-[var(--card-body-size)] text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-sm text-[var(--card-body-size)] text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-sm text-[var(--card-body-size)] text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {capacity && (
            <div className="flex items-center gap-sm text-[var(--card-body-size)] text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>
                {registeredCount || 0}/{capacity} registered
                {spotsLeft && spotsLeft > 0 && (
                  <span className="text-copper-orange ml-1">
                    ({spotsLeft} spots left)
                  </span>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        {registrationUrl && (
          <div className="pt-[var(--space-sm)]">
            <Button 
              variant="accent" 
              size="sm" 
              className="w-full gap-xs"
              onClick={() => window.open(registrationUrl, '_blank')}
            >
              Register Now
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}