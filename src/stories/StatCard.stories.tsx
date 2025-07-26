import type { Meta, StoryObj } from '@storybook/nextjs';
import StatCard from '@/components/ui/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Core UI/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Statistical display card component with animated counters. Perfect for displaying membership stats, scores, and achievements.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    value: '247',
    label: 'Active Members',
  },
};

export const PercentageValue: Story = {
  args: {
    value: '89%',
    label: 'Competition Average',
  },
};

export const PlusValue: Story = {
  args: {
    value: '150+',
    label: 'Trap Competitions',
  },
};

export const LargeNumber: Story = {
  args: {
    value: '1,234',
    label: 'Clay Targets Hit',
  },
};

export const GunClubStats: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-rajdhani font-bold text-blued-steel mb-2">TBGC Statistics</h2>
        <p className="text-case-hardened">Real-time club metrics and performance data</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          value="247"
          label="Active Members"
          trend="up"
          trendValue="+12%"
          description="Growing membership base"
        />
        <StatCard
          value="89%"
          label="Competition Average"
          variant="premium"
          trend="up"
          trendValue="+3%"
          description="Club championship performance"
        />
        <StatCard
          value="150+"
          label="Trap Competitions"
          variant="elite"
          description="Annual tournament schedule"
        />
        <StatCard
          value="1,234"
          label="Clay Targets Hit"
          trend="up"
          trendValue="+156"
          description="This month's totals"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const MembershipStats: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        value="247"
        label="Current Members"
      />
      <StatCard
        value="89%"
        label="Renewal Rate"
      />
      <StatCard
        value="15"
        label="New This Month"
      />
    </div>
  ),
};

export const CompetitionStats: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <StatCard
        value="92%"
        label="Skeet Average"
      />
      <StatCard
        value="87%"
        label="Trap Average"
      />
      <StatCard
        value="156"
        label="Regular Competitors"
      />
      <StatCard
        value="23"
        label="Championships Won"
      />
    </div>
  ),
};

export const AnimatedCounters: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">
          Animated Counter Examples
        </h3>
        <p className="text-sm text-case-hardened mb-6">
          These cards animate when they come into view
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          value="2,450"
          label="Total Members"
        />
        <StatCard
          value="95%"
          label="Safety Record"
        />
        <StatCard
          value="500+"
          label="Events Hosted"
        />
        <StatCard
          value="12,000"
          label="Rounds Fired"
        />
      </div>
    </div>
  ),
}; 