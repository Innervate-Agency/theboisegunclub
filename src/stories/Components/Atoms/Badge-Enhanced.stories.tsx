import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info', 'premium', 'elite'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const InformationCircleIcon: Story = {
  args: {
    variant: 'info',
    children: 'InformationCircleIcon',
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: 'Premium',
  },
};

export const Elite: Story = {
  args: {
    variant: 'elite',
    children: 'Elite',
  },
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="outline">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Success</Badge>
      <Badge variant="destructive">Warning</Badge>
      <Badge variant="secondary">InformationCircleIcon</Badge>
      <Badge variant="default">Premium</Badge>
      <Badge variant="default">Elite</Badge>
    </div>
  ),
};

// Showcase sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" variant="default">Small</Badge>
      <Badge size="default" variant="default">Default</Badge>
      <Badge variant="default">Large</Badge>
    </div>
  ),
};