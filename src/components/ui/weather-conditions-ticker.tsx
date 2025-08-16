'use client'

import React from 'react'
import { Badge } from './badge'
import { 
  Thermometer, Wind, Flame, Shield, AlertTriangle, 
  CheckCircle, XCircle, Mountain, Navigation,
  Sun, Cloud, CloudRain, CloudSnow, Zap
} from 'lucide-react'
import { 
  Sun as PhosphorSun, CloudRain as PhosphorCloudRain, 
  CloudSnow as PhosphorCloudSnow, Lightning as PhosphorLightning,
  Cloud as PhosphorCloud
} from '@phosphor-icons/react'

interface WeatherCondition {
  locationName: string
  temperature: number
  windSpeed: number
  windDirection: string
  fireDanger: 'Low' | 'Moderate' | 'High' | 'Extreme'
  accessStatus: 'Open' | 'Restrictions' | 'Closed'
  weatherIcon: 'sun' | 'partly-cloudy' | 'cloudy' | 'rain' | 'snow' | 'storm'
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

  const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
      case 'sun': 
        return <PhosphorSun weight="fill" className="size-5 text-sandy-ochre" />
      case 'partly-cloudy':
        return <Cloud className="size-5 text-slate-blue/80" />
      case 'cloudy':
        return <PhosphorCloud weight="fill" className="size-5 text-slate-blue" />
      case 'rain':
        return <PhosphorCloudRain weight="fill" className="size-5 text-nav-intel" />
      case 'snow':
        return <PhosphorCloudSnow weight="fill" className="size-5 text-white/90" />
      case 'storm':
        return <PhosphorLightning weight="fill" className="size-5 text-rusty-orange" />
      default:
        return <Sun className="size-5 text-sandy-ochre" />
    }
  }

  const getWindDirectionRotation = (direction: string) => {
    const rotations: { [key: string]: number } = {
      'N': 0, 'NE': 45, 'E': 90, 'SE': 135,
      'S': 180, 'SW': 225, 'W': 270, 'NW': 315
    }
    return rotations[direction] || 0
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
                    {getWeatherIcon(condition.weatherIcon)}
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
                        {condition.windSpeed}mph
                      </span>
                      <div 
                        className="transition-transform duration-300"
                        style={{ transform: `rotate(${getWindDirectionRotation(condition.windDirection)}deg)` }}
                      >
                        <Navigation className="size-3 text-nav-intel" />
                      </div>
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