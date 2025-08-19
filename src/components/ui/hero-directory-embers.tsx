'use client'

import { MotionDiv } from '@/components/ui/optimized-motion'
import { useEffect, useState } from 'react'

interface DirectoryEmbersProps {
  className?: string
}

export function DirectoryEmbers({ className }: DirectoryEmbersProps) {
  const [embers, setEmbers] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Generate random ember positions and properties for directory theme
    const emberArray = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (0-100%)
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 4 + 3, // Size between 3-7px (slightly larger for directory)
      duration: Math.random() * 4 + 3, // Duration between 3-7 seconds
      delay: Math.random() * 2.5 // Delay between 0-2.5 seconds
    }))
    setEmbers(emberArray)
  }, [])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {embers.map(ember => (
        <MotionDiv
          key={ember.id}
          className="absolute rounded-full opacity-50"
          style={{
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: 'radial-gradient(circle, #8B7355 0%, #4A5D23 50%, transparent 100%)' // Directory colors: slate-blue to sagebrush-green
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 0
          }}
          animate={{
            opacity: [0, 0.5, 0.3, 0],
            scale: [0, 1, 0.7, 0],
            y: [-12, -50, -75, -95],
            x: [0, Math.random() * 25 - 12.5, Math.random() * 18 - 9, 0]
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.25, 0.75, 1]
          }}
        />
      ))}
      
      {/* Additional floating particles for directory depth */}
      {Array.from({ length: 6 }).map((_, i) => (
        <MotionDiv
          key={`directory-particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-slate-blue/25"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -35, -65],
            opacity: [0, 0.3, 0],
            scale: [0.4, 1.2, 0.4]
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            delay: Math.random() * 3.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}