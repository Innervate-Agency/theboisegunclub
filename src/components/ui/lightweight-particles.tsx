'use client'

import React from 'react'

// Lightweight CSS-only particle effect replacement
export function LightweightParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS-only floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/8 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/12 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-white/6 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
    </div>
  )
}