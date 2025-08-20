'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from './badge'
import { 
  SunIcon as Sun, 
  CloudIcon as Cloud, 
  CloudArrowDownIcon as CloudRain, 
  CloudIcon as CloudSnow, 
  BoltIcon as Lightning,
  FireIcon as Flame,
  ShieldCheckIcon as Shield,
  ExclamationTriangleIcon as AlertTriangle,
  CheckCircleIcon as CheckCircle,
  XCircleIcon as XCircle,
  MapIcon as Mountain,
  ArrowUpIcon as Navigation,
  FireIcon as Thermometer,
  ArrowRightIcon as Wind
} from '@heroicons/react/24/outline'

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
  conditions?: WeatherCondition[]  // Made optional for backward compatibility
  autoRefresh?: boolean   // Auto-refresh from API
  refreshInterval?: number // Refresh interval in milliseconds
}

export function WeatherConditionsTicker({ 
  conditions: staticConditions, 
  autoRefresh = true,
  refreshInterval = 900000 // 15 minutes default (weather updates less frequently)
}: WeatherConditionsTickerProps) {
  const [liveConditions, setLiveConditions] = useState<WeatherCondition[]>(staticConditions || [])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch live weather conditions from API
  const fetchLiveWeather = async () => {
    if (!autoRefresh) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/tickers/weather?limit=6')
      if (!response.ok) throw new Error('Failed to fetch weather conditions')
      
      const result = await response.json()
      if (result.success && result.data) {
        setLiveConditions(result.data)
      } else {
        throw new Error(result.error || 'Invalid response format')
      }
    } catch (err) {
      console.error('WeatherConditionsTicker API error:', err)
      setError(err instanceof Error ? err.message : 'Failed to load weather data')
      // Keep existing conditions on error
    } finally {
      setIsLoading(false)
    }
  }

  // Initial fetch and auto-refresh setup
  useEffect(() => {
    if (autoRefresh) {
      fetchLiveWeather()
      const interval = setInterval(fetchLiveWeather, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  // Use live conditions if available, fallback to static conditions
  const conditions = liveConditions.length > 0 ? liveConditions : (staticConditions || [])
  
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
        return <Sun className="size-5 text-sandy-ochre" />
      case 'partly-cloudy':
        return <Cloud className="size-5 text-slate-blue/80" />
      case 'cloudy':
        return <Cloud className="size-5 text-slate-blue" />
      case 'rain':
        return <CloudRain className="size-5 text-nav-intel" />
      case 'snow':
        return <CloudSnow className="size-5 text-white/90" />
      case 'storm':
        return <Lightning className="size-5 text-rusty-orange" />
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
    <div className="relative -mt-lg z-20">
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="mica-card relative overflow-hidden shadow-present rounded-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-nav-intel/5 via-transparent to-nav-intel/10 pointer-events-none" />
          
          <div className="absolute left-base top-base bottom-base bg-gradient-to-r from-nav-intel/20 to-transparent z-10 flex items-center px-lg rounded-l-xs">
            <div className="flex items-center gap-sm text-body-sm font-rajdhani font-bold text-nav-intel">
              <Mountain className="size-4" />
              <span>LIVE CONDITIONS</span>
              
              {autoRefresh && (
                <div className="flex items-center gap-xs ml-base pl-base border-l border-nav-intel/30">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    isLoading ? 'bg-sandy-ochre animate-pulse' : 
                    error ? 'bg-rusty-orange' : 
                    'bg-sagebrush-green animate-pulse'
                  }`} />
                  <span className={`text-sm font-semibold tracking-wide ${
                    isLoading ? 'text-sandy-ochre' : 
                    error ? 'text-rusty-orange' : 
                    'text-sagebrush-green'
                  }`}>
                    {isLoading ? 'UPDATING' : error ? 'ERROR' : 'LIVE'}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex animate-scroll whitespace-nowrap py-lg px-base pl-64">
            {extendedConditions.length > 0 ? extendedConditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-lg px-xl flex-shrink-0">
                <div className="flex items-center gap-base">
                  <div className="space-y-xs">
                    <div className="flex items-center gap-xs">
                      <span className="font-rajdhani font-bold text-body-sm text-card-foreground">
                        {condition.locationName}
                      </span>
                      {getWeatherIcon(condition.weatherIcon)}
                    </div>
                    
                    <div className="flex items-center gap-lg text-body-xs text-muted-foreground">
                      <div className="flex items-center gap-xs">
                        <Thermometer className="size-3 text-nav-intel" />
                        <span className="font-medium">{condition.temperature}°F</span>
                      </div>
                      
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
                      
                      <div className="flex items-center gap-xs">
                        <Flame className="size-3 text-nav-intel" />
                        <Badge className={`${getFireDangerColor(condition.fireDanger)} rounded-xs`}>
                          {condition.fireDanger}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-xs">
                        {getAccessStatusIcon(condition.accessStatus)}
                        <span className="font-medium">{condition.accessStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent" />
              </div>
            )) : (
              <div className="flex items-center justify-center w-full py-lg pl-64">
                <div className="text-center">
                  <AlertTriangle className="h-6 w-6 text-muted-foreground mx-auto mb-sm" />
                  <span className="text-muted-foreground">Weather conditions unavailable</span>
                  {error && (
                    <div className="text-xs text-destructive mt-xs">{error}</div>
                  )}
                </div>
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
              animation: scroll 45s linear infinite;
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