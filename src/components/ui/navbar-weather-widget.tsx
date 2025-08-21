'use client'

import React, { useState } from 'react'
import { Badge } from './badge'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
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
  AlertTriangleIcon as Warning,
  CheckCircleIcon as CheckCircle,
  XCircleIcon as XCircle
} from 'lucide-react'

const WeatherIcon = ({ type, className = "h-4 w-4" }: { type: string; className?: string }) => {
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

export function NavbarWeatherWidget() {
  const { weatherData, location, isLoading, error, refreshWeather } = useUserWeather({
    autoRefresh: true,
    refreshInterval: 600000 // 10 minutes
  })
  const [isOpen, setIsOpen] = useState(false)

  // Don't render anything during initial loading
  if (!weatherData && isLoading) {
    return null
  }

  // Show error state if we have an error or no data
  if (error || !weatherData) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="gap-xs text-muted-foreground hover:text-foreground"
        onClick={refreshWeather}
        disabled={isLoading}
        title="Weather unavailable - Click to retry"
      >
        <Warning className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        <span className="hidden md:inline text-xs">Weather Error</span>
      </Button>
    )
  }

  const getFireDangerColor = (level: string) => {
    switch (level) {
      case 'Low': return 'fire-low'
      case 'Moderate': return 'fire-moderate'
      case 'High': return 'fire-high'
      case 'Extreme': return 'fire-extreme'
      default: return 'status-info'
    }
  }

  const getAccessStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <CheckCircle className="h-3 w-3 text-sagebrush-green" />
      case 'Restrictions': return <Warning className="h-3 w-3 text-sandy-ochre" />
      case 'Closed': return <XCircle className="h-3 w-3 text-rusty-orange" />
      default: return <CheckCircle className="h-3 w-3 text-sagebrush-green" />
    }
  }

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-xs text-foreground hover:bg-accent hover:text-accent-foreground relative"
          title={`${weatherData.locationName}: ${weatherData.temperature}°F, ${weatherData.shortForecast}`}
        >
          <div className="flex items-center gap-xs">
            <WeatherIcon type={weatherData.weatherIcon} />
            <span className="font-rajdhani font-bold">
              {weatherData.temperature}°F
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0" align="end">
        <div className="bg-gradient-to-br from-nav-intel/5 to-nav-intel/10 border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-lg bg-gradient-to-r from-nav-intel/10 to-nav-intel/5 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-sm">
                <WeatherIcon type={weatherData.weatherIcon} className="h-6 w-6" />
                <div>
                  <h3 className="font-rajdhani font-bold text-lg text-foreground">
                    {weatherData.temperature}°F
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {weatherData.shortForecast}
                  </p>
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
          </div>

          {/* Location */}
          <div className="p-base border-b border-border">
            <div className="flex items-center gap-xs text-sm">
              <MapPin className="h-3 w-3 text-nav-intel" />
              <span className="font-medium">{weatherData.locationName}</span>
              {location.permission === 'granted' && (
                <Badge variant="status-success" size="sm" className="ml-auto">
                  <CheckCircle className="h-3 w-3 mr-xs" />
                  Live Location
                </Badge>
              )}
            </div>
          </div>

          {/* Current Conditions */}
          <div className="p-lg space-y-base">
            <div className="grid grid-cols-2 gap-base">
              {/* Wind */}
              <div className="flex items-center gap-xs">
                <Wind className="h-4 w-4 text-nav-intel" />
                <div>
                  <div className="text-sm font-medium">{weatherData.windSpeed} mph</div>
                  <div className="text-xs text-muted-foreground">{weatherData.windDirection}</div>
                </div>
              </div>

              {/* Humidity */}
              {weatherData.humidity && (
                <div className="flex items-center gap-xs">
                  <Thermometer className="h-4 w-4 text-nav-intel" />
                  <div>
                    <div className="text-sm font-medium">{weatherData.humidity}%</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                </div>
              )}
            </div>

            {/* Shooting Conditions */}
            {(weatherData as any).shootingConditions && (
              <div className="space-y-xs">
                <h4 className="text-sm font-medium text-foreground">Shooting Conditions</h4>
                <div className="text-sm text-muted-foreground">
                  {(weatherData as any).shootingConditions}
                </div>
              </div>
            )}

            {/* Fire Danger & Access Status */}
            <div className="grid grid-cols-2 gap-base">
              <div className="space-y-xs">
                <div className="text-xs text-muted-foreground">Fire Danger</div>
                <Badge variant={getFireDangerColor(weatherData.fireDanger)} size="sm">
                  <Flame className="h-3 w-3 mr-xs" />
                  {weatherData.fireDanger}
                </Badge>
              </div>
              
              <div className="space-y-xs">
                <div className="text-xs text-muted-foreground">Range Access</div>
                <div className="flex items-center gap-xs">
                  {getAccessStatusIcon(weatherData.accessStatus)}
                  <span className="text-sm font-medium">{weatherData.accessStatus}</span>
                </div>
              </div>
            </div>

            {/* Detailed Forecast */}
            {weatherData.detailedForecast && (
              <div className="space-y-xs">
                <h4 className="text-sm font-medium text-foreground">Today's Forecast</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {weatherData.detailedForecast}
                </p>
              </div>
            )}

            {/* Alerts */}
            {weatherData.alerts && weatherData.alerts.length > 0 && (
              <div className="space-y-xs">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-xs">
                  <Warning className="h-4 w-4 text-rusty-orange" />
                  Weather Alerts
                </h4>
                {weatherData.alerts.map((alert, index) => (
                  <div key={index} className="text-sm text-rusty-orange bg-rusty-orange/10 p-sm rounded-xs">
                    {alert}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-base bg-muted/30 border-t border-border">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>OpenWeatherMap</span>
              <span>Updated {formatTime(weatherData.lastUpdated)}</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}