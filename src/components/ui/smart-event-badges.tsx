'use client'

import React from 'react'
import { Badge } from './badge'
import { AcademicCapIcon, ArrowRightIcon, BuildingOfficeIcon, CalendarDaysIcon, CheckCircleIcon, CheckIcon, ClockIcon, CurrencyDollarIcon, ExclamationTriangleIcon, HandRaisedIcon, InformationCircleIcon, SunIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline';

interface SmartEventBadgesProps {
  title: string
  eventType?: string
  date: string
  time?: string
  description: string
  price?: string
  registrationUrl?: string
  venue?: string
}

/**
 * Smart Event Badges - MVP Truth-Based System
 * Only shows verifiable, helpful information that adds real value
 * No fake "featured" or "verified" badges for MVP
 */
export function SmartEventBadges({
  title,
  eventType,
  date,
  time,
  description,
  price,
  registrationUrl,
  venue
}: SmartEventBadgesProps) {
  const badges: JSX.Element[] = []
  const titleLower = title.toLowerCase()
  const descLower = description.toLowerCase()
  const venueLower = venue?.toLowerCase() || ''
  
  // 1. EVENT FORMAT BADGES (Always True)
  
  // Multi-day detection
  if (date.includes(' - ') || descLower.includes('multi-day') || descLower.includes('weekend') || 
      descLower.includes('saturday') && descLower.includes('sunday')) {
    badges.push(
      <Badge key="multiday" variant="info-river" size="sm" hideIcon={true}>
        <CalendarDaysIcon className="w-3 h-3 mr-1" />
        Multi-Day
      </Badge>
    )
  }
  
  // Series/League detection
  if (titleLower.includes('series') || titleLower.includes('league') || 
      descLower.includes('series') || descLower.includes('league') || 
      descLower.includes('season')) {
    badges.push(
      <Badge key="series" variant="slate-blue" size="sm" hideIcon={true}>
        <Arrow className="w-3 h-3 mr-1" />
        Series Event
      </Badge>
    )
  }
  
  // Championship detection
  if (titleLower.includes('championship') || titleLower.includes('state') || 
      titleLower.includes('national') || titleLower.includes('regional')) {
    badges.push(
      <Badge key="championship" variant="rusty-orange" size="sm" hideIcon={true}>
        <CheckIcon className="w-3 h-3 mr-1" />
        Championship
      </Badge>
    )
  }

  // 2. EQUIPMENT REQUIREMENT BADGES (Helpful Info)
  
  // Bring your own ammo
  if (descLower.includes('byoa') || descLower.includes('bring your own ammo') || 
      descLower.includes('bring ammo') || descLower.includes('ammunition not provided')) {
    badges.push(
      <Badge key="byoa" variant="sandy-ochre" size="sm" hideIcon={true}>
        <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
        BYOA
      </Badge>
    )
  }
  
  // Equipment provided/available
  if (descLower.includes('equipment provided') || descLower.includes('gear available') || 
      descLower.includes('rentals available') || descLower.includes('loaner')) {
    badges.push(
      <Badge key="gear" variant="sagebrush-green" size="sm" hideIcon={true}>
        <CheckIcon className="w-3 h-3 mr-1" />
        Gear Available
      </Badge>
    )
  }
  
  // Bring your own gear
  if (descLower.includes('bring your own') || descLower.includes('byog') || 
      descLower.includes('personal equipment required')) {
    badges.push(
      <Badge key="byo" variant="warm-stone" size="sm" hideIcon={true}>
        <Hand className="w-3 h-3 mr-1" />
        Bring Your Own
      </Badge>
    )
  }

  // 3. REGISTRATION STATUS BADGES (Real Data)
  
  // Registration required
  if (registrationUrl) {
    badges.push(
      <Badge key="prereg" variant="info-river" size="sm" hideIcon={true}>
        <UserIcon className="w-3 h-3 mr-1" />
        Pre-Registration
      </Badge>
    )
  } else {
    // Walk-ins welcome
    badges.push(
      <Badge key="walkin" variant="sagebrush-green" size="sm" hideIcon={true}>
        <UsersIcon className="w-3 h-3 mr-1" />
        Walk-ins Welcome
      </Badge>
    )
  }
  
  // Time-sensitive registration
  const eventDate = new Date(date)
  const now = new Date()
  const daysUntil = Math.floor((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  
  if (daysUntil <= 7 && daysUntil > 0 && registrationUrl) {
    badges.push(
      <Badge key="closing" variant="sandy-ochre" size="sm" hideIcon={true}>
        <ClockIcon className="w-3 h-3 mr-1" />
        Closing Soon
      </Badge>
    )
  }

  // 4. SKILL LEVEL BADGES (Descriptive)
  
  // Beginner friendly
  if (descLower.includes('beginner') || descLower.includes('new shooter') || 
      descLower.includes('introductory') || descLower.includes('intro to') ||
      descLower.includes('first time') || descLower.includes('no experience')) {
    badges.push(
      <Badge key="beginner" variant="sagebrush-green" size="sm" hideIcon={true}>
        <AcademicCap className="w-3 h-3 mr-1" />
        Beginner Friendly
      </Badge>
    )
  }
  
  // All skill levels
  if (descLower.includes('all skill levels') || descLower.includes('all levels') || 
      descLower.includes('open to all') || descLower.includes('everyone welcome')) {
    badges.push(
      <Badge key="alllevels" variant="slate-blue" size="sm" hideIcon={true}>
        <UsersIcon className="w-3 h-3 mr-1" />
        All Skill Levels
      </Badge>
    )
  }
  
  // Advanced/Experienced
  if (descLower.includes('advanced') || descLower.includes('experienced') || 
      descLower.includes('expert') || descLower.includes('master') ||
      descLower.includes('experienced shooters only')) {
    badges.push(
      <Badge key="advanced" variant="rusty-orange" size="sm" hideIcon={true}>
        <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
        Experienced Shooters
      </Badge>
    )
  }

  // 5. LOCATION TYPE BADGES (Geographic)
  
  // Indoor vs Outdoor
  if (venueLower.includes('indoor') || titleLower.includes('indoor') || 
      descLower.includes('indoor range')) {
    badges.push(
      <Badge key="indoor" variant="slate-blue" size="sm" hideIcon={true}>
        <BuildingOfficeIcon className="w-3 h-3 mr-1" />
        Indoor Range
      </Badge>
    )
  } else if (venueLower.includes('outdoor') || titleLower.includes('outdoor') || 
             descLower.includes('outdoor') || descLower.includes('field')) {
    badges.push(
      <Badge key="outdoor" variant="sagebrush-green" size="sm" hideIcon={true}>
        <SunIcon className="w-3 h-3 mr-1" />
        Outdoor Range
      </Badge>
    )
  }

  // 6. TIME-BASED BADGES (Helpful Context)
  
  // Weekend event
  const dateObj = new Date(date)
  const dayOfWeek = dateObj.getDay()
  if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
    badges.push(
      <Badge key="weekend" variant="warm-stone" size="sm" hideIcon={true}>
        <CalendarDaysIcon className="w-3 h-3 mr-1" />
        Weekend Event
      </Badge>
    )
  }
  
  // Evening event
  if (time && (time.includes('PM') || time.includes('evening') || 
      parseInt(time.split(':')[0]) >= 17)) {
    badges.push(
      <Badge key="evening" variant="slate-blue" size="sm" hideIcon={true}>
        <ClockIcon className="w-3 h-3 mr-1" />
        Evening Match
      </Badge>
    )
  }
  
  // All day event
  if (descLower.includes('all day') || descLower.includes('full day') || 
      descLower.includes('8 hour') || descLower.includes('sunrise to sunset')) {
    badges.push(
      <Badge key="allday" variant="sandy-ochre" size="sm" hideIcon={true}>
        <SunIcon className="w-3 h-3 mr-1" />
        All Day
      </Badge>
    )
  }

  // 7. COST BADGES (Real Information)
  
  // Free events
  if (!price || price.toLowerCase().includes('free') || price === '$0') {
    badges.push(
      <Badge key="free" variant="sagebrush-green" size="sm" hideIcon={true}>
        <CheckIcon className="w-3 h-3 mr-1" />
        Free
      </Badge>
    )
  }
  
  // Low cost events
  if (price && price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) <= 25) {
    badges.push(
      <Badge key="lowcost" variant="warm-stone" size="sm" hideIcon={true}>
        <Dollar className="w-3 h-3 mr-1" />
        Under $25
      </Badge>
    )
  }

  // 8. SPECIAL CONSIDERATIONS (Real Attributes)
  
  // Youth events
  if (titleLower.includes('youth') || titleLower.includes('junior') || 
      descLower.includes('youth') || descLower.includes('under 18')) {
    badges.push(
      <Badge key="youth" variant="lodgepole-green" size="sm" hideIcon={true}>
        <AcademicCap className="w-3 h-3 mr-1" />
        Youth Program
      </Badge>
    )
  }
  
  // Charity events
  if (titleLower.includes('charity') || titleLower.includes('benefit') || 
      descLower.includes('charity') || descLower.includes('fundraiser')) {
    badges.push(
      <Badge key="charity" variant="foothills-purple" size="sm" hideIcon={true}>
        <CheckIcon className="w-3 h-3 mr-1" />
        Charity Event
      </Badge>
    )
  }
  
  // Training/Educational
  if (eventType === 'Training' || titleLower.includes('training') || 
      titleLower.includes('class') || titleLower.includes('course') ||
      descLower.includes('instruction') || descLower.includes('learn')) {
    badges.push(
      <Badge key="training" variant="nav-armory" size="sm" hideIcon={true}>
        <AcademicCap className="w-3 h-3 mr-1" />
        Training
      </Badge>
    )
  }

  return (
    <div className="flex flex-wrap gap-xs">
      {badges}
    </div>
  )
}