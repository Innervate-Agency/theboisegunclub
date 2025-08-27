'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { getBackgroundStyle, getGradientStyle } from '@/lib/theme-utils'

interface PageSectionProps {
  id: string
  children: React.ReactNode
  variant?: 'default' | 'muted' | 'accent' | 'card' | 'primary' | 'gradient'
  gradientFrom?: string
  gradientTo?: string
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'site'
  className?: string
  as?: 'section' | 'article' | 'aside' | 'div'
  'data-section'?: string
}

const spacingClasses = {
  sm: 'py-8',
  md: 'py-12', 
  lg: 'py-16',
  xl: 'py-24'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  site: 'max-w-site'
}

export function PageSection({
  id,
  children,
  variant = 'default',
  gradientFrom = 'background',
  gradientTo = 'muted',
  spacing = 'lg',
  maxWidth = 'site',
  className = '',
  as: Component = 'section',
  'data-section': dataSection,
  ...props
}: PageSectionProps) {
  
  // Get the appropriate background style using theme utilities
  const getStyle = () => {
    if (variant === 'gradient') {
      return {
        ...getGradientStyle(gradientFrom, gradientTo),
        color: 'var(--foreground)'
      }
    }
    return getBackgroundStyle(variant)
  }

  return (
    <Component
      id={id}
      data-section={dataSection || id}
      className={cn(
        'relative w-full transition-colors duration-200',
        spacingClasses[spacing],
        className
      )}
      style={getStyle()}
      {...props}
    >
      <div className={cn('container mx-auto px-lg', maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </Component>
  )
}

// Preset section configurations for common use cases
export const PageSections = {
  Hero: (props: Omit<PageSectionProps, 'variant' | 'spacing'>) => (
    <PageSection variant="default" spacing="xl" {...props} />
  ),
  
  Content: (props: Omit<PageSectionProps, 'variant'>) => (
    <PageSection variant="default" spacing="lg" {...props} />
  ),
  
  Feature: (props: Omit<PageSectionProps, 'variant'>) => (
    <PageSection variant="muted" spacing="lg" {...props} />
  ),
  
  Highlight: (props: Omit<PageSectionProps, 'variant'>) => (
    <PageSection variant="accent" spacing="lg" {...props} />
  ),
  
  CTA: (props: Omit<PageSectionProps, 'variant'>) => (
    <PageSection variant="primary" spacing="lg" {...props} />
  )
}