import type { Meta, StoryObj } from '@storybook/nextjs';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { Target, Shield, Users } from 'lucide-react';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Content & Media/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFeatures = [
  {
    title: 'Comprehensive Directory',
    description: 'Find every gun shop, shooting range, instructor, and gunsmith across the Treasure Valley. All businesses verified and regularly updated.',
    icon: Target,
    link: { text: 'Browse Directory' },
  },
  {
    title: 'Trusted Reviews',
    description: 'Read honest reviews from the community to make informed decisions about local businesses and services.',
    icon: Shield,
    link: { text: 'Read Reviews' },
  },
  {
    title: 'Regional Community',
    description: 'Connect with thousands of firearms enthusiasts throughout the Treasure Valley. Share experiences, find shooting partners, and discover local events.',
    icon: Users,
    link: { text: 'Join Community' },
  },
];

export const Default: Story = {
  args: {
    title: 'Why Choose Our Directory?',
    subtitle: 'Treasure Valley\'s Firearms Hub',
    description: 'Since 2017, we\'ve been connecting the region\'s firearms community. Discover local businesses, find expert services, and connect with fellow enthusiasts.',
    features: sampleFeatures,
  },
  render: (args) => <FeatureGrid {...args} />,
};

export const FourColumns: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        title: 'Expert-Led Training',
        description: 'From beginner lessons to advanced coaching, our certified instructors are here to help you improve your skills and achieve your shooting goals.',
        icon: Target,
        link: { text: 'See Training' },
      },
    ],
    columns: 4,
  },
  render: (args) => <FeatureGrid {...args} />,
};

export const GlassVariant: Story = {
  args: {
    title: 'Our Facilities',
    features: sampleFeatures,
    cardVariant: 'glass',
  },
  render: (args) => (
    <div className="bg-cover bg-center p-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <FeatureGrid {...args} />
    </div>
  ),
};