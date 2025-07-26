'use client'
import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const statCardVariants = cva(
  "relative overflow-hidden transition-stripe-fast hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-shooting-bench border-case-hardened/20",
        premium: "bg-gradient-premium border-brass-yellow/30 mica-premium",
        elite: "bg-gradient-elite border-brass-yellow/40 mica-elite animate-shimmer",
        glass: "backdrop-blur-sm bg-shooting-bench/20 border-brass-yellow/30"
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

  const getTrendColor = (trend?: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "text-rifling-green"
      case "down":
        return "text-safety-red"
      default:
        return "text-case-hardened"
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

  return (
    <Card className={cn(statCardVariants({ variant, size }), className)} {...props}>
      <CardContent className="p-0">
        {icon && (
          <div className="mb-3 text-brass-yellow">
            {icon}
          </div>
        )}
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-rajdhani font-bold text-blued-steel">
              {formatValue(value)}
            </h3>
            {trend && trendValue && (
              <div className={cn("text-sm font-medium flex items-center gap-1", getTrendColor(trend))}>
                <span>{getTrendIcon(trend)}</span>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          
          <p className="text-sm font-noto-sans text-case-hardened uppercase tracking-wide">
            {label}
          </p>
          
          {description && (
            <p className="text-xs text-case-hardened/80 mt-2">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
