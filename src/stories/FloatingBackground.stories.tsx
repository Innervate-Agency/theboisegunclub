import type { Meta, StoryObj } from '@storybook/nextjs';
import { FloatingBackground } from '@/components/ui/floating-background';

const meta: Meta<typeof FloatingBackground> = {
  title: 'Accessibility & Effects/FloatingBackground',
  component: FloatingBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    preset: 'gunclub',
    intensity: 'medium',
  },
  render: (args) => (
    <FloatingBackground {...args}>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Floating Background</h1>
      </div>
    </FloatingBackground>
  ),
};

export const CoolPreset: Story = {
  args: {
    preset: 'cool',
    intensity: 'premium',
  },
  render: (args) => (
    <FloatingBackground {...args}>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Cool Preset</h1>
      </div>
    </FloatingBackground>
  ),
};
