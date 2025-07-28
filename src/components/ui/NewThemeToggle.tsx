'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from 'lucide-react'
import { cn } from "@/lib/utils"

const themes = [
  { name: 'light', icon: Sun, label: 'Light' },
  { name: 'dark', icon: Moon, label: 'Dark' },
  { name: 'system', icon: Monitor, label: 'System' }
] as const

export interface NewThemeToggleProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'floating'
  showLabel?: boolean
}

export default function NewThemeToggle({ 
  className, 
  variant = 'default',
  showLabel = false,
  ...props 
}: NewThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div className={cn(
        variant === 'floating' && "fixed bottom-6 left-6 z-50",
        className
      )}>
        <Button
          variant="outline"
          size="icon"
          className="bg-white border-gray-200 shadow-sm"
          disabled
        >
          <Sun className="icon-sm" />
        </Button>
      </div>
    )
  }
  
  const currentThemeIndex = themes.findIndex(t => t.name === theme)
  const nextThemeIndex = (currentThemeIndex + 1) % themes.length
  const nextTheme = themes[nextThemeIndex]
  const currentThemeData = themes[currentThemeIndex] || themes[0]
  
  const handleToggle = () => {
    setTheme(nextTheme.name)
  }
  
  const CurrentIcon = currentThemeData.icon
  
  return (
    <div 
      className={cn(
        "flex items-center gap-2",
        variant === 'floating' && "fixed bottom-6 left-6 z-50",
        className
      )} 
      {...props}
    >
      <Button
        variant="outline"
        size={showLabel ? "default" : "icon"}
        onClick={handleToggle}
        className={cn(
          "bg-white border-gray-200 hover:bg-brass-yellow hover:border-brass-yellow shadow-sm transition-all duration-200 group",
          variant === 'floating' && "shadow-lg hover:shadow-xl"
        )}
        title={`Switch to ${nextTheme.label.toLowerCase()} theme`}
      >
        <CurrentIcon className="icon-sm group-hover:scale-110 transition-transform duration-200" />
        {showLabel && (
          <span className="ml-2 font-rajdhani font-semibold">
            {currentThemeData.label}
          </span>
        )}
      </Button>
      
      {/* Theme indicator dots */}
      {variant === 'floating' && (
        <div className="flex flex-col gap-1">
          {themes.map((themeData, index) => (
            <div
              key={themeData.name}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-200",
                index === currentThemeIndex 
                  ? "bg-brass-yellow" 
                  : "bg-gray-300"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
