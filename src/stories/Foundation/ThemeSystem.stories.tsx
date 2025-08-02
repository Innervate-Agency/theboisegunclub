import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const meta: Meta = {
  title: 'Design System/Foundation/ThemeSystem',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs', 'stable'],
}

export default meta
type Story = StoryObj

export const ThemeContrastTest: Story = {
  render: () => (
    <div className="space-y-[var(--space-lg)] p-[var(--space-md)]">
      {/* Theme Info Display */}
      <div className="mb-[var(--space-lg)]">
        <h1 className="text-3xl font-rajdhani font-bold text-primary mb-[var(--space-xs)]">
          TBGC Theme System Test
        </h1>
        <p className="text-muted-foreground">
          Testing contrast colors and theme switching functionality
        </p>
      </div>

      {/* Semantic Color Testing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
        
        {/* Primary Color Card */}
        <Card className="p-[var(--space-md)]">
          <h3 className="text-xl font-rajdhani font-bold text-primary mb-[var(--space-base)]">
            Primary Colors
          </h3>
          <div className="space-y-[var(--space-sm)]">
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
        <Card className="p-[var(--space-md)]">
          <h3 className="text-xl font-rajdhani font-bold text-contrast mb-[var(--space-base)]">
            Contrast Colors
          </h3>
          <div className="space-y-[var(--space-sm)]">
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
        <Card className="p-[var(--space-md)]">
          <h3 className="text-xl font-rajdhani font-bold text-primary mb-[var(--space-base)]">
            Surface Colors
          </h3>
          <div className="space-y-[var(--space-sm)]">
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
      <Card className="p-[var(--space-md)]">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-[var(--space-base)]">
          Interactive Elements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-base)]">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        
        <div className="mt-[var(--space-base)] flex flex-wrap gap-[var(--space-xs)]">
          <Badge variant="default">Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
        </div>
      </Card>

      {/* Hover/Focus Testing */}
      <Card className="p-[var(--space-md)]">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-[var(--space-base)]">
          Hover Effects (Test contrast visibility)
        </h3>
        <div className="space-y-[var(--space-base)]">
          <div className="p-[var(--space-base)] border rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <p className="text-primary hover:text-contrast transition-colors">
              Hover this card to test contrast colors
            </p>
          </div>
          
          <div className="p-[var(--space-base)] bg-card border rounded-lg group hover:shadow-lg transition-all cursor-pointer">
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
      <Card className="p-[var(--space-md)]">
        <h3 className="text-xl font-rajdhani font-bold text-primary mb-[var(--space-base)]">
          Current CSS Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-base)] text-sm font-mono">
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
    <div className="space-y-[var(--space-lg)] p-[var(--space-md)]">
      <h1 className="text-3xl font-rajdhani font-bold text-primary mb-[var(--space-md)]">
        Contrast Comparison: Before vs After
      </h1>
      
      {/* Light Theme Test */}
      <Card className="p-[var(--space-md)]">
        <h3 className="text-xl font-rajdhani font-bold mb-[var(--space-base)]">Light Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          
          {/* Old (Bad) - Brass Yellow on Light */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="font-semibold text-red-600">❌ OLD: Brass Yellow (Poor Contrast)</h4>
            <div className="p-[var(--space-base)] bg-range-white border rounded-lg">
              <h5 className="text-brass-yellow font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-case-hardened">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Copper Orange on Light */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="font-semibold text-green-600">✅ NEW: Copper Orange (Good Contrast)</h4>
            <div className="p-[var(--space-base)] bg-range-white border rounded-lg">
              <h5 className="text-contrast font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-case-hardened">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Dark Theme Test */}
      <Card className="p-[var(--space-md)] bg-night-sight text-titanium-white">
        <h3 className="text-xl font-rajdhani font-bold mb-[var(--space-base)]">Dark Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          
          {/* Old (Bad) - Copper Orange on Dark */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="font-semibold text-red-400">❌ OLD: Copper Orange (Poor Contrast)</h4>
            <div className="p-[var(--space-base)] bg-carbon-fiber border border-tactical-gray rounded-lg">
              <h5 className="text-copper-orange font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Brass Yellow on Dark */}
          <div className="space-y-[var(--space-base)]">
            <h4 className="font-semibold text-green-400">✅ NEW: Brass Yellow (Good Contrast)</h4>
            <div className="p-[var(--space-base)] bg-carbon-fiber border border-tactical-gray rounded-lg">
              <h5 className="text-brass-yellow font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
}
