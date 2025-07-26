import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '../components/ui/button';
import { Plus, Download, ArrowRight, Settings, Check, X, Search, User } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'destructive', 'glass', 'solid-accent', 'solid-success', 'solid-destructive', 'solid-primary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon'],
    },
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
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

// ================== PROFESSIONAL SHOWCASE ==================

export const CleanShowcase: Story = {
  render: () => (
    <div className="space-y-12 p-12 max-w-6xl bg-range-white min-h-screen">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-rajdhani font-bold text-gunmetal-black tracking-tight">
          TBGC Clean Button System
        </h1>
        <p className="text-lg text-case-hardened max-w-3xl mx-auto">
          Sophisticated buttons using our Idaho Firearms Heritage Palette - combining clean design with our distinctive brand colors
        </p>
      </div>
      
      {/* Primary Actions */}
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-blued-steel text-center">Primary Actions</h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Create Project
          </Button>
          <Button variant="accent" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="success" size="lg">
            <Check className="mr-2 h-5 w-5" />
            Confirm
          </Button>
        </div>
      </div>
      
      {/* Size Variants */}
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-blued-steel text-center">Size Variants</h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
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
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-blued-steel text-center">Interactive States</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-noto-sans font-medium text-case-hardened">Normal States</h3>
            <div className="space-y-3">
              <Button variant="default" className="w-full">Default</Button>
              <Button variant="primary" className="w-full">Primary</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-noto-sans font-medium text-case-hardened">Loading States</h3>
            <div className="space-y-3">
              <Button variant="default" className="w-full" loading>Loading...</Button>
              <Button variant="primary" className="w-full" loading>Processing...</Button>
              <Button variant="accent" className="w-full" loading>Saving...</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-noto-sans font-medium text-case-hardened">Disabled States</h3>
            <div className="space-y-3">
              <Button variant="default" className="w-full" disabled>Disabled</Button>
              <Button variant="primary" className="w-full" disabled>Disabled</Button>
              <Button variant="destructive" className="w-full" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Real-world Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-blued-steel text-center">Real-world Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Actions */}
          <div className="bg-shooting-bench p-6 rounded-xl shadow-sm border border-case-hardened/20">
            <h3 className="text-lg font-noto-sans font-medium text-blued-steel mb-4">Form Actions</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="primary" className="flex-1">
                  Save Changes
                </Button>
                <Button variant="ghost">
                  Cancel
                </Button>
              </div>
              <div className="flex gap-3">
                <Button variant="destructive" size="sm">
                  <X className="mr-1 h-4 w-4" />
                  Delete
                </Button>
                <Button variant="secondary" size="sm">
                  <Download className="mr-1 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="bg-shooting-bench p-6 rounded-xl shadow-sm border border-case-hardened/20">
            <h3 className="text-lg font-noto-sans font-medium text-blued-steel mb-4">Navigation</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="ghost">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost">
                  <Settings className="mr-2 h-4 w-4" />
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
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-blued-steel text-center">Border Radius Options</h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
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
    <div className="space-y-12 p-12 max-w-4xl bg-range-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-rajdhani font-bold text-gunmetal-black">
          Stripe-Style Arrow Animations
        </h1>
        <p className="text-case-hardened">
          Watch the sophisticated arrow animations on our solid variant buttons
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Interactive Arrows</h3>
          <div className="space-y-4">
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

        <div className="space-y-6">
          <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Timing Variations</h3>
          <div className="space-y-4">
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
      <div className="absolute inset-0 bg-gradient-to-br from-brass-yellow via-copper-orange to-gunmetal-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-muzzle-flash/20 via-transparent to-scope-blue/30"></div>
      
      {/* Floating elements for depth */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-nickel-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-brass-yellow/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-rajdhani font-bold text-nickel-white drop-shadow-lg">
            Windows 11 Mica Glassmorphism
          </h1>
          <p className="text-nickel-white/90 text-lg max-w-2xl mx-auto">
            Our glassmorphism buttons with noise texture and sophisticated backdrop blur effects
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="glass" size="lg" className="backdrop-blur-xl">
              Premium Glass Effect
            </Button>
            <Button variant="glass" size="lg" rounded="full" className="backdrop-blur-xl">
              Rounded Glassmorphism
            </Button>
            <Button variant="glass" size="xl" className="backdrop-blur-xl px-12">
              Extra Large Glass
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-4 mica-glass">
            <h3 className="text-xl font-rajdhani font-semibold text-nickel-white">
              Glass Card Example
            </h3>
            <p className="text-nickel-white/80">
              Notice the subtle noise texture and multi-layered glass effect
            </p>
            <div className="flex gap-4">
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
    <div className="space-y-12 p-12 max-w-6xl bg-range-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-rajdhani font-bold text-gunmetal-black">
          Sophisticated Color Harmonies
        </h1>
        <p className="text-case-hardened text-lg max-w-3xl mx-auto">
          Professionally curated color combinations with proper contrast ratios and visual hierarchy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Clean Professional Combinations */}
        <div className="bg-shooting-bench p-8 rounded-2xl shadow-sm border border-case-hardened/20">
          <h2 className="text-2xl font-rajdhani font-semibold text-gunmetal-black mb-6">
            Clean & Professional
          </h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-noto-sans font-medium text-blued-steel">Primary Actions</h4>
              <div className="flex gap-3 flex-wrap">
                <Button className="bg-brass-yellow text-gunmetal-black hover:bg-brass-yellow/90 shadow-sm">
                  Premium Gold
                </Button>
                <Button className="bg-gunmetal-black text-range-white hover:bg-gunmetal-black/90 shadow-sm">
                  Professional Dark
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-noto-sans font-medium text-blued-steel">Subtle Accents</h4>
              <div className="flex gap-3 flex-wrap">
                <Button className="bg-range-white text-gunmetal-black border-2 border-brass-yellow/30 hover:border-brass-yellow/60 hover:bg-brass-yellow/5">
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
        <div className="bg-range-white p-8 rounded-2xl shadow-sm border border-case-hardened/20">
          <h2 className="text-2xl font-rajdhani font-semibold text-gunmetal-black mb-6">
            Heritage Warmth
          </h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-noto-sans font-medium text-blued-steel">Warm Metals</h4>
              <div className="flex gap-3 flex-wrap">
                <Button className="bg-copper-orange text-range-white hover:bg-copper-orange/90 shadow-sm">
                  Copper Elegance
                </Button>
                <Button className="bg-walnut-stock text-range-white hover:bg-walnut-stock/90 shadow-sm">
                  Walnut Rich
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-noto-sans font-medium text-blued-steel">Heritage Highlights</h4>
              <div className="flex gap-3 flex-wrap">
                <Button className="bg-sight-gold text-gunmetal-black hover:bg-sight-gold/90 shadow-sm">
                  Traditional Gold
                </Button>
                <Button className="bg-muzzle-flash text-gunmetal-black hover:bg-muzzle-flash/90 shadow-sm">
                  Bright Accent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monochromatic Excellence */}
      <div className="bg-shooting-bench p-8 rounded-2xl border border-case-hardened/20">
        <h2 className="text-2xl font-rajdhani font-semibold text-gunmetal-black text-center mb-8">
          Monochromatic Sophistication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="bg-gunmetal-black text-range-white hover:bg-gunmetal-black/90">
            Gunmetal
          </Button>
          <Button className="bg-blued-steel text-range-white hover:bg-blued-steel/90">
            Blued Steel
          </Button>
          <Button className="bg-case-hardened text-range-white hover:bg-case-hardened/90">
            Case Hardened
          </Button>
          <Button className="bg-tactical-gray text-range-white hover:bg-tactical-gray/90">
            Tactical Gray
          </Button>
        </div>
      </div>

      {/* Professional Gradients */}
      <div className="space-y-8">
        <h2 className="text-2xl font-rajdhani font-semibold text-gunmetal-black text-center">
          Sophisticated Gradients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-brass-yellow to-sight-gold text-gunmetal-black hover:shadow-md transition-all"
          >
            Gold Harmony
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-copper-orange to-walnut-stock text-range-white hover:shadow-md transition-all"
          >
            Warm Heritage
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gunmetal-black to-blued-steel text-range-white hover:shadow-md transition-all"
          >
            Steel Elegance
          </Button>
        </div>
      </div>

      {/* State Colors Done Right */}
      <div className="bg-shooting-bench p-8 rounded-2xl border border-case-hardened/20">
        <h2 className="text-2xl font-rajdhani font-semibold text-gunmetal-black text-center mb-8">
          Semantic Colors with Proper Contrast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-noto-sans font-medium text-blued-steel">Success States</h4>
            <Button className="bg-rifling-green text-range-white hover:bg-rifling-green/90 w-full">
              Success Action
            </Button>
            <Button className="bg-range-white text-rifling-green border-2 border-rifling-green hover:bg-rifling-green/5 w-full">
              Success Outline
            </Button>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-noto-sans font-medium text-blued-steel">Information</h4>
            <Button className="bg-scope-blue text-range-white hover:bg-scope-blue/90 w-full">
              Info Action
            </Button>
            <Button className="bg-range-white text-scope-blue border-2 border-scope-blue hover:bg-scope-blue/5 w-full">
              Info Outline
            </Button>
          </div>
          
          <div className="space-y-3">
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
    <div className="space-y-12 p-12 max-w-5xl bg-range-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-rajdhani font-bold text-gunmetal-black">
          Stripe-Inspired Sophisticated Shadows
        </h1>
        <p className="text-case-hardened text-lg">
          Multi-layered shadow system with brand-colored variations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Standard Shadow System</h3>
          <div className="space-y-6">
            <Button className="shadow-xs bg-white text-gunmetal-black border border-recoil-pad w-full">
              Extra Small Shadow
            </Button>
            <Button className="shadow-sm bg-white text-gunmetal-black border border-recoil-pad w-full">
              Small Shadow
            </Button>
            <Button className="shadow-md bg-white text-gunmetal-black border border-recoil-pad w-full">
              Medium Shadow
            </Button>
            <Button className="shadow-lg bg-white text-gunmetal-black border border-recoil-pad w-full">
              Large Shadow
            </Button>
            <Button className="shadow-xl bg-white text-gunmetal-black border border-recoil-pad w-full">
              Extra Large Shadow
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Brand-Colored Shadows</h3>
          <div className="space-y-6">
            <Button className="shadow-brass bg-brass-yellow text-gunmetal-black w-full hover:shadow-lg transition-shadow">
              Brass Shadow Effect
            </Button>
            <Button className="shadow-copper bg-copper-orange text-nickel-white w-full hover:shadow-xl transition-shadow">
              Copper Shadow Effect
            </Button>
            <Button className="bg-rifling-green text-nickel-white w-full hover:shadow-lg hover:shadow-rifling-green/25 transition-shadow">
              Success Green Shadow
            </Button>
            <Button className="bg-scope-blue text-nickel-white w-full hover:shadow-lg hover:shadow-scope-blue/25 transition-shadow">
              Information Blue Shadow
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-shooting-bench p-8 rounded-2xl border border-case-hardened/20">
        <h3 className="text-xl font-rajdhani font-semibold text-blued-steel mb-6 text-center">
          Interactive Shadow Transitions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button className="bg-white text-gunmetal-black border border-recoil-pad shadow-sm hover:shadow-brass hover:-translate-y-1 transition-all duration-300">
            Hover for Brass Shadow
          </Button>
          <Button className="bg-white text-gunmetal-black border border-recoil-pad shadow-sm hover:shadow-copper hover:-translate-y-1 transition-all duration-300">
            Hover for Copper Shadow
          </Button>
          <Button className="bg-white text-gunmetal-black border border-recoil-pad shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
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
    <div className="bg-range-white p-8 rounded-xl shadow-sm border border-case-hardened/20 max-w-md space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">
          Upgrade Your Membership
        </h3>
        <p className="text-case-hardened">
          Get access to premium range time and exclusive events
        </p>
      </div>
      
      <div className="space-y-3">
        <Button variant="accent" size="lg" className="w-full">
          Upgrade to Premium
          <ArrowRight className="ml-2 h-5 w-5" />
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
    <div className="bg-range-white p-6 rounded-xl shadow-sm border border-case-hardened/20 max-w-lg space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <input
            type="text"
            placeholder="Search members..."
            className="w-full pl-10 pr-4 py-2.5 border border-case-hardened/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass-yellow/50 focus:border-brass-yellow bg-shooting-bench text-blued-steel placeholder-case-hardened"
          />
        </div>
        <Button variant="accent">
          Search
        </Button>
      </div>
      
      <div className="flex gap-2">
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
    <div className="space-y-16 p-16 max-w-7xl bg-range-white">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-rajdhani font-bold text-gunmetal-black tracking-tight">
          The Complete TBGC Button System
        </h1>
        <p className="text-xl text-case-hardened max-w-4xl mx-auto leading-relaxed">
          Showcasing the full glory of our Idaho Firearms Heritage design system - from sophisticated shadows and Stripe-style animations to Windows 11 Mica glassmorphism
        </p>
      </div>

      {/* Complete Variant Grid */}
      <div className="space-y-12">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center">
          Complete Variant Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Clean Variants */}
          <div className="bg-shooting-bench p-6 rounded-2xl border border-case-hardened/20 space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-blued-steel">Clean & Professional</h3>
            <div className="space-y-3">
              <Button variant="default" className="w-full">Default</Button>
              <Button variant="primary" className="w-full">Primary</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
            </div>
          </div>

          {/* Accent Variants */}
          <div className="bg-shooting-bench p-6 rounded-2xl border border-case-hardened/20 space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-blued-steel">Heritage Accents</h3>
            <div className="space-y-3">
              <Button variant="accent" className="w-full">Brass Accent</Button>
              <Button variant="success" className="w-full">Success State</Button>
              <Button variant="destructive" className="w-full">Destructive</Button>
            </div>
          </div>

          {/* Solid Variants with Arrows */}
          <div className="bg-shooting-bench p-6 rounded-2xl border border-case-hardened/20 space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-blued-steel">Interactive Solids</h3>
            <div className="space-y-3">
              <Button variant="solid-accent" className="w-full">Premium</Button>
              <Button variant="solid-success" className="w-full">Complete</Button>
              <Button variant="solid-primary" className="w-full">Learn More</Button>
            </div>
          </div>

          {/* Glassmorphism */}
          <div className="bg-gradient-to-br from-brass-yellow/20 via-copper-orange/20 to-gunmetal-black/20 p-6 rounded-2xl border border-white/30 space-y-4 backdrop-blur-sm">
            <h3 className="text-lg font-rajdhani font-semibold text-gunmetal-black">Glassmorphism</h3>
            <div className="space-y-3">
              <Button variant="glass" className="w-full">Glass Effect</Button>
              <Button variant="glass" size="sm" className="w-full">Small Glass</Button>
              <Button variant="glass" rounded="full" className="w-full">Round Glass</Button>
            </div>
          </div>

          {/* Minimal Variants */}
          <div className="bg-shooting-bench p-6 rounded-2xl border border-case-hardened/20 space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-blued-steel">Minimal & Clean</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full">Ghost Button</Button>
              <Button variant="link" className="w-full">Link Style</Button>
              <Button variant="ghost" size="sm" className="w-full">Small Ghost</Button>
            </div>
          </div>

          {/* All Sizes */}
          <div className="bg-shooting-bench p-6 rounded-2xl border border-case-hardened/20 space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-blued-steel">Size Spectrum</h3>
            <div className="space-y-3 flex flex-col items-center">
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
      <div className="bg-gradient-to-br from-shooting-bench to-range-white p-12 rounded-3xl border border-case-hardened/20 shadow-lg">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center mb-12">
          Interactive Features Demo
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Loading States */}
          <div className="space-y-6">
            <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Loading States</h3>
            <div className="space-y-4">
              <Button variant="primary" loading className="w-full">Processing...</Button>
              <Button variant="accent" loading className="w-full">Saving...</Button>
              <Button variant="solid-success" loading className="w-full">Completing...</Button>
            </div>
          </div>

          {/* Disabled States */}
          <div className="space-y-6">
            <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">Disabled States</h3>
            <div className="space-y-4">
              <Button variant="primary" disabled className="w-full">Unavailable</Button>
              <Button variant="accent" disabled className="w-full">Coming Soon</Button>
              <Button variant="solid-destructive" disabled className="w-full">Restricted</Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-6">
            <h3 className="text-xl font-rajdhani font-semibold text-blued-steel">With Icons</h3>
            <div className="space-y-4">
              <Button variant="primary" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
              <Button variant="accent" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
              <Button variant="solid-success" className="w-full">
                <Check className="mr-2 h-4 w-4" />
                Complete
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center space-y-4 pt-8 border-t border-case-hardened/20">
        <p className="text-case-hardened font-noto-serif italic">
          "Every component reflects the precision, heritage, and quality of Idaho's firearms culture 
          while maintaining modern web standards and accessibility."
        </p>
        <p className="text-sm text-case-hardened/70">
          Design System v2.0 • The Boise Gun Club • 2025
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
