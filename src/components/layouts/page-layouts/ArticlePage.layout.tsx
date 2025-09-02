'use client'

import * as React from 'react'
import { PageContainerWithContext } from '../compound-components/PageContainer'
import { SectionContainer } from '../compound-components/SectionContainer'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

export interface ArticlePageLayoutProps {
  // Content - pure components with no styling concerns
  hero: React.ReactNode
  article: React.ReactNode
  sidebar?: React.ReactNode
  related?: React.ReactNode
  
  // Page configuration
  sectionName: string // "Armory", "Guides", etc.
  sectionPath: string // "/armory", "/guides", etc.
  theme: 'events' | 'directory' | 'armory' | 'intel' | 'buysell' | 'forums' | 'content'
  
  // Layout customization
  className?: string
}

/**
 * ArticlePageLayout - Layout for articles, guides, blog posts
 * 
 * This layout handles ALL structural concerns for article pages:
 * - Navigation with proper sticky behavior
 * - Hero section with breadcrumbs and metadata
 * - Main article content area
 * - Optional sidebar for navigation/related content
 * - Footer with proper theme context
 * 
 * Benefits:
 * - Eliminates navigation/footer duplication across article templates
 * - Consistent article page structure site-wide
 * - Theme-specific styling applied at layout level
 * - Content components can focus purely on content/logic
 * 
 * Usage:
 *   <ArticlePageLayout
 *     theme="armory"
 *     sectionName="Armory"
 *     sectionPath="/armory"
 *     hero={<ArticleHero title="..." />}
 *     article={<ArticleContent content="..." />}
 *     sidebar={<ArticleSidebar />}
 *   />
 */
export function ArticlePageLayout({
  hero,
  article,
  sidebar,
  related,
  sectionName,
  sectionPath,
  theme,
  className
}: ArticlePageLayoutProps) {
  return (
    <PageContainerWithContext 
      theme={theme}
      navigation={<SiteNavigation sticky variant="premium" />}
      footer={<SiteFooter currentPage={sectionPath.replace('/', '')} />}
      className={className}
    >
      {/* Article Hero Section */}
      <SectionContainer
        variant="hero"
        background="background"
        spacing="md"
        sectionId="article-hero"
      >
        {hero}
      </SectionContainer>

      {/* Main Article Content */}
      <SectionContainer
        variant="content"
        background="card"
        spacing="xl"
        containerize={true}
        sectionId="article-content"
      >
        <div className="max-w-site mx-auto">
          {sidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Article */}
              <div className="lg:col-span-3">
                {article}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {sidebar}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {article}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Related Articles */}
      {related && (
        <SectionContainer
          variant="feature"
          background="muted-subtle"
          spacing="xl"
          sectionId="related-articles"
        >
          {related}
        </SectionContainer>
      )}
    </PageContainerWithContext>
  )
}

/**
 * Specialized variants for different article types
 */

export function ArmoryArticleLayout({ 
  hero,
  article,
  sidebar,
  related,
  className 
}: Omit<ArticlePageLayoutProps, 'theme' | 'sectionName' | 'sectionPath'>) {
  return (
    <ArticlePageLayout
      theme="armory"
      sectionName="Armory"
      sectionPath="/armory"
      hero={hero}
      article={article}
      sidebar={sidebar}
      related={related}
      className={className}
    />
  )
}

export function GuidesArticleLayout({ 
  hero,
  article,
  sidebar,
  related,
  className 
}: Omit<ArticlePageLayoutProps, 'theme' | 'sectionName' | 'sectionPath'>) {
  return (
    <ArticlePageLayout
      theme="intel"
      sectionName="Guides"
      sectionPath="/guides"
      hero={hero}
      article={article}
      sidebar={sidebar}
      related={related}
      className={className}
    />
  )
}

export function IntelArticleLayout({ 
  hero,
  article,
  sidebar,
  related,
  className 
}: Omit<ArticlePageLayoutProps, 'theme' | 'sectionName' | 'sectionPath'>) {
  return (
    <ArticlePageLayout
      theme="intel"
      sectionName="Intel"
      sectionPath="/intel"
      hero={hero}
      article={article}
      sidebar={sidebar}
      related={related}
      className={className}
    />
  )
}