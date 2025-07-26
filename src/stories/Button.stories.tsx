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
