'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedSplashCardVariants = cva(
  "group relative overflow-hidden rounded-xs bg-card text-card-foreground p-lg shadow-present transition-all duration-300 ease-out hover:shadow-elevated",
  {
    variants: {
      variant: {
        default: "",
        premium: "bg-gradient-to-br from-sandy-ochre/5 via-rusty-orange/5 to-walnut-stock/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AnimatedSplashCardProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animatedSplashCardVariants> {
  children: React.ReactNode
}

export default function AnimatedSplashCard({
  className,
  variant,
  children,
  ...props
}: AnimatedSplashCardProps) {
  return (
    <div
      className={cn(animatedSplashCardVariants({ variant }), className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/0 via-rusty-orange/0 to-walnut-stock/0 transition-all duration-500 group-hover:from-sandy-ochre/8 group-hover:via-rusty-orange/6 group-hover:to-walnut-stock/4" />
      
      <div className="absolute inset-0 rounded-xs bg-gradient-to-r from-sandy-ochre/20 via-rusty-orange/20 to-sandy-ochre/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ 
             mask: "linear-gradient(var(--background) 0 0) content-box, linear-gradient(var(--background) 0 0)",
             maskComposite: "xor",
             WebkitMask: "linear-gradient(var(--background) 0 0) content-box, linear-gradient(var(--background) 0 0)",
             WebkitMaskComposite: "xor",
             padding: "1px"
           }} />
      
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sandy-ochre rounded-full animate-ping animation-delay-100" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-rusty-orange rounded-full animate-ping animation-delay-300" />
        <div className="absolute top-3/4 right-1/3 w-px h-px bg-walnut-stock rounded-full animate-ping animation-delay-500" />
      </div>
      
      <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
      
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-background/10 to-transparent skew-x-12 translate-x-full group-hover:animate-shimmer" />
      </div>
    </div>
  )
}
