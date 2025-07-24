import type { Meta, StoryObj } from '@storybook/react';
import { GalleryGrid } from '@/components/ui/gallery-showcase';

const meta: Meta<typeof GalleryGrid> = {
  title: 'Data Display/GalleryShowcase',
  component: GalleryGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  { id: '1', src: '/images/events.jpg', alt: 'Events', category: 'Events', featured: true, likes: 120, downloads: 30 },
  { id: '2', src: '/images/membership.jpg', alt: 'Membership', category: 'Membership', likes: 80, downloads: 15 },
  { id: '3', src: '/images/training.jpg', alt: 'Training', category: 'Training', likes: 95, downloads: 25 },
  { id: '4', src: '/images/hero-bg.webp', alt: 'Hero Background', category: 'Scenery', featured: true, likes: 200, downloads: 50 },
];

export const Default: Story = {
  args: {
    images: sampleImages,
  },
  render: (args) => (
    <div className="p-10">
      <GalleryGrid {...args} />
    </div>
  ),
};
