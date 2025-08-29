'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// Western-themed divider styles inspired by Idaho landscape
export type DividerStyle = 
  | 'bruno-sand-dunes'
  | 'snake-river-canyon' 
  | 'frank-church-wilderness'
  | 'none'

interface WesternDividerProps {
  style: DividerStyle
  direction?: 'up' | 'down'
  className?: string
  color?: string
}

export function WesternDivider({ 
  style, 
  direction = 'down', 
  className,
  color = 'currentColor'
}: WesternDividerProps) {
  if (style === 'none') return null
  
  const isUp = direction === 'up'
  
  // Bruno Sand Dunes - Smooth rolling curves like massive dunes
  const brunoDunesPath = isUp
    ? "M0,60 C120,45 240,30 360,35 C480,40 600,50 720,45 C840,40 960,35 1080,40 C1200,45 1320,50 1440,45 L1440,0 L0,0 Z"
    : "M0,0 C120,15 240,30 360,25 C480,20 600,10 720,15 C840,20 960,25 1080,20 C1200,15 1320,10 1440,15 L1440,60 L0,60 Z"
  
  // Snake River Canyon - Sharp angular cuts like canyon walls  
  const snakeRiverPath = isUp
    ? "M0,40 L240,25 L480,35 L720,20 L960,30 L1200,15 L1440,25 L1440,0 L0,0 Z"
    : "M0,0 L240,15 L480,5 L720,20 L960,10 L1200,25 L1440,15 L1440,40 L0,40 Z"
  
  // Frank Church Wilderness - Jagged mountain peaks
  const frankChurchPath = isUp
    ? "M0,50 L180,35 L240,45 L420,25 L600,40 L720,20 L900,35 L1080,30 L1200,40 L1440,25 L1440,0 L0,0 Z"
    : "M0,0 L180,15 L240,5 L420,25 L600,10 L720,30 L900,15 L1080,20 L1200,10 L1440,25 L1440,50 L0,50 Z"

  const pathMap = {
    'bruno-sand-dunes': brunoDunesPath,
    'snake-river-canyon': snakeRiverPath,
    'frank-church-wilderness': frankChurchPath
  }

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        className="w-full h-auto block"
        style={{ height: 'auto', maxHeight: '60px' }}
      >
        <path
          d={pathMap[style]}
          fill={color}
        />
      </svg>
    </div>
  )
}

// Wrapper component for sections with western dividers
interface WesternSectionProps {
  children: React.ReactNode
  topDivider?: DividerStyle
  bottomDivider?: DividerStyle
  topDividerDirection?: 'up' | 'down'
  bottomDividerDirection?: 'up' | 'down'
  backgroundColor?: string
  dividerColor?: string
  bgVariant?: 'background' | 'card' | 'muted' | 'muted-soft'
  className?: string
}

export function WesternSection({
  children,
  topDivider = 'none',
  bottomDivider = 'none',
  topDividerDirection = 'down',
  bottomDividerDirection = 'up',
  backgroundColor,
  bgVariant = 'background',
  dividerColor,
  className
}: WesternSectionProps) {
  const bgClass = bgVariant ? {
    'background': 'bg-background',
    'card': 'bg-card text-card-foreground',
    'muted': 'bg-muted',
    'muted-soft': 'bg-muted-soft'
  }[bgVariant] : ''

  return (
    <section 
      className={cn('relative', bgClass, className)}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {topDivider !== 'none' && (
        <div className="absolute top-0 left-0 w-full z-10 transform -translate-y-px">
          <WesternDivider 
            style={topDivider} 
            direction={topDividerDirection}
            color={dividerColor || backgroundColor}
          />
        </div>
      )}
      
      <div className="relative z-20">
        {children}
      </div>
      
      {bottomDivider !== 'none' && (
        <div className="absolute bottom-0 left-0 w-full z-10 transform translate-y-px">
          <WesternDivider 
            style={bottomDivider} 
            direction={bottomDividerDirection}
            color={dividerColor || backgroundColor}
          />
        </div>
      )}
    </section>
  )
}

// Showcase component to demonstrate all divider styles
export function WesternDividerShowcase() {
  const dividerStyles: Array<{
    style: DividerStyle
    name: string
    description: string
    inspiration: string
  }> = [
    {
      style: 'bruno-sand-dunes',
      name: 'Bruno Sand Dunes',
      description: 'Smooth, rolling curves inspired by the massive sand dunes of southern Idaho',
      inspiration: 'Bruno Sand Dunes State Park - flowing, organic shapes'
    },
    {
      style: 'snake-river-canyon',
      name: 'Snake River Canyon',
      description: 'Sharp, angular cuts reminiscent of Idaho\'s dramatic river canyon walls',
      inspiration: 'Snake River Canyon - clean geometric angles'
    },
    {
      style: 'frank-church-wilderness',
      name: 'Frank Church Wilderness',
      description: 'Jagged mountain peaks capturing the rugged beauty of Idaho\'s wilderness',
      inspiration: 'Frank Church Wilderness - irregular natural formations'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Header Section */}
      <section className="py-4xl bg-background">
        <div className="container mx-auto max-w-site px-lg text-center space-y-lg">
          <h1 className="font-rajdhani font-bold text-5xl text-foreground">
            WESTERN DIVIDERS
          </h1>
          <h2 className="font-rajdhani font-medium text-2xl text-muted-foreground">
            Idaho-inspired section separators
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Clean, modern SVG dividers inspired by Idaho's iconic landscapes. 
            Simple but sophisticated - perfect for creating visual depth without artistic distraction.
          </p>
        </div>
      </section>

      {/* Divider Examples */}
      {dividerStyles.map((divider, index) => (
        <WesternSection
          key={divider.style}
          topDivider={divider.style}
          bottomDivider={divider.style}
          topDividerDirection="down"
          bottomDividerDirection="up"
          backgroundColor={index % 2 === 0 ? 'var(--muted)' : 'var(--card)'}
          dividerColor={index % 2 === 0 ? 'var(--muted)' : 'var(--card)'}
          className="py-4xl"
        >
          <div className="container mx-auto max-w-site px-lg">
            <div className="grid lg:grid-cols-2 gap-xl items-center">
              <div className="space-y-lg">
                <h3 className="font-rajdhani font-bold text-3xl text-foreground">
                  {divider.name.toUpperCase()}
                </h3>
                <p className="text-body-lg text-muted-foreground">
                  {divider.description}
                </p>
                <div className="space-y-base">
                  <h4 className="font-rajdhani font-bold text-lg text-foreground">
                    Inspiration:
                  </h4>
                  <p className="text-body text-muted-foreground">
                    {divider.inspiration}
                  </p>
                </div>
                <div className="space-y-xs">
                  <h4 className="font-rajdhani font-bold text-lg text-foreground">
                    Usage:
                  </h4>
                  <code className="block bg-black/10 p-base rounded-xs text-sm font-mono">
                    {`<WesternDivider style="${divider.style}" />`}
                  </code>
                </div>
              </div>
              
              {/* Visual Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-blue to-sagebrush-green p-xl rounded-xs">
                  <div className="space-y-base">
                    <WesternDivider 
                      style={divider.style} 
                      direction="down"
                      color="white"
                      className="mb-base"
                    />
                    <div className="h-20 bg-white/20 rounded-xs flex items-center justify-center">
                      <span className="text-white font-rajdhani font-bold">
                        Section Content
                      </span>
                    </div>
                    <WesternDivider 
                      style={divider.style} 
                      direction="up"
                      color="white"
                      className="mt-base"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WesternSection>
      ))}
    </div>
  )
}