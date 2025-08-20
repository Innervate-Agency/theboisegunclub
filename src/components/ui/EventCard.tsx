'use client'

import React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
// Heroicons - Updated from Phosphor for consistency
import { 
  CalendarIcon as Calendar, 
  MapPinIcon as MapPin, 
  ClockIcon as Clock, 
  UsersIcon as Users, 
  PhotoIcon as ImageIcon, 
  StarIcon as Star,
  TrophyIcon as Trophy, 
  PlusCircleIcon as Target, 
  StarIcon as Medal, 
  TrophyIcon as Crown, 
  TicketIcon as Ticket, 
  BoltIcon as Zap, 
  ShareIcon as Share, 
  ArchiveBoxIcon as Archive
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const eventCardVariants = cva(
  "transition-all duration-300 group relative overflow-hidden cursor-pointer min-w-[320px] active:scale-[0.98] hover:scale-[1.01] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-nav-events/50",
  {
    variants: {
      featured: {
        true: "border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-ghost hover:shadow-present hover:border-primary/30",
        false: "border-2 border-transparent shadow-ghost hover:shadow-present hover:border-rusty-orange/30"
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
        return <Trophy className={iconClass} />
      case 'Training': 
        return <Target className={iconClass} />
      case 'Expo': 
        return <Crown className={iconClass} />
      case 'Charity': 
        return <Medal className={iconClass} />
      case 'Social': 
        return <Users className={iconClass} />
      case 'Demo': 
        return <Zap className={iconClass} />
      default: 
        return <Calendar className={iconClass} />
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
        className={cn(
          eventCardVariants({ featured, size }), 
          "rounded-xs",
          // Tactical animated underline gradient
          "tactical-underline-base tactical-underline-events",
          className
        )}
        {...props}
      >
      {/* Tactical Corner Brackets - appear on hover */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-nav-events opacity-0 group-hover:opacity-100 transition-all duration-200" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-nav-events opacity-0 group-hover:opacity-100 transition-all duration-200" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-nav-events opacity-0 group-hover:opacity-100 transition-all duration-200" />
      
      {/* Bottom-right corner with document cutout */}
      <div className="absolute bottom-0 right-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <div 
          className="w-full h-full border-2 border-nav-events"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 100% 40%, 100% 100%, 0 100%)'
          }}
        />
      </div>
      
      {/* Tactical latches/clasps */}
      <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-nav-events/40 opacity-0 group-hover:opacity-20 transition-all duration-200" />
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-nav-events/40 opacity-0 group-hover:opacity-20 transition-all duration-200" />

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
        
        {/* Tactical Action Buttons - top right */}
        <div className="absolute top-sm right-sm flex gap-xs">
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-events hover:border-nav-events transition-all duration-200 group/share"
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
            <Share className="h-4 w-4 text-white group-hover/share:text-white" />
          </button>
          
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-events hover:border-nav-events transition-all duration-200 group/archive"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open('/events/archive', '_blank')
            }}
            title="View event archive"
          >
            <Archive className="h-4 w-4 text-white group-hover/archive:text-white" />
          </button>
        </div>
        
        {/* Subtle texture particles for tactical feel */}
        <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-2 left-12 w-0.5 h-0.5 bg-card/15 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
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
        
      </div>
      
      {/* Tactical Price Badge - top right of main card (below hero) */}
      {price && (
        <div className="absolute top-36 right-sm z-20">
          <div className="bg-nav-events text-white px-sm py-xs rounded-none border border-nav-events/30 shadow-sm">
            <span className="font-rajdhani font-bold text-lg">
              {price}
            </span>
          </div>
        </div>
      )}

      <div className="space-y-md">
        {/* Enhanced Header with Better Typography Hierarchy */}
        <div className="space-y-sm">
          {/* Event Badges - at the top */}
          <div className="flex flex-wrap gap-xs">
            <Badge 
              variant={badgeVariant}
              size="sm"
            >
              {eventType}
            </Badge>
            <Badge 
              variant={featured ? "events-featured" : "secondary"}
              size="sm"
            >
              {featured ? "Featured" : time.includes("AM") || time.includes("PM") ? "Day Event" : "Multi-Day"}
            </Badge>
          </div>
          
          <div className="space-y-0">
            <h2 className="font-rajdhani font-bold text-2xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-events transition-colors duration-200">
              {title}
            </h2>
            <h3 className="font-noto-serif text-base text-muted-foreground leading-tight">
              {eventType} • {location.split(',')[0]}
            </h3>
          </div>
        </div>

        {/* Enhanced Description with Better Line Height */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Redesigned Info Grid with Better Spacing */}
        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
          <div className="flex items-center gap-sm text-sm">
            <Calendar className="size-4 flex-shrink-0 text-nav-events" />
            <span className="font-medium text-card-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-sm text-sm">
            <Clock className="size-4 flex-shrink-0 text-nav-events" />
            <span className="text-muted-foreground">{time}</span>
          </div>
          <div className="flex items-start gap-sm text-sm">
            <MapPin className="size-4 flex-shrink-0 text-nav-events mt-0.5" />
            <span className="text-muted-foreground leading-tight">{location}</span>
          </div>
        </div>


        {/* Enhanced CTA Button */}
        {registrationUrl && (
          <div className="pt-sm">
            <Button 
              size="sm"
              variant="outline"
              className="w-full border-nav-events/30 text-nav-events group-hover:bg-nav-events group-hover:text-white group-hover:border-nav-events transition-all duration-300 font-rajdhani font-bold" 
              animationType="arrow"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(registrationUrl, '_blank')
              }}
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
      </Card>
    </Link>
  )
}
