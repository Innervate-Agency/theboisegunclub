'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

/**
 * Enhanced Page Template System for TBGC
 * 
 * Eliminates 86+ instances of direct SiteNavigation/SiteFooter imports
 * and provides a comprehensive, type-safe layout system.
 */

// Base page themes matching TBGC design system
export type PageTheme = 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums' | 'training' | 'content' | 'legal' | 'support'

// Page layout patterns
export type PageLayout = 'standard' | 'hero' | 'sidebar' | 'full-width' | 'article' | 'dashboard' | 'minimal'

// Background variants
export type PageBackground = 'none' | 'background' | 'muted' | 'gradient' | 'card'

// Navigation styles
export type NavigationStyle = 'default' | 'sticky' | 'transparent' | 'minimal' | 'none'

/**
 * Base page template interface
 * All page templates extend this foundation
 */
interface BasePageTemplateProps {
  children: React.ReactNode
  theme: PageTheme
  currentPage: string
  className?: string
  background?: PageBackground
  navigation?: NavigationStyle
  customNavigation?: React.ReactNode
  customFooter?: React.ReactNode
}

/**
 * Standard Page Template
 * For most common pages: simple content with nav/footer
 */
interface StandardPageTemplateProps extends BasePageTemplateProps {
  layout?: 'standard'
  containerized?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * Convenience Layout Components
 * Pre-configured templates for common use cases
 */
export const StandardPage = (props: Omit<StandardPageTemplateProps, 'layout'>) => {
  const { 
    children, 
    theme, 
    currentPage, 
    className,
    background = 'background',
    navigation = 'default',
    customNavigation,
    customFooter,
    containerized = true,
    maxWidth = 'xl'
  } = props

  // Theme class for consistent styling
  const themeClass = `theme-${theme}`
  
  // Background classes
  const backgroundClasses = {
    none: '',
    background: 'bg-background',
    muted: 'bg-muted/30',
    gradient: `bg-gradient-to-br from-background via-background to-${theme}/5`,
    card: 'bg-card'
  }

  // Navigation component based on style
  const renderNavigation = () => {
    if (navigation === 'none') return null
    if (customNavigation) return customNavigation
    return <SiteNavigation />
  }

  // Footer component
  const renderFooter = () => {
    if (customFooter) return customFooter
    return <SiteFooter currentPage={currentPage} />
  }

  const containerClasses = containerized ? `container mx-auto max-w-${maxWidth} px-4` : ''

  return (
    <div className={cn(themeClass, backgroundClasses[background], 'min-h-screen', className)}>
      {renderNavigation()}
      <main className={cn('flex-1', containerClasses)}>
        {children}
      </main>
      {renderFooter()}
    </div>
  )
}
