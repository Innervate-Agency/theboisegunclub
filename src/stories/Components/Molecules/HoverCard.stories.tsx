import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarIcon } from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
  title: 'Design System/Molecules/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'molecule', 'display'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-base">
          <Avatar>
            <AvatarImage src="/images/Fractal/22.webp" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-micro">
            <h4 className="text-body-sm font-semibold">@nextjs</h4>
            <p className="text-body-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-xs">
              <CalendarIcon className="mr-xs h-4 w-4 opacity-70" />{' '}
              <span className="text-caption text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
