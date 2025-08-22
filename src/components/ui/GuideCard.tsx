'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, EyeIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export interface GuideData {
  id: string
  title: string
  description: string
  excerpt: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  readTime: number
  author: string
  publishDate: string
  lastUpdated: string
  views: number
  likes: number
  tags: string[]
  featured: boolean
  verified: boolean
  slug: string
  image?: string
  downloadUrl?: string
}

interface GuideCardProps {
  guide: GuideData
  className?: string
}

export function GuideCard({ guide, className }: GuideCardProps) {
  return (
    <Link href={`/guides/${guide.slug}`} className="block">
      <Card className={`mica-card h-full hover:shadow-elevated transition-all duration-300 rounded-xs overflow-hidden ${className || ''}`}>
        <CardContent className="p-base">
          <div className="space-y-base">
            {/* Header with badges */}
            <div className="flex items-start justify-between">
              <div className="flex flex-wrap gap-xs">
                <Badge className="bg-nav-intel/20 text-nav-intel border-nav-intel/30 text-xs">
                  {guide.category}
                </Badge>
                {guide.featured && (
                  <Badge className="bg-star/20 text-star border-star/30 text-xs">
                    <StarIcon className="h-3 w-3 mr-xs" />
                    Featured
                  </Badge>
                )}
              </div>
              {guide.verified && (
                <CheckCircleIcon className="h-4 w-4 text-nav-intel" />
              )}
            </div>

            {/* Title and meta */}
            <div>
              <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground line-clamp-2 mb-xs">
                {guide.title}
              </h3>
              <div className="flex items-center gap-sm text-xs text-muted-foreground">
                <ClockIcon className="h-3 w-3" />
                <span>{guide.readTime} min read</span>
                <EyeIcon className="h-3 w-3" />
                <span>{guide.views.toLocaleString()}</span>
                <Badge variant="outline" className="text-xs">
                  {guide.difficulty}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              {guide.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-xs">
              {guide.tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-base border-t border-border">
              <div className="text-xs text-muted-foreground">
                by {guide.author}
              </div>
              <div className="flex items-center gap-xs">
                <HeartIcon className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{guide.likes}</span>
              </div>
            </div>

            {/* Read button on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                size="sm" 
                className="w-full bg-nav-intel text-white hover:bg-nav-intel/90 font-rajdhani font-bold"
              >
                Read Guide
                <ArrowRightIcon className="h-3 w-3 ml-xs" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}