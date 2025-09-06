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
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling the avatar size and appearance',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="User Avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/nonexistent-image.jpg" alt="User Avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  args: {
    className: "size-6",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Small Avatar" />
      <AvatarFallback className="text-xs">JS</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  args: {
    className: "size-16",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Large Avatar" />
      <AvatarFallback className="text-xl">JD</AvatarFallback>
    </Avatar>
  ),
};

export const ExtraLarge: Story = {
  args: {
    className: "size-24",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Extra Large Avatar" />
      <AvatarFallback className="text-2xl">JD</AvatarFallback>
    </Avatar>
  ),
};

export const CustomStyling: Story = {
  args: {
    className: "size-12 ring-2 ring-primary ring-offset-2",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/images/Fractal/15.webp" alt="Custom Styled Avatar" />
      <AvatarFallback>CS</AvatarFallback>
    </Avatar>
  ),
};
