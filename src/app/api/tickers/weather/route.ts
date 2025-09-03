import { NextRequest, NextResponse } from 'next/server'
import { shootingLocations } from '@/lib/intel-locations-data'

interface Location {
  lat: number;
  lng: number;
  name: string;
}

// National Weather Service API integration - no API key required!
async function fetchNWSWeatherData(location: Location) {
  const userAgent = 'BoiseGunClub.com Weather v1.0 (theboisegunclub.com, info@theboisegunclub.com)'
  
  try {
    // Step 1: Get the forecast URLs for this location using NWS points API
    const pointsResponse = await fetch(
      `https://api.weather.gov/points/${location.lat},${location.lng}`,
      {
        headers: { 'User-Agent': userAgent },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )
    
    if (!pointsResponse.ok) {
      throw new Error(`NWS Points API failed: ${pointsResponse.status}`)
    }
    
    const pointsData = await pointsResponse.json()
    
    // Step 2: Get current conditions and forecast
    const [currentResponse, forecastResponse] = await Promise.all([
      fetch(pointsData.properties.forecastHourly, {
        headers: { 'User-Agent': userAgent },
        next: { revalidate: 900 } // Cache for 15 minutes
      }),
      fetch(pointsData.properties.forecast, {
        headers: { 'User-Agent': userAgent },
        next: { revalidate: 900 } // Cache for 15 minutes
      })
    ])
    
    if (!currentResponse.ok || !forecastResponse.ok) {
      throw new Error('NWS Weather API failed')
    }
    
    const [currentData, forecastData] = await Promise.all([
      currentResponse.json(),
      forecastResponse.json()
    ])
    
    // Get current hour conditions
    const current = currentData.properties.periods[0]
    const today = forecastData.properties.periods[0]
    
    // Extract wind direction from wind string (e.g., "W 10 mph" -> "W")
    const windMatch = current.windDirection || 'Variable'
    const windSpeedMatch = current.windSpeed?.match(/(\d+)/) || ['0', '0']
    const windSpeed = parseInt(windSpeedMatch[1]) || 0
    
    // Map NWS conditions to our weather icons
    const mapCloudIcon = (shortForecast: string): string => {
      const forecast = shortForecast.toLowerCase()
      if (forecast.includes('sunny') || forecast.includes('clear')) return 'sun'
      if (forecast.includes('partly') || forecast.includes('mostly sunny')) return 'partly-cloudy'
      if (forecast.includes('cloudy') || forecast.includes('overcast')) return 'cloudy'
      if (forecast.includes('rain') || forecast.includes('shower')) return 'rain'
      if (forecast.includes('snow') || forecast.includes('blizzard')) return 'snow'
      if (forecast.includes('storm') || forecast.includes('thunder')) return 'storm'
      return 'partly-cloudy'
    }
    
    // Determine fire danger based on conditions
    const determineFireDanger = (temp: number, wind: number, humidity: number): string => {
      if (temp > 85 && wind > 15 && humidity < 15) return 'Extreme'
      if (temp > 80 && wind > 10 && humidity < 25) return 'High'
      if (temp > 70 && wind > 5 && humidity < 40) return 'Moderate'
      return 'Low'
    }
    
    // Determine access status based on weather conditions
    const determineAccessStatus = (shortForecast: string, windSpeed: number): string => {
      const forecast = shortForecast.toLowerCase()
      if (forecast.includes('storm') || forecast.includes('blizzard') || windSpeed > 25) return 'Closed'
      if (forecast.includes('rain') || forecast.includes('snow') || windSpeed > 15) return 'Restrictions'
      return 'Open'
    }
    
    const temperature = current.temperature || 70
    const humidity = current.relativeHumidity?.value || 50
    
    return {
      locationName: location.name,
      temperature,
      windSpeed,
      windDirection: windMatch,
      fireDanger: determineFireDanger(temperature, windSpeed, humidity),
      accessStatus: determineAccessStatus(current.shortForecast || '', windSpeed),
      weatherIcon: mapCloudIcon(current.shortForecast || 'Clear'),
      lastUpdated: new Date().toISOString(),
      alerts: [], // Could integrate NWS alerts API here
      // Additional NWS data
      shortForecast: current.shortForecast,
      detailedForecast: today.detailedForecast,
      humidity: humidity
    }
    
  } catch (error) {
    
    // DO NOT return fake data - return null to indicate failure
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '6')
    
    // Get priority locations for weather data (locations with coordinates)
    const priorityLocations = shootingLocations
      .filter(location => location.lat && location.lng && (location.weatherPriority === 'high' || !location.weatherPriority))
      .slice(0, limit)
    
    
    // Fetch live weather data from NWS API for each location
    const weatherResults = await Promise.all(
      priorityLocations.map(location => fetchNWSWeatherData(location))
    )
    
    // Filter out null results (failed API calls)
    const weatherConditions = weatherResults.filter(result => result !== null)
    
    return NextResponse.json({
      success: true,
      data: weatherConditions,
      count: weatherConditions.length,
      lastUpdated: new Date().toISOString(),
      // Include metadata for frontend
      meta: {
        source: 'National Weather Service',
        updateFrequency: '15 minutes',
        coverage: 'Idaho Shooting Locations',
        locations: priorityLocations.map(loc => loc.name)
      }
    })
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch weather ticker data',
        data: [],
        meta: {
          source: 'National Weather Service (Error)',
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      },
      { status: 500 }
    )
  }
}