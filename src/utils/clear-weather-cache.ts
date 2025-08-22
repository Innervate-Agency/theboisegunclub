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
    })
    
  } catch (err) {
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
        clearWeatherCache()
        return true
      }
      if (parsed.lng !== null && (isNaN(parsed.lng) || parsed.lng < -180 || parsed.lng > 180)) {
        clearWeatherCache()
        return true
      }
    }
  } catch (err) {
    clearWeatherCache()
    return true
  }
  
  return false
}