import type { Meta, StoryObj } from '@storybook/nextjs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms & Inputs/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    <RadioGroup defaultValue="comfortable" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    defaultValue: 'premium-b'
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="premium-a" id="rp1" />
        <Label htmlFor="rp1">Premium A</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="premium-b" id="rp2" />
        <Label htmlFor="rp2">Premium B</Label>
      </div>
    </RadioGroup>
  ),
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    defaultValue: 'glass-a'
  },
  render: (args) => (
    <div className="relative p-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <RadioGroup {...args}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="glass-a" id="rg1" />
          <Label htmlFor="rg1" className="text-white">Glass A</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="glass-b" id="rg2" />
          <Label htmlFor="rg2" className="text-white">Glass B</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};