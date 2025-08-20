'use client'

import { MotionDiv } from '@/components/ui/optimized-motion'
import { useEffect, useState } from 'react'

interface EventsEmbersProps {
  className?: string
}

export function EventsEmbers({ className }: EventsEmbersProps) {
  const [embers, setEmbers] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
    xMovement: number
    xMovement2: number
  }>>([])
  
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Generate consistent ember positions and properties
    const emberArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (0-100%)
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 3 + 2, // Size between 2-5px
      duration: Math.random() * 3 + 2, // Duration between 2-5 seconds
      delay: Math.random() * 2, // Delay between 0-2 seconds
      xMovement: Math.random() * 20 - 10, // Random x movement for animation
      xMovement2: Math.random() * 15 - 7.5 // Second x movement for animation
    }))
    setEmbers(emberArray)
    
    // Generate consistent particle positions
    const particleArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {embers.map(ember => (
        <MotionDiv
          key={ember.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: 'radial-gradient(circle, #F2CB05 0%, #D2691E 50%, transparent 100%)'
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 0
          }}
          animate={{
            opacity: [0, 0.6, 0.4, 0],
            scale: [0, 1, 0.8, 0],
            y: [-10, -40, -60, -80],
            x: [0, ember.xMovement, ember.xMovement2, 0]
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.2, 0.7, 1]
          }}
        />
      ))}
      
      {/* Additional floating particles for depth */}
      {particles.map(particle => (
        <MotionDiv
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 rounded-full bg-rusty-orange/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -30, -50],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}