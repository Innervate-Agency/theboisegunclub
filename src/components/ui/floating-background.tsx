'use client'

import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const floatingBackgroundVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      preset: {
        gunclub: "bg-gradient-to-br from-range-white via-card-surface to-walnut-stock",
        cool: "bg-gradient-to-br from-scope-blue/20 via-trigger-blue/10 to-cerakote-blue/30",
        warm: "bg-gradient-to-br from-sandy-ochre/10 via-rusty-orange/20 to-recoil-pad/15",
        neutral: "bg-gradient-to-br from-stainless-steel/10 via-ghost-ring/5 to-titanium-white/20"
      },
      intensity: {
        subtle: "opacity-60",
        medium: "opacity-80",
        premium: "opacity-100"
      }
    },
    defaultVariants: {
      preset: "gunclub",
      intensity: "medium"
    }
  }
)

export interface FloatingBackgroundProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof floatingBackgroundVariants> {
  children: React.ReactNode
  animated?: boolean
  particleCount?: number
}

export function FloatingBackground({
  className,
  children,
  preset,
  intensity,
  animated = true,
  particleCount = 20,
  ...props
}: FloatingBackgroundProps) {
  // Generate deterministic floating particles to prevent hydration mismatch
  const particles = React.useMemo(() => {
    // Use deterministic values based on index to prevent server/client mismatch
    return Array.from({ length: particleCount }, (_, i) => {
      // Create pseudo-random but deterministic values using index
      const seed = i * 7919 // Large prime for distribution
      return {
        id: i,
        size: 2 + ((seed % 4) + 1), // 2-6px deterministic
        x: (seed * 37) % 100, // 0-100% deterministic
        y: (seed * 41) % 100, // 0-100% deterministic  
        duration: 10 + ((seed * 13) % 20), // 10-30s deterministic
        delay: (seed * 17) % 5, // 0-5s delay deterministic
        opacity: 0.1 + ((seed % 30) / 100) // 0.1-0.4 opacity deterministic
      }
    })
  }, [particleCount])
  
  return (
    <div className={cn(floatingBackgroundVariants({ preset, intensity }), className)} {...props}>
      {/* Floating Particles */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={cn(
                "absolute rounded-full",
                preset === "gunclub" && "bg-sandy-ochre",
                preset === "cool" && "bg-scope-blue",
                preset === "warm" && "bg-rusty-orange",
                preset === "neutral" && "bg-stainless-steel"
              )}
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                animation: `float ${particle.duration}s linear infinite ${particle.delay}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
      
      {/* Mesh Gradient Effect */}
      <div className={cn(
        "absolute inset-0 opacity-20 pointer-events-none",
        "bg-[radial-gradient(circle_at_50%_50%,rgba(242,203,5,0.1),transparent_50%)]"  
      )} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
