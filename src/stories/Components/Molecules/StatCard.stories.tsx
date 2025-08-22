import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StatCard from '@/components/ui/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Design System/Molecules/StatCard',
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
  tags: ['autodocs', 'stable', 'molecule', 'display', 'community'],
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
    <div className="space-y-md p-md">
      <div className="text-center">
        <h2 className="text-display-md font-rajdhani font-bold text-blued-steel mb-xs">TBGC Statistics</h2>
        <p className="text-warning-amber">Real-time club metrics and performance data</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
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
          variant="default"
          trend="up"
          trendValue="+3%"
          description="Club championship performance"
        />
        <StatCard
          value="150+"
          label="Trap Competitions"
          variant="default"
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
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
    <div className="space-y-lg">
      <div className="text-center">
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">
          Animated Counter Examples
        </h3>
        <p className="text-body-sm text-warning-amber mb-md">
          These cards animate when they come into view
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base">
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