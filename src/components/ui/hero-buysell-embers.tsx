'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function BuySellEmbers() {
  const embers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 2 + Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full"
          style={{
            left: `${ember.x}%`,
            bottom: '-10px',
            width: ember.size,
            height: ember.size,
            background: `radial-gradient(circle, rgba(255, 140, 0, 0.8) 0%, rgba(255, 69, 0, 0.4) 100%)`,
            boxShadow: `0 0 ${ember.size * 2}px rgba(255, 140, 0, 0.6)`,
          }}
          animate={{
            y: [-10, typeof window !== "undefined" ? -window.innerHeight - 100 : -800],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.3],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Warm glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rusty-orange/5 via-transparent to-transparent" />
    </div>
  )
}