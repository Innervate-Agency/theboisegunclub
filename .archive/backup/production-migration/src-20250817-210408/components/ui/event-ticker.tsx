'use client'

import React from 'react'
import { Badge } from './badge'
import { Calendar, MapPin, Clock, Star, Trophy, Target } from 'lucide-react'

interface TickerEvent {
  title: string
  date: string
  location: string
  eventType: string
  price: string
  featured?: boolean
}

interface EventTickerProps {
  events: TickerEvent[]
}

export function EventTicker({ events }: EventTickerProps) {
  // Create a longer array by repeating events for continuous scroll
  const extendedEvents = [...events, ...events, ...events]
  
  return (
    <div className="bg-gradient-to-r from-slate-blue/10 to-ayu-cobalt/10 border-b border-border/20 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap py-base">
          {extendedEvents.map((event, index) => (
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
            </div>
          ))}
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
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}