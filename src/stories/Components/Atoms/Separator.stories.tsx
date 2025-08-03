import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'Design System/Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="space-y-micro">
        <h4 className="text-body-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-body-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" {...args} />
      <div className="flex h-5 items-center space-x-base text-body-sm">
        <div>Blog</div>
        <Separator orientation="vertical" {...args} />
        <div>Docs</div>
        <Separator orientation="vertical" {...args} />
        <div>Source</div>
      </div>
    </div>
  ),
};
