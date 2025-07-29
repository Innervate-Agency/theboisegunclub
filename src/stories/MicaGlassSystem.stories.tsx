import type { Meta, StoryObj } from '@storybook/react'
import { MicaGlassDemo } from '../components/ui/mica-glass-demo'
import { GlassmorphismExamples } from '../components/ui/glassmorphism-examples'

const meta: Meta<typeof MicaGlassDemo> = {
  title: 'TBGC Design System/Mica Glass System',
  component: MicaGlassDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete demonstration of the Windows 11 Mica glass system with professional glassmorphism effects, restrained gradients, and design philosophy examples. This showcases the TBGC approach to modern, sophisticated UI design.'
      }
    }
  },
  tags: ['design-system', 'glassmorphism', 'mica'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
}

export default meta
type Story = StoryObj<typeof MicaGlassDemo>

export const CompleteDemo: Story = {
  name: 'Complete Mica System Demo',
  render: () => (
    <div 
      className="min-h-screen p-8 relative"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(242, 203, 5, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 75% 75%, rgba(242, 135, 5, 0.06) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(81, 152, 205, 0.04) 0%, transparent 40%),
          linear-gradient(135deg, var(--color-range-white) 0%, var(--color-shooting-bench) 100%)
        `
      }}
    >
      {/* Background Elements for Glass to Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brass-yellow/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-copper-orange/8 rounded-full blur-2xl" />
        <div className="absolute bottom-32 left-1/3 w-80 h-40 bg-scope-blue/6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-walnut-stock/8 rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10">
        <MicaGlassDemo />
      </div>
    </div>
  )
}

export const DarkModeDemo: Story = {
  name: 'Dark Mode Mica Effects',
  render: () => (
    <div className="dark min-h-screen bg-gradient-hero-premium p-8">
      <MicaGlassDemo />
    </div>
  )
}

export const LayeredBackground: Story = {
  name: 'Complex Background Layering',
  render: () => (
    <div 
      className="min-h-screen p-8"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(242, 203, 5, 0.06) 0%, transparent 35%),
          radial-gradient(circle at 75% 75%, rgba(242, 135, 5, 0.04) 0%, transparent 35%),
          linear-gradient(135deg, var(--color-range-white) 0%, var(--color-shooting-bench) 100%)
        `
      }}
    >
      <MicaGlassDemo />
    </div>
  )
}

export const PracticalExamples: Story = {
  name: 'Real-World Glass Components',
  render: () => (
    <div className="min-h-screen bg-gradient-mesh-premium">
      <GlassmorphismExamples />
    </div>
  )
}

export const MinimalDemo: Story = {
  name: 'Minimal Glass Effects',
  render: () => (
    <div className="min-h-screen bg-solid-brand-neutral p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-rajdhani font-bold text-foreground">
            Minimal Mica Integration
          </h2>
          <p className="text-muted-foreground font-noto-sans">
            Sometimes less is more. Simple mica effects for clean, professional interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="mica-card p-6 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Standard Card</h3>
            <p className="text-sm text-muted-foreground">Subtle glass effect</p>
          </div>
          
          <div className="mica-dropdown p-6 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Dropdown Style</h3>
            <p className="text-sm text-muted-foreground">Optimized blur levels</p>
          </div>
          
          <div className="mica-overlay p-6 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Overlay Effect</h3>
            <p className="text-sm text-muted-foreground">Professional depth</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const DarkModeTest: Story = {
  name: 'Dark Mode Theme Test',
  render: () => (
    <div className="dark min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-rajdhani font-bold text-foreground">
            Dark Mode Test - Theme Colors
          </h2>
          <p className="text-muted-foreground font-noto-sans">
            Testing semantic colors in dark mode. Text should be white/light.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
            <h3 className="font-medium mb-2 text-foreground">Card with Semantic Colors</h3>
            <p className="text-sm text-muted-foreground">This uses bg-card and text-foreground</p>
            <p className="text-xs text-muted-foreground mt-2">Muted text should be lighter gray</p>
          </div>
          
          <div className="mica-card p-6 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Mica Card</h3>
            <p className="text-sm text-muted-foreground">Glass effect with theme colors</p>
            <p className="text-xs text-brand-primary mt-2">Brand primary (brass yellow)</p>
          </div>
        </div>
        
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <p className="font-medium">Primary background with primary foreground text</p>
        </div>
        
        <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
          <p className="font-medium">Secondary background with secondary foreground text</p>
        </div>
      </div>
    </div>
  )
}
