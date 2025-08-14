'use client'

import React from 'react'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

interface PageSectionProps {
  title?: string
  subtitle?: string
  actionText?: string
  onAction?: () => void
  background?: 'default' | 'muted' | 'gradient'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'site'
  children: React.ReactNode
  className?: string
}

const backgroundClasses = {
  default: '',
  muted: 'bg-muted/30',
  gradient: 'bg-gradient-to-br from-current/5 to-current/10'
}

const spacingClasses = {
  sm: 'py-lg',
  md: 'py-xl', 
  lg: 'py-2xl',
  xl: 'py-6xl'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  site: 'max-w-site'
}

export function PageSection({
  title,
  subtitle,
  actionText,
  onAction,
  background = 'default',
  spacing = 'lg',
  maxWidth = 'site',
  children,
  className = ""
}: PageSectionProps) {
  return (
    <section className={`${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}>
      <div className={`container mx-auto ${maxWidthClasses[maxWidth]} px-md`}>
        {/* Section Header */}
        {(title || actionText) && (
          <div className="flex items-center justify-between mb-xl">
            <div className="space-y-sm">
              {title && (
                <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-muted-foreground max-w-3xl">
                  {subtitle}
                </p>
              )}
            </div>
            {actionText && onAction && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-current hover:bg-current/10 shadow-none hover:shadow-whisper" 
                animationType="arrow"
                onClick={onAction}
              >
                {actionText}
                <ArrowRight className="h-3 w-3 ml-xs" />
              </Button>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  )
}