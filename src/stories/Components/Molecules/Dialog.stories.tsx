import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Molecules/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Dialog - TBGC Modal Component

Accessible modal dialogs built with Radix UI and styled with TBGC design system principles.

## Key Features
- **Mica glassmorphism** - Windows 11 inspired backdrop effects
- **Strategic restraint** - Clean typography with Rajdhani titles and Noto Sans body text
- **Proper spacing** - Uses CSS variables for consistent spacing tokens
- **Accessibility** - Full keyboard navigation and screen reader support
- **Theme-aware** - Supports both light and dark modes

## Usage
Use for confirmation dialogs, forms, and other modal interactions that require user focus.
        `,
      },
    },
  },
  tags: ['autodocs', 'stable', 'molecule', 'interactive', 'form'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="ghost">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-(--space-base) py-(--space-base)">
          <div className="grid grid-cols-4 items-center gap-(--space-base)">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-(--space-base)">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="flat" size="sm" type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
