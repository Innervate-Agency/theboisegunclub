import { NextRequest, NextResponse } from 'next/server'
import { fetchWeatherForLocation } from '@/lib/weather-service'

// Location-based weather API using OpenWeatherMap - fallback from blocked NOAA
async function fetchLocationWeather(lat: number, lng: number, locationName: string) {
    // Use OpenWeatherMap service with built-in caching
    const weatherData = await fetchWeatherForLocation(lat, lng, locationName)
    
    // Transform to match expected API response format
    return {
      locationName: weatherData.locationName,
      temperature: weatherData.temperature,
      windSpeed: weatherData.windSpeed,
      windDirection: weatherData.windDirection,
      fireDanger: weatherData.fireDanger,
      accessStatus: weatherData.accessStatus,
      weatherIcon: weatherData.weatherIcon,
      lastUpdated: new Date().toISOString(),
      alerts: weatherData.alerts || [],
      // Additional data for enhanced UI
      shortForecast: `${weatherData.temperature}°F, ${weatherData.windDirection} wind ${weatherData.windSpeed}mph`,
      detailedForecast: `Current conditions: ${weatherData.temperature}°F with ${weatherData.windDirection} winds at ${weatherData.windSpeed}mph. FireIcon danger: ${weatherData.fireDanger}. Range status: ${weatherData.accessStatus}.`,
      humidity: 25, // OpenWeatherMap provides this but our service doesn't expose it
      shootingConditions: determineShootingConditions(weatherData.temperature, weatherData.windSpeed, weatherData.weatherIcon),
      // Raw coordinates
      lat,
      lng
    }
}

// Determine shooting conditions based on weather
const determineShootingConditions = (temp: number, wind: number, weatherIcon: string): string => {
  if (weatherIcon === 'storm' || wind > 25) {
    return 'Poor - Not Recommended'
  }
  if (weatherIcon === 'rain' || weatherIcon === 'snow' || wind > 15) {
    return 'Fair - Use Caution'
  }
  if (temp < 32 || temp > 95 || wind > 10) {
    return 'Good - Some Challenges'
  }
  return 'Excellent - Ideal Conditions'
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = parseFloat(searchParams.get('lat') || '43.6150') // Default to Boise
    const lng = parseFloat(searchParams.get('lng') || '-116.2023')
    const name = searchParams.get('name') || 'Boise, ID'
    
    
    // Validate coordinates more strictly
    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Invalid coordinates: lat=${lat}, lng=${lng}`,
          data: null
        },
        { status: 400 }
      )
    }
    
    // Additional validation for reasonable coordinates (continental US focus)
    if (lat < 20 || lat > 70 || lng < -180 || lng > -60) {
      // Potentially log this as a suspicious request
    }
    
    
    // Fetch weather data from OpenWeatherMap API with timeout
    const weatherData = await Promise.race([
      fetchLocationWeather(lat, lng, name),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Weather API timeout after 10 seconds')), 10000)
      )
    ])
    
    return NextResponse.json({
      success: true,
      data: weatherData,
      lastUpdated: new Date().toISOString(),
      meta: {
        source: 'OpenWeatherMap (NOAA temporarily unavailable)',
        coordinates: { lat, lng },
        requestedLocation: name,
        updateFrequency: '30 minutes'
      }
    })
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    // Provide fallback weather data for critical errors
    const fallbackData = {
      locationName: 'Boise, ID',
      temperature: 70,
      windSpeed: 5,
      windDirection: 'Variable',
      fireDanger: 'Moderate' as const,
      accessStatus: 'Open' as const,
      weatherIcon: 'partly-cloudy' as const,
      lastUpdated: new Date().toISOString(),
      alerts: [],
      shortForecast: 'Weather data temporarily unavailable',
      detailedForecast: 'Unable to fetch current weather conditions. Please try again later.',
      humidity: 50
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch weather data',
        data: fallbackData, // Provide fallback so UI doesn't break
        meta: {
          source: 'OpenWeatherMap (Error)',
          error: errorMessage,
          fallback: true,
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    )
  }
}
