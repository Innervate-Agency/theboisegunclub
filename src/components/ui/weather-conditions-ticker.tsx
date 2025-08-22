'use client'


import { AccessStatusIcon, ArrowUpIcon, BoltIcon, CheckCircleIcon, CloudArrowDownIcon, CloudIcon, ExclamationTriangleIcon, FireIcon, MapIcon, ShieldCheckIcon, SunIcon, WeatherIcon, XCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react'
import { Badge } from './badge'



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
  conditions?: WeatherCondition[]
  autoRefresh?: boolean
  refreshInterval?: number
}

export function WeatherConditionsTicker({ 
  conditions: staticConditions, 
  autoRefresh = true,
  refreshInterval = 900000 // 15 minutes default
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
      setError(err instanceof Error ? err.message : 'Failed to load weather data')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (autoRefresh) {
      fetchLiveWeather()
      const interval = setInterval(fetchLiveWeather, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  const conditions = liveConditions.length > 0 ? liveConditions : (staticConditions || [])
  const extendedConditions = [...conditions, ...conditions, ...conditions]
  
  const getFireDangerColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-sagebrush-green'
      case 'Moderate': return 'text-sandy-ochre'
      case 'High': return 'text-rusty-orange'
      case 'Extreme': return 'text-safety-red'
      default: return 'text-muted-foreground'
    }
  }

  const getAccessStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <CheckCircleIcon className="size-3 text-sagebrush-green" />
      case 'Restrictions': return <ExclamationTriangleIcon className="size-3 text-sandy-ochre" />
      case 'Closed': return <XCircleIcon className="size-3 text-safety-red" />
      default: return <ShieldCheckIcon className="size-3 text-muted-foreground" />
    }
  }

  const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
      case 'sun': 
        return <SunIcon className="h-4 w-4 text-sandy-ochre" />
      case 'partly-cloudy':
        return <Cloud className="h-4 w-4 text-slate-blue/80" />
      case 'cloudy':
        return <Cloud className="h-4 w-4 text-slate-blue" />
      case 'rain':
        return <CloudRain className="h-4 w-4 text-nav-intel" />
      case 'snow':
        return <Cloud className="h-4 w-4 text-white/90" />
      case 'storm':
        return <Lightning className="h-4 w-4 text-rusty-orange" />
      default:
        return <SunIcon className="h-4 w-4 text-sandy-ochre" />
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
      {autoRefresh && (
        <div className="absolute -top-base right-base sm:right-md md:right-lg lg:right-xl xl:right-2xl z-30">
          <div className={`inline-flex items-center gap-xs px-sm py-xs rounded-sm text-xs font-medium shadow-present border ${
            isLoading 
              ? 'bg-sandy-ochre text-white border-sandy-ochre/40' 
              : error 
                ? 'bg-rusty-orange text-white border-rusty-orange/40' 
                : 'bg-sagebrush-green text-white border-sagebrush-green/40'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-white animate-pulse' : 'bg-white'}`} />
            <span>{isLoading ? 'Updating...' : error ? 'Error' : 'Live Weather'}</span>
          </div>
        </div>
      )}
      
      <div className="w-full px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl container-mobile">
        <div className="mica-card relative overflow-hidden shadow-present rounded-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-nav-intel/5 via-transparent to-nav-intel/5 pointer-events-none" />
          
          <div className="flex animate-scroll whitespace-nowrap py-base px-base">
            {extendedConditions.length > 0 ? extendedConditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-lg px-xl flex-shrink-0">
                <div className="flex items-center gap-xs">
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
                          <ArrowUpIcon className="size-3 text-nav-intel" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-xs">
                        <FireIcon className="size-3" />
                        <span className={`font-medium ${getFireDangerColor(condition.fireDanger)}`}>
                          Fire: {condition.fireDanger}
                        </span>
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
              <div className="flex items-center justify-center w-full py-base">
                <span className="text-muted-foreground">Weather conditions unavailable</span>
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