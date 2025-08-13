'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Badge } from './badge'
import { Button } from './button'
import { Input } from './input'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { 
  Search, MapPin, Filter, ArrowRight, 
  Navigation, Shield, Users, 
  Star, Eye, Flag, Info, ExternalLink,
  Camera, CheckCircle, AlertTriangle
} from 'lucide-react'

// Types for shooting locations
interface ShootingLocation {
  name: string
  type: string
  description: string
  address: string
  coordinates: string
  lat: number
  lng: number
  access: string
  restrictions: string
  amenities: string[]
  rating: number
  reviews: number
  difficulty: string
  category: string
  verified: boolean
  needsVerification?: boolean
  lastUpdated: string
}

interface LocationBrowserProps {
  locations: ShootingLocation[]
  locationTypes: Array<{label: string, value: string, count: number}>
  difficultyLevels: Array<{label: string, value: string, count: number}>
}

function LocationCard({ location }: { location: ShootingLocation }) {
  const categoryColors = {
    "BLM Land": "bg-rifling-green/20 text-rifling-green border-rifling-green/30",
    "Public Range": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Designated Area": "bg-scope-blue/20 text-scope-blue border-scope-blue/30",
    "Remote/4WD": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Popular Spot": "bg-warning-amber/20 text-warning-amber border-warning-amber/30",
    "Forest Service": "bg-ayu-purple/20 text-ayu-purple border-ayu-purple/30"
  }

  const difficultyColors = {
    "Easy": "bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30",
    "Moderate": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Difficult": "bg-safety-red/20 text-safety-red border-safety-red/30"
  }

  // Generate consistent image ID and photo count based on location name for placeholder images
  const hash = Math.abs(location.name.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0))
  const imageId = hash % 1000
  const photoCount = (hash % 12) + 3 // Deterministic photo count between 3-14

  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 overflow-hidden">
      {/* Photo Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <div className="w-full h-full bg-nav-intel/10 group-hover:scale-105 transition-transform duration-300 rounded-xs" />
        <div className="absolute top-tiny right-2">
          <Badge className="bg-background/60 text-foreground border-none backdrop-blur-sm">
            {photoCount}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardHeader className="pb-base">
        <div className="flex items-start justify-between gap-base mb-xs">
          <div className="flex gap-xs">
            <Badge className={categoryColors[location.category as keyof typeof categoryColors]}>
              {location.category}
            </Badge>
            <Badge className={difficultyColors[location.difficulty.split(' ')[0] as keyof typeof difficultyColors]}>
              {location.difficulty}
            </Badge>
          </div>
          {location.verified ? (
            <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30">
              <Shield className="h-3 w-3 mr-xs" />
              Verified
            </Badge>
          ) : (
            <Badge className="bg-warning-clay/20 text-warning-clay border-warning-clay/30">
              <AlertTriangle className="h-3 w-3 mr-xs" />
              Unverified
            </Badge>
          )}
        </div>
        
        <CardTitle className="font-rajdhani text-xl font-bold text-card-foreground group-hover:text-rusty-orange transition-colors duration-200 leading-tight">
          {location.name}
        </CardTitle>
        
        {/* GPS Coordinates - Moved Higher for Shooting Locations */}
        <div className="space-y-xs text-body-sm">
          <div className="flex items-center gap-xs text-rusty-orange font-medium">
            <Navigation className="h-4 w-4" />
            <span className="font-mono text-xs">{location.coordinates}</span>
          </div>
          <div className="flex items-center gap-xs text-muted-foreground">
            <MapPin className="h-4 w-4 text-rusty-orange" />
            <span>{location.address}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-base">
        <p className="text-body-sm text-muted-foreground line-clamp-tiny">
          {location.description}
        </p>
        
        {/* Access Information */}
        <div className="flex items-center gap-xs text-body-sm">
          <Flag className="h-4 w-4 text-rusty-orange" />
          <span className="font-medium">Access:</span>
          <span className="text-muted-foreground">{location.access}</span>
        </div>
        
        {/* Key Amenities - Top 4 Only for Card View */}
        <div className="space-y-xs">
          <h4 className="font-medium text-body-sm">Key Features:</h4>
          <div className="flex flex-wrap gap-xs">
            {location.amenities.slice(0, 4).map((amenity) => (
              <Badge key={amenity} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {location.amenities.length > 4 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{location.amenities.length - 4} more
              </Badge>
            )}
          </div>
        </div>
        
        {location.restrictions && (
          <div className="p-xs bg-safety-red/10 rounded-sm border border-safety-red/20">
            <div className="flex items-start gap-xs">
              <Info className="h-4 w-4 text-safety-red mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-safety-red text-body-sm">Restrictions:</h4>
                <p className="text-xs text-safety-red/80">{location.restrictions}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Verification CTA - Only show for unverified locations */}
        {!location.verified && location.needsVerification && (
          <div className="bg-warning-clay/5 border border-warning-clay/20 rounded-sm p-base">
            <div className="flex items-start justify-between gap-base mb-base">
              <div className="flex-1">
                <h4 className="font-rajdhani font-bold text-body-sm text-warning-clay mb-xs">Help Verify This Location</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have you been here? Help the community by verifying access conditions, safety info, and current restrictions.
                </p>
              </div>
              <Shield className="h-5 w-5 text-warning-clay/60 flex-shrink-0 mt-xs" />
            </div>
            <div className="grid grid-cols-2 gap-xs">
              <Button size="sm" className="bg-warning-clay text-white hover:bg-warning-clay/90 font-rajdhani font-semibold">
                <Camera className="h-4 w-4 mr-xs" />
                Add Photos
              </Button>
              <Button variant="outline" size="sm" className="border-warning-clay/30 text-warning-clay hover:bg-warning-clay hover:text-white font-rajdhani font-semibold">
                <CheckCircle className="h-4 w-4 mr-xs" />
                Verify Details
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-xs border-t border-border">
          <div className="flex items-center gap-base text-xs text-muted-foreground">
            <div className="flex items-center gap-xs">
              <Star className="h-3 w-3 fill-rusty-orange text-rusty-orange" />
              <span>{location.rating}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Users className="h-3 w-3" />
              <span>{location.reviews} reviews</span>
            </div>
            <div className="flex items-center gap-xs">
              <Eye className="h-3 w-3" />
              <span>Updated {new Date(location.lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
          
          {/* Dual CTAs - Get Directions + View Details */}
          <div className="flex gap-xs">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
              onClick={() => {
                const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`
                window.open(googleMapsUrl, '_blank')
              }}
            >
              <ExternalLink className="h-3 w-3 mr-xs" />
              Directions
            </Button>
            <Button variant="ghost" size="sm" className="text-rusty-orange hover:text-rusty-orange">
              View Details
              <ArrowRight className="h-3 w-3 ml-xs" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function LocationBrowser({ locations, locationTypes, difficultyLevels }: LocationBrowserProps) {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredLocations = locations.filter(location => {
    const matchesType = selectedType === "all" || 
      location.category === selectedType ||
      (selectedType === "Public Land" && (location.category.includes("Public") || location.category.includes("BLM")))
    
    const matchesDifficulty = selectedDifficulty === "all" || 
      location.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase())
    
    const matchesSearch = searchQuery === "" || 
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.type.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesType && matchesDifficulty && matchesSearch
  })

  // Sort by verified first, then by rating
  const sortedLocations = filteredLocations.sort((a, b) => {
    if (a.verified && !b.verified) return -1
    if (!a.verified && b.verified) return 1
    return b.rating - a.rating
  })

  return (
    <>
      {/* Search and Filter Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-xl">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-base">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-micro/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search locations, areas, or features..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-xs">
                <Button variant="outline" className="gap-xs">
                  <MapPin className="h-4 w-4" />
                  Near Me
                </Button>
                <Button variant="outline" className="gap-xs">
                  <Filter className="h-4 w-4" />
                  Advanced
                </Button>
              </div>
            </div>

            {/* Location Type Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-heading-lg font-bold text-card-foreground">
                Filter by Location Type
              </h3>
              <div className="flex flex-wrap gap-xs">
                {locationTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedType === type.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.value)}
                    className={selectedType === type.value ? 
                      "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                      "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                    }
                  >
                    {type.label}
                    <Badge variant="secondary" className="ml-xs">
                      {type.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-heading-lg font-bold text-card-foreground">
                Filter by Access Difficulty
              </h3>
              <div className="flex flex-wrap gap-xs">
                {difficultyLevels.map((level) => (
                  <Button
                    key={level.value}
                    variant={selectedDifficulty === level.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(level.value)}
                    className={selectedDifficulty === level.value ? 
                      "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange" : 
                      "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-dark-chocolate"
                    }
                  >
                    {level.label}
                    <Badge variant="secondary" className="ml-xs">
                      {level.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                Shooting Locations
              </h2>
              <div className="text-muted-foreground">
                {sortedLocations.length} {sortedLocations.length === 1 ? 'location' : 'locations'} found
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              {sortedLocations.map((location, index) => (
                <LocationCard key={index} location={location} />
              ))}
            </div>

            {sortedLocations.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">🗺️</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No locations found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all locations to discover great shooting spots in Idaho.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedType("all")
                      setSelectedDifficulty("all")
                      setSearchQuery("")
                    }}
                    className="bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange"
                  >
                    Show All Locations
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
