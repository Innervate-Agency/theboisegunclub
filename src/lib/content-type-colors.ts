/**
 * Content Type Color System
 * 
 * Provides unified color mapping for content types across all pages
 * - Single colors for instant recognition
 * - Maximum 2-color gradients when needed
 * - Consistent theming site-wide
 */

export type ContentSection = 'events' | 'directory' | 'armory' | 'intel' | 'forums' | 'buysell'

// Content type color mapping
const CONTENT_TYPE_COLORS = {
  events: {
    Competition: 'rusty-orange',
    Training: 'slate-blue', 
    Expo: 'foothills-purple',
    Charity: 'sagebrush-green',
    Social: 'warm-stone',
    Championship: 'rusty-orange',
    'Youth Competition': 'slate-blue',
    'Fair Competition': 'foothills-purple',
    Fundraising: 'sagebrush-green',
  },
  directory: {
    'Gun Stores': 'nav-directory',
    'Ranges': 'rusty-orange',
    'Training': 'slate-blue',
    'Services': 'weathered-gold',
    'Dealers': 'nav-directory',
    'Shops': 'nav-directory',
  },
  armory: {
    'Pistols': 'canyon-clay',
    'Rifles': 'nav-armory',
    'Shotguns': 'foothills-purple', 
    'Accessories': 'weathered-gold',
    'Optics': 'weathered-gold',
    'Ammunition': 'rusty-orange',
  },
  intel: {
    'Public Ranges': 'sagebrush-green',
    'BLM Areas': 'nav-intel',
    'Private Clubs': 'weathered-gold',
    'Outdoor': 'sagebrush-green',
    'Indoor': 'slate-blue',
  },
  forums: {
    'General': 'nav-forums',
    'Technical': 'slate-blue',
    'Events': 'rusty-orange',
    'For Sale': 'weathered-gold',
  },
  buysell: {
    'Custom Work': 'nav-buysell',
    'Services': 'weathered-gold',
    'Equipment': 'slate-blue',
    'Experiences': 'rusty-orange',
  }
} as const

// Two-color gradients for cases where single color looks flat
const CONTENT_TYPE_GRADIENTS = {
  events: {
    Competition: ['rusty-orange', 'sandy-ochre'],
    Training: ['slate-blue', 'info-river'],
    Expo: ['foothills-purple', 'canyon-clay'],
    Charity: ['sagebrush-green', 'lodgepole-green'],
    Social: ['warm-stone', 'aged-paper'],
  },
  directory: {
    'Gun Stores': ['nav-directory'],
    'Ranges': ['rusty-orange', 'sandy-ochre'],
    'Training': ['slate-blue', 'info-river'],
    'Services': ['weathered-gold', 'sandy-ochre'],
  },
  armory: {
    'Pistols': ['canyon-clay'],
    'Rifles': ['nav-armory'],
    'Shotguns': ['foothills-purple', 'canyon-clay'],
    'Accessories': ['weathered-gold', 'sandy-ochre'],
  }
} as const

/**
 * Get single color for content type
 */
export function getContentTypeColor(
  section: ContentSection, 
  contentType: string
): string {
  const sectionColors = CONTENT_TYPE_COLORS[section]
  if (!sectionColors) return 'nav-events' // fallback
  
  return sectionColors[contentType as keyof typeof sectionColors] || 'nav-events'
}

/**
 * Get gradient colors (single color or 2-color max)
 */
export function getContentTypeGradient(
  section: ContentSection,
  contentType: string
): string[] {
  const sectionGradients = CONTENT_TYPE_GRADIENTS[section as keyof typeof CONTENT_TYPE_GRADIENTS]
  if (!sectionGradients) {
    const fallbackColor = getContentTypeColor(section, contentType)
    return [fallbackColor]
  }
  
  const gradient = sectionGradients[contentType as keyof typeof sectionGradients]
  if (!gradient) {
    const fallbackColor = getContentTypeColor(section, contentType)
    return [fallbackColor]
  }
  
  return gradient as string[]
}

/**
 * Generate CSS gradient string from colors
 */
export function generateGradientCSS(colors: string[], direction = 'to-br'): string {
  if (colors.length === 1) {
    return `bg-${colors[0]}`
  }
  
  // For two colors: from-color1 to-color2
  if (colors.length === 2) {
    return `bg-gradient-${direction} from-${colors[0]} to-${colors[1]}`
  }
  
  // For three colors (not recommended but supported): from-color1 via-color2 to-color3
  const [first, ...rest] = colors
  const last = rest.pop()
  const middle = rest.map(color => `via-${color}`).join(' ')
  
  return `bg-gradient-${direction} from-${first} ${middle} to-${last}`
}

/**
 * Generate CSS gradient for border (horizontal)
 */
export function generateBorderGradientCSS(colors: string[]): string {
  // Map color names to actual hex values for direct CSS use
  const colorMap: Record<string, string> = {
    'rusty-orange': '#D9863B',
    'sandy-ochre': '#D99F5D', 
    'slate-blue': '#3A5063',
    'info-river': '#5A7D8A',
    'foothills-purple': '#8B7AA8',
    'canyon-clay': '#B85450',
    'sagebrush-green': '#798246',
    'lodgepole-green': '#7D6702',
    'warm-stone': '#A69287',
    'aged-paper': '#F4F1E8',
    'weathered-gold': '#D4AF37',
    'nav-directory': '#4A7C59',
    'nav-armory': '#B7410E',
    'nav-intel': '#8B4A6B',
    'nav-forums': '#8B7355',
    'nav-buysell': '#2C7A7B',
    'nav-events': '#D4912A',
  }
  
  const getHexColor = (colorName: string) => colorMap[colorName] || '#D9863B'
  
  if (colors.length === 1) {
    const hex = getHexColor(colors[0])
    return `linear-gradient(90deg, ${hex} 0%, ${hex} 50%, ${hex} 100%)`
  }
  
  // Two colors - primary to accent and back
  const hex1 = getHexColor(colors[0])
  const hex2 = getHexColor(colors[1])
  return `linear-gradient(90deg, ${hex1} 0%, ${hex2} 50%, ${hex1} 100%)`
}

/**
 * Extract primary color from existing gradient string
 */
export function extractPrimaryColor(gradientString: string): string {
  // Extract first color from gradient classes like "bg-gradient-to-br from-rusty-orange via-canyon-clay"
  const fromMatch = gradientString.match(/from-([a-z-]+)/)
  if (fromMatch) return fromMatch[1]
  
  // Extract from single color classes like "bg-rusty-orange"
  const bgMatch = gradientString.match(/bg-([a-z-]+)/)
  if (bgMatch) return bgMatch[1]
  
  return 'rusty-orange' // fallback
}

/**
 * Get CSS variable name for color
 */
export function getColorVariable(colorName: string): string {
  return `var(--color-${colorName.replace(/-/g, '-')})`
}

/**
 * Get hex color for rgba shadow effects
 */
export function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    'rusty-orange': '#D9863B',
    'sandy-ochre': '#D99F5D', 
    'slate-blue': '#3A5063',
    'info-river': '#5A7D8A',
    'foothills-purple': '#8B7AA8',
    'canyon-clay': '#B85450',
    'sagebrush-green': '#798246',
    'lodgepole-green': '#7D6702',
    'warm-stone': '#A69287',
    'aged-paper': '#F4F1E8',
    'weathered-gold': '#D4AF37',
    'nav-directory': '#4A7C59',
    'nav-armory': '#B7410E',
    'nav-intel': '#8B4A6B',
    'nav-forums': '#8B7355',
    'nav-buysell': '#2C7A7B',
    'nav-events': '#D4912A',
  }
  
  return colorMap[colorName] || '#D9863B'
}

/**
 * Convert hex to rgba for shadow effects
 */
export function hexToRgba(hex: string, alpha: number = 0.4): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}