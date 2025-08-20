import { NextRequest, NextResponse } from 'next/server'

// Location-based weather API using NWS - for user's current location
async function fetchLocationWeather(lat: number, lng: number, locationName: string) {
  const userAgent = 'BoiseGunClub.com Weather v1.0 (theboisegunclub.com, info@theboisegunclub.com)'
  
  try {
    // Step 1: Get the forecast URLs for this location using NWS points API
    const pointsResponse = await fetch(
      `https://api.weather.gov/points/${lat},${lng}`,
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
    
    // Extract wind direction and speed
    const windMatch = current.windDirection || 'Variable'
    const windSpeedMatch = current.windSpeed?.match(/(\d+)/) || ['0', '0']
    const windSpeed = parseInt(windSpeedMatch[1]) || 0
    
    // Map NWS conditions to our weather icons
    const mapWeatherIcon = (shortForecast: string): string => {
      const forecast = shortForecast.toLowerCase()
      if (forecast.includes('sunny') || forecast.includes('clear')) return 'sun'
      if (forecast.includes('partly') || forecast.includes('mostly sunny')) return 'partly-cloudy'
      if (forecast.includes('cloudy') || forecast.includes('overcast')) return 'cloudy'
      if (forecast.includes('rain') || forecast.includes('shower')) return 'rain'
      if (forecast.includes('snow') || forecast.includes('blizzard')) return 'snow'
      if (forecast.includes('storm') || forecast.includes('thunder')) return 'storm'
      return 'partly-cloudy'
    }
    
    // Determine shooting conditions based on weather
    const determineShootingConditions = (temp: number, wind: number, forecast: string): string => {
      const forecastLower = forecast.toLowerCase()
      
      if (forecastLower.includes('storm') || forecastLower.includes('thunder') || wind > 25) {
        return 'Poor - Not Recommended'
      }
      if (forecastLower.includes('rain') || forecastLower.includes('snow') || wind > 15) {
        return 'Fair - Use Caution'
      }
      if (temp < 32 || temp > 95 || wind > 10) {
        return 'Good - Some Challenges'
      }
      return 'Excellent - Ideal Conditions'
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
    const shortForecast = current.shortForecast || 'Clear'
    
    // Get additional location context from NWS data
    const city = pointsData.properties?.relativeLocation?.properties?.city || locationName.split(',')[0]
    const state = pointsData.properties?.relativeLocation?.properties?.state || 'ID'
    const displayName = `${city}, ${state}`
    
    return {
      locationName: displayName,
      temperature,
      windSpeed,
      windDirection: windMatch,
      fireDanger: determineFireDanger(temperature, windSpeed, humidity),
      accessStatus: determineAccessStatus(shortForecast, windSpeed),
      weatherIcon: mapWeatherIcon(shortForecast),
      lastUpdated: new Date().toISOString(),
      alerts: [], // Could integrate NWS alerts API here
      // Additional data for enhanced UI
      shortForecast,
      detailedForecast: today.detailedForecast,
      humidity,
      shootingConditions: determineShootingConditions(temperature, windSpeed, shortForecast),
      // Location context
      gridX: pointsData.properties.gridX,
      gridY: pointsData.properties.gridY,
      office: pointsData.properties.cwa,
      timezone: pointsData.properties.timeZone,
      // Raw coordinates
      lat,
      lng
    }
    
  } catch (error) {
    console.error(`NWS API error for ${locationName}:`, error)
    
    // Fallback to reasonable defaults if NWS API fails
    return {
      locationName,
      temperature: 72,
      windSpeed: 5,
      windDirection: 'W',
      fireDanger: 'Moderate' as const,
      accessStatus: 'Open' as const,
      weatherIcon: 'partly-cloudy' as const,
      lastUpdated: new Date().toISOString(),
      alerts: ['Weather data temporarily unavailable'],
      shortForecast: 'Conditions unavailable',
      detailedForecast: 'Unable to fetch current weather conditions',
      shootingConditions: 'Unknown - Check Local Conditions',
      lat,
      lng
    }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = parseFloat(searchParams.get('lat') || '43.6150') // Default to Boise
    const lng = parseFloat(searchParams.get('lng') || '-116.2023')
    const name = searchParams.get('name') || 'Boise, ID'
    
    // Validate coordinates
    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid coordinates provided',
          data: null
        },
        { status: 400 }
      )
    }
    
    console.log(`Fetching NWS weather data for ${name} (${lat}, ${lng})...`)
    
    // Fetch weather data from NWS API
    const weatherData = await fetchLocationWeather(lat, lng, name)
    
    return NextResponse.json({
      success: true,
      data: weatherData,
      lastUpdated: new Date().toISOString(),
      meta: {
        source: 'National Weather Service',
        coordinates: { lat, lng },
        requestedLocation: name,
        updateFrequency: '15 minutes'
      }
    })
    
  } catch (error) {
    console.error('Location weather API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch location weather data',
        data: null,
        meta: {
          source: 'National Weather Service (Error)',
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      },
      { status: 500 }
    )
  }
}