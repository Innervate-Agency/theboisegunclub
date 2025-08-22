import { NextRequest, NextResponse } from 'next/server'
import { fetchWeatherForMultipleLocations } from '@/lib/weather-service'

export async function POST(request: NextRequest) {
  try {
    const { locations } = await request.json()
    
    if (!locations || !Array.isArray(locations)) {
      return NextResponse.json(
        { error: 'Invalid locations data' },
        { status: 400 }
      )
    }

    const weatherData = await fetchWeatherForMultipleLocations(locations)
    
    return NextResponse.json({
      weather: weatherData,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}