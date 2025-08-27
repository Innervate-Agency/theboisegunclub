'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavigationItem {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  color: string
}

interface StickyHomepageNavigationProps {
  sections: NavigationItem[]
  className?: string
}

export function StickyHomepageNavigation({ 
  sections, 
  className 
}: StickyHomepageNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Intersection Observer for tracking active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    )

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    // Show navigation after hero section
    const heroElement = document.getElementById('hero')
    if (heroElement) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting)
        },
        { threshold: 0.1 }
      )
      heroObserver.observe(heroElement)
    }

    return () => {
      observer.disconnect()
    }
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const activeItem = sections.find(section => section.id === activeSection)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "fixed left-4 top-1/2 -translate-y-1/2 z-40 w-80",
            "hidden lg:block",
            className
          )}
        >
          {/* Main container with Stripe-style morphing */}
          <div className="relative">
            {/* Background that morphs based on content */}
            <motion.div
              layout
              className="absolute inset-0 rounded-2xl border border-border/20 shadow-hero"
              style={{
                backgroundColor: 'var(--card)',
                backdropFilter: 'blur(20px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Content area */}
            <div className="relative p-6 space-y-6">
              {/* Active section display */}
              <AnimatePresence mode="wait">
                {activeItem && (
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {/* Icon and title */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        layout
                        className="p-2 rounded-lg"
                        style={{ 
                          backgroundColor: `rgb(from var(--${activeItem.color}) r g b / 0.1)`,
                          color: `var(--${activeItem.color})`
                        }}
                      >
                        {activeItem.icon}
                      </motion.div>
                      <div>
                        <motion.h3 
                          layout
                          className="font-rajdhani font-bold text-lg text-card-foreground"
                        >
                          {activeItem.label}
                        </motion.h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                      layout
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {activeItem.description}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center w-full text-left p-2 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    {/* Progress indicator */}
                    <motion.div
                      className="w-2 h-2 rounded-full mr-3 transition-colors"
                      animate={{
                        backgroundColor: activeSection === section.id 
                          ? `var(--${section.color})` 
                          : 'var(--muted-foreground)',
                        scale: activeSection === section.id ? 1.2 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Section label */}
                    <motion.span 
                      className="text-sm font-medium transition-colors"
                      animate={{
                        color: activeSection === section.id 
                          ? 'var(--card-foreground)' 
                          : 'var(--muted-foreground)'
                      }}
                    >
                      {section.label}
                    </motion.span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Pre-configured navigation for homepage sections
export const HomepageNavigation = () => {
  const sections = [
    {
      id: 'hero',
      label: 'Welcome',
      description: 'Your central hub for all things firearms in the Treasure Valley.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6-3 6 3v10l-6 3-6-3V7z" />
        </svg>
      ),
      color: 'nav-home'
    },
    {
      id: 'platform-features',
      label: 'Features',
      description: 'Six pillars built by Idaho gun owners, for Idaho gun owners.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'nav-directory'
    },
    {
      id: 'featured-content',
      label: 'Content',
      description: 'Latest updates, guides, and community highlights.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'nav-intel'
    },
    {
      id: 'directory-stats',
      label: 'Directory',
      description: 'Verified FFLs, ranges, trainers, and community members.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'nav-directory'
    },
    {
      id: 'buysell-deals',
      label: 'Buy & Sell',
      description: 'Find deals, gear, and connect with local sellers.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'nav-buysell'
    },
    {
      id: 'platform-values',
      label: 'Values',
      description: 'Our commitment to the Idaho firearms community.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'nav-armory'
    }
  ]

  return <StickyHomepageNavigation sections={sections} />
}