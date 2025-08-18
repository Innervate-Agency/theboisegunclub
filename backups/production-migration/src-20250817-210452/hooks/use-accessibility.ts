"use client"

import * as React from "react"

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

type FontSize = "small" | "medium" | "large"
type ContrastMode = "normal" | "high"
type ColorBlindFilter = "none" | "protanopia" | "deuteranopia" | "tritanopia"

// Optimized accessibility settings hook
export function useAccessibility() {
  const [fontSize, setFontSize] = React.useState<FontSize>("medium")
  const [contrastMode, setContrastMode] = React.useState<ContrastMode>("normal")
  const [colorBlindFilter, setColorBlindFilter] = React.useState<ColorBlindFilter>("none")

  const debouncedFontSize = useDebounce(fontSize, 100)
  const debouncedContrastMode = useDebounce(contrastMode, 100)
  const debouncedColorBlindFilter = useDebounce(colorBlindFilter, 100)

  React.useLayoutEffect(() => {
    const root = document.documentElement
    const style = root.style

    const fontScales = { small: "0.875", medium: "1", large: "1.125" }
    style.setProperty("--accessibility-font-scale", fontScales[debouncedFontSize])
    root.setAttribute("data-accessibility-font-size", debouncedFontSize)

    const contrastValues = { normal: "1", high: "1.3" }
    style.setProperty("--accessibility-contrast", contrastValues[debouncedContrastMode])
    root.setAttribute("data-accessibility-contrast", debouncedContrastMode)

    const filterMap = {
      none: "none",
      protanopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'protanopia\'%3E%3CfeColorMatrix values=\'0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#protanopia")',
      deuteranopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'deuteranopia\'%3E%3CfeColorMatrix values=\'0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#deuteranopia")',
      tritanopia: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'tritanopia\'%3E%3CfeColorMatrix values=\'0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0\'/%3E%3C/filter%3E%3C/svg%3E#tritanopia")'
    }
    style.setProperty("--accessibility-filter", filterMap[debouncedColorBlindFilter])

  }, [debouncedFontSize, debouncedContrastMode, debouncedColorBlindFilter])

  const resetSettings = React.useCallback(() => {
    setFontSize("medium")
    setContrastMode("normal")
    setColorBlindFilter("none")
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
