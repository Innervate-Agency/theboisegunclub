'use client'

import React from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { MotionDiv, MotionSpan, MotionButton } from '@/components/ui/optimized-motion'

interface ScrollProgressBarProps {
  className?: string
  height?: number
  color?: string
  position?: 'top' | 'bottom'
  container?: React.RefObject<HTMLElement>
  showPercentage?: boolean
}

export function ScrollProgressBar({
  className = '',
  height = 3,
  color = 'bg-gradient-to-r from-nav-primary to-nav-secondary',
  position = 'top',
  container,
  showPercentage = false
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll({
    container: container?.current || undefined
  })

  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Smooth spring for percentage display
  const percentage = useSpring(0, {
    stiffness: 100,
    damping: 30
  })

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      percentage.set(Math.round(latest * 100))
    })
  }, [scrollYProgress, percentage])

  const positionClasses = position === 'top' 
    ? 'top-0' 
    : 'bottom-0'

  return (
    <>
      {/* Progress Bar */}
      <MotionDiv
        className={`fixed left-0 right-0 z-50 ${positionClasses} ${className}`}
        style={{
          height: `${height}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <MotionDiv
          className={`h-full origin-left ${color}`}
          style={{ scaleX }}
        />
      </MotionDiv>

      {/* Optional Percentage Display */}
      {showPercentage && (
        <MotionDiv
          className="fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-medium text-foreground">
            <MotionSpan>{percentage}</MotionSpan>%
          </span>
        </MotionDiv>
      )}
    </>
  )
}

// Enhanced scroll progress with sections tracking
interface ScrollProgressWithSectionsProps extends ScrollProgressBarProps {
  sections: Array<{
    id: string
    title: string
    ref: React.RefObject<HTMLElement>
  }>
  onSectionChange?: (sectionId: string) => void
}

export function ScrollProgressWithSections({
  sections,
  onSectionChange,
  ...progressProps
}: ScrollProgressWithSectionsProps) {
  const [activeSection, setActiveSection] = React.useState<string>('')

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
          onSectionChange?.(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current)
      }
    })

    return () => observer.disconnect()
  }, [sections, onSectionChange])

  return (
    <>
      <ScrollProgressBar {...progressProps} />
      
      {/* Section Navigation Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 space-y-2">
        {sections.map((section) => (
          <MotionButton
            key={section.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-foreground scale-150'
                : 'bg-muted-foreground/50 hover:bg-muted-foreground'
            }`}
            onClick={() => {
              section.ref.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center' 
              })
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={section.title}
          />
        ))}
      </div>
    </>
  )
}

// Reading time estimator hook
export function useReadingProgress(contentRef: React.RefObject<HTMLElement>) {
  const [readingTime, setReadingTime] = React.useState(0)
  const [wordsRead, setWordsRead] = React.useState(0)
  const [totalWords, setTotalWords] = React.useState(0)
  
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  })

  React.useEffect(() => {
    if (contentRef.current) {
      const text = contentRef.current.textContent || ''
      const wordCount = text.trim().split(/\s+/).length
      setTotalWords(wordCount)
      // Average reading speed: 200 words per minute
      setReadingTime(Math.ceil(wordCount / 200))
    }
  }, [contentRef])

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setWordsRead(Math.round(totalWords * latest))
    })
  }, [scrollYProgress, totalWords])

  return {
    readingTime,
    wordsRead,
    totalWords,
    progress: totalWords > 0 ? wordsRead / totalWords : 0,
    scrollProgress: scrollYProgress
  }
}