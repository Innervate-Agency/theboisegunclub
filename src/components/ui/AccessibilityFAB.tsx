"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Accessibility, Type, Eye, Settings, X } from "lucide-react"

const fabVariants = cva(
  "fixed bottom-6 right-6 z-50 rounded-full shadow-elevated transition-all duration-200 hover:scale-105 active:scale-95",
  {
    variants: {
      state: {
        closed: "w-14 h-14 bg-brass-yellow hover:bg-brass-yellow/90",
        open: "w-16 h-16 bg-gunmetal-black hover:bg-gunmetal-black/90"
      }
    },
    defaultVariants: {
      state: "closed"
    }
  }
)

const menuVariants = cva(
  "fixed bottom-20 right-6 z-40 bg-card border-border rounded-card shadow-premium p-base min-w-[280px] transition-all duration-200",
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
  initialFontSize?: number
  initialContrast?: boolean
}

export default function AccessibilityFAB({
  className,
  initialFontSize = 16,
  initialContrast = false,
  ...props
}: AccessibilityFABProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [fontSize, setFontSize] = React.useState(initialFontSize)
  const [highContrast, setHighContrast] = React.useState(initialContrast)

  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
    
    return () => {
      document.documentElement.style.fontSize = ''
      document.documentElement.classList.remove('high-contrast')
    }
  }, [fontSize, highContrast])

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24))
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12))
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev)
  }

  const resetAll = () => {
    setFontSize(16)
    setHighContrast(false)
  }

  return (
    <>
      {/* Main FAB Button */}
      <button
        className={cn(fabVariants({ state: isOpen ? "open" : "closed" }), className)}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={isOpen}
        {...props}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-nickel-white mx-auto" />
        ) : (
          <Accessibility className="w-6 h-6 text-gunmetal-black mx-auto" />
        )}
      </button>

      {/* Accessibility Menu */}
      <div
        className={cn(menuVariants({ open: isOpen }))}
        role="dialog"
        aria-label="Accessibility settings"
      >
        <div className="space-y-[var(--space-base)]">
          <h3 className="text-body-lg font-rajdhani font-bold text-popover-foreground">
            Accessibility Settings
          </h3>

          {/* Font Size Controls */}
          <div className="space-y-[var(--space-sm)]">
            <h4 className="text-body-sm font-medium text-case-hardened dark:text-tactical-gray flex items-center gap-xs">
              <Type className="w-4 h-4" />
              Font Size: {fontSize}px
            </h4>
            <div className="flex gap-xs">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize === 12}
                className="px-sm py-xs bg-muted text-popover-foreground rounded-input text-body-sm font-medium hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-sm py-xs bg-muted text-popover-foreground rounded-input text-body-sm font-medium hover:bg-muted/80 transition-colors"
                aria-label="Reset font size"
              >
                Reset
              </button>
              <button
                onClick={increaseFontSize}
                disabled={fontSize === 24}
                className="px-sm py-xs bg-muted text-popover-foreground rounded-input text-body-sm font-medium hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="space-y-[var(--space-sm)]">
            <h4 className="text-body-sm font-medium text-case-hardened dark:text-tactical-gray flex items-center gap-xs">
              <Eye className="w-4 h-4" />
              Display Options
            </h4>
            <button
              onClick={toggleHighContrast}
              className={cn(
                "w-full px-base py-sm rounded-input text-body-sm font-medium transition-colors text-left",
                highContrast 
                  ? "bg-brass-yellow text-gunmetal-black" 
                  : "bg-muted text-popover-foreground hover:bg-muted/80"
              )}
              aria-pressed={highContrast}
            >
              <div className="flex items-center justify-between">
                <span>High Contrast Mode</span>
                <div className={cn(
                  "w-10 h-6 rounded-full transition-colors relative",
                  highContrast ? "bg-gunmetal-black" : "bg-muted"
                )}>
                  <div className={cn(
                    "w-4 h-4 rounded-full bg-card absolute top-1 transition-transform",
                    highContrast ? "translate-x-5" : "translate-x-1"
                  )} />
                </div>
              </div>
            </button>
          </div>

          {/* Reset All Button */}
          <div className="pt-[var(--space-xs)] border-t border-border">
            <button
              onClick={resetAll}
              className="w-full px-base py-xs bg-copper-orange/10 hover:bg-copper-orange/20 text-popover-foreground rounded-input text-body-sm font-medium transition-colors flex items-center justify-center gap-xs"
              aria-label="Reset all accessibility settings"
            >
              <Settings className="w-4 h-4" />
              Reset All Settings
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        .high-contrast * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        .high-contrast a {
          text-decoration: underline !important;
        }
      `}</style>
    </>
  )
}
