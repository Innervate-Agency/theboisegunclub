'use client'

import * as React from 'react'
import { useInView } from 'framer-motion'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
}

const directionVariants = {
  up: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  down: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  left: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
  },
  right: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once,
    amount: threshold 
  })

  const variants = directionVariants[direction]

  return (
    <MotionDiv
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}

// Batch reveal for staggered animations
interface ScrollRevealBatchProps {
  children: React.ReactNode[]
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  stagger?: number
  threshold?: number
  once?: boolean
  className?: string
}

export function ScrollRevealBatch({
  children,
  direction = 'up',
  stagger = 0.1,
  threshold = 0.1,
  once = true,
  className
}: ScrollRevealBatchProps) {
  return (
    <div className={cn(className)}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={index * stagger}
          threshold={threshold}
          once={once}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}