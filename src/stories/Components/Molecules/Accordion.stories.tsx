import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'molecule'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion type="single" collapsible className="w-[450px]" {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Firearm Safety Requirements</AccordionTrigger>
        <AccordionContent>
          All range users must complete our comprehensive safety orientation and demonstrate proper firearm handling before using the facilities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Range Membership Benefits</AccordionTrigger>
        <AccordionContent>
          Members enjoy unlimited range access, discounted training courses, priority event booking, and access to our premium equipment collection.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Training Course Schedule</AccordionTrigger>
        <AccordionContent>
          We offer beginner through advanced courses every weekend, with specialized tactical and competitive shooting programs available monthly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
