'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { BanknotesIcon, CalendarDaysIcon, ClockIcon, CloudIcon, ExclamationTriangleIcon, MapPinIcon, SunIcon, TagIcon, UserIcon, UsersIcon, WeatherIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

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
  
  // Author information for two-column header
  author?: {
    name: string
    avatar?: string
    bio?: string
    title?: string
  }
  
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
  author,
  className
}: EventInfoBarProps) {
  const WeatherIcon = weather?.icon === 'sun' ? SunIcon : weather?.icon === 'cloud' ? CloudIcon : SunIcon
  
  return (
    <section className={cn("py-xl bg-muted/30 border-y border-border/20", className)}>
      <div className="container mx-auto max-w-7xl px-lg">
        {/* Two-column Header - Author and Event Categories */}
        <div className="space-y-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl">
            {/* About the Author */}
            {author && (
              <div className="bg-card p-lg rounded-none border border-border/30">
                <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">About the Author</h3>
                <div className="space-y-base">
                  <div className="flex items-center gap-base">
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <UserIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-body-sm">{author.name}</div>
                      {author.title && (
                        <div className="text-xs text-muted-foreground">{author.title}</div>
                      )}
                    </div>
                  </div>
                  {author.bio && (
                    <p className="text-body-sm text-muted-foreground">{author.bio}</p>
                  )}
                </div>
              </div>
            )}
            
            {/* Event Categories */}
            {tags.length > 0 && (
              <div className="bg-card p-lg rounded-none border border-border/30">
                <h3 className="font-rajdhani text-xl font-bold text-foreground mb-base">Event Categories</h3>
                <div className="flex flex-wrap gap-sm">
                  {tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="text-sm bg-nav-events/10 text-nav-events border-nav-events/30 px-base py-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-card p-lg rounded-none border border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-lg">
              {/* Date */}
              <div className="flex flex-col items-center text-center">
                <CalendarDaysIcon className="h-6 w-6 text-nav-events mb-xs" />
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