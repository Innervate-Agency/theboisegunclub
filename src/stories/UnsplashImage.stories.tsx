import type { Meta, StoryObj } from '@storybook/react';
import LocalImage, { HeroImage, EventImage, TrainingImage, MembershipImage } from '@/components/ui/UnsplashImage';

const meta: Meta<typeof LocalImage> = {
  title: 'Content & Media/Unsplash Image',
  component: LocalImage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Local image component with loading states and fallbacks, optimized for gun club imagery.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'select',
      options: ['lazy', 'eager']
    },
    priority: {
      control: 'boolean'
    },
    fill: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof LocalImage>;

// Default local image with fallback
export const Default: Story = {
  args: {
    fallback: '/images/hero-bg.webp',
    alt: 'Boise Gun Club Range',
    width: 600,
    height: 400,
    className: 'rounded-lg',
    priority: false,
    quality: 85,
    loading: 'lazy'
  }
};

// Hero image variant
export const HeroImageVariant: StoryObj<typeof HeroImage> = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <HeroImage {...args} />
    </div>
  ),
  args: {
    className: 'rounded-xl shadow-lg',
    width: 1200,
    height: 600,
    priority: true,
    quality: 95
  }
};

// Event image variant
export const EventImageVariant: StoryObj<typeof EventImage> = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <EventImage {...args} />
    </div>
  ),
  args: {
    className: 'rounded-lg',
    width: 800,
    height: 500,
    priority: false,
    quality: 85
  }
};

// Training image variant
export const TrainingImageVariant: StoryObj<typeof TrainingImage> = {
  render: (args) => (
    <div className="w-full max-w-lg">
      <TrainingImage {...args} />
    </div>
  ),
  args: {
    className: 'rounded-lg',
    width: 600,
    height: 400,
    priority: false,
    quality: 85
  }
};

// Membership image variant
export const MembershipImageVariant: StoryObj<typeof MembershipImage> = {
  render: (args) => (
    <div className="w-full max-w-md">
      <MembershipImage {...args} />
    </div>
  ),
  args: {
    className: 'rounded-lg',
    width: 400,
    height: 300,
    priority: false,
    quality: 85
  }
};

// Square aspect ratio
export const SquareAspect: Story = {
  args: {
    fallback: '/images/membership.jpg',
    alt: 'Club Membership Benefits',
    width: 400,
    height: 400,
    className: 'rounded-lg',
    priority: false,
    quality: 85,
    loading: 'lazy'
  }
};

// Wide aspect ratio
export const WideAspect: Story = {
  args: {
    fallback: '/images/events.jpg',
    alt: 'Shooting Competition Event',
    width: 800,
    height: 300,
    className: 'rounded-lg',
    priority: false,
    quality: 85,
    loading: 'lazy'
  }
};

// High priority loading
export const PriorityLoading: Story = {
  args: {
    fallback: '/images/hero-bg.webp',
    alt: 'Boise Gun Club Main Range',
    width: 600,
    height: 400,
    className: 'rounded-lg',
    priority: true,
    quality: 95,
    loading: 'eager'
  }
};

// High quality image
export const HighQuality: Story = {
  args: {
    fallback: '/images/training.jpg',
    alt: 'Professional Training Session',
    width: 600,
    height: 400,
    className: 'rounded-lg',
    priority: false,
    quality: 100,
    loading: 'lazy'
  }
};

// Small image with loading
export const SmallImage: Story = {
  args: {
    fallback: '/images/membership.jpg',
    alt: 'Club Member',
    width: 200,
    height: 200,
    className: 'rounded-full',
    priority: false,
    quality: 85,
    loading: 'lazy'
  }
};

// Large banner image
export const BannerImage: Story = {
  args: {
    fallback: '/images/hero-bg.webp',
    alt: 'Boise Gun Club Facilities',
    width: 1200,
    height: 400,
    className: 'rounded-lg',
    priority: false,
    quality: 90,
    loading: 'lazy'
  }
}; 