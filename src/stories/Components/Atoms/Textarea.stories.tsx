import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'form', 'interactive'],
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
    <div className="grid w-full max-w-sm gap-md">
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
    <div className="grid w-full max-w-sm gap-md">
      <Label htmlFor="premium-message">Premium ChatBubbleBottomCenterTextIcon</Label>
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
    <div className="relative w-[400px] p-10 bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="grid w-full max-w-sm gap-md">
        <Label htmlFor="glass-message" className="text-range-white">Glass ChatBubbleBottomCenterTextIcon</Label>
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
    <div className="grid w-full max-w-sm gap-md">
      <Label htmlFor="filled-message">Filled ChatBubbleBottomCenterTextIcon</Label>
      <Textarea {...args} />
    </div>
  ),
};