import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

const meta: Meta<typeof Collapsible> = {
  title: 'Design System/Molecules/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCollapsibleComponent = (args: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-[var(--space-xs)]"
      {...args}
    >
      <div className="flex items-center justify-between space-x-[var(--space-base)] px-[var(--space-base)]">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-[var(--space-base)] py-[var(--space-sm)] font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-[var(--space-xs)]">
        <div className="rounded-md border px-[var(--space-base)] py-[var(--space-sm)] font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-[var(--space-base)] py-[var(--space-sm)] font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Default: Story = {
  render: (args) => <DefaultCollapsibleComponent {...args} />,
};
