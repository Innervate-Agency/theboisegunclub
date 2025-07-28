import type { Meta, StoryObj } from '@storybook/nextjs-vite';
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
  { id: '1', src: '/images/Fractal/18.webp', alt: 'Events', category: 'Events', featured: true, likes: 120, downloads: 30 },
  { id: '2', src: '/images/PixelHeat/halfton-heat-FLAT-09.webp', alt: 'Membership', category: 'Membership', likes: 80, downloads: 15 },
  { id: '3', src: '/images/Smoke/Background_03.webp', alt: 'Training', category: 'Training', likes: 95, downloads: 25 },
  { id: '4', src: '/images/Dust/VintageDust (8).webp', alt: 'Hero Background', category: 'Scenery', featured: true, likes: 200, downloads: 50 },
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
