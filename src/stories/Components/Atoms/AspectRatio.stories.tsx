import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Design System/Atoms/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'atom', 'display'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted" {...args}>
        <Image
          src="/images/Dust/VintageDust (3).webp"
          alt="Vintage Dust Background"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};
