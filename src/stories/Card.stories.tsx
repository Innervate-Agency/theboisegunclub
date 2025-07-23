import type { Meta, StoryObj } from '@storybook/nextjs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Star } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'TBGC/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**TBGC Card Component** - Sophisticated card system with Windows 11 Mica effects and brand-aware styling.

**Advanced Features:**
- Uses \`--card-shadow-default\` and \`--card-shadow-hover\` from actual implementation
- Windows 11 Mica backgrounds: \`--card-bg-light\` (#fffffff2) with noise patterns
- Brand-colored left borders using scope-blue, brass-yellow, copper-orange
- Internal glow effects: \`--internal-glow-light\` for subtle depth
- Proper micro-interactions with 150ms timing and Stripe easing

**Real Implementation:**
- \`--shadow-data-card\` for standard elevation  
- \`--shadow-data-card-hover\` for hover states
- \`--mica-border-premium\` and \`--mica-border-elite\` for advanced variants
- Noise textures from \`--noise-fine\` and \`--noise-dense\` SVG patterns
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'premium', 'elite', 'glass'],
      description: 'Card variant following TBGC design system'
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "w-80 p-6",
    children: (
      <div>
        <h3 className="font-noto-sans text-lg font-semibold text-blued-steel mb-2">
          Standard Card
        </h3>
        <p className="font-noto-sans text-sm text-case-hardened leading-relaxed">
          Clean card with shooting-bench background and subtle shadow elevation.
        </p>
      </div>
    )
  }
}

export const BusinessDirectory: Story = {
  render: () => (
    <Card className="w-96 bg-shooting-bench shadow-sm hover:shadow-md transition-stripe-fast p-6 border-l-4 border-l-scope-blue hover:-translate-y-0.5">
      <div className="flex flex-col h-full">
        {/* Business header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-noto-sans text-xl font-semibold text-blued-steel">
              Idaho Firearms Training
            </h3>
            <p className="font-noto-sans text-sm text-case-hardened">
              Professional Instruction • Boise, ID
            </p>
          </div>
          <div className="bg-rifling-green/20 text-rifling-green border border-rifling-green/30 px-2 py-1 rounded text-xs">
            Verified
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-brass-yellow text-brass-yellow" />
          ))}
          <span className="font-noto-sans text-sm text-case-hardened ml-2">4.9 (127 reviews)</span>
        </div>
        
        {/* Description */}
        <p className="font-noto-sans text-sm text-case-hardened leading-relaxed mb-4 flex-1">
          Comprehensive firearms training for all skill levels. NRA certified instructors, 
          concealed carry classes, and advanced tactical courses.
        </p>
        
        {/* Contact info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-case-hardened">
            <MapPin className="h-4 w-4 text-scope-blue" />
            <span>1234 Range Road, Boise, ID 83702</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-case-hardened">
            <Phone className="h-4 w-4 text-scope-blue" />
            <span>(208) 555-TRAIN</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="premium" size="sm" className="flex-1">
            Contact
          </Button>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Business directory card with left border accent, hover effects, and complete business information layout'
      }
    }
  }
}

export const ServiceCard: Story = {
  render: () => (
    <Card className="w-72 bg-shooting-bench shadow-sm hover:shadow-md transition-stripe-fast p-6 border-l-4 border-l-brass-yellow hover:-translate-y-0.5">
      <div className="flex flex-col items-start text-left h-full">
        {/* Icon */}
        <div className="mb-4 p-3 rounded-lg bg-range-white border border-case-hardened/10">
          <MapPin className="h-6 w-6 text-blued-steel" />
        </div>
        
        {/* Title */}
        <h3 className="font-noto-sans text-lg font-semibold text-blued-steel mb-3 leading-tight">
          Find Local Experts
        </h3>
        
        {/* Description */}
        <p className="font-noto-sans text-sm text-case-hardened leading-relaxed mb-6 flex-1">
          Discover top gun shops, ranges, gunsmiths, and instructors across the Treasure Valley region.
        </p>
        
        {/* Button */}
        <Button variant="premium" size="sm" className="text-xs font-medium">
          Get Started
        </Button>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Service card matching the 6-card grid layout from the current splash page'
      }
    }
  }
}