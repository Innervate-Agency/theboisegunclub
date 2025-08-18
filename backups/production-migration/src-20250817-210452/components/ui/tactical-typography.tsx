'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tacticalTypographyVariants = cva(
  "font-rajdhani transition-colors duration-200",
  {
    variants: {
      variant: {
        // Headings - Tactical Command Structure
        "heading-4xl": "text-heading-4xl font-[800] leading-tight tracking-tight",
        "heading-3xl": "text-heading-3xl font-[700] leading-tight tracking-tight",
        "heading-2xl": "text-heading-2xl font-[600] leading-tight tracking-tight",
        "heading-xl": "text-heading-xl font-[600] leading-tight",
        "heading-lg": "text-heading-lg font-[500] leading-snug",
        "heading-md": "text-heading-md font-[500] leading-snug",
        "heading-base": "text-heading-base font-[500] leading-normal",
        "heading-sm": "text-heading-sm font-[500] leading-normal",
        "heading-xs": "text-heading-xs font-[500] leading-normal",
        
        // Body Text - Tactical Communications
        "body-xl": "text-body-xl font-[400] leading-relaxed",
        "body-lg": "text-body-lg font-[400] leading-relaxed",
        "body-base": "text-body-base font-[400] leading-normal",
        "body-sm": "text-body-sm font-[400] leading-normal",
        "body-xs": "text-body-xs font-[400] leading-normal",
        
        // Special Tactical Variants
        "mission-title": "text-heading-3xl font-[800] leading-none tracking-wider uppercase",
        "tactical-label": "text-body-xs font-[700] leading-none tracking-widest uppercase",
        "intel-brief": "text-body-sm font-[500] leading-relaxed",
        "equipment-tag": "text-body-xs font-[600] leading-none tracking-wide",
        "status-indicator": "text-body-xs font-[500] leading-none tracking-wider uppercase"
      },
      theme: {
        primary: "text-card-foreground",
        secondary: "text-muted-foreground", 
        accent: "text-rusty-orange",
        success: "text-sagebrush-green",
        warning: "text-sandy-ochre",
        danger: "text-canyon-clay",
        info: "text-slate-blue",
        tactical: "text-nav-armory",
        intel: "text-nav-intel",
        events: "text-nav-events",
        directory: "text-nav-directory",
        marketplace: "text-nav-marketplace",
        forums: "text-nav-forums",
        home: "text-nav-home"
      },
      weight: {
        light: "font-[300]",
        normal: "font-[400]",
        medium: "font-[500]",
        semibold: "font-[600]",
        bold: "font-[700]",
        extrabold: "font-[800]"
      }
    },
    defaultVariants: {
      variant: "body-base",
      theme: "primary",
      weight: undefined // Let variant control weight by default
    }
  }
)

export interface TacticalTypographyProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tacticalTypographyVariants> {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

export function TacticalTypography({
  className,
  variant,
  theme,
  weight,
  as: Component = "div",
  children,
  ...props
}: TacticalTypographyProps) {
  return (
    <Component
      className={cn(tacticalTypographyVariants({ variant, theme, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

// Convenient typed variants for common use cases
export const TacticalHeading = ({ level = 1, children, ...props }: {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
} & Omit<TacticalTypographyProps, 'variant' | 'as'>) => {
  const variants = {
    1: "heading-3xl",
    2: "heading-2xl", 
    3: "heading-xl",
    4: "heading-lg",
    5: "heading-md",
    6: "heading-base"
  } as const
  
  const tags = {
    1: "h1",
    2: "h2",
    3: "h3", 
    4: "h4",
    5: "h5",
    6: "h6"
  } as const

  return (
    <TacticalTypography
      variant={variants[level]}
      as={tags[level]}
      {...props}
    >
      {children}
    </TacticalTypography>
  )
}

export const TacticalBody = ({ size = "base", children, ...props }: {
  size?: "xs" | "sm" | "base" | "lg" | "xl"
  children: React.ReactNode
} & Omit<TacticalTypographyProps, 'variant'>) => {
  const variant = `body-${size}` as const
  
  return (
    <TacticalTypography
      variant={variant}
      as="p"
      {...props}
    >
      {children}
    </TacticalTypography>
  )
}

export const TacticalLabel = ({ children, ...props }: {
  children: React.ReactNode
} & Omit<TacticalTypographyProps, 'variant'>) => {
  return (
    <TacticalTypography
      variant="tactical-label"
      as="span"
      {...props}
    >
      {children}
    </TacticalTypography>
  )
}