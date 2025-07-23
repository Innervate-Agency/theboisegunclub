import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'TBGC/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**TBGC Button Component** - Professional button system following the complete design system.

**Implementation Features:**
- Uses \`--shadow-premium\` and \`--shadow-elite\` from actual CSS
- Proper \`--timing-fast\` (150ms) transitions with \`--ease-stripe\` easing
- Brand-colored shadows with Leonard Yellow/Lahoma Orange bleeding
- Micro-interactions: \`scale-[1.02]\` on hover, \`scale-[0.98]\` on active
- Windows 11 Mica integration with \`--mica-premium-bg\` and noise patterns

**Regional Context:** Designed for Treasure Valley firearms community platform.
**Quality Standard:** Flagship-level execution suitable for Fortune 500 presentation.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'premium', 'elite', 'glass', 'destructive', 'outline', 'ghost'],
      description: 'Button variant following TBGC design system'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'Button size variants'
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard button with shooting-bench background and proper typography'
      }
    }
  }
}

export const Premium: Story = {
  args: {
    children: 'Join the Family',
    variant: 'premium',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Premium variant with brass-yellow background, premium shadows, and hover effects. Uses `--gradient-premium` and `--shadow-premium` from the actual implementation.'
      }
    }
  }
}

export const Elite: Story = {
  args: {
    children: 'List Your Business',
    variant: 'elite',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Elite variant with multi-stop gradient, shimmer animation, and elite shadows. Implements `--gradient-elite`, `--shadow-elite`, and `animate-pulse-premium`.'
      }
    }
  }
}

export const Glass: Story = {
  args: {
    children: 'Browse Directory',
    variant: 'glass'
  },
  parameters: {
    docs: {
      description: {
        story: 'Glass variant with Windows 11 Mica effects, backdrop blur, and subtle borders. Uses `--mica-glass-bg` and `--mica-blur-subtle`.'
      }
    }
  }
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button variant="premium" size="sm">Small Premium</Button>
      <Button variant="premium" size="default">Default Premium</Button>
      <Button variant="premium" size="lg">Large Premium</Button>
      <Button variant="premium" size="xl">XL Premium</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes with premium styling to show scale relationships'
      }
    }
  }
}

export const InteractionStates: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="premium">Normal</Button>
      <Button variant="premium" className="hover:bg-copper-orange hover:shadow-elite hover:scale-[1.02]">
        Hover (simulated)
      </Button>
      <Button variant="premium" disabled>
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button interaction states showing hover effects and disabled state'
      }
    }
  }
}