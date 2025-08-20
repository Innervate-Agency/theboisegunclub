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

  // Fetch live events from API
  const fetchLiveEvents = async () => {
    if (!autoRefresh) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/tickers/events?limit=8')
      if (!response.ok) throw new Error('Failed to fetch events')
      
      const result = await response.json()
      if (result.success && result.data) {
        setLiveEvents(result.data)
      } else {
        throw new Error(result.error || 'Invalid response format')
      }
    } catch (err) {
      console.error('EventTicker API error:', err)
      setError(err instanceof Error ? err.message : 'Failed to load events')
      // Keep existing events on error
    } finally {
      setIsLoading(false)
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
  
  return (
    <div className="bg-gradient-to-r from-slate-blue/10 to-ayu-cobalt/10 border-b border-border/20 overflow-hidden">
      <div className="relative">
        {/* Status indicator for live data */}
        {autoRefresh && (
          <div className="absolute right-sm top-2 z-20 flex items-center gap-xs">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-sandy-ochre animate-pulse' : error ? 'bg-rusty-orange' : 'bg-sagebrush-green'}`} />
            <span className="text-xs text-muted-foreground font-medium">
              {isLoading ? 'Updating...' : error ? 'Error' : 'Live'}
            </span>
          </div>
        )}
        
        <div className="flex animate-scroll whitespace-nowrap py-base">
          {extendedEvents.length > 0 ? extendedEvents.map((event, index) => (
            <div key={index} className="flex items-center gap-base px-xl flex-shrink-0">
              <div className="flex items-center gap-xs">
                <div className="space-y-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                      {event.title}
                    </span>
                    <Badge variant="outline" className="text-body-xs">
                      {event.eventType}
                    </Badge>
                    {event.featured && (
                      <Badge variant="events-featured" size="sm" className="text-body-xs">
                        <Star className="size-3 mr-xs" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-base text-body-xs text-muted-foreground">
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
              
              {/* Separator */}
              <div className="h-8 w-px bg-border/30" />
            </div>
          )) : (
            <div className="flex items-center justify-center w-full py-lg">
              <span className="text-muted-foreground">No events available</span>
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
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}