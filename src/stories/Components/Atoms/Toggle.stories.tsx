import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toggle } from '@/components/ui/toggle';
import { Bold } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'Design System/Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'interactive'],
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
      <Bold className="h-4 w-4 mr-xs" />
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
