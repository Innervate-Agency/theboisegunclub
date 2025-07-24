import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'Core UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass', 'filled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" {...args} />
    </div>
  ),
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    placeholder: 'Enter premium details...',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="premium-message">Premium Message</Label>
      <Textarea {...args} />
    </div>
  ),
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    placeholder: 'Enter glass details...',
  },
  render: (args) => (
    <div className="relative w-[400px] p-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="glass-message" className="text-white">Glass Message</Label>
        <Textarea {...args} />
      </div>
    </div>
  ),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Enter filled details...',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="filled-message">Filled Message</Label>
      <Textarea {...args} />
    </div>
  ),
};