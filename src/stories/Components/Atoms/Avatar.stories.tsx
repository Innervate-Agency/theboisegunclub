import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'display'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'default',
    variant: 'default',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Shooter Profile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Premium: Story = {
  args: {
    size: 'lg',
    variant: 'premium',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Shooter Profile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Glass: Story = {
  args: {
    size: 'xl',
    variant: 'glass',
  },
  render: (args) => (
    <div className="relative p-10 bg-cover bg-center rounded-card" style={{ backgroundImage: "url('/images/Smoke/Background_05.webp')" }}>
      <Avatar {...args}>
        <AvatarImage src="/images/Fractal/15.webp" alt="Shooter Profile" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Fallback: Story = {
  args: {
    size: 'default',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://example.com/non-existent-image.png" alt="Fallback" />
      <AvatarFallback>FB</AvatarFallback>
    </Avatar>
  ),
};