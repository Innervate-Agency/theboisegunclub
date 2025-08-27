'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { FloatingElements } from './floating-elements'

interface ScrollDrivenSectionProps {
  children: ReactNode
  sectionId: string
  className?: string
  variant?: 'fade' | 'slide' | 'scale' | 'tactical' | 'parallax' | 'sticky-reveal'
  direction?: 'up' | 'down' | 'left' | 'right'
  staggerChildren?: boolean
  parallaxIntensity?: number
  backgroundColor?: string
  skewDirection?: 'up' | 'down' | 'none'
  weathered?: boolean
  floatingElements?: boolean
  elementDensity?: 'low' | 'medium' | 'high'
}

export function ScrollDrivenSection({
  children,
  sectionId,
  className,
  variant = 'fade',
  direction = 'up',
  staggerChildren = false,
  parallaxIntensity = 0.2,
  backgroundColor,
  skewDirection = 'none',
  weathered = false,
  floatingElements = true,
  elementDensity = 'medium'
}: ScrollDrivenSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth spring animation for better performance
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Transform values based on variant
  const getTransforms = () => {
    switch (variant) {
      case 'slide':
        const slideDistance = direction === 'up' || direction === 'down' ? 100 : 100
        const slideX = direction === 'left' ? -slideDistance : direction === 'right' ? slideDistance : 0
        const slideY = direction === 'up' ? slideDistance : direction === 'down' ? -slideDistance : 0
        
        return {
          x: useTransform(smoothProgress, [0, 0.3], [slideX, 0]),
          y: useTransform(smoothProgress, [0, 0.3], [slideY, 0]),
          opacity: useTransform(smoothProgress, [0, 0.3], [0, 1])
        }

      case 'scale':
        return {
          scale: useTransform(smoothProgress, [0, 0.3], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 0.3], [0, 1])
        }

      case 'tactical':
        return {
          x: useTransform(smoothProgress, [0, 0.2, 0.4], [-50, 10, 0]),
          y: useTransform(smoothProgress, [0, 0.3], [30, 0]),
          rotateY: useTransform(smoothProgress, [0, 0.3], [15, 0]),
          scale: useTransform(smoothProgress, [0, 0.2, 0.4], [0.9, 1.02, 1]),
          opacity: useTransform(smoothProgress, [0, 0.2], [0, 1])
        }

      case 'parallax':
        return {
          y: useTransform(smoothProgress, [0, 1], [0, -parallaxIntensity * 200]),
          opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
        }

      case 'sticky-reveal':
        return {
          y: useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]),
          scale: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]),
          opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
        }

      default: // fade
        return {
          opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
          y: useTransform(smoothProgress, [0, 0.3], [20, 0])
        }
    }
  }

  const transforms = getTransforms()

  // Stagger animation for children
  const containerVariants = staggerChildren ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } : {}

  const childVariants = staggerChildren ? {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } : {}

  // Background parallax effect
  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', `${parallaxIntensity * 50}%`]
  )

  // Skew classes
  const skewClasses = {
    up: 'before:content-[\'\'] before:absolute before:top-0 before:left-[-5%] before:w-[110%] before:h-full before:bg-inherit before:transform before:skew-y-[-0.8deg] before:origin-top-left before:z-[-1]',
    down: 'before:content-[\'\'] before:absolute before:top-0 before:left-[-5%] before:w-[110%] before:h-full before:bg-inherit before:transform before:skew-y-[0.8deg] before:origin-top-left before:z-[-1]',
    none: ''
  }

  // Weathering classes
  const weatheringClasses = weathered 
    ? 'surface-handled relative after:content-[\'\'] after:absolute after:inset-0 after:opacity-30 after:pointer-events-none after:bg-gradient-to-br after:from-transparent after:via-black/5 after:to-transparent'
    : ''

  return (
    <motion.section
      ref={ref}
      data-section={sectionId}
      className={cn(
        'relative overflow-hidden',
        skewDirection !== 'none' && skewClasses[skewDirection],
        weatheringClasses,
        className
      )}
      style={{
        backgroundColor
      }}
      variants={containerVariants}
      initial={staggerChildren ? "hidden" : undefined}
      whileInView={staggerChildren ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {/* Tactical Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Dynamic Floating Elements */}
        {floatingElements && (
          <FloatingElements 
            density={elementDensity}
            className="opacity-60"
          />
        )}
      </motion.div>

      {/* Main Content with Scroll Transforms */}
      <motion.div
        style={transforms}
        className="relative z-10"
      >
        {staggerChildren ? (
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>

      {/* Progressive Shadow Enhancement */}
      <motion.div
        className="absolute inset-0 -z-5 shadow-whisper"
        style={{
          boxShadow: useTransform(
            smoothProgress,
            [0, 0.3, 0.7, 1],
            [
              '0 1px 3px 0 rgba(50, 50, 93, 0.09)',
              '0 4px 12px 0 rgba(50, 50, 93, 0.15)', 
              '0 8px 24px 0 rgba(50, 50, 93, 0.20)',
              '0 4px 12px 0 rgba(50, 50, 93, 0.15)'
            ]
          )
        }}
      />

      {/* Corner Tactical Accents */}
      <motion.div
        className="absolute top-0 right-0 w-6 h-6 bg-nav-home/10 clip-path-triangle"
        style={{
          opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
          scale: useTransform(smoothProgress, [0, 0.3], [0.5, 1])
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-4 h-4 bg-nav-events/10"
        style={{
          opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
          scale: useTransform(smoothProgress, [0, 0.3], [0.5, 1])
        }}
      />
    </motion.section>
  )
}

// Preset Configurations
export const ScrollSections = {
  Hero: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="fade" {...props} />
  ),
  
  Features: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="tactical" staggerChildren {...props} />
  ),
  
  Content: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="slide" direction="up" {...props} />
  ),
  
  Stats: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="scale" staggerChildren weathered {...props} />
  ),
  
  Parallax: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="parallax" parallaxIntensity={0.3} {...props} />
  ),
  
  StickyReveal: (props: Omit<ScrollDrivenSectionProps, 'variant'>) => (
    <ScrollDrivenSection variant="sticky-reveal" {...props} />
  )
}