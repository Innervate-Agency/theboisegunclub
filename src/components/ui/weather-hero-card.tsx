'use client'

import React from 'react'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { useUserWeather } from '@/hooks/useUserWeather'
import { 
  SunIcon as Sun, 
  CloudIcon as Cloud, 
  CloudRainIcon as CloudRain, 
  CloudSnowIcon as CloudSnow, 
  ZapIcon as Storm,
  MapPinIcon as MapPin,
  ThermometerIcon as Thermometer,
  WindIcon as Wind,
  FlameIcon as Flame,
  RefreshCwIcon as Refresh,
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  AlertTriangleIcon as Warning,
  XCircleIcon as XCircle
} from 'lucide-react'

const WeatherIcon = ({ type, className = "h-6 w-6" }: { type: string; className?: string }) => {
  switch (type) {
    case 'sun':
      return <Sun className={`${className} text-yellow-500`} />
    case 'partly-cloudy':
      return <Cloud className={`${className} text-blue-400`} />
    case 'cloudy':
      return <Cloud className={`${className} text-gray-500`} />
    case 'rain':
      return <CloudRain className={`${className} text-blue-600`} />
    case 'snow':
      return <CloudSnow className={`${className} text-blue-200`} />
    case 'storm':
      return <Storm className={`${className} text-purple-600`} />
    default:
      return <Sun className={`${className} text-yellow-500`} />
  }
}

interface WeatherHeroCardProps {
  title?: string
  className?: string
  showDetailedForecast?: boolean
  compact?: boolean
}

export function WeatherHeroCard({ 
  title = "Today's Shooting Conditions",
  className = "",
  showDetailedForecast = false,
  compact = false
}: WeatherHeroCardProps) {
  const { weatherData, location, isLoading, error, refreshWeather } = useUserWeather()

  // Don't render during initial loading
  if (isLoading && !weatherData) {
    return (
      <Card className={`mica-card border-nav-intel/30 ${className}`}>
        <CardContent className="p-lg">
          <div className="animate-pulse space-y-base">
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-8 bg-muted rounded w-2/3"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show error state with retry option
  if (error && !weatherData) {
    return (
      <Card className={`mica-card border-destructive/30 ${className}`}>
        <CardContent className="p-lg text-center">
          <Warning className="h-8 w-8 text-destructive mx-auto mb-sm" />
          <h3 className="font-rajdhani font-bold text-lg text-destructive mb-xs">Weather Unavailable</h3>
          <p className="text-sm text-muted-foreground mb-base">Unable to fetch weather conditions</p>
          <Button 
            size="sm" 
            variant="outline"
            onClick={refreshWeather}
            disabled={isLoading}
          >
            <Refresh className={`h-4 w-4 mr-xs ${isLoading ? 'animate-spin' : ''}`} />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!weatherData) return null

  const getFireDangerColor = (level: string) => {
    switch (level) {
      case 'Low': return 'fire-low'
      case 'Moderate': return 'fire-moderate'
      case 'High': return 'fire-high'
      case 'Extreme': return 'fire-extreme'
      default: return 'status-info'
    }
  }

  const getShootingConditionsColor = (conditions: string) => {
    if (conditions.includes('Excellent')) return 'status-success'
    if (conditions.includes('Good')) return 'weather-good'
    if (conditions.includes('Fair')) return 'weather-caution'
    return 'weather-poor'
  }

  const getAccessStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <CheckCircle className="h-4 w-4 text-sagebrush-green" />
      case 'Restrictions': return <Warning className="h-4 w-4 text-sandy-ochre" />
      case 'Closed': return <XCircle className="h-4 w-4 text-rusty-orange" />
      default: return <CheckCircle className="h-4 w-4 text-sagebrush-green" />
    }
  }

  const shootingConditions = (weatherData as any).shootingConditions

  return (
    <Card className={`mica-card border-nav-intel/30 hover:shadow-elevated transition-all duration-300 overflow-hidden ${className}`}>
      {/* Header gradient */}
      <div className="h-1 bg-gradient-to-r from-nav-intel via-nav-intel to-nav-intel/50"></div>
      
      <CardContent className={compact ? "p-base" : "p-lg"}>
        <div className="space-y-base">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <WeatherIcon type={weatherData.weatherIcon} className={compact ? "h-5 w-5" : "h-6 w-6"} />
              <div>
                <h3 className={`font-rajdhani font-bold text-foreground ${compact ? 'text-base' : 'text-lg'}`}>
                  {title}
                </h3>
                {location.city && (
                  <div className="flex items-center gap-xs text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{location.city}, {location.state || 'ID'}</span>
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshWeather}
              disabled={isLoading}
              className="h-8 w-8 p-0"
              title="Refresh weather"
            >
              <Refresh className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>

          {/* Current Conditions */}
          <div className="grid grid-cols-2 gap-base">
            <div className="space-y-xs">
              <div className="flex items-center gap-xs">
                <Thermometer className="h-4 w-4 text-nav-intel" />
                <span className={`font-rajdhani font-bold text-foreground ${compact ? 'text-xl' : 'text-2xl'}`}>
                  {weatherData.temperature}°F
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {weatherData.shortForecast}
              </p>
            </div>

            <div className="space-y-xs">
              <div className="flex items-center gap-xs">
                <Wind className="h-4 w-4 text-nav-intel" />
                <span className="text-sm font-medium">
                  {weatherData.windDirection} {weatherData.windSpeed} mph
                </span>
              </div>
              {weatherData.humidity && (
                <div className="text-sm text-muted-foreground">
                  Humidity: {weatherData.humidity}%
                </div>
              )}
            </div>
          </div>

          {/* Shooting Conditions */}
          {shootingConditions && (
            <div className="space-y-xs">
              <h4 className="text-sm font-medium text-foreground">Range Conditions</h4>
              <Badge 
                variant={getShootingConditionsColor(shootingConditions)} 
                size="sm"
                className="inline-flex"
              >
                {getAccessStatusIcon(weatherData.accessStatus)}
                <span className="ml-xs">{shootingConditions}</span>
              </Badge>
            </div>
          )}

          {/* Fire Danger */}
          <div className="flex items-center justify-between">
            <div className="space-y-xs">
              <div className="text-xs text-muted-foreground">Fire Danger</div>
              <Badge variant={getFireDangerColor(weatherData.fireDanger)} size="sm">
                <Flame className="h-3 w-3 mr-xs" />
                {weatherData.fireDanger}
              </Badge>
            </div>
            
            <Button
              size="sm"
              variant="outline"
              className="border-nav-intel/30 text-nav-intel hover:bg-nav-intel hover:text-white"
              onClick={() => window.location.href = '/intel'}
            >
              View Intel
              <ArrowRight className="h-3 w-3 ml-xs" />
            </Button>
          </div>

          {/* Detailed Forecast */}
          {showDetailedForecast && weatherData.detailedForecast && !compact && (
            <div className="space-y-xs pt-base border-t border-border">
              <h4 className="text-sm font-medium text-foreground">Today's Forecast</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {weatherData.detailedForecast}
              </p>
            </div>
          )}

          {/* Alerts */}
          {weatherData.alerts && weatherData.alerts.length > 0 && (
            <div className="bg-rusty-orange/10 border border-rusty-orange/30 rounded-xs p-sm">
              <div className="flex items-start gap-xs">
                <Warning className="h-4 w-4 text-rusty-orange mt-0.5 flex-shrink-0" />
                <div className="space-y-xs">
                  <h4 className="text-sm font-medium text-rusty-orange">Weather Alert</h4>
                  {weatherData.alerts.map((alert, index) => (
                    <p key={index} className="text-sm text-rusty-orange/80">
                      {alert}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}