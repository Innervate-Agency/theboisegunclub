'use client'

import React from 'react'
import { Badge } from './badge'
import { 
  Thermometer, Wind, Flame, Shield, AlertTriangle, 
  CheckCircle, XCircle, Mountain, Navigation
} from 'lucide-react'

interface WeatherCondition {
  locationName: string
  temperature: number
  windSpeed: number
  windDirection: string
  fireDanger: 'Low' | 'Moderate' | 'High' | 'Extreme'
  accessStatus: 'Open' | 'Restrictions' | 'Closed'
  weatherIcon: '☀️' | '⛅' | '☁️' | '🌧️' | '🌨️' | '🌪️'
  alerts?: string[]
  lastUpdated?: string
}

interface WeatherConditionsTickerProps {
  conditions: WeatherCondition[]
}

export function WeatherConditionsTicker({ conditions }: WeatherConditionsTickerProps) {
  // Create extended array for continuous scroll
  const extendedConditions = [...conditions, ...conditions, ...conditions]
  
  const getFireDangerColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30'
      case 'Moderate': return 'bg-sandy-ochre/20 text-sandy-ochre border-sandy-ochre/30'
      case 'High': return 'bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30'
      case 'Extreme': return 'bg-safety-red/20 text-safety-red border-safety-red/30'
      default: return 'bg-muted/20 text-muted-foreground border-muted/30'
    }
  }

  const getAccessStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <CheckCircle className="size-3 text-sagebrush-green" />
      case 'Restrictions': return <AlertTriangle className="size-3 text-sandy-ochre" />
      case 'Closed': return <XCircle className="size-3 text-safety-red" />
      default: return <Shield className="size-3 text-muted-foreground" />
    }
  }

  const getWindDirectionArrow = (direction: string) => {
    const directions: { [key: string]: string } = {
      'N': '↓', 'NE': '↙️', 'E': '←', 'SE': '↖️',
      'S': '↑', 'SW': '↗️', 'W': '→', 'NW': '↘️'
    }
    return directions[direction] || '•'
  }

  return (
    <div className="bg-gradient-to-r from-nav-intel/5 to-nav-intel/10 border-b border-border/20 overflow-hidden">
      <div className="relative">
        {/* Header Label */}
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-nav-intel/20 to-transparent z-10 flex items-center px-lg">
          <div className="flex items-center gap-xs text-body-sm font-rajdhani font-bold text-nav-intel">
            <Mountain className="size-4" />
            <span>LIVE CONDITIONS</span>
          </div>
        </div>

        <div className="flex animate-scroll whitespace-nowrap py-base pl-48">
          {extendedConditions.map((condition, index) => (
            <div key={index} className="flex items-center gap-base px-xl flex-shrink-0">
              <div className="flex items-center gap-base">
                {/* Location & Weather */}
                <div className="space-y-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                      {condition.locationName}
                    </span>
                    <span className="text-heading-lg">{condition.weatherIcon}</span>
                  </div>
                  
                  <div className="flex items-center gap-base text-body-xs text-muted-foreground">
                    {/* Temperature */}
                    <div className="flex items-center gap-xs">
                      <Thermometer className="size-3 text-nav-intel" />
                      <span className="font-medium">{condition.temperature}°F</span>
                    </div>
                    
                    {/* Wind */}
                    <div className="flex items-center gap-xs">
                      <Wind className="size-3 text-nav-intel" />
                      <span className="font-medium">
                        {condition.windSpeed}mph {getWindDirectionArrow(condition.windDirection)}
                      </span>
                    </div>
                    
                    {/* Fire Danger */}
                    <div className="flex items-center gap-xs">
                      <Flame className="size-3 text-nav-intel" />
                      <Badge className={getFireDangerColor(condition.fireDanger)}>
                        {condition.fireDanger}
                      </Badge>
                    </div>
                    
                    {/* Access Status */}
                    <div className="flex items-center gap-xs">
                      {getAccessStatusIcon(condition.accessStatus)}
                      <span className="font-medium">{condition.accessStatus}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              <div className="h-8 w-px bg-border/30" />
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
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}