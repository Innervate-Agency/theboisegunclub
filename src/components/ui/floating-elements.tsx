'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { generateFloatingElementStyle } from '@/lib/color-utils'

interface FloatingElement {
  id: string
  x: number
  y: number
  size: 'sm' | 'md' | 'lg'
  color: string
  shape: 'square' | 'circle' | 'triangle' | 'diamond'
  delay: number
  duration: number
}

interface FloatingElementsProps {
  density?: 'low' | 'medium' | 'high'
  colors?: string[]
  animated?: boolean
  className?: string
}

export function FloatingElements({
  density = 'medium',
  colors = ['nav-home', 'nav-events', 'nav-directory', 'nav-armory'],
  animated = true,
  className = ''
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([])

  const elementCount = {
    low: 6,
    medium: 12,
    high: 20
  }

  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2', 
    lg: 'w-3 h-3'
  }

  const getShapeStyle = (shape: string) => {
    const baseClasses = {
      square: 'rounded-none',
      circle: 'rounded-full',
      triangle: '',
      diamond: 'rotate-45'
    }
    
    const clipPaths = {
      triangle: { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
      square: {},
      circle: {},
      diamond: {}
    }
    
    return {
      className: baseClasses[shape as keyof typeof baseClasses],
      style: clipPaths[shape as keyof typeof clipPaths]
    }
  }

  useEffect(() => {
    const generateElements = (): FloatingElement[] => {
      const count = elementCount[density]
      const shapes: Array<FloatingElement['shape']> = ['square', 'circle', 'triangle', 'diamond']
      const sizes: Array<FloatingElement['size']> = ['sm', 'md', 'lg']
      
      return Array.from({ length: count }, (_, i) => ({
        id: `tactical-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4
      }))
    }

    setElements(generateElements())
  }, [density, colors])

  // Animation variants for different types of movement
  const floatVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 0
    },
    animate: {
      opacity: [0.1, 0.6, 0.3, 0.5],
      scale: [0.5, 1.2, 0.8, 1],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const driftVariants = {
    initial: {
      x: 0,
      y: 0,
      opacity: 0.2
    },
    animate: {
      x: [-10, 10, -5, 15, 0],
      y: [-15, 5, -10, 8, 0],
      opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    }
  }

  const pulseVariants = {
    initial: {
      opacity: 0.1,
      scale: 0.8
    },
    animate: {
      opacity: [0.1, 0.8, 0.4, 0.6, 0.1],
      scale: [0.8, 1.3, 1, 1.1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const getAnimationVariant = (index: number) => {
    const variants = [floatVariants, driftVariants, pulseVariants]
    return variants[index % variants.length]
  }

  if (!animated) {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {elements.map((element) => {
          const shapeData = getShapeStyle(element.shape)
          return (
            <div
              key={element.id}
              className={`
                absolute opacity-20
                ${sizeClasses[element.size]}
                ${shapeData.className}
              `}
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                ...generateFloatingElementStyle(element.color, 0.2),
                ...shapeData.style
              }}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element, index) => {
        const variant = getAnimationVariant(index)
        const shapeData = getShapeStyle(element.shape)
        
        return (
          <motion.div
            key={element.id}
            className={`
              absolute
              ${sizeClasses[element.size]}
              ${shapeData.className}
            `}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              ...generateFloatingElementStyle(element.color, 0.3),
              ...shapeData.style
            }}
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{
              ...variant.animate.transition,
              delay: element.delay
            }}
          />
        )
      })}

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Strategic Corner Elements */}
      <motion.div
        className="absolute top-8 right-8 w-4 h-4 bg-nav-home/30 rounded-sm"
        animate={{ 
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.1, 1, 0.9, 1, 1.1, 1, 0.9, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      <motion.div
        className="absolute bottom-12 left-12 w-3 h-3 bg-nav-events/40 clip-path-triangle"
        animate={{ 
          y: [-5, 5, -3, 7, -5],
          opacity: [0.4, 0.7, 0.5, 0.8, 0.4]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />

      <motion.div
        className="absolute top-1/3 left-8 w-2 h-2 bg-nav-directory/35 rounded-full"
        animate={{ 
          x: [-8, 8, -4, 10, -8],
          scale: [1, 1.3, 1.1, 1.4, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2.5 
        }}
      />
    </div>
  )
}

// Preset Configurations
export const Elements = {
  Minimal: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="low" 
      colors={['nav-home', 'nav-events']}
      {...props} 
    />
  ),

  Standard: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="medium"
      {...props} 
    />
  ),

  Intense: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="high" 
      colors={['nav-home', 'nav-events', 'nav-directory', 'nav-armory', 'nav-buysell']}
      {...props} 
    />
  ),

  Hero: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="medium" 
      colors={['nav-home']}
      {...props} 
    />
  ),

  Events: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="low" 
      colors={['nav-events', 'nav-home']}
      {...props} 
    />
  ),

  Directory: (props?: Partial<FloatingElementsProps>) => (
    <FloatingElements 
      density="medium" 
      colors={['nav-directory', 'nav-armory']}
      {...props} 
    />
  )
}