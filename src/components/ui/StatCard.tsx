'use client'
import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const statCardVariants = cva(
  "relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        // STRATEGIC RESTRAINT: Shadow-first approach aligned with VendorCard principles
        // Default: Clean theme-aware shadows
        default: "bg-card text-card-foreground shadow-sm hover:shadow-md",
        
        // Premium: Sophisticated shadows with strategic gradient accent (like VendorCard copper)
        premium: "bg-card text-card-foreground shadow-md hover:shadow-lg relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/4 before:via-transparent before:to-copper-orange/3 before:rounded-lg before:pointer-events-none",
        
        // Elite: Premium shadows with enhanced accent (like VendorCard silver/gold)
        elite: "bg-card text-card-foreground shadow-lg hover:shadow-xl relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-copper-orange/6 before:via-transparent before:to-brass-yellow/4 before:rounded-lg before:pointer-events-none",
        
        // Glass: Modern mica with shadow sophistication
        glass: "mica-overlay text-card-foreground shadow-lg hover:shadow-xl backdrop-blur-sm relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Fire: Center-positioned gradient accent
        fire: "bg-card text-card-foreground shadow-md hover:shadow-lg relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Blue: Center-positioned cool gradient
        'fire-blue': "bg-card text-card-foreground shadow-md hover:shadow-lg relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Purple: Center-positioned purple gradient
        'fire-purple': "bg-card text-card-foreground shadow-md hover:shadow-lg relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Green: Center-positioned green gradient
        'fire-green': "bg-card text-card-foreground shadow-md hover:shadow-lg relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full"
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface StatCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof statCardVariants> {
  value: string | number
  label: string
  description?: string
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  icon?: React.ReactNode
}

export default function StatCard({ 
  className, 
  variant, 
  size, 
  value, 
  label, 
  description,
  trend,
  trendValue,
  icon,
  ...props 
}: StatCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      return val.toLocaleString()
    }
    return val
  }

  const getTextColors = (variant?: "default" | "premium" | "elite" | "glass" | "fire" | "fire-blue" | "fire-purple" | "fire-green") => {
    switch (variant) {
      case "glass":
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80", 
          icon: "text-copper-orange"
        }
      case "premium":
      case "elite":
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-brass-yellow"
        }
      case "fire":
      case "fire-blue": 
      case "fire-purple":
      case "fire-green":
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-copper-orange"
        }
      default:
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-brass-yellow"
        }
    }
  }

  const getTrendColor = (trend?: "up" | "down" | "neutral", variant?: "default" | "premium" | "elite" | "glass" | "fire" | "fire-blue" | "fire-purple" | "fire-green") => {
    const isSpecialVariant = variant === "premium" || variant === "elite" || variant?.startsWith("fire")
    
    switch (trend) {
      case "up":
        return isSpecialVariant ? "text-rifling-green" : "text-rifling-green"
      case "down":
        return isSpecialVariant ? "text-safety-red" : "text-safety-red"
      default:
        return isSpecialVariant ? "text-muted-foreground/70" : "text-muted-foreground"
    }
  }

  const getTrendIcon = (trend?: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "↗"
      case "down":
        return "↘"
      default:
        return "→"
    }
  }

  const textColors = getTextColors(variant || "default")

  return (
    <Card className={cn(statCardVariants({ variant, size }), className)} {...props}>
      <CardContent className="p-0">
        {icon && (
          <div className={cn("mb-3", textColors.icon)}>
            {icon}
          </div>
        )}
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className={cn("text-3xl font-rajdhani font-bold", textColors.title)}>
              {formatValue(value)}
            </h3>
            {trend && trendValue && (
              <div className={cn("text-sm font-medium flex items-center gap-1", getTrendColor(trend, variant || "default"))}>
                <span>{getTrendIcon(trend)}</span>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          
          <p className={cn("text-sm font-noto-sans uppercase tracking-wide", textColors.label)}>
            {label}
          </p>
          
          {description && (
            <p className={cn("text-xs mt-2", textColors.description)}>
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { StatCard }
