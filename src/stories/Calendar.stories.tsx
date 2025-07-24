import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'Specialized Controls/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
