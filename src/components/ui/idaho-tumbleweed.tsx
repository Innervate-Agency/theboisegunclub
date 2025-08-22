'use client'

import * as React from 'react'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils'

export interface IdahoTumbleweedProps {
  className?: string
  size?: 'nano' | 'micro' | 'default' | 'large' | 'hero'
  speed?: 'slow' | 'normal' | 'fast'
  intensity?: 'subtle' | 'normal' | 'strong'
  showTrail?: boolean
  color?: string
  paused?: boolean
}

const sizeClasses = {
  nano: 'size-3',
  micro: 'size-4', 
  default: 'size-6',
  large: 'size-8',
  hero: 'size-12'
}

const speedSettings = {
  slow: { duration: 3, bounce: 1.2 },
  normal: { duration: 2, bounce: 0.8 },
  fast: { duration: 1.2, bounce: 0.5 }
}

const intensitySettings = {
  subtle: { bounceHeight: 1, trailOpacity: 0.3 },
  normal: { bounceHeight: 3, trailOpacity: 0.6 },
  strong: { bounceHeight: 5, trailOpacity: 0.8 }
}

export function IdahoTumbleweed({ 
  className,
  size = 'default',
  speed = 'normal',
  intensity = 'normal',
  showTrail = true,
  color = 'currentColor',
  paused = false
}: IdahoTumbleweedProps) {
  const speedConfig = speedSettings[speed]
  const intensityConfig = intensitySettings[intensity]

  // Main tumbleweed animation variants
  const tumbleweedVariants = {
    rolling: {
      rotate: paused ? 0 : [0, 360],
      y: paused ? 0 : [0, -intensityConfig.bounceHeight, 0, -intensityConfig.bounceHeight * 0.6, 0],
      transition: {
        rotate: {
          duration: speedConfig.duration,
          ease: "linear",
          repeat: paused ? 0 : Infinity
        },
        y: {
          duration: speedConfig.bounce,
          ease: "easeInOut",
          repeat: paused ? 0 : Infinity
        }
      }
    }
  }

  // Dust trail particle animation
  const dustVariants = {
    floating: {
      opacity: paused ? 0 : [intensityConfig.trailOpacity, 0],
      scale: paused ? 0 : [1, 0.3],
      x: paused ? 0 : [0, -8, -12],
      y: paused ? 0 : [0, -2, 1],
      transition: {
        duration: 1,
        ease: "easeOut",
        repeat: paused ? 0 : Infinity
      }
    }
  }

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      {/* Main tumbleweed diamond */}
      <MotionDiv
        className="relative"
        variants={tumbleweedVariants}
        animate="rolling"
        style={{
          transformOrigin: 'center',
          willChange: 'transform'
        }}
      >
        <Diamond 
          className={cn(sizeClasses[size])} 
          weight="fill"
          style={{ color }}
        />
      </MotionDiv>

      {/* Trailing dust particles */}
      {showTrail && !paused && (
        <div className="absolute left-full ml-1 flex items-center gap-1">
          {[0, 0.3, 0.6].map((delay, index) => (
            <MotionDiv
              key={index}
              className="w-1 h-1 rounded-full"
              style={{ 
                backgroundColor: color,
                opacity: intensityConfig.trailOpacity * 0.5
              }}
              variants={dustVariants}
              animate="floating"
              transition={{
                ...dustVariants.floating.transition,
                delay
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Preset variants for common use cases
export function NavbarTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="large"
      speed="slow"
      intensity="subtle"
      showTrail={false}
      className={className}
    />
  )
}

export function LoadingTumbleweed({ 
  className,
  size = 'default'
}: { 
  className?: string
  size?: IdahoTumbleweedProps['size']
}) {
  return (
    <IdahoTumbleweed
      size={size}
      speed="normal"
      intensity="normal"
      showTrail={true}
      className={className}
    />
  )
}

export function ButtonTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="micro"
      speed="fast"
      intensity="subtle"
      showTrail={false}
      className={className}
    />
  )
}

export function HeroTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="hero"
      speed="slow"
      intensity="strong"
      showTrail={true}
      className={className}
    />
  )
}

// Additional loading state variants
export function PageLoadingTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="large"
      speed="normal"
      intensity="normal"
      showTrail={true}
      className={className}
    />
  )
}

export function FormSubmissionTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="default"
      speed="fast"
      intensity="normal"
      showTrail={true}
      className={className}
    />
  )
}

export function FileTransferTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="default"
      speed="slow"
      intensity="strong"
      showTrail={true}
      className={className}
    />
  )
}

export function SearchLoadingTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="micro"
      speed="normal"
      intensity="subtle"
      showTrail={true}
      className={className}
    />
  )
}

export function ImageLoadingTumbleweed({ className }: { className?: string }) {
  return (
    <IdahoTumbleweed
      size="default"
      speed="normal"
      intensity="subtle"
      showTrail={false}
      className={className}
    />
  )
}