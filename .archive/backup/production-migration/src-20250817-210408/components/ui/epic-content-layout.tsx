'use client'

import React from 'react'
import { MotionMain, MotionDiv, MotionAside, MotionSection } from '@/components/ui/optimized-motion'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

interface EpicContentLayoutProps {
  children: React.ReactNode
  sidebarContent?: React.ReactNode
  themeClass?: string
  currentPage?: string
  maxWidth?: 'site' | 'full' | '7xl' | '6xl'
  sidebarPosition?: 'right' | 'left'
  sidebarSticky?: boolean
  className?: string
}

// Page transition variants for smooth navigation
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.4 
    }
  }
}

const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const sidebarVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  }
}

export function EpicContentLayout({
  children,
  sidebarContent,
  themeClass = '',
  currentPage,
  maxWidth = 'site',
  sidebarPosition = 'right',
  sidebarSticky = true,
  className = ''
}: EpicContentLayoutProps) {
  
  // Dynamic max-width classes based on requirements
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'site': return 'max-w-site' // 1440px
      case 'full': return 'max-w-none'
      case '7xl': return 'max-w-7xl' // 1280px
      case '6xl': return 'max-w-6xl' // 1152px
      default: return 'max-w-site'
    }
  }

  // Grid column configuration based on sidebar presence and position
  const getGridConfig = () => {
    if (!sidebarContent) {
      return {
        gridClass: 'grid-cols-1',
        contentClass: 'col-span-1',
        sidebarClass: ''
      }
    }
    
    return {
      gridClass: 'grid-cols-1 lg:grid-cols-4',
      contentClass: sidebarPosition === 'left' ? 'lg:col-span-3 lg:col-start-2' : 'lg:col-span-3',
      sidebarClass: sidebarPosition === 'left' ? 'lg:col-span-1 lg:col-start-1' : 'lg:col-span-1'
    }
  }

  const { gridClass, contentClass, sidebarClass } = getGridConfig()

  return (
    <div className={`${themeClass} min-h-screen ${className}`}>
      <SiteNavigation />
      
      <Motionmain
        className="flex-grow"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Main Content Container - 1440px max width */}
        <div className={`container mx-auto ${getMaxWidthClass()} px-md`}>
          <div className={`grid ${gridClass} gap-xl`}>
            
            {/* Sidebar - Left Position */}
            {sidebarContent && sidebarPosition === 'left' && (
              <Motionaside
                className={`${sidebarClass} ${sidebarSticky ? 'lg:sticky lg:top-24 lg:self-start' : ''}`}
                variants={sidebarVariants}
                style={{ maxHeight: sidebarSticky ? 'calc(100vh - 6rem)' : 'auto' }}
              >
                <div className="space-y-lg overflow-y-auto">
                  {sidebarContent}
                </div>
              </Motionaside>
            )}

            {/* Main Content Area */}
            <Motiondiv
              className={contentClass}
              variants={contentVariants}
            >
              {children}
            </Motiondiv>

            {/* Sidebar - Right Position (Default) */}
            {sidebarContent && sidebarPosition === 'right' && (
              <Motionaside
                className={`${sidebarClass} ${sidebarSticky ? 'lg:sticky lg:top-24 lg:self-start' : ''}`}
                variants={sidebarVariants}
                style={{ maxHeight: sidebarSticky ? 'calc(100vh - 6rem)' : 'auto' }}
              >
                <div className="space-y-lg overflow-y-auto">
                  {sidebarContent}
                </div>
              </Motionaside>
            )}

          </div>
        </div>

        {/* Full-width sections can be added here outside the container */}
      </Motionmain>

      <SiteFooter currentPage={currentPage} />
    </div>
  )
}

// Extended layout for sections that need to break out of the 1440px container
interface EpicSectionProps {
  children: React.ReactNode
  fullWidth?: boolean
  backgroundColor?: string
  className?: string
  animate?: boolean
}

export function EpicSection({
  children,
  fullWidth = false,
  backgroundColor,
  className = '',
  animate = true
}: EpicSectionProps) {
  const content = (
    <div className={fullWidth ? 'w-full' : 'container mx-auto max-w-site px-md'}>
      {children}
    </div>
  )

  if (animate) {
    return (
      <Motionsection
        className={`py-4xl ${backgroundColor || ''} ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {content}
      </Motionsection>
    )
  }

  return (
    <section className={`py-4xl ${backgroundColor || ''} ${className}`}>
      {content}
    </section>
  )
}

// Hook for managing sidebar content state
export function useSidebarContent() {
  const [sidebarContent, setSidebarContent] = React.useState<React.ReactNode>(null)
  const [isVisible, setIsVisible] = React.useState(true)

  const updateSidebar = React.useCallback((content: React.ReactNode) => {
    setSidebarContent(content)
  }, [])

  const toggleSidebar = React.useCallback(() => {
    setIsVisible(prev => !prev)
  }, [])

  const hideSidebar = React.useCallback(() => {
    setIsVisible(false)
  }, [])

  const showSidebar = React.useCallback(() => {
    setIsVisible(true)
  }, [])

  return {
    sidebarContent: isVisible ? sidebarContent : null,
    updateSidebar,
    toggleSidebar,
    hideSidebar,
    showSidebar,
    isVisible
  }
}