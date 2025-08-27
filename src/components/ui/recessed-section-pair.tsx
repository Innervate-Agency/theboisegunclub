'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RecessedSectionPairProps {
  topSection: ReactNode
  bottomSection: ReactNode
  topSectionId: string
  bottomSectionId: string
  cutoutVariant?: 'diagonal' | 'zigzag' | 'angular' | 'mountain'
  topBgColor?: string
  bottomBgColor?: string
  recessDepth?: 'shallow' | 'medium' | 'deep'
  className?: string
}

export function RecessedSectionPair({
  topSection,
  bottomSection,
  topSectionId,
  bottomSectionId,
  cutoutVariant = 'diagonal',
  topBgColor = 'bg-background',
  bottomBgColor = 'bg-muted/30',
  recessDepth = 'medium',
  className
}: RecessedSectionPairProps) {

  const getCutoutPath = () => {
    const w = 100
    const h = 100

    switch (cutoutVariant) {
      case 'diagonal':
        return `M0,0 L${w},0 L${w},${h*0.7} L0,${h} Z`
      
      case 'zigzag':
        return `M0,0 L${w},0 L${w},${h*0.6} L75,${h*0.8} L50,${h*0.6} L25,${h*0.9} L0,${h} Z`
      
      case 'angular':
        return `M0,0 L${w},0 L${w},${h*0.5} L70,${h*0.8} L30,${h*0.8} L0,${h} Z`
      
      case 'mountain':
        return `M0,0 L${w},0 L${w},${h*0.4} L85,${h*0.7} L70,${h*0.9} L50,${h*0.6} L30,${h*0.9} L15,${h*0.7} L0,${h} Z`
      
      default:
        return `M0,0 L${w},0 L${w},${h*0.7} L0,${h} Z`
    }
  }

  const depthClasses = {
    shallow: 'shadow-md',
    medium: 'shadow-lg',
    deep: 'shadow-xl'
  }

  const insetShadowStyle = {
    shallow: '0 2px 4px rgba(0,0,0,0.1) inset, 0 -1px 2px rgba(255,255,255,0.1) inset',
    medium: '0 4px 8px rgba(0,0,0,0.15) inset, 0 -2px 4px rgba(255,255,255,0.1) inset', 
    deep: '0 6px 12px rgba(0,0,0,0.2) inset, 0 -3px 6px rgba(255,255,255,0.1) inset'
  }

  return (
    <div className={cn('relative', className)}>
      {/* Top Section with Cutout */}
      <div className="relative">
        <section 
          data-section={topSectionId}
          className={cn('relative z-10', topBgColor)}
        >
          {topSection}
        </section>

        {/* SVG Cutout Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id={`cutoutShadow-${topSectionId}`} x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.2)" />
                <feDropShadow dx="0" dy="-2" stdDeviation="3" floodColor="rgba(255,255,255,0.1)" />
              </filter>
            </defs>

            {/* Cutout path that reveals the section below */}
            <motion.path
              d={getCutoutPath()}
              fill={`var(--background)`}
              filter={`url(#cutoutShadow-${topSectionId})`}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            {/* Inner shadow for carved effect */}
            <motion.path
              d={getCutoutPath()}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
          </svg>
        </div>
      </div>

      {/* Bottom Section - Recessed */}
      <section 
        data-section={bottomSectionId}
        className={cn(
          'relative -mt-16 pt-20',
          bottomBgColor,
          depthClasses[recessDepth]
        )}
        style={{
          boxShadow: insetShadowStyle[recessDepth]
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {bottomSection}
        </motion.div>

        {/* Subtle texture overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        />
      </section>
    </div>
  )
}