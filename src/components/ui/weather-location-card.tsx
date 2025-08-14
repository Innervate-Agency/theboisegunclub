import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MapPin, Navigation, Wind, Thermometer, Droplets,
  AlertTriangle, CheckCircle, XCircle, Star,
  ArrowRight, Mountain, Target, Shield
} from 'lucide-react'

interface WeatherData {
  locationName: string
  temperature: number
  windSpeed: number
  windDirection: string
  fireDanger: 'Low' | 'Moderate' | 'High' | 'Extreme'
  accessStatus: 'Open' | 'Restrictions' | 'Closed'
  weatherIcon: '☀️' | '⛅' | '☁️' | '🌧️' | '🌨️' | '🌪️'
  alerts?: string[]
  lastUpdated: string
}

interface LocationData {
  name: string
  type: string
  description: string
  address: string
  distanceFromBoise: number
  rating: number
  reviews: number
  difficulty: string
  category: string
  verified: boolean
  elevation: number
  bestWindConditions: string
  weatherPriority: 'high' | 'medium' | 'low'
  amenities: string[]
}

interface WeatherLocationCardProps {
  location: LocationData
  weatherData?: WeatherData
  className?: string
}

// Go/No-Go status determination based on weather conditions for shooters
function getShootingStatus(weatherData?: WeatherData): {
  status: 'go' | 'caution' | 'no-go'
  color: string
  bgColor: string
  icon: React.ReactNode
  message: string
} {
  if (!weatherData) {
    return {
      status: 'caution',
      color: 'text-warning-clay',
      bgColor: 'bg-warning-clay/10',
      icon: <AlertTriangle className="h-4 w-4" />,
      message: 'Weather data unavailable'
    }
  }

  const { windSpeed, fireDanger, accessStatus } = weatherData

  // No-go conditions
  if (accessStatus === 'Closed' || fireDanger === 'Extreme' || windSpeed > 30) {
    return {
      status: 'no-go',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      icon: <XCircle className="h-4 w-4" />,
      message: accessStatus === 'Closed' ? 'Area closed' : 
               fireDanger === 'Extreme' ? 'Extreme fire danger' : 
               'High winds unsafe'
    }
  }

  // Caution conditions
  if (accessStatus === 'Restrictions' || fireDanger === 'High' || windSpeed > 20) {
    return {
      status: 'caution',
      color: 'text-warning-clay',
      bgColor: 'bg-warning-clay/10',
      icon: <AlertTriangle className="h-4 w-4" />,
      message: fireDanger === 'High' ? 'Fire restrictions' : 'Windy conditions'
    }
  }

  // Good to go
  return {
    status: 'go',
    color: 'text-sagebrush-green',
    bgColor: 'bg-sagebrush-green/10',
    icon: <CheckCircle className="h-4 w-4" />,
    message: 'Good conditions'
  }
}

// Wind direction arrow component
function WindDirectionArrow({ direction, speed }: { direction: string, speed: number }) {
  const rotations = {
    'N': 0, 'NE': 45, 'E': 90, 'SE': 135,
    'S': 180, 'SW': 225, 'W': 270, 'NW': 315
  }

  const rotation = rotations[direction as keyof typeof rotations] || 0

  return (
    <div className="relative flex items-center gap-xs">
      <div 
        className="transition-transform duration-300"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <Navigation className="h-4 w-4 text-nav-intel" />
      </div>
      <div className="text-sm">
        <span className="font-bold text-card-foreground">{speed}</span>
        <span className="text-muted-foreground text-xs">mph</span>
      </div>
      <span className="text-xs text-muted-foreground font-medium">{direction}</span>
    </div>
  )
}

export function WeatherLocationCard({ location, weatherData, className = "" }: WeatherLocationCardProps) {
  const shootingStatus = getShootingStatus(weatherData)
  
  return (
    <Card className={`mica shadow-whisper hover:shadow-present transition-all duration-300 overflow-hidden ${className}`}>
      {/* Status Banner */}
      <div className={`h-1 ${
        shootingStatus.status === 'go' ? 'bg-sagebrush-green' :
        shootingStatus.status === 'caution' ? 'bg-warning-clay' : 
        'bg-destructive'
      }`} />
      
      <CardHeader className="pb-sm">
        <div className="flex items-start justify-between mb-xs">
          <div className="flex items-center gap-xs">
            <Badge 
              variant={shootingStatus.status === 'go' ? 'status-success' : 
                      shootingStatus.status === 'caution' ? 'status-warning' : 'status-error'} 
              size="xs"
              hideIcon
            >
              {shootingStatus.icon}
              <span className="ml-xs">{shootingStatus.message.toUpperCase()}</span>
            </Badge>
          </div>
          <div className="flex items-center gap-xs text-xs text-muted-foreground">
            {location.verified && (
              <>
                <Shield className="h-3 w-3 text-nav-intel" />
                <span className="font-medium">Verified</span>
              </>
            )}
          </div>
        </div>
        
        <div className="space-y-xs">
          <CardTitle className="font-rajdhani font-bold text-lg leading-tight text-card-foreground">
            {location.name}
          </CardTitle>
          <div className="flex items-center gap-xs text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 text-nav-intel" />
            <span>{location.distanceFromBoise} miles from Boise</span>
            <span>•</span>
            <span className="capitalize">{location.difficulty}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-base">
        {/* Weather Conditions - Prominent Display */}
        {weatherData && (
          <div className="bg-nav-intel/5 p-sm rounded-sm border border-nav-intel/20">
            <div className="grid grid-cols-2 gap-base mb-sm">
              {/* Wind - Primary Focus */}
              <div className="space-y-xs">
                <div className="flex items-center gap-xs text-xs text-nav-intel font-semibold">
                  <Wind className="h-3 w-3" />
                  WIND
                </div>
                <WindDirectionArrow direction={weatherData.windDirection} speed={weatherData.windSpeed} />
              </div>
              
              {/* Temperature */}
              <div className="space-y-xs">
                <div className="flex items-center gap-xs text-xs text-nav-intel font-semibold">
                  <Thermometer className="h-3 w-3" />
                  TEMP
                </div>
                <div className="text-lg font-bold text-card-foreground">
                  {weatherData.temperature}°F
                </div>
              </div>
            </div>
            
            {/* Fire Danger & Alerts */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-xs">
                <span className="text-muted-foreground">Fire Danger:</span>
                <Badge 
                  variant={weatherData.fireDanger === 'Low' ? 'fire-low' :
                          weatherData.fireDanger === 'Moderate' ? 'fire-moderate' :
                          weatherData.fireDanger === 'High' ? 'fire-high' : 'fire-extreme'}
                  size="xs"
                >
                  {weatherData.fireDanger}
                </Badge>
              </div>
              <span className="text-muted-foreground">Updated {weatherData.lastUpdated}</span>
            </div>
            
            {/* Weather Alerts */}
            {weatherData.alerts && weatherData.alerts.length > 0 && (
              <div className="mt-sm pt-sm border-t border-nav-intel/20">
                {weatherData.alerts.slice(0, 1).map((alert, index) => (
                  <div key={index} className="flex items-start gap-xs">
                    <AlertTriangle className="h-3 w-3 text-warning-clay mt-px flex-shrink-0" />
                    <span className="text-xs text-card-foreground">{alert}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Location Details */}
        <div className="space-y-xs">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {location.description}
          </p>
          
          {/* Key Amenities */}
          <div className="flex flex-wrap gap-xs">
            {location.amenities.slice(0, 2).map((amenity, index) => (
              <Badge key={index} className="bg-muted text-muted-foreground text-xs">
                {amenity}
              </Badge>
            ))}
            {location.amenities.length > 2 && (
              <Badge className="bg-muted text-muted-foreground text-xs">
                +{location.amenities.length - 2} more
              </Badge>
            )}
          </div>
        </div>
        
        {/* Best Shooting Conditions */}
        <div className="bg-card/50 p-xs rounded-sm">
          <div className="flex items-center gap-xs text-xs text-muted-foreground mb-xs">
            <Target className="h-3 w-3 text-nav-intel" />
            <span className="font-medium">Best Conditions:</span>
          </div>
          <span className="text-xs text-card-foreground">{location.bestWindConditions}</span>
        </div>
        
        {/* Action Button */}
        <Button 
          className="w-full bg-nav-intel text-white hover:bg-nav-intel/90 font-rajdhani font-bold"
          size="sm"
        >
          <ArrowRight className="h-4 w-4 mr-xs" />
          VIEW DETAILS
        </Button>
      </CardContent>
    </Card>
  )
}