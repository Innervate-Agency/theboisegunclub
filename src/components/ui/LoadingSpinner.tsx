'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const loadingSpinnerVariants = cva(
  "animate-spin rounded-full border-solid",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3", 
        lg: "h-12 w-12 border-4"
      },
      variant: {
        default: "border-sandy-ochre/30 border-t-sandy-ochre",
        copper: "border-rusty-orange/30 border-t-rusty-orange",
        accent: "border-scope-blue/30 border-t-scope-blue"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
)

export interface LoadingSpinnerProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof loadingSpinnerVariants> {
  text?: string
  showText?: boolean
}

function LoadingSpinner({
  className,
  size,
  variant,
  text = "Loading...",
  showText = true,
  ...props
}: LoadingSpinnerProps) {
  const shouldShowText = showText && text && text.trim() !== ""
  
  return (
    <div className={cn("flex flex-col items-center gap-sm", className)} {...props}>
      {/* Clay Target Spinner */}
      <div className="relative">
        {/* Outer ring - represents clay target */}
        <div className={cn(loadingSpinnerVariants({ size, variant }))} />
        
        {/* Inner dot - represents center of target */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center",
          size === "sm" && "top-0.5 left-0.5",
          size === "md" && "top-micro left-1", 
          size === "lg" && "top-micro.5 left-1.5"
        )}>
          <div className={cn(
            "rounded-pill bg-dark-chocolate",
            size === "sm" && "h-1 w-1",
            size === "md" && "h-2 w-2",
            size === "lg" && "h-3 w-3"
          )} />
        </div>
      </div>
      
      {/* Loading Text */}
      {shouldShowText && (
        <p className={cn(
          "font-noto-sans text-warning-amber animate-pulse",
          size === "sm" && "text-caption",
          size === "md" && "text-body-sm", 
          size === "lg" && "text-body"
        )}>
          {text}
        </p>
      )}
    </div>
  )
}

export { LoadingSpinner }
export default LoadingSpinner
