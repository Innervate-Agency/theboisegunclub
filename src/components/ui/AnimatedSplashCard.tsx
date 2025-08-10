'use client'

import * as React from 'react'
import { cn } from "@/lib/utils"

export interface AnimatedSplashCardProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function AnimatedSplashCard({
  className,
  children,
  ...props
}: AnimatedSplashCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md bg-card text-card-foreground p-lg shadow-flat transition-all duration-300 ease-out hover:shadow-elevated",
        className
      )}
      {...props}
    >
      {/* Animated gradient splash background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/0 via-rusty-orange/0 to-walnut-stock/0 transition-all duration-500 group-hover:from-sandy-ochre/8 group-hover:via-rusty-orange/6 group-hover:to-walnut-stock/4" />
      
      {/* Animated border accent */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sandy-ochre/20 via-rusty-orange/20 to-sandy-ochre/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ 
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             padding: '1px'
           }} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sandy-ochre rounded-full animate-ping animation-delay-100" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-rusty-orange rounded-full animate-ping animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-walnut-stock rounded-full animate-ping animation-delay-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-full group-hover:animate-shimmer" />
      </div>
    </div>
  )
}
