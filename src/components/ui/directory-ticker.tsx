'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from './badge'
import { 
  CheckCircleIcon as CheckCircle, 
  BuildingStorefrontIcon as Storefront, 
  SparklesIcon as Sparkles, 
  ClockIcon as Clock,
  MapPinIcon as MapPin,
  TrophyIcon as Trophy,
  ShieldCheckIcon as Shield
} from '@heroicons/react/24/outline'

interface DirectoryAnnouncement {
  type: 'verification' | 'new_listing' | 'service_highlight'
  title: string
  description: string
  location: string
  businessType: string
  timestamp: string
  slug: string
}

interface DirectoryTickerProps {
  announcements?: DirectoryAnnouncement[]  // Made optional for backward compatibility
  autoRefresh?: boolean   // Auto-refresh from API
  refreshInterval?: number // Refresh interval in milliseconds
}

export function DirectoryTicker({ 
  announcements: staticAnnouncements, 
  autoRefresh = true,
  refreshInterval = 600000 // 10 minutes default (less frequent than events)
}: DirectoryTickerProps) {
  const [liveAnnouncements, setLiveAnnouncements] = useState<DirectoryAnnouncement[]>(staticAnnouncements || [])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch live announcements from API
  const fetchLiveAnnouncements = async () => {
    if (!autoRefresh) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/tickers/directory?limit=6')
      if (!response.ok) throw new Error('Failed to fetch directory updates')
      
      const result = await response.json()
      if (result.success && result.data) {
        setLiveAnnouncements(result.data)
      } else {
        throw new Error(result.error || 'Invalid response format')
      }
    } catch (err) {
      console.error('DirectoryTicker API error:', err)
      setError(err instanceof Error ? err.message : 'Failed to load directory updates')
      // Keep existing announcements on error
    } finally {
      setIsLoading(false)
    }
  }

  // Initial fetch and auto-refresh setup
  useEffect(() => {
    if (autoRefresh) {
      fetchLiveAnnouncements()
      const interval = setInterval(fetchLiveAnnouncements, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  // Use live announcements if available, fallback to static announcements
  const announcements = liveAnnouncements.length > 0 ? liveAnnouncements : (staticAnnouncements || [])
  
  // Create a longer array by repeating announcements for continuous scroll
  const extendedAnnouncements = [...announcements, ...announcements, ...announcements]

  // Get announcement type icon and color
  const getAnnouncementIcon = (type: string) => {
    const iconClass = "size-4"
    switch (type) {
      case 'verification':
        return <Shield className={`${iconClass} text-sagebrush-green`} />
      case 'new_listing':
        return <Sparkles className={`${iconClass} text-nav-directory`} />
      case 'service_highlight':
        return <Trophy className={`${iconClass} text-rusty-orange`} />
      default:
        return <Storefront className={`${iconClass} text-nav-directory`} />
    }
  }

  const getAnnouncementBadgeVariant = (type: string) => {
    switch (type) {
      case 'verification': return 'directory-verified'
      case 'new_listing': return 'directory-business'  
      case 'service_highlight': return 'directory-gold'
      default: return 'status-info'
    }
  }

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="bg-gradient-to-r from-nav-directory/5 to-nav-directory/10 border-b border-border/20 overflow-hidden">
      <div className="relative">
        {/* Header Label */}
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-nav-directory/20 to-transparent z-10 flex items-center px-lg">
          <div className="flex items-center gap-xs text-body-sm font-rajdhani font-bold text-nav-directory">
            <Storefront className="size-4" />
            <span>DIRECTORY UPDATES</span>
          </div>
        </div>

        {/* Status indicator for live data */}
        {autoRefresh && (
          <div className="absolute right-sm top-2 z-20 flex items-center gap-xs">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-sandy-ochre animate-pulse' : error ? 'bg-rusty-orange' : 'bg-sagebrush-green'}`} />
            <span className="text-xs text-muted-foreground font-medium">
              {isLoading ? 'Updating...' : error ? 'Error' : 'Live'}
            </span>
          </div>
        )}
        
        <div className="flex animate-scroll whitespace-nowrap py-base pl-48">
          {extendedAnnouncements.length > 0 ? extendedAnnouncements.map((announcement, index) => (
            <div key={index} className="flex items-center gap-base px-xl flex-shrink-0">
              <div className="flex items-center gap-base">
                {/* Business Update */}
                <div className="space-y-xs">
                  <div className="flex items-center gap-xs">
                    {getAnnouncementIcon(announcement.type)}
                    <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                      {announcement.title}
                    </span>
                    <Badge 
                      variant={getAnnouncementBadgeVariant(announcement.type)} 
                      size="sm"
                      className="text-body-xs"
                    >
                      {announcement.type === 'verification' ? 'Verified' :
                       announcement.type === 'new_listing' ? 'New' : 'Featured'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-base text-body-xs text-muted-foreground">
                    {/* Description */}
                    <div className="flex items-center gap-xs">
                      <span className="font-medium">{announcement.description}</span>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center gap-xs">
                      <MapPin className="size-3 text-nav-directory" />
                      <span>{announcement.location}</span>
                    </div>
                    
                    {/* Time */}
                    <div className="flex items-center gap-xs">
                      <Clock className="size-3 text-nav-directory" />
                      <span className="font-medium">{formatTimeAgo(announcement.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              <div className="h-8 w-px bg-border/30" />
            </div>
          )) : (
            <div className="flex items-center justify-center w-full py-lg pl-48">
              <span className="text-muted-foreground">No directory updates available</span>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 75s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}