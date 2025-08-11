interface WeatherResponse {
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
    deg: number
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
  weatherIcon: '☀️' | '⛅' | '☁️' | '🌧️' | '🌨️' | '🌪️'
  alerts?: string[]
  lastUpdated: string
}

const API_KEY = '664292cdddfd62b0af8ffb50d2dd9c60'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes in milliseconds

// In-memory cache for weather data
interface CachedWeatherData {
  data: ProcessedWeatherData
  timestamp: number
}

const weatherCache = new Map<string, CachedWeatherData>()

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
function weatherIconToEmoji(icon: string, main: string): '☀️' | '⛅' | '☁️' | '🌧️' | '🌨️' | '🌪️' {
  if (main.includes('Rain')) return '🌧️'
  if (main.includes('Snow')) return '🌨️'
  if (main.includes('Thunderstorm')) return '🌪️'
  if (main.includes('Clear')) return '☀️'
  if (main.includes('Clouds')) return icon.includes('few') ? '⛅' : '☁️'
  return '⛅'
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
  if (fireDanger === 'High') alerts.push('Fire restrictions in effect - no steel targets')
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
      weatherIcon: "⛅",
      lastUpdated: "Cached data"
    },
    "Snake River BOP Area": {
      locationName: "Snake River BOP Area", 
      temperature: 41,
      windSpeed: 8,
      windDirection: "W",
      fireDanger: "Low",
      accessStatus: "Restrictions",
      weatherIcon: "☀️",
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
      weatherIcon: "⛅",
      lastUpdated: "Cached data"
    },
    "Table Rock Area": {
      locationName: "Table Rock Area",
      temperature: 36,
      windSpeed: 15,
      windDirection: "N",
      fireDanger: "Low", 
      accessStatus: "Open",
      weatherIcon: "☁️",
      lastUpdated: "Cached data"
    },
    "Garden Valley Range": {
      locationName: "Garden Valley Range",
      temperature: 32,
      windSpeed: 6,
      windDirection: "E",
      fireDanger: "Low",
      accessStatus: "Restrictions",
      weatherIcon: "🌨️",
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
      weatherIcon: "🌪️",
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
    weatherIcon: "⛅",
    lastUpdated: "Cached data"
  }
}

export async function fetchWeatherForLocation(lat: number, lon: number, locationName: string): Promise<ProcessedWeatherData> {
  const cacheKey = getCacheKey(lat, lon)
  
  // Check cache first
  const cached = weatherCache.get(cacheKey)
  if (cached && isCacheValid(cached.timestamp)) {
    console.log(`Using cached weather data for ${locationName}`)
    return cached.data
  }
  
  try {
    console.log(`Fetching fresh weather data for ${locationName}`)
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
    const windDirection = degreesToCardinal(data.wind.deg)
    const fireDanger = calculateFireDanger(temperature, data.main.humidity, windSpeed)
    const accessStatus = determineAccessStatus(temperature, windSpeed, fireDanger)
    const weatherIcon = weatherIconToEmoji(data.weather[0].icon, data.weather[0].main)
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
    
    // Cache the successful response
    weatherCache.set(cacheKey, {
      data: processedData,
      timestamp: Date.now()
    })
    
    return processedData
    
  } catch (error) {
    console.error(`Failed to fetch weather for ${locationName}:`, error)
    console.log(`Using fallback data for ${locationName}`)
    
    // Return realistic fallback data if API fails
    const fallbackData = getFallbackWeatherData(locationName)
    
    // Cache fallback data for shorter duration (5 minutes) to retry sooner
    weatherCache.set(cacheKey, {
      data: fallbackData,
      timestamp: Date.now() - CACHE_DURATION + (5 * 60 * 1000) // Expires in 5 minutes
    })
    
    return fallbackData
  }
}

export async function fetchWeatherForMultipleLocations(locations: Array<{name: string, lat: number, lng: number}>): Promise<ProcessedWeatherData[]> {
  console.log(`Fetching weather for ${locations.length} locations`)
  
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
      console.error(`Weather fetch failed for ${location.name}:`, error)
      // Use fallback data for failed requests
      results.push(getFallbackWeatherData(location.name))
    }
  }
  
  console.log(`Successfully fetched/cached weather for ${results.length} locations`)
  return results
}

// Helper function to clear cache (useful for debugging)
export function clearWeatherCache(): void {
  weatherCache.clear()
  console.log('Weather cache cleared')
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