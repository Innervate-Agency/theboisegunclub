'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ArrowLeftIcon, ChevronRightIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { VerificationStatus } from '@/components/ui/verification-status'

// Base interfaces for all detail page types
interface DetailPageSection {
  name: string // "Events", "Directory", "Guides", etc.
  path: string // "/events", "/directory", "/guides", etc.
  color: string // "nav-events", "nav-directory", "nav-guides", etc.
}

interface DetailPageMeta {
  title: string
  description?: string
  featured?: boolean
  tags?: string[]
  badges?: Array<{
    label: string
    variant?: string
    className?: string
  }>
}

interface DetailPageHeader {
  meta: DetailPageMeta
  section: DetailPageSection
  breadcrumbs?: Array<{ label: string; href: string }>
  actions?: Array<{
    label: string
    icon?: React.ComponentType<any>
    onClick?: () => void
    href?: string
    variant?: string
    size?: string
    className?: string
  }>
}

interface DetailPageContent {
  type: 'article' | 'business' | 'location' | 'product'
  content: React.ReactNode
}

interface DetailPageSidebar {
  sections: Array<{
    id: string
    title: string
    content: React.ReactNode
    className?: string
  }>
}

interface DetailPageTemplateProps {
  header: DetailPageHeader
  content: DetailPageContent
  sidebar: DetailPageSidebar
  heroImage?: string
  heroContent?: React.ReactNode
  className?: string
  // Verification props for business pages
  verification?: {
    isVerified: boolean
    verificationStatus?: string
  }
  // Reviews section for business pages
  reviewsSection?: React.ReactNode
}

export default function DetailPageTemplate({
  header,
  content,
  sidebar,
  heroImage,
  heroContent,
  className = '',
  verification,
  reviewsSection
}: DetailPageTemplateProps) {
  const { meta, section, breadcrumbs = [], actions = [] } = header
  const { title, description, featured, tags = [], badges = [] } = meta

  return (
    <div className={`theme-${section.name.toLowerCase()} min-h-screen ${className}`}>
      <SiteNavigation />
      
      {/* Hero Section with Full-Width Background */}
      <section className="relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/30 to-background" 
             style={{ 
               minHeight: '500px',
               height: 'auto'
             }}>
          {/* Subtle texture overlay with fade */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0zM0 0c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0z'/%3E%3C/g%3E%3C/svg%3E")`,
              maskImage: 'radial-gradient(circle at center, black 0%, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 0%, black 40%, transparent 80%)',
              opacity: 0.02
            }}
          />
          
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0"
               style={{ 
                 background: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%),
                              radial-gradient(circle at 40% 90%, rgba(255,255,255,0.03) 0%, transparent 50%)`
               }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 pt-mobile-2xl sm:pt-3xl pb-mobile-xl sm:pb-2xl">
          <div className="container mx-auto max-w-7xl px-lg">
            <div className="space-y-2xl">
              
              {/* Title and Subtitle - Very Close Together */}
              <div className="text-left">
                {/* Verification Status - Above title */}
                {verification && (
                  <div className="mb-xs">
                    <VerificationStatus 
                      isVerified={verification.isVerified}
                      verificationStatus={verification.verificationStatus}
                    />
                  </div>
                )}
                
                <h1 className="font-rajdhani text-2xl md:h1-primary text-foreground leading-none">
                  {title}
                </h1>
                {/* Hero Content Contains Subtitle - rendered here for tight spacing */}
                {heroContent}
              </div>
              
              {/* Navigation, Icon & Badges Row - Below Title */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-lg">
                {/* Left: Business Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-none overflow-hidden bg-card border-2 border-border shadow-elevated">
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <CursorArrowRaysIcon className="h-12 w-12 text-nav-directory" />
                    </div>
                  </div>
                </div>
                
                {/* Right: Navigation & Badges */}
                <div className="flex-1 space-y-base">
                  {/* Breadcrumb Navigation */}
                  <div className="flex items-center gap-xs text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-foreground transition-colors">
                      Home
                    </Link>
                    <ChevronRightIcon className="h-4 w-4" />
                    <Link href={section.path} className={`hover:text-${section.color} transition-colors`}>
                      {section.name}
                    </Link>
                    {breadcrumbs.map((crumb, index) => (
                      <React.Fragment key={index}>
                        <ChevronRightIcon className="h-4 w-4" />
                        <Link href={crumb.href} className={`hover:text-${section.color} transition-colors`}>
                          {crumb.label}
                        </Link>
                      </React.Fragment>
                    ))}
                    <ChevronRightIcon className="h-4 w-4" />
                    <span className={`text-${section.color} font-medium`}>{title}</span>
                  </div>
                  
                  {/* Back Button */}
                  <div>
                    <Link href={section.path}>
                      <Button variant="ghost" size="sm" className="gap-xs">
                        <ArrowLeftIcon className="h-4 w-4" />
                        Back to {section.name}
                      </Button>
                    </Link>
                  </div>
                  
                  {badges.length > 0 && (
                    <div className="flex items-center gap-base flex-wrap">
                      {badges.map((badge, index) => (
                        <Badge 
                          key={index} 
                          className={badge.className || `bg-${section.color}/20 text-${section.color} border-${section.color}/30`}
                        >
                          {badge.label}
                        </Badge>
                      ))}
                      {featured && (
                        <Badge variant="outline" className="border-rusty-orange/50 text-rusty-orange">
                          Featured
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section - Between Hero and Main Content */}
      {reviewsSection && (
        <section className="py-xl bg-muted/30 border-y border-border/20">
          <div className="container mx-auto max-w-7xl px-lg">
            {reviewsSection}
          </div>
        </section>
      )}
      
      {/* Main Content with Right Sidebar */}
      <main className="py-xl bg-background">
        <div className="container mx-auto max-w-[1440px] px-lg">
          <div className="flex gap-2xl">
            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl">
              {content.content}
              
              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-xl pt-lg border-t border-border">
                  <div className="flex items-center gap-base flex-wrap">
                    <div className="flex items-center gap-xs text-sm font-medium text-muted-foreground">
                      <span>Tags:</span>
                    </div>
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Sidebar - Integrated into background */}
            {sidebar.sections.length > 0 && (
              <div className="hidden lg:block w-96">
                <div className="space-y-lg">
                  {sidebar.sections.map((sidebarSection) => (
                    <Card key={sidebarSection.id} className={`shadow-none border-0 bg-transparent ${sidebarSection.className || ''}`}>
                      <CardHeader className="pb-base px-0">
                        <CardTitle className="font-rajdhani text-heading-sm text-nav-directory">
                          {sidebarSection.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-0">
                        {sidebarSection.content}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Sidebar - Below Content */}
          {sidebar.sections.length > 0 && (
            <div className="lg:hidden mt-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {sidebar.sections.map((sidebarSection) => (
                  <Card key={`mobile-${sidebarSection.id}`} className={`shadow-none border-0 bg-transparent ${sidebarSection.className || ''}`}>
                    <CardHeader className="px-0">
                      <CardTitle className="font-rajdhani text-heading-sm">
                        {sidebarSection.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      {sidebarSection.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <SiteFooter currentPage={section.name.toLowerCase()} />
    </div>
  )
}