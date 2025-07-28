import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input, InputGroup } from '@/components/ui/input';
import { Search, Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
        value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }],
    },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="default" placeholder="Default input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// Status variants
export const StatusVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
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
      <div className="space-y-6 w-80">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <Input
            className="pl-10"
            placeholder="Search firearms..."
            type="search"
          />
        </div>

        {/* Email input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <Input
            className="pl-10"
            placeholder="your@email.com"
            type="email"
          />
        </div>

        {/* Password input with toggle */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <Input
            className="pl-10 pr-10"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-case-hardened hover:text-blued-steel transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  },
};

// Input Group examples
export const InputGroups: Story = {
  render: () => (
    <div className="space-y-6 w-80">
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
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <Input className="pl-10" placeholder="your@email.com" type="email" />
        </div>
      </InputGroup>

      <InputGroup
        label="Phone Number"
        error="Please enter a valid phone number"
      >
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
          <Input 
            className="pl-10" 
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
    <div className="space-y-8 max-w-2xl">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-rajdhani font-bold text-blued-steel">
          Membership Registration
        </h3>
        <p className="text-case-hardened">
          Join The Boise Gun Club community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
            <Input className="pl-10" placeholder="john@example.com" type="email" />
          </div>
        </InputGroup>

        <InputGroup label="Phone Number">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
            <Input className="pl-10" placeholder="(208) 555-0123" type="tel" />
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
    <div className="space-y-12 max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-rajdhani font-bold text-blued-steel">
          TBGC Input Design System
        </h2>
        <p className="text-case-hardened max-w-2xl mx-auto">
          Sophisticated input components using our Idaho Firearms Heritage Palette with Stripe-inspired interactions
        </p>
      </div>

      {/* Variants showcase */}
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-rajdhani font-semibold text-blued-steel mb-4">
            Variant Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Default</label>
              <Input placeholder="Clean white background" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Filled</label>
              <Input variant="filled" placeholder="Subtle background fill" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Ghost</label>
              <Input variant="ghost" placeholder="Minimal transparent" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Glass</label>
              <Input variant="glass" placeholder="Glassmorphism effect" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-rajdhani font-semibold text-blued-steel mb-4">
            Status Indicators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Success State</label>
              <Input status="success" placeholder="Valid input" value="john@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Warning State</label>
              <Input status="warning" placeholder="Needs attention" value="john@" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">Error State</label>
              <Input status="error" placeholder="Invalid input" value="invalid-email" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-blued-steel">With Helper Text</label>
              <InputGroup error="Email address is required">
                <Input status="error" placeholder="your@email.com" />
              </InputGroup>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-rajdhani font-semibold text-blued-steel mb-4">
            Interactive Features
          </h3>
          <div className="bg-shooting-bench p-6 rounded-xl space-y-4">
            <p className="text-sm text-case-hardened mb-4">
              Hover and focus on inputs to see sophisticated micro-interactions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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