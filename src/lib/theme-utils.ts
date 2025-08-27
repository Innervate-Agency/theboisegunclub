/**
 * Theme utility functions for proper @theme variable usage
 * Handles CSS custom property access and cross-theme compatibility
 */

// Get CSS custom property value with fallback
export function getCSSVariable(name: string, fallback?: string): string {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return fallback || `var(--${name})`
  }
  
  const value = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
  return value.trim() || fallback || `var(--${name})`
}

// Background variant utilities using proper CSS variables
export const backgroundVariants = {
  default: 'bg-[rgb(from_var(--background)_r_g_b_/_1)]',
  muted: 'bg-[rgb(from_var(--muted)_r_g_b_/_0.3)]',
  accent: 'bg-[rgb(from_var(--accent)_r_g_b_/_0.1)]',
  card: 'bg-[rgb(from_var(--card)_r_g_b_/_1)]',
  primary: 'bg-[rgb(from_var(--primary)_r_g_b_/_0.1)]'
} as const

// Generate inline styles for complex backgrounds
export function getBackgroundStyle(variant: keyof typeof backgroundVariants): React.CSSProperties {
  const styles: { [key: string]: React.CSSProperties } = {
    default: { 
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)'
    },
    muted: { 
      backgroundColor: 'rgb(from var(--muted) r g b / 0.3)',
      color: 'var(--foreground)'
    },
    accent: { 
      backgroundColor: 'rgb(from var(--accent) r g b / 0.1)',
      color: 'var(--foreground)'
    },
    card: { 
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)'
    },
    primary: { 
      backgroundColor: 'rgb(from var(--primary) r g b / 0.1)',
      color: 'var(--foreground)'
    }
  }
  
  return styles[variant] || styles.default
}

// Gradient background utilities
export function getGradientStyle(from: string, to: string, direction: string = 'to bottom'): React.CSSProperties {
  // Handle navigation colors with opacity for subtle gradients
  const getColorValue = (color: string) => {
    if (color.startsWith('nav-')) {
      return `rgb(from var(--${color}) r g b / 0.1)`
    }
    return `var(--${color})`
  }
  
  const fromColor = getColorValue(from)
  const toColor = getColorValue(to)
  
  return {
    background: `linear-gradient(${direction}, ${fromColor}, ${toColor})`,
    color: 'var(--foreground)'
  }
}

// Navigation color utilities
export function getNavColor(section: string): string {
  return `var(--nav-${section})`
}

// Theme-aware text color utilities
export const textVariants = {
  default: 'text-[rgb(from_var(--foreground)_r_g_b_/_1)]',
  muted: 'text-[rgb(from_var(--muted-foreground)_r_g_b_/_1)]',
  accent: 'text-[rgb(from_var(--accent-foreground)_r_g_b_/_1)]',
  primary: 'text-[rgb(from_var(--primary-foreground)_r_g_b_/_1)]'
} as const

// Utility to check current theme
export function getCurrentTheme(): 'light' | 'dark' | 'gruvbox' {
  if (typeof window === 'undefined') return 'light'
  
  const root = document.documentElement
  if (root.classList.contains('dark')) return 'dark'
  if (root.classList.contains('gruvbox')) return 'gruvbox'
  return 'light'
}

// Utility to apply theme-aware styles
export function withTheme<T extends Record<string, any>>(
  styles: {
    light?: T
    dark?: T
    gruvbox?: T
    default: T
  }
): T {
  const theme = getCurrentTheme()
  return styles[theme] || styles.default
}