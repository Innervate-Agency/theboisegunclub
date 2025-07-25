import type { Meta, StoryObj } from '@storybook/nextjs';
import { Slider } from '@/components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'Specialized Controls/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
      {...args}
    />
  ),
};
