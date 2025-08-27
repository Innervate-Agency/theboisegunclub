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
    <div className="space-y-lg p-md">
      {/* Theme InformationCircleIcon Display */}
      <div className="mb-lg">
        <h1 className="text-3xl font-rajdhani font-bold text-primary mb-xs">
          TBGC Theme System Test
        </h1>
        <p className="text-muted-foreground">
          Testing contrast colors and theme switching functionality
        </p>
      </div>

      {/* Semantic Color Testing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        
        {/* Primary Color Card */}
        <Card className="p-md">
          <h3 className="text-display-sm font-rajdhani font-bold text-primary mb-base">
            Primary Colors
          </h3>
          <div className="space-y-sm">
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Primary Text:</span>
              <div className="w-8 h-8 bg-primary rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Foreground:</span>
              <div className="w-8 h-8 bg-foreground rounded"></div>
            </div>
            <Button className="w-full">Primary Button</Button>
          </div>
        </Card>

        {/* Contrast Color Card */}
        <Card className="p-md">
          <h3 className="text-display-sm font-rajdhani font-bold text-contrast mb-base">
            Contrast Colors
          </h3>
          <div className="space-y-sm">
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Contrast Color:</span>
              <div className="w-8 h-8 bg-contrast rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Accent Color:</span>
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <Button variant="default" className="w-full">Accent Button</Button>
          </div>
        </Card>

        {/* Background/Surface Card */}
        <Card className="p-md">
          <h3 className="text-display-sm font-rajdhani font-bold text-primary mb-base">
            Surface Colors
          </h3>
          <div className="space-y-sm">
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Background:</span>
              <div className="w-8 h-8 bg-background border rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Card:</span>
              <div className="w-8 h-8 bg-card border rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Muted:</span>
              <div className="w-8 h-8 bg-muted rounded"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Interactive Elements Testing */}
      <Card className="p-md">
        <h3 className="text-display-sm font-rajdhani font-bold text-primary mb-base">
          Interactive Elements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
          <Button variant="default">Primary</Button>
          <Button variant="outline">Secondary</Button>
          <Button variant="default">Accent</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        
        <div className="mt-base flex flex-wrap gap-xs">
          <Badge variant="outline">Default Badge</Badge>
          <Badge variant="outline">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
        </div>
      </Card>

      {/* Hover/Focus Testing */}
      <Card className="p-md">
        <h3 className="text-display-sm font-rajdhani font-bold text-primary mb-base">
          Hover Effects (Test contrast visibility)
        </h3>
        <div className="space-y-base">
          <div className="p-base border rounded-sm hover:bg-muted transition-colors cursor-pointer">
            <p className="text-primary hover:text-contrast transition-colors">
              Hover this card to test contrast colors
            </p>
          </div>
          
          <div className="p-base bg-card border rounded-sm group hover:shadow-elevated transition-all cursor-pointer">
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
      <Card className="p-md">
        <h3 className="text-display-sm font-rajdhani font-bold text-primary mb-base">
          Current CSS Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-base text-body-sm font-mono">
          <div>
            <p><strong>Light Theme:</strong></p>
            <p>--contrast: {`var(--contrast)`} (rusty-orange)</p>
            <p>--accent: {`var(--accent)`} (rusty-orange)</p>
            <p>--primary: {`var(--primary)`} (blued-steel)</p>
          </div>
          <div>
            <p><strong>Dark Theme:</strong></p>
            <p>--contrast: {`var(--contrast)`} (sandy-ochre)</p>
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
    <div className="space-y-lg p-md">
      <h1 className="text-3xl font-rajdhani font-bold text-primary mb-md">
        Contrast Comparison: Before vs After
      </h1>
      
      {/* Light Theme Test */}
      <Card className="p-md">
        <h3 className="text-display-sm font-rajdhani font-bold mb-base">Light Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          
          {/* Old (Bad) - Brass Yellow on Light */}
          <div className="space-y-base">
            <h4 className="font-semibold text-canyon-clay">❌ OLD: Brass Yellow (Poor Contrast)</h4>
            <div className="p-base bg-range-white border rounded-sm">
              <h5 className="text-sandy-ochre font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-warning-amber">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Copper Orange on Light */}
          <div className="space-y-base">
            <h4 className="font-semibold text-sagebrush-green">✅ NEW: Copper Orange (Good Contrast)</h4>
            <div className="p-base bg-range-white border rounded-sm">
              <h5 className="text-contrast font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-warning-amber">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Dark Theme Test */}
      <Card className="p-md bg-night-sight text-titanium-white">
        <h3 className="text-display-sm font-rajdhani font-bold mb-base">Dark Theme Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          
          {/* Old (Bad) - Copper Orange on Dark */}
          <div className="space-y-base">
            <h4 className="font-semibold text-canyon-clay">❌ OLD: Copper Orange (Poor Contrast)</h4>
            <div className="p-base bg-carbon-fiber border border-warm-stone rounded-sm">
              <h5 className="text-rusty-orange font-bold">Hover Title (Hard to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>

          {/* New (Good) - Brass Yellow on Dark */}
          <div className="space-y-base">
            <h4 className="font-semibold text-sagebrush-green">✅ NEW: Brass Yellow (Good Contrast)</h4>
            <div className="p-base bg-carbon-fiber border border-warm-stone rounded-sm">
              <h5 className="text-sandy-ochre font-bold">Hover Title (Easy to Read)</h5>
              <p className="text-stainless-steel">Regular text that's readable</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
}
