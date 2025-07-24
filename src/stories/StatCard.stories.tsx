import type { Meta, StoryObj } from '@storybook/react';
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        value="247"
        label="Active Members"
      />
      <StatCard
        value="89%"
        label="Competition Average"
      />
      <StatCard
        value="150+"
        label="Trap Competitions"
      />
      <StatCard
        value="1,234"
        label="Clay Targets Hit"
      />
    </div>
  ),
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
        <p className="text-sm text-desert-cliff-brown mb-6">
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