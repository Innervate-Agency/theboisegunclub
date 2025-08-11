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
        default: "bg-card text-card-foreground shadow-flat hover:shadow-md",
        
        // Premium: Consistent default shadows with strategic gradient accent
        premium: "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/4 before:via-transparent before:to-rusty-orange/3 before:rounded-card before:pointer-events-none",
        
        // Elite: Consistent default shadows with enhanced accent features
        elite: "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/6 before:via-transparent before:to-sandy-ochre/4 before:rounded-card before:pointer-events-none",
        
        // Glass: Modern mica with consistent default shadows
        glass: "mica-overlay text-card-foreground shadow-flat hover:shadow-md backdrop-blur-sm relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        
        // Fire: Consistent default shadows with center-positioned gradient accent
        fire: "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Blue: Consistent default shadows with center-positioned cool gradient
        'fire-blue': "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Purple: Consistent default shadows with center-positioned purple gradient
        'fire-purple': "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-purple after:to-slate-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full",
        
        // Fire Green: Consistent default shadows with center-positioned green gradient
        'fire-green': "bg-card text-card-foreground shadow-flat hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-green after:to-sagebrush-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full"
      },
      size: {
        sm: "p-base",
        default: "p-md",
        lg: "p-lg"
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
  subtitle?: string
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
          icon: "text-rusty-orange"
        }
      case "premium":
      case "elite":
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-sandy-ochre"
        }
      case "fire":
      case "fire-blue": 
      case "fire-purple":
      case "fire-green":
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-rusty-orange"
        }
      default:
        return {
          title: "text-foreground",
          label: "text-muted-foreground",
          description: "text-muted-foreground/80",
          icon: "text-sandy-ochre"
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
      <CardContent className="p-4">
        {icon && (
          <div className={cn("mb-4", textColors.icon)}>
            {icon}
          </div>
        )}
        
        <div className="space-y-0">
          <div className="flex items-center justify-between">
            <h3 className={cn("text-3xl font-rajdhani font-bold", textColors.title)}>
              {formatValue(value)}
            </h3>
            {trend && trendValue && (
              <div className={cn("text-body-sm font-medium flex items-center gap-xs", getTrendColor(trend, variant || "default"))}>
                <span>{getTrendIcon(trend)}</span>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          
          <p className={cn("text-body-sm font-noto-sans tracking-wide", textColors.label)}>
            {label}
          </p>
          
          {description && (
            <p className={cn("text-caption mt-[var(--space-xs)]", textColors.description)}>
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { StatCard }
