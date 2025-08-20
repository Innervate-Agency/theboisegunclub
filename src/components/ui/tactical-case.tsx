'use client'

import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { MotionDiv } from '@/components/ui/optimized-motion'

const tacticalCaseVariants = cva(
  "relative group transition-all duration-300",
  {
    variants: {
      variant: {
        standard: "border-2 border-border/30 rounded-sm bg-card/50 backdrop-blur-sm",
        elevated: "border-2 border-border/40 rounded-sm bg-card/60 backdrop-blur-sm shadow-present",
        prominent: "border-2 border-border/50 rounded-sm bg-card/70 backdrop-blur-md shadow-elevated",
        interactive: "border-2 border-border/30 rounded-sm bg-card/50 backdrop-blur-sm hover:border-opacity-60 cursor-pointer hover:scale-[1.01]"
      },
      size: {
        sm: "p-sm",
        md: "p-md", 
        lg: "p-lg",
        xl: "p-xl"
      },
      theme: {
        home: "group-hover:border-nav-home/40 group-hover:bg-card/70",
        events: "group-hover:border-nav-events/40 group-hover:bg-card/70",
        directory: "group-hover:border-nav-directory/40 group-hover:bg-card/70",
        armory: "group-hover:border-nav-armory/40 group-hover:bg-card/70",
        intel: "group-hover:border-nav-intel/40 group-hover:bg-card/70",
        marketplace: "group-hover:border-nav-marketplace/40 group-hover:bg-card/70",
        forums: "group-hover:border-nav-forums/40 group-hover:bg-card/70",
        default: "group-hover:border-border/50 group-hover:bg-card/70"
      }
    },
    defaultVariants: {
      variant: "standard",
      size: "md",
      theme: "default"
    }
  }
)

export interface TacticalCaseProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tacticalCaseVariants> {
  showCornerBrackets?: boolean
  showLatches?: boolean
  showGridPattern?: boolean // Now shows western heritage paper texture instead of tactical grid
  showRopeBinding?: boolean
  caseLabel?: string
  children: React.ReactNode
  viewMode?: string // Accept but don't pass to DOM
}

export function TacticalCase({
  className,
  variant,
  size,
  theme = "default",
  showCornerBrackets = true,
  showLatches = true,
  showGridPattern = false,
  showRopeBinding = false,
  caseLabel,
  children,
  viewMode, // Destructure viewMode so it doesn't get passed to DOM
  ...props
}: TacticalCaseProps) {
  
  // Get theme color for tactical elements
  const getThemeColor = (theme: string) => {
    const colorMap = {
      home: 'nav-home',
      events: 'nav-events', 
      directory: 'nav-directory',
      armory: 'nav-armory',
      intel: 'nav-intel',
      marketplace: 'nav-marketplace',
      forums: 'nav-forums',
      default: 'border'
    }
    return colorMap[theme as keyof typeof colorMap] || 'border'
  }

  const themeColor = getThemeColor(theme || 'default')

  return (
    <div 
      className={cn(tacticalCaseVariants({ variant, size, theme }), className)}
      {...props}
    >
      {/* Western Heritage Corner Clasps - Hardware Store Style */}
      {showCornerBrackets && (
        <>
          {/* Top corners - rounded hardware clasps */}
          <div className={`absolute top-1 left-1 w-2 h-2 rounded-sm border border-${themeColor}/50 bg-${themeColor}/10 transition-all duration-200 opacity-0 group-hover:opacity-90 group-hover:bg-${themeColor}/20`} />
          <div className={`absolute top-1 right-1 w-2 h-2 rounded-sm border border-${themeColor}/50 bg-${themeColor}/10 transition-all duration-200 opacity-0 group-hover:opacity-90 group-hover:bg-${themeColor}/20`} />
          
          {/* Bottom corners - left with standard clasp */}
          <div className={`absolute bottom-1 left-1 w-2 h-2 rounded-sm border border-${themeColor}/50 bg-${themeColor}/10 transition-all duration-200 opacity-0 group-hover:opacity-90 group-hover:bg-${themeColor}/20`} />
          
          {/* Bottom right - document tab corner */}
          <div className={`absolute bottom-1 right-1 w-3 h-3 transition-all duration-200 opacity-0 group-hover:opacity-90`}>
            <div 
              className={`w-full h-full border border-${themeColor}/50 bg-${themeColor}/10 group-hover:bg-${themeColor}/20`}
              style={{
                clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)',
                borderRadius: '2px'
              }}
            />
            {/* Small tab rivet */}
            <div className={`absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-${themeColor}/60 rounded-full`} />
          </div>
          
          {/* Hardware store style rivets */}
          <div className={`absolute top-2 left-0.5 w-0.5 h-0.5 bg-${themeColor}/40 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-80`} />
          <div className={`absolute top-2 right-0.5 w-0.5 h-0.5 bg-${themeColor}/40 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-80`} />
          <div className={`absolute bottom-2 left-0.5 w-0.5 h-0.5 bg-${themeColor}/40 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-80`} />
        </>
      )}
      
      {/* Western Heritage Binding Posts */}
      {showLatches && (
        <>
          {/* Brass binding posts like old document folders */}
          <div className={`absolute top-3 right-3 w-1 h-1 bg-${themeColor}/50 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-90 border border-${themeColor}/70`} />
          <div className={`absolute bottom-3 left-3 w-1 h-1 bg-${themeColor}/50 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-90 border border-${themeColor}/70`} />
          
          {/* Small shadow effect for depth */}
          <div className={`absolute top-3.5 right-3.5 w-1 h-1 bg-${themeColor}/20 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-60 blur-[0.5px]`} />
          <div className={`absolute bottom-3.5 left-3.5 w-1 h-1 bg-${themeColor}/20 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-60 blur-[0.5px]`} />
        </>
      )}
      
      {/* Western Heritage Paper Texture */}
      {showGridPattern && (
        <div className="absolute inset-2 opacity-0 group-hover:opacity-30 transition-opacity duration-200">
          {/* Aged paper texture with subtle grain */}
          <div 
            className={`w-full h-full bg-gradient-to-br from-${themeColor}/10 via-transparent to-${themeColor}/5`}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, ${themeColor === 'border' ? 'rgba(120, 113, 108, 0.03)' : `var(--${themeColor})`}03 1px, transparent 1px),
                radial-gradient(circle at 80% 70%, ${themeColor === 'border' ? 'rgba(120, 113, 108, 0.02)' : `var(--${themeColor})`}02 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, ${themeColor === 'border' ? 'rgba(120, 113, 108, 0.02)' : `var(--${themeColor})`}02 1px, transparent 1px)
              `,
              backgroundSize: '12px 12px, 8px 8px, 16px 16px'
            }}
          />
          {/* Subtle document edge wear */}
          <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${themeColor}/20 to-transparent`} />
          <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${themeColor}/15 to-transparent`} />
        </div>
      )}
      
      {/* Western Rope Binding Effect */}
      {showRopeBinding && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
          {/* Vertical rope binding - left side */}
          <div className="absolute left-2 top-4 bottom-4 w-0.5">
            <div 
              className={`w-full h-full bg-gradient-to-b from-${themeColor}/30 to-${themeColor}/15`}
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  var(--${themeColor})20 2px,
                  var(--${themeColor})20 4px
                )`
              }}
            />
          </div>
          
          {/* Vertical rope binding - right side */}
          <div className="absolute right-2 top-4 bottom-4 w-0.5">
            <div 
              className={`w-full h-full bg-gradient-to-b from-${themeColor}/30 to-${themeColor}/15`}
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  var(--${themeColor})20 2px,
                  var(--${themeColor})20 4px
                )`
              }}
            />
          </div>
          
          {/* Horizontal rope binding - center */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2">
            <div 
              className={`w-full h-full bg-gradient-to-r from-${themeColor}/20 via-${themeColor}/30 to-${themeColor}/20`}
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 3px,
                  var(--${themeColor})25 3px,
                  var(--${themeColor})25 6px
                )`
              }}
            />
          </div>
          
          {/* Rope knots at intersections */}
          <div className={`absolute top-1/2 left-2 w-1.5 h-1.5 -translate-y-1/2 bg-${themeColor}/40 rounded-full`} />
          <div className={`absolute top-1/2 right-2 w-1.5 h-1.5 -translate-y-1/2 bg-${themeColor}/40 rounded-full`} />
        </div>
      )}
      
      {/* Case Label */}
      {caseLabel && (
        <div className={`absolute -top-3 left-4 bg-card px-2 py-1 text-xs font-rajdhani font-bold text-${themeColor}/80 border border-${themeColor}/20 rounded-xs transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1`}>
          {caseLabel}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}