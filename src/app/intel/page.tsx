import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { fetchWeatherForMultipleLocations } from '@/lib/weather-service'
import { shootingLocations, featuredWeatherLocations } from '@/lib/intel-locations-data'
import { IntelPageContent } from '@/components/pages/intel-page-content'

export default async function IntelPage() {
  // Server-side data fetching for weather API
  let liveWeatherConditions: any[] = []
  let allWeatherData: any[] = []
  
  try {
    // Fetch live weather data for featured locations (ticker display)
    liveWeatherConditions = await fetchWeatherForMultipleLocations(featuredWeatherLocations)
    
    // Fetch weather data for OUTDOOR locations only (exclude indoor ranges)
    const outdoorLocationCoords = shootingLocations
      .filter(loc => loc.category !== 'Indoor Range' && loc.weatherPriority !== 'low')
      .map(loc => ({
        name: loc.name,
        lat: loc.lat,
        lng: loc.lng
      }))
    allWeatherData = await fetchWeatherForMultipleLocations(outdoorLocationCoords)
  } catch (error) {
    console.error('Failed to fetch weather data:', error)
    // Continue with empty arrays as fallback
  }

  return (
    <div className="theme-intel min-h-screen">
      <SiteNavigation />
      <IntelPageContent 
        liveWeatherConditions={liveWeatherConditions}
        allWeatherData={allWeatherData}
      />
      <SiteFooter currentPage="intel" />
    </div>
  )
}