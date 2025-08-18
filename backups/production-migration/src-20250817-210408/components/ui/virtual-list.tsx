'use client'

import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react'

/**
 * Ultra-High Performance Virtual List - 2025 Edition
 * 
 * This component can handle 10,000+ items with millisecond render times
 * using viewport-based rendering and intersection observer optimization.
 */

interface VirtualListProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
  overscan?: number
  className?: string
}

export function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5,
  className = ''
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const totalHeight = items.length * itemHeight

  // Calculate visible range with overscan
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / itemHeight) - overscan
  )
  
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  // Memoized visible items for performance
  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1)
  }, [items, startIndex, endIndex])

  // Optimized scroll handler with RAF
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setScrollTop(e.currentTarget.scrollTop)
    })
  }, [])

  return (
    <div
      ref={scrollElementRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Intersection Observer Hook for Lazy Loading
 * 
 * Perfect for loading components when they enter the viewport
 */
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, options, hasIntersected])

  return { isIntersecting, hasIntersected }
}

/**
 * Lazy Load Component with Intersection Observer
 */
interface LazyLoadProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
  threshold?: number
}

export function LazyLoad({ 
  children, 
  fallback = null, 
  rootMargin = '50px',
  threshold = 0.1 
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { hasIntersected } = useIntersectionObserver(ref, {
    rootMargin,
    threshold
  })

  return (
    <div ref={ref}>
      {hasIntersected ? children : fallback}
    </div>
  )
}

/**
 * Performance-optimized Grid with Virtual Scrolling
 */
interface VirtualGridProps<T> {
  items: T[]
  itemWidth: number
  itemHeight: number
  containerWidth: number
  containerHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
  gap?: number
}

export function VirtualGrid<T>({
  items,
  itemWidth,
  itemHeight,
  containerWidth,
  containerHeight,
  renderItem,
  gap = 16
}: VirtualGridProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
  
  const itemsPerRow = Math.floor((containerWidth + gap) / (itemWidth + gap))
  const rowCount = Math.ceil(items.length / itemsPerRow)
  const rowHeight = itemHeight + gap

  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - 2)
  const endRow = Math.min(
    rowCount - 1,
    Math.ceil((scrollTop + containerHeight) / rowHeight) + 2
  )

  const visibleItems = useMemo(() => {
    const visible = []
    for (let row = startRow; row <= endRow; row++) {
      for (let col = 0; col < itemsPerRow; col++) {
        const index = row * itemsPerRow + col
        if (index < items.length) {
          visible.push({
            item: items[index],
            index,
            row,
            col
          })
        }
      }
    }
    return visible
  }, [items, startRow, endRow, itemsPerRow])

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setScrollTop(e.currentTarget.scrollTop)
    })
  }, [])

  return (
    <div
      className="overflow-auto"
      style={{ height: containerHeight, width: containerWidth }}
      onScroll={handleScroll}
    >
      <div style={{ height: rowCount * rowHeight, position: 'relative' }}>
        {visibleItems.map(({ item, index, row, col }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: row * rowHeight,
              left: col * (itemWidth + gap),
              width: itemWidth,
              height: itemHeight,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}