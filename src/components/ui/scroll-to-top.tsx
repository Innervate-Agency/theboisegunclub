'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

interface ScrollToTopProps {
  className?: string
  threshold?: number
}

export function ScrollToTop({ className, threshold = 300 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      <Button
        onClick={scrollToTop}
        className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 font-rajdhani font-bold group w-14 h-14 rounded-full p-0"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="size-6 text-card-foreground group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200" />
      </Button>
    </div>
  )
}