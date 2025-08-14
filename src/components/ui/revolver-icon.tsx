'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const revolverIconVariants = cva(
  "revolver-silhouette",
  {
    variants: {
      size: {
        sm: "w-8 h-5",
        md: "w-12 h-8",
        lg: "w-16 h-10",
        xl: "w-20 h-12"
      },
      orientation: {
        left: "",
        right: "scale-x-[-1]"
      },
      color: {
        gunmetal: "revolver-gunmetal",
        brass: "revolver-brass",
        iron: "revolver-iron",
        silver: "revolver-silver"
      }
    },
    defaultVariants: {
      size: "md",
      orientation: "right",
      color: "gunmetal"
    }
  }
)

interface RevolverIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof revolverIconVariants> {}

const RevolverIcon = React.forwardRef<HTMLDivElement, RevolverIconProps>(
  ({ className, size, orientation, color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(revolverIconVariants({ size, orientation, color, className }))}
        {...props}
      >
        <style jsx>{`
          .revolver-silhouette {
            position: relative;
            background: var(--revolver-color);
            border-radius: 0 0 15px 15px;
            filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
          }

          .revolver-silhouette::before {
            content: '';
            position: absolute;
            top: 60%;
            right: -40%;
            width: 42%;
            height: 20%;
            background: var(--revolver-color);
            border-radius: 0 4px 4px 0;
          }

          .revolver-silhouette::after {
            content: '';
            position: absolute;
            top: 20%;
            left: 25%;
            width: 20%;
            height: 20%;
            background: var(--revolver-color);
            border-radius: 50%;
          }

          .revolver-gunmetal {
            --revolver-color: var(--color-gunmetal);
          }

          .revolver-brass {
            --revolver-color: var(--color-brass);
          }

          .revolver-iron {
            --revolver-color: var(--color-iron-rust);
          }

          .revolver-silver {
            --revolver-color: var(--color-pale-stone);
          }

          /* Add a subtle highlight for realism */
          .revolver-silhouette:hover {
            filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3)) brightness(1.1);
            transition: filter 200ms ease;
          }
        `}</style>
      </div>
    )
  }
)

RevolverIcon.displayName = "RevolverIcon"

export { RevolverIcon, revolverIconVariants }