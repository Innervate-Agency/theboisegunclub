'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sheriffStarVariants = cva(
  "sheriff-star-shape",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6", 
        lg: "w-8 h-8",
        xl: "w-12 h-12"
      },
      color: {
        gold: "bg-weathered-gold",
        brass: "bg-brass",
        silver: "bg-card",
        copper: "bg-iron-rust"
      }
    },
    defaultVariants: {
      size: "md",
      color: "gold"
    }
  }
)

interface SheriffStarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheriffStarVariants> {
  badge?: string
}

const SheriffStar = React.forwardRef<HTMLDivElement, SheriffStarProps>(
  ({ className, size, color, badge, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sheriffStarVariants({ size, color, className }))}
        {...props}
      >
        <style jsx>{`
          .sheriff-star-shape {
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          .sheriff-star-shape::before {
            content: '';
            position: absolute;
            inset: 2px;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.2) 100%);
            pointer-events: none;
          }
        `}</style>
        
        {badge && (
          <span className="text-body-xs font-bold text-gunmetal absolute inset-0 flex items-center justify-center font-rajdhani uppercase">
            {badge}
          </span>
        )}
      </div>
    )
  }
)

SheriffStar.displayName = "SheriffStar"

export { SheriffStar, sheriffStarVariants }