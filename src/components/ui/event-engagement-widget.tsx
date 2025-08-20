'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  HeartIcon as Heart,
  ShareIcon as Share,
  CalendarIcon as Calendar,
  UsersIcon as Users,
  ExclamationTriangleIcon as Warning,
  CheckCircleIcon as CheckCircle,
  ClockIcon as Clock
} from '@heroicons/react/24/outline'
import {
  HeartIcon as HeartFilled,
  ShareIcon as ShareFilled
} from '@heroicons/react/24/solid'

interface EventEngagementWidgetProps {
  eventId: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  eventUrl: string
  registrationUrl?: string
  capacity: number
  registeredCount: number
  price: string
  featured?: boolean
  eventType: string
  className?: string
}

export function EventEngagementWidget({
  eventId,
  eventTitle,
  eventDate,
  eventLocation,
  eventUrl,
  registrationUrl,
  capacity,
  registeredCount,
  price,
  featured = false,
  eventType,
  className
}: EventEngagementWidgetProps) {
  const [isInterested, setIsInterested] = useState(false)
  const [interestedCount, setInterestedCount] = useState(Math.floor(Math.random() * 15) + 5) // Mock initial count
  const [showShareMenu, setShowShareMenu] = useState(false)

  const spotsRemaining = capacity - registeredCount
  const isSoldOut = spotsRemaining <= 0
  const isLowAvailability = spotsRemaining <= 10 && spotsRemaining > 0
  const occupancyPercentage = (registeredCount / capacity) * 100

  const handleInterestToggle = () => {
    setIsInterested(!isInterested)
    setInterestedCount(prev => isInterested ? prev - 1 : prev + 1)
  }

  const generateCalendarUrls = () => {
    const eventDateTime = new Date(eventDate)
    const endDateTime = new Date(eventDateTime.getTime() + 4 * 60 * 60 * 1000) // Assume 4-hour events
    
    const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const startDate = formatDate(eventDateTime)
    const endDate = formatDate(endDateTime)
    
    const calendarUrls = {
      google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(eventLocation)}&details=${encodeURIComponent(`Join us for ${eventTitle}. More info: ${eventUrl}`)}`,
      outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${startDate}&enddt=${endDate}&location=${encodeURIComponent(eventLocation)}&body=${encodeURIComponent(`Join us for ${eventTitle}. More info: ${eventUrl}`)}`,
      apple: `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${eventUrl}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventTitle}
DESCRIPTION:Join us for ${eventTitle}. More info: ${eventUrl}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`
    }
    
    return calendarUrls
  }

  const handleShare = (platform: string) => {
    const shareUrl = window.location.href
    const shareText = `Check out ${eventTitle} - ${eventDate} in ${eventLocation}`
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    }
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl)
      // Could add toast notification here
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400')
    }
    
    setShowShareMenu(false)
  }

  const calendarUrls = generateCalendarUrls()

  return (
    <Card className={cn("mica-card shadow-present hover:shadow-elevated transition-all duration-300", className)}>
      <CardContent className="p-xl space-y-lg">
        {/* Registration Status */}
        <div className="space-y-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-rajdhani font-bold text-heading-base text-card-foreground">
              Event Registration
            </h3>
            {featured && (
              <Badge className="bg-nav-events/20 text-nav-events border-nav-events/30">
                Featured Event
              </Badge>
            )}
          </div>
          
          {/* Capacity Status */}
          <div className="space-y-xs">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-medium text-card-foreground">
                {registeredCount} / {capacity}
              </span>
            </div>
            
            {/* Visual capacity bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  occupancyPercentage >= 90 ? "bg-destructive" :
                  occupancyPercentage >= 70 ? "bg-warning-clay" :
                  "bg-nav-events"
                )}
                style={{ width: `${Math.min(occupancyPercentage, 100)}%` }}
              />
            </div>
            
            {/* Status message */}
            <div className="flex items-center gap-xs">
              {isSoldOut ? (
                <>
                  <Warning className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">Sold Out</span>
                </>
              ) : isLowAvailability ? (
                <>
                  <Warning className="h-4 w-4 text-warning-clay" />
                  <span className="text-sm font-medium text-warning-clay">
                    Only {spotsRemaining} spots left!
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 text-sagebrush-green" />
                  <span className="text-sm font-medium text-sagebrush-green">
                    {spotsRemaining} spots available
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-muted/30 p-sm rounded-xs">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Entry Fee</span>
            <span className="font-rajdhani font-bold text-lg text-nav-events">{price}</span>
          </div>
        </div>

        {/* Registration Button */}
        <div className="space-y-sm">
          {registrationUrl ? (
            <Button 
              size="lg"
              className={cn(
                "w-full font-rajdhani font-bold text-lg h-12",
                isSoldOut 
                  ? "bg-muted text-muted-foreground cursor-not-allowed" 
                  : "bg-nav-events text-white hover:bg-nav-events/90"
              )}
              disabled={isSoldOut}
              onClick={() => registrationUrl && window.open(registrationUrl, '_blank')}
            >
              {isSoldOut ? 'Sold Out' : isLowAvailability ? '🔥 Register Now - Limited Spots!' : 'Register for Event'}
            </Button>
          ) : (
            <Button 
              variant="outline"
              size="lg"
              className="w-full font-rajdhani font-bold text-lg h-12 border-nav-events text-nav-events hover:bg-nav-events hover:text-white"
            >
              <Clock className="h-5 w-5 mr-xs" />
              Registration Opens Soon
            </Button>
          )}
        </div>

        {/* Interest Tracking */}
        <div className="border-t border-border pt-lg space-y-sm">
          <Button
            variant={isInterested ? "default" : "outline"}
            size="lg"
            onClick={handleInterestToggle}
            className={cn(
              "w-full gap-xs font-rajdhani font-bold text-base h-11",
              isInterested 
                ? "bg-rusty-orange text-white hover:bg-rusty-orange/90" 
                : "border-rusty-orange text-rusty-orange hover:bg-rusty-orange hover:text-white"
            )}
          >
            {isInterested ? <HeartFilled className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
            {isInterested ? 'Interested!' : 'I\'m Interested'}
          </Button>
          
          <div className="flex items-center justify-center gap-xs text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{interestedCount} people interested</span>
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="border-t border-border pt-base space-y-sm">
          <p className="text-sm font-medium text-card-foreground">Add to Calendar</p>
          <div className="grid grid-cols-3 gap-xs">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(calendarUrls.google, '_blank')}
              className="text-xs font-rajdhani"
            >
              <Calendar className="h-3 w-3 mr-xs" />
              Google
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(calendarUrls.outlook, '_blank')}
              className="text-xs font-rajdhani"
            >
              <Calendar className="h-3 w-3 mr-xs" />
              Outlook
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement('a')
                link.href = calendarUrls.apple
                link.download = `${eventTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`
                link.click()
              }}
              className="text-xs font-rajdhani"
            >
              <Calendar className="h-3 w-3 mr-xs" />
              Apple
            </Button>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="border-t border-border pt-base space-y-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-card-foreground">Share Event</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="gap-xs text-muted-foreground hover:text-card-foreground"
            >
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
          
          {showShareMenu && (
            <div className="grid grid-cols-2 gap-xs">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="text-xs font-rajdhani"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="text-xs font-rajdhani"
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="text-xs font-rajdhani"
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('copy')}
                className="text-xs font-rajdhani"
              >
                Copy Link
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}