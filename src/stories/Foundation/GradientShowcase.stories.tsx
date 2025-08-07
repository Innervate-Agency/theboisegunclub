import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const meta: Meta = {
  title: 'Foundation/Gradient Showcase',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive showcase of site-wide gradient system for TBGC platform. Used for backgrounds, buttons, accents, and premium features.'
      }
    }
  },
}

export default meta
type Story = StoryObj

const gradients = [
  {
    name: 'Fire Gradient',
    description: 'Primary brand gradient for CTAs and premium features',
    classes: 'from-copper-orange to-brass-yellow',
    usage: 'Buttons, hover effects, fire animations, premium accents'
  },
  {
    name: 'Ocean to Forest',
    description: 'Blue to green transition for nature/outdoor themes',
    classes: 'from-ayu-blue to-ayu-green',
    usage: 'Backgrounds, event categories, outdoor sections'
  },
  {
    name: 'Sunset Blaze',
    description: 'Orange to purple for dramatic sections',
    classes: 'from-copper-orange to-ayu-purple',
    usage: 'Hero sections, featured content, dramatic backgrounds'
  },
  {
    name: 'Crimson Night',
    description: 'Red to purple for alerts and dramatic effects',
    classes: 'from-safety-red to-ayu-purple',
    usage: 'Alerts, danger states, dramatic content'
  },
  {
    name: 'Aqua Flow',
    description: 'Teal to green for fresh, natural sections',
    classes: 'from-ayu-teal to-rifling-green',
    usage: 'Success states, nature sections, fresh content'
  },
  {
    name: 'Deep Current',
    description: 'Teal to cobalt for sophisticated depth',
    classes: 'from-ayu-teal to-ayu-cobalt',
    usage: 'Navigation, premium sections, professional backgrounds'
  }
]

export const Default: Story = {
  render: () => (
    <div className="max-w-6xl mx-auto p-xl space-y-xl">
      <div className="text-center space-y-base">
        <Badge className="bg-copper-orange/20 text-copper-orange border-copper-orange/30">
          Design System
        </Badge>
        <h1 className="font-rajdhani text-4xl font-bold text-card-foreground">
          TBGC Gradient System
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Site-wide gradient collection for backgrounds, buttons, and premium features. 
          Each gradient is carefully crafted to match the Idaho firearms heritage aesthetic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        {gradients.map((gradient, index) => (
          <Card key={index} className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-r ${gradient.classes} relative`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-base left-base">
                <div className="font-rajdhani font-bold text-white text-lg">
                  {gradient.name}
                </div>
              </div>
            </div>
            <CardHeader className="pb-xs">
              <CardTitle className="text-lg">{gradient.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{gradient.description}</p>
            </CardHeader>
            <CardContent className="space-y-base">
              <div>
                <div className="text-xs font-medium text-muted-foreground mb-xs">CSS Classes</div>
                <code className="text-xs bg-muted p-xs rounded font-mono">
                  bg-gradient-to-r {gradient.classes}
                </code>
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground mb-xs">Usage</div>
                <div className="text-sm text-card-foreground">{gradient.usage}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Demo Section */}
      <div className="space-y-xl">
        <h2 className="font-rajdhani text-2xl font-bold text-card-foreground text-center">
          Interactive Demonstrations
        </h2>
        
        <div className="space-y-base">
          <h3 className="font-rajdhani text-xl font-bold text-card-foreground">Button Applications</h3>
          <div className="flex flex-wrap gap-base">
            {gradients.map((gradient, index) => (
              <button
                key={index}
                className={`px-lg py-base rounded-md font-rajdhani font-bold text-gunmetal-black bg-gradient-to-r ${gradient.classes} hover:scale-105 transition-transform`}
              >
                {gradient.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-base">
          <h3 className="font-rajdhani text-xl font-bold text-card-foreground">Background Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            {gradients.map((gradient, index) => (
              <div
                key={index}
                className={`h-24 rounded-md bg-gradient-to-br ${gradient.classes} flex items-center justify-center`}
              >
                <div className="font-rajdhani font-bold text-white text-center px-base">
                  <div>{gradient.name}</div>
                  <div className="text-xs opacity-80">Background</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-base">
          <h3 className="font-rajdhani text-xl font-bold text-card-foreground">Accent Bar Applications</h3>
          <div className="space-y-base">
            {gradients.map((gradient, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-lg">
                  <h4 className="font-rajdhani font-bold text-lg mb-xs">{gradient.name}</h4>
                  <p className="text-sm text-muted-foreground">{gradient.description}</p>
                </CardContent>
                <div className={`h-1 bg-gradient-to-r ${gradient.classes}`}></div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <Card className="p-lg bg-muted/30">
        <CardHeader>
          <CardTitle className="font-rajdhani text-xl">Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-base">
          <div>
            <h4 className="font-medium mb-xs">Fire Gradient (Primary)</h4>
            <p className="text-sm text-muted-foreground">
              Use for primary CTAs, premium features, and the main fire animation accent bars. 
              This is the signature TBGC gradient representing the copper and brass materials of firearms.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-xs">Blue/Green Gradients</h4>
            <p className="text-sm text-muted-foreground">
              Perfect for outdoor themes, events sections, and natural content. 
              Ocean to Forest works well for calm backgrounds.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-xs">Dramatic Gradients</h4>
            <p className="text-sm text-muted-foreground">
              Sunset Blaze and Crimson Night are for high-impact sections like hero areas, 
              featured content, and alert states.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-xs">Professional Gradients</h4>
            <p className="text-sm text-muted-foreground">
              Deep Current (teal to cobalt) provides sophisticated depth for navigation, 
              premium sections, and professional content areas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}