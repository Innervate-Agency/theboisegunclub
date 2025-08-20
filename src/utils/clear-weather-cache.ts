// Utility to clear potentially corrupted weather cache data
export function clearWeatherCache() {
  if (typeof window === 'undefined') return
  
  try {
    const keysToRemove = [
      'boisegunclub_user_location',
      'boisegunclub_location_permission', 
      'boisegunclub_weather_data'
    ]
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
      console.log(`Cleared cache key: ${key}`)
    })
    
    console.log('Weather cache cleared successfully')
  } catch (err) {
    console.error('Failed to clear weather cache:', err)
  }
}

// Clear cache if it's corrupted or causing issues
export function validateAndClearCorruptedCache() {
  if (typeof window === 'undefined') return
  
  try {
    const locationCache = localStorage.getItem('boisegunclub_user_location')
    if (locationCache) {
      const parsed = JSON.parse(locationCache)
      // Check for invalid coordinates that might cause API errors
      if (parsed.lat !== null && (isNaN(parsed.lat) || parsed.lat < -90 || parsed.lat > 90)) {
        console.warn('Found invalid latitude in cache, clearing:', parsed.lat)
        clearWeatherCache()
        return true
      }
      if (parsed.lng !== null && (isNaN(parsed.lng) || parsed.lng < -180 || parsed.lng > 180)) {
        console.warn('Found invalid longitude in cache, clearing:', parsed.lng)
        clearWeatherCache()
        return true
      }
    }
  } catch (err) {
    console.warn('Cache validation failed, clearing all weather cache:', err)
    clearWeatherCache()
    return true
  }
  
  return false
}