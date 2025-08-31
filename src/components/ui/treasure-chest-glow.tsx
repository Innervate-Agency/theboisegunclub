'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const treasureGlowVariants = cva(
  "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none",
  {
    variants: {
      size: {
        default: "w-96 h-48",
        lg: "w-[32rem] h-64",
        xl: "w-[40rem] h-80"
      },
      intensity: {
        subtle: "opacity-60",
        default: "opacity-80",
        bright: "opacity-100"
      }
    },
    defaultVariants: {
      size: "lg",
      intensity: "default"
    }
  }
)

export interface TreasureChestGlowProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof treasureGlowVariants> {
  animated?: boolean
}

export function TreasureChestGlow({
  className,
  size,
  intensity,
  animated = true,
  ...props
}: TreasureChestGlowProps) {
  return (
    <div
      className={cn(treasureGlowVariants({ size, intensity }), className)}
      {...props}
    >
      {/* Main radial glow */}
      <div 
        className={cn(
          "absolute inset-0 rounded-pill bg-treasure-glow-primary",
          animated && "animate-pulse"
        )}
      />
      
      {/* Inner bright core */}
      <div 
        className={cn(
          "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-32 h-16 rounded-pill bg-treasure-glow-secondary",
          animated && "animate-pulse"
        )}
      />
      
      {/* Subtle outer ring */}
      {animated && (
        <div 
          className="absolute inset-0 rounded-pill animate-ping bg-treasure-glow-ring"
        />
      )}
    </div>
  )
}