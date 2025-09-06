import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CalendarDaysIcon as Calendar } from '@/components/ui/calendar';
import React from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'Design System/Organisms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'organism', 'interactive'],
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from previous/next month'
    },
    buttonVariant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'secondary'],
      description: 'Button style variant'
    },
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown', 'buttons'],
      description: 'Header layout style'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const CalendarWrapper = (args: any) => {
  return (
    <div className="p-4">
      <Calendar
        className="rounded-md border shadow-flat"
        {...args}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <CalendarWrapper {...args} />,
  args: {
    showOutsideDays: true,
    buttonVariant: 'ghost',
    captionLayout: 'label',
  },
};

export const WithDropdowns: Story = {
  render: (args) => <CalendarWrapper {...args} />,
  args: {
    showOutsideDays: true,
    buttonVariant: 'ghost', 
    captionLayout: 'dropdown',
  },
};

export const WithButtons: Story = {
  render: (args) => <CalendarWrapper {...args} />,
  args: {
    showOutsideDays: false,
    buttonVariant: 'secondary',
    captionLayout: 'buttons',
  },
};
