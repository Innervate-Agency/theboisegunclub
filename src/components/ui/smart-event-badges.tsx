'use client'

import React from 'react'
import { Badge } from './badge'
import { 
  StarIcon as Star,
  ShieldCheckIcon as Shield,
  UsersIcon as Users,
  UserIcon as User,
  AcademicCapIcon as AcademicCap,
  TrophyIcon as Trophy,
  ClockIcon as Clock,
  HeartIcon as Heart,
  FireIcon as Fire,
  SunIcon as Sun,
  BuildingOfficeIcon as Building,
  ExclamationTriangleIcon as Warning,
  CheckCircleIcon as Check,
  SparklesIcon as Sparkles,
  BoltIcon as Bolt,
  PlusCircleIcon as Target
} from '@heroicons/react/24/outline'

interface SmartEventBadgesProps {
  title: string
  eventType?: string
  difficulty?: string
  featured?: boolean
  venue?: string
  price?: string
  organizer?: string
  description?: string
}

export function SmartEventBadges({
  title,
  eventType,
  difficulty,
  featured,
  venue,
  price,
  organizer,
  description
}: SmartEventBadgesProps) {
  const badges: JSX.Element[] = []
  const titleLower = title.toLowerCase()
  const descLower = description?.toLowerCase() || ''
  const venueLower = venue?.toLowerCase() || ''
  
  // Difficulty Level
  if (difficulty) {
    const getDifficultyColor = (level: string) => {
      switch (level) {
        case 'Beginner': return 'success'
        case 'Intermediate': return 'warning'  
        case 'Advanced': return 'destructive'
        default: return 'default'
      }
    }
    
    badges.push(
      <Badge key="difficulty" variant={getDifficultyColor(difficulty)} size="sm">
        <AcademicCap className="w-3 h-3 mr-1" />
        {difficulty}
      </Badge>
    )
  }

  // Featured Status
  if (featured) {
    badges.push(
      <Badge key="featured" variant="events-featured" size="sm">
        <Star className="w-3 h-3 mr-1" />
        Featured
      </Badge>
    )
  }

  // Sport/Weapon Types
  if (titleLower.includes('rifle') || titleLower.includes('precision') || descLower.includes('rifle')) {
    badges.push(
      <Badge key="rifle" variant="events-training" size="sm">
        <Target className="w-3 h-3 mr-1" />
        Rifle
      </Badge>
    )
  }
  
  if (titleLower.includes('pistol') || titleLower.includes('handgun') || descLower.includes('pistol')) {
    badges.push(
      <Badge key="pistol" variant="events-training" size="sm">
        <Shield className="w-3 h-3 mr-1" />
        Pistol
      </Badge>
    )
  }
  
  if (titleLower.includes('shotgun') || descLower.includes('shotgun')) {
    badges.push(
      <Badge key="shotgun" variant="events-training" size="sm">
        <Bolt className="w-3 h-3 mr-1" />
        Shotgun
      </Badge>
    )
  }
  
  if (titleLower.includes('archery') || titleLower.includes('bow') || descLower.includes('archery')) {
    badges.push(
      <Badge key="archery" variant="status-success" size="sm">
        <Target className="w-3 h-3 mr-1" />
        Archery
      </Badge>
    )
  }
  
  if (titleLower.includes('tactical') || titleLower.includes('carbine') || titleLower.includes('ar-15')) {
    badges.push(
      <Badge key="tactical" variant="events-competition" size="sm">
        <Fire className="w-3 h-3 mr-1" />
        Tactical
      </Badge>
    )
  }

  // Shooting Disciplines  
  if (titleLower.includes('3-gun') || titleLower.includes('three gun') || titleLower.includes('multi-gun')) {
    badges.push(
      <Badge key="3gun" variant="destructive" size="sm">
        <Fire className="w-3 h-3 mr-1" />
        3-Gun
      </Badge>
    )
  }
  
  if (titleLower.includes('idpa') || titleLower.includes('ipsc') || titleLower.includes('uspsa')) {
    badges.push(
      <Badge key="action" variant="outline" size="sm">
        <Bolt className="w-3 h-3 mr-1" />
        Action Shooting
      </Badge>
    )
  }
  
  if (titleLower.includes('long range') || titleLower.includes('precision') || titleLower.includes('sniper')) {
    badges.push(
      <Badge key="longrange" variant="default" size="sm">
        <Target className="w-3 h-3 mr-1" />
        Long Range
      </Badge>
    )
  }
  
  if (titleLower.includes('clay') || titleLower.includes('trap') || titleLower.includes('skeet') || titleLower.includes('sporting clays')) {
    badges.push(
      <Badge key="clay" variant="secondary" size="sm">
        <Target className="w-3 h-3 mr-1" />
        Clay Sports
      </Badge>
    )
  }

  // Event Format
  if (titleLower.includes('team') || titleLower.includes('squad') || titleLower.includes('relay')) {
    badges.push(
      <Badge key="team" variant="outline" size="sm">
        <Users className="w-3 h-3 mr-1" />
        Team Event
      </Badge>
    )
  } else if (titleLower.includes('individual') || titleLower.includes('solo')) {
    badges.push(
      <Badge key="individual" variant="secondary" size="sm">
        <User className="w-3 h-3 mr-1" />
        Individual
      </Badge>
    )
  }

  // Activity Type
  if (titleLower.includes('instruction') || titleLower.includes('class') || titleLower.includes('course') || titleLower.includes('lesson')) {
    badges.push(
      <Badge key="instruction" variant="default" size="sm">
        <AcademicCap className="w-3 h-3 mr-1" />
        Instruction
      </Badge>
    )
  }
  
  if (titleLower.includes('match') || titleLower.includes('competition') || titleLower.includes('tournament') || titleLower.includes('championship')) {
    badges.push(
      <Badge key="match" variant="destructive" size="sm">
        <Trophy className="w-3 h-3 mr-1" />
        Competition
      </Badge>
    )
  }
  
  if (titleLower.includes('practice') || titleLower.includes('training') || titleLower.includes('drill')) {
    badges.push(
      <Badge key="training" variant="default" size="sm">
        <Clock className="w-3 h-3 mr-1" />
        Training
      </Badge>
    )
  }
  
  if (titleLower.includes('fun shoot') || titleLower.includes('social') || titleLower.includes('casual')) {
    badges.push(
      <Badge key="fun" variant="outline" size="sm">
        <Heart className="w-3 h-3 mr-1" />
        Fun Shoot
      </Badge>
    )
  }

  // Special Categories
  if (titleLower.includes('youth') || titleLower.includes('junior') || titleLower.includes('kid')) {
    badges.push(
      <Badge key="youth" variant="success" size="sm">
        <Sparkles className="w-3 h-3 mr-1" />
        Youth Event
      </Badge>
    )
  }
  
  if (titleLower.includes('women') || titleLower.includes('ladies') || titleLower.includes('female')) {
    badges.push(
      <Badge key="women" variant="foothills-purple" size="sm">
        <Heart className="w-3 h-3 mr-1" />
        Women's Event
      </Badge>
    )
  }
  
  if (titleLower.includes('veteran') || titleLower.includes('military') || titleLower.includes('leo') || titleLower.includes('first responder')) {
    badges.push(
      <Badge key="veteran" variant="rusty-orange" size="sm">
        <Shield className="w-3 h-3 mr-1" />
        Veterans/LEO
      </Badge>
    )
  }
  
  if (titleLower.includes('beginner') || titleLower.includes('intro') || titleLower.includes('new shooter')) {
    badges.push(
      <Badge key="beginner" variant="success" size="sm">
        <Check className="w-3 h-3 mr-1" />
        Beginner Friendly
      </Badge>
    )
  }
  
  if (titleLower.includes('advanced') || titleLower.includes('expert') || titleLower.includes('master')) {
    badges.push(
      <Badge key="advanced" variant="destructive" size="sm">
        <Warning className="w-3 h-3 mr-1" />
        Advanced Only
      </Badge>
    )
  }

  // Time-based
  if (titleLower.includes('night') || titleLower.includes('evening') || descLower.includes('night')) {
    badges.push(
      <Badge key="night" variant="slate-blue" size="sm">
        <Star className="w-3 h-3 mr-1" />
        Night Event
      </Badge>
    )
  }
  
  if (titleLower.includes('sunrise') || titleLower.includes('early') || titleLower.includes('dawn')) {
    badges.push(
      <Badge key="early" variant="warm-stone" size="sm">
        <Sun className="w-3 h-3 mr-1" />
        Early Start
      </Badge>
    )
  }

  // Venue Types
  if (venueLower.includes('outdoor') || titleLower.includes('outdoor') || descLower.includes('outdoor')) {
    badges.push(
      <Badge key="outdoor" variant="sagebrush-green" size="sm">
        <Sun className="w-3 h-3 mr-1" />
        Outdoor
      </Badge>
    )
  }
  
  if (venueLower.includes('indoor') || titleLower.includes('indoor')) {
    badges.push(
      <Badge key="indoor" variant="slate-blue" size="sm">
        <Building className="w-3 h-3 mr-1" />
        Indoor
      </Badge>
    )
  }

  // Pricing
  if (!price || price.toLowerCase().includes('free')) {
    badges.push(
      <Badge key="free" variant="success" size="sm">
        <Check className="w-3 h-3 mr-1" />
        Free
      </Badge>
    )
  }

  // Special Events
  if (titleLower.includes('charity') || titleLower.includes('fundraiser') || titleLower.includes('benefit')) {
    badges.push(
      <Badge key="charity" variant="success" size="sm">
        <Heart className="w-3 h-3 mr-1" />
        Charity Event
      </Badge>
    )
  }
  
  if (titleLower.includes('series') || titleLower.includes('league') || titleLower.includes('season')) {
    badges.push(
      <Badge key="series" variant="info-river" size="sm">
        <Trophy className="w-3 h-3 mr-1" />
        Series Event
      </Badge>
    )
  }

  return (
    <div className="flex flex-wrap gap-xs">
      {badges}
    </div>
  )
}