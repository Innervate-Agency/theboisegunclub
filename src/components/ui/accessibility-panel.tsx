'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { 
  Settings, 
  Sun, 
  Moon, 
  Monitor, 
  Type, 
  Contrast, 
  Eye,
  MessageCircle,
  X,
  Minus,
  Plus
} from 'lucide-react'

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

// Custom hook for accessibility settings - optimized performance
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

const floatingButtonVariants = cva(
  "fixed z-50 rounded-full shadow-flat hover:shadow-present hover:bg-accent/10 transition-all duration-200",
  {
    variants: {
      variant: {
        accessibility: "mica-card text-card-foreground border border-border",
        chat: "mica-card text-card-foreground border border-border"
      },
      size: {
        default: "w-14 h-14",
        sm: "w-12 h-12"
      }
    },
    defaultVariants: {
      variant: "accessibility",
      size: "default"
    }
  }
)

interface AccessibilityPanelProps {
  className?: string
}

export function AccessibilityPanel({ className }: AccessibilityPanelProps) {
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
  const handleOpenPanel = React.useCallback(() => setIsOpen(true), [])
  const handleClosePanel = React.useCallback(() => setIsOpen(false), [])
  const handleChatClick = React.useCallback(() => {
    console.log('Chat clicked - replace with self-hosted solution')
  }, [])
  
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

  const handleResetAndClose = React.useCallback(() => {
    resetSettings()
    setTheme('system')
    setIsOpen(false)
  }, [resetSettings, setTheme])

  // Font size handlers with cleaner logic
  const handleFontSizeDecrease = React.useCallback(() => {
    if (fontSize === 'large') handleFontSizeChange('medium')
    else if (fontSize === 'medium') handleFontSizeChange('small')
  }, [fontSize, handleFontSizeChange])

  const handleFontSizeIncrease = React.useCallback(() => {
    if (fontSize === 'small') handleFontSizeChange('medium')
    else if (fontSize === 'medium') handleFontSizeChange('large')
  }, [fontSize, handleFontSizeChange])

  return (
    <>
      {/* Floating Accessibility Button - Bottom Left */}
      <Button
        className={cn(floatingButtonVariants({ variant: "accessibility" }), "bottom-md left-6")}
        onClick={handleOpenPanel}
        aria-label="Open accessibility panel"
      >
        <Settings className="h-6 w-6" />
      </Button>

      {/* Floating Chat Button - Bottom Right */}
      <Button
        className={cn(floatingButtonVariants({ variant: "chat", size: "sm" }), "bottom-md right-6")}
        onClick={handleChatClick}
        aria-label="Open support chat"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Accessibility Panel Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-sm bg-background/50">
          <div className="w-full max-w-md mica-modal border border-border rounded-sm shadow-elevated overflow-hidden">
            <div className="flex flex-row items-center justify-between p-md pb-4">
              <div className="flex items-center gap-sm">
                <div className="bg-muted p-tiny rounded-xs border border-border">
                  <Settings className="h-5 w-5 text-card-foreground" />
                </div>
                <h2 className="text-heading-lg font-rajdhani font-bold text-card-foreground">Accessibility</h2>
              </div>
              <Button
                variant="solid-primary"
                size="sm"
                onClick={handleClosePanel}
                aria-label="Close accessibility panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-md pt-0 space-y-base">
              {/* Theme Switcher */}
              <div className="space-y-3">
                <h3 className="font-medium text-card-foreground">Theme</h3>
                <div className="flex gap-tiny">
                  <Button
                    variant={theme === 'light' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleThemeChange('light')}
                    className="flex-1 gap-xs"
                    animationType="x-o"
                    animationState={theme === 'light'}
                  >
                    <Sun className="h-4 w-4" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleThemeChange('dark')}
                    className="flex-1 gap-xs"
                    animationType="x-o"
                    animationState={theme === 'dark'}
                  >
                    <Moon className="h-4 w-4" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleThemeChange('system')}
                    className="flex-1 gap-xs"
                    animationType="x-o"
                    animationState={theme === 'system'}
                  >
                    <Monitor className="h-4 w-4" />
                    System
                  </Button>
                </div>
              </div>

              {/* Font Size */}
              <div className="space-y-3">
                <h3 className="font-medium text-card-foreground">Text Size</h3>
                <div className="flex items-center gap-tiny">
                  <Button
                    variant="solid-primary"
                    size="sm"
                    onClick={handleFontSizeDecrease}
                    disabled={fontSize === 'small'}
                    animationType="none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">
                    <Badge variant="flat" className="capitalize">
                      {fontSize}
                    </Badge>
                  </div>
                  <Button
                    variant="solid-primary"
                    size="sm"
                    onClick={handleFontSizeIncrease}
                    disabled={fontSize === 'large'}
                    animationType="none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Contrast Mode */}
              <div className="space-y-3">
                <h3 className="font-medium text-card-foreground">Contrast</h3>
                <div className="flex gap-tiny">
                  <Button
                    variant={contrastMode === 'normal' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleContrastChange('normal')}
                    className="flex-1"
                  >
                    Normal
                  </Button>
                  <Button
                    variant={contrastMode === 'high' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleContrastChange('high')}
                    className="flex-1 gap-xs"
                  >
                    <Contrast className="h-4 w-4" />
                    High
                  </Button>
                </div>
              </div>

              {/* Color Vision */}
              <div className="space-y-3">
                <h3 className="font-medium text-card-foreground">Color Vision</h3>
                <div className="grid grid-cols-2 gap-tiny">
                  <Button
                    variant={colorBlindFilter === 'none' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleColorBlindFilterChange('none')}
                    className="gap-xs"
                  >
                    <Eye className="h-4 w-4" />
                    Normal
                  </Button>
                  <Button
                    variant={colorBlindFilter === 'protanopia' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleColorBlindFilterChange('protanopia')}
                    className="text-xs"
                  >
                    Protanopia
                  </Button>
                  <Button
                    variant={colorBlindFilter === 'deuteranopia' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleColorBlindFilterChange('deuteranopia')}
                    className="text-xs"
                  >
                    Deuteranopia
                  </Button>
                  <Button
                    variant={colorBlindFilter === 'tritanopia' ? 'solid-accent' : 'solid-primary'}
                    size="sm"
                    onClick={() => handleColorBlindFilterChange('tritanopia')}
                    className="text-xs"
                  >
                    Tritanopia
                  </Button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-2 border-t">
                <Button
                  variant="solid-primary"
                  size="sm"
                  onClick={handleResetAndClose}
                  className="w-full"
                >
                  Reset to Defaults
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
