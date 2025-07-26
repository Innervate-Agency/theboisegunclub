import type { Meta, StoryObj } from '@storybook/nextjs';
import { StatsShowcase } from '@/components/ui/stats-showcase';
import { Users, Target, Trophy, Calendar } from 'lucide-react';

const meta: Meta<typeof StatsShowcase> = {
  title: 'Data Display/StatsShowcase',
  component: StatsShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleStats = [
  {
    label: 'Listed Businesses',
    value: '500+',
    icon: Users,
    change: { value: '+12% this month', trend: 'up' },
  },
  {
    label: 'Community Members',
    value: '15k+',
    icon: Target,
    description: 'Active users across the platform',
  },
  {
    label: 'Regional Events',
    value: 85,
    icon: Trophy,
    change: { value: '+15 from last year', trend: 'up' },
  },
  {
    label: 'Monthly Listings',
    value: 250,
    icon: Calendar,
    description: 'New business and event submissions',
  },
];

export const Default: Story = {
  args: {
    title: 'Treasure Valley Firearms Hub',
    subtitle: 'Regional Community Statistics',
    stats: sampleStats,
  },
  render: (args) => <StatsShowcase {...args} />,
};

export const FusionLayout: Story = {
  args: {
    title: 'Fusion Layout',
    stats: sampleStats,
    layout: 'fusion',
  },
  render: (args) => <StatsShowcase {...args} />,
};

export const InlineLayout: Story = {
  args: {
    title: 'Inline Layout',
    stats: sampleStats,
    layout: 'inline',
  },
  render: (args) => <StatsShowcase {...args} />,
};
