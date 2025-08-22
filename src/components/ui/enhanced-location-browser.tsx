'use client'

import React, { useState, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WeatherLocationCard } from '@/components/ui/weather-location-card'
import { ChevronLeftIcon, ChevronRightIcon, CursorArrowRaysIcon, GlobeAltIcon, MapPinIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface WeatherData {
  locationName: string
  temperature: number
  windSpeed: number
  windDirection: string
  fireDanger: 'Low' | 'Moderate' | 'High' | 'Extreme'
  accessStatus: 'Open' | 'Restrictions' | 'Closed'
  weatherIcon: 'sun' | 'partly-cloudy' | 'cloudy' | 'rain' | 'snow' | 'storm'
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
  lat: number
  lng: number
}

interface EnhancedLocationBrowserProps {
  locations: LocationData[]
  weatherData: WeatherData[]
}

const ITEMS_PER_PAGE = 9

const categoryFilters = [
  { id: 'all', label: 'All Categories', icon: Target },
  { id: 'Public Range', label: 'Public Ranges', icon: Target },
  { id: 'Indoor Range', label: 'Indoor Facilities', icon: Navigation },
  { id: 'BLM Land', label: 'BLM Dispersed', icon: Mountain },
  { id: 'Forest Service', label: 'Forest Service', icon: Compass },
  { id: 'Remote/4WD', label: 'Remote/4WD', icon: Mountain }
]

const difficultyFilters = [
  { id: 'all', label: 'All Difficulty' },
  { id: 'Easy', label: 'Easy Access' },
  { id: 'Moderate', label: 'Moderate' },
  { id: 'Difficult', label: 'Difficult' }
]

const sortOptions = [
  { id: 'distance', label: 'Distance from Boise', icon: MapPin },
  { id: 'rating', label: 'Highest Rated', icon: Star },
  { id: 'weather-priority', label: 'Weather Priority', icon: TrendingUp },
  { id: 'name', label: 'Alphabetical', icon: Filter }
]

export function EnhancedLocationBrowser({ locations, weatherData }: EnhancedLocationBrowserProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedSort, setSelectedSort] = useState('distance')

  // Filter and sort locations
  const filteredAndSortedLocations = useMemo(() => {
    const filtered = locations.filter(location => {
      const matchesCategory = selectedCategory === 'all' || 
        location.category === selectedCategory ||
        location.type === selectedCategory
      
      const matchesDifficulty = selectedDifficulty === 'all' || 
        location.difficulty === selectedDifficulty
      
      return matchesCategory && matchesDifficulty
    })

    // Sort locations
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'distance':
          return a.distanceFromBoise - b.distanceFromBoise
        case 'rating':
          return b.rating - a.rating
        case 'weather-priority': {
          const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 }
          return priorityOrder[b.weatherPriority] - priorityOrder[a.weatherPriority]
        }
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [locations, selectedCategory, selectedDifficulty, selectedSort])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedLocations.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentLocations = filteredAndSortedLocations.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedDifficulty, selectedSort])

  // Get weather data for current locations
  const getCurrentWeatherData = (locationName: string) => {
    return weatherData.find(w => 
      w.locationName === locationName || 
      w.locationName.includes(locationName.split(' ')[0]) ||
      locationName.includes(w.locationName.split(' ')[0])
    )
  }

  return (
    <section className="py-4xl bg-gradient-to-br from-background to-muted/5">
      <div className="container mx-auto max-w-site px-md">
        {/* Section Header */}
        <div className="space-y-xl mb-4xl">
          <div className="text-center space-y-base">
            <Badge variant="outline" size="default">
              Enhanced Location Browser
            </Badge>
            <h2 className="font-rajdhani text-heading-4xl font-bold text-card-foreground leading-tight">
              Explore All <span className="text-nav-intel">Shooting Locations</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Browse all {locations.length} verified shooting locations with live weather data, 
              wind conditions, and Go/No-Go indicators for optimal planning.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-card/50 p-lg rounded-sm border border-nav-intel/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
              
              {/* Category Filter */}
              <div className="space-y-sm">
                <label className="text-body-sm font-medium text-card-foreground">Category</label>
                <div className="flex flex-wrap gap-xs">
                  {categoryFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={selectedCategory === filter.id ? "solid" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(filter.id)}
                      className="text-body-xs font-rajdhani font-medium"
                    >
                      {React.createElement(filter.icon, { className: "h-3 w-3 mr-xs" })}
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="space-y-sm">
                <label className="text-body-sm font-medium text-card-foreground">Difficulty</label>
                <div className="flex flex-wrap gap-xs">
                  {difficultyFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={selectedDifficulty === filter.id ? "solid" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(filter.id)}
                      className="text-body-xs font-rajdhani font-medium"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="space-y-sm">
                <label className="text-body-sm font-medium text-card-foreground">Sort By</label>
                <div className="flex flex-wrap gap-xs">
                  {sortOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant={selectedSort === option.id ? "solid" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedSort(option.id)}
                      className="text-body-xs font-rajdhani font-medium"
                    >
                      {React.createElement(option.icon, { className: "h-3 w-3 mr-xs" })}
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results Summary */}
              <div className="space-y-sm">
                <label className="text-body-sm font-medium text-card-foreground">Results</label>
                <div className="space-y-xs">
                  <div className="text-body-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedLocations.length)} of {filteredAndSortedLocations.length} locations
                  </div>
                  <div className="text-body-xs text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Grid - 3x3 Layout */}
        <div className="space-y-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {currentLocations.map((location, index) => {
              const weatherData = getCurrentWeatherData(location.name)
              return (
                <WeatherLocationCard
                  key={location.name}
                  location={location}
                  weatherData={weatherData}
                  className="rounded-xs"
                />
              )
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-base">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="gap-xs"
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-xs">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "solid" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="gap-xs"
              >
                Next
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* No Results Message */}
          {currentLocations.length === 0 && (
            <div className="text-center py-4xl">
              <div className="space-y-base">
                <CursorArrowRaysIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                <h3 className="font-rajdhani text-body-xl font-bold text-card-foreground">
                  No locations found
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your filters to see more results.
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedDifficulty('all')
                    setSelectedSort('distance')
                  }}
                  className="mt-base"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}