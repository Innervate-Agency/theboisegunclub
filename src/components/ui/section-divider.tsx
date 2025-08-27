"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'wave' | 'angle' | 'dots'
  height?: 'sm' | 'md' | 'lg'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

const heightClasses = {
  sm: 'h-px',
  md: 'h-0.5', 
  lg: 'h-1'
}

const spacingClasses = {
  none: 'my-0',
  sm: 'my-4',
  md: 'my-8', 
  lg: 'my-12'
}

export function SectionDivider({ 
  variant = 'line',
  height = 'sm',
  spacing = 'md',
  className,
  ...props 
}: SectionDividerProps) {
  
  const baseClasses = cn(
    'w-full relative',
    spacingClasses[spacing],
    className
  )

  // Simple line divider using CSS variables
  if (variant === 'line') {
    return (
      <div className={baseClasses} {...props}>
        <div 
          className={heightClasses[height]}
          style={{ backgroundColor: 'var(--muted-foreground)' }}
        />
      </div>
    )
  }

  // Gradient divider
  if (variant === 'gradient') {
    return (
      <div className={baseClasses} {...props}>
        <div 
          className={heightClasses[height]}
          style={{
            background: 'linear-gradient(90deg, transparent, var(--muted-foreground), transparent)'
          }}
        />
      </div>
    )
  }

  // Wave pattern using CSS clip-path
  if (variant === 'wave') {
    return (
      <div className={cn(baseClasses, 'h-4')} {...props}>
        <div 
          className="w-full h-full"
          style={{
            backgroundColor: 'var(--muted-foreground)',
            opacity: 0.3,
            clipPath: 'polygon(0 50%, 25% 0%, 50% 50%, 75% 0%, 100% 50%, 100% 100%, 0% 100%)'
          }}
        />
      </div>
    )
  }

  // Angled divider using CSS clip-path
  if (variant === 'angle') {
    return (
      <div className={cn(baseClasses, 'h-6')} {...props}>
        <div 
          className="w-full h-full"
          style={{
            backgroundColor: 'var(--muted-foreground)',
            opacity: 0.2,
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
          }}
        />
      </div>
    )
  }

  // Three dots pattern
  if (variant === 'dots') {
    return (
      <div className={cn(baseClasses, 'h-2 flex items-center justify-center gap-2')} {...props}>
        <div 
          className="w-1 h-1 rounded-full" 
          style={{ backgroundColor: 'var(--muted-foreground)' }}
        />
        <div 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div 
          className="w-1 h-1 rounded-full" 
          style={{ backgroundColor: 'var(--muted-foreground)' }}
        />
      </div>
    )
  }

  return null
}

// Preset divider configurations
export const SectionDividers = {
  Subtle: (props?: Partial<SectionDividerProps>) => (
    <SectionDivider variant="gradient" height="sm" spacing="sm" {...props} />
  ),
  
  Standard: (props?: Partial<SectionDividerProps>) => (
    <SectionDivider variant="line" height="md" spacing="md" {...props} />
  ),
  
  Accent: (props?: Partial<SectionDividerProps>) => (
    <SectionDivider variant="dots" spacing="md" {...props} />
  ),
  
  Wave: (props?: Partial<SectionDividerProps>) => (
    <SectionDivider variant="wave" spacing="lg" {...props} />
  ),
  
  Angle: (props?: Partial<SectionDividerProps>) => (
    <SectionDivider variant="angle" spacing="md" {...props} />
  )
}