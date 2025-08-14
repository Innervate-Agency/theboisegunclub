'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  drift: number
}

interface ParticleSystemProps {
  count?: number
  className?: string
}

export function ParticleSystem({ count = 25, className }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Generate particles with random properties
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (0-100%)
      size: Math.random() * 4 + 2, // Random size (2-6px)
      duration: Math.random() * 3 + 4, // Random duration (4-7s)
      delay: Math.random() * 2, // Random delay (0-2s)
      drift: (Math.random() - 0.5) * 50, // Random horizontal drift (-25 to 25px)
    }))
    
    setParticles(newParticles)
  }, [count])

  if (!mounted) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bottom-0"
            style={{
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ 
              y: 0, 
              opacity: 0,
              scale: 0,
            }}
            animate={{ 
              y: -400, // Rise 400px
              x: particle.drift,
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1.2, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(235, 125, 1, 0.9) 0%, rgba(255, 188, 32, 0.6) 50%, transparent 70%)`,
                boxShadow: '0 0 8px rgba(235, 125, 1, 0.5)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Firefly variant with different movement pattern
export function FireflyParticles({ count = 15, className }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1, // Smaller (1-4px)
      duration: Math.random() * 5 + 10, // Slower (10-15s)
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 200, // Wider drift
    }))
    
    setParticles(newParticles)
  }, [count])

  if (!mounted) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bottom-10"
            style={{
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [0, particle.drift, -particle.drift, 0],
              y: [0, -100, -200, -100, 0],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-sandy-ochre/80"
              style={{
                boxShadow: '0 0 12px rgba(217, 159, 93, 0.8)',
                filter: 'blur(0.5px)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}