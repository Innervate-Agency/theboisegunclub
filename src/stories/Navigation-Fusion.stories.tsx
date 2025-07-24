import type { Meta, StoryObj } from '@storybook/react';
import { NavigationFusion } from '@/components/ui/navigation-fusion';
import { Home, Target, Users, Calendar, Trophy, Shield, MapPin, Phone, BookOpen, Settings } from 'lucide-react';

const meta: Meta<typeof NavigationFusion> = {
  title: 'Navigation/Navigation Fusion',
  component: NavigationFusion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Enhanced navigation component with glass morphism effects and flexible orientation for gun club navigation.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['glass', 'solid', 'minimal']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
};

export default meta;
type Story = StoryObj<typeof NavigationFusion>;

// Main navigation items
const mainNavItems = [
  { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
  { label: 'About', href: '/about', icon: <Shield className="h-4 w-4" /> },
  { label: 'Membership', href: '/membership', icon: <Users className="h-4 w-4" /> },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Training', href: '/training', icon: <Target className="h-4 w-4" /> },
  { label: 'Contact', href: '/contact', icon: <Phone className="h-4 w-4" /> }
];

// Navigation with active state
const activeNavItems = [
  { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
  { label: 'About', href: '/about', icon: <Shield className="h-4 w-4" /> },
  { label: 'Membership', href: '/membership', icon: <Users className="h-4 w-4" />, active: true },
  { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Training', href: '/training', icon: <Target className="h-4 w-4" /> },
  { label: 'Contact', href: '/contact', icon: <Phone className="h-4 w-4" /> }
];

// Competition navigation
const competitionNavItems = [
  { label: 'Results', href: '/competition/results', icon: <Trophy className="h-4 w-4" /> },
  { label: 'Schedule', href: '/competition/schedule', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Registration', href: '/competition/register', icon: <Target className="h-4 w-4" /> },
  { label: 'Rules', href: '/competition/rules', icon: <BookOpen className="h-4 w-4" /> }
];

// Facilities navigation
const facilitiesNavItems = [
  { label: 'Shooting Ranges', href: '/facilities/ranges', icon: <Target className="h-4 w-4" /> },
  { label: 'Training Rooms', href: '/facilities/training', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Pro Shop', href: '/facilities/shop', icon: <Settings className="h-4 w-4" /> },
  { label: 'Location', href: '/facilities/location', icon: <MapPin className="h-4 w-4" /> }
];

// Default horizontal glass navigation
export const Default: Story = {
  args: {
    items: mainNavItems,
    variant: 'glass',
    orientation: 'horizontal'
  }
};

// Horizontal navigation with active state
export const WithActiveState: Story = {
  args: {
    items: activeNavItems,
    variant: 'glass',
    orientation: 'horizontal'
  }
};

// Solid variant navigation
export const SolidVariant: Story = {
  args: {
    items: mainNavItems,
    variant: 'solid',
    orientation: 'horizontal'
  }
};

// Minimal variant navigation
export const MinimalVariant: Story = {
  args: {
    items: mainNavItems,
    variant: 'minimal',
    orientation: 'horizontal'
  }
};

// Vertical navigation
export const VerticalNavigation: Story = {
  render: (args) => (
    <div className="h-96 w-64">
      <NavigationFusion {...args} />
    </div>
  ),
  args: {
    items: mainNavItems,
    variant: 'glass',
    orientation: 'vertical'
  }
};

// Vertical solid navigation
export const VerticalSolid: Story = {
  render: (args) => (
    <div className="h-96 w-64">
      <NavigationFusion {...args} />
    </div>
  ),
  args: {
    items: mainNavItems,
    variant: 'solid',
    orientation: 'vertical'
  }
};

// Competition navigation
export const CompetitionNavigation: Story = {
  args: {
    items: competitionNavItems,
    variant: 'glass',
    orientation: 'horizontal'
  }
};

// Facilities navigation
export const FacilitiesNavigation: Story = {
  args: {
    items: facilitiesNavItems,
    variant: 'glass',
    orientation: 'horizontal'
  }
};

// Sidebar navigation
export const SidebarNavigation: Story = {
  render: (args) => (
    <div className="h-96 w-64">
      <NavigationFusion {...args} />
    </div>
  ),
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: <Home className="h-4 w-4" />, active: true },
      { label: 'My Profile', href: '/profile', icon: <Users className="h-4 w-4" /> },
      { label: 'My Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
      { label: 'Training Progress', href: '/training', icon: <Target className="h-4 w-4" /> },
      { label: 'Billing', href: '/billing', icon: <Settings className="h-4 w-4" /> }
    ],
    variant: 'minimal',
    orientation: 'vertical'
  }
};

// Mobile navigation
export const MobileNavigation: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <NavigationFusion {...args} />
    </div>
  ),
  args: {
    items: [
      { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
      { label: 'Events', href: '/events', icon: <Calendar className="h-4 w-4" /> },
      { label: 'Training', href: '/training', icon: <Target className="h-4 w-4" /> },
      { label: 'Contact', href: '/contact', icon: <Phone className="h-4 w-4" /> }
    ],
    variant: 'solid',
    orientation: 'horizontal'
  }
}; 