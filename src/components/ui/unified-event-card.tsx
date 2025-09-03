'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon, UserIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

/**
 * Unified Event Card
 * 
 * DEMONSTRATES UNIFIED SYSTEM:
 * - Uses UnifiedGalleryCard as base
 * - Consistent with all other section cards
 * - Eliminates animation conflicts
 * - Integrated with filter/view system
 */

export interface UnifiedEventCardProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  eventType: string
  registrationUrl?: string
  price?: string
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
  // Enhanced fields for richer content (publicly available data only)
  organizer?: string
  venue?: string
  phone?: string
  website?: string
  featured?: boolean
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  subtitle?: string  // For standout information like BuySell cards
}

export function UnifiedEventCard({
  title,
  date,
  time,
  location,
  description,
  eventType,
  registrationUrl,
  price,
  slug,
  href,
  viewMode = 'grid',
  organizer,
  subtitle,
  venue,
  phone,
  website,
  featured = false,
  status = 'upcoming'
}: UnifiedEventCardProps) {
  
  // Generate href if not provided
  const eventHref = href || `/events/${slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Generate subtitle from event data if not provided
  const getEventSubtitle = () => {
    if (subtitle) return subtitle
    
    // Extract key info from description for subtitle
    const desc = description.toLowerCase()
    
    // Championship/Major events
    if (eventType === 'Competition') {
      if (desc.includes('championship') || desc.includes('state')) return 'State Championship Event'
      if (desc.includes('major') || desc.includes('regional')) return 'Major Competition'
      if (desc.includes('premier') || desc.includes('top-level')) return 'Premier Competition'
      if (desc.includes('tier 3') || desc.includes('tier3')) return 'IDPA Tier 3 Match'
      if (desc.includes('uspsa')) return 'USPSA Action Shooting'
      if (desc.includes('idpa')) return 'IDPA Defensive Pistol'
      if (desc.includes('steel challenge')) return 'Steel Challenge Match'
      if (desc.includes('sporting clays')) return 'Sporting Clays Tournament'
      if (desc.includes('cowboy') || desc.includes('sass')) return 'Cowboy Action Shooting'
      if (desc.includes('3-gun') || desc.includes('multigun')) return '3-Gun Competition'
      return 'Shooting Competition'
    }
    
    // Training events
    if (eventType === 'Training') {
      if (desc.includes('beginner') || desc.includes('new shooter')) return 'Beginner Friendly'
      if (desc.includes('advanced') || desc.includes('tactical')) return 'Advanced Training'
      if (desc.includes('ccw') || desc.includes('concealed')) return 'CCW Training'
      if (desc.includes('instructor') || desc.includes('certification')) return 'Instructor Course'
      return 'Firearms Training'
    }
    
    // Other event types
    if (eventType === 'Expo') return 'Gun Show & Trade Event'
    if (eventType === 'Charity') return 'Charity Fundraiser'
    if (eventType === 'Social') return 'Social Event'
    
    // Default based on venue or organizer
    if (organizer) return `Hosted by ${organizer}`
    return null
  }
  
  const eventSubtitle = getEventSubtitle()
  
  // Format date for display
  const formatEventDate = (dateString: string) => {
    const eventDate = new Date(dateString)
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' })
    const day = eventDate.getDate()
    const dayOfWeek = eventDate.toLocaleDateString('en-US', { weekday: 'short' })
    return { month, day, dayOfWeek }
  }
  
  const dateInfo = formatEventDate(date)
  
  // Get event type gradient and icon
  const getEventTypeGradient = (type: string) => {
    switch (type) {
      case 'Competition': 
        return 'bg-gradient-to-br from-rusty-orange via-canyon-clay to-sandy-ochre'
      case 'Training': 
        return 'bg-gradient-to-br from-slate-blue via-scope-blue to-info-river'
      case 'Expo': 
        return 'bg-gradient-to-br from-foothills-purple via-canyon-clay to-rusty-orange'
      case 'Charity': 
        return 'bg-gradient-to-br from-sagebrush-green via-lodgepole-green to-info-river'
      case 'Social': 
        return 'bg-gradient-to-br from-warm-stone via-aged-paper to-parchment'
      default: 
        return 'bg-gradient-to-br from-slate-blue via-scope-blue to-canyon-clay'
    }
  }
  
  // Get event type color from our design system
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Competition': return 'rusty-orange'      // Competition events - energetic orange
      case 'Training': return 'slate-blue'          // Training events - professional blue  
      case 'Expo': return 'foothills-purple'        // Expo events - distinctive purple
      case 'Charity': return 'sagebrush-green'      // Charity events - natural green
      case 'Social': return 'warm-stone'            // Social events - welcoming stone
      case 'Demo': return 'canyon-clay'             // Demo events - earthy clay
      default: return 'nav-events'                  // Default events color
    }
  }
  
  // Registration status based on publicly available info only
  const getRegistrationStatus = () => {
    if (registrationUrl) return { label: 'REGISTRATION OPEN', color: 'sagebrush-green' }
    return { label: 'CONTACT ORGANIZER', color: 'slate-blue' }
  }
  
  // Calculate days until event - only show for upcoming events
  const getDaysUntilEvent = () => {
    // Parse the date properly - it might be a formatted string like "Friday-Sunday, August 22-24, 2025"
    let eventDate: Date
    
    // Try to extract a date from various formats
    if (date.includes(',')) {
      // Handle formats like "Friday-Sunday, August 22-24, 2025"
      const parts = date.split(',')
      const yearPart = parts[parts.length - 1].trim()
      const datePart = parts[parts.length - 2].trim()
      
      // Extract first date from ranges like "August 22-24"
      const firstDate = datePart.split('-')[0].trim()
      eventDate = new Date(`${firstDate}, ${yearPart}`)
    } else {
      eventDate = new Date(date)
    }
    
    // Only show timing for valid future dates
    if (isNaN(eventDate.getTime()) || eventDate < new Date()) return null
    
    const now = new Date()
    const diffTime = eventDate.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'TODAY'
    if (diffDays === 1) return 'TOMORROW'
    if (diffDays <= 7) return `${diffDays} DAYS`
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} WEEKS`
    return `${Math.ceil(diffDays / 30)} MONTHS`
  }
  
  const registrationStatus = getRegistrationStatus()
  const daysUntil = getDaysUntilEvent()
  
  // Enhanced hero section with registration and timing info
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center space-y-xs">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {dateInfo.month}
          </div>
          <div className="font-rajdhani font-black text-lg text-white leading-none">
            {dateInfo.day}
          </div>
          <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
            {dateInfo.dayOfWeek}
          </div>
          {daysUntil && (
            <div className="font-rajdhani text-xs text-white/80 mt-xs pt-xs border-t border-white/20">
              {daysUntil}
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="events"
      viewMode={viewMode}
      title={title}
      subtitle={eventSubtitle}
      description={description}
      href={eventHref}
      heroGradient={getEventTypeGradient(eventType)}
      heroContent={heroContent}
      badges={[
        { 
          label: eventType.toUpperCase(), 
          variant: "outline",
          color: getEventTypeColor(eventType)
        },
        ...(featured ? [{ label: 'FEATURED', variant: "outline", color: "weathered-gold" }] : []),
        { 
          label: registrationStatus.label, 
          variant: "outline", 
          color: registrationStatus.color 
        },
        // Price removed from gallery view - details page only
      ]}
      metadata={[
        { icon: CalendarDaysIcon, label: "Date", value: date },
        { icon: ClockIcon, label: "Time", value: time },
        { icon: MapPinIcon, label: "Venue", value: venue || location.split(',')[0] },
        ...(registrationUrl ? [{ 
          icon: UsersIcon, 
          label: "Registration", 
          value: "Online registration available" 
        }] : []),
        ...(organizer ? [{ 
          icon: UserIcon, 
          label: "Organizer", 
          value: organizer 
        }] : []),
        ...(phone ? [{ 
          icon: PhoneIcon, 
          label: "Contact", 
          value: phone 
        }] : []),
        ...(website ? [{ 
          icon: GlobeAltIcon, 
          label: "Website", 
          value: website 
        }] : [])
      ]}
      primaryAction={registrationUrl ? {
        label: "Learn More",
        href: registrationUrl
      } : undefined}
    />
  )
}