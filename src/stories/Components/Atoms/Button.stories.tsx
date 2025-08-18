import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import { Plus, Download, ArrowRight, Settings, Check, X, Search, User, Target, Shield, Zap, Users, MessageSquare } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'interactive', 'atom'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'destructive', 'glass', 'solid-accent', 'solid-success', 'solid-destructive', 'solid-primary', 'ghost', 'link', 'fire', 'fire-blue', 'fire-purple', 'fire-green'],
    },
          options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon'],
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg', 'full'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ================== BASIC VARIANTS ==================

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

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Account',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Glassmorphism',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, var(--color-slate-blue) 0%, var(--color-foothills-purple) 100%)',
        },
      ],
    },
  },
};

export const SolidAccent: Story = {
  args: {
    variant: 'solid-accent',
    children: 'Get Started',
  },
};

export const SolidSuccess: Story = {
  args: {
    variant: 'solid-success',
    children: 'Complete Order',
  },
};

export const SolidDestructive: Story = {
  args: {
    variant: 'solid-destructive',
    children: 'Delete Forever',
  },
};

export const SolidPrimary: Story = {
  args: {
    variant: 'solid-primary',
    children: 'Learn More',
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

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Flat Button',
  },
};

// ================== STRIPE-STYLE HIERARCHY ==================

export const StripeHierarchy: Story = {
  render: () => (
    <div className="space-y-xl p-12 max-w-6xl bg-range-white min-h-screen">
      {/* Header */}
      <div className="text-center space-y-base">
        <h1 className="text-3xl font-rajdhani font-bold text-dark-chocolate">
          Stripe-Style Button Hierarchy
        </h1>
        <p className="text-warning-amber max-w-2xl mx-auto">
          Proper button usage patterns following Stripe's design principles: heavy shadows for page buttons, flat styles for container buttons.
        </p>
      </div>

      {/* Page-Level Buttons (Outside Containers) */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-blued-steel">
          🌟 Page-Level Buttons (Outside Containers)
        </h2>
        <p className="text-body-sm text-warning-amber">Heavy shadows, no borders - these grab attention on the page</p>
        <div className="flex gap-base flex-wrap">
          <Button variant="primary" size="lg">
            <Plus className="mr-xs h-4 w-4" />
            Create Account
          </Button>
          <Button variant="default">
            Browse Training
          </Button>
          <Button variant="secondary">
            <Download className="mr-xs h-4 w-4" />
            Download Guide
          </Button>
        </div>
      </div>

      {/* Card-Level Buttons (Inside Cards) */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-blued-steel">
          📋 Card-Level Buttons (Inside Cards/Forms)
        </h2>
        <p className="text-body-sm text-warning-amber">Flat style, no shadows - clean and doesn't compete with card shadows</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {/* Training Card */}
          <div className="bg-card p-md rounded-sm shadow-elevated border border-border">
            <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-xs">
              Safety Training Course
            </h3>
            <p className="text-muted-foreground mb-base text-body-sm">
              Comprehensive firearms safety course for all skill levels. Learn fundamentals and best practices.
            </p>
            <div className="flex gap-sm">
              <Button variant="flat" size="sm">
                Enroll Now
              </Button>
              <Button variant="ghost" size="sm">
                Learn More
              </Button>
            </div>
          </div>

          {/* Membership Card */}
          <div className="bg-card p-md rounded-sm shadow-elevated border border-border">
            <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-xs">
              Premium Membership
            </h3>
            <p className="text-muted-foreground mb-base text-body-sm">
              Access to all facilities, training programs, and exclusive member events.
            </p>
            <div className="flex gap-sm">
              <Button variant="flat" size="sm">
                <Check className="mr-xs h-4 w-4" />
                Join Today
              </Button>
              <Button variant="link" size="sm">
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-blued-steel">
          📝 Form Buttons (Inside Forms)
        </h2>
        <p className="text-body-sm text-warning-amber">Flat style for form actions - consistent with card patterns</p>
        
        <div className="bg-card p-md rounded-sm shadow-elevated border border-border max-w-md">
          <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-base">
            Contact Information
          </h3>
          <div className="space-y-base">
            <div>
              <label className="block text-body-sm font-medium text-card-foreground mb-xs">
                Full Name
              </label>
              <input 
                type="text" 
                className="w-full px-sm py-xs border border-border rounded-input bg-background text-foreground"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-body-sm font-medium text-card-foreground mb-xs">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full px-sm py-xs border border-border rounded-input bg-background text-foreground"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-sm pt-xs">
              <Button variant="flat" size="sm" className="flex-1">
                Submit
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Accent Buttons */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-blued-steel">
          ⚡ Special Accent Buttons (Borders for Emphasis)
        </h2>
        <p className="text-body-sm text-warning-amber">Borders only for special occasions - warnings, confirmations, key actions</p>
        <div className="flex gap-base flex-wrap">
          <Button variant="accent">
            <ArrowRight className="mr-xs h-4 w-4" />
            Get Started
          </Button>
          <Button variant="success">
            <Check className="mr-xs h-4 w-4" />
            Approve Application
          </Button>
          <Button variant="destructive">
            <X className="mr-xs h-4 w-4" />
            Reject Application
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const FireGradientSystem: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-lg p-md">
      <div className="text-center space-y-base">
        <h1 className="text-3xl font-rajdhani font-bold text-foreground">
          🔥 Fire Gradient System
        </h1>
        <p className="text-muted-foreground">
          Color-coordinated fire gradients that unfurl from left on hover
        </p>
      </div>

      {/* Fire Gradient Buttons */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-rusty-orange">
          Fire Button Variants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base">
          <Button variant="fire" size="lg">
            <Target className="mr-xs h-4 w-4" />
            Fire Orange
          </Button>
          <Button variant="fire-blue" size="lg">
            <Shield className="mr-xs h-4 w-4" />
            Fire Blue
          </Button>
          <Button variant="fire-purple" size="lg">
            <Zap className="mr-xs h-4 w-4" />
            Fire Purple  
          </Button>
          <Button variant="fire-green" size="lg">
            <Check className="mr-xs h-4 w-4" />
            Fire Green
          </Button>
        </div>
      </div>

      {/* Demo Cards */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-slate-blue">
          Interactive Fire Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="bg-card p-md rounded-sm shadow-elevated hover:shadow-elevated transition-shadow group">
            <h3 className="font-rajdhani font-bold text-body-lg text-rusty-orange mb-xs">
              Vendor Partners
            </h3>
            <p className="text-muted-foreground mb-base text-body-sm">
              Gun shops, ranges, instructors across the Treasure Valley
            </p>
            <Button variant="fire" size="sm" className="w-full">
              <Users className="mr-xs h-4 w-4" />
              Browse Directory
            </Button>
            <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre mt-base rounded-full transition-all duration-300 ease-out"></div>
          </div>

          <div className="bg-card p-md rounded-sm shadow-elevated hover:shadow-elevated transition-shadow group">
            <h3 className="font-rajdhani font-bold text-body-lg text-slate-blue mb-xs">
              Community Hub
            </h3>
            <p className="text-muted-foreground mb-base text-body-sm">
              Connect with fellow enthusiasts and competitors
            </p>
            <Button variant="fire-blue" size="sm" className="w-full">
              <MessageSquare className="mr-xs h-4 w-4" />
              Join Discussions
            </Button>
            <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-slate-blue to-ayu-green mt-base rounded-full transition-all duration-300 ease-out"></div>
          </div>
        </div>
      </div>

      {/* Gradient Color Mapping */}
      <div className="space-y-md">
        <h2 className="text-display-sm font-rajdhani font-semibold text-ayu-purple">
          Color Coordination Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="bg-muted p-base rounded-sm">
            <h4 className="font-medium text-foreground mb-sm">🔥 Fire (Orange/Yellow)</h4>
            <div className="h-3 bg-gradient-to-r from-rusty-orange to-sandy-ochre rounded-full mb-xs"></div>
            <p className="text-caption text-muted-foreground">Primary accent • Call-to-action • Success states</p>
          </div>
          
          <div className="bg-muted p-base rounded-sm">
            <h4 className="font-medium text-foreground mb-sm">💧 Fire Blue (Blue/Green)</h4>
            <div className="h-3 bg-gradient-to-r from-slate-blue to-ayu-green rounded-full mb-xs"></div>
            <p className="text-caption text-muted-foreground">Navigation • Community features • Information</p>
          </div>
          
          <div className="bg-muted p-base rounded-sm">
            <h4 className="font-medium text-foreground mb-sm">⚡ Fire Purple (Purple/Cobalt)</h4>
            <div className="h-3 bg-gradient-to-r from-ayu-purple to-slate-blue rounded-full mb-xs"></div>
            <p className="text-caption text-muted-foreground">Premium features • Special actions • Highlights</p>
          </div>
          
          <div className="bg-muted p-base rounded-sm">
            <h4 className="font-medium text-foreground mb-sm">🌿 Fire Green (Green variants)</h4>
            <div className="h-3 bg-gradient-to-r from-ayu-green to-sagebrush-green rounded-full mb-xs"></div>
            <p className="text-caption text-muted-foreground">Success • Verification • Positive states</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Fire Gradient System

The TBGC fire gradient system provides color-coordinated animation effects that "unfurl" from left to right on hover. Each gradient combination serves specific UI purposes:

### Animation Details
- **Width**: Starts at \`w-0\` and animates to \`w-full\` on hover
- **Duration**: 300ms with ease-out timing
- **Origin**: Left-aligned using \`origin-left\`
- **Height**: 1px default, grows to 2px on hover for buttons

### Color Combinations
- **Fire**: Orange to Yellow - Primary actions and success states
- **Fire Blue**: Blue to Green - Navigation and community features  
- **Fire Purple**: Purple to Cobalt - Premium features and highlights
- **Fire Green**: Green variants - Verification and positive feedback

### Usage Guidelines
Apply gradients that match the semantic meaning of your component's primary color or context.
        `,
      },
    },
  },
};

// ================== PROFESSIONAL SHOWCASE ==================

export const CleanShowcase: Story = {
  render: () => (
    <div className="space-y-xl p-12 max-w-6xl bg-range-white min-h-screen">
      {/* Header */}
      <div className="text-center space-y-base">
        <h1 className="text-4xl font-rajdhani font-bold text-dark-chocolate tracking-tight">
          TBGC Clean Button System
        </h1>
        <p className="text-body-lg text-warning-amber max-w-3xl mx-auto">
          Sophisticated buttons using our Idaho Firearms Heritage Palette - combining clean design with our distinctive brand colors
        </p>
      </div>
      
      {/* Primary Actions */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-blued-steel text-center">Primary Actions</h2>
        <div className="flex items-center justify-center gap-base flex-wrap">
          <Button variant="primary" size="lg">
            <Plus className="mr-xs h-5 w-5" />
            Create Project
          </Button>
          <Button variant="accent" size="lg">
            Get Started
            <ArrowRight className="ml-xs h-5 w-5" />
          </Button>
          <Button variant="success" size="lg">
            <Check className="mr-xs h-5 w-5" />
            Confirm
          </Button>
        </div>
      </div>
      
      {/* Size Variants */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-blued-steel text-center">Size Variants</h2>
        <div className="flex items-center justify-center gap-base flex-wrap">
          <Button variant="default" size="xs">Extra Small</Button>
          <Button variant="default" size="sm">Small</Button>
          <Button variant="default" size="default">Default</Button>
          <Button variant="default" size="lg">Large</Button>
          <Button variant="default" size="xl">Extra Large</Button>
          <Button variant="default" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Interactive States */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-blued-steel text-center">Interactive States</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="space-y-base">
            <h3 className="text-body-lg font-noto-sans font-medium text-warning-amber">Normal States</h3>
            <div className="space-y-sm">
              <Button variant="default" className="w-full">Default</Button>
              <Button variant="primary" className="w-full">Primary</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
            </div>
          </div>
          
          <div className="space-y-base">
            <h3 className="text-body-lg font-noto-sans font-medium text-warning-amber">Loading States</h3>
            <div className="space-y-sm">
              <Button variant="default" className="w-full" loading>Loading...</Button>
              <Button variant="primary" className="w-full" loading>Processing...</Button>
              <Button variant="accent" className="w-full" loading>Saving...</Button>
            </div>
          </div>
          
          <div className="space-y-base">
            <h3 className="text-body-lg font-noto-sans font-medium text-warning-amber">Disabled States</h3>
            <div className="space-y-sm">
              <Button variant="default" className="w-full" disabled>Disabled</Button>
              <Button variant="primary" className="w-full" disabled>Disabled</Button>
              <Button variant="destructive" className="w-full" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Real-world Examples */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-blued-steel text-center">Real-world Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Form Actions */}
          <div className="bg-card-surface p-md rounded-xs shadow-flat border border-warning-amber/20">
            <h3 className="text-body-lg font-noto-sans font-medium text-blued-steel mb-base">Form Actions</h3>
            <div className="space-y-base">
              <div className="flex gap-sm">
                <Button variant="primary" className="flex-1">
                  Save Changes
                </Button>
                <Button variant="ghost">
                  Cancel
                </Button>
              </div>
              <div className="flex gap-sm">
                <Button variant="destructive" size="sm">
                  <X className="mr-xs h-4 w-4" />
                  Delete
                </Button>
                <Button variant="secondary" size="sm">
                  <Download className="mr-xs h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="bg-card-surface p-md rounded-xs shadow-flat border border-warning-amber/20">
            <h3 className="text-body-lg font-noto-sans font-medium text-blued-steel mb-base">Navigation</h3>
            <div className="space-y-base">
              <div className="flex gap-sm">
                <Button variant="ghost">
                  <User className="mr-xs h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost">
                  <Settings className="mr-xs h-4 w-4" />
                  Settings
                </Button>
              </div>
              <Button variant="link" className="p-0">
                View all projects →
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rounded Variants */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-blued-steel text-center">Border Radius Options</h2>
        <div className="flex items-center justify-center gap-base flex-wrap">
          <Button variant="accent" rounded="none">None</Button>
          <Button variant="accent" rounded="sm">Small</Button>
          <Button variant="accent" rounded="default">Default</Button>
          <Button variant="accent" rounded="lg">Large</Button>
          <Button variant="accent" rounded="full">Full</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// ================== DESIGN SYSTEM GLORY ==================

export const StripeStyleAnimations: Story = {
  render: () => (
    <div className="space-y-xl p-12 max-w-4xl bg-range-white">
      <div className="text-center space-y-base">
        <h1 className="text-3xl font-rajdhani font-bold text-dark-chocolate">
          Stripe-Style Arrow Animations
        </h1>
        <p className="text-warning-amber">
          Watch the sophisticated arrow animations on our solid variant buttons
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="space-y-md">
          <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Interactive Arrows</h3>
          <div className="space-y-base">
            <Button variant="solid-accent" size="lg" className="w-full">
              Get Premium Membership
            </Button>
            <Button variant="solid-success" size="lg" className="w-full">
              Complete Training Course
            </Button>
            <Button variant="solid-destructive" size="lg" className="w-full">
              Cancel Membership
            </Button>
            <Button variant="solid-primary" size="lg" className="w-full">
              Learn Safety Protocols
            </Button>
          </div>
        </div>

        <div className="space-y-md">
          <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Timing Variations</h3>
          <div className="space-y-base">
            <Button variant="solid-accent" className="w-full transition-all transition-stripe-fast">
              Fast (150ms) - Quick Actions
            </Button>
            <Button variant="solid-success" className="w-full transition-all transition-stripe-normal">
              Normal (250ms) - Standard
            </Button>
            <Button variant="solid-primary" className="w-full transition-all transition-stripe-slow">
              Slow (350ms) - Premium Feel
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const GlassmorphismShowcase: Story = {
  render: () => (
    <div className="relative min-h-[600px] p-12 overflow-hidden">
      {/* Dynamic Background with Idaho scenery colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre via-rusty-orange to-dark-chocolate"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-muzzle-flash/20 via-transparent to-scope-blue/30"></div>
      
      {/* Floating elements for depth */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-nickel-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-sandy-ochre/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 space-y-xl">
        <div className="text-center space-y-base">
          <h1 className="text-4xl font-rajdhani font-bold text-nickel-white drop-shadow-elevated">
            Windows 11 Mica Glassmorphism
          </h1>
          <p className="text-nickel-white/90 text-body-lg max-w-2xl mx-auto">
            Our glassmorphism buttons with noise texture and sophisticated backdrop blur effects
          </p>
        </div>

        <div className="flex flex-col items-center space-y-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Button variant="glass" size="lg" className="backdrop-blur-xl">
              Premium Glass Effect
            </Button>
            <Button variant="glass" size="lg" rounded="full" className="backdrop-blur-xl">
              Rounded Glassmorphism
            </Button>
            <Button variant="glass" size="xl" className="backdrop-blur-xl px-xl">
              Extra Large Glass
            </Button>
          </div>

          <div className="bg-card/10 backdrop-blur-md border border-white/20 rounded-overlay p-lg space-y-base mica-glass">
            <h3 className="text-display-sm font-rajdhani font-semibold text-nickel-white">
              Glass Card Example
            </h3>
            <p className="text-nickel-white/80">
              Notice the subtle noise texture and multi-layered glass effect
            </p>
            <div className="flex gap-base">
              <Button variant="glass">Learn More</Button>
              <Button variant="glass" size="sm">Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const HeritageColorCombinations: Story = {
  render: () => (
    <div className="space-y-xl p-12 max-w-6xl bg-range-white">
      <div className="text-center space-y-base">
        <h1 className="text-4xl font-rajdhani font-bold text-dark-chocolate">
          Sophisticated Color Harmonies
        </h1>
        <p className="text-warning-amber text-body-lg max-w-3xl mx-auto">
          Professionally curated color combinations with proper contrast ratios and visual hierarchy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
        {/* Clean Professional Combinations */}
        <div className="bg-card-surface p-lg rounded-overlay shadow-flat border border-warning-amber/20">
          <h2 className="text-display-md font-rajdhani font-semibold text-dark-chocolate mb-md">
            Clean & Professional
          </h2>
          <div className="space-y-md">
            <div className="space-y-sm">
              <h4 className="font-noto-sans font-medium text-blued-steel">Primary Actions</h4>
              <div className="flex gap-sm flex-wrap">
                <Button className="bg-sandy-ochre text-dark-chocolate hover:bg-sandy-ochre/90 shadow-flat">
                  Premium Gold
                </Button>
                <Button className="bg-dark-chocolate text-range-white hover:bg-dark-chocolate/90 shadow-flat">
                  Professional Dark
                </Button>
              </div>
            </div>

            <div className="space-y-sm">
              <h4 className="font-noto-sans font-medium text-blued-steel">Subtle Accents</h4>
              <div className="flex gap-sm flex-wrap">
                <Button className="bg-range-white text-dark-chocolate border-2 border-sandy-ochre/30 hover:border-sandy-ochre/60 hover:bg-sandy-ochre/5">
                  Gold Accent
                </Button>
                <Button className="bg-range-white text-blued-steel border-2 border-blued-steel/30 hover:border-blued-steel/60 hover:bg-blued-steel/5">
                  Steel Accent
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Warm Heritage Tones */}
        <div className="bg-range-white p-lg rounded-overlay shadow-flat border border-warning-amber/20">
          <h2 className="text-display-md font-rajdhani font-semibold text-dark-chocolate mb-md">
            Heritage Warmth
          </h2>
          <div className="space-y-md">
            <div className="space-y-sm">
              <h4 className="font-noto-sans font-medium text-blued-steel">Warm Metals</h4>
              <div className="flex gap-sm flex-wrap">
                <Button className="bg-rusty-orange text-range-white hover:bg-rusty-orange/90 shadow-flat">
                  Copper Elegance
                </Button>
                <Button className="bg-walnut-stock text-range-white hover:bg-walnut-stock/90 shadow-flat">
                  Walnut Rich
                </Button>
              </div>
            </div>

            <div className="space-y-sm">
              <h4 className="font-noto-sans font-medium text-blued-steel">Heritage Highlights</h4>
              <div className="flex gap-sm flex-wrap">
                <Button className="bg-sight-gold text-dark-chocolate hover:bg-sight-gold/90 shadow-flat">
                  Traditional Gold
                </Button>
                <Button className="bg-muzzle-flash text-dark-chocolate hover:bg-muzzle-flash/90 shadow-flat">
                  Bright Accent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monochromatic Excellence */}
      <div className="bg-card-surface p-lg rounded-overlay border border-warning-amber/20">
        <h2 className="text-display-md font-rajdhani font-semibold text-dark-chocolate text-center mb-lg">
          Monochromatic Sophistication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-base">
          <Button className="bg-dark-chocolate text-range-white hover:bg-dark-chocolate/90">
            Gunmetal
          </Button>
          <Button className="bg-blued-steel text-range-white hover:bg-blued-steel/90">
            Blued Steel
          </Button>
          <Button className="bg-warning-amber text-range-white hover:bg-warning-amber/90">
            Case Hardened
          </Button>
          <Button className="bg-warm-stone text-range-white hover:bg-warm-stone/90">
            Tactical Gray
          </Button>
        </div>
      </div>

      {/* Professional Gradients */}
      <div className="space-y-lg">
        <h2 className="text-display-md font-rajdhani font-semibold text-dark-chocolate text-center">
          Sophisticated Gradients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-sandy-ochre to-sight-gold text-dark-chocolate hover:shadow-elevated transition-all"
          >
            Gold Harmony
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-rusty-orange to-walnut-stock text-range-white hover:shadow-elevated transition-all"
          >
            Warm Heritage
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-dark-chocolate to-blued-steel text-range-white hover:shadow-elevated transition-all"
          >
            Steel Elegance
          </Button>
        </div>
      </div>

      {/* State Colors Done Right */}
      <div className="bg-card-surface p-lg rounded-overlay border border-warning-amber/20">
        <h2 className="text-display-md font-rajdhani font-semibold text-dark-chocolate text-center mb-lg">
          Semantic Colors with Proper Contrast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="space-y-sm">
            <h4 className="font-noto-sans font-medium text-blued-steel">Success States</h4>
            <Button className="bg-rifling-green text-range-white hover:bg-rifling-green/90 w-full">
              Success Action
            </Button>
            <Button className="bg-range-white text-rifling-green border-2 border-rifling-green hover:bg-rifling-green/5 w-full">
              Success Outline
            </Button>
          </div>
          
          <div className="space-y-sm">
            <h4 className="font-noto-sans font-medium text-blued-steel">Information</h4>
            <Button className="bg-scope-blue text-range-white hover:bg-scope-blue/90 w-full">
              Info Action
            </Button>
            <Button className="bg-range-white text-scope-blue border-2 border-scope-blue hover:bg-scope-blue/5 w-full">
              Info Outline
            </Button>
          </div>
          
          <div className="space-y-sm">
            <h4 className="font-noto-sans font-medium text-blued-steel">Warning</h4>
            <Button className="bg-safety-red text-range-white hover:bg-safety-red/90 w-full">
              Warning Action
            </Button>
            <Button className="bg-range-white text-safety-red border-2 border-safety-red hover:bg-safety-red/5 w-full">
              Warning Outline
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const SophisticatedShadows: Story = {
  render: () => (
    <div className="space-y-xl p-12 max-w-5xl bg-range-white">
      <div className="text-center space-y-base">
        <h1 className="text-3xl font-rajdhani font-bold text-dark-chocolate">
          Stripe-Inspired Sophisticated Shadows
        </h1>
        <p className="text-warning-amber text-body-lg">
          Multi-layered shadow system with brand-colored variations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="space-y-md">
          <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Standard Shadow System</h3>
          <div className="space-y-md">
            <Button className="shadow-xs bg-card text-card-foreground border border-recoil-pad w-full">
              Extra Small Shadow
            </Button>
            <Button className="shadow-flat bg-card text-card-foreground border border-recoil-pad w-full">
              Small Shadow
            </Button>
            <Button className="shadow-elevated bg-card text-card-foreground border border-recoil-pad w-full">
              Medium Shadow
            </Button>
            <Button className="shadow-elevated bg-card text-card-foreground border border-recoil-pad w-full">
              Large Shadow
            </Button>
            <Button className="shadow-premium bg-card text-card-foreground border border-recoil-pad w-full">
              Extra Large Shadow
            </Button>
          </div>
        </div>

        <div className="space-y-md">
          <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Brand-Colored Shadows</h3>
          <div className="space-y-md">
            <Button className="shadow-brass bg-sandy-ochre text-dark-chocolate w-full hover:shadow-elevated transition-shadow">
              Brass Shadow Effect
            </Button>
            <Button className="shadow-copper bg-rusty-orange text-nickel-white w-full hover:shadow-premium transition-shadow">
              Copper Shadow Effect
            </Button>
            <Button className="bg-rifling-green text-nickel-white w-full hover:shadow-elevated hover:shadow-rifling-green/25 transition-shadow">
              Success Green Shadow
            </Button>
            <Button className="bg-scope-blue text-nickel-white w-full hover:shadow-elevated hover:shadow-scope-blue/25 transition-shadow">
              Information Blue Shadow
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-card-surface p-lg rounded-overlay border border-warning-amber/20">
        <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel mb-md text-center">
          Interactive Shadow Transitions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <Button className="bg-card text-card-foreground border border-recoil-pad shadow-flat hover:shadow-brass  transition-all duration-300">
            Hover for Brass Shadow
          </Button>
          <Button className="bg-card text-card-foreground border border-recoil-pad shadow-flat hover:shadow-copper  transition-all duration-300">
            Hover for Copper Shadow
          </Button>
          <Button className="bg-card text-card-foreground border border-recoil-pad shadow-flat hover:shadow-premium hover:-translate-y-2 transition-all duration-500">
            Elegant Lift Effect
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

// ================== BUSINESS CONTEXT EXAMPLES ==================

export const BusinessCard: Story = {
  render: () => (
    <div className="bg-range-white p-lg rounded-xs shadow-flat border border-warning-amber/20 max-w-md space-y-md">
      <div className="space-y-xs">
        <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">
          Upgrade Your Membership
        </h3>
        <p className="text-warning-amber">
          Get access to premium range time and exclusive events
        </p>
      </div>
      
      <div className="space-y-sm">
        <Button variant="accent" size="lg" className="w-full">
          Upgrade to Premium
          <ArrowRight className="ml-xs h-5 w-5" />
        </Button>
        
        <Button variant="ghost" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const SearchInterface: Story = {
  render: () => (
    <div className="bg-range-white p-md rounded-xs border border-warning-amber/20 max-w-lg space-y-base">
      <div className="flex gap-xs">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
          <input
            type="text"
            placeholder="Search members..."
            className="w-full pr-base py-xs border border-warning-amber/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sandy-ochre/50 focus:border-sandy-ochre bg-card-surface text-blued-steel placeholder-warning-amber"
            style={{paddingLeft: '48px'}}
          />
        </div>
        <Button variant="accent">
          Search
        </Button>
      </div>
      
      <div className="flex gap-xs">
        <Button variant="secondary" size="sm">Recent</Button>
        <Button variant="ghost" size="sm">Popular</Button>
        <Button variant="ghost" size="sm">Active</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const ProfessionalShowcase: Story = {
  render: () => (
    <div className="space-y-2xl p-16 max-w-7xl bg-range-white">
      {/* Hero Section */}
      <div className="text-center space-y-md">
        <h1 className="text-5xl font-rajdhani font-bold text-dark-chocolate tracking-tight">
          The Complete TBGC Button System
        </h1>
        <p className="text-display-sm text-warning-amber max-w-4xl mx-auto leading-relaxed">
          Showcasing the full glory of our Idaho Firearms Heritage design system - from sophisticated shadows and Stripe-style animations to Windows 11 Mica glassmorphism
        </p>
      </div>

      {/* Complete Variant Grid */}
      <div className="space-y-xl">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center">
          Complete Variant Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* Clean Variants */}
          <div className="bg-card-surface p-md rounded-overlay border border-warning-amber/20 space-y-base">
            <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel">Clean & Professional</h3>
            <div className="space-y-sm">
              <Button variant="default" className="w-full">Default</Button>
              <Button variant="primary" className="w-full">Primary</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
            </div>
          </div>

          {/* Accent Variants */}
          <div className="bg-card-surface p-md rounded-overlay border border-warning-amber/20 space-y-base">
            <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel">Heritage Accents</h3>
            <div className="space-y-sm">
              <Button variant="accent" className="w-full">Brass Accent</Button>
              <Button variant="success" className="w-full">Success State</Button>
              <Button variant="destructive" className="w-full">Destructive</Button>
            </div>
          </div>

          {/* Solid Variants with Arrows */}
          <div className="bg-card-surface p-md rounded-overlay border border-warning-amber/20 space-y-base">
            <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel">Interactive Solids</h3>
            <div className="space-y-sm">
              <Button variant="solid-accent" className="w-full">Premium</Button>
              <Button variant="solid-success" className="w-full">Complete</Button>
              <Button variant="solid-primary" className="w-full">Learn More</Button>
            </div>
          </div>

          {/* Glassmorphism */}
          <div className="bg-gradient-to-br from-sandy-ochre/20 via-rusty-orange/20 to-dark-chocolate/20 p-md rounded-overlay border border-white/30 space-y-base backdrop-blur-sm">
            <h3 className="text-body-lg font-rajdhani font-semibold text-dark-chocolate">Glassmorphism</h3>
            <div className="space-y-sm">
              <Button variant="glass" className="w-full">Glass Effect</Button>
              <Button variant="glass" size="sm" className="w-full">Small Glass</Button>
              <Button variant="glass" rounded="full" className="w-full">Round Glass</Button>
            </div>
          </div>

          {/* Minimal Variants */}
          <div className="bg-card-surface p-md rounded-overlay border border-warning-amber/20 space-y-base">
            <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel">Minimal & Clean</h3>
            <div className="space-y-sm">
              <Button variant="ghost" className="w-full">Ghost Button</Button>
              <Button variant="link" className="w-full">Link Style</Button>
              <Button variant="ghost" size="sm" className="w-full">Small Ghost</Button>
            </div>
          </div>

          {/* All Sizes */}
          <div className="bg-card-surface p-md rounded-overlay border border-warning-amber/20 space-y-base">
            <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel">Size Spectrum</h3>
            <div className="space-y-sm flex flex-col items-center">
              <Button variant="accent" size="xs">Extra Small</Button>
              <Button variant="accent" size="sm">Small</Button>
              <Button variant="accent" size="default">Default</Button>
              <Button variant="accent" size="lg">Large</Button>
              <Button variant="accent" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-gradient-to-br from-card-surface to-range-white p-12 rounded-3xl border border-warning-amber/20 shadow-elevated">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center mb-xl">
          Interactive Features Demo
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          {/* Loading States */}
          <div className="space-y-md">
            <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Loading States</h3>
            <div className="space-y-base">
              <Button variant="primary" loading className="w-full">Processing...</Button>
              <Button variant="accent" loading className="w-full">Saving...</Button>
              <Button variant="solid-success" loading className="w-full">Completing...</Button>
            </div>
          </div>

          {/* Disabled States */}
          <div className="space-y-md">
            <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">Disabled States</h3>
            <div className="space-y-base">
              <Button variant="primary" disabled className="w-full">Unavailable</Button>
              <Button variant="accent" disabled className="w-full">Coming Soon</Button>
              <Button variant="solid-destructive" disabled className="w-full">Restricted</Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-md">
            <h3 className="text-display-sm font-rajdhani font-semibold text-blued-steel">With Icons</h3>
            <div className="space-y-base">
              <Button variant="primary" className="w-full">
                <Plus className="mr-xs h-4 w-4" />
                Add Member
              </Button>
              <Button variant="accent" className="w-full">
                <Download className="mr-xs h-4 w-4" />
                Export Data
              </Button>
              <Button variant="solid-success" className="w-full">
                <Check className="mr-xs h-4 w-4" />
                Complete
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center space-y-base pt-lg border-t border-warning-amber/20">
        <p className="text-warning-amber font-noto-serif italic">
          "Every component reflects the precision, heritage, and quality of Idaho's firearms culture 
          while maintaining modern web standards and accessibility."
        </p>
        <p className="text-body-sm text-warning-amber/70">
          Design System v2.0 • The Boise Gun Club • 2025
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
