'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SimpleStickyNavProps {
  className?: string
}

export function SimpleStickyNav({ className }: SimpleStickyNavProps) {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    { id: 'hero', label: 'Welcome', color: 'nav-home' },
    { id: 'platform-features', label: 'Features', color: 'nav-directory' },
    { id: 'featured-content', label: 'Content', color: 'nav-intel' },
    { id: 'directory-stats', label: 'Directory', color: 'nav-directory' },
    { id: 'marketplace-deals', label: 'Marketplace', color: 'nav-marketplace' },
    { id: 'platform-values', label: 'Values', color: 'nav-armory' },
    { id: 'join-movement', label: 'Join', color: 'nav-home' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    )

    // Observe sections
    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    // Show/hide navigation based on hero visibility
    const heroElement = document.getElementById('hero')
    if (heroElement) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => setIsVisible(!entry.isIntersecting),
        { threshold: 0.1 }
      )
      heroObserver.observe(heroElement)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "fixed left-4 top-1/2 -translate-y-1/2 z-40 w-64",
            "hidden lg:block",
            className
          )}
        >
          <div 
            className="rounded-2xl border border-border/20 shadow-hero p-4"
            style={{
              backgroundColor: 'var(--card)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="space-y-2">
              <h3 className="text-sm font-rajdhani font-bold text-card-foreground mb-3">
                Page Sections
              </h3>
              
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center w-full text-left p-2 rounded-lg hover:bg-muted/30 transition-colors"
                >
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
                  
                  <span 
                    className={cn(
                      "text-sm font-medium transition-colors",
                      activeSection === section.id 
                        ? "text-card-foreground" 
                        : "text-muted-foreground"
                    )}
                  >
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}