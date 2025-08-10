"use client"

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sectionDividerVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        // Rifling grooves - spiral pattern like barrel rifling
        rifling: "h-16 bg-gradient-to-r from-background via-muted/30 to-background",
        
        // Crosshair - clean geometric crosshair pattern
        crosshair: "h-12 bg-gradient-to-r from-background via-muted/20 to-background",
        
        // Sight alignment - three-dot pattern
        sights: "h-8 bg-gradient-to-r from-background via-muted/10 to-background",
        
        // Range target - concentric pattern
        target: "h-20 bg-gradient-to-r from-background via-muted/30 to-background",
        
        // Muzzle break - angular geometric cuts
        muzzle: "h-14 bg-gradient-to-r from-background via-muted/25 to-background",
        
        // Simple clean divider
        clean: "h-px bg-border"
      },
      spacing: {
        none: "my-0",
        sm: "my-8",
        md: "my-16", 
        lg: "my-24",
        xl: "my-32"
      }
    },
    defaultVariants: {
      variant: "crosshair",
      spacing: "md"
    }
  }
)

export interface SectionDividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionDividerVariants> {}

export function SectionDivider({ className, variant, spacing, ...props }: SectionDividerProps) {
  return (
    <div className={cn(sectionDividerVariants({ variant, spacing }), className)} {...props}>
      {/* Rifling Grooves Pattern */}
      {variant === "rifling" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative overflow-hidden">
            {/* Spiral groove lines */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent transform rotate-12 origin-center"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `-${10 + i * 5}%`,
                    right: `-${10 + i * 5}%`,
                    transform: `rotate(${2 + i * 1.5}deg)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Crosshair Pattern */}
      {variant === "crosshair" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Horizontal line */}
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          {/* Vertical line */}
          <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
          {/* Center dot */}
          <div className="w-1 h-1 rounded-pill bg-muted-foreground/40" />
        </div>
      )}
      
      {/* Three-Dot Sights Pattern */}
      {variant === "sights" && (
        <div className="absolute inset-0 flex items-center justify-center gap-(--spacing-5xl)">
          <div className="w-2 h-2 rounded-pill bg-muted-foreground/40" />
          <div className="w-3 h-3 rounded-pill bg-primary/60" />
          <div className="w-2 h-2 rounded-pill bg-muted-foreground/40" />
        </div>
      )}
      
      {/* Target Pattern */}
      {variant === "target" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-muted-foreground/20"
                style={{
                  width: `${(i + 1) * 20}px`,
                  height: `${(i + 1) * 20}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
            <div className="w-2 h-2 rounded-pill bg-primary/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      )}
      
      {/* Muzzle Break Pattern */}
      {variant === "muzzle" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Angular cuts */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent clip-path-muzzle" />
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 400 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 28 L50 8 L100 28 L150 8 L200 28 L250 8 L300 28 L350 8 L400 28 L350 48 L300 28 L250 48 L200 28 L150 48 L100 28 L50 48 L0 28 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-muted-foreground/30"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}