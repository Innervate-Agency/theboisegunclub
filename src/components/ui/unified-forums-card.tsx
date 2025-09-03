'use client'

import React from 'react'
import { UnifiedGalleryCard } from './unified-gallery-card'
import { ChatBubbleLeftRightIcon, ClockIcon, EyeIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/24/outline'

/**
 * Unified Forums Card
 * 
 * FORUMS-SPECIFIC IMPLEMENTATION:
 * - Thread titles and discussion topics
 * - User engagement metrics (replies, views, likes)
 * - Author information and post timing
 * - Thread status and activity indicators
 */

export interface UnifiedForumsCardProps {
  title: string
  category: string
  author: string
  authorAvatar?: string
  postDate: string
  lastActivity?: string
  replyCount: number
  viewCount: number
  likeCount?: number
  isPinned?: boolean
  isLocked?: boolean
  hasUnreadPosts?: boolean
  excerpt?: string
  tags?: string[]
  slug?: string
  href?: string
  viewMode?: 'grid' | 'dense' | 'card' | 'compact' | 'list' | 'table'
}

export function UnifiedForumsCard({
  title,
  category,
  author,
  authorAvatar,
  postDate,
  lastActivity,
  replyCount,
  viewCount,
  likeCount,
  isPinned = false,
  isLocked = false,
  hasUnreadPosts = false,
  excerpt,
  tags = [],
  slug,
  href,
  viewMode = 'grid'
}: UnifiedForumsCardProps) {
  
  // Generate href if not provided
  const threadHref = href || `/forums/${slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`
  
  // Get category gradient
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'General Discussion': 
        return 'bg-gradient-to-br from-nav-forums via-warm-stone to-aged-paper'
      case 'Technical Q&A': 
        return 'bg-gradient-to-br from-slate-blue via-scope-blue to-info-river'
      case 'Buy/Sell/Trade': 
        return 'bg-gradient-to-br from-nav-buysell via-sagebrush-green to-lodgepole-green'
      case 'Local Events': 
        return 'bg-gradient-to-br from-nav-events via-rusty-orange to-canyon-clay'
      case 'Reviews': 
        return 'bg-gradient-to-br from-nav-armory via-foothills-purple to-canyon-clay'
      case 'New Members': 
        return 'bg-gradient-to-br from-weathered-gold via-sandy-ochre to-rusty-orange'
      default: 
        return 'bg-gradient-to-br from-nav-forums via-warm-stone to-aged-paper'
    }
  }
  
  // Activity info for hero section
  const heroContent = (
    <div className="absolute top-lg right-lg">
      <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
        <div className="text-center">
          {isPinned && (
            <div className="text-xs text-yellow-400 font-bold mb-xs">PINNED</div>
          )}
          {isLocked && (
            <div className="text-xs text-red-400 font-bold mb-xs">LOCKED</div>
          )}
          <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
            {category}
          </div>
          <div className="flex items-center justify-center gap-xs mt-xs">
            <ChatBubbleLeftRightIcon className="size-3 text-white" />
            <span className="text-xs text-white font-bold">{replyCount}</span>
          </div>
          <div className="flex items-center justify-center gap-xs mt-xs">
            <EyeIcon className="size-3 text-white" />
            <span className="text-xs text-white">{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
  
  // Calculate time since post
  const timeSincePost = () => {
    const now = new Date()
    const posted = new Date(postDate)
    const diffInHours = Math.floor((now.getTime() - posted.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const days = Math.floor(diffInHours / 24)
    if (days < 30) return `${days}d ago`
    const months = Math.floor(days / 30)
    return `${months}mo ago`
  }
  
  return (
    <UnifiedGalleryCard
      section="forums"
      viewMode={viewMode}
      title={title}
      description={excerpt}
      href={threadHref}
      heroGradient={getCategoryGradient(category)}
      heroContent={heroContent}
      badges={[
        ...(isPinned ? [{ label: 'PINNED', variant: "outline", color: "weathered-gold" }] : []),
        ...(isLocked ? [{ label: 'LOCKED', variant: "outline", color: "canyon-clay" }] : []),
        ...(hasUnreadPosts ? [{ label: 'NEW POSTS', variant: "outline", color: "sagebrush-green" }] : []),
        ...(likeCount && likeCount > 0 ? [{ 
          label: `${likeCount} ♥`, 
          variant: "outline",
          color: "rusty-orange"
        }] : [])
      ]}
      metadata={[
        { icon: UserIcon, label: "Author", value: author },
        { icon: ClockIcon, label: "Posted", value: timeSincePost() },
        { icon: ChatBubbleLeftRightIcon, label: "Replies", value: replyCount.toString() },
        { icon: EyeIcon, label: "Views", value: viewCount.toString() }
      ]}
      primaryAction={{
        label: "View Thread",
        href: threadHref
      }}
    />
  )
}