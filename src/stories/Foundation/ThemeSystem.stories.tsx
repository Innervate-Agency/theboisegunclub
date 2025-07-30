import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const meta: Meta = {
  title: 'Foundation/Theme System',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs', 'stable'],
}

export default meta
type Story = StoryObj

export const ThemeContrastTest: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      {/* Theme Info Display */}
      <div className="mb-8">
        <h1 className="text-3xl font-rajdhani font-bold text-primary mb-2">
          TBGC Theme System Test
        </h1>
        <p className="text-muted-foreground">
          Testing contrast colors and theme switching functionality
        </p>
      </div>

      {/* Semantic Color Testing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Primary Color Card */}
        <Card className="p-6">
          <h3 className="text-xl font-rajdhani font-bold text-primary mb-4">
            Primary Colors
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Primary Text:</span>
              <div className="w-8 h-8 bg-primary rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Foreground:</span>
              <div className="w-8 h-8 bg-foreground rounded"></div>
            </div>
            <Button className="w-full">Primary Button</Button>
          </div>
        </Card>

        {/* Contrast Color Card */}
        <Card className="p-6">
          <h3 className="text-xl font-rajdhani font-bold text-contrast mb-4">
            Contrast Colors
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Contrast Color:</span>
              <div className="w-8 h-8 bg-contrast rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Accent Color:</span>
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <Button variant="accent" className="w-full">Accent Button</Button>
          </div>
        </Card>

        {/* Background/Surface Card */}
        <Card className="p-6">
          <h3 className="text-xl font-rajdhani font-bold text-primary mb-4">
            Surface Colors
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Background:</span>
              <div className="w-8 h-8 bg-background border rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Card:</span>
              <div className="w-8 h-8 bg-card border rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Muted:</span>
              <div className="w-8 h-8 bg-muted rounded"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Interactive Elements Testing */}
      <Card className="p-6">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-4">
          Interactive Elements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="default">Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
        </div>
      </Card>

      {/* Hover/Focus Testing */}
      <Card className="p-6">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-4">
          Hover Effects (Test contrast visibility)
        </h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <p className="text-primary hover:text-contrast transition-colors">
              Hover this card to test contrast colors
            </p>
          </div>
          
          <div className="p-4 bg-card border rounded-lg group hover:shadow-lg transition-all cursor-pointer">
            <h4 className="font-semibold text-primary group-hover:text-contrast transition-colors">
              Group Hover Test
            </h4>
            <p className="text-muted-foreground group-hover:text-contrast/80 transition-colors">
              Should switch to proper contrast color on hover
            </p>
          </div>
        </div>
      </Card>

      {/* Color Values Display */}
      <Card className="p-6">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-4">
          Current CSS Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
          <div>
            <p><strong>Light Theme:</strong></p>
            <p>--contrast: {`var(--contrast)`} (copper-orange)</p>
            <p>--accent: {`var(--accent)`} (copper-orange)</p>
            <p>--primary: {`var(--primary)`} (blued-steel)</p>
          </div>
          <div>
            <p><strong>Dark Theme:</strong></p>
            <p>--contrast: {`var(--contrast)`} (brass-yellow)</p>
            <p>--accent: {`var(--accent)`} (cerakote-blue)</p>
            <p>--primary: {`var(--primary)`} (titanium-white)</p>
          </div>
        </div>
      </Card>
    </div>
  ),
}

export const ColorContrastComparison: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-rajdhani font-bold text-primary mb-6">
        Contrast Comparison: Before vs After
      </h1>
      
      {/* Light Theme Test */}
      <Card className="p-6">
        <h3 className="text-xl font-rajdhani font-bold mb-4">Light Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old (Bad) - Brass Yellow on Light */}
          <div className="space-y-4">
            <h4 className="font-semibold text-red-600">❌ OLD: Brass Yellow (Poor Contrast)</h4>
            <div className="p-4 bg-range-white border rounded-lg">
              <h5 className="text-brass-yellow font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-case-hardened">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Copper Orange on Light */}
          <div className="space-y-4">
            <h4 className="font-semibold text-green-600">✅ NEW: Copper Orange (Good Contrast)</h4>
            <div className="p-4 bg-range-white border rounded-lg">
              <h5 className="text-contrast font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-case-hardened">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Dark Theme Test */}
      <Card className="p-6 bg-night-sight text-titanium-white">
        <h3 className="text-xl font-rajdhani font-bold mb-4">Dark Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old (Bad) - Copper Orange on Dark */}
          <div className="space-y-4">
            <h4 className="font-semibold text-red-400">❌ OLD: Copper Orange (Poor Contrast)</h4>
            <div className="p-4 bg-carbon-fiber border border-tactical-gray rounded-lg">
              <h5 className="text-copper-orange font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Brass Yellow on Dark */}
          <div className="space-y-4">
            <h4 className="font-semibold text-green-400">✅ NEW: Brass Yellow (Good Contrast)</h4>
            <div className="p-4 bg-carbon-fiber border border-tactical-gray rounded-lg">
              <h5 className="text-brass-yellow font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
}
