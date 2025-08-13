"use client"

import * as React from "react"
import { useTheme } from "next-themes"
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
import { useAccessibility } from "@/hooks/use-accessibility"

const fabVariants = cva(
  "fixed bottom-md left-6 z-50 rounded-full shadow-present hover:shadow-elevated transition-all duration-200",
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
  "fixed bottom-24 left-6 z-40 mica border border-border rounded-sm shadow-present hover:shadow-elevated p-md min-w-[320px] max-w-[380px] transition-all duration-200",
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
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const {
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    colorBlindFilter,
    setColorBlindFilter,
    resetSettings
  } = useAccessibility()

  const ThemeIcon = React.useMemo(() => {
    if (!mounted) return Monitor
    return theme === "light" ? Sun : theme === "dark" ? Moon : Monitor
  }, [theme, mounted])

  const handleTogglePanel = React.useCallback(() => setIsOpen(!isOpen), [isOpen])
  const handleClosePanel = React.useCallback(() => setIsOpen(false), [])
  
  const handleThemeChange = React.useCallback((newTheme: string) => {
    setTheme(newTheme)
  }, [setTheme])

  const handleFontSizeChange = React.useCallback((newSize: "small" | "medium" | "large") => {
    setFontSize(newSize)
  }, [setFontSize])

  const handleContrastChange = React.useCallback((newContrast: "normal" | "high") => {
    setContrastMode(newContrast)
  }, [setContrastMode])

  const handleColorBlindFilterChange = React.useCallback((newFilter: "none" | "protanopia" | "deuteranopia" | "tritanopia") => {
    setColorBlindFilter(newFilter)
  }, [setColorBlindFilter])

  const handleFontSizeDecrease = React.useCallback(() => {
    if (fontSize === "large") handleFontSizeChange("medium")
    else if (fontSize === "medium") handleFontSizeChange("small")
  }, [fontSize, handleFontSizeChange])

  const handleFontSizeIncrease = React.useCallback(() => {
    if (fontSize === "small") handleFontSizeChange("medium")
    else if (fontSize === "medium") handleFontSizeChange("large")
  }, [fontSize, handleFontSizeChange])

  const handleResetAll = React.useCallback(() => {
    resetSettings()
    setTheme("system")
  }, [resetSettings, setTheme])

  return (
    <>
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

      <div
        className={cn(menuVariants({ open: isOpen }))}
        role="dialog"
        aria-label="Accessibility settings"
      >
        <div className="space-y-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <div className="bg-muted p-tiny rounded-xs border border-border">
                <Settings className="h-5 w-5 text-card-foreground" />
              </div>
              <h2 className="text-lg font-rajdhani font-bold text-card-foreground">Accessibility</h2>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Theme</h3>
            <div className="grid grid-cols-2 gap-tiny">
              <button
                className={cn(
                  "gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  mounted && theme === "light" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange("light")}
              >
                <Sun className="h-4 w-4" />
                Light
              </button>
              <button
                className={cn(
                  "gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  mounted && theme === "dark" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange("dark")}
              >
                <Moon className="h-4 w-4" />
                Fire Mode
              </button>
              <button
                className={cn(
                  "gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  mounted && theme === "system" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange("system")}
              >
                <Monitor className="h-4 w-4" />
                Auto
              </button>
              <button
                className={cn(
                  "gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  mounted && theme === "gruvbox" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleThemeChange("gruvbox")}
              >
                <Eye className="h-4 w-4" />
                Night Ops
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Night Ops mode reduces eye strain for extended reading sessions
            </p>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Text Size</h3>
            <div className="flex items-center gap-tiny">
              <button
                className="bg-muted hover:bg-muted/80 text-card-foreground px-sm py-2 rounded-input text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFontSizeDecrease}
                disabled={fontSize === "small"}
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex-1 text-center">
                <div className="bg-primary/10 text-primary px-sm py-1 rounded-input text-sm font-medium capitalize">
                  {fontSize}
                </div>
              </div>
              <button
                className="bg-muted hover:bg-muted/80 text-card-foreground px-sm py-2 rounded-input text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleFontSizeIncrease}
                disabled={fontSize === "large"}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Contrast</h3>
            <div className="flex gap-tiny">
              <button
                className={cn(
                  "flex-1 px-sm py-2 rounded-input text-sm font-medium transition-colors",
                  contrastMode === "normal" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleContrastChange("normal")}
              >
                Normal
              </button>
              <button
                className={cn(
                  "flex-1 gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  contrastMode === "high" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleContrastChange("high")}
              >
                <Contrast className="h-4 w-4" />
                High
              </button>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Color Vision</h3>
            <div className="grid grid-cols-2 gap-tiny">
              <button
                className={cn(
                  "gap-tiny px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center",
                  colorBlindFilter === "none" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange("none")}
              >
                <Eye className="h-4 w-4" />
                Normal
              </button>
              <button
                className={cn(
                  "px-tiny py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === "protanopia" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange("protanopia")}
              >
                Protanopia
              </button>
              <button
                className={cn(
                  "px-tiny py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === "deuteranopia" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange("deuteranopia")}
              >
                Deuteranopia
              </button>
              <button
                className={cn(
                  "px-tiny py-2 rounded-input text-xs font-medium transition-colors",
                  colorBlindFilter === "tritanopia" 
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-card-foreground hover:bg-muted/80"
                )}
                onClick={() => handleColorBlindFilterChange("tritanopia")}
              >
                Tritanopia
              </button>
            </div>
          </div>

          <div className="pt-sm border-t border-border/30">
            <button
              className="w-full bg-muted hover:bg-muted/80 text-card-foreground px-sm py-2 rounded-input text-sm font-medium transition-colors flex items-center justify-center gap-tiny"
              onClick={handleResetAll}
            >
              <Settings className="h-4 w-4" />
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

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
