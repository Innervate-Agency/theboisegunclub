'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ElegantSectionDividerProps {
  variant?: 'diagonal' | 'zigzag' | 'mountain' | 'wave' | 'angle'
  direction?: 'down' | 'up'
  height?: 'sm' | 'md' | 'lg'
  className?: string
  showInsetShadow?: boolean
  gradientFrom?: string
  gradientTo?: string
}

export function ElegantSectionDivider({
  variant = 'diagonal',
  direction = 'down',
  height = 'md',
  className,
  showInsetShadow = true,
  gradientFrom = 'background',
  gradientTo = 'muted'
}: ElegantSectionDividerProps) {
  
  const heightClasses = {
    sm: 'h-12',
    md: 'h-16', 
    lg: 'h-24'
  }

  const getSVGPath = () => {
    const w = 100
    const h = 100
    
    // Create paths that can be flipped for direction
    const paths = {
      diagonal: `M0,0 L${w},0 L${w},${h*0.7} L0,${h} Z`,
      zigzag: `M0,0 L${w},0 L${w},${h*0.6} L75,${h*0.8} L50,${h*0.6} L25,${h*0.9} L0,${h} Z`,
      mountain: `M0,0 L${w},0 L${w},${h*0.4} L85,${h*0.7} L70,${h*0.9} L50,${h*0.6} L30,${h*0.9} L15,${h*0.7} L0,${h} Z`,
      wave: `M0,0 L${w},0 Q${w*0.25},${h*0.8} ${w*0.5},${h*0.6} Q${w*0.75},${h*0.4} ${w},${h*0.6} L${w},${h} L0,${h} Z`,
      angle: `M0,0 L${w},0 L${w},${h*0.5} L70,${h*0.8} L30,${h*0.8} L0,${h} Z`
    }
    
    return paths[variant] || paths.diagonal
  }

  const getTransform = () => {
    if (direction === 'up') {
      return 'scaleY(-1)'
    }
    return 'scaleY(1)'
  }

  return (
    <div className={cn('relative w-full', heightClasses[height], className)}>
      {/* Main divider shape */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ transform: getTransform() }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient definition */}
            <linearGradient id={`divider-gradient-${variant}-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={`var(--${gradientFrom})`} />
              <stop offset="100%" stopColor={`var(--${gradientTo})`} />
            </linearGradient>
            
            {/* Shadow filter for carved effect */}
            <filter id={`inset-shadow-${variant}-${direction}`} x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(0,0,0,0.2)" />
              <feDropShadow dx="0" dy="-1" stdDeviation="2" floodColor="rgba(255,255,255,0.1)" />
            </filter>
          </defs>

          {/* Main path with gradient and shadow */}
          <motion.path
            d={getSVGPath()}
            fill={`url(#divider-gradient-${variant}-${direction})`}
            filter={showInsetShadow ? `url(#inset-shadow-${variant}-${direction})` : 'none'}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          {/* Subtle highlight line */}
          <motion.path
            d={getSVGPath()}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>

      {/* Subtle texture overlay for added depth */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
        }}
      />
    </div>
  )
}

// Pre-configured divider variants for common use cases
export const ElegantDividers = {
  DiagonalDown: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="diagonal" direction="down" {...props} />
  ),
  
  DiagonalUp: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="diagonal" direction="up" {...props} />
  ),
  
  ZigzagCarve: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="zigzag" direction="down" height="lg" {...props} />
  ),
  
  MountainRange: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="mountain" direction="down" height="lg" {...props} />
  ),
  
  WaveTransition: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="wave" direction="down" height="md" {...props} />
  ),
  
  AngleRecess: (props?: Partial<ElegantSectionDividerProps>) => (
    <ElegantSectionDivider variant="angle" direction="up" height="md" {...props} />
  )
}