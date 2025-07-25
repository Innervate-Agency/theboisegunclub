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
      options: ['default', 'destructive', 'outline', 'ghost', 'premium', 'elite', 'glass'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg', 'full'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Variants
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: 'Premium Membership',
  },
};

export const Elite: Story = {
  args: {
    variant: 'elite',
    children: 'Elite Champion',
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

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Glass Button',
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

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Button',
  },
};


// Real-world Examples
export const CallToAction: Story = {
  args: {
    variant: 'premium',
    size: 'lg',
    children: 'Join Community',
  },
};

export const DownloadButton: Story = {
  args: {
    variant: 'outline',
    children: 'Download Rules',
  },
};

export const NavigationButton: Story = {
  args: {
    variant: 'ghost',
    children: 'View Schedule',
  },
};
