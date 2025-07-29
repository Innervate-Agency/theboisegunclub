'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calloutCardVariants = cva(
  "relative rounded-lg border p-6 shadow-sm transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-card border-brass-yellow/20 hover:shadow-md hover:border-brass-yellow/30",
        subtle: "bg-solid-brand-warm border-border hover:shadow-md hover-gradient-warm",
        animated: "bg-solid-brand-accent border-brass-yellow/30 hover:shadow-md hover-gradient-warm",
        important: "bg-card border-safety-red/30 shadow-md hover:border-safety-red/40",
        info: "bg-card border-scope-blue/30 hover:shadow-md hover-gradient-cool",
        glass: "mica-card border-brass-yellow/20 hover:shadow-lg"
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
            <h3 className="text-[var(--text-lg)] font-rajdhani font-bold text-foreground leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-[var(--text-sm)] text-case-hardened font-noto-sans leading-relaxed">
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
            <h3 className="text-[var(--text-lg)] font-rajdhani font-bold text-foreground leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-[var(--text-sm)] text-case-hardened font-noto-sans leading-relaxed">
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
          <h3 className="text-[var(--text-base)] font-rajdhani font-semibold text-foreground leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-[var(--text-sm)] text-case-hardened font-noto-sans leading-relaxed">
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
