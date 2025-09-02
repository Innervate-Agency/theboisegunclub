'use client'

import * as React from 'react'
import { PageContainerWithContext } from '../compound-components/PageContainer'
import { SectionContainer } from '../compound-components/SectionContainer'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

export interface DetailPageLayoutProps {
  // Content - pure components with no styling concerns
  hero: React.ReactNode
  mainContent: React.ReactNode
  sidebar?: React.ReactNode
  relatedItems?: React.ReactNode
  
  // Page configuration
  theme: 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums' | 'content'
  currentPage: string
  
  // Layout customization
  heroBackground?: 'none' | 'background' | 'card' | 'muted' | 'gradient-primary'
  contentBackground?: 'none' | 'background' | 'card' | 'muted' | 'muted-subtle'
  className?: string
}

/**
 * DetailPageLayout - Layout for business profiles, locations, products
 * 
 * This layout handles ALL structural concerns for detail pages:
 * - Navigation with proper sticky behavior
 * - Hero section with key information and actions
 * - Main content area with optional sidebar
 * - Related items section
 * - Footer with proper theme context
 * 
 * Benefits:
 * - Eliminates navigation/footer duplication across detail templates
 * - Consistent detail page structure site-wide
 * - Theme-specific styling applied at layout level
 * - Flexible hero and content backgrounds
 * - Content components focus purely on business logic
 * 
 * Usage:
 *   <DetailPageLayout
 *     theme="directory"
 *     currentPage="directory"
 *     hero={<BusinessHero name="..." />}
 *     mainContent={<BusinessDetails />}
 *     sidebar={<BusinessContact />}
 *   />
 */
export function DetailPageLayout({
  hero,
  mainContent,
  sidebar,
  relatedItems,
  theme,
  currentPage,
  heroBackground = 'background',
  contentBackground = 'card',
  className
}: DetailPageLayoutProps) {
  return (
    <PageContainerWithContext 
      theme={theme}
      navigation={<SiteNavigation sticky variant="premium" />}
      footer={<SiteFooter currentPage={currentPage} />}
      className={className}
    >
      {/* Detail Hero Section */}
      <SectionContainer
        variant="hero"
        background={heroBackground}
        spacing="lg"
        sectionId="detail-hero"
      >
        {hero}
      </SectionContainer>

      {/* Main Detail Content */}
      <SectionContainer
        variant="content"
        background={contentBackground}
        spacing="xl"
        containerize={true}
        sectionId="detail-content"
      >
        <div className="max-w-site mx-auto">
          {sidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {mainContent}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {sidebar}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {mainContent}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Related Items */}
      {relatedItems && (
        <SectionContainer
          variant="feature"
          background="muted-subtle"
          spacing="xl"
          sectionId="related-items"
        >
          {relatedItems}
        </SectionContainer>
      )}
    </PageContainerWithContext>
  )
}

/**
 * Specialized variants for different detail page types
 */

export function BusinessDetailLayout({ 
  hero,
  mainContent,
  sidebar,
  relatedItems,
  className 
}: Omit<DetailPageLayoutProps, 'theme' | 'currentPage'>) {
  return (
    <DetailPageLayout
      theme="directory"
      currentPage="directory"
      hero={hero}
      mainContent={mainContent}
      sidebar={sidebar}
      relatedItems={relatedItems}
      className={className}
    />
  )
}

export function LocationDetailLayout({ 
  hero,
  mainContent,
  sidebar,
  relatedItems,
  className 
}: Omit<DetailPageLayoutProps, 'theme' | 'currentPage'>) {
  return (
    <DetailPageLayout
      theme="directory"
      currentPage="directory"
      hero={hero}
      mainContent={mainContent}
      sidebar={sidebar}
      relatedItems={relatedItems}
      className={className}
    />
  )
}

export function ProductDetailLayout({ 
  hero,
  mainContent,
  sidebar,
  relatedItems,
  className 
}: Omit<DetailPageLayoutProps, 'theme' | 'currentPage'>) {
  return (
    <DetailPageLayout
      theme="buysell"
      currentPage="buysell"
      hero={hero}
      mainContent={mainContent}
      sidebar={sidebar}
      relatedItems={relatedItems}
      heroBackground="gradient-primary"
      contentBackground="background"
      className={className}
    />
  )
}

export function EventDetailLayout({ 
  hero,
  mainContent,
  sidebar,
  relatedItems,
  className 
}: Omit<DetailPageLayoutProps, 'theme' | 'currentPage'>) {
  return (
    <DetailPageLayout
      theme="events"
      currentPage="events"
      hero={hero}
      mainContent={mainContent}
      sidebar={sidebar}
      relatedItems={relatedItems}
      className={className}
    />
  )
}