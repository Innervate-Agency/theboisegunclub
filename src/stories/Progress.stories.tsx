import type { Meta, StoryObj } from '@storybook/nextjs';
import { Progress } from '@/components/ui/progress';
import React from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Core UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultProgressComponent = (args: any) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" {...args} />;
};

export const Default: Story = {
  render: (args) => <DefaultProgressComponent {...args} />,
};
