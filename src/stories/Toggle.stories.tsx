import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'Specialized Controls/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4 mr-2" />
      Bold
    </Toggle>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Toggle variant="outline" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};
