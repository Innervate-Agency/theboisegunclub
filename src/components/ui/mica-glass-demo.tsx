'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface MicaDemoProps {
  className?: string
}

export function MicaGlassDemo({ className }: MicaDemoProps) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto p-lg space-y-[var(--space-lg)]", className)}>
      <div className="text-center space-y-[var(--space-base)]">
        <h2 className="text-heading-lg font-rajdhani font-bold text-dark-chocolate">
          Windows 11 Mica Glass System
        </h2>
        <p className="text-warning-amber font-noto-sans max-w-2xl mx-auto">
          Professional glassmorphism effects that enhance your design without overwhelming it.
          Each variant is optimized for specific use cases with proper background layering.
        </p>
      </div>

      {/* Layered Background Demo - This is KEY for glassmorphism to work */}
      <div 
        className="relative p-lg rounded-large overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(242, 203, 5, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(242, 135, 5, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(192, 128, 81, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, var(--color-range-white) 0%, var(--color-card-surface) 100%)
          `
        }}
      >
        {/* Background Pattern for Glass to Blur */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-32 h-32 bg-sandy-ochre/20 rounded-full blur-xl" />
          <div className="absolute top-12 right-8 w-24 h-24 bg-rusty-orange/15 rounded-full blur-lg" />
          <div className="absolute bottom-8 left-1/3 w-40 h-20 bg-scope-blue/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 right-4 w-28 h-28 bg-walnut-stock/15 rounded-full blur-xl" />
        </div>

        <div className="relative space-y-[var(--space-md)]">
          <h3 className="text-heading-md font-rajdhani font-bold text-dark-chocolate text-center">
            Mica Effects with Proper Background Layering
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            
            {/* Mica Card - Now with visible background to blur */}
            <Card className="mica-card relative z-10">
              <CardHeader>
                <CardTitle className="text-body-lg">Standard Mica</CardTitle>
                <CardDescription>Blurs background content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground mb-[var(--space-base)]">
                  Notice how the background shapes are blurred behind this card.
                </p>
                <Button size="sm" variant="secondary">Glassmorphism</Button>
              </CardContent>
            </Card>

            {/* Premium Mica Card */}
            <Card className="mica-card-premium relative z-10">
              <CardHeader>
                <Badge variant="premium" className="w-fit mb-[var(--space-xs)]">Premium</Badge>
                <CardTitle className="text-body-lg">Premium Mica</CardTitle>
                <CardDescription>Enhanced glass with brand accent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground mb-[var(--space-base)]">
                  Enhanced blur with subtle brass/copper glow effect.
                </p>
                <Button size="sm" variant="default">See Effect</Button>
              </CardContent>
            </Card>

            {/* Mica Overlay Demo */}
            <div className="mica-overlay p-md rounded-card relative z-10">
              <h4 className="font-rajdhani font-bold text-foreground mb-[var(--space-sm)]">Mica Overlay</h4>
              <p className="text-body-sm text-muted-foreground mb-[var(--space-base)]">
                Perfect for dropdowns, modals, and floating UI elements.
              </p>
              <Button variant="glass" size="sm" className="w-full">
                Glass Button
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison: Glass vs Solid */}
      <div className="space-y-[var(--space-md)]">
        <h3 className="text-heading-md font-rajdhani font-bold text-dark-chocolate text-center">
          Glassmorphism vs Solid: When to Use Each
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          
          {/* Background for Comparison */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-mesh-premium rounded-large opacity-60" />
            <div className="relative space-y-[var(--space-base)]">
              <h4 className="text-body-lg font-medium text-dark-chocolate text-center mb-[var(--space-base)]">
                ✅ Perfect for Glassmorphism
              </h4>
              
              {/* Dropdown Simulation */}
              <div className="mica-dropdown p-base rounded-card relative z-10">
                <h5 className="font-medium mb-[var(--space-xs)]">Dropdown Menu</h5>
                <p className="text-body-sm text-muted-foreground">
                  Floats over content, glass effect shows context
                </p>
              </div>
              
              {/* Modal Simulation */}
              <div className="mica-modal p-base rounded-card relative z-10">
                <h5 className="font-medium mb-[var(--space-xs)]">Modal Dialog</h5>
                <p className="text-body-sm text-muted-foreground">
                  Strong blur maintains focus while showing background
                </p>
              </div>
            </div>
          </div>
          
          {/* Solid Cards */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="text-body-lg font-medium text-dark-chocolate text-center mb-[var(--space-base)]">
              ✅ Perfect for Solid Colors
            </h4>
            
            <Card className="bg-card border-border">
              <CardContent className="p-base">
                <h5 className="font-medium mb-[var(--space-xs)]">Content Card</h5>
                <p className="text-body-sm text-muted-foreground">
                  Primary content deserves solid, clean backgrounds
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-solid-brand-warm hover-gradient-warm border-sandy-ochre/20">
              <CardContent className="p-base">
                <h5 className="font-medium mb-[var(--space-xs)]">Interactive Card</h5>
                <p className="text-body-sm text-muted-foreground">
                  Subtle hover effect without overwhelming glass
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Layered Demo */}
      <div className="relative p-lg bg-gradient-hero-warm rounded-large border border-sandy-ochre/20">
        <div className="absolute inset-0 bg-gradient-mesh-premium rounded-large" />
        <div className="relative space-y-[var(--space-md)]">
          <h3 className="text-heading-md font-rajdhani font-bold text-dark-chocolate">
            Layered Glass Effects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
            <div className="mica-dropdown p-base rounded-card">
              <h4 className="font-medium text-foreground mb-[var(--space-xs)]">Dropdown Style</h4>
              <p className="text-body-sm text-muted-foreground">
                Optimized for floating UI elements
              </p>
            </div>
            
            <div className="mica-modal p-base rounded-card">
              <h4 className="font-medium text-foreground mb-[var(--space-xs)]">Modal Style</h4>
              <p className="text-body-sm text-muted-foreground">
                Strong blur for focus retention
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Philosophy Demo */}
      <div className="space-y-[var(--space-md)]">
        <h3 className="text-heading-md font-rajdhani font-bold text-dark-chocolate text-center">
          Gradient Philosophy: Restraint Over Chaos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          
          {/* Good Examples */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="text-body-lg font-medium text-rifling-green">✅ Recommended Approach</h4>
            
            <Card className="bg-solid-brand-warm hover-gradient-warm">
              <CardContent className="p-base">
                <p className="text-body-sm">Solid color with subtle hover gradient</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card-warm">
              <CardContent className="p-base">
                <p className="text-body-sm">Ultra-subtle design system gradient (2-4% opacity)</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Bad Examples */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="text-body-lg font-medium text-safety-red">❌ Avoid These Patterns</h4>
            
            <Card className="bg-gradient-to-br from-sandy-ochre/20 via-white to-rusty-orange/20">
              <CardContent className="p-base">
                <p className="text-body-sm">Too strong - creates visual noise</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500/30 to-pink-500/30">
              <CardContent className="p-base">
                <p className="text-body-sm">Off-brand colors break design cohesion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Design Tokens Reference */}
      <div className="bg-solid-brand-neutral p-md rounded-large border border-sandy-ochre/20">
        <h4 className="text-body-lg font-rajdhani font-bold text-dark-chocolate mb-[var(--space-base)]">
          Design Token Reference
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-base text-body-sm font-noto-sans">
          <div>
            <h5 className="font-medium text-warning-amber mb-[var(--space-xs)]">Mica Classes</h5>
            <ul className="space-y-[var(--space-micro)] text-muted-foreground">
              <li><code>.mica-card</code></li>
              <li><code>.mica-card-premium</code></li>
              <li><code>.mica-overlay</code></li>
              <li><code>.mica-dropdown</code></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-warning-amber mb-[var(--space-xs)]">Gradient Backgrounds</h5>
            <ul className="space-y-[var(--space-micro)] text-muted-foreground">
              <li><code>.bg-gradient-hero-warm</code></li>
              <li><code>.bg-gradient-card-warm</code></li>
              <li><code>.bg-solid-brand-warm</code></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-warning-amber mb-[var(--space-xs)]">Hover Effects</h5>
            <ul className="space-y-[var(--space-micro)] text-muted-foreground">
              <li><code>.hover-gradient-warm</code></li>
              <li><code>.hover-gradient-cool</code></li>
              <li><code>.transition-stripe-normal</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
