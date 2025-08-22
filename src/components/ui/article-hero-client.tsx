'use client'

import React from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { MotionDiv, MotionSection, MotionH1, MotionP } from '@/components/ui/optimized-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollProgressBar } from './scroll-progress-bar'
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, EyeIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'

interface ArticleHeroClientProps {
  title: string
  excerpt?: string
  category: string
  featured?: boolean
  image?: string
  sectionName: string
  sectionPath: string
  sectionColor: string
  author: { name: string; title?: string }
  publishDate: string
  readTime: number
  views: number
  tags: string[]
}

export function ArticleHeroClient({
  title,
  excerpt,
  category,
  featured = false,
  image,
  sectionName,
  sectionPath,
  sectionColor,
  author,
  publishDate,
  readTime,
  views,
  tags
}: ArticleHeroClientProps) {
  // Parallax effect for hero background
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar
        color={`bg-gradient-to-r from-${sectionColor} to-${sectionColor}`}
        showPercentage={true}
      />

      {/* Epic Hero Section with Parallax */}
      <MotionSection 
        className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md py-4xl"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background Image with Parallax */}
        {image && (
          <MotionDiv 
            className="absolute inset-0 z-0"
            style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-muted/60" />
          </MotionDiv>
        )}
        
        <div className="relative z-10 container mx-auto max-w-site">
          {/* Breadcrumb Navigation */}
          <MotionDiv 
            className="flex items-center gap-xs text-sm text-muted-foreground mb-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <CaretRight className="h-4 w-4" />
            <Link href={sectionPath} className={`hover:text-${sectionColor} transition-colors`}>
              {sectionName}
            </Link>
            <CaretRight className="h-4 w-4" />
            <span className={`text-${sectionColor} font-medium`}>{title}</span>
          </MotionDiv>
          
          {/* Back Button */}
          <MotionDiv 
            className="mb-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href={sectionPath}>
              <Button variant="ghost" className="gap-xs hover:gap-sm transition-all">
                <ArrowLeftIcon className="h-4 w-4" />
                Back to {sectionName}
              </Button>
            </Link>
          </MotionDiv>
          
          {/* Article Header */}
          <MotionDiv
            className="max-w-4xl space-y-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Category and Featured Badge */}
            <div className="flex items-center gap-base">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className={`bg-${sectionColor}/20 text-${sectionColor} border-${sectionColor}/30`}>
                  {category}
                </Badge>
              </MotionDiv>
              {featured && (
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="outline" className="border-rusty-orange/50 text-rusty-orange">
                    Featured
                  </Badge>
                </MotionDiv>
              )}
            </div>
            
            {/* Title with Animated Reveal */}
            <MotionH1 
              className="font-rajdhani text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              {title}
            </MotionH1>

            {/* Excerpt */}
            {excerpt && (
              <MotionP 
                className="text-xl text-muted-foreground leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {excerpt}
              </MotionP>
            )}

            {/* Article Meta */}
            <MotionDiv 
              className="flex flex-wrap items-center gap-lg text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-xs">
                <UserIcon className="h-4 w-4" />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-xs">
                <CalendarDaysIcon className="h-4 w-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-xs">
                <ClockIcon className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center gap-xs">
                <EyeIcon className="h-4 w-4" />
                <span>{views.toLocaleString()} views</span>
              </div>
            </MotionDiv>

            {/* Tags */}
            {tags.length > 0 && (
              <MotionDiv 
                className="flex flex-wrap gap-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {tags.map((tag, index) => (
                  <MotionDiv
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (index * 0.1), duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-xs">
                      <TagIcon className="h-3 w-3 mr-xs" />
                      {tag}
                    </Badge>
                  </MotionDiv>
                ))}
              </MotionDiv>
            )}
          </MotionDiv>
        </div>
      </MotionSection>
    </>
  )
}