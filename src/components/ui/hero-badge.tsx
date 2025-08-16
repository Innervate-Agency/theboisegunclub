'use client'

import { MotionDiv, fadeInUp } from '@/components/ui/optimized-motion'

interface HeroBadgeProps {
  text?: string
  className?: string
}

export function HeroBadge({ 
  text = "Revolutionary Platform",
  className 
}: HeroBadgeProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`inline-block ${className}`}
    >
      <span className="inline-flex items-center gap-xs px-sm py-micro bg-rusty-orange/10 border border-rusty-orange/30 rounded-xs text-rusty-orange font-rajdhani font-bold text-body-sm uppercase tracking-wider">
        <span className="size-2 bg-rusty-orange rounded-full animate-pulse" />
        {text}
      </span>
    </MotionDiv>
  )
}