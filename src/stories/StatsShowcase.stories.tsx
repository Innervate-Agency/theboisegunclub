import type { Meta, StoryObj } from '@storybook/react';
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
    label: 'Active Members',
    value: '1,200+',
    icon: Users,
    change: { value: '+5% this month', trend: 'up' },
  },
  {
    label: 'Targets Thrown',
    value: '2.5M',
    icon: Target,
    description: 'Annually across all disciplines',
  },
  {
    label: 'Tournaments Hosted',
    value: 25,
    icon: Trophy,
    change: { value: '+3 from last year', trend: 'up' },
  },
  {
    label: 'Events This Year',
    value: 150,
    icon: Calendar,
    description: 'Including leagues and corporate outings',
  },
];

export const Default: Story = {
  args: {
    title: 'Our Club by the Numbers',
    subtitle: 'A Thriving Community',
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
