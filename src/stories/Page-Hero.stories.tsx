import type { Meta, StoryObj } from '@storybook/react';
import { PageHero } from '@/components/ui/page-hero';
import { Target, Trophy, Users, Calendar, Shield, Star, MapPin, Clock } from 'lucide-react';

const meta: Meta<typeof PageHero> = {
  title: 'Heroes & Headers/Page Hero',
  component: PageHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Standard page hero component for consistent headers across directory pages with customizable size and actions.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundPreset: {
      control: 'select',
      options: ['warm', 'cool', 'mixed', 'gunclub']
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'premium']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    showScrollIndicator: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PageHero>;

// Default about page hero
export const Default: Story = {
  args: {
    title: 'About Our Community',
    subtitle: 'Treasure Valley Firearms Collective',
    description: 'Connecting the region\'s firearms community since 2017. We\'re your comprehensive digital hub for discovering local businesses, events, and connecting with fellow enthusiasts.',
    badge: 'Regional Authority',
    primaryAction: {
      text: 'Our Mission',
      href: '/about/mission'
    },
    secondaryAction: {
      text: 'Join Community',
      href: '/community'
    },
    icon: Users,
    backgroundPreset: 'gunclub',
    intensity: 'premium',
    size: 'lg',
    showScrollIndicator: true
  }
};

// Events page hero
export const EventsPage: Story = {
  args: {
    title: 'Regional Events',
    subtitle: 'Never Miss the Action',
    description: 'Discover competitions, training sessions, and community events happening across the entire Treasure Valley firearms community.',
    badge: '50+ Monthly Events',
    primaryAction: {
      text: 'Browse Events',
      href: '/events'
    },
    secondaryAction: {
      text: 'Add Your Event',
      href: '/events/submit'
    },
    icon: Calendar,
    backgroundPreset: 'warm',
    intensity: 'medium',
    size: 'md',
    showScrollIndicator: false
  }
};

// Directory page hero
export const DirectoryPage: Story = {
  args: {
    title: 'Business Directory',
    subtitle: 'Find Local Experts',
    description: 'Discover gun shops, ranges, instructors, gunsmiths, and other firearms businesses throughout the Treasure Valley region.',
    badge: '500+ Businesses',
    primaryAction: {
      text: 'Browse Directory',
      href: '/directory'
    },
    secondaryAction: {
      text: 'List Your Business',
      href: '/directory/add'
    },
    icon: Users,
    backgroundPreset: 'mixed',
    intensity: 'premium',
    size: 'lg',
    showScrollIndicator: true
  }
};

// Training page hero
export const TrainingPage: Story = {
  args: {
    title: 'Find Instructors',
    subtitle: 'Professional Training Directory',
    description: 'Connect with certified firearms instructors throughout the region. Compare specialties, credentials, and reviews to find your perfect match.',
    badge: 'Verified Instructors',
    primaryAction: {
      text: 'Browse Instructors',
      href: '/directory/instructors'
    },
    secondaryAction: {
      text: 'Become Instructor',
      href: '/directory/instructors/join'
    },
    icon: Target,
    backgroundPreset: 'cool',
    intensity: 'medium',
    size: 'lg',
    showScrollIndicator: false
  }
};

// Competition page hero
export const CompetitionPage: Story = {
  args: {
    title: 'Competitive Shooting',
    subtitle: 'Test Your Skills',
    description: 'Join our competitive shooting programs and represent Boise Gun Club in regional and state competitions.',
    badge: 'Competition',
    primaryAction: {
      text: 'View Results',
      href: '/competition/results'
    },
    secondaryAction: {
      text: 'Join Team',
      href: '/competition/join'
    },
    icon: Trophy,
    backgroundPreset: 'gunclub',
    intensity: 'premium',
    size: 'xl',
    showScrollIndicator: true
  }
};

// Facilities page hero
export const FacilitiesPage: Story = {
  args: {
    title: 'Our Facilities',
    subtitle: 'State-of-the-Art Equipment',
    description: 'Tour our modern shooting ranges, training facilities, and member amenities.',
    badge: 'Facilities',
    primaryAction: {
      text: 'Virtual Tour',
      href: '/facilities/tour'
    },
    secondaryAction: {
      text: 'Schedule Visit',
      href: '/facilities/visit'
    },
    icon: MapPin,
    backgroundPreset: 'warm',
    intensity: 'medium',
    size: 'md',
    showScrollIndicator: false
  }
};

// Contact page hero
export const ContactPage: Story = {
  args: {
    title: 'Get in Touch',
    subtitle: 'We&apos;re Here to Help',
    description: 'Have questions about membership, training, or events? Contact our friendly team.',
    badge: 'Contact',
    primaryAction: {
      text: 'Send Message',
      href: '/contact/form'
    },
    secondaryAction: {
      text: 'Call Us',
      href: 'tel:208-555-0123'
    },
    icon: Clock,
    backgroundPreset: 'warm',
    intensity: 'subtle',
    size: 'sm',
    showScrollIndicator: false
  }
};

// Rules page hero
export const RulesPage: Story = {
  args: {
    title: 'Safety Rules',
    subtitle: 'Safety First, Always',
    description: 'Review our comprehensive safety guidelines and range rules to ensure a safe experience for everyone.',
    badge: 'Safety',
    primaryAction: {
      text: 'Read Rules',
      href: '/rules/safety'
    },
    secondaryAction: {
      text: 'Safety Course',
      href: '/training/safety'
    },
    icon: Shield,
    backgroundPreset: 'cool',
    intensity: 'medium',
    size: 'md',
    showScrollIndicator: true
  }
};

// Gallery page hero
export const GalleryPage: Story = {
  args: {
    title: 'Photo Gallery',
    subtitle: 'Capturing Memories',
    description: 'Browse photos from our events, competitions, and daily activities at the club.',
    badge: 'Gallery',
    primaryAction: {
      text: 'View All Photos',
      href: '/gallery/all'
    },
    secondaryAction: {
      text: 'Submit Photo',
      href: '/gallery/submit'
    },
    icon: Star,
    backgroundPreset: 'mixed',
    intensity: 'medium',
    size: 'lg',
    showScrollIndicator: false
  }
};

// Small hero variant
export const SmallHero: Story = {
  args: {
    title: 'Quick Info',
    subtitle: 'Range Hours',
    description: 'Check our current operating hours and availability.',
    badge: 'Info',
    primaryAction: {
      text: 'View Hours',
      href: '/hours'
    },
    icon: Clock,
    backgroundPreset: 'warm',
    intensity: 'subtle',
    size: 'sm',
    showScrollIndicator: false
  }
}; 