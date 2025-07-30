'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calloutCardVariants = cva(
  "relative rounded-lg p-6 transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        // STRATEGIC RESTRAINT: Shadow-first approach with gradient accents like VendorCard
        default: "bg-card shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg",
        subtle: "bg-muted shadow-sm hover:shadow-md hover:bg-card",
        animated: "bg-card shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/4 before:via-transparent before:to-copper-orange/3 before:rounded-lg before:pointer-events-none",
        important: "bg-card shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-safety-red after:to-muzzle-flash after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-safety-red/6 before:via-transparent before:to-muzzle-flash/4 before:rounded-lg before:pointer-events-none",
        info: "bg-card shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-scope-blue after:to-ayu-blue after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-scope-blue/4 before:via-transparent before:to-ayu-blue/3 before:rounded-lg before:pointer-events-none",
        glass: "mica-card shadow-sm hover:shadow-md relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg"
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
      <div className="relative space-y-3">
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-rajdhani font-bold text-foreground leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground font-noto-sans leading-relaxed">
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
            <h3 className="text-lg font-rajdhani font-bold text-foreground leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground font-noto-sans leading-relaxed">
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
          <h3 className="text-base font-rajdhani font-semibold text-foreground leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground font-noto-sans leading-relaxed">
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
