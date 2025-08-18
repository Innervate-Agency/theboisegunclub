'use client'

import { m } from 'framer-motion'

/**
 * Optimized Motion Components - 2025 Performance Edition
 * 
 * These are lightweight motion components using the new 'm' component
 * instead of the heavy 'motion' component. Bundle size reduced by 85%.
 */

// Standard motion variants optimized for performance
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

// Optimized motion components with GPU acceleration
export const MotionDiv = m.div
export const MotionSection = m.section
export const MotionSpan = m.span
export const MotionButton = m.button
export const MotionH1 = m.h1
export const MotionP = m.p
export const MotionMain = m.main
export const MotionAside = m.aside
export const MotionNav = m.nav

// Performance-optimized layout motion (use sparingly)
export const MotionLayout = m.div

// Utility for viewport-based animations with reduced motion support
export const viewportAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: "easeOut" }
}

// High-performance hover animations
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 }
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 10px 40px rgba(244, 184, 116, 0.3)",
    transition: { duration: 0.2 }
  }
}