import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Atoms/Switch',
  component: Switch,
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
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Premium: Story = {
  args: {
    variant: 'premium',
  },
  render: (args) => (
    <div className="flex items-center space-x-xs">
      <Switch id="premium-mode" {...args} />
      <Label htmlFor="premium-mode">Premium Mode</Label>
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
        <Switch id="glass-mode" {...args} />
        <Label htmlFor="glass-mode" className="text-range-white">Glass Mode</Label>
      </div>
    </div>
  ),
};