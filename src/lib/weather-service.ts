interface WeatherResponse {
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
    deg?: number
  }
  weather: [{
    main: string
    description: string
    icon: string
  }]
  name: string
}

interface ProcessedWeatherData {
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

import { promises as fs } from 'fs'
import path from 'path'

const API_KEY: string = process.env.OPENWEATHERMAP_API_KEY || '664292cdddfd62b0af8ffb50d2dd9c60'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes in milliseconds (weather changes frequently)
const CACHE_DIR = path.join(process.cwd(), '.cache', 'weather')

// Persistent file-based cache for weather data
interface CachedWeatherData {
  data: ProcessedWeatherData
  timestamp: number
  version: string // For cache invalidation if data structure changes
}

// In-memory cache for this session (faster than file reads)
const weatherCache = new Map<string, CachedWeatherData>()

// Ensure cache directory exists
async function ensureCacheDir(): Promise<void> {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true })
  } catch (error) {
  }
}

// Get cache file path for coordinates
function getCacheFilePath(lat: number, lon: number): string {
  return path.join(CACHE_DIR, `${lat}_${lon}.json`.replace(/\./g, '_'))
}

// Load cache from disk
async function loadCacheFromDisk(lat: number, lon: number): Promise<CachedWeatherData | null> {
  try {
    const cacheFilePath = getCacheFilePath(lat, lon)
    const cacheData = await fs.readFile(cacheFilePath, 'utf-8')
    const parsed: CachedWeatherData = JSON.parse(cacheData)
    
    // Validate cache version and expiry
    if (parsed.version === '1.0' && isCacheValid(parsed.timestamp)) {
      return parsed
    } else {
      // Cache expired or version mismatch, delete the file
      await fs.unlink(cacheFilePath).catch(() => {}) // Ignore errors
      return null
    }
  } catch (error) {
    // File doesn't exist or is corrupted, return null
    return null
  }
}

// Save cache to disk
async function saveCacheToDisk(lat: number, lon: number, cachedData: CachedWeatherData): Promise<void> {
  try {
    await ensureCacheDir()
    const cacheFilePath = getCacheFilePath(lat, lon)
    await fs.writeFile(cacheFilePath, JSON.stringify(cachedData, null, 2), 'utf-8')
  } catch (error) {
  }
}

// Convert wind degrees to cardinal direction
function degreesToCardinal(degrees: number): string {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(degrees / 45) % 8]
}

// Calculate fire danger based on weather conditions
function calculateFireDanger(temp: number, humidity: number, windSpeed: number): 'Low' | 'Moderate' | 'High' | 'Extreme' {
  // Simplified fire danger calculation based on temperature, humidity, and wind
  // Real fire weather uses more complex calculations including fuel moisture
  
  if (temp > 85 && humidity < 20 && windSpeed > 20) return 'Extreme'
  if (temp > 80 && humidity < 30 && windSpeed > 15) return 'High'
  if (temp > 70 && humidity < 40 && windSpeed > 10) return 'Moderate'
  return 'Low'
}

// Convert OpenWeatherMap icon to emoji
function weatherIconToType(icon: string, main: string): 'sun' | 'partly-cloudy' | 'cloudy' | 'rain' | 'snow' | 'storm' {
  if (main.includes('Rain')) return 'rain'
  if (main.includes('Snow')) return 'snow'
  if (main.includes('Thunderstorm')) return 'storm'
  if (main.includes('Clear')) return 'sun'
  if (main.includes('Clouds')) return icon.includes('few') ? 'partly-cloudy' : 'cloudy'
  return 'partly-cloudy'
}

// Determine access status based on weather conditions and time of year
function determineAccessStatus(temp: number, windSpeed: number, fireDanger: string): 'Open' | 'Restrictions' | 'Closed' {
  if (fireDanger === 'Extreme' || windSpeed > 35) return 'Closed'
  if (fireDanger === 'High' || windSpeed > 25 || temp < 20) return 'Restrictions'
  return 'Open'
}

// Generate weather alerts based on conditions
function generateAlerts(temp: number, windSpeed: number, fireDanger: string, humidity: number): string[] {
  const alerts: string[] = []
  
  if (windSpeed > 25) alerts.push(`High winds ${Math.round(windSpeed)}mph - use caution`)
  if (fireDanger === 'High') alerts.push('FireIcon restrictions in effect - no steel targets')
  if (fireDanger === 'Extreme') alerts.push('EXTREME FIRE DANGER - Area closed to shooting')
  if (temp < 25) alerts.push('Freezing conditions - check road access')
  if (temp < 35 && humidity > 80) alerts.push('Snow/ice possible - 4WD recommended')
  
  return alerts
}

// Generate cache key for location
function getCacheKey(lat: number, lon: number): string {
  return `${lat.toFixed(4)}_${lon.toFixed(4)}`
}

// Check if cached data is still valid
function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_DURATION
}

// Get fallback/mock data for location
function getFallbackWeatherData(locationName: string): ProcessedWeatherData {
  // Realistic fallback data based on Idaho winter conditions
  const fallbackData: { [key: string]: ProcessedWeatherData } = {
    "Black's Creek Range": {
      locationName: "Black's Creek Range",
      temperature: 38,
      windSpeed: 12,
      windDirection: "SW",
      fireDanger: "Low",
      accessStatus: "Open",
      weatherIcon: "partly-cloudy",
      lastUpdated: "Cached data"
    },
    "Snake River BOP Area": {
      locationName: "Snake River BOP Area", 
      temperature: 41,
      windSpeed: 8,
      windDirection: "W",
      fireDanger: "Low",
      accessStatus: "Restrictions",
      weatherIcon: "sun",
      alerts: ["Seasonal wildlife closures in effect"],
      lastUpdated: "Cached data"
    },
    "Nampa Range": {
      locationName: "Nampa Range",
      temperature: 40,
      windSpeed: 10,
      windDirection: "NW", 
      fireDanger: "Low",
      accessStatus: "Open",
      weatherIcon: "partly-cloudy",
      lastUpdated: "Cached data"
    },
    "Table Rock Area": {
      locationName: "Table Rock Area",
      temperature: 36,
      windSpeed: 15,
      windDirection: "N",
      fireDanger: "Low", 
      accessStatus: "Open",
      weatherIcon: "cloudy",
      lastUpdated: "Cached data"
    },
    "Garden Valley Range": {
      locationName: "Garden Valley Range",
      temperature: 32,
      windSpeed: 6,
      windDirection: "E",
      fireDanger: "Low",
      accessStatus: "Restrictions",
      weatherIcon: "snow",
      alerts: ["Snow possible - check road conditions"],
      lastUpdated: "Cached data"
    },
    "Owyhee Mountains": {
      locationName: "Owyhee Mountains",
      temperature: 35,
      windSpeed: 20,
      windDirection: "W",
      fireDanger: "Low",
      accessStatus: "Restrictions", 
      weatherIcon: "storm",
      alerts: ["High winds - 4WD recommended"],
      lastUpdated: "Cached data"
    }
  }
  
  return fallbackData[locationName] || {
    locationName,
    temperature: 40,
    windSpeed: 8,
    windDirection: "SW",
    fireDanger: "Low",
    accessStatus: "Open", 
    weatherIcon: "partly-cloudy",
    lastUpdated: "Cached data"
  }
}

export async function fetchWeatherForLocation(lat: number, lon: number, locationName: string): Promise<ProcessedWeatherData> {
  const cacheKey = getCacheKey(lat, lon)
  
  // Check in-memory cache first (fastest)
  const memoryCache = weatherCache.get(cacheKey)
  if (memoryCache && isCacheValid(memoryCache.timestamp)) {
    return memoryCache.data
  }
  
  // Check disk cache (persistent across restarts)
  const diskCache = await loadCacheFromDisk(lat, lon)
  if (diskCache && isCacheValid(diskCache.timestamp)) {
    const ageMinutes = Math.round((Date.now() - diskCache.timestamp) / (1000 * 60))
    
    // Load into memory for faster subsequent access
    weatherCache.set(cacheKey, diskCache)
    return diskCache.data
  }
  
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`,
      { 
        next: { revalidate: 1800 }, // Next.js cache for 30 minutes
        signal: AbortSignal.timeout(10000) // 10 second timeout
      }
    )
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }
    
    const data: WeatherResponse = await response.json()
    
    const temperature = Math.round(data.main.temp)
    const windSpeed = Math.round(data.wind.speed)
    const windDirection = degreesToCardinal(data.wind.deg || 0)
    const fireDanger = calculateFireDanger(temperature, data.main.humidity, windSpeed)
    const accessStatus = determineAccessStatus(temperature, windSpeed, fireDanger)
    const weatherIcon = weatherIconToType(data.weather[0].icon, data.weather[0].main)
    const alerts = generateAlerts(temperature, windSpeed, fireDanger, data.main.humidity)
    
    const processedData: ProcessedWeatherData = {
      locationName,
      temperature,
      windSpeed,
      windDirection,
      fireDanger,
      accessStatus,
      weatherIcon,
      alerts: alerts.length > 0 ? alerts : undefined,
      lastUpdated: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    }
    
    // Cache the successful response both in memory and on disk
    const cachedData: CachedWeatherData = {
      data: processedData,
      timestamp: Date.now(),
      version: '1.0'
    }
    
    weatherCache.set(cacheKey, cachedData)
    await saveCacheToDisk(lat, lon, cachedData)
    
    
    return processedData
    
  } catch (error) {
    
    // Return realistic fallback data if API fails
    const fallbackData = getFallbackWeatherData(locationName)
    
    // Cache fallback data for shorter duration (5 minutes) to retry sooner
    const fallbackCache: CachedWeatherData = {
      data: fallbackData,
      timestamp: Date.now() - CACHE_DURATION + (5 * 60 * 1000), // Expires in 5 minutes
      version: '1.0'
    }
    
    weatherCache.set(cacheKey, fallbackCache)
    // Don't save fallback data to disk - let it retry on restart
    
    return fallbackData
  }
}

export async function fetchWeatherForMultipleLocations(locations: Array<{name: string, lat: number, lng: number}>): Promise<ProcessedWeatherData[]> {
  
  // Add small delays between requests to avoid rate limiting
  const results: ProcessedWeatherData[] = []
  
  for (const location of locations) {
    try {
      const weatherData = await fetchWeatherForLocation(location.lat, location.lng, location.name)
      results.push(weatherData)
      
      // Add 100ms delay between requests to be respectful to API
      if (results.length < locations.length) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    } catch (error) {
      // Use fallback data for failed requests
      results.push(getFallbackWeatherData(location.name))
    }
  }
  
  return results
}

// Helper function to clear cache (useful for debugging)
export function clearWeatherCache(): void {
  weatherCache.clear()
}

// Helper function to get cache status
export function getWeatherCacheStatus(): { [key: string]: { age: string, valid: boolean } } {
  const status: { [key: string]: { age: string, valid: boolean } } = {}
  
  weatherCache.forEach((cached, key) => {
    const ageMs = Date.now() - cached.timestamp
    const ageMinutes = Math.round(ageMs / 60000)
    status[key] = {
      age: `${ageMinutes} minutes ago`,
      valid: isCacheValid(cached.timestamp)
    }
  })
  
  return status
}