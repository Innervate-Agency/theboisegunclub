import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard, PricingTable, PricingFusion } from '@/components/ui/pricing-table';
import { Target, Trophy, Crown, Star, Users, Shield } from 'lucide-react';

// Sample gun club membership plans
const samplePlans = [
  {
    id: 'basic',
    name: 'Basic Membership',
    description: 'Perfect for beginners and casual shooters',
    price: {
      monthly: 45,
      annually: 450,
      setup: 50
    },
    icon: Target,
    features: [
      { name: 'Range Access', included: true, description: 'Access to all shooting ranges' },
      { name: 'Monthly Guest Passes', included: 2, description: 'Bring friends to try shooting' },
      { name: 'Equipment Rental', included: true, description: 'Firearms and safety equipment' },
      { name: 'Basic Training', included: 'limited', description: 'Intro safety course included' },
      { name: 'Competition Entry', included: false, description: 'Club competitions not included' },
      { name: 'Private Lessons', included: false, description: 'One-on-one instruction' },
      { name: 'Gunsmithing Services', included: false, description: 'Equipment maintenance' }
    ],
    ctaText: 'Start Basic',
    ctaVariant: 'outline' as const
  },
  {
    id: 'standard',
    name: 'Standard Membership',
    description: 'Great for regular shooters and enthusiasts',
    price: {
      monthly: 85,
      annually: 850,
      setup: 25
    },
    icon: Trophy,
    features: [
      { name: 'Range Access', included: true, description: 'Access to all shooting ranges' },
      { name: 'Monthly Guest Passes', included: 5, description: 'Bring friends to try shooting' },
      { name: 'Equipment Rental', included: true, description: 'Firearms and safety equipment' },
      { name: 'Basic Training', included: true, description: 'Full safety course included' },
      { name: 'Competition Entry', included: true, description: 'Enter club competitions' },
      { name: 'Private Lessons', included: 2, description: 'Two lessons per month' },
      { name: 'Gunsmithing Services', included: 'limited', description: 'Basic maintenance included' }
    ],
    popular: true,
    badge: 'Most Popular',
    color: 'var(--lahoma-orange)',
    ctaText: 'Choose Standard',
    ctaVariant: 'default' as const
  },
  {
    id: 'premium',
    name: 'Premium Membership',
    description: 'For serious competitors and frequent shooters',
    price: {
      monthly: 125,
      annually: 1250,
      setup: 0
    },
    icon: Crown,
    features: [
      { name: 'Range Access', included: true, description: 'Priority access to all ranges' },
      { name: 'Monthly Guest Passes', included: 10, description: 'Bring friends to try shooting' },
      { name: 'Equipment Rental', included: true, description: 'Premium firearms and equipment' },
      { name: 'Basic Training', included: true, description: 'Advanced training courses' },
      { name: 'Competition Entry', included: true, description: 'All competitions included' },
      { name: 'Private Lessons', included: true, description: 'Unlimited private instruction' },
      { name: 'Gunsmithing Services', included: true, description: 'Full service included' }
    ],
    recommended: true,
    badge: 'Best Value',
    color: 'brass-yellow',
    ctaText: 'Go Premium',
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
        component: 'Comprehensive pricing table components for gun club membership plans with multiple display variants.'
      }
    }
  },
  tags: ['autodocs'],
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

// Family membership plan
export const FamilyMembership: Story = {
  args: {
    plan: {
      id: 'family',
      name: 'Family Membership',
      description: 'Perfect for families with multiple shooters',
      price: {
        monthly: 150,
        annually: 1500,
        setup: 0
      },
      icon: Users,
      features: [
        { name: 'Range Access', included: true, description: 'Access for up to 4 family members' },
        { name: 'Monthly Guest Passes', included: 8, description: 'Bring friends to try shooting' },
        { name: 'Equipment Rental', included: true, description: 'Firearms and safety equipment' },
        { name: 'Basic Training', included: true, description: 'Safety courses for all members' },
        { name: 'Competition Entry', included: true, description: 'Family team competitions' },
        { name: 'Private Lessons', included: 4, description: 'Lessons for each family member' },
        { name: 'Gunsmithing Services', included: 'limited', description: 'Basic maintenance included' }
      ],
      badge: 'Family Deal',
      color: 'scope-blue',
      ctaText: 'Choose Family',
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