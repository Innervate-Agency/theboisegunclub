'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from './badge'
import { Calendar, MapPin, Clock, Star, Trophy, Target } from 'lucide-react'

interface TickerEvent {
  title: string
  date: string
  location: string
  eventType: string
  price: string
  featured?: boolean
  slug?: string
}

interface EventTickerProps {
  events?: TickerEvent[]  // Made optional for backward compatibility
  autoRefresh?: boolean   // Auto-refresh from API
  refreshInterval?: number // Refresh interval in milliseconds
}

export function EventTicker({ 
  events: staticEvents, 
  autoRefresh = true,
  refreshInterval = 300000 // 5 minutes default
}: EventTickerProps) {
  const [liveEvents, setLiveEvents] = useState<TickerEvent[]>(staticEvents || [])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // Fetch live events from API with caching
  const fetchLiveEvents = async () => {
    if (!autoRefresh) {
      setIsInitialLoad(false)
      return
    }
    
    // Check localStorage cache first
    const cacheKey = 'boisegunclub_events_ticker'
    const cachedData = localStorage.getItem(cacheKey)
    
    if (cachedData) {
      try {
        const { data, timestamp } = JSON.parse(cachedData)
        const age = Date.now() - timestamp
        
        // Use cache if less than 3 minutes old (events change more frequently)
        if (age < 3 * 60 * 1000 && data?.length > 0) {
          setLiveEvents(data)
          setIsInitialLoad(false)
          return // Skip API call
        }
      } catch (err) {
        console.warn('Failed to parse cached events data:', err)
      }
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/tickers/events?limit=8')
      if (!response.ok) throw new Error('Failed to fetch events')
      
      const result = await response.json()
      if (result.success && result.data) {
        setLiveEvents(result.data)
        
        // Cache the successful response
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            data: result.data,
            timestamp: Date.now()
          }))
        } catch (err) {
          console.warn('Failed to cache events data:', err)
        }
      } else {
        throw new Error(result.error || 'Invalid response format')
      }
    } catch (err) {
      console.error('EventTicker API error:', err)
      setError(err instanceof Error ? err.message : 'Failed to load events')
      // Keep existing events on error
    } finally {
      setIsLoading(false)
      setIsInitialLoad(false)
    }
  }

  // Initial fetch and auto-refresh setup
  useEffect(() => {
    if (autoRefresh) {
      fetchLiveEvents()
      const interval = setInterval(fetchLiveEvents, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  // Use live events if available, fallback to static events
  const events = liveEvents.length > 0 ? liveEvents : (staticEvents || [])
  
  // Create a longer array by repeating events for continuous scroll
  const extendedEvents = [...events, ...events, ...events]
  
  // Skeleton loading component for events
  const SkeletonEvent = ({ index }: { index: number }) => (
    <div key={`skeleton-${index}`} className="flex items-center gap-base px-xl flex-shrink-0">
      <div className="flex items-center gap-xs">
        <div className="space-y-xs">
          <div className="flex items-center gap-xs">
            <div className="h-4 w-36 bg-muted/50 rounded-xs animate-pulse" />
            <div className="h-5 w-20 bg-muted/30 rounded-sm animate-pulse" />
            <div className="h-5 w-16 bg-muted/30 rounded-sm animate-pulse" />
          </div>
          <div className="flex items-center gap-base text-body-xs">
            <div className="h-3 w-16 bg-muted/30 rounded-xs animate-pulse" />
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
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="mica-card relative overflow-hidden shadow-present rounded-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-blue/5 via-transparent to-ayu-cobalt/5 pointer-events-none" />
          
          {autoRefresh && (
            <div className="absolute right-base top-base z-20 flex items-center gap-xs">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-sandy-ochre animate-pulse' : error ? 'bg-rusty-orange' : 'bg-sagebrush-green'}`} />
              <span className="text-xs text-muted-foreground font-medium">
                {isLoading ? 'Updating...' : error ? 'Error' : 'Live'}
              </span>
            </div>
          )}
          
          <div className="flex animate-scroll whitespace-nowrap py-lg px-base">
            {isInitialLoad && events.length === 0 ? (
              <>
                {Array.from({ length: 3 }, (_, index) => (
                  <SkeletonEvent key={index} index={index} />
                ))}
              </>
            ) : extendedEvents.length > 0 ? extendedEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-lg px-xl flex-shrink-0">
                <div className="flex items-center gap-xs">
                  <div className="space-y-xs">
                    <div className="flex items-center gap-xs">
                      <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                        {event.title}
                      </span>
                      <Badge variant="outline" className="text-body-xs rounded-xs">
                        {event.eventType}
                      </Badge>
                      {event.featured && (
                        <Badge variant="events-featured" size="sm" className="text-body-xs rounded-xs">
                          <Star className="size-3 mr-xs" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-lg text-body-xs text-muted-foreground">
                      <div className="flex items-center gap-xs">
                        <Calendar className="size-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <MapPin className="size-3" />
                        <span>{event.location.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <span className="font-medium text-rusty-orange">{event.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent" />
              </div>
            )) : (
              <div className="flex items-center justify-center w-full py-lg">
                <span className="text-muted-foreground">No events available</span>
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
              animation: scroll 60s linear infinite;
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