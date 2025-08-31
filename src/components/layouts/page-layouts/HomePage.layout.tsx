'use client'

import * as React from 'react'
import { PageContainerWithContext } from '../compound-components/PageContainer'
import { 
  SectionContainer, 
  HeroSection, 
  ContentSection, 
  FeatureSection, 
  CTASection,
  StatsSection 
} from '../compound-components/SectionContainer'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { SimpleStickyNav } from '@/components/ui/simple-sticky-nav'

export interface HomePageLayoutProps {
  // Content slots - components pass ONLY content, NO styling concerns
  hero: React.ReactNode
  platformFeatures: React.ReactNode
  featuredContent: React.ReactNode
  directoryStats: React.ReactNode
  buysellDeals: React.ReactNode
  platformValues: React.ReactNode
  contributionCTA: React.ReactNode
  joinMovement: React.ReactNode
  
  // Optional layout overrides
  className?: string
  suppressStickyNav?: boolean
}

/**
 * HomePage Layout - Systematic Solution to Russian Nesting Doll Problem
 * 
 * This layout component handles ALL structural and styling concerns for the homepage:
 * - All backgrounds, gradients, and spacing
 * - All dividers and visual separations  
 * - All theme-specific styling
 * - Container and responsive behavior
 * 
 * Content components (hero, platformFeatures, etc.) contain ZERO styling - 
 * they are pure content/logic components that can't conflict with each other.
 * 
 * Benefits:
 * - Impossible for components to have competing styles
 * - Single source of truth for all page structure
 * - Clear separation of concerns (content vs layout)
 * - Theme consistency enforced at layout level
 * - Easy to modify page structure without touching content components
 * 
 * Usage:
 *   <HomePageLayout
 *     hero={<TacticalHero />}
 *     platformFeatures={<PlatformFeaturesSection />}
 *     // ... other content components with NO styling
 *   />
 */
export function HomePageLayout({
  hero,
  platformFeatures,
  featuredContent,
  directoryStats,
  buysellDeals,
  platformValues,
  contributionCTA,
  joinMovement,
  className,
  suppressStickyNav = false
}: HomePageLayoutProps) {
  return (
    <PageContainerWithContext 
      theme="home"
      navigation={<SiteNavigation />}
      footer={<SiteFooter currentPage="home" />}
      className={className}
    >
      {/* Simple Sticky Navigation - part of layout, not content */}
      {!suppressStickyNav && <SimpleStickyNav />}
      
      {/* Hero Section - Full width with no container */}
      <HeroSection sectionId="hero">
        {hero}
      </HeroSection>

      {/* Platform Features with Bruno Sand Dunes divider */}
      <SectionContainer
        variant="feature"
        background="background"
        spacing="xl"
        bottomDivider="bruno-sand-dunes"
        dividerColor="var(--background)"
        sectionId="platform-features"
      >
        {platformFeatures}
      </SectionContainer>

      {/* Featured Content with matching muted background */}
      <ContentSection
        background="muted-subtle"
        spacing="xl"
        sectionId="featured-content"
      >
        {featuredContent}
      </ContentSection>

      {/* Directory Stats with Snake River Canyon divider */}
      <StatsSection
        background="background"
        dividerColor="var(--background)"
        sectionId="directory-stats"
      >
        {directoryStats}
      </StatsSection>

      {/* Buy/Sell Deals with gradient background */}
      <CTASection
        background="gradient-primary"
        spacing="xl"
        sectionId="buysell-deals"
      >
        {buysellDeals}
      </CTASection>

      {/* Platform Values with Frank Church Wilderness divider */}
      <SectionContainer
        variant="feature"
        background="card"
        spacing="xl"
        bottomDivider="frank-church-wilderness"
        dividerColor="var(--card)"
        sectionId="platform-values"
      >
        {platformValues}
      </SectionContainer>

      {/* Contribution CTA with soft muted background */}
      <SectionContainer
        variant="cta"
        background="muted-soft"
        spacing="xl"
        bottomDivider="bruno-sand-dunes"
        dividerColor="rgb(from var(--muted) r g b / 0.3)"
        sectionId="contribution-cta"
      >
        {contributionCTA}
      </SectionContainer>

      {/* Join Movement Section with secondary gradient */}
      <CTASection
        background="gradient-secondary"
        spacing="xl"
        sectionId="join-movement"
      >
        {joinMovement}
      </CTASection>
    </PageContainerWithContext>
  )
}

/**
 * Alternative simplified layout for A/B testing or different designs
 */
export function HomePageLayoutSimple({
  hero,
  platformFeatures,
  featuredContent,
  directoryStats,
  buysellDeals,
  platformValues,
  contributionCTA,
  joinMovement,
  className
}: HomePageLayoutProps) {
  return (
    <PageContainerWithContext 
      theme="home"
      navigation={<SiteNavigation />}
      footer={<SiteFooter currentPage="home" />}
      className={className}
    >
      {/* Simplified layout without dividers */}
      <HeroSection>{hero}</HeroSection>
      <ContentSection background="background">{platformFeatures}</ContentSection>
      <ContentSection background="muted-subtle">{featuredContent}</ContentSection>
      <ContentSection background="card">{directoryStats}</ContentSection>
      <CTASection background="gradient-primary">{buysellDeals}</CTASection>
      <ContentSection background="background">{platformValues}</ContentSection>
      <CTASection background="muted-soft">{contributionCTA}</CTASection>
      <CTASection background="gradient-secondary">{joinMovement}</CTASection>
    </PageContainerWithContext>
  )
}