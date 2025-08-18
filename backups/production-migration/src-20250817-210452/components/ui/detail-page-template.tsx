'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  ChevronRight, ArrowLeft, Share2, Bookmark
} from 'lucide-react'
import Link from 'next/link'

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
}

export default function DetailPageTemplate({
  header,
  content,
  sidebar,
  heroImage,
  heroContent,
  className = ''
}: DetailPageTemplateProps) {
  const { meta, section, breadcrumbs = [], actions = [] } = header
  const { title, description, featured, tags = [], badges = [] } = meta

  return (
    <div className={`theme-${section.name.toLowerCase()} min-h-screen ${className}`}>
      <SiteNavigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md py-xl">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-lg">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={section.path} className={`hover:text-${section.color} transition-colors`}>
              {section.name}
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="h-4 w-4" />
                <Link href={crumb.href} className={`hover:text-${section.color} transition-colors`}>
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
            <ChevronRight className="h-4 w-4" />
            <span className={`text-${section.color} font-medium`}>{title}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-lg">
            <Link href={section.path}>
              <Button variant="ghost" className="gap-xs">
                <ArrowLeft className="h-4 w-4" />
                Back to {section.name}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Header Content - Left Side */}
            <div className="lg:col-span-2 space-y-lg">
              {/* Badges */}
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
              
              {/* Title */}
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              
              {/* Description */}
              {description && (
                <p className="text-body-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {description}
                </p>
              )}
              
              {/* Hero Content - Custom content for each type */}
              {heroContent}
              
              {/* Action Buttons */}
              {actions.length > 0 && (
                <div className="flex items-center gap-base flex-wrap">
                  {actions.map((action, index) => {
                    const ActionIcon = action.icon
                    const buttonContent = (
                      <>
                        {ActionIcon && <ActionIcon className="h-4 w-4" />}
                        {action.label}
                      </>
                    )
                    
                    if (action.href) {
                      return (
                        <Button
                          key={index}
                          variant={action.variant as any || "outline"}
                          size={action.size as any || "sm"}
                          className={`gap-xs ${action.className || ''}`}
                          asChild
                        >
                          <Link href={action.href}>
                            {buttonContent}
                          </Link>
                        </Button>
                      )
                    }
                    
                    return (
                      <Button
                        key={index}
                        variant={action.variant as any || "outline"}
                        size={action.size as any || "sm"}
                        className={`gap-xs ${action.className || ''}`}
                        onClick={action.onClick}
                      >
                        {buttonContent}
                      </Button>
                    )
                  })}
                  
                  {/* Default Share and Save buttons for all types */}
                  <Button variant="outline" size="sm" className="gap-xs">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-xs">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              )}
            </div>
            
            {/* Hero Image/Card - Right Side */}
            {heroImage && (
              <div className="lg:col-span-1">
                <div className="relative overflow-hidden rounded-xs">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${section.color}/20 to-transparent`}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
            {/* Main Content Area */}
            <div className={content.type === 'article' ? 'lg:col-span-3' : 'lg:col-span-2'}>
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
            
            {/* Sidebar */}
            <aside className={content.type === 'article' ? 'lg:col-span-1' : 'lg:col-span-1'}>
              <div className="space-y-lg">
                {sidebar.sections.map((sidebarSection) => (
                  <Card key={sidebarSection.id} className={`shadow-present ${sidebarSection.className || ''}`}>
                    <CardHeader>
                      <CardTitle className="font-rajdhani text-heading-sm">
                        {sidebarSection.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {sidebarSection.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <SiteFooter currentPage={section.name.toLowerCase()} />
    </div>
  )
}