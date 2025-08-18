import * as React from 'react'
import { cn } from '@/lib/utils'

interface TacticalReticleLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'accent' | 'ghost'
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6', 
  lg: 'h-8 w-8',
  xl: 'h-12 w-12'
}

const variantMap = {
  default: 'text-card-foreground',
  primary: 'text-slate-blue',
  accent: 'text-rusty-orange', 
  ghost: 'text-card-foreground/60'
}

/**
 * Tactical Reticle Logo Component
 * 
 * Combines + and x elements into a subtle holo-reticle design
 * that serves as both logo and navigational element.
 * 
 * Design Philosophy:
 * - Diamond outer frame (tactical precision)
 * - Inner crosshairs with + arms
 * - Subtle x-pattern overlay (targeting system)
 * - Minimal, geometric, professional appearance
 */
export const TacticalReticleLogo = React.forwardRef<SVGSVGElement, TacticalReticleLogoProps>(
  ({ size = 'md', variant = 'default', animated = false, className, ...props }, ref) => {
    return (
      <svg 
        ref={ref}
        viewBox="0 0 24 24" 
        className={cn(
          sizeMap[size],
          variantMap[variant],
          animated && "transition-all duration-300 hover:scale-110",
          className
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        {...props}
      >
        {/* Outer diamond frame */}
        <path 
          d="M12 2 L20 12 L12 22 L4 12 Z" 
          className="opacity-80"
          strokeWidth="1"
        />
        
        {/* Inner crosshairs - vertical */}
        <line 
          x1="12" y1="6" 
          x2="12" y2="18" 
          className="opacity-90"
          strokeWidth="1.5"
        />
        
        {/* Inner crosshairs - horizontal */}
        <line 
          x1="6" y1="12" 
          x2="18" y2="12" 
          className="opacity-90"
          strokeWidth="1.5"
        />
        
        {/* Tactical corner marks (+ elements) */}
        <g className="opacity-60" strokeWidth="1">
          {/* Top corner */}
          <line x1="12" y1="4" x2="12" y2="6" />
          <line x1="11" y1="5" x2="13" y2="5" />
          
          {/* Right corner */}
          <line x1="18" y1="12" x2="20" y2="12" />
          <line x1="19" y1="11" x2="19" y2="13" />
          
          {/* Bottom corner */}
          <line x1="12" y1="18" x2="12" y2="20" />
          <line x1="11" y1="19" x2="13" y2="19" />
          
          {/* Left corner */}
          <line x1="4" y1="12" x2="6" y2="12" />
          <line x1="5" y1="11" x2="5" y2="13" />
        </g>
        
        {/* Subtle x-pattern overlay (targeting reticle) */}
        <g className="opacity-30" strokeWidth="0.5">
          <line x1="8" y1="8" x2="10" y2="10" />
          <line x1="10" y1="8" x2="8" y2="10" />
          
          <line x1="14" y1="8" x2="16" y2="10" />
          <line x1="16" y1="8" x2="14" y2="10" />
          
          <line x1="8" y1="14" x2="10" y2="16" />
          <line x1="10" y1="14" x2="8" y2="16" />
          
          <line x1="14" y1="14" x2="16" y2="16" />
          <line x1="16" y1="14" x2="14" y2="16" />
        </g>
        
        {/* Center targeting dot */}
        <circle 
          cx="12" cy="12" r="1" 
          fill="currentColor" 
          className="opacity-70"
        />
      </svg>
    )
  }
)

TacticalReticleLogo.displayName = "TacticalReticleLogo"

// Alternative simplified version for smaller contexts
export const TacticalReticleSimple = React.forwardRef<SVGSVGElement, TacticalReticleLogoProps>(
  ({ size = 'md', variant = 'default', animated = false, className, ...props }, ref) => {
    return (
      <svg 
        ref={ref}
        viewBox="0 0 24 24" 
        className={cn(
          sizeMap[size],
          variantMap[variant],
          animated && "transition-all duration-300 hover:scale-110",
          className
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        {...props}
      >
        {/* Diamond frame */}
        <path d="M12 2 L20 12 L12 22 L4 12 Z" className="opacity-60" />
        
        {/* Main crosshairs */}
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
        
        {/* Center dot */}
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  }
)

TacticalReticleSimple.displayName = "TacticalReticleSimple"

export default TacticalReticleLogo