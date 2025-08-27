import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MegaHero } from '@/components/ui/mega-hero';
import { CalendarDaysIcon, CursorArrowRaysIcon, ShieldCheckIcon, StarIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof MegaHero> = {
  title: 'Design System/Organisms/Mega Hero',
  component: MegaHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Large hero section component with customizable backgrounds, CTAs, and content for impactful landing pages.'
      }
    }
  },
  tags: ['autodocs', 'stable', 'organism', 'display', 'business'],
  argTypes: {
    backgroundPreset: {
      control: 'select',
      options: ['warm', 'cool', 'mixed', 'gunclub']
    },
    height: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    centerContent: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof MegaHero>;

// Default hero for main landing page
export const Default: Story = {
  args: {
    title: 'The Boise Gun Club',
    subtitle: 'Treasure Valley Firearms Collective',
    description: 'Your comprehensive digital hub connecting ALL Treasure Valley firearms communities. Discover local gun shops, ranges, instructors, events, and connect with fellow enthusiasts across our premier firearms region.',
    primaryCTA: {
      text: 'Explore Directory',
    },
    secondaryCTA: {
      text: 'Join Community',
    },
    badges: ['500+ Businesses', 'Regional Coverage', 'All Disciplines'],
    backgroundPreset: 'gunclub',
    height: 'xl',
    centerContent: true
  }
};

// Competition focused hero
export const CompetitionHero: Story = {
  args: {
    title: 'Treasure Valley Competitions',
    subtitle: 'Find Every Match & Tournament',
    description: 'Discover competitive shooting events across the entire Treasure Valley. From local club matches to state championships, find competitions that match your interests and skill level.',
    primaryCTA: {
      text: 'View All Events',
      icon: <CalendarDaysIcon className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Find Clubs',
      icon: <UsersIcon className="h-4 w-4" />
    },
    badges: ['50+ Events Monthly', 'All Disciplines', 'Regional Coverage'],
    backgroundPreset: 'cool',
    height: 'lg',
    centerContent: true,
    icon: <TrophyIcon className="h-8 w-8" />
  }
};

// Training focused hero
export const TrainingHero: Story = {
  args: {
    title: 'Find Expert Instructors',
    subtitle: 'Professional Training Directory',
    description: 'Connect with certified firearms instructors throughout the Treasure Valley. Compare credentials, specialties, and reviews to find the perfect training for your needs.',
    primaryCTA: {
      text: 'Browse Instructors',
      icon: <ShieldCheckIcon className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Training Centers',
      icon: <CursorArrowRaysIcon className="h-4 w-4" />
    },
    badges: ['Verified Instructors', 'All Specialties', 'Regional Network'],
    backgroundPreset: 'warm',
    height: 'md',
    centerContent: true,
    icon: <ShieldCheckIcon className="h-8 w-8" />
  }
};

// Membership promotion hero
export const MembershipPromotion: Story = {
  args: {
    title: 'Premium Directory Access',
    subtitle: 'Limited Time: 50% Off First Year',
    description: 'Unlock premium features including advanced business search, exclusive deals from local shops, priority event notifications, and direct messaging with vendors.',
    primaryCTA: {
      text: 'Upgrade Now',
      icon: <StarIcon className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'View Benefits',
    },
    badges: ['Exclusive Deals', 'Priority Access', 'Premium Support'],
    backgroundPreset: 'mixed',
    height: 'lg',
    centerContent: true,
    icon: <UsersIcon className="h-8 w-8" />
  }
};

// Event announcement hero
export const EventAnnouncement: Story = {
  args: {
    title: 'Treasure Valley Gun Show',
    subtitle: 'Registration Now Open',
    description: 'Join the region\'s largest firearms event featuring 200+ vendors, educational seminars, and networking opportunities. Connect with businesses and enthusiasts from across the valley.',
    primaryCTA: {
      text: 'Get Tickets',
      icon: <CalendarDaysIcon className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Vendor InformationCircleIcon',
    },
    badges: ['200+ Vendors', 'Educational Seminars', 'Regional Event'],
    backgroundPreset: 'gunclub',
    height: 'lg',
    centerContent: true,
    icon: <CalendarDaysIcon className="h-8 w-8" />
  }
};

// Compact hero variant
export const CompactHero: Story = {
  args: {
    title: 'New to Firearms?',
    subtitle: 'Find Your Path',
    description: 'Discover beginner-friendly ranges, certified instructors, and welcoming communities perfect for newcomers to the shooting sports.',
    primaryCTA: {
      text: 'Find Beginner Resources',
    },
    badges: ['Beginner-Friendly Directory'],
    backgroundPreset: 'warm',
    height: 'sm',
    centerContent: true,
    icon: <CursorArrowRaysIcon className="h-6 w-6" />
  }
};

// Full screen hero
export const FullScreenHero: Story = {
  args: {
    title: 'Treasure Valley Firearms Hub',
    subtitle: 'Where Community Connects',
    description: 'Discover the most comprehensive firearms resource in Idaho. Connect with top-rated businesses, find exclusive deals, join local events, and become part of our thriving regional community.',
    primaryCTA: {
      text: 'Explore Directory',
      icon: <CursorArrowRaysIcon className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Join Community',
      icon: <UsersIcon className="h-4 w-4" />
    },
    badges: ['500+ Businesses', 'Regional Authority', 'Community Driven'],
    backgroundPreset: 'gunclub',
    height: 'full',
    centerContent: true,
    icon: <StarIcon className="h-8 w-8" />
  }
}; 