import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Target, Zap, Star, Plus, Download, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'premium', 'elite'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    effect: {
      control: 'select',
      options: ['none', 'lift', 'glow', 'pulse', 'shimmer'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Variants
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: 'Premium Membership',
    effect: 'lift',
  },
};

export const Elite: Story = {
  args: {
    variant: 'elite',
    children: 'Elite Champion',
    effect: 'shimmer',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Account',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Plus className="w-4 h-4" />,
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Book Range Time',
    icon: <Target className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'premium',
    children: 'Get Started',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};

// Loading States
export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Processing...',
    loading: true,
  },
};

export const LoadingPremium: Story = {
  args: {
    variant: 'premium',
    children: 'Processing Payment...',
    loading: true,
  },
};

// Effects
export const WithLift: Story = {
  args: {
    variant: 'premium',
    children: 'Hover to Lift',
    effect: 'lift',
    icon: <Target className="w-4 h-4" />,
  },
};

export const WithGlow: Story = {
  args: {
    variant: 'primary',
    children: 'Glowing Effect',
    effect: 'glow',
    icon: <Star className="w-4 h-4" />,
  },
};

export const WithPulse: Story = {
  args: {
    variant: 'premium',
    children: 'Register Now',
    effect: 'pulse',
    icon: <Zap className="w-4 h-4" />,
  },
};

export const WithShimmer: Story = {
  args: {
    variant: 'premium',
    children: 'Premium Action',
    effect: 'shimmer',
    icon: <Download className="w-4 h-4" />,
  },
};

// Disabled States
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    variant: 'premium',
    children: 'Disabled Premium',
    disabled: true,
    icon: <Target className="w-4 h-4" />,
  },
};

// Real-world Examples
export const CallToAction: Story = {
  args: {
    variant: 'premium',
    size: 'lg',
    children: 'Join Community',
    effect: 'lift',
    icon: <Target className="w-4 h-4" />,
  },
};

export const DownloadButton: Story = {
  args: {
    variant: 'primary',
    children: 'Download Rules',
    icon: <Download className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const NavigationButton: Story = {
  args: {
    variant: 'outline',
    children: 'View Schedule',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};

// REFINED SHOWCASE - Highlighting the sophisticated approach
export const RefinedShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-text-primary">Refined Button Design</h2>
        <p className="text-text-secondary">Professional sophistication with subtle enhancement - no overwhelming gradients</p>
      </div>
      
      {/* Before/After Comparison */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">✅ Refined Approach (Current)</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="premium">Premium with Subtle Hints</Button>
            <Button variant="elite">Elite with Mica Texture</Button>
          </div>
          <p className="text-sm text-text-secondary">
            Subtle gradient hints (3-5% opacity) + Windows 11 Mica noise textures + Stripe precision timing
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Professional Enhancement Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Stripe Precision</h4>
              <Button variant="primary" className="mb-2">Hover for 150ms timing</Button>
              <p className="text-xs text-text-secondary">Cubic-bezier(0.215, 0.61, 0.355, 1) transitions</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Windows 11 Mica</h4>
              <Button variant="premium" className="mb-2">Subtle material depth</Button>
              <p className="text-xs text-text-secondary">Opaque glass with brand-colored noise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Showcase of the refined button approach: professional restraint with cutting-edge effects that enhance rather than overwhelm the content.'
      }
    }
  }
};

// FUSION SHOWCASE - All variants side by side
export const FusionShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-text-primary">Button Fusion System</h2>
        <p className="text-text-secondary">Stripe precision + ClickUp vibrancy + Windows 11 Mica = Professional gun club excellence</p>
      </div>
      
      {/* Primary Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Core Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="premium">Premium</Button>
          <Button variant="elite">Elite</Button>
        </div>
      </div>
      
      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon={<Target className="w-4 h-4" />}>Default + Icon</Button>
          <Button variant="premium" icon={<Star className="w-4 h-4" />}>Premium + Icon</Button>
          <Button variant="elite" icon={<Zap className="w-4 h-4" />}>Elite + Icon</Button>
        </div>
      </div>
      
      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes (Elite with Mica)</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="elite" size="sm">Small Elite</Button>
          <Button variant="elite">Default Elite</Button>
          <Button variant="elite" size="lg">Large Elite</Button>
          <Button variant="elite" size="xl">XL Elite</Button>
        </div>
      </div>
      
      {/* Micro-interactions showcase */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enhanced Micro-Interactions</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Stripe Precision (150ms)</Button>
          <Button variant="premium">ClickUp Gradients + Mica</Button>
          <Button variant="elite">Windows 11 Material Depth</Button>
        </div>
        <p className="text-sm text-text-secondary">Hover to experience: Stripe cubic-bezier timing + ClickUp gradient hints + Windows 11 Mica noise textures</p>
      </div>
      
      {/* Real Gun Club Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gun Club Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="elite" icon={<Target className="w-4 h-4" />} size="lg">
            Join Championship
          </Button>
          <Button variant="premium" icon={<Star className="w-4 h-4" />}>
            Premium Range Access
          </Button>
          <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            View Schedule
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete showcase of the Button fusion system: Stripe precision micro-interactions + ClickUp gradient hints + Windows 11 Mica noise textures with professional restraint.'
      }
    }
  }
};