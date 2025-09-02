'use client'

import * as React from 'react'

/**
 * Sticky Navigation Diagnostics Component
 * 
 * Use this component temporarily to diagnose sticky navigation issues.
 * Add it to any page where sticky navigation isn't working properly.
 * 
 * Usage:
 *   <StickyNavDiagnostics />
 */
export function StickyNavDiagnostics() {
  const [navInfo, setNavInfo] = React.useState<{
    position: string
    top: string
    zIndex: string
    isSticking: boolean
    scrollY: number
  }>({
    position: '',
    top: '',
    zIndex: '',
    isSticking: false,
    scrollY: 0
  })

  React.useEffect(() => {
    const updateNavInfo = () => {
      const nav = document.querySelector('.site-navigation') as HTMLElement
      const scrollY = window.scrollY
      
      if (nav) {
        const computedStyle = window.getComputedStyle(nav)
        const rect = nav.getBoundingClientRect()
        
        setNavInfo({
          position: computedStyle.position,
          top: computedStyle.top,
          zIndex: computedStyle.zIndex,
          isSticking: rect.top === 0 && scrollY > 0,
          scrollY
        })
      }
    }

    // Update on scroll
    window.addEventListener('scroll', updateNavInfo)
    // Update on load
    updateNavInfo()

    return () => window.removeEventListener('scroll', updateNavInfo)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-sm z-[60] font-mono max-w-xs">
      <div className="font-bold mb-2">Sticky Nav Debug</div>
      <div>Position: {navInfo.position}</div>
      <div>Top: {navInfo.top}</div>
      <div>Z-Index: {navInfo.zIndex}</div>
      <div>Scroll Y: {navInfo.scrollY}px</div>
      <div>Is Sticking: {navInfo.isSticking ? '✅' : '❌'}</div>
      
      <div className="mt-2 pt-2 border-t border-gray-600 text-xs">
        <div>Page Height: {document.body.scrollHeight}px</div>
        <div>Viewport: {window.innerHeight}px</div>
      </div>
    </div>
  )
}