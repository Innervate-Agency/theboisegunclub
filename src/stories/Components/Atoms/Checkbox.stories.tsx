import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'form', 'interactive'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-xs">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Premium: Story = {
  args: {
    variant: 'premium',
  },
  render: (args) => (
    <div className="flex items-center space-x-xs">
      <Checkbox id="premium-terms" {...args} />
      <Label htmlFor="premium-terms">Premium Option</Label>
    </div>
  ),
};

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
  render: (args) => (
    <div className="relative p-10 bg-cover bg-center rounded-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="flex items-center space-x-xs">
        <Checkbox id="glass-terms" {...args} />
        <Label htmlFor="glass-terms" className="text-range-white">Glass Option</Label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center space-x-xs">
      <Checkbox id="terms-disabled" disabled {...args} />
      <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
    </div>
  ),
};