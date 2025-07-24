import type { Meta, StoryObj } from '@storybook/react'
import { Search, Mail, Lock, User, Phone, Calendar, CreditCard } from 'lucide-react'

import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Input component with ClickUp + Stripe fusion design. Features premium variants, glassmorphism effects, validation states, and gun club theming.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass', 'outline', 'filled'],
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg'],
    },
    state: {
      control: 'select',
      options: ['default', 'success', 'error', 'loading'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    type: 'email',
  },
}

export const Premium: Story = {
  args: {
    variant: 'premium',
    label: 'Premium Input',
    placeholder: 'Elite member access...',
    leftIcon: <Mail className="h-4 w-4" />,
  },
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Input
        variant="glass"
        label="Glass Input"
        placeholder="Glassmorphism effect..."
        leftIcon={<Search className="h-4 w-4" />}
        className="text-white placeholder:text-white/50"
      />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Search"
        placeholder="Search tournaments..."
        leftIcon={<Search className="h-4 w-4" />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="your.email@example.com"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<Lock className="h-4 w-4" />}
      />
    </div>
  ),
}

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Success State"
        placeholder="Valid input"
        success
        helperText="✓ Email is available"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        label="Error State"
        placeholder="Invalid input"
        error
        helperText="✗ Email is already taken"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        label="Loading State"
        placeholder="Checking availability..."
        loading
        helperText="Verifying email address..."
        leftIcon={<Mail className="h-4 w-4" />}
      />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        size="sm"
        label="Small Input"
        placeholder="Small size input..."
        leftIcon={<User className="h-3 w-3" />}
      />
      <Input
        size="default"
        label="Default Input"
        placeholder="Default size input..."
        leftIcon={<User className="h-4 w-4" />}
      />
      <Input
        size="lg"
        label="Large Input"
        placeholder="Large size input..."
        leftIcon={<User className="h-5 w-5" />}
      />
    </div>
  ),
}

export const FloatingLabels: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        floatingLabel
        label="Member Name"
        placeholder=" "
        leftIcon={<User className="h-4 w-4" />}
      />
      <Input
        variant="premium"
        floatingLabel
        label="Tournament Registration"
        placeholder=" "
        leftIcon={<Calendar className="h-4 w-4" />}
      />
    </div>
  ),
}

export const GunClubForms: Story = {
  name: 'Gun Club Registration Forms',
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div className="space-y-4">
        <h3 className="text-lg font-rajdhani font-semibold text-card-foreground">Member Registration</h3>
        
        <Input
          variant="premium"
          label="Full Name"
          placeholder="Enter your full name"
          leftIcon={<User className="h-4 w-4" />}
        />
        
        <Input
          variant="premium"
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          leftIcon={<Mail className="h-4 w-4" />}
        />
        
        <Input
          variant="premium"
          label="Phone Number"
          type="tel"
          placeholder="(208) 555-0123"
          leftIcon={<Phone className="h-4 w-4" />}
        />
        
        <Input
          variant="premium"
          label="Emergency Contact"
          placeholder="Emergency contact name"
          leftIcon={<User className="h-4 w-4" />}
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-rajdhani font-semibold text-card-foreground">Payment Information</h3>
        
        <Input
          variant="glass"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          leftIcon={<CreditCard className="h-4 w-4" />}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            variant="glass"
            label="Expiry"
            placeholder="MM/YY"
          />
          <Input
            variant="glass"
            label="CVC"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  ),
}

export const SearchVariations: Story = {
  name: 'Search & Filter Inputs',
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        placeholder="Search tournaments..."
        leftIcon={<Search className="h-4 w-4" />}
        clearable
      />
      
      <Input
        variant="premium"
        placeholder="Search elite members..."
        leftIcon={<Search className="h-4 w-4" />}
        clearable
      />
      
      <Input
        variant="outline"
        placeholder="Filter by classification..."
        leftIcon={<Search className="h-4 w-4" />}
      />
    </div>
  ),
}