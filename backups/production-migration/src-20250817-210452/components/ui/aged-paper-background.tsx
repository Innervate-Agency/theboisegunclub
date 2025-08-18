'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const agedPaperVariants = cva(
  "aged-paper-container",
  {
    variants: {
      intensity: {
        light: "aged-paper-light",
        medium: "aged-paper-medium",
        heavy: "aged-paper-heavy"
      },
      texture: {
        smooth: "aged-paper-smooth",
        rough: "aged-paper-rough",
        crinkled: "aged-paper-crinkled"
      }
    },
    defaultVariants: {
      intensity: "medium",
      texture: "smooth"
    }
  }
)

interface AgedPaperBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof agedPaperVariants> {
  children: React.ReactNode
}

const AgedPaperBackground = React.forwardRef<HTMLDivElement, AgedPaperBackgroundProps>(
  ({ className, intensity, texture, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(agedPaperVariants({ intensity, texture, className }))}
        {...props}
      >
        <style jsx>{`
          .aged-paper-container {
            position: relative;
            background: var(--color-aged-paper);
          }

          .aged-paper-light {
            background-image: 
              radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(150, 75, 0, 0.03) 0%, transparent 50%);
          }

          .aged-paper-medium {
            background-image: 
              radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(150, 75, 0, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 50% 90%, rgba(112, 66, 20, 0.08) 0%, transparent 40%);
          }

          .aged-paper-heavy {
            background-image: 
              radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(150, 75, 0, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 90%, rgba(112, 66, 20, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 10% 60%, rgba(139, 69, 19, 0.06) 0%, transparent 30%);
          }

          .aged-paper-rough::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 1px,
                rgba(139, 69, 19, 0.02) 1px,
                rgba(139, 69, 19, 0.02) 2px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 1px,
                rgba(150, 75, 0, 0.02) 1px,
                rgba(150, 75, 0, 0.02) 2px
              );
            pointer-events: none;
          }

          .aged-paper-crinkled::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
              radial-gradient(ellipse at 25% 25%, rgba(0,0,0,0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 75%, rgba(0,0,0,0.02) 0%, transparent 50%),
              linear-gradient(135deg, transparent 48%, rgba(139, 69, 19, 0.02) 49%, rgba(139, 69, 19, 0.02) 51%, transparent 52%);
            pointer-events: none;
          }

          .aged-paper-smooth {
            position: relative;
          }

          .aged-paper-smooth::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255,255,255,0.1) 0%,
              transparent 25%,
              transparent 75%,
              rgba(139, 69, 19, 0.05) 100%
            );
            pointer-events: none;
          }
        `}</style>
        {children}
      </div>
    )
  }
)

AgedPaperBackground.displayName = "AgedPaperBackground"

export { AgedPaperBackground, agedPaperVariants }