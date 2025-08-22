'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from './badge'
import { AnnouncementIcon, BuildingStorefrontIcon, CheckCircleIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, SparklesIcon, TrophyIcon } from '@heroicons/react/24/outline';

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
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // Fetch live announcements from API with caching
  const fetchLiveAnnouncements = async () => {
    if (!autoRefresh) {
      setIsInitialLoad(false)
      return
    }
    
    // Check localStorage cache first
    const cacheKey = 'boisegunclub_directory_ticker'
    const cachedData = localStorage.getItem(cacheKey)
    
    if (cachedData) {
      try {
        const { data, timestamp } = JSON.parse(cachedData)
        const age = Date.now() - timestamp
        
        // Use cache if less than 5 minutes old
        if (age < 5 * 60 * 1000 && data?.length > 0) {
          setLiveAnnouncements(data)
          setIsInitialLoad(false)
          return // Skip API call
        }
      } catch (err) {
      }
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/tickers/directory?limit=6')
      if (!response.ok) throw new Error('Failed to fetch directory updates')
      
      const result = await response.json()
      if (result.success && result.data) {
        setLiveAnnouncements(result.data)
        
        // Cache the successful response
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            data: result.data,
            timestamp: Date.now()
          }))
        } catch (err) {
        }
      } else {
        throw new Error(result.error || 'Invalid response format')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load directory updates')
      // Keep existing announcements on error
    } finally {
      setIsLoading(false)
      setIsInitialLoad(false)
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
        return <ShieldCheckIcon className={`${iconClass} text-sagebrush-green`} />
      case 'new_listing':
        return <Sparkles className={`${iconClass} text-nav-directory`} />
      case 'service_highlight':
        return <TrophyIcon className={`${iconClass} text-rusty-orange`} />
      default:
        return <BuildingStorefrontIcon className={`${iconClass} text-nav-directory`} />
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

  // Skeleton loading component
  const SkeletonAnnouncement = ({ index }: { index: number }) => (
    <div key={`skeleton-${index}`} className="flex items-center gap-base px-xl flex-shrink-0">
      <div className="flex items-center gap-base">
        <div className="space-y-xs">
          <div className="flex items-center gap-xs">
            <div className="size-4 bg-muted/50 rounded-xs animate-pulse" />
            <div className="h-4 w-32 bg-muted/50 rounded-xs animate-pulse" />
            <div className="h-5 w-16 bg-muted/30 rounded-sm animate-pulse" />
          </div>
          <div className="flex items-center gap-base text-body-xs">
            <div className="h-3 w-24 bg-muted/30 rounded-xs animate-pulse" />
            <div className="h-3 w-20 bg-muted/30 rounded-xs animate-pulse" />
            <div className="h-3 w-12 bg-muted/30 rounded-xs animate-pulse" />
          </div>
        </div>
      </div>
      <div className="h-8 w-px bg-border/30" />
    </div>
  )

  return (
    <div className="relative -mt-lg z-20">
      {autoRefresh && (
        <div className="absolute -top-base right-base sm:right-md md:right-lg lg:right-xl xl:right-2xl z-30">
          <div className={`inline-flex items-center gap-xs px-sm py-xs rounded-sm text-xs font-medium shadow-present border ${
            isLoading 
              ? 'bg-sandy-ochre/95 text-white border-sandy-ochre/40' 
              : error 
                ? 'bg-rusty-orange/95 text-white border-rusty-orange/40' 
                : 'bg-sagebrush-green/95 text-white border-sagebrush-green/40'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-white animate-pulse' : 'bg-white'}`} />
            <span>{isLoading ? 'Updating...' : error ? 'Error' : 'Live'}</span>
          </div>
        </div>
      )}
      
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="mica-card relative overflow-hidden shadow-present rounded-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-nav-directory/5 via-transparent to-nav-directory/10 pointer-events-none" />
          
          <div className="absolute left-base top-base bottom-base bg-gradient-to-r from-nav-directory/20 to-transparent z-10 flex items-center px-lg rounded-l-xs">
            <div className="flex items-center gap-xs text-body-sm font-rajdhani font-bold text-nav-directory">
              <BuildingStorefrontIcon className="size-4" />
              <span>DIRECTORY UPDATES</span>
            </div>
          </div>
          
          <div className="flex animate-scroll whitespace-nowrap py-base px-base pl-56">
            {isInitialLoad && announcements.length === 0 ? (
              <>
                {Array.from({ length: 3 }, (_, index) => (
                  <SkeletonAnnouncement key={index} index={index} />
                ))}
              </>
            ) : extendedAnnouncements.length > 0 ? extendedAnnouncements.map((announcement, index) => (
              <div key={index} className="flex items-center gap-lg px-xl flex-shrink-0">
                <div className="flex items-center gap-base">
                  <div className="space-y-xs">
                    <div className="flex items-center gap-xs">
                      {getAnnouncementIcon(announcement.type)}
                      <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                        {announcement.title}
                      </span>
                      <Badge 
                        variant={getAnnouncementBadgeVariant(announcement.type)} 
                        size="sm"
                        className="text-body-xs rounded-xs"
                      >
                        {announcement.type === 'verification' ? 'Verified' :
                         announcement.type === 'new_listing' ? 'New' : 'Featured'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-lg text-body-xs text-muted-foreground">
                      <div className="flex items-center gap-xs">
                        <span className="font-medium">{announcement.description}</span>
                      </div>
                      
                      <div className="flex items-center gap-xs">
                        <MapPinIcon className="size-3 text-nav-directory" />
                        <span>{announcement.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-xs">
                        <ClockIcon className="size-3 text-nav-directory" />
                        <span className="font-medium">{formatTimeAgo(announcement.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent" />
              </div>
            )) : (
              <div className="flex items-center justify-center w-full py-base pl-56">
                <span className="text-muted-foreground">No directory updates available</span>
              </div>
            )}
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
      </div>
    </div>
  )
}