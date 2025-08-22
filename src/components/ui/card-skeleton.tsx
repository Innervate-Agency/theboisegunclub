'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { ViewMode } from './card-page-layout'

export interface CardSkeletonProps {
  viewMode?: ViewMode
  count?: number
  className?: string
}

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse bg-muted rounded-sm", className)} />
)

const EventCardSkeleton = () => (
  <div className="bg-card border border-border rounded-xs overflow-hidden">
    {/* Hero section */}
    <SkeletonBox className="h-32 rounded-none" />
    
    <div className="p-md space-y-md">
      {/* Title and subtitle */}
      <div className="space-y-sm">
        <SkeletonBox className="h-6 w-3/4" />
        <SkeletonBox className="h-4 w-1/2" />
      </div>
      
      {/* Description */}
      <div className="space-y-xs">
        <SkeletonBox className="h-3 w-full" />
        <SkeletonBox className="h-3 w-5/6" />
        <SkeletonBox className="h-3 w-2/3" />
      </div>
      
      {/* Badges */}
      <div className="flex gap-xs">
        <SkeletonBox className="h-5 w-16" />
        <SkeletonBox className="h-5 w-20" />
      </div>
      
      {/* Info grid */}
      <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
        <SkeletonBox className="h-4 w-3/4" />
        <SkeletonBox className="h-4 w-1/2" />
        <SkeletonBox className="h-4 w-2/3" />
      </div>
      
      {/* CTA button */}
      <SkeletonBox className="h-8 w-full" />
    </div>
  </div>
)

const CompactCardSkeleton = () => (
  <div className="bg-card border border-border rounded-xs overflow-hidden">
    <SkeletonBox className="h-20 rounded-none" />
    <div className="p-sm space-y-sm">
      <SkeletonBox className="h-4 w-3/4" />
      <SkeletonBox className="h-3 w-1/2" />
      <SkeletonBox className="h-6 w-full" />
    </div>
  </div>
)

const ListItemSkeleton = () => (
  <div className="bg-card border border-border rounded-xs p-md">
    <div className="flex gap-lg">
      <SkeletonBox className="h-16 w-16 flex-shrink-0" />
      <div className="flex-1 space-y-sm">
        <SkeletonBox className="h-5 w-2/3" />
        <SkeletonBox className="h-4 w-1/2" />
        <div className="flex gap-xs">
          <SkeletonBox className="h-3 w-16" />
          <SkeletonBox className="h-3 w-20" />
        </div>
      </div>
      <SkeletonBox className="h-8 w-24 flex-shrink-0" />
    </div>
  </div>
)

const TableRowSkeleton = () => (
  <div className="grid grid-cols-3 gap-lg items-center p-md border-b border-border">
    <div className="flex items-center gap-sm">
      <SkeletonBox className="h-8 w-8" />
      <SkeletonBox className="h-4 w-32" />
    </div>
    <div className="space-y-xs">
      <SkeletonBox className="h-3 w-24" />
      <SkeletonBox className="h-3 w-16" />
    </div>
    <SkeletonBox className="h-6 w-20 justify-self-end" />
  </div>
)

const MasonryItemSkeleton = ({ height }: { height: number }) => (
  <div className="masonry-item">
    <div className="bg-card border border-border rounded-xs overflow-hidden">
      <SkeletonBox className={`h-${height} rounded-none`} />
      <div className="p-sm space-y-sm">
        <SkeletonBox className="h-4 w-3/4" />
        <SkeletonBox className="h-3 w-1/2" />
      </div>
    </div>
  </div>
)

const MagazineItemSkeleton = ({ size }: { size: 'small' | 'medium' | 'large' | 'hero' }) => (
  <div className={`magazine-item-${size} bg-card border border-border rounded-xs overflow-hidden`}>
    <SkeletonBox className="h-full w-full rounded-none" />
    <div className="absolute bottom-0 left-0 right-0 p-sm bg-gradient-to-t from-black/80 to-transparent">
      <SkeletonBox className="h-4 w-3/4 bg-white/20" />
    </div>
  </div>
)

export function CardSkeleton({ 
  viewMode = 'grid', 
  count = 12, 
  className 
}: CardSkeletonProps) {
  const getSkeletonComponent = () => {
    switch (viewMode) {
      case 'compact':
        return Array.from({ length: count }, (_, i) => (
          <CompactCardSkeleton key={i} />
        ))
      
      case 'dense':
        return Array.from({ length: count }, (_, i) => (
          <CompactCardSkeleton key={i} />
        ))
      
      case 'list':
        return Array.from({ length: count }, (_, i) => (
          <ListItemSkeleton key={i} />
        ))
      
      case 'table':
        return Array.from({ length: count }, (_, i) => (
          <TableRowSkeleton key={i} />
        ))
      
      case 'masonry':
        const heights = [20, 24, 28, 32, 36] // Various heights for masonry
        return Array.from({ length: count }, (_, i) => (
          <MasonryItemSkeleton 
            key={i} 
            height={heights[i % heights.length]} 
          />
        ))
      
      case 'magazine':
        const sizes: ('small' | 'medium' | 'large' | 'hero')[] = ['small', 'medium', 'large', 'hero']
        return Array.from({ length: count }, (_, i) => (
          <MagazineItemSkeleton 
            key={i} 
            size={sizes[i % sizes.length]} 
          />
        ))
      
      case 'grid':
      case 'card':
      default:
        return Array.from({ length: count }, (_, i) => (
          <EventCardSkeleton key={i} />
        ))
    }
  }

  const getContainerClassName = () => {
    switch (viewMode) {
      case 'compact':
        return "grid-compact"
      case 'dense':
        return "grid-dense-md"
      case 'card':
        return "grid-auto-fill-350"
      case 'masonry':
        return "grid-masonry"
      case 'magazine':
        return "grid-magazine"
      case 'table':
        return "grid-table"
      case 'list':
        return "flex flex-col gap-base"
      case 'grid':
      default:
        return "grid-auto-fill-320"
    }
  }

  return (
    <div className={cn(getContainerClassName(), "animate-pulse", className)}>
      {getSkeletonComponent()}
    </div>
  )
}

export default CardSkeleton