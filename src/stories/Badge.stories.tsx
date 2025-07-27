import type { Meta, StoryObj } from '@storybook/react';
import { Badge, ClassificationBadge, StatusBadge, ScoreBadge } from '@/components/ui/badge';
import { Award, Shield, Target, Star, Zap, Crown, Trophy, CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Core UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'premium', 'elite', 'glass', 'success', 'warning', 'error', 'info', 'outline', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: (
      <>
        <Crown className="size-3" />
        Premium
      </>
    ),
  },
};

export const Elite: Story = {
  args: {
    variant: 'elite',
    children: (
      <>
        <Star className="size-3" />
        Elite
      </>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <>
        <Shield className="size-3" />
        Glass Effect
      </>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [{
        name: 'gradient',
        value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }],
    },
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <CheckCircle className="size-3" />
        Success
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <AlertCircle className="size-3" />
        Warning
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        <XCircle className="size-3" />
        Error
      </>
    ),
  },
};

export const Information: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <Info className="size-3" />
        Information
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" variant="premium">
        <Trophy className="size-2.5" />
        Small
      </Badge>
      <Badge size="default" variant="premium">
        <Trophy className="size-3" />
        Default
      </Badge>
      <Badge size="lg" variant="premium">
        <Trophy className="size-3" />
        Large
      </Badge>
      <Badge size="xl" variant="premium">
        <Trophy className="size-4" />
        Extra Large
      </Badge>
    </div>
  ),
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      {/* Core Variants */}
      <div className="space-y-4">
        <h3 className="text-xl font-rajdhani font-bold text-blued-steel flex items-center gap-2">
          <Star className="size-5 text-brass-yellow" />
          Core Variants
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <Badge variant="default" size="lg" className="w-full justify-center">
              <Shield className="size-3" />
              Default
            </Badge>
            <p className="text-xs text-case-hardened">Standard style</p>
          </div>
          <div className="text-center space-y-2">
            <Badge variant="premium" size="lg" className="w-full justify-center">
              <Crown className="size-3" />
              Premium
            </Badge>
            <p className="text-xs text-case-hardened">Enhanced gradient</p>
          </div>
          <div className="text-center space-y-2">
            <Badge variant="elite" size="lg" className="w-full justify-center">
              <Star className="size-3" />
              Elite
            </Badge>
            <p className="text-xs text-case-hardened">Highest tier</p>
          </div>
          <div className="text-center space-y-2">
            <Badge variant="glass" size="lg" className="w-full justify-center">
              <Award className="size-3" />
              Glass
            </Badge>
            <p className="text-xs text-case-hardened">Glassmorphism</p>
          </div>
        </div>
      </div>
      
      {/* Semantic Variants */}
      <div className="space-y-4">
        <h3 className="text-xl font-rajdhani font-bold text-blued-steel flex items-center gap-2">
          <CheckCircle className="size-5 text-rifling-green" />
          Semantic States
        </h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" size="lg">
            <CheckCircle className="size-3" />
            Success
          </Badge>
          <Badge variant="warning" size="lg">
            <AlertCircle className="size-3" />
            Warning
          </Badge>
          <Badge variant="error" size="lg">
            <XCircle className="size-3" />
            Error
          </Badge>
          <Badge variant="info" size="lg">
            <Info className="size-3" />
            Info
          </Badge>
          <Badge variant="outline" size="lg">
            Outline
          </Badge>
        </div>
      </div>
    </div>
  ),
};

// Firearms-specific implementations
export const FirearmsSystem: Story = {
  render: () => (
    <div className="space-y-8 max-w-5xl">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-rajdhani font-bold text-blued-steel flex items-center justify-center gap-2">
          <Target className="size-5 text-scope-blue" />
          Firearms Industry Integration
        </h3>
        <p className="text-case-hardened">Specialized components for shooting sports community</p>
      </div>

      <div className="space-y-6">
        {/* Classification System */}
        <div className="space-y-3">
          <h4 className="text-lg font-rajdhani font-semibold text-blued-steel">Classification Badges</h4>
          <div className="flex flex-wrap gap-3">
            <ClassificationBadge classification="Master" />
            <ClassificationBadge classification="Expert" />
            <ClassificationBadge classification="Sharpshooter" />
            <ClassificationBadge classification="Marksman" />
            <ClassificationBadge classification="Novice" />
          </div>
          <p className="text-sm text-case-hardened">
            Competitive shooting classifications with appropriate visual hierarchy
          </p>
        </div>
        
        {/* Status System */}
        <div className="space-y-3">
          <h4 className="text-lg font-rajdhani font-semibold text-blued-steel">Status Indicators</h4>
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="Active" />
            <StatusBadge status="Premium" />
            <StatusBadge status="Elite" />
            <StatusBadge status="Pending" />
            <StatusBadge status="Expired" />
            <StatusBadge status="Suspended" />
          </div>
          <p className="text-sm text-case-hardened">
            Member status tracking with semantic color coding
          </p>
        </div>
        
        {/* Score System */}
        <div className="space-y-3">
          <h4 className="text-lg font-rajdhani font-semibold text-blued-steel">Score-Based Variants</h4>
          <div className="flex flex-wrap gap-3">
            <ScoreBadge score={98} maxScore={100} />
            <ScoreBadge score={87} maxScore={100} />
            <ScoreBadge score={76} maxScore={100} />
            <ScoreBadge score={65} maxScore={100} />
            <ScoreBadge score={45} maxScore={100} />
            <ScoreBadge score={28} maxScore={100} />
          </div>
          <p className="text-sm text-case-hardened">
            Automatic variant selection based on performance scores
          </p>
        </div>
      </div>
    </div>
  ),
};

// Business context examples
export const BusinessUseCases: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-rajdhani font-bold text-blued-steel">Real-World Applications</h3>
        <p className="text-case-hardened">How badges enhance user experience in firearms community platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Member Profile */}
        <div className="bg-shooting-bench p-6 rounded-xl border border-case-hardened/20">
          <h4 className="text-lg font-rajdhani font-semibold text-blued-steel mb-4">Member Profile</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-case-hardened">Status:</span>
              <StatusBadge status="Premium" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-case-hardened">Classification:</span>
              <ClassificationBadge classification="Expert" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-case-hardened">Last Score:</span>
              <ScoreBadge score={94} maxScore={100} />
            </div>
          </div>
        </div>

        {/* Event Registration */}
        <div className="bg-shooting-bench p-6 rounded-xl border border-case-hardened/20">
          <h4 className="text-lg font-rajdhani font-semibold text-blued-steel mb-4">Event Features</h4>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="info" size="sm">
                <Target className="size-2.5" />
                Precision Rifle
              </Badge>
              <Badge variant="success" size="sm">
                <Shield className="size-2.5" />
                Safety Certified
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="warning" size="sm">
                <AlertCircle className="size-2.5" />
                Limited Spots
              </Badge>
              <Badge variant="premium" size="sm">
                <Crown className="size-2.5" />
                Members Only
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};