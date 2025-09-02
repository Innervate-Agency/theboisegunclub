'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pageContainerVariants = cva(
  "min-h-screen flex flex-col",
  {
    variants: {
      theme: {
        home: "theme-home",
        events: "theme-events", 
        directory: "theme-directory",
        armory: "theme-armory",
        intel: "theme-intel",
        buysell: "theme-buysell",
        forums: "theme-forums",
        content: "theme-content"
      }
    },
    defaultVariants: {
      theme: "content"
    }
  }
)

export interface PageContainerProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof pageContainerVariants> {
  navigation?: React.ReactNode
  footer?: React.ReactNode
}

/**
 * PageContainer - Root layout wrapper that establishes theme context
 * 
 * This compound component prevents style conflicts by:
 * - Establishing a single theme context for the entire page
 * - Providing consistent layout structure (nav + main + footer)
 * - Containing all page-level styling decisions in one place
 * 
 * Usage:
 *   <PageContainer theme="home" navigation={<SiteNavigation />} footer={<SiteFooter />}>
 *     {children}
 *   </PageContainer>
 */
export function PageContainer({ 
  theme,
  navigation,
  footer,
  className,
  children,
  ...props 
}: PageContainerProps) {
  return (
    <>
      {/* Navigation outside of flex container so sticky positioning works */}
      {navigation}
      
      <div 
        className={cn(pageContainerVariants({ theme }), className)}
        data-theme={theme}
        {...props}
      >
        <main className="flex-grow" style={{ minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </main>
        
        {footer}
      </div>
    </>
  )
}

// Context for sharing theme information with nested components
const PageThemeContext = React.createContext<{
  theme: string
  registerSection: (id: string, type: string) => void
} | null>(null)

export function usePageTheme() {
  const context = React.useContext(PageThemeContext)
  if (!context) {
    throw new Error('usePageTheme must be used within a PageContainer')
  }
  return context
}

/**
 * Enhanced PageContainer with context and section registry
 * Tracks which sections are being used to prevent conflicts
 */
export function PageContainerWithContext({ 
  theme,
  navigation,
  footer,
  className,
  children,
  ...props 
}: PageContainerProps) {
  const [sections, setSections] = React.useState<Record<string, string>>({})
  
  const registerSection = React.useCallback((id: string, type: string) => {
    setSections(prev => ({ ...prev, [id]: type }))
  }, [])
  
  const contextValue = React.useMemo(() => ({
    theme: theme || 'content',
    registerSection
  }), [theme, registerSection])
  
  return (
    <PageThemeContext.Provider value={contextValue}>
      <>
        {/* Navigation outside of flex container so sticky positioning works */}
        {navigation}
        
        <div 
          className={cn(pageContainerVariants({ theme }), className)}
          data-theme={theme}
          {...props}
        >
          <main className="flex-grow" style={{ minHeight: 'calc(100vh - 64px)' }}>
            {children}
          </main>
          
          {footer}
        </div>
      </>
    </PageThemeContext.Provider>
  )
}