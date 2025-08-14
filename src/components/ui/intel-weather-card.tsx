'use client'

import { Card, CardContent } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { 
  CloudSun,
  Thermometer,
  Wind,
  Eye,
  Gauge,
  MapPin,
  Clock
} from '@phosphor-icons/react'
import { FiTrendingUp as TrendingUp, FiAlertTriangle as AlertTriangle } from 'react-icons/fi'

interface WeatherCondition {
  location: string
  locationShort: string
  temperature: number
  conditions: string
  windSpeed: number
  windDirection: string
  visibility: number
  humidity: number
  lastUpdated: string
  alerts?: string[]
  shootingConditions: 'Excellent' | 'Good' | 'Fair' | 'Poor'
}

interface IntelWeatherCardProps {
  weather?: WeatherCondition
  showAlerts?: boolean
  className?: string
}

const defaultWeather: WeatherCondition = {
  location: "Black's Creek Range",
  locationShort: "Black's Creek",
  temperature: 72,
  conditions: "Partly Cloudy",
  windSpeed: 8,
  windDirection: "SW",
  visibility: 10,
  humidity: 45,
  lastUpdated: "2 minutes ago",
  alerts: ["Light winds - excellent for precision shooting"],
  shootingConditions: "Excellent"
}

export function IntelWeatherCard({
  weather = defaultWeather,
  showAlerts = true,
  className
}: IntelWeatherCardProps) {
  const getConditionsBadgeVariant = (conditions: string) => {
    switch (conditions) {
      case 'Excellent': return 'sagebrush-green'
      case 'Good': return 'slate-blue'
      case 'Fair': return 'rusty-orange'
      case 'Poor': return 'canyon-clay'
      default: return 'default'
    }
  }

  const getConditionsIcon = (conditions: string) => {
    switch (conditions) {
      case 'Excellent': return <TrendingUp className="h-3 w-3" weight="bold" />
      case 'Good': return <TrendingUp className="h-3 w-3" weight="bold" />
      case 'Fair': return <Gauge className="h-3 w-3" weight="bold" />
      case 'Poor': return <AlertTriangle className="h-3 w-3" weight="bold" />
      default: return <Gauge className="h-3 w-3" weight="bold" />
    }
  }

  return (
    <Card className={`shadow-whisper hover:shadow-present transition-all duration-300 ${className}`}>
      <CardContent className="p-lg space-y-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-xs">
            <div className="flex items-center gap-sm">
              <MapPin className="h-4 w-4 text-canyon-clay" weight="bold" />
              <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground">
                {weather.locationShort}
              </h3>
            </div>
            <p className="text-body-xs text-muted-foreground">{weather.location}</p>
          </div>
          
          <Badge 
            variant={getConditionsBadgeVariant(weather.shootingConditions)} 
            size="sm"
            className="font-rajdhani font-bold"
          >
            {getConditionsIcon(weather.shootingConditions)}
            {weather.shootingConditions}
          </Badge>
        </div>

        {/* Main Weather Display */}
        <div className="grid grid-cols-3 gap-base">
          {/* Temperature */}
          <div className="text-center space-y-xs">
            <CloudSun className="h-6 w-6 text-rusty-orange mx-auto" weight="bold" />
            <p className="font-rajdhani font-bold text-heading-xl text-card-foreground">
              {weather.temperature}°
            </p>
            <p className="text-body-xs text-muted-foreground">{weather.conditions}</p>
          </div>

          {/* Wind */}
          <div className="text-center space-y-xs">
            <Wind className="h-6 w-6 text-slate-blue mx-auto" weight="bold" />
            <p className="font-rajdhani font-bold text-body-lg text-card-foreground">
              {weather.windSpeed} mph
            </p>
            <p className="text-body-xs text-muted-foreground">{weather.windDirection}</p>
          </div>

          {/* Visibility */}
          <div className="text-center space-y-xs">
            <Eye className="h-6 w-6 text-sagebrush-green mx-auto" weight="bold" />
            <p className="font-rajdhani font-bold text-body-lg text-card-foreground">
              {weather.visibility} mi
            </p>
            <p className="text-body-xs text-muted-foreground">Visibility</p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-base text-body-sm">
          <div className="flex items-center gap-sm">
            <Gauge className="h-4 w-4 text-muted-foreground" weight="bold" />
            <span className="text-muted-foreground">Humidity:</span>
            <span className="font-medium text-card-foreground">{weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-sm">
            <Clock className="h-4 w-4 text-muted-foreground" weight="bold" />
            <span className="text-body-xs text-muted-foreground">Updated {weather.lastUpdated}</span>
          </div>
        </div>

        {/* Alerts */}
        {showAlerts && weather.alerts && weather.alerts.length > 0 && (
          <div className="space-y-xs">
            {weather.alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-sm p-sm bg-sagebrush-green/10 rounded-xs">
                <TrendingUp className="h-4 w-4 text-sagebrush-green mt-0.5 flex-shrink-0" weight="bold" />
                <p className="text-body-sm text-sagebrush-green">{alert}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action */}
        <div className="pt-sm border-t border-border">
          <Button 
            variant="ghost" 
            size="sm"
            animationType="arrow"
            className="w-full font-rajdhani font-medium"
          >
            View Full Weather Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}