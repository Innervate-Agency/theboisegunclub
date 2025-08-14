'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ropeBorderVariants = cva(
  "rope-border-container",
  {
    variants: {
      thickness: {
        thin: "rope-border-thin",
        medium: "rope-border-medium", 
        thick: "rope-border-thick"
      },
      style: {
        classic: "rope-border-classic",
        weathered: "rope-border-weathered",
        braided: "rope-border-braided"
      }
    },
    defaultVariants: {
      thickness: "medium",
      style: "classic"
    }
  }
)

interface RopeBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ropeBorderVariants> {
  children: React.ReactNode
}

const RopeBorder = React.forwardRef<HTMLDivElement, RopeBorderProps>(
  ({ className, thickness, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(ropeBorderVariants({ thickness, style, className }))}
        {...props}
      >
        <style jsx>{`
          .rope-border-container {
            position: relative;
            padding: 1rem;
          }

          .rope-border-thin {
            border: 2px solid;
            border-image: repeating-linear-gradient(
              45deg,
              var(--color-saloon-wood) 0px,
              var(--color-saloon-wood) 8px,
              var(--color-leather-brown) 8px,
              var(--color-leather-brown) 16px
            ) 2;
          }

          .rope-border-medium {
            border: 3px solid;
            border-image: repeating-linear-gradient(
              45deg,
              var(--color-saloon-wood) 0px,
              var(--color-saloon-wood) 10px,
              var(--color-leather-brown) 10px,
              var(--color-leather-brown) 20px
            ) 3;
          }

          .rope-border-thick {
            border: 4px solid;
            border-image: repeating-linear-gradient(
              45deg,
              var(--color-saloon-wood) 0px,
              var(--color-saloon-wood) 12px,
              var(--color-leather-brown) 12px,
              var(--color-leather-brown) 24px
            ) 4;
          }

          .rope-border-weathered {
            border-image: repeating-linear-gradient(
              45deg,
              var(--color-dust-brown) 0px,
              var(--color-dust-brown) 10px,
              var(--color-iron-rust) 10px,
              var(--color-iron-rust) 20px,
              var(--color-sepia-dark) 20px,
              var(--color-sepia-dark) 30px
            ) 3;
          }

          .rope-border-braided {
            border-image: repeating-conic-gradient(
              from 0deg,
              var(--color-saloon-wood) 0deg 60deg,
              var(--color-leather-brown) 60deg 120deg,
              var(--color-dust-brown) 120deg 180deg
            ) 3;
          }

          .rope-border-classic::before {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            background: linear-gradient(45deg, rgba(139, 69, 19, 0.1), rgba(150, 75, 0, 0.1));
            z-index: -1;
            pointer-events: none;
          }
        `}</style>
        {children}
      </div>
    )
  }
)

RopeBorder.displayName = "RopeBorder"

export { RopeBorder, ropeBorderVariants }