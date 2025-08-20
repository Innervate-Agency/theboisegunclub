'use client'

import { useState, useEffect, useCallback } from 'react'

interface WeatherData {
  locationName: string
  temperature: number
  windSpeed: number
  windDirection: string
  fireDanger: 'Low' | 'Moderate' | 'High' | 'Extreme'
  accessStatus: 'Open' | 'Restrictions' | 'Closed'
  weatherIcon: 'sun' | 'partly-cloudy' | 'cloudy' | 'rain' | 'snow' | 'storm'
  lastUpdated: string
  alerts?: string[]
  shortForecast?: string
  detailedForecast?: string
  humidity?: number
  lat?: number
  lng?: number
}

interface UseUserWeatherOptions {
  autoRefresh?: boolean
  refreshInterval?: number
  fallbackLocation?: { lat: number; lng: number; name: string }
}

interface LocationState {
  lat: number | null
  lng: number | null
  city: string | null
  state: string | null
  error: string | null
  loading: boolean
  permission: 'granted' | 'denied' | 'prompt' | 'unavailable'
}

export function useUserWeather(options: UseUserWeatherOptions = {}) {
  const {
    autoRefresh = true,
    refreshInterval = 600000, // 10 minutes default
    fallbackLocation = { lat: 43.6150, lng: -116.2023, name: 'Boise, ID' } // Boise as fallback
  } = options

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [location, setLocation] = useState<LocationState>({
    lat: null,
    lng: null,
    city: null,
    state: null,
    error: null,
    loading: true,
    permission: 'prompt'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get user's current location
  const getCurrentLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        loading: false,
        permission: 'unavailable',
        error: 'Geolocation not supported'
      }))
      return fallbackLocation
    }

    return new Promise<{ lat: number; lng: number; name: string }>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          
          try {
            // Reverse geocode to get city/state
            const response = await fetch(
              `https://api.weather.gov/points/${latitude},${longitude}`,
              {
                headers: {
                  'User-Agent': 'BoiseGunClub.com Weather v1.0 (theboisegunclub.com, info@theboisegunclub.com)'
                }
              }
            )
            
            if (response.ok) {
              const data = await response.json()
              const city = data.properties?.relativeLocation?.properties?.city || 'Unknown'
              const state = data.properties?.relativeLocation?.properties?.state || 'ID'
              
              setLocation({
                lat: latitude,
                lng: longitude,
                city,
                state,
                error: null,
                loading: false,
                permission: 'granted'
              })
              
              resolve({ lat: latitude, lng: longitude, name: `${city}, ${state}` })
            } else {
              throw new Error('Failed to get location details')
            }
          } catch (err) {
            // Still use coordinates even if reverse geocoding fails
            setLocation({
              lat: latitude,
              lng: longitude,
              city: 'Unknown',
              state: 'ID',
              error: null,
              loading: false,
              permission: 'granted'
            })
            
            resolve({ lat: latitude, lng: longitude, name: 'Your Location' })
          }
        },
        (error) => {
          console.warn('Geolocation error:', error.message)
          setLocation(prev => ({
            ...prev,
            loading: false,
            permission: 'denied',
            error: error.message
          }))
          
          // Use fallback location
          resolve(fallbackLocation)
        },
        {
          timeout: 10000,
          enableHighAccuracy: false,
          maximumAge: 300000 // 5 minutes
        }
      )
    })
  }, [fallbackLocation])

  // Fetch weather data for a specific location
  const fetchWeatherData = useCallback(async (targetLocation?: { lat: number; lng: number; name: string }) => {
    setIsLoading(true)
    setError(null)

    try {
      let locationToUse = targetLocation

      if (!locationToUse) {
        locationToUse = await getCurrentLocation()
      }

      const response = await fetch(`/api/weather/location?lat=${locationToUse.lat}&lng=${locationToUse.lng}&name=${encodeURIComponent(locationToUse.name)}`)
      
      if (!response.ok) {
        throw new Error(`Weather API failed: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.success && result.data) {
        setWeatherData({
          ...result.data,
          lat: locationToUse.lat,
          lng: locationToUse.lng
        })
      } else {
        throw new Error(result.error || 'Invalid weather response')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data'
      console.error('Weather fetch error:', errorMessage)
      setError(errorMessage)
      
      // Set fallback weather data
      if (fallbackLocation) {
        setWeatherData({
          locationName: fallbackLocation.name,
          temperature: 72,
          windSpeed: 5,
          windDirection: 'W',
          fireDanger: 'Moderate',
          accessStatus: 'Open',
          weatherIcon: 'partly-cloudy',
          lastUpdated: new Date().toISOString(),
          alerts: ['Weather data temporarily unavailable'],
          lat: fallbackLocation.lat,
          lng: fallbackLocation.lng
        })
      }
    } finally {
      setIsLoading(false)
    }
  }, [getCurrentLocation, fallbackLocation])

  // Refresh weather data
  const refreshWeather = useCallback(() => {
    return fetchWeatherData()
  }, [fetchWeatherData])

  // Initial fetch and auto-refresh setup
  useEffect(() => {
    fetchWeatherData()

    if (autoRefresh) {
      const interval = setInterval(() => {
        fetchWeatherData()
      }, refreshInterval)

      return () => clearInterval(interval)
    }
  }, [fetchWeatherData, autoRefresh, refreshInterval])

  return {
    weatherData,
    location,
    isLoading,
    error,
    refreshWeather,
    getCurrentLocation
  }
}