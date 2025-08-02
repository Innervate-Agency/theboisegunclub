import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'Design System/Organisms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'organism', 'interactive'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCalendarComponent = (args: any) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      {...args}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultCalendarComponent {...args} />,
};
