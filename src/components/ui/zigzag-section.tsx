'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// Map variant names to CSS color values for sophisticated dividers
const variantColorMap = {
  'off-white': 'var(--color-light-peachy)',
  'light-gray': 'var(--color-card-surface)',
  'warm-stone': 'var(--color-warm-stone)',
  'rusty-orange': 'var(--color-rusty-orange)',
  'sagebrush-green': 'var(--color-sagebrush-green)',
  'slate-blue': 'var(--color-slate-blue)',
  'sandy-ochre': 'var(--color-sandy-ochre)',
  'weathered-warm': 'var(--color-warm-stone)',
  'weathered-sage': 'var(--color-sagebrush-green)',
} as const

const zigzagVariants = cva(
  'py-mobile-2xl sm:py-3xl lg:py-4xl',
  {
    variants: {
      variant: {
        // Light backgrounds with subtle textures
        'off-white': 'bg-light-peachy surface-base',
        'light-gray': 'bg-card/50 surface-handled',
        // Solid colored backgrounds from our Boise palette
        'warm-stone': 'bg-warm-stone text-white',
        'rusty-orange': 'bg-rusty-orange text-white',
        'sagebrush-green': 'bg-sagebrush-green text-white',
        'slate-blue': 'bg-slate-blue text-white',
        'sandy-ochre': 'bg-sandy-ochre text-white',
        // Weathered variations
        'weathered-warm': 'bg-warm-stone text-white surface-weathered',
        'weathered-sage': 'bg-sagebrush-green text-white surface-handled',
      },
      alignment: {
        left: '',
        right: '',
      },
      divider: {
        none: '',
        // Original simple dividers
        'skew-up': 'section-skew-up',
        'skew-down': 'section-skew-down', 
        'skew-subtle': 'section-skew-subtle',
        // Sophisticated Western dividers - organic & layered
        'mountain-range': 'section-mountain-range',
        'snake-river': 'section-snake-river',
        'wind-canyon': 'section-wind-canyon',
        'sagebrush-roll': 'section-sagebrush-roll',
      }
    },
    defaultVariants: {
      variant: 'off-white',
      alignment: 'left',
      divider: 'none',
    },
  }
)

const contentVariants = cva(
  'container-mobile max-w-site mx-auto px-mobile-sm sm:px-md md:px-lg lg:px-xl xl:px-2xl',
  {
    variants: {
      alignment: {
        left: 'lg:grid lg:grid-cols-2 lg:gap-4xl items-center',
        right: 'lg:grid lg:grid-cols-2 lg:gap-4xl items-center',
      }
    }
  }
)

interface ZigZagSectionProps extends VariantProps<typeof zigzagVariants> {
  children: React.ReactNode
  className?: string
  contentChildren?: React.ReactNode
  imageChildren?: React.ReactNode
}

export function ZigZagSection({
  children,
  className,
  contentChildren,
  imageChildren,
  variant,
  alignment = 'left',
  divider = 'none',
}: ZigZagSectionProps) {
  // Get the background color for sophisticated dividers
  const sectionBgColor = variant ? variantColorMap[variant] : undefined
  
  return (
    <section 
      className={cn(zigzagVariants({ variant, alignment, divider }), className)}
      style={{ '--section-bg': sectionBgColor } as React.CSSProperties}
    >
      <div className={contentVariants({ alignment })}>
        {alignment === 'left' ? (
          <>
            {/* Content on left */}
            <div className="space-y-mobile-lg sm:space-y-xl">
              {/* Chunky headers with minimal line height */}
              <div className="space-y-0">
                {children}
              </div>
              {contentChildren}
            </div>
            {/* Image/visual on right */}
            {imageChildren && (
              <div className="mt-mobile-2xl lg:mt-0 lg:order-last">
                {imageChildren}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Image/visual on left */}
            {imageChildren && (
              <div className="mb-mobile-2xl lg:mb-0 lg:order-first">
                {imageChildren}
              </div>
            )}
            {/* Content on right - but still left-aligned text */}
            <div className="space-y-mobile-lg sm:space-y-xl text-left">
              <div className="space-y-0">
                {children}
              </div>
              {contentChildren}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

// Chunky header component for consistent H2/H3 styling
interface ChunkyHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function ChunkyHeader({ title, subtitle, className }: ChunkyHeaderProps) {
  return (
    <div className={cn('space-y-0', className)}>
      <h2 className="chunky-h2 font-rajdhani font-bold text-card-foreground leading-none">
        {title}
      </h2>
      {subtitle && (
        <h3 className="chunky-h3 font-rajdhani font-medium text-muted-foreground leading-none mt-xs">
          {subtitle}
        </h3>
      )}
    </div>
  )
}

// Content wrapper for consistent spacing
interface ZigZagContentProps {
  children: React.ReactNode
  className?: string
}

export function ZigZagContent({ children, className }: ZigZagContentProps) {
  return (
    <div className={cn('space-y-base sm:space-y-lg', className)}>
      {children}
    </div>
  )
}

// Visual wrapper for images and graphics
interface ZigZagVisualProps {
  children: React.ReactNode
  className?: string
  withShadow?: boolean
  withRounding?: boolean
}

export function ZigZagVisual({ 
  children, 
  className, 
  withShadow = true,
  withRounding = false 
}: ZigZagVisualProps) {
  return (
    <div className={cn(
      'relative',
      withShadow && 'shadow-elevated',
      withRounding ? 'rounded-xs overflow-hidden' : 'rounded-none',
      className
    )}>
      {children}
    </div>
  )
}