import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tabs - TBGC Navigation Component

Accessible tab navigation built with Radix UI and styled with TBGC design system principles.

## Key Features
- **Strategic restraint** - Clean shadow system instead of heavy borders
- **Proper spacing** - Uses CSS variables for consistent spacing tokens
- **Active state styling** - Subtle shadow and background changes for selected tabs
- **Accessibility** - Full keyboard navigation and screen reader support
- **Theme-aware** - Supports both light and dark modes

## Usage
Use for organizing related content into separate views, such as account settings, forms, or content categories.
        `,
      },
    },
  },
  tags: ['autodocs', 'stable', 'molecule', 'navigation'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-(--space-xs)">
            <div className="space-y-(--space-micro)">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-(--space-micro)">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="flat" size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-(--space-xs)">
            <div className="space-y-(--space-micro)">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-(--space-micro)">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="flat" size="sm">Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};
