'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ResizableSidebarProps {
  children: React.ReactNode
  defaultWidth?: number
  minWidth?: number
  maxWidth?: number
  className?: string
}

export function ResizableSidebar({
  children,
  defaultWidth = 256, // 16rem
  minWidth = 240,
  maxWidth = 400,
  className
}: ResizableSidebarProps) {
  const [width, setWidth] = useState(defaultWidth)
  const [isResizing, setIsResizing] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Load saved width from localStorage
  useEffect(() => {
    const savedWidth = localStorage.getItem('armory-sidebar-width')
    if (savedWidth) {
      const parsedWidth = parseInt(savedWidth, 10)
      if (parsedWidth >= minWidth && parsedWidth <= maxWidth) {
        setWidth(parsedWidth)
      }
    }
  }, [minWidth, maxWidth])

  // Save width to localStorage
  useEffect(() => {
    localStorage.setItem('armory-sidebar-width', width.toString())
  }, [width])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return

      const newWidth = e.clientX
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth)
      }
    },
    [isResizing, minWidth, maxWidth]
  )

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={sidebarRef}
      className={cn('relative', className)}
      style={{ width: `${width}px` }}
    >
      {children}
      
      {/* Drag Handle */}
      <div
        className={cn(
          'absolute top-1/2 -right-2 transform -translate-y-1/2 z-50',
          'w-1 h-16 bg-foothills-purple/20 rounded-full cursor-col-resize',
          'hover:bg-foothills-purple/40 hover:w-1.5 transition-all duration-200',
          'opacity-0 hover:opacity-100',
          isResizing && 'opacity-100 bg-foothills-purple/60 w-1.5'
        )}
        onMouseDown={handleMouseDown}
        title="Drag to resize sidebar"
      />
      
      {/* Invisible resize area for better UX */}
      <div
        className="absolute top-0 -right-2 bottom-0 w-4 cursor-col-resize opacity-0"
        onMouseDown={handleMouseDown}
      />
    </div>
  )
}