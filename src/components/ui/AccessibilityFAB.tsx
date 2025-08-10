"use client"

import * as React from "react"
import { useTheme } from 'next-themes'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { 
  Accessibility, 
  Type, 
  Eye, 
  Settings, 
  X, 
  Sun, 
  Moon, 
  Monitor, 
  Contrast,
  Minus,
  Plus
} from "lucide-react"

// Debounce hook for performance optimization
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

type FontSize = 'small' | 'medium' | 'large'
type ContrastMode = 'normal' | 'high'
type ColorBlindFilter = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia'

// Optimized accessibility settings hook
function useAccessibilitySettings() {
  const [fontSize, setFontSize] = React.useState<FontSize>('medium')
  const [contrastMode, setContrastMode] = React.useState<ContrastMode>('normal')
  const [colorBlindFilter, setColorBlindFilter] = React.useState<ColorBlindFilter>('none')

  // Debounce all settings to prevent excessive DOM updates
  const debouncedFontSize = useDebounce(fontSize, 100)
  const debouncedContrastMode = useDebounce(contrastMode, 100)
  const debouncedColorBlindFilter = useDebounce(colorBlindFilter, 100)

  // Single optimized effect using useLayoutEffect to prevent flicker
  React.useLayoutEffect(() => {
    const root = document.documentElement
    const style = root.style

    // Update CSS custom properties instead of classList manipulation
    // Font size scaling
    const fontScales = { small: '0.875', medium: '1', large: '1.125' }
    style.setProperty('--accessibility-font-scale', fontScales[debouncedFontSize])
    root.setAttribute('data-accessibility-font-size', debouncedFontSize)

    // Contrast mode
    const contrastValues = { normal: '1', high: '1.3' }
    style.setProperty('--accessibility-contrast', contrastValues[debouncedContrastMode])
    root.setAttribute('data-accessibility-contrast', debouncedContrastMode)

    // Color blind filters
    const filterMap = {
      none: 'none',
      protanopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'protanopia\'%3E%3CfeColorMatrix values=\'0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#protanopia")',
      deuteranopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'deuteranopia\'%3E%3CfeColorMatrix values=\'0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#deuteranopia")',
      tritanopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'tritanopia\'%3E%3CfeColorMatrix values=\'0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#tritanopia")'
    }
    style.setProperty('--accessibility-filter', filterMap[debouncedColorBlindFilter])

    // Performance: batch all DOM updates in a single layout operation
  }, [debouncedFontSize, debouncedContrastMode, debouncedColorBlindFilter])

  const resetSettings = React.useCallback(() => {
    setFontSize('medium')
    setContrastMode('normal')
    setColorBlindFilter('none')
  }, [])

  return {
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    colorBlindFilter,
    setColorBlindFilter,
    resetSettings
  }
}

const fabVariants = cva(
  "fixed bottom-6 left-6 z-50 rounded-full shadow-flat hover:shadow-elevated transition-all duration-200",
  {
    variants: {
      state: {
        closed: "w-14 h-14 mica border border-border hover:shadow-elevated",
        open: "w-16 h-16 mica border border-border hover:shadow-elevated"
      }
    },
    defaultVariants: {
      state: "closed"
    }
  }
)

const menuVariants = cva(
  "fixed bottom-20 left-6 z-40 mica border border-border rounded-sm shadow-md hover:shadow-elevated p-6 min-w-[320px] max-w-[380px] transition-all duration-200",
  {
    variants: {
      open: {
        true: "opacity-100 scale-100 translate-y-0",
        false: "opacity-0 scale-95 translate-y-2 pointer-events-none"
      }
    },
    defaultVariants: {
      open: false
    }
  }
)

export interface AccessibilityFABProps 
  extends React.ComponentProps<"button">,
    VariantProps<typeof fabVariants> {
  className?: string
}

export default function AccessibilityFAB({
  className,
  ...props
}: AccessibilityFABProps) {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  
  // Use optimized accessibility hook instead of multiple useEffect hooks
  const {
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    colorBlindFilter,
    setColorBlindFilter,
    resetSettings
  } = useAccessibilitySettings()

  // Memoize theme icon to prevent unnecessary re-renders
  const ThemeIcon = React.useMemo(() => {
    return theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor
  }, [theme])

  // Memoize event handlers for performance
  const handleTogglePanel = React.useCallback(() => setIsOpen(!isOpen), [isOpen])
  const handleClosePanel = React.useCallback(() => setIsOpen(false), [])
  
  const handleThemeChange = React.useCallback((newTheme: string) => {
    setTheme(newTheme)
  }, [setTheme])

  const handleFontSizeChange = React.useCallback((newSize: FontSize) => {
    setFontSize(newSize)
  }, [setFontSize])

  const handleContrastChange = React.useCallback((newContrast: ContrastMode) => {
    setContrastMode(newContrast)
  }, [setContrastMode])

  const handleColorBlindFilterChange = React.useCallback((newFilter: ColorBlindFilter) => {
    setColorBlindFilter(newFilter)
  }, [setColorBlindFilter])

  // Font size handlers with cleaner logic
  const handleFontSizeDecrease = React.useCallback(() => {
    if (fontSize === 'large') handleFontSizeChange('medium')
    else if (fontSize === 'medium') handleFontSizeChange('small')
  }, [fontSize, handleFontSizeChange])

  const handleFontSizeIncrease = React.useCallback(() => {
    if (fontSize === 'small') handleFontSizeChange('medium')
    else if (fontSize === 'medium') handleFontSizeChange('large')
  }, [fontSize, handleFontSizeChange])

  const handleResetAll = React.useCallback(() => {
    resetSettings()
    setTheme('system')
  }, [resetSettings, setTheme])

  return (
    <>
      {/* Main FAB Button */}
      <button
        className={cn(fabVariants({ state: isOpen ? "open" : "closed" }), className)}
        onClick={handleTogglePanel}
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={isOpen}
        {...props}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-card-foreground mx-auto" />
        ) : (
          <Accessibility className="w-6 h-6 text-card-foreground mx-auto" />
        )}
      </button>

      {/* Accessibility Menu */}
      <div
        className={cn(menuVariants({ open: isOpen }))}
        role="dialog"
        aria-label="Accessibility settings"
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-md border border-border">
                <Settings className="h-5 w-5 text-card-foreground" />
              </div>
              <h2 className="text-lg font-rajdhani font-bold text-card-foreground">Accessibility</h2>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="space-y-3">
            <h3 className="font-medium text-card-foreground">Theme</h3>
            <div className="flex gap-2">
              <button
                className={cn(
                  "flex-1 gap-2 px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  theme === 'light' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange('light')}
              >
                <Sun className="h-4 w-4" />
                Light
              </button>
              <button
                className={cn(
                  "flex-1 gap-2 px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  theme === 'dark' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange('dark')}
              >
                <Moon className="h-4 w-4" />
                Dark
              </button>
              <button
                className={cn(
                  "flex-1 gap-2 px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  theme === 'system' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange('system')}
              >
                <Monitor className="h-4 w-4" />
                System
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <h3 className="font-medium text-card-foreground">Text Size</h3>
            <div className="flex items-center gap-2">
              <button
                className="bg-muted hover:bg-muted/80 text-card-foreground px-3 py-2 rounded-input text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFontSizeDecrease}
                disabled={fontSize === 'small'}
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex-1 text-center">
                <div className="bg-rusty-orange/10 text-rusty-orange px-3 py-1 rounded-input text-sm font-medium capitalize">
                  {fontSize}
                </div>
              </div>
              <button
                className="bg-muted hover:bg-muted/80 text-card-foreground px-3 py-2 rounded-input text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFontSizeIncrease}
                disabled={fontSize === 'large'}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Contrast Mode */}
          <div className="space-y-3">
            <h3 className="font-medium text-card-foreground">Contrast</h3>
            <div className="flex gap-2">
              <button
                className={cn(
                  "flex-1 px-3 py-2 rounded-input text-sm font-medium transition-colors",
                  contrastMode === 'normal' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleContrastChange('normal')}
              >
                Normal
              </button>
              <button
                className={cn(
                  "flex-1 gap-2 px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  contrastMode === 'high' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleContrastChange('high')}
              >
                <Contrast className="h-4 w-4" />
                High
              </button>
            </div>
          </div>

          {/* Color Vision */}
          <div className="space-y-3">
            <h3 className="font-medium text-card-foreground">Color Vision</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={cn(
                  "gap-2 px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  colorBlindFilter === 'none' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange('none')}
              >
                <Eye className="h-4 w-4" />
                Normal
              </button>
              <button
                className={cn(
                  "px-2 py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === 'protanopia' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange('protanopia')}
              >
                Protanopia
              </button>
              <button
                className={cn(
                  "px-2 py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === 'deuteranopia' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange('deuteranopia')}
              >
                Deuteranopia
              </button>
              <button
                className={cn(
                  "px-2 py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === 'tritanopia' 
                    ? "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30" 
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange('tritanopia')}
              >
                Tritanopia
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-2 border-t border-border/30">
            <button
              className="w-full bg-muted hover:bg-muted/80 text-card-foreground px-3 py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center gap-2"
              onClick={handleResetAll}
            >
              <Settings className="h-4 w-4" />
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/20 backdrop-blur-sm"
          onClick={handleClosePanel}
          aria-hidden="true"
        />
      )}
    </>
  )
}
