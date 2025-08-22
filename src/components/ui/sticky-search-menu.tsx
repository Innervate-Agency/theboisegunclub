'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Badge } from './badge'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface StickySearchMenuProps {
  categories: Array<{
    label: string
    value: string
    count: number
  }>
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  triggerElementId?: string
}

export function StickySearchMenu({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  triggerElementId = 'featured-events-section'
}: StickySearchMenuProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById(triggerElementId)
      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect()
        const hasScrolledPast = rect.bottom < 0
        setIsVisible(hasScrolledPast)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [triggerElementId])

  if (!isVisible) return null

  return (
    <div className="fixed top-micro6 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-whisper">
      <div className="container mx-auto max-w-site px-md py-base">
        <div className="flex flex-col lg:flex-row items-center gap-base justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-xs">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.value)}
                className={selectedCategory === category.value ? 
                  "bg-sandy-ochre text-dark-chocolate hover:bg-rusty-orange" : 
                  "border-sandy-ochre/30 text-sandy-ochre hover:bg-sandy-ochre hover:text-dark-chocolate"
                }
              >
                {category.label}
                <Badge variant="outline" className="ml-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="flex gap-xs">
            <div className="relative min-w-[300px]">
              <MagnifyingGlassIcon className="absolute left-3 top-micro/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-xs">
              <FunnelIcon className="size-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}