'use client'

import { Card, CardContent } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight
} from '@phosphor-icons/react'

interface FeaturedEventSpotlightProps {
  eventTitle: string
  eventType: string
  date: string
  time: string
  location: string
  venue: string
  description: string
  participantCount?: number
  maxParticipants?: number
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  isFeatured?: boolean
  isUpcoming?: boolean
  registrationUrl?: string
  className?: string
}

export function FeaturedEventSpotlight({
  eventTitle,
  eventType,
  date,
  time,
  location,
  venue,
  description,
  participantCount,
  maxParticipants,
  difficulty = 'All Levels',
  isFeatured = true,
  isUpcoming = true,
  registrationUrl,
  className
}: FeaturedEventSpotlightProps) {
  const getDifficultyBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'sagebrush-green'
      case 'Intermediate': return 'rusty-orange'
      case 'Advanced': return 'canyon-clay'
      default: return 'slate-blue'
    }
  }

  const getEventTypeBadgeVariant = (eventType: string) => {
    if (eventType.includes('Competition')) return 'rusty-orange'
    if (eventType.includes('Training')) return 'slate-blue'
    if (eventType.includes('Social')) return 'sagebrush-green'
    if (eventType.includes('Workshop')) return 'canyon-clay'
    return 'default'
  }

  return (
    <Card className={`shadow-present hover:shadow-elevated transition-all duration-300 bg-gradient-to-br from-card to-card/95 ${className}`}>
      <CardContent className="p-lg space-y-lg">
        {/* Header */}
        <div className="space-y-base">
          <div className="flex items-start justify-between gap-base">
            <div className="space-y-sm flex-1">
              <div className="flex items-center gap-sm">
                <Badge variant={getEventTypeBadgeVariant(eventType)} size="sm">
                  {eventType}
                </Badge>
                {isFeatured && (
                  <Badge variant="elite" size="sm">
                    <Star className="h-3 w-3 mr-xs" weight="bold" />
                    Featured
                  </Badge>
                )}
                {isUpcoming && (
                  <Badge variant="sagebrush-green" size="sm">
                    Upcoming
                  </Badge>
                )}
              </div>
              
              <h3 className="font-rajdhani font-bold text-2xl md:text-3xl text-card-foreground leading-tight">
                {eventTitle}
              </h3>
            </div>

            <div className="text-right space-y-xs">
              <Badge variant={getDifficultyBadgeVariant(difficulty)} size="sm">
                {difficulty}
              </Badge>
              {participantCount && maxParticipants && (
                <p className="text-xs text-muted-foreground">
                  {participantCount}/{maxParticipants} registered
                </p>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
          <div className="space-y-sm">
            <div className="flex items-center gap-sm text-sm">
              <Calendar className="h-4 w-4 text-rusty-orange" weight="bold" />
              <span className="font-medium text-card-foreground">{date}</span>
            </div>
            <div className="flex items-center gap-sm text-sm">
              <Clock className="h-4 w-4 text-slate-blue" weight="bold" />
              <span className="text-muted-foreground">{time}</span>
            </div>
          </div>

          <div className="space-y-sm">
            <div className="flex items-center gap-sm text-sm">
              <MapPin className="h-4 w-4 text-sagebrush-green" weight="bold" />
              <span className="font-medium text-card-foreground">{venue}</span>
            </div>
            <div className="flex items-center gap-sm text-sm">
              <span className="text-muted-foreground ml-6">{location}</span>
            </div>
          </div>
        </div>

        {/* Participation Info */}
        {participantCount && (
          <div className="flex items-center gap-base p-base bg-muted/30 rounded-xs">
            <Users className="h-5 w-5 text-slate-blue" weight="bold" />
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground">
                {participantCount} members registered
              </p>
              {maxParticipants && (
                <div className="w-full bg-muted rounded-full h-1.5 mt-xs">
                  <div 
                    className="bg-rusty-orange h-1.5 rounded-full transition-all duration-300" 
                    style={{ width: `${Math.min((participantCount / maxParticipants) * 100, 100)}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-sm pt-base border-t border-border">
          <Button 
            className="flex-1 bg-rusty-orange hover:bg-rusty-orange/90 text-crisp-off-white font-rajdhani font-bold"
            animationType="arrow"
            size="lg"
          >
            Register Now
            <ArrowRight className="ml-sm h-4 w-4" weight="bold" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="font-rajdhani font-bold"
            animationType="arrow"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}