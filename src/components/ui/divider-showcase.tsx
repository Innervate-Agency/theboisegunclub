'use client'

import React from 'react'
import { ZigZagSection, ChunkyHeader, ZigZagContent } from '@/components/ui/zigzag-section'

export function DividerShowcase() {
  const dividerStyles = [
    {
      name: 'Mountain Ridge',
      class: 'mountain-ridge',
      description: 'Sharp diagonal cuts inspired by Idaho peaks - perfect for dramatic transitions',
      variant: 'slate-blue' as const
    },
    {
      name: 'Mountain Ridge Up',
      class: 'mountain-ridge-up',
      description: 'Inverted mountain peaks - use for upward flowing content',
      variant: 'sagebrush-green' as const
    },
    {
      name: 'Desert Mesa',
      class: 'desert-mesa',
      description: 'Stepped patterns like southwestern plateaus - great for layered information',
      variant: 'warm-stone' as const
    },
    {
      name: 'Desert Mesa Up',
      class: 'desert-mesa-up',
      description: 'Upward mesa steps - ideal for building hierarchy',
      variant: 'sandy-ochre' as const
    },
    {
      name: 'Jagged Rocks',
      class: 'jagged-rocks',
      description: 'Irregular desert rock formations - perfect for organic, natural feel',
      variant: 'rusty-orange' as const
    },
    {
      name: 'Jagged Rocks Up',
      class: 'jagged-rocks-up',
      description: 'Upward rock formations - dynamic and energetic transitions',
      variant: 'weathered-sage' as const
    },
    {
      name: 'Canyon Cut',
      class: 'canyon-cut',
      description: 'Deep diagonal slices inspired by Idaho canyons - bold and striking',
      variant: 'slate-blue' as const
    },
    {
      name: 'Canyon Cut Up',
      class: 'canyon-cut-up',
      description: 'Upward canyon cuts - perfect for dramatic reveals',
      variant: 'weathered-warm' as const
    },
    {
      name: 'Angular Waves',
      class: 'angular-waves',
      description: 'Smooth but angular like rolling foothills - subtle and elegant',
      variant: 'sagebrush-green' as const
    },
    {
      name: 'Angular Waves Up',
      class: 'angular-waves-up',
      description: 'Upward flowing angular waves - gentle and sophisticated',
      variant: 'sandy-ochre' as const
    }
  ]

  return (
    <div className="space-y-0">
      <section className="py-4xl bg-background">
        <div className="container mx-auto max-w-site px-lg">
          <div className="text-center space-y-lg">
            <ChunkyHeader 
              title="WESTERN DIVIDER SHOWCASE" 
              subtitle="angular section dividers inspired by the american southwest"
            />
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Each divider is crafted using CSS clip-path for precise control and optimal performance. 
              All patterns are responsive and work seamlessly between different background colors.
            </p>
          </div>
        </div>
      </section>

      {dividerStyles.map((style, index) => (
        <ZigZagSection
          key={style.class}
          variant={style.variant}
          alignment={index % 2 === 0 ? 'left' : 'right'}
          divider={style.class as any}
        >
          <ChunkyHeader 
            title={style.name.toUpperCase()} 
            subtitle={`class: section-${style.class}`}
          />
          <ZigZagContent>
            <p className="text-body-lg opacity-90">
              {style.description}
            </p>
            <div className="space-y-xs">
              <h4 className="font-rajdhani font-bold text-lg">Usage:</h4>
              <code className="block bg-black/20 p-base rounded-xs text-sm font-mono">
                {`<ZigZagSection divider="${style.class}">`}
              </code>
            </div>
          </ZigZagContent>
        </ZigZagSection>
      ))}

      <section className="py-4xl bg-background">
        <div className="container mx-auto max-w-site px-lg text-center space-y-lg">
          <ChunkyHeader 
            title="PERFORMANCE OPTIMIZED" 
            subtitle="mobile responsive with simplified patterns"
          />
          <div className="grid md:grid-cols-2 gap-xl text-left">
            <div className="space-y-base">
              <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Desktop Features:</h3>
              <ul className="space-y-xs text-muted-foreground">
                <li>• Complex polygon patterns with up to 24 points</li>
                <li>• Smooth curves and intricate detail work</li>
                <li>• Full visual impact for modern browsers</li>
                <li>• Hardware-accelerated clip-path rendering</li>
              </ul>
            </div>
            <div className="space-y-base">
              <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Mobile Optimizations:</h3>
              <ul className="space-y-xs text-muted-foreground">
                <li>• Simplified patterns with fewer polygon points</li>
                <li>• Reduced complexity for better performance</li>
                <li>• Maintained visual impact at smaller scales</li>
                <li>• Battery-conscious rendering approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}