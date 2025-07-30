import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PricingCard, PricingTable, PricingFusion } from '@/components/ui/pricing-table';
import { Target, Trophy, Crown, Star, Users, Shield } from 'lucide-react';

// TBGC Business Directory Subscription Tiers
const samplePlans = [
  {
    id: 'free',
    name: 'Free Listing',
    description: 'Basic profile for any store, business, range, or service',
    price: {
      monthly: 0,
      annually: 0,
      setup: 0
    },
    icon: Target,
    features: [
      { name: 'Basic Directory Listing', included: true, description: 'Name, address, phone, hours' },
      { name: 'Business Category', included: true, description: 'Searchable business type' },
      { name: 'Customer Reviews', included: true, description: 'Display customer ratings' },
      { name: 'Photo Gallery', included: 1, description: 'One business photo' },
      { name: 'Event Promotion', included: false, description: 'Promote events and classes' }
    ],
    ctaText: 'Get Listed Free',
    ctaVariant: 'outline' as const
  },
  {
    id: 'silver',
    name: 'Silver Profile',
    description: 'Enhanced listing with content and advertising features',
    price: {
      monthly: 49.95,
      annually: 499,
      setup: 0
    },
    icon: Trophy,
    features: [
      { name: 'Enhanced Directory Profile', included: true, description: 'Detailed business description' },
      { name: 'Photo Gallery', included: 10, description: 'Up to 10 business photos' },
      { name: 'Event Promotion', included: true, description: 'Promote events and classes' },
      { name: 'Social Media Links', included: true, description: 'Link to your social accounts' },
      { name: 'Priority Support', included: true, description: 'Faster response times' }
    ],
    popular: true,
    badge: 'Most Popular',
    color: 'rgb(242, 135, 5)', // copper-orange
    ctaText: 'Upgrade to Silver',
    ctaVariant: 'default' as const
  },
  {
    id: 'gold',
    name: 'Gold Profile',
    description: 'Premium listing with featured placement and analytics',
    price: {
      monthly: 99.95,
      annually: 999,
      setup: 0
    },
    icon: Crown,
    features: [
      { name: 'Featured Directory Placement', included: true, description: 'Top placement in search results' },
      { name: 'Unlimited Photos & Videos', included: true, description: 'Showcase your business fully' },
      { name: 'Advanced Event Management', included: true, description: 'Event calendar integration' },
      { name: 'Business Analytics', included: true, description: 'Track views and engagement' },
      { name: 'Custom Business Page', included: true, description: 'Branded business landing page' }
    ],
    recommended: true,
    badge: 'Best Value',
    color: 'brass-yellow',
    ctaText: 'Go Gold',
    ctaVariant: 'default' as const
  },
  {
    id: 'platinum',
    name: 'Platinum Profile',
    description: 'Enterprise solution for major retailers and ranges',
    price: {
      monthly: 199.95,
      annually: 1999,
      setup: 0
    },
    icon: Star,
    features: [
      { name: 'Premium Directory Placement', included: true, description: 'Top tier search placement' },
      { name: 'Multi-Location Support', included: true, description: 'Manage multiple locations' },
      { name: 'Advanced Marketing Tools', included: true, description: 'Email campaigns and promotions' },
      { name: 'Dedicated Account Manager', included: true, description: 'Personal support representative' },
      { name: 'API Integration', included: true, description: 'Connect with your existing systems' }
    ],
    badge: 'Enterprise',
    color: 'safety-red',
    ctaText: 'Contact Sales',
    ctaVariant: 'default' as const
  }
];

const meta: Meta<typeof PricingCard> = {
  title: 'Content & Media/Pricing Table',
  component: PricingCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Business directory subscription tiers for TBGC platform vendors with multiple display variants.'
      }
    }
  },
  tags: ['autodocs', 'stable', 'organism', 'display', 'business'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed', 'fusion']
    },
    isAnnual: {
      control: 'boolean'
    },
    showFeatures: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

// Individual pricing card - default variant
export const Default: Story = {
  args: {
    plan: samplePlans[1],
    isAnnual: false,
    variant: 'default',
    showFeatures: true
  }
};

// Individual pricing card - annual pricing
export const Annual: Story = {
  args: {
    plan: samplePlans[1],
    isAnnual: true,
    variant: 'default',
    showFeatures: true
  }
};

// Compact pricing card
export const Compact: Story = {
  args: {
    plan: samplePlans[0],
    isAnnual: false,
    variant: 'compact',
    showFeatures: false
  }
};

// Detailed pricing card
export const Detailed: Story = {
  args: {
    plan: samplePlans[2],
    isAnnual: false,
    variant: 'detailed',
    showFeatures: true
  }
};

// Fusion variant
export const Fusion: Story = {
  args: {
    plan: samplePlans[1],
    isAnnual: false,
    variant: 'fusion',
    showFeatures: true
  }
};

// Complete pricing table
export const PricingTableComplete: StoryObj<typeof PricingTable> = {
  render: (args) => (
    <div className="w-full max-w-6xl">
      <PricingTable {...args} />
    </div>
  ),
  args: {
    plans: samplePlans,
    showAnnualDiscount: true,
    showFeatureComparison: true,
    variant: 'default'
  }
};

// Pricing table without feature comparison
export const PricingTableSimple: StoryObj<typeof PricingTable> = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <PricingTable {...args} />
    </div>
  ),
  args: {
    plans: samplePlans,
    showAnnualDiscount: true,
    showFeatureComparison: false,
    variant: 'compact'
  }
};

// Fusion pricing table
export const PricingFusionComplete: StoryObj<typeof PricingFusion> = {
  render: (args) => (
    <div className="w-full max-w-6xl">
      <PricingFusion {...args} />
    </div>
  ),
  args: {
    plans: samplePlans,
    showAnnualDiscount: true,
    showFeatureComparison: true
  }
};

// Platinum tier for major businesses
export const PlatinumProfile: Story = {
  args: {
    plan: {
      id: 'platinum',
      name: 'Platinum Profile',
      description: 'Enterprise solution for major retailers and ranges',
      price: {
        monthly: 199.95,
        annually: 1999,
        setup: 0
      },
      icon: Users,
      features: [
        { name: 'Premium Directory Placement', included: true, description: 'Top tier search placement' },
        { name: 'Multi-Location Support', included: true, description: 'Manage multiple locations' },
        { name: 'Advanced Marketing Tools', included: true, description: 'Email campaigns and promotions' },
        { name: 'Dedicated Account Manager', included: true, description: 'Personal support representative' },
        { name: 'API Integration', included: true, description: 'Connect with your existing systems' }
      ],
      badge: 'Enterprise',
      color: 'scope-blue',
      ctaText: 'Contact Sales',
      ctaVariant: 'default' as const
    },
    isAnnual: false,
    variant: 'default',
    showFeatures: true
  }
};

// Law enforcement membership
export const LawEnforcementMembership: Story = {
  args: {
    plan: {
      id: 'law-enforcement',
      name: 'Law Enforcement',
      description: 'Special pricing for active law enforcement officers',
      price: {
        monthly: 65,
        annually: 650,
        setup: 0
      },
      icon: Shield,
      features: [
        { name: 'Range Access', included: true, description: 'Priority access to all ranges' },
        { name: 'Monthly Guest Passes', included: 3, description: 'Bring colleagues for training' },
        { name: 'Equipment Rental', included: true, description: 'Tactical firearms and equipment' },
        { name: 'Basic Training', included: true, description: 'Tactical training courses' },
        { name: 'Competition Entry', included: true, description: 'LE-specific competitions' },
        { name: 'Private Lessons', included: 'unlimited', description: 'Tactical instruction' },
        { name: 'Gunsmithing Services', included: true, description: 'Full service included' }
      ],
      badge: 'First Responder',
      color: 'safety-red',
      ctaText: 'Apply Now',
      ctaVariant: 'default' as const
    },
    isAnnual: false,
    variant: 'default',
    showFeatures: true
  }
}; 