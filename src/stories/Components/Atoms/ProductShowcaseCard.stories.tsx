import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProductShowcaseCard } from '@/components/ui/product-showcase-card'
import { Target, Shield, Zap, Users } from 'lucide-react'

const meta: Meta<typeof ProductShowcaseCard> = {
  title: 'Design System/Atoms/ProductShowcaseCard',
  component: ProductShowcaseCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Animated product showcase cards with Stripe-style hover effects. Features gradient splash behind images, text slide-up animations, and expanding shadows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'success'],
    },
    size: {
      control: 'select', 
      options: ['default', 'wide', 'full'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Individual card examples
export const Default: Story = {
  args: {
    title: 'Range Management',
    description: 'Comprehensive range management tools for scheduling, member check-ins, and safety protocols.',
    variant: 'default',
    stats: [
      { label: 'Active Ranges', value: '12' },
      { label: 'Members', value: '500+' }
    ],
    imageSlot: (
      <div className="w-16 h-16 rounded-card bg-primary/10 flex items-center justify-center">
        <Target className="w-8 h-8 text-primary" />
      </div>
    )
  }
}

export const Premium: Story = {
  args: {
    title: 'Safety Training',
    description: 'Advanced safety training modules with certification tracking and compliance monitoring.',
    variant: 'premium',
    stats: [
      { label: 'Certifications', value: '1,200+' },
      { label: 'Pass Rate', value: '98%' }
    ],
    imageSlot: (
      <div className="w-16 h-16 rounded-card bg-rusty-orange/10 flex items-center justify-center">
        <Shield className="w-8 h-8 text-rusty-orange" />
      </div>
    )
  }
}

export const Elite: Story = {
  args: {
    title: 'Performance Analytics',
    description: 'Real-time performance tracking with detailed analytics and improvement recommendations.',
    variant: 'elite', 
    stats: [
      { label: 'Data Points', value: '50M+' },
      { label: 'Accuracy', value: '99.9%' }
    ],
    imageSlot: (
      <div className="w-16 h-16 rounded-card bg-slate-blue/10 flex items-center justify-center">
        <Zap className="w-8 h-8 text-slate-blue" />
      </div>
    )
  }
}

export const Success: Story = {
  args: {
    title: 'Community Hub',
    description: 'Connect with fellow enthusiasts, share experiences, and build lasting relationships.',
    variant: 'success',
    stats: [
      { label: 'Members', value: '2,500+' },
      { label: 'Events', value: '150+' }
    ],
    imageSlot: (
      <div className="w-16 h-16 rounded-card bg-rifling-green/10 flex items-center justify-center">
        <Users className="w-8 h-8 text-rifling-green" />
      </div>
    )
  }
}

// Grid showcase - like Stripe's layout
export const GridShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg p-lg bg-gradient-to-br from-background via-muted/20 to-background">
      <ProductShowcaseCard
        title="Range Management"
        description="Comprehensive range management tools for scheduling, member check-ins, and safety protocols."
        variant="default"
        stats={[
          { label: 'Active Ranges', value: '12' },
          { label: 'Members', value: '500+' }
        ]}
        imageSlot={
          <div className="w-16 h-16 rounded-card bg-primary/10 flex items-center justify-center">
            <Target className="w-8 h-8 text-primary" />
          </div>
        }
      />
      
      <ProductShowcaseCard
        title="Safety Training"
        description="Advanced safety training modules with certification tracking and compliance monitoring."
        variant="premium"
        stats={[
          { label: 'Certifications', value: '1,200+' },
          { label: 'Pass Rate', value: '98%' }
        ]}
        imageSlot={
          <div className="w-16 h-16 rounded-card bg-rusty-orange/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-rusty-orange" />
          </div>
        }
      />
      
      <ProductShowcaseCard
        title="Performance Analytics"
        description="Real-time performance tracking with detailed analytics and improvement recommendations."
        variant="elite"
        stats={[
          { label: 'Data Points', value: '50M+' },
          { label: 'Accuracy', value: '99.9%' }
        ]}
        imageSlot={
          <div className="w-16 h-16 rounded-card bg-slate-blue/10 flex items-center justify-center">
            <Zap className="w-8 h-8 text-slate-blue" />
          </div>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A grid layout showcasing multiple product cards with different variants and hover animations.',
      },
    },
  },
}

// Animation Demo - shows the key interactions
export const AnimationDemo: Story = {
  render: () => (
    <div className="space-y-lg p-lg">
      <div className="text-center space-y-xs">
        <h2 className="text-display-md font-rajdhani font-bold">Hover Animation Effects</h2>
        <p className="text-muted-foreground">Hover over each card to see the Stripe-style animations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
        <ProductShowcaseCard
          title="Validate your idea"
          description="Test your product idea by launching payments with little to no code."
          variant="elite"
          ctaText="Try Payment Links"
          imageSlot={
            <div className="w-16 h-16 rounded-card bg-gradient-to-br from-slate-blue/20 to-ayu-purple/20 flex items-center justify-center border border-slate-blue/30">
              <div className="w-8 h-8 rounded bg-slate-blue/30" />
            </div>
          }
        />
        
        <ProductShowcaseCard
          title="Incorporate your company"
          description="Form a legal entity, issue stock, and start accepting payments."
          variant="premium"
          ctaText="Learn about Atlas"
          imageSlot={
            <div className="w-16 h-16 rounded-card bg-gradient-to-br from-rusty-orange/20 to-sandy-ochre/20 flex items-center justify-center border border-rusty-orange/30">
              <div className="w-8 h-8 rounded bg-rusty-orange/30" />
            </div>
          }
        />
      </div>
      
      <div className="text-center text-body-sm text-muted-foreground">
        <p><strong>Animation Features:</strong></p>
        <p>• Shadow expands from sm to lg on hover</p>
        <p>• Gradient splash appears behind image area</p>
        <p>• Text content slides up 12px</p>
        <p>• "Learn more" button slides in from below</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the key hover animations inspired by Stripe\'s product showcase cards.',
      },
    },
  },
}