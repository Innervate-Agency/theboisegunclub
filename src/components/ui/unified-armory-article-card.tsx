'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { BookOpenIcon, ClockIcon, EyeIcon, UserIcon, ScaleIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { getContentTypeColor, getContentTypeGradient, generateGradientCSS } from '@/lib/content-type-colors'

/**
 * Unified Armory Article Card
 * 
 * MATCHES EVENTS CARD STYLE:
 * - Same hero section with gradient background
 * - Consistent metadata structure with icons
 * - Article-specific content (category, author, read time, views)
 * - Same hover states and animations
 */

export interface UnifiedArmoryArticleCardProps {
  title: string
  excerpt: string
  category: string
  author: {
    name: string
    title?: string
    bio?: string
  }
  publishDate: string
  readTime: number
  views: number
  likes: number
  comments: number
  featured?: boolean
  tags: string[]
  image?: string
  slug?: string
  href?: string
  viewMode?: 'waterfall' | 'grid' | 'list' | 'compact' | 'table'
}

export function UnifiedArmoryArticleCard({
  title,
  excerpt,
  category,
  author,
  publishDate,
  readTime,
  views,
  likes,
  comments,
  featured = false,
  tags,
  image,
  slug,
  href,
  viewMode = 'waterfall'
}: UnifiedArmoryArticleCardProps) {
  
  // Generate href if not provided
  const armoryHref = href || `/armory/${slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Format publish date for display (matching Events style)
  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return { month: 'Jan', day: 1, year: '2025' }
    
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    return { month, day, year }
  }
  
  const dateInfo = formatPublishDate(publishDate)
  
  // Get category icon (matching Events pattern)
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'legal': return ScaleIcon
      case 'reviews': return ShieldCheckIcon
      case 'technical': return WrenchScrewdriverIcon
      case 'safety': return ShieldCheckIcon
      case 'maintenance': return WrenchScrewdriverIcon
      default: return BookOpenIcon
    }
  }
  
  // Generate subtitle from article data (matching Events pattern)
  const getArticleSubtitle = () => {
    const elements = []
    
    if (featured) elements.push('Featured Article')
    if (readTime) elements.push(`${readTime} min read`)
    if (author.title) elements.push(author.title)
    
    return elements.join(' • ')
  }
  
  // Get category gradient using content type system (matching Events)
  const getCategoryGradient = (category: string) => {
    const gradientColors = getContentTypeGradient('armory', category)
    return generateGradientCSS(gradientColors, 'to-br')
  }
  
  // Get category color using content type system (matching Events)
  const getCategoryColor = (category: string) => {
    return getContentTypeColor('armory', category)
  }
  
  // Enhanced hero section with date and category info (matching Events style)
  const heroContent = (
    <div className="absolute top-lg left-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center space-y-xs">
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {dateInfo.month}
          </div>
          <div className="font-rajdhani font-black text-xl text-white leading-none">
            {dateInfo.day}
          </div>
          <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
            {category}
          </div>
        </div>
      </div>
    </div>
  )
  
  return (
    <UnifiedGalleryCard
      section="armory"
      viewMode={viewMode}
      title={title}
      subtitle={getArticleSubtitle()}
      description={excerpt}
      href={armoryHref}
      heroGradient={getCategoryGradient(category)}
      heroContent={heroContent}
      contentType={category}
      badges={[
        { 
          label: category, 
          variant: "outline",
          color: getCategoryColor(category)
        },
        ...(featured ? [{ label: 'Featured', variant: "outline", color: "weathered-gold" }] : []),
        ...(readTime <= 5 ? [{ label: 'Quick Read', variant: "outline", color: "sagebrush-green" }] : []),
        ...(views > 1000 ? [{ label: 'Popular', variant: "outline", color: "slate-blue" }] : [])
      ]}
      metadata={[
        { icon: UserIcon, label: "Author", value: author.name },
        { icon: ClockIcon, label: "Read Time", value: `${readTime} min` },
        { icon: EyeIcon, label: "Views", value: views.toLocaleString() },
        ...(likes > 0 ? [{ icon: BookOpenIcon, label: "Engagement", value: `${likes + comments} interactions` }] : [])
      ]}
      primaryAction={{
        label: "Read Article",
        href: armoryHref
      }}
    />
  )
}