'use client'

import { motion } from 'framer-motion'
import { ParticleSystem, FireflyParticles } from './particle-system'

interface HeroCampfireGlowProps {
  className?: string
}

export function HeroCampfireGlow({ className }: HeroCampfireGlowProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-96 overflow-hidden ${className}`}>
      {/* Layer 1: Deep base glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-80"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(235, 125, 1, 0.2) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Layer 2: Main asymmetrical glow - offset to the right */}
      <motion.div 
        className="absolute bottom-0 left-[45%] -translate-x-1/2 w-[90%] h-64"
        animate={{
          scale: [1.3, 1.35, 1.3],
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse at 60% 100%, rgba(255, 188, 32, 0.8) 0%, rgba(235, 125, 1, 0.5) 25%, rgba(255, 188, 32, 0.3) 45%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translateX(-30%) scaleX(1.3) scaleY(1.5)'
        }}
      />
      
      {/* Layer 3: Secondary glow with flicker */}
      <motion.div 
        className="absolute bottom-0 left-[30%] w-[50%] h-48"
        animate={{
          opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
          scale: [1, 1.05, 0.95, 1.02, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse at 30% 100%, rgba(235, 125, 1, 0.6) 0%, rgba(255, 188, 32, 0.3) 35%, transparent 65%)',
          filter: 'blur(50px)'
        }}
      />
      
      {/* Layer 4: Accent flare with rotation */}
      <motion.div 
        className="absolute bottom-0 right-[15%] w-64 h-56"
        animate={{
          rotate: [-10, -5, -10],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle at 80% 100%, rgba(255, 188, 32, 0.7) 0%, transparent 50%)',
          filter: 'blur(45px)',
        }}
      />
      
      {/* Layer 5: Intense core glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32"
        animate={{
          opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
          scaleX: [1, 1.2, 1, 1.1, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(to top, rgba(235, 125, 1, 0.6) 0%, rgba(255, 188, 32, 0.2) 40%, transparent 100%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Particle System - Ember effects */}
      <ParticleSystem count={30} className="z-10" />
      
      {/* Firefly Particles - Ambient floating lights */}
      <FireflyParticles count={8} className="z-5" />
    </div>
  )
}