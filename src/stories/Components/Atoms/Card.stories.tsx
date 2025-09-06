import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircleIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Card> = {
  title: 'Design System/Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'interactive', 'outlined', 'subtle', 'glass', 'fire', 'fire-blue'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          This is a default card with standard styling.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here with any components or text you need.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>
          This card has enhanced visual presence and hover effects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <CheckCircleIcon className="h-4 w-4 text-accent" />
          <span>Enhanced presence</span>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          This card provides clear clickable affordance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click me to see the interactive hover effects!</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" size="sm">
          Action Button
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>
          Minimal outlined variant with subtle styling.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Clean and minimal design approach.</p>
      </CardContent>
    </Card>
  ),
};

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Glass Card</CardTitle>
        <CardDescription>
          Modern glassmorphism effect for content display.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Badge variant="intel-verified">Verified</Badge>
          <p>Glassmorphism styling with subtle transparency.</p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Fire: Story = {
  args: {
    variant: 'fire',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <StarIcon className="h-5 w-5" />
          Fire Gradient Card
        </CardTitle>
        <CardDescription>
          Premium tactical gradient with copper/brass accent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover to see the fire gradient animation at the bottom.</p>
      </CardContent>
      <CardFooter>
        <Button variant="fire">
          Fire Action
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const FireBlue: Story = {
  args: {
    variant: 'fire-blue',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Blue Fire Card</CardTitle>
        <CardDescription>
          Cool tactical gradient with blue accent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover to see the blue gradient animation.</p>
      </CardContent>
      <CardFooter>
        <Button variant="fire-blue">
          Blue Action
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithComplexContent: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Training Session</CardTitle>
            <CardDescription>
              Advanced marksmanship training course
            </CardDescription>
          </div>
          <Badge variant="events-training">Training</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <span className="text-sm">2 hours duration</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Comprehensive training covering safety protocols, accuracy improvement, 
            and advanced shooting techniques.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="default" size="sm">
          Register
        </Button>
        <Button variant="ghost" size="sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  ),
};
