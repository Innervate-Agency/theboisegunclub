'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calloutCardVariants = cva(
  "relative rounded-lg border p-6 shadow-sm transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-white border-brass-yellow/20 hover:shadow-md hover:border-brass-yellow/30",
        subtle: "bg-gradient-card-warm border-gray-200 hover:shadow-md",
        animated: "bg-gradient-to-r from-brass-yellow/5 via-white to-copper-orange/5 border-brass-yellow/30 hover:shadow-md hover:from-brass-yellow/8 hover:to-copper-orange/8",
        important: "bg-gradient-to-br from-safety-red/5 via-white to-muzzle-flash/5 border-safety-red/30 shadow-md",
        info: "bg-gradient-to-br from-scope-blue/5 via-white to-trigger-blue/5 border-scope-blue/30"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface CalloutCardProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof calloutCardVariants> {
  title: string
  description?: string
  children?: React.ReactNode
}

export function CalloutCard({
  className,
  variant,
  title,
  description,
  children,
  ...props
}: CalloutCardProps) {
  return (
    <div className={cn(calloutCardVariants({ variant }), className)} {...props}>
      {/* Subtle gradient border accent */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brass-yellow/10 via-transparent to-copper-orange/10 opacity-0 transition-opacity duration-200 hover:opacity-100 pointer-events-none" />
      
      <div className="relative space-y-3">
        <div className="space-y-2">
          <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-case-hardened font-noto-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {children && (
          <div className="pt-2">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

// Important callout with stronger visual emphasis
export interface ImportantCalloutProps extends Omit<CalloutCardProps, 'variant'> {}

export function ImportantCallout({
  className,
  title,
  description,
  children,
  ...props
}: ImportantCalloutProps) {
  return (
    <div 
      className={cn(
        calloutCardVariants({ variant: "important" }), 
        "border-l-4 border-l-safety-red pl-6",
        className
      )} 
      {...props}
    >
      {/* Pulsing accent for important notices */}
      <div className="absolute -left-1 top-4 w-2 h-2 bg-safety-red rounded-full animate-pulse" />
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-6 h-6 bg-safety-red/10 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-safety-red rounded-full" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-rajdhani font-bold text-gunmetal-black leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-case-hardened font-noto-sans leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
        
        {children && (
          <div className="pl-9 pt-1">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

// Subtle callout for less prominent information
export interface SubtleCalloutProps extends Omit<CalloutCardProps, 'variant'> {}

export function SubtleCallout({
  className,
  title,
  description,
  children,
  ...props
}: SubtleCalloutProps) {
  return (
    <div 
      className={cn(
        calloutCardVariants({ variant: "subtle" }), 
        "shadow-flat hover:shadow-sm",
        className
      )} 
      {...props}
    >
      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-base font-rajdhani font-semibold text-gunmetal-black leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-case-hardened font-noto-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {children && (
          <div className="pt-1">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
