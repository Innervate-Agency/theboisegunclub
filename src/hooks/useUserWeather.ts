'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

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

// Cache keys for localStorage persistence
const LOCATION_CACHE_KEY = 'boisegunclub_user_location'
const LOCATION_PERMISSION_KEY = 'boisegunclub_location_permission'
const WEATHER_CACHE_KEY = 'boisegunclub_weather_data'

interface CachedLocation {
  lat: number
  lng: number
  city: string | null
  state: string | null
  timestamp: number
  permission: 'granted' | 'denied' | 'prompt' | 'unavailable'
}

interface CachedWeather {
  data: WeatherData
  timestamp: number
}

export function useUserWeather(options: UseUserWeatherOptions = {}) {
  const {
    autoRefresh = true,
    refreshInterval = 600000, // 10 minutes default
    fallbackLocation = { lat: 43.6150, lng: -116.2023, name: 'Boise, ID' } // Boise as fallback
  } = options

  const isMountedRef = useRef(true)
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

  // Cache location data to localStorage
  const cacheLocation = (locationData: LocationState) => {
    if (typeof window === 'undefined') return
    
    const cacheData: CachedLocation = {
      lat: locationData.lat || 0,
      lng: locationData.lng || 0,
      city: locationData.city,
      state: locationData.state,
      timestamp: Date.now(),
      permission: locationData.permission
    }
    
    try {
      localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(cacheData))
      localStorage.setItem(LOCATION_PERMISSION_KEY, locationData.permission)
    } catch (err) {
    }
  }

  // Load cached location data
  const loadCachedLocation = (): LocationState | null => {
    if (typeof window === 'undefined') return null
    
    try {
      const cachedData = localStorage.getItem(LOCATION_CACHE_KEY)
      const cachedPermission = localStorage.getItem(LOCATION_PERMISSION_KEY)
      
      if (cachedData) {
        const parsed: CachedLocation = JSON.parse(cachedData)
        const age = Date.now() - parsed.timestamp
        
        // Cache valid for 24 hours for granted permission, 7 days for denied/unavailable
        const maxAge = parsed.permission === 'granted' ? 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000
        
        // Validate cached coordinates
        const validCoords = parsed.lat !== null && parsed.lng !== null && 
                           !isNaN(parsed.lat) && !isNaN(parsed.lng) &&
                           parsed.lat >= -90 && parsed.lat <= 90 &&
                           parsed.lng >= -180 && parsed.lng <= 180
        
        if (age < maxAge && (parsed.permission !== 'granted' || validCoords)) {
          return {
            lat: parsed.lat,
            lng: parsed.lng,
            city: parsed.city,
            state: parsed.state,
            error: null,
            loading: false,
            permission: parsed.permission
          }
        } else if (parsed.permission === 'granted' && !validCoords) {
        }
      }
    } catch (err) {
    }
    
    return null
  }

  // Cache weather data
  const cacheWeatherData = (data: WeatherData) => {
    if (typeof window === 'undefined') return
    
    const cacheData: CachedWeather = {
      data,
      timestamp: Date.now()
    }
    
    try {
      localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(cacheData))
    } catch (err) {
    }
  }

  // Load cached weather data
  const loadCachedWeatherData = (): WeatherData | null => {
    if (typeof window === 'undefined') return null
    
    try {
      const cachedData = localStorage.getItem(WEATHER_CACHE_KEY)
      if (cachedData) {
        const parsed: CachedWeather = JSON.parse(cachedData)
        const age = Date.now() - parsed.timestamp
        
        // Weather cache valid for 15 minutes
        if (age < 15 * 60 * 1000) {
          return parsed.data
        }
      }
    } catch (err) {
    }
    
    return null
  }

  // Get user's current location with caching
  const getCurrentLocation = useCallback(async (): Promise<{ lat: number; lng: number; name: string }> => {
    // Check cache first
    const cachedLocation = loadCachedLocation()
    if (cachedLocation && cachedLocation.lat && cachedLocation.lng) {
      if (isMountedRef.current) {
        setLocation(cachedLocation)
      }
      const name = cachedLocation.city && cachedLocation.state 
        ? `${cachedLocation.city}, ${cachedLocation.state}` 
        : 'Your Location'
      return { lat: cachedLocation.lat, lng: cachedLocation.lng, name }
    }

    if (!navigator.geolocation) {
      const unavailableState = {
        lat: null,
        lng: null,
        city: null,
        state: null,
        loading: false,
        permission: 'unavailable' as const,
        error: 'Geolocation not supported'
      }
      
      if (isMountedRef.current) {
        setLocation(unavailableState)
        cacheLocation(unavailableState)
      }
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
              
              const locationData = {
                lat: latitude,
                lng: longitude,
                city,
                state,
                error: null,
                loading: false,
                permission: 'granted' as const
              }
              
              if (isMountedRef.current) {
                setLocation(locationData)
                cacheLocation(locationData)
              }
              
              resolve({ lat: latitude, lng: longitude, name: `${city}, ${state}` })
            } else {
              throw new Error('Failed to get location details')
            }
          } catch (err) {
            // Still use coordinates even if reverse geocoding fails
            const locationData = {
              lat: latitude,
              lng: longitude,
              city: 'Unknown',
              state: 'ID',
              error: null,
              loading: false,
              permission: 'granted' as const
            }
            
            if (isMountedRef.current) {
              setLocation(locationData)
              cacheLocation(locationData)
            }
            
            resolve({ lat: latitude, lng: longitude, name: 'Your Location' })
          }
        },
        (error) => {
          const deniedState = {
            lat: null,
            lng: null,
            city: null,
            state: null,
            loading: false,
            permission: 'denied' as const,
            error: error.message
          }
          
          if (isMountedRef.current) {
            setLocation(deniedState)
            cacheLocation(deniedState)
          }
          
          // Use fallback location
          resolve(fallbackLocation)
        },
        {
          timeout: 10000,
          enableHighAccuracy: false,
          maximumAge: 24 * 60 * 60 * 1000 // 24 hours - much longer since we have our own cache
        }
      )
    })
  }, [fallbackLocation, loadCachedLocation, cacheLocation])

  // Fetch weather data for a specific location with caching
  const fetchWeatherData = useCallback(async (targetLocation?: { lat: number; lng: number; name: string }) => {
    if (!isMountedRef.current) return
    
    // Check weather cache first
    const cachedWeather = loadCachedWeatherData()
    if (cachedWeather) {
      if (isMountedRef.current) {
        setWeatherData(cachedWeather)
        setError(null)
      }
      return // Use cached data, no need to fetch
    }
    
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
        const weatherData = {
          ...result.data,
          lat: locationToUse.lat,
          lng: locationToUse.lng
        }
        
        if (isMountedRef.current) {
          setWeatherData(weatherData)
          cacheWeatherData(weatherData)
        }
      } else if (result.data) {
        // Handle fallback data from API error responses
        const weatherData = {
          ...result.data,
          lat: locationToUse.lat,
          lng: locationToUse.lng
        }
        
        if (isMountedRef.current) {
          setWeatherData(weatherData)
          // Don't cache fallback data - try fresh next time
        }
      } else {
        throw new Error(result.error || 'Invalid weather response')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data'
      if (isMountedRef.current) {
        setError(errorMessage)
        // Show error state properly - don't mask with fake data
        setWeatherData(null)
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false)
      }
    }
  }, [getCurrentLocation, loadCachedWeatherData, cacheWeatherData])

  // Refresh weather data
  const refreshWeather = useCallback(() => {
    return fetchWeatherData()
  }, [fetchWeatherData])

  // Initial setup with cache loading
  useEffect(() => {
    isMountedRef.current = true
    
    // Load cached data immediately to prevent flash of empty state
    const cachedLocation = loadCachedLocation()
    const cachedWeather = loadCachedWeatherData()
    
    if (cachedLocation && isMountedRef.current) {
      setLocation(cachedLocation)
    }
    
    if (cachedWeather && isMountedRef.current) {
      setWeatherData(cachedWeather)
    }
    
    // Only fetch if we don't have cached data or it's expired
    if (!cachedWeather) {
      fetchWeatherData()
    }

    let interval: NodeJS.Timeout | null = null
    if (autoRefresh) {
      interval = setInterval(() => {
        if (isMountedRef.current) {
          // Force fetch (bypass cache) for periodic updates
          const cachedWeather = loadCachedWeatherData()
          if (!cachedWeather) {
            fetchWeatherData()
          }
        }
      }, refreshInterval)
    }

    return () => {
      isMountedRef.current = false
      if (interval) {
        clearInterval(interval)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefresh, refreshInterval]) // Remove fetchWeatherData from dependencies to prevent loop

  return {
    weatherData,
    location,
    isLoading,
    error,
    refreshWeather,
    getCurrentLocation
  }
}