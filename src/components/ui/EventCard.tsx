'use client'

import React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
// Phosphor Icons - Primary choice for tactical aesthetic
import { 
  Calendar, MapPin, Clock, Users, Image as ImageIcon, Star, 
  Trophy, Target, Medal, Crown, Ticket, Lightning as Zap
} from '@phosphor-icons/react'
import Image from 'next/image'

const eventCardVariants = cva(
  "p-lg transition-all duration-300 group relative overflow-hidden hover:scale-[1.02] cursor-pointer min-w-[320px]",
  {
    variants: {
      featured: {
        true: "border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-elevated hover:shadow-commanding",
        false: "shadow-present hover:shadow-prominent hover:border-primary/20"
      },
      size: {
        compact: "p-md",
        standard: "p-lg", 
        spacious: "p-xl"
      }
    },
    defaultVariants: {
      featured: false,
      size: "standard"
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
  imageUrl?: string
  venue?: string
  organizer?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  size?: 'compact' | 'standard' | 'spacious'
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
  imageUrl,
  venue,
  organizer,
  difficulty,
  size = "standard",
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
  
  // Format date for better display
  const formatEventDate = (dateString: string) => {
    const eventDate = new Date(dateString)
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' })
    const day = eventDate.getDate()
    const year = eventDate.getFullYear()
    const dayOfWeek = eventDate.toLocaleDateString('en-US', { weekday: 'short' })
    
    return { month, day, year, dayOfWeek }
  }
  
  const dateInfo = formatEventDate(date)
  
  // Get difficulty badge color
  const getDifficultyColor = (level?: string) => {
    switch (level) {
      case 'Beginner': return 'success'
      case 'Intermediate': return 'warning'
      case 'Advanced': return 'destructive'
      default: return 'default'
    }
  }

  // Get event type gradient for hero section
  const getEventTypeGradient = (type: string) => {
    switch (type) {
      case 'Competition': 
        return 'card-gradient-competition'
      case 'Training': 
        return 'card-gradient-training'
      case 'Expo': 
        return 'card-gradient-expo'
      case 'Charity': 
        return 'card-gradient-charity'
      case 'Social': 
        return 'card-gradient-social'
      case 'Demo': 
        return 'card-gradient-events'
      default: 
        return 'card-gradient-events'
    }
  }
  
  // Get small contextual icon for gradient overlay
  const getEventTypeIcon = (type: string) => {
    const iconClass = "size-8 text-white/80 relative z-10"
    switch (type) {
      case 'Competition': 
        return <Trophy weight="bold" className={iconClass} />
      case 'Training': 
        return <Target weight="bold" className={iconClass} />
      case 'Expo': 
        return <Crown weight="bold" className={iconClass} />
      case 'Charity': 
        return <Medal weight="bold" className={iconClass} />
      case 'Social': 
        return <Users weight="bold" className={iconClass} />
      case 'Demo': 
        return <Zap weight="bold" className={iconClass} />
      default: 
        return <Calendar weight="bold" className={iconClass} />
    }
  }

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
        className={cn(eventCardVariants({ featured, size }), className)}
        {...props}
      >
      {featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
      )}
      
      {/* Boise Landscape Gradient Hero Section - MVP Design */}
      <div className={cn(
        "relative mb-lg -m-lg mt-[-24px] mx-[-24px] h-32 overflow-hidden border-b border-white/10",
        getEventTypeGradient(eventType)
      )}>
        {/* Subtle overlay with contextual icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Small contextual icon - bottom right */}
        <div className="absolute bottom-sm right-sm">
          {getEventTypeIcon(eventType)}
        </div>
        
        {/* Subtle texture particles for tactical feel */}
        <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-2 left-12 w-0.5 h-0.5 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced Date Badge with gradient background */}
        <div className="absolute top-sm left-sm">
          <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
            <div className="text-center">
              <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
                {dateInfo.month}
              </div>
              <div className="font-rajdhani font-black text-lg text-white leading-none">
                {dateInfo.day}
              </div>
              <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                {dateInfo.dayOfWeek}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions Overlay - Repositioned */}
        <div className="absolute top-xs right-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex gap-xs">
            <Button 
              size="sm" 
              variant="outline"
              className="bg-card/90 backdrop-blur-sm border-border/50 h-6 w-6 p-0"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (navigator.share) {
                  navigator.share({
                    title: title,
                    text: `Check out this ${eventType.toLowerCase()} event: ${title}`,
                    url: window.location.origin + eventHref
                  })
                } else {
                  navigator.clipboard.writeText(window.location.origin + eventHref)
                }
              }}
              title="Share event"
            >
              📤
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="bg-card/90 backdrop-blur-sm border-border/50 h-6 w-6 p-0"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open('/events/archive', '_blank')
              }}
              title="View event archive"
            >
              📊
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-md">
        {/* Enhanced Header with Better Typography Hierarchy */}
        <div className="space-y-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <Badge 
                variant={badgeVariant}
                size="sm"
              >
                {eventType}
              </Badge>
              {featured && (
                <Badge variant="events-featured" size="sm">
                  ⭐ Featured
                </Badge>
              )}
            </div>
            
            {price && (
              <div className="text-right">
                <div className="font-rajdhani font-bold text-xl text-nav-events">
                  {price}
                </div>
              </div>
            )}
          </div>
          
          <h3 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-events transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Enhanced Description with Better Line Height */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Redesigned Info Grid with Better Spacing */}
        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
          <div className="flex items-center gap-sm text-sm">
            <Calendar weight="bold" className="size-4 flex-shrink-0 text-nav-events" />
            <span className="font-medium text-card-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-sm text-sm">
            <Clock weight="bold" className="size-4 flex-shrink-0 text-nav-events" />
            <span className="text-muted-foreground">{time}</span>
          </div>
          <div className="flex items-start gap-sm text-sm">
            <MapPin weight="bold" className="size-4 flex-shrink-0 text-nav-events mt-0.5" />
            <span className="text-muted-foreground leading-tight">{location}</span>
          </div>
        </div>

        {/* Enhanced Capacity Display */}
        {capacity && (
          <div className="bg-card border border-border/50 px-sm py-sm rounded-xs">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-xs text-muted-foreground">
                <Users weight="bold" className="size-4 text-nav-events" />
                <span className="font-medium">Capacity: {capacity}</span>
              </div>
              <div className={cn(
                "font-bold",
                spotsLeft && spotsLeft <= 10 ? "text-destructive" : spotsLeft && spotsLeft <= 20 ? "text-warning" : "text-nav-events"
              )}>
                {registeredCount || 0} registered
                {spotsLeft && spotsLeft <= 10 && (
                  <span className="text-destructive ml-xs">
                    • Only {spotsLeft} left!
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA Button */}
        {registrationUrl && (
          <div className="pt-sm">
            <Button 
              size="sm"
              variant="outline"
              className="w-full border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-white hover:border-nav-events transition-all duration-300 font-rajdhani font-bold" 
              animationType="arrow"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(registrationUrl, '_blank')
              }}
            >
              {spotsLeft && spotsLeft <= 10 ? (
                <>
                  <Zap weight="bold" className="h-3 w-3 mr-xs" />
                  Register Now - Almost Full!
                </>
              ) : (
                'Register Now'
              )}
            </Button>
          </div>
        )}
      </div>
      </Card>
    </Link>
  )
}
