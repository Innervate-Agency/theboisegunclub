import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Label> = {
  title: 'Core UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" {...args}>
          Accept terms and conditions
        </Label>
      </div>
    </div>
  ),
};
