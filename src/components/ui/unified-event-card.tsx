'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon, UserIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { getContentTypeColor, getContentTypeGradient, generateGradientCSS } from '@/lib/content-type-colors'

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
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays <= 7) return `${diffDays} Days`
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} Weeks`
    return `${Math.ceil(diffDays / 30)} Months`
  }
  
  // Generate subtitle from event data with timing context
  const getEventSubtitle = () => {
    // If custom subtitle provided, use it (but add timing if available)
    if (subtitle) {
      const timing = getDaysUntilEvent()
      return timing ? `${subtitle} • ${getTimingContext(timing)}` : subtitle
    }
    
    // Get timing context first
    const timing = getDaysUntilEvent()
    const timingText = timing ? getTimingContext(timing) : ''
    
    // Extract key info from description for subtitle
    const desc = description.toLowerCase()
    
    // Championship/Major events
    if (eventType === 'Competition') {
      let eventDesc = 'Shooting Competition'
      if (desc.includes('championship') || desc.includes('state')) eventDesc = 'State Championship Event'
      else if (desc.includes('major') || desc.includes('regional')) eventDesc = 'Major Competition'
      else if (desc.includes('premier') || desc.includes('top-level')) eventDesc = 'Premier Competition'
      else if (desc.includes('tier 3') || desc.includes('tier3')) eventDesc = 'IDPA Tier 3 Match'
      else if (desc.includes('uspsa')) eventDesc = 'USPSA Action Shooting'
      else if (desc.includes('idpa')) eventDesc = 'IDPA Defensive Pistol'
      else if (desc.includes('steel challenge')) eventDesc = 'Steel Challenge Match'
      else if (desc.includes('sporting clays')) eventDesc = 'Sporting Clays Tournament'
      else if (desc.includes('cowboy') || desc.includes('sass')) eventDesc = 'Cowboy Action Shooting'
      else if (desc.includes('3-gun') || desc.includes('multigun')) eventDesc = '3-Gun Competition'
      
      return timingText ? `${eventDesc} • ${timingText}` : eventDesc
    }
    
    // Training events
    if (eventType === 'Training') {
      let eventDesc = 'Firearms Training'
      if (desc.includes('beginner') || desc.includes('new shooter')) eventDesc = 'Beginner Friendly'
      else if (desc.includes('advanced') || desc.includes('tactical')) eventDesc = 'Advanced Training'
      else if (desc.includes('ccw') || desc.includes('concealed')) eventDesc = 'CCW Training'
      else if (desc.includes('instructor') || desc.includes('certification')) eventDesc = 'Instructor Course'
      
      return timingText ? `${eventDesc} • ${timingText}` : eventDesc
    }
    
    // Other event types
    let eventDesc = ''
    if (eventType === 'Expo') eventDesc = 'Gun Show & Trade Event'
    else if (eventType === 'Charity') eventDesc = 'Charity Fundraiser'
    else if (eventType === 'Social') eventDesc = 'Social Event'
    else if (organizer) eventDesc = `Hosted by ${organizer}`
    
    return eventDesc && timingText ? `${eventDesc} • ${timingText}` : eventDesc || timingText || null
  }
  
  // Convert timing to contextual phrase
  const getTimingContext = (timing: string) => {
    if (timing === 'Today') return 'Event is today'
    if (timing === 'Tomorrow') return 'Event is tomorrow'
    if (timing.includes('Days')) return `Event starts in ${timing.toLowerCase()}`
    if (timing.includes('Weeks')) return `Event starts in ${timing.toLowerCase()}`
    if (timing.includes('Months')) return `Event starts in ${timing.toLowerCase()}`
    return `Event starts ${timing.toLowerCase()}`
  }
  
  // Extract specific event type for more detailed badge
  const getSpecificEventType = (): string | null => {
    const desc = description.toLowerCase()
    const titleLower = title.toLowerCase()
    
    // Competition-specific formats
    if (eventType === 'Competition') {
      if (desc.includes('uspsa') || titleLower.includes('uspsa')) return 'USPSA'
      if (desc.includes('idpa') || titleLower.includes('idpa')) return 'IDPA'
      if (desc.includes('steel challenge') || titleLower.includes('steel challenge')) return 'Steel Challenge'
      if (desc.includes('3-gun') || desc.includes('multigun') || titleLower.includes('3-gun')) return '3-Gun'
      if (desc.includes('sporting clays') || titleLower.includes('sporting clays')) return 'Sporting Clays'
      if (desc.includes('cowboy') || desc.includes('sass') || titleLower.includes('cowboy')) return 'Cowboy Action'
      if (desc.includes('precision') || titleLower.includes('precision')) return 'Precision'
      if (desc.includes('tactical') || titleLower.includes('tactical')) return 'Tactical'
    }
    
    // Training-specific formats
    if (eventType === 'Training') {
      if (desc.includes('ccw') || desc.includes('concealed') || titleLower.includes('ccw')) return 'CCW'
      if (desc.includes('beginner') || titleLower.includes('beginner')) return 'Beginner'
      if (desc.includes('advanced') || titleLower.includes('advanced')) return 'Advanced'
      if (desc.includes('instructor') || titleLower.includes('instructor')) return 'Instructor'
      if (desc.includes('defensive') || titleLower.includes('defensive')) return 'Defensive'
      if (desc.includes('tactical') || titleLower.includes('tactical')) return 'Tactical'
    }
    
    // General qualifiers
    if (desc.includes('indoor') || titleLower.includes('indoor')) return 'Indoor'
    if (desc.includes('outdoor') || titleLower.includes('outdoor')) return 'Outdoor'
    if (desc.includes('championship') || titleLower.includes('championship')) return 'Championship'
    if (desc.includes('clinic') || titleLower.includes('clinic')) return 'Clinic'
    
    return null
  }
  
  const eventSubtitle = getEventSubtitle()
  
  // Format date for display
  const formatEventDate = (dateString: string) => {
    // Use same parsing logic as getDaysUntilEvent to handle multi-day formats
    let eventDate: Date
    
    // Try to extract a date from various formats
    if (dateString.includes(',')) {
      // Handle formats like "Friday-Sunday, August 22-24, 2025"
      const parts = dateString.split(',')
      const yearPart = parts[parts.length - 1].trim()
      const datePart = parts[parts.length - 2].trim()
      
      // Extract first date from ranges like "August 22-24"
      const firstDate = datePart.split('-')[0].trim()
      eventDate = new Date(`${firstDate}, ${yearPart}`)
    } else {
      eventDate = new Date(dateString)
    }
    
    // Handle invalid dates gracefully
    if (isNaN(eventDate.getTime())) {
      // Fallback to current date to prevent NaN display
      eventDate = new Date()
    }
    
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' })
    const day = eventDate.getDate()
    const dayOfWeek = eventDate.toLocaleDateString('en-US', { weekday: 'short' })
    return { month, day, dayOfWeek }
  }
  
  const dateInfo = formatEventDate(date)
  
  // Get event type gradient using new single-color system
  const getEventTypeGradient = (type: string) => {
    const gradientColors = getContentTypeGradient('events', type)
    return generateGradientCSS(gradientColors, 'to-br')
  }
  
  // Get event type color using new single-color system
  const getEventTypeColor = (type: string) => {
    return getContentTypeColor('events', type)
  }
  
  // Registration status based on publicly available info only
  const getRegistrationStatus = () => {
    if (registrationUrl) return { label: 'Registration Open', color: 'sagebrush-green' }
    return { label: 'Contact Organizer', color: 'slate-blue' }
  }
  
  const registrationStatus = getRegistrationStatus()
  
  // Enhanced hero section with registration and timing info
  const heroContent = (
    <div className="absolute top-lg left-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center space-y-xs">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {dateInfo.month}
          </div>
          <div className="font-rajdhani font-black text-xl text-white leading-none">
            {dateInfo.day}
          </div>
          <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
            {getDaysUntilEvent() || 'Event'}
          </div>
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
      contentType={eventType}
      badges={[
        { 
          label: eventType, 
          variant: "outline",
          color: getEventTypeColor(eventType)
        },
        ...(featured ? [{ label: 'Featured', variant: "outline", color: "weathered-gold" }] : []),
        ...(getSpecificEventType() ? [{ 
          label: getSpecificEventType()!, 
          variant: "outline", 
          color: "slate-blue" 
        }] : []),
        // Timing and registration info now in subtitle and metadata
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