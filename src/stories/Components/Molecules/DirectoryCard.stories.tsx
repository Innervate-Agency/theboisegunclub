import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DirectoryCard } from '@/components/ui/DirectoryCard';

const meta: Meta<typeof DirectoryCard> = {
  title: 'Design System/Molecules/DirectoryCard',
  component: DirectoryCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DirectoryCard for business, club, or instructor listings. Follows BGCv4 design system, supports all variants, and is fully accessible.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    badgeVariant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass', 'success', 'warning', 'error', 'info'],
    },
  },
  tags: ['autodocs', 'stable', 'molecule', 'display', 'directory', 'vendor', 'community'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <DirectoryCard
        name="Boise Gun Club"
        type="Trap & Skeet Range"
        contact="info@boisegunclub.com"
        imageUrl="/images/Dust/VintageDust (7).webp"
        status="Active"
        badgeVariant="success"
        variant="outline"
      />
      <DirectoryCard
        name="Eagle Firearms"
        type="Vendor"
        contact="sales@eaglefirearms.com"
        imageUrl="/images/Fractal/29.webp"
        status="Premium"
        badgeVariant="premium"
        variant="default"
      />
      <DirectoryCard
        name="Snake River Shooters"
        type="Competition Club"
        contact="contact@snakerivershooters.org"
        imageUrl="/images/PixelHeat/halfton-heat-FLAT-12.webp"
        status="Elite"
        badgeVariant="elite"
        variant="default"
      />
      <DirectoryCard
        name="Glass Range"
        type="Indoor Range"
        contact="glass@range.com"
        status="Open"
        badgeVariant="info"
        variant="secondary"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-md max-w-md">
      <DirectoryCard
        name="Caldwell Sportsmen"
        type="Outdoor Range"
        contact="caldwell@sportsmen.org"
        status="Active"
        badgeVariant="success"
        size="sm"
      />
      <DirectoryCard
        name="Nampa Gun Shop"
        type="Vendor"
        contact="shop@nampagun.com"
        status="Premium"
        badgeVariant="premium"
        size="default"
      />
      <DirectoryCard
        name="Treasure Valley Instructors"
        type="Instructor"
        contact="tv.instructors@gmail.com"
        status="Elite"
        badgeVariant="elite" />
    </div>
  ),
};
