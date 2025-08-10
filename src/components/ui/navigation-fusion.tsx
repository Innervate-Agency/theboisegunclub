'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigationFusionVariants = cva(
  "flex",
  {
    variants: {
      variant: {
        glass: "mica-card border-border/20 shadow-elevated",
        solid: "bg-card border border-border shadow-flat",
        minimal: "bg-transparent"
      },
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col items-stretch"
      },
      size: {
        sm: "p-xs",
        md: "p-sm",
        lg: "p-base"
      }
    },
    defaultVariants: {
      variant: "glass",
      orientation: "horizontal",
      size: "md"
    }
  }
)

const navigationItemVariants = cva(
  "flex items-center gap-xs px-sm py-xs rounded-sm transition-all duration-200 font-rajdhani font-semibold text-body-sm",
  {
    variants: {
      variant: {
        glass: "text-card-foreground hover:bg-card/50 hover:text-rusty-orange",
        solid: "text-card-foreground hover:bg-rusty-orange/10 hover:text-rusty-orange",
        minimal: "text-card-foreground hover:text-rusty-orange"
      },
      active: {
        true: "",
        false: ""
      },
      orientation: {
        horizontal: "flex-shrink-0",
        vertical: "w-full justify-start"
      }
    },
    compoundVariants: [
      {
        variant: "glass",
        active: true,
        class: "bg-sandy-ochre/20 text-sandy-ochre shadow-flat"
      },
      {
        variant: "solid",
        active: true,
        class: "bg-rusty-orange text-card-foreground shadow-flat"
      },
      {
        variant: "minimal",
        active: true,
        class: "text-sandy-ochre border-b-2 border-sandy-ochre"
      }
    ],
    defaultVariants: {
      variant: "glass",
      active: false,
      orientation: "horizontal"
    }
  }
)

interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export interface NavigationFusionProps 
  extends React.ComponentProps<"nav">,
    VariantProps<typeof navigationFusionVariants> {
  items: NavigationItem[]
  onItemClick?: (item: NavigationItem) => void
}

export function NavigationFusion({
  className,
  items,
  variant,
  orientation,
  size,
  onItemClick,
  ...props
}: NavigationFusionProps) {
  const handleItemClick = (item: NavigationItem) => {
    if (item.disabled) return
    
    item.onClick?.()
    onItemClick?.(item)
  }
  
  return (
    <nav 
      className={cn(
        navigationFusionVariants({ variant, orientation, size }), 
        orientation === "horizontal" ? "rounded-full" : "rounded-md",
        className
      )} 
      {...props}
    >
      {/* Glass morphism effect overlay */}
      {variant === "glass" && (
        <div className="absolute inset-0 bg-gradient-to-r from-sandy-ochre/5 via-transparent to-rusty-orange/5 rounded-inherit" />
      )}
      
      {/* Navigation Items */}
      <div className={cn(
        "relative flex",
        orientation === "horizontal" ? "flex-row gap-xs" : "flex-col gap-xs w-full"
      )}>
        {items.map((item, index) => {
          const isActive = item.active
          const isDisabled = item.disabled
          
          return (
            <button
              key={`${item.label}-${index}`}
              onClick={() => handleItemClick(item)}
              disabled={isDisabled}
              className={cn(
                navigationItemVariants({ 
                  variant, 
                  active: isActive, 
                  orientation 
                }),
                isDisabled && "opacity-50 cursor-not-allowed",
                "group relative overflow-hidden"
              )}
            >
              {/* Active item background effect */}
              {isActive && variant === "glass" && (
                <div className="absolute inset-0 bg-gradient-to-r from-sandy-ochre/20 to-rusty-orange/20 rounded-sm" />
              )}
              
              {/* Icon */}
              {item.icon && (
                <span className={cn(
                  "relative z-10 flex items-center justify-center",
                  isActive ? "text-current" : "text-current opacity-70 group-hover:opacity-100"
                )}>
                  {item.icon}
                </span>
              )}
              
              {/* Label */}
              <span className="relative z-10">
                {item.label}
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-sandy-ochre/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          )
        })}
      </div>
      
      {/* Active item indicator for minimal variant */}
      {variant === "minimal" && orientation === "horizontal" && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 flex">
          {items.map((item, index) => (
            <div
              key={`indicator-${index}`}
              className={cn(
                "flex-1 transition-all duration-300",
                item.active 
                  ? "bg-sandy-ochre" 
                  : "bg-transparent"
              )}
            />
          ))}
        </div>
      )}
    </nav>
  )
}
