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
import { Button } from "./button"
import { Badge } from "./badge"
import { useAccessibility } from "@/hooks/use-accessibility"

const fabVariants = cva(
  "fixed bottom-6 left-6 z-50 rounded-full shadow-present hover:shadow-elevated hover:bg-accent/10 transition-all duration-200 bg-card border border-border",
  {
    variants: {
      state: {
        closed: "w-14 h-14",
        open: "w-16 h-16"
      }
    },
    defaultVariants: {
      state: "closed"
    }
  }
)

const menuVariants = cva(
  "fixed left-28 bottom-6 z-40 mica-card shadow-elevated p-md min-w-[320px] max-w-[380px] max-h-[calc(100vh-6rem)] overflow-y-auto transition-all duration-200",
  {
    variants: {
      open: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-95 pointer-events-none"
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
          <X className="size-6 text-card-foreground mx-auto" />
        ) : (
          <Accessibility className="size-6 text-card-foreground mx-auto" />
        )}
      </button>

      {isOpen && (
        <div
          className={cn(menuVariants({ open: isOpen }))}
          role="dialog"
          aria-label="Accessibility settings"
        >
        <div className="space-y-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <div className="bg-muted p-tiny rounded-xs border border-border">
                <Settings className="size-5 text-card-foreground" />
              </div>
              <h2 className="text-heading-lg font-rajdhani font-bold text-card-foreground">Accessibility</h2>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Theme</h3>
            <div className="grid grid-cols-2 gap-tiny">
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={mounted && theme === "light"}
                onClick={() => handleThemeChange("light")}
                className={cn(
                  "gap-tiny",
                  mounted && theme === "light" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Sun className="size-4" />
                Light
              </Button>
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={mounted && theme === "dark"}
                onClick={() => handleThemeChange("dark")}
                className={cn(
                  "gap-tiny",
                  mounted && theme === "dark" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Moon className="size-4" />
                Fire Mode
              </Button>
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={mounted && theme === "system"}
                onClick={() => handleThemeChange("system")}
                className={cn(
                  "gap-tiny",
                  mounted && theme === "system" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Monitor className="size-4" />
                Auto
              </Button>
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={mounted && theme === "gruvbox"}
                onClick={() => handleThemeChange("gruvbox")}
                className={cn(
                  "gap-tiny",
                  mounted && theme === "gruvbox" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Eye className="size-4" />
                Night Ops
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Night Ops mode reduces eye strain for extended reading sessions
            </p>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Text Size</h3>
            <div className="flex items-center gap-tiny">
              <Button
                variant="flat"
                size="sm"
                animationType="none"
                onClick={handleFontSizeDecrease}
                disabled={fontSize === "small"}
              >
                <Minus className="size-4" />
              </Button>
              <div className="flex-1 text-center">
                <Badge variant="outline" className="capitalize">
                  {fontSize}
                </Badge>
              </div>
              <Button
                variant="flat"
                size="sm"
                animationType="none"
                onClick={handleFontSizeIncrease}
                disabled={fontSize === "large"}
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Contrast</h3>
            <div className="flex gap-tiny">
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={contrastMode === "normal"}
                onClick={() => handleContrastChange("normal")}
                className={cn(
                  "flex-1",
                  contrastMode === "normal" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                Normal
              </Button>
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={contrastMode === "high"}
                onClick={() => handleContrastChange("high")}
                className={cn(
                  "flex-1 gap-tiny",
                  contrastMode === "high" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Contrast className="size-4" />
                High
              </Button>
            </div>
          </div>

          <div className="space-y-sm">
            <h3 className="font-medium text-card-foreground">Color Vision</h3>
            <div className="grid grid-cols-2 gap-tiny">
              <Button
                variant="flat"
                size="sm"
                animationType="x-o"
                animationState={colorBlindFilter === "none"}
                onClick={() => handleColorBlindFilterChange("none")}
                className={cn(
                  "gap-tiny",
                  colorBlindFilter === "none" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                <Eye className="size-4" />
                Normal
              </Button>
              <Button
                variant="micro"
                animationType="x-o"
                animationState={colorBlindFilter === "protanopia"}
                onClick={() => handleColorBlindFilterChange("protanopia")}
                className={cn(
                  colorBlindFilter === "protanopia" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                Protanopia
              </Button>
              <Button
                variant="micro"
                animationType="x-o"
                animationState={colorBlindFilter === "deuteranopia"}
                onClick={() => handleColorBlindFilterChange("deuteranopia")}
                className={cn(
                  colorBlindFilter === "deuteranopia" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                Deuteranopia
              </Button>
              <Button
                variant="micro"
                animationType="x-o"
                animationState={colorBlindFilter === "tritanopia"}
                onClick={() => handleColorBlindFilterChange("tritanopia")}
                className={cn(
                  colorBlindFilter === "tritanopia" 
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground"
                )}
              >
                Tritanopia
              </Button>
            </div>
          </div>

          <div className="pt-sm border-t border-border/30">
            <Button
              variant="flat"
              size="sm"
              animationType="arrow"
              onClick={handleResetAll}
              className="w-full gap-tiny"
            >
              <Settings className="size-4" />
              Reset to Defaults
            </Button>
          </div>
        </div>
        </div>
      )}

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
