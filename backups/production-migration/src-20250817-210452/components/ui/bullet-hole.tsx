'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bulletHoleVariants = cva(
  "bullet-hole-effect",
  {
    variants: {
      size: {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4",
        xl: "w-6 h-6"
      },
      impact: {
        clean: "",
        cracked: "bullet-hole-cracked",
        scattered: "bullet-hole-scattered"
      }
    },
    defaultVariants: {
      size: "md",
      impact: "clean"
    }
  }
)

interface BulletHoleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bulletHoleVariants> {}

const BulletHole = React.forwardRef<HTMLDivElement, BulletHoleProps>(
  ({ className, size, impact, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(bulletHoleVariants({ size, impact, className }))}
        {...props}
      >
        <style jsx>{`
          .bullet-hole-effect {
            position: relative;
            border-radius: 50%;
            background: radial-gradient(circle, var(--color-gunmetal) 0%, var(--color-gunmetal) 40%, transparent 40%);
          }

          .bullet-hole-effect::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50%;
            background: radial-gradient(circle, transparent 60%, rgba(0,0,0,0.2) 61%, rgba(0,0,0,0.1) 70%, transparent 71%);
            pointer-events: none;
          }

          .bullet-hole-cracked::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200%;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, var(--color-gunmetal) 50%, transparent 100%);
            transform: translate(-50%, -50%) rotate(45deg);
            pointer-events: none;
          }

          .bullet-hole-scattered {
            box-shadow: 
              2px 3px 0 -1px var(--color-gunmetal),
              -1px 2px 0 -1px var(--color-gunmetal),
              1px -2px 0 -1px var(--color-gunmetal);
          }
        `}</style>
      </div>
    )
  }
)

BulletHole.displayName = "BulletHole"

export { BulletHole, bulletHoleVariants }