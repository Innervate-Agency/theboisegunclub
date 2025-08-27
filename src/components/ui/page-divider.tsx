'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageDividerProps {
  variant?: 'diagonal' | 'zigzag' | 'angular' | 'carved' | 'mountain'
  direction?: 'up' | 'down' | 'left' | 'right'
  height?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

export function PageDivider({ 
  variant = 'diagonal',
  direction = 'down',
  height = 'md',
  animated = true,
  className
}: PageDividerProps) {
  
  const heightClasses = {
    sm: 'h-8',
    md: 'h-12', 
    lg: 'h-16',
    xl: 'h-24'
  }

  const getDividerPath = () => {
    const w = 100 // width percentage
    const h = 100 // height percentage

    switch (variant) {
      case 'diagonal':
        return direction === 'up' 
          ? `M0,${h} L${w},0 L${w},${h} Z`
          : `M0,0 L${w},${h} L0,${h} Z`
      
      case 'zigzag':
        return direction === 'up'
          ? `M0,${h} L25,0 L50,${h/2} L75,0 L${w},${h} L${w},${h} L0,${h} Z`
          : `M0,0 L25,${h} L50,${h/2} L75,${h} L${w},0 L${w},${h} L0,${h} Z`
      
      case 'angular':
        return direction === 'up'
          ? `M0,${h} L30,${h/3} L70,${h/3} L${w},0 L${w},${h} Z`
          : `M0,0 L30,${h*2/3} L70,${h*2/3} L${w},${h} L0,${h} Z`
      
      case 'carved':
        return direction === 'up'
          ? `M0,${h} L20,${h/2} L40,${h/4} L60,${h/2} L80,${h/4} L${w},0 L${w},${h} Z`
          : `M0,0 L20,${h/2} L40,${h*3/4} L60,${h/2} L80,${h*3/4} L${w},${h} L0,${h} Z`
      
      case 'mountain':
        return direction === 'up'
          ? `M0,${h} L15,${h/3} L30,${h*2/3} L50,${h/4} L70,${h*2/3} L85,${h/3} L${w},0 L${w},${h} Z`
          : `M0,0 L15,${h*2/3} L30,${h/3} L50,${h*3/4} L70,${h/3} L85,${h*2/3} L${w},${h} L0,${h} Z`
      
      default:
        return `M0,0 L${w},${h} L0,${h} Z`
    }
  }

  const dividerVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        pathLength: { duration: 1.2, ease: "easeInOut" },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8, ease: "easeOut" }
      }
    }
  }

  return (
    <div className={cn('relative w-full', heightClasses[height], className)}>
      {/* Main SVG Divider - creates the cutout shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Inset shadow filter for recessed look */}
          <filter id="insetShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            <feDropShadow dx="0" dy="-1" stdDeviation="2" floodColor="rgba(255,255,255,0.1)" />
          </filter>
          
          {/* Deep inset shadow for carved effect */}
          <filter id="carvedShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset in="SourceAlpha" dx="0" dy="3"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
          </filter>
        </defs>

        {/* Background fill that matches the section color */}
        <motion.path
          d={getDividerPath()}
          fill="var(--background)"
          filter="url(#carvedShadow)"
          variants={animated ? dividerVariants : undefined}
          initial={animated ? "hidden" : undefined}
          whileInView={animated ? "visible" : undefined}
          viewport={{ once: true, margin: "-100px" }}
        />

        {/* Inner shadow edge for depth */}
        <motion.path
          d={getDividerPath()}
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="0.5"
          variants={animated ? dividerVariants : undefined}
          initial={animated ? "hidden" : undefined}
          whileInView={animated ? "visible" : undefined}
          viewport={{ once: true, margin: "-100px" }}
        />

        {/* Subtle highlight on top edge */}
        <motion.path
          d={getDividerPath()}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.3"
          transform="translate(0, -1)"
          variants={animated ? dividerVariants : undefined}
          initial={animated ? "hidden" : undefined}
          whileInView={animated ? "visible" : undefined}
          viewport={{ once: true, margin: "-100px" }}
        />
      </svg>

      {/* Floating Tactical Elements */}
      {animated && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-nav-home rounded-sm opacity-30"
            animate={{ 
              y: [-5, 5, -5],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5 
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-nav-events rounded-full opacity-40"
            animate={{ 
              x: [-3, 3, -3],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.2 
            }}
          />
          <motion.div
            className="absolute top-2/3 left-2/3 w-1 h-1 bg-nav-directory opacity-50"
            animate={{ 
              rotate: [0, 180, 360],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0.8 
            }}
          />
        </>
      )}

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  )
}

// Preset Configurations for Common Use Cases
export const Dividers = {
  SectionBreak: (props?: Partial<PageDividerProps>) => (
    <PageDivider variant="diagonal" height="md" {...props} />
  ),
  
  MajorTransition: (props?: Partial<PageDividerProps>) => (
    <PageDivider variant="carved" height="lg" {...props} />
  ),
  
  AngularSeparator: (props?: Partial<PageDividerProps>) => (
    <PageDivider variant="angular" height="md" {...props} />
  ),
  
  ZigZagBreak: (props?: Partial<PageDividerProps>) => (
    <PageDivider variant="zigzag" height="lg" {...props} />
  ),
  
  MountainRange: (props?: Partial<PageDividerProps>) => (
    <PageDivider variant="mountain" height="xl" {...props} />
  )
}