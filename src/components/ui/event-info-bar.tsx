'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  SunIcon,
  CloudIcon,
  TagIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

interface EventInfoBarProps {
  // Event data
  eventTitle: string
  eventDate: string
  eventLocation: string
  eventType: string
  price?: string
  capacity?: number
  registeredCount?: number
  
  // Weather data (optional)
  weather?: {
    condition: string
    temperature: number
    icon: 'sun' | 'cloud' | 'rain'
  }
  
  // Event-specific information
  agenda?: string[]
  whatToBring?: string[]
  requirements?: string[]
  tags?: string[]
  
  className?: string
}

export function EventInfoBar({
  eventTitle,
  eventDate,
  eventLocation,
  eventType,
  price,
  capacity,
  registeredCount,
  weather,
  agenda = [],
  whatToBring = [],
  requirements = [],
  tags = [],
  className
}: EventInfoBarProps) {
  const WeatherIcon = weather?.icon === 'sun' ? SunIcon : weather?.icon === 'cloud' ? CloudIcon : SunIcon
  
  return (
    <section className={cn("py-xl bg-muted/30 border-y border-border/20", className)}>
      <div className="container mx-auto max-w-7xl px-lg">
        {/* Single Horizontal Row - Event Essentials */}
        <div className="space-y-base">
          <h3 className="font-rajdhani text-2xl font-bold text-foreground text-center">Event Essentials</h3>
          
          <div className="bg-card p-lg rounded-none border border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-lg">
              {/* Date */}
              <div className="flex flex-col items-center text-center">
                <CalendarIcon className="h-6 w-6 text-nav-events mb-xs" />
                <div className="text-body-sm font-medium text-foreground">Date</div>
                <div className="text-xs text-muted-foreground mt-xs">{eventDate}</div>
              </div>
              
              {/* Duration */}
              <div className="flex flex-col items-center text-center">
                <ClockIcon className="h-6 w-6 text-nav-events mb-xs" />
                <div className="text-body-sm font-medium text-foreground">Duration</div>
                <div className="text-xs text-muted-foreground mt-xs">Full Day</div>
              </div>
              
              {/* Venue */}
              <div className="flex flex-col items-center text-center">
                <MapPinIcon className="h-6 w-6 text-nav-events mb-xs" />
                <div className="text-body-sm font-medium text-foreground">Venue</div>
                <div className="text-xs text-muted-foreground mt-xs text-center">{eventLocation.split(',')[0]}</div>
              </div>
              
              {/* Price */}
              {price ? (
                <div className="flex flex-col items-center text-center">
                  <BanknotesIcon className="h-6 w-6 text-nav-events mb-xs" />
                  <div className="text-body-sm font-medium text-foreground">Entry Fee</div>
                  <div className="text-sm font-rajdhani font-bold text-nav-events mt-xs">{price}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <UsersIcon className="h-6 w-6 text-nav-events mb-xs" />
                  <div className="text-body-sm font-medium text-foreground">Skill Level</div>
                  <div className="text-xs text-muted-foreground mt-xs">All Welcome</div>
                </div>
              )}
              
              {/* Event Type */}
              <div className="flex flex-col items-center text-center">
                <TagIcon className="h-6 w-6 text-nav-events mb-xs" />
                <div className="text-body-sm font-medium text-foreground">Event Type</div>
                <div className="text-xs text-muted-foreground mt-xs">{eventType}</div>
              </div>
            </div>
          </div>

          {/* Weather (if available) */}
          {weather && (
            <div className="bg-card p-base rounded-none border border-border/30">
              <div className="flex items-center justify-center gap-lg">
                <WeatherIcon className="h-5 w-5 text-nav-events flex-shrink-0" />
                <div className="text-center">
                  <div className="text-body-sm font-medium text-foreground">Weather Forecast</div>
                  <div className="text-xs text-muted-foreground">
                    {weather.condition}, {weather.temperature}°F - Plan accordingly for outdoor activities
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}