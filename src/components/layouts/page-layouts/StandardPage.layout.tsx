'use client'

import * as React from 'react'
import { PageContainerWithContext } from '../compound-components/PageContainer'
import { SectionContainer } from '../compound-components/SectionContainer'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

export interface StandardPageLayoutProps {
  // Content - pure components with no styling
  content: React.ReactNode
  
  // Page configuration
  theme: 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums' | 'content'
  currentPage: string
  
  // Layout customization
  background?: 'none' | 'background' | 'card' | 'muted' | 'muted-subtle'
  containerize?: boolean
  className?: string
}

/**
 * StandardPageLayout - Generic layout for most site pages
 * 
 * This layout handles the common pattern of:
 * - Navigation
 * - Single main content area
 * - Footer
 * 
 * Benefits:
 * - Eliminates duplicate navigation/footer imports
 * - Enforces theme consistency
 * - Prevents style conflicts
 * - Makes pages extremely clean (3-5 lines)
 * 
 * Usage:
 *   <StandardPageLayout 
 *     theme="events" 
 *     currentPage="events"
 *     content={<EventsPageContent />}
 *   />
 */
export function StandardPageLayout({
  content,
  theme,
  currentPage,
  background = 'background',
  containerize = false,
  className
}: StandardPageLayoutProps) {
  return (
    <PageContainerWithContext 
      theme={theme}
      navigation={<SiteNavigation sticky variant="premium" />}
      footer={<SiteFooter currentPage={currentPage} />}
      className={className}
    >
      <SectionContainer
        variant="content"
        background={background}
        spacing="none"
        containerize={containerize}
        sectionId="main-content"
      >
        {content}
      </SectionContainer>
    </PageContainerWithContext>
  )
}

/**
 * Specialized variants for common page types
 */

export function EventsPageLayout({ 
  content, 
  className 
}: { 
  content: React.ReactNode
  className?: string 
}) {
  return (
    <StandardPageLayout
      theme="events"
      currentPage="events"
      content={content}
      className={className}
    />
  )
}

export function DirectoryPageLayout({ 
  content, 
  className 
}: { 
  content: React.ReactNode
  className?: string 
}) {
  return (
    <StandardPageLayout
      theme="directory"
      currentPage="directory"
      content={content}
      className={className}
    />
  )
}

export function IntelPageLayout({ 
  content, 
  className 
}: { 
  content: React.ReactNode
  className?: string 
}) {
  return (
    <StandardPageLayout
      theme="intel"
      currentPage="intel"
      content={content}
      className={className}
    />
  )
}

export function ArmoryPageLayout({ 
  content, 
  className 
}: { 
  content: React.ReactNode
  className?: string 
}) {
  return (
    <StandardPageLayout
      theme="armory"
      currentPage="armory"
      content={content}
      className={className}
    />
  )
}

export function BuySellPageLayout({ 
  content, 
  className 
}: { 
  content: React.ReactNode
  className?: string 
}) {
  return (
    <StandardPageLayout
      theme="buysell"
      currentPage="buysell"
      content={content}
      className={className}
    />
  )
}