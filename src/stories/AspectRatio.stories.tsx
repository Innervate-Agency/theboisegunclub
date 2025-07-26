import type { Meta, StoryObj } from '@storybook/nextjs';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout & Containers/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted" {...args}>
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop"
          alt="Photo by Anh Tuan To"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};
