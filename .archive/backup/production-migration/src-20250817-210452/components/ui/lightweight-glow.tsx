'use client'

import React from 'react'

// Lightweight CSS-only glow effect replacement - Fixed for SSR hydration
export function LightweightGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS-only radial glow with breathing animation */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 animate-breathe-glow"
        style={{
          background: 'radial-gradient(circle, rgba(244, 184, 116, 0.3) 0%, rgba(244, 184, 116, 0.1) 40%, transparent 70%)'
        }}
      />
      
      {/* Additional subtle glow layers */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-15 animate-breathe-glow-reverse"
        style={{
          background: 'radial-gradient(circle, rgba(244, 184, 116, 0.4) 0%, transparent 60%)'
        }}
      />
    </div>
  )
}