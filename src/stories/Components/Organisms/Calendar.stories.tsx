import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
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

const DefaultCalendarComponent = (args: Record<string, unknown>) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <CalendarDaysIcon
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-input border"
      {...args}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultCalendarComponent {...args} />,
};
