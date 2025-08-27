'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon,
  CalendarIcon, 
  UserGroupIcon,
  ShoppingBagIcon,
  HeartIcon,
  PlusCircleIcon,
  ArrowUpIcon
} from '@heroicons/24/outline'

interface Section {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  description: string
}

const sections: Section[] = [
  {
    id: 'hero',
    title: 'Welcome Home',
    subtitle: 'Idaho\'s premier firearms community',
    icon: HomeIcon,
    color: 'text-nav-home',
    description: 'Your gateway to Idaho\'s firearms community'
  },
  {
    id: 'platform-features',
    title: 'Six Pillars',
    subtitle: 'What makes us different',
    icon: PlusCircleIcon,
    color: 'text-nav-home',
    description: 'Six core principles that drive our community'
  },
  {
    id: 'featured-content',
    title: 'Featured Content',
    subtitle: 'Latest guides & insights',
    icon: CalendarIcon,
    color: 'text-nav-events',
    description: 'Expert knowledge and community insights'
  },
  {
    id: 'directory-stats',
    title: 'Directory',
    subtitle: 'Idaho firearms businesses',
    icon: UserGroupIcon,
    color: 'text-nav-directory',
    description: 'Connect with local businesses and services'
  },
  {
    id: 'buysell-deals',
    title: 'Buy & Sell',
    subtitle: 'Deals and opportunities',
    icon: ShoppingBagIcon,
    color: 'text-nav-buysell',
    description: 'Find the best deals from trusted vendors'
  },
  {
    id: 'platform-values',
    title: 'Our Values',
    subtitle: 'What we stand for',
    icon: HeartIcon,
    color: 'text-nav-home',
    description: 'The principles that guide our community'
  }
]

export function StickyHomepageNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const bottom = top + element.offsetHeight
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(element.dataset.section || 'hero')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScrollProgress)
    return () => window.removeEventListener('scroll', handleScrollProgress)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentSection = sections.find(section => section.id === activeSection) || sections[0]

  return (
    <motion.div 
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Main Navigation Hub */}
      <div className="bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-prominent p-6 w-80">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Scroll Progress
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-nav-home to-nav-events rounded-full transition-all duration-200"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Current Section Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 rounded-lg bg-muted/50"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg bg-background ${currentSection.color}`}>
                <currentSection.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-rajdhani font-semibold text-lg text-foreground">
                  {currentSection.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {currentSection.subtitle}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {currentSection.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Navigation */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Jump to Section
          </h4>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-200 text-left group
                ${activeSection === section.id 
                  ? 'bg-primary text-primary-foreground shadow-present' 
                  : 'hover:bg-muted/70 text-muted-foreground hover:text-foreground'
                }`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-200
                ${activeSection === section.id ? 'bg-primary-foreground' : 'bg-muted-foreground group-hover:bg-foreground'}
              `} />
              <span className="text-sm font-medium">{section.title}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpIcon className="w-3 h-3 rotate-45" />
              </div>
            </button>
          ))}
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="w-full mt-4 p-3 bg-nav-home text-white rounded-lg font-medium text-sm 
                     hover:shadow-elevated transition-all duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowUpIcon className="w-4 h-4" />
          Back to Top
        </motion.button>
      </div>

      {/* Tactical Corner Accent */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-nav-home rounded-sm opacity-80" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-nav-events rounded-sm opacity-60" />
    </motion.div>
  )
}