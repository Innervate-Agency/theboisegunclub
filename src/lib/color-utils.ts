/**
 * Color utility functions for dynamic CSS color generation
 * Handles cross-browser compatibility for CSS color functions
 */

export function getCSSColorVar(colorName: string, alpha: number = 1): string {
  // Handle different color variable formats
  const cleanColorName = colorName.replace(/^(bg-|text-|border-)/, '')
  
  // Check if it's a navigation color
  if (cleanColorName.startsWith('nav-')) {
    return `rgb(from var(--${cleanColorName}) r g b / ${alpha})`
  }
  
  // Handle standard CSS variables
  return `rgb(from var(--color-${cleanColorName}) r g b / ${alpha})`
}

export function getNavigationColor(section: string, alpha: number = 1): string {
  const colorMap: { [key: string]: string } = {
    home: 'var(--nav-home)',
    events: 'var(--nav-events)', 
    directory: 'var(--nav-directory)',
    armory: 'var(--nav-armory)',
    intel: 'var(--nav-intel)',
    buysell: 'var(--nav-buysell)',
    forums: 'var(--nav-forums)'
  }
  
  const colorVar = colorMap[section] || colorMap.home
  return `rgb(from ${colorVar} r g b / ${alpha})`
}

// Fallback for older browsers that don't support rgb(from ...)
export function getFallbackColor(section: string, alpha: number = 1): string {
  const fallbackColors: { [key: string]: string } = {
    'nav-home': '#964B00',
    'nav-events': '#D4912A', 
    'nav-directory': '#4A7C59',
    'nav-armory': '#B7410E',
    'nav-intel': '#8B4A6B',
    'nav-buysell': '#B8860B',
    'nav-forums': '#8B7355'
  }
  
  const color = fallbackColors[section] || fallbackColors['nav-home']
  
  // Convert hex to rgba
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)  
  const b = parseInt(hex.substr(4, 2), 16)
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function generateFloatingElementStyle(colorName: string, alpha: number = 0.3) {
  return {
    backgroundColor: getCSSColorVar(colorName, alpha),
    // Fallback for older browsers
    '--fallback-bg': getFallbackColor(colorName, alpha)
  }
}