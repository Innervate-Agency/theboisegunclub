import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input, InputGroup } from '@/components/ui/input';
import { EnvelopeIcon, EyeIcon, LockClosedIcon, MagnifyingGlassIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'form', 'interactive'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'ghost', 'glass'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Search members...',
    type: 'search',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Type to search...',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    placeholder: 'Glass effect input...',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [{
        name: 'gradient',
        value: 'linear-gradient(135deg, var(--color-slate-blue) 0%, var(--color-foothills-purple) 100%)',
      }],
    },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-base w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="default" placeholder="Default input" />
      <Input placeholder="Large input" />
    </div>
  ),
};

// Status variants
export const StatusVariants: Story = {
  render: () => (
    <div className="space-y-base w-80">
      <Input status="default" placeholder="Default status" />
      <Input status="success" placeholder="Success status" />
      <Input status="warning" placeholder="Warning status" />
      <Input status="error" placeholder="Error status" />
    </div>
  ),
};

// With icons and enhanced functionality
export const WithIcons: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div className="space-y-md w-80">
        {/* Search input */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
          <Input
            className="pl-xl"
            placeholder="Search firearms..."
            type="search"
          />
        </div>

        {/* Email input */}
        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
          <Input
            style={{paddingLeft: '48px'}}
            placeholder="your@email.com"
            type="email"
          />
        </div>

        {/* Password input with toggle */}
        <div className="relative">
          <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
          <Input
            className="pr-2xl"
            style={{paddingLeft: '48px'}}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-warning-amber hover:text-blued-steel transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  },
};

// Input Group examples
export const InputGroups: Story = {
  render: () => (
    <div className="space-y-md w-80">
      <InputGroup
        label="Full Name"
        description="Enter your first and last name"
        required
      >
        <Input placeholder="John Doe" />
      </InputGroup>

      <InputGroup
        label="Email Address"
        description="We'll use this for important notifications"
        required
      >
        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
          <Input className="pl-(--spacing-xl)" placeholder="your@email.com" type="email" />
        </div>
      </InputGroup>

      <InputGroup
        label="Phone Number"
        error="Please enter a valid phone number"
      >
        <div className="relative">
          <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
                      <Input 
            className="pl-(--spacing-xl)" 
            placeholder="(555) 123-4567" 
            type="tel"
            status="error"
          />
        </div>
      </InputGroup>
    </div>
  ),
};

// Form examples in business context
export const FirearmsFormExamples: Story = {
  render: () => (
    <div className="space-y-lg max-w-2xl">
      <div className="text-center space-y-xs">
        <h3 className="text-display-sm font-rajdhani font-bold text-blued-steel">
          Membership Registration
        </h3>
        <p className="text-warning-amber">
          Join The Boise Gun Club community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <InputGroup label="First Name" required>
          <Input placeholder="John" />
        </InputGroup>

        <InputGroup label="Last Name" required>
          <Input placeholder="Doe" />
        </InputGroup>

        <InputGroup 
          label="Email Address" 
          description="For membership communications"
          required
        >
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
            <Input style={{paddingLeft: '48px'}} placeholder="john@example.com" type="email" />
          </div>
        </InputGroup>

        <InputGroup label="Phone Number">
          <div className="relative">
            <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warning-amber" />
            <Input style={{paddingLeft: '48px'}} placeholder="(208) 555-0123" type="tel" />
          </div>
        </InputGroup>

        <div className="md:col-span-2">
          <InputGroup 
            label="Experience Level" 
            description="Help us tailor training recommendations"
          >
            <Input placeholder="e.g., Beginner, Intermediate, Expert" />
          </InputGroup>
        </div>
      </div>
    </div>
  ),
};

// Design system showcase
export const DesignSystemShowcase: Story = {
  render: () => (
    <div className="space-y-xl max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-base">
        <h2 className="text-display-md font-rajdhani font-bold text-blued-steel">
          TBGC Input Design System
        </h2>
        <p className="text-warning-amber max-w-2xl mx-auto">
          Sophisticated input components using our Idaho Firearms Heritage Palette with Stripe-inspired interactions
        </p>
      </div>

      {/* Variants showcase */}
      <div className="space-y-lg">
        <div>
          <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel mb-base">
            Variant Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Default</label>
              <Input placeholder="Clean white background" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Filled</label>
              <Input variant="default" placeholder="Subtle background fill" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Ghost</label>
              <Input variant="ghost" placeholder="Minimal transparent" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Glass</label>
              <Input variant="secondary" placeholder="Glassmorphism effect" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel mb-base">
            Status Indicators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Success State</label>
              <Input status="success" placeholder="Valid input" value="john@example.com" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Warning State</label>
              <Input status="warning" placeholder="Needs attention" value="john@" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">Error State</label>
              <Input status="error" placeholder="Invalid input" value="invalid-email" />
            </div>
            <div className="space-y-sm">
              <label className="text-body-sm font-medium text-blued-steel">With Helper Text</label>
              <InputGroup error="Email address is required">
                <Input status="error" placeholder="your@email.com" />
              </InputGroup>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-body-lg font-rajdhani font-semibold text-blued-steel mb-base">
            Interactive Features
          </h3>
          <div className="bg-card-surface p-md rounded-xs space-y-base">
            <p className="text-body-sm text-warning-amber mb-base">
              Hover and focus on inputs to see sophisticated micro-interactions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
              <Input placeholder="Hover me" />
              <Input placeholder="Focus me" />
              <Input placeholder="Type in me" defaultValue="Sample text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};