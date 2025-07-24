import type { Meta, StoryObj } from '@storybook/react';
import { 
  Badge, 
  ClassificationBadge,
  StatusBadge,
  ScoreBadge
} from '@/components/ui/badge';
import { Trophy, Target, Award, CheckCircle, XCircle, Clock, Star, Zap } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Core UI/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium Badge component with animations, brand gradients, and gun club specific presets for classifications, status indicators, and scores.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'premium', 'elite', 'glass', 'outline', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
    animate: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
    shimmer: {
      control: 'boolean',
    },
    dismissible: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Badge Variants</h2>
      
      <div className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="premium" shimmer>Premium</Badge>
        <Badge variant="elite">Elite</Badge>
        <Badge variant="glass">Glass</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Size Options</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Badge variant="success" size="sm">Small</Badge>
          <Badge variant="warning" size="default">Default</Badge>
          <Badge variant="info" size="lg">Large</Badge>
          <Badge variant="premium" size="xl" shimmer>Extra Large</Badge>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="success" size="sm" icon={<CheckCircle className="h-2.5 w-2.5" />}>Small with Icon</Badge>
          <Badge variant="warning" size="default" icon={<Clock className="h-3 w-3" />}>Default with Icon</Badge>
          <Badge variant="info" size="lg" icon={<Star className="h-3.5 w-3.5" />}>Large with Icon</Badge>
          <Badge variant="premium" size="xl" icon={<Zap className="h-4 w-4" />} shimmer>XL with Icon</Badge>
        </div>
      </div>
    </div>
  ),
};

// Interactive Features Component
const InteractiveFeaturesComponent = () => {
  const [badges, setBadges] = useState([
    { id: 1, text: "Dismissible Badge", variant: "info" as const },
    { id: 2, text: "Another Badge", variant: "warning" as const },
    { id: 3, text: "Premium Badge", variant: "premium" as const },
  ]);

  const removeBadge = (id: number) => {
    setBadges(badges.filter(badge => badge.id !== id));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Interactive Features</h2>
      
      {/* Animated Badges */}
      <div className="space-y-4">
        <h3 className="font-rajdhani font-semibold">Animated Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="success" animate icon={<CheckCircle className="h-3 w-3" />}>Animated</Badge>
          <Badge variant="warning" pulse>Pulsing</Badge>
          <Badge variant="premium" shimmer animate>Premium Shimmer</Badge>
          <Badge variant="info" animate>Hover to Scale</Badge>
        </div>
      </div>

      {/* Dismissible Badges */}
      <div className="space-y-4">
        <h3 className="font-rajdhani font-semibold">Dismissible Badges</h3>
        <div className="flex flex-wrap gap-4">
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              variant={badge.variant}
              dismissible
              animate
              onDismiss={() => removeBadge(badge.id)}
              shimmer={badge.variant === 'premium'}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
        {badges.length === 0 && (
          <p className="text-muted-foreground text-sm">All badges dismissed! Refresh to reset.</p>
        )}
      </div>
    </div>
  );
};

export const InteractiveFeatures: Story = {
  render: () => <InteractiveFeaturesComponent />,
};

// Gun Club Classifications
export const Classifications: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Shooting Classifications</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <ClassificationBadge classification="Master" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">95%+ Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="AA" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">85-94% Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="A" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">75-84% Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="B" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">65-74% Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="C" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">50-64% Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="D" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">35-49% Average</p>
        </div>
        <div className="text-center">
          <ClassificationBadge classification="Novice" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Under 35%</p>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-xl p-6 border border-border/20">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-5 w-5 text-color-leonard-yellow" />
          <h3 className="font-rajdhani font-semibold">Classification Examples</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Mike Thompson</span>
            <ClassificationBadge classification="Master" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Sarah Williams</span>
            <ClassificationBadge classification="AA" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Tom Rodriguez</span>
            <ClassificationBadge classification="A" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Lisa Chen</span>
            <ClassificationBadge classification="B" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Membership Status
export const MembershipStatus: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Membership Status</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="text-center">
          <StatusBadge status="Active" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Full Access</p>
        </div>
        <div className="text-center">
          <StatusBadge status="Premium" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Elite Benefits</p>
        </div>
        <div className="text-center">
          <StatusBadge status="Trial" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">30-Day Trial</p>
        </div>
        <div className="text-center">
          <StatusBadge status="Inactive" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Account Paused</p>
        </div>
        <div className="text-center">
          <StatusBadge status="Suspended" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Rule Violation</p>
        </div>
        <div className="text-center">
          <StatusBadge status="Expired" size="lg" animate />
          <p className="text-sm text-muted-foreground mt-2">Renewal Required</p>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-xl p-6 border border-border/20">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-5 w-5 text-scope-blue" />
          <h3 className="font-rajdhani font-semibold">Member Directory</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">John Parker (Individual)</span>
            <StatusBadge status="Premium" showIcon />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Rodriguez Family</span>
            <StatusBadge status="Active" showIcon />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">TechCorp Team</span>
            <StatusBadge status="Active" showIcon />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Amy Davis (Youth)</span>
            <StatusBadge status="Trial" showIcon />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Mike Wilson</span>
            <StatusBadge status="Suspended" showIcon />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Score Badges
export const ScoreBadges: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Score Indicators</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <ScoreBadge score={25} maxScore={25} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Perfect Round</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={23} maxScore={25} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Excellent</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={19} maxScore={25} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Good</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={12} maxScore={25} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Needs Work</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <ScoreBadge score={96} maxScore={100} showPercentage size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Sporting Clays</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={87} maxScore={100} showPercentage size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Good Round</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={72} maxScore={100} showPercentage size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Average</p>
        </div>
        <div className="text-center">
          <ScoreBadge score={45} maxScore={100} showPercentage size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Beginner</p>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-xl p-6 border border-border/20">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-brand-green" />
          <h3 className="font-rajdhani font-semibold">Recent Scores</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Trap Round 1</span>
            <ScoreBadge score={24} maxScore={25} animate />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Skeet Round 2</span>
            <ScoreBadge score={21} maxScore={25} animate />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Sporting Clays</span>
            <ScoreBadge score={89} maxScore={100} showPercentage animate />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">5-Stand</span>
            <ScoreBadge score={23} maxScore={25} animate />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Event Badges
export const EventBadges: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Event & Tournament Badges</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tournament Results */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-5 w-5 text-brass-yellow" />
            <h3 className="font-rajdhani font-semibold">Tournament Results</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">1st Place</span>
              <Badge variant="premium" icon={<Trophy className="h-3 w-3" />} shimmer animate>
                Champion
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">2nd Place</span>
              <Badge variant="success" icon={<Award className="h-3 w-3" />} animate>
                Runner-up
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">3rd Place</span>
              <Badge variant="warning" icon={<Star className="h-3 w-3" />} animate>
                Third
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Top 10</span>
              <Badge variant="info" animate>
                Finalist
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Event Status */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-rifling-green" />
            <h3 className="font-rajdhani font-semibold">Event Status</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Registration</span>
              <Badge variant="success" pulse>
                Open
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Spring Championship</span>
              <Badge variant="warning" icon={<Clock className="h-3 w-3" />}>
                Few Spots
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Monthly League</span>
              <Badge variant="error" icon={<XCircle className="h-3 w-3" />}>
                Full
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Youth Training</span>
              <Badge variant="info">
                Upcoming
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievement Badges */}
      <div className="bg-gradient-to-br from-brass-yellow/10 to-copper-orange/10 rounded-xl p-6 border border-brass-yellow/20">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-color-lahoma-orange" />
          <h3 className="font-rajdhani font-bold">Achievement Unlocked!</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Badge variant="premium" size="lg" shimmer animate icon={<Trophy className="h-4 w-4" />}>
              Perfectionist
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">25/25 Trap Round</p>
          </div>
          <div className="text-center">
            <Badge variant="success" size="lg" animate icon={<Target className="h-4 w-4" />}>
              Marksman
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">90%+ Average</p>
          </div>
          <div className="text-center">
            <Badge variant="warning" size="lg" animate icon={<Star className="h-4 w-4" />}>
              Consistent
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">10 Rounds Straight</p>
          </div>
          <div className="text-center">
            <Badge variant="info" size="lg" animate icon={<Award className="h-4 w-4" />}>
              Competitor
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">5 Tournaments</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Elite Showcase
export const EliteShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Elite Badge Variants</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Premium vs Elite Comparison */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <h3 className="font-heading font-semibold mb-4">Premium vs Elite</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Premium Badge</span>
              <Badge variant="premium" shimmer size="lg">Premium</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Elite Badge</span>
              <Badge variant="elite" size="lg">Elite</Badge>
            </div>
          </div>
        </div>
        
        {/* Elite in Action */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <h3 className="font-heading font-semibold mb-4">Elite Classifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Elite Champion</span>
              <Badge variant="elite" icon={<Trophy className="h-3 w-3" />}>Champion</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Elite Member</span>
              <Badge variant="elite" icon={<Star className="h-3 w-3" />}>Elite</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Master Class</span>
              <Badge variant="elite" icon={<Award className="h-3 w-3" />}>Master</Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elite Size Variations */}
      <div className="bg-gradient-to-br from-brass-yellow/10 to-copper-orange/10 rounded-xl p-6 border border-brass-yellow/20">
        <h3 className="font-heading font-semibold mb-4">Elite Size Variations</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <Badge variant="elite" size="sm">Small Elite</Badge>
          <Badge variant="elite" size="default">Default Elite</Badge>
          <Badge variant="elite" size="lg">Large Elite</Badge>
          <Badge variant="elite" size="xl">Extra Large Elite</Badge>
        </div>
      </div>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'premium',
    size: 'default',
    animate: true,
    pulse: false,
    shimmer: true,
    dismissible: false,
    children: 'Premium Badge',
  },
  render: (args) => (
    <div className="space-y-4">
      <h3 className="font-rajdhani font-semibold">Interactive Badge</h3>
      <Badge {...args} />
    </div>
  ),
};

// Glassmorphism Showcase
export const Glassmorphism: Story = {
  render: () => (
    <div className="relative h-64 w-full rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop" 
        alt="Shooting range background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex items-center justify-center gap-4">
        <Badge variant="glass" size="lg">Skeet Range</Badge>
        <Badge variant="glass" size="lg" icon={<Target className="h-3.5 w-3.5" />}>Trap Field</Badge>
        <Badge variant="glass" size="lg" icon={<Trophy className="h-3.5 w-3.5" />}>5-Stand</Badge>
      </div>
    </div>
  ),
};
