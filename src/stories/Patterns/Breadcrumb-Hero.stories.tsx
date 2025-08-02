import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';
import { Target, Trophy, Users, Calendar, Shield, Star, MapPin, BookOpen, Settings } from 'lucide-react';

const meta: Meta<typeof BreadcrumbHero> = {
  title: 'Design System/Templates/BreadcrumbHero',
  component: BreadcrumbHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero section with integrated breadcrumb navigation for gun club pages with consistent styling and navigation context.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof BreadcrumbHero>;

// Default breadcrumb hero
export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Training', href: '/training' }
    ],
    title: 'Safety Training',
    description: 'Comprehensive firearms safety training for all skill levels',
    icon: Shield,
    backgroundPreset: 'premium',
    badges: ['NRA Certified', 'Required for All Members'],
    backLink: {
      href: '/training',
      label: 'All Training Programs'
    }
  }
};

// Competition results page
export const CompetitionResults: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Competition', href: '/competition' }
    ],
    title: 'March Results',
    description: 'Monthly trap shooting competition results and standings',
    icon: Trophy,
    backgroundPreset: 'mesh',
    badges: ['Competition', 'March 2024'],
    backLink: {
      href: '/competition',
      label: 'All Competitions'
    }
  }
};

// Event registration page
export const EventRegistration: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Events', href: '/events' }
    ],
    title: 'Annual Championship',
    description: 'Register for our biggest competition of the year',
    icon: Calendar,
    backgroundPreset: 'cool',
    badges: ['Annual Event', 'July 15-17', 'Registration Open'],
    backLink: {
      href: '/events',
      label: 'All Events'
    }
  }
};

// Membership application page
export const MembershipApplication: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Membership', href: '/membership' }
    ],
    title: 'Join Our Community',
    description: 'Complete your membership application and become part of our family',
    icon: Users,
    backgroundPreset: 'cool',
    badges: ['Membership', 'New Member Welcome'],
    backLink: {
      href: '/membership',
      label: 'Membership Options'
    }
  }
};

// Facilities tour page
export const FacilitiesTour: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Facilities', href: '/facilities' }
    ],
    title: 'Virtual Tour',
    description: 'Explore our state-of-the-art shooting facilities and amenities',
    icon: MapPin,
    backgroundPreset: 'subtle',
    badges: ['Facilities', 'Virtual Tour', 'Interactive'],
    backLink: {
      href: '/facilities',
      label: 'Facilities Overview'
    }
  }
};

// Training program detail page
export const TrainingProgramDetail: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Training', href: '/training' },
      { label: 'Programs', href: '/training/programs' }
    ],
    title: 'Advanced Marksmanship',
    description: 'Precision shooting techniques for competitive and recreational shooters',
    icon: Target,
    backgroundPreset: 'cool',
    badges: ['8 Week Course', 'Advanced Level', 'Competition Prep'],
    backLink: {
      href: '/training/programs',
      label: 'All Programs'
    }
  }
};

// Club rules page
export const ClubRules: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ],
    title: 'Club Rules & Guidelines',
    description: 'Important safety rules and guidelines for all members and visitors',
    icon: BookOpen,
    backgroundPreset: 'warm',
    badges: ['Safety', 'Required Reading', 'Updated 2024'],
    backLink: {
      href: '/about',
      label: 'About Us'
    }
  }
};

// Pro shop page
export const ProShop: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facilities', href: '/facilities' }
    ],
    title: 'Pro Shop',
    description: 'Quality firearms, ammunition, and accessories for all your shooting needs',
    icon: Settings,
    backgroundPreset: 'warm',
    badges: ['Pro Shop', 'Member Discounts', 'Expert Staff'],
    backLink: {
      href: '/facilities',
      label: 'All Facilities'
    }
  }
};

// Gallery page
export const Gallery: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ],
    title: 'Photo Gallery',
    description: 'Memories from our events, competitions, and daily activities',
    icon: Star,
    backgroundPreset: 'warm',
    badges: ['Photo Gallery', 'Community', 'Memories'],
    backLink: {
      href: '/about',
      label: 'About Us'
    }
  }
};

// Simple breadcrumb hero without back link
export const WithoutBackLink: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' }
    ],
    title: 'Contact Us',
    description: 'Get in touch with our friendly team for any questions or assistance',
    icon: Shield,
    backgroundPreset: 'warm',
    badges: ['Contact', 'Support']
  }
};

// Deep navigation example
export const DeepNavigation: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Training', href: '/training' },
      { label: 'Programs', href: '/training/programs' },
      { label: 'Youth Programs', href: '/training/programs/youth' }
    ],
    title: 'Junior Shooters Program',
    description: 'Safe and fun introduction to shooting sports for young people aged 12-17',
    icon: Users,
    backgroundPreset: 'warm',
    badges: ['Youth Program', 'Ages 12-17', 'Parent Required'],
    backLink: {
      href: '/training/programs/youth',
      label: 'Youth Programs'
    }
  }
}; 