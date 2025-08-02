import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Shield, Zap, Award, Clock, Star, CheckCircle, AlertCircle } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Design System/Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Card - TBGC Design System Foundation

The **Card** component is a foundational element of the TBGC design system, featuring sophisticated shadow hierarchies, fire gradient animations, and comprehensive theming support.

## Key Features
- **Stripe-inspired shadow system** with consistent depth
- **Fire gradient animations** (orange, blue, purple, green variants)  
- **Mica glass effects** with backdrop blur
- **Theme-aware styling** for light/dark modes
- **Strategic restraint** - shadows for depth, not visual noise

## Variant Philosophy
- Use \`default\` for most content cards
- Use \`interactive\` for clickable cards
- Use \`fire\` variants sparingly for premium features
- Use \`glass\` for overlays and modals
        `
      }
    }
  },
  tags: ['autodocs', 'stable', 'display', 'atom', 'foundation'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'interactive', 'outlined', 'subtle', 'premium', 'glass', 'fire', 'fire-blue', 'fire-purple', 'fire-green'],
      description: 'Card visual style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Card padding size (handled by subcomponents)'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ================== BASIC VARIANTS SHOWCASE ==================

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          Clean, professional styling with subtle shadows
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="card-body">
          This is the standard card variant for most content. It uses theme-aware colors and consistent shadow depth.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          Hover me to see the interactive feedback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="card-body">
          Interactive cards provide visual feedback when hovered, perfect for clickable content.
        </p>
      </CardContent>
    </Card>
  ),
};

// ================== FIRE GRADIENT VARIANTS ==================

export const FireVariants: Story = {
  name: "Fire Gradient Animations",
  render: () => (
    <div className="w-full max-w-5xl space-y-[var(--space-lg)]">
      <div className="space-y-[var(--space-base)]">
        <h2 className="text-2xl font-rajdhani font-bold text-card-foreground">Fire Gradient System</h2>
        <p className="card-body">
          Sophisticated gradient animations that "unfurl" on hover. Use sparingly for premium features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
        <Card variant="fire" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Target className="w-4 h-4" />
              Fire Orange
            </CardTitle>
            <CardDescription>
              Classic TBGC brand gradient
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="premium" className="mb-[var(--space-xs)]">Premium</Badge>
            <p className="card-body">
              Copper to brass gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-blue" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Shield className="w-4 h-4" />
              Fire Blue
            </CardTitle>
            <CardDescription>
              Cool tactical theme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="info" className="mb-[var(--space-xs)]">Tactical</Badge>
            <p className="card-body">
              Blue to green gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-purple" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Zap className="w-4 h-4" />
              Fire Purple
            </CardTitle>
            <CardDescription>
              Elite membership tier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="elite" className="mb-[var(--space-xs)]">Elite</Badge>
            <p className="card-body">
              Purple to cobalt gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-green" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Award className="w-4 h-4" />
              Fire Green
            </CardTitle>
            <CardDescription>
              Success and achievement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="success" className="mb-[var(--space-xs)]">Achievement</Badge>
            <p className="card-body">
              Green variants gradient animation
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

// ================== SOPHISTICATED VARIANTS ==================

export const AdvancedVariants: Story = {
  name: "Advanced Card Variants",
  render: () => (
    <div className="w-full max-w-5xl space-y-[var(--space-lg)]">
      <div className="space-y-[var(--space-base)]">
        <h2 className="text-2xl font-rajdhani font-bold text-card-foreground">Advanced Styling Options</h2>
        <p className="card-body">
          Premium, glass, and specialized variants for different use cases.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
        <Card variant="premium" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Star className="w-4 h-4" />
              Premium Card
            </CardTitle>
            <CardDescription>
              Enhanced with gradient accents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-xs)]">
              <Badge variant="premium" shimmer>Premium Member</Badge>
              <p className="card-body">
                Features subtle brand gradient overlay and bottom accent bar.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Upgrade</Button>
          </CardFooter>
        </Card>

        <Card variant="glass" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <Zap className="w-4 h-4" />
              Glass Card
            </CardTitle>
            <CardDescription>
              Modern glassmorphism effect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-xs)]">
              <Badge variant="glass">Mica Effect</Badge>
              <p className="card-body">
                Windows 11-inspired mica glass with backdrop blur.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Glass Button</Button>
          </CardFooter>
        </Card>

        <Card variant="elevated" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-xs)]">
              <CheckCircle className="w-4 h-4" />
              Elevated Card
            </CardTitle>
            <CardDescription>
              Enhanced hover animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-xs)]">
              <Badge variant="success">Available</Badge>
              <p className="card-body">
                Lifts up on hover for prominent interactive feedback.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Continue</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

// ================== BUSINESS CONTEXT DEMO ==================

export const TBGCBusinessCards: Story = {
  name: "TBGC Business Context",
  render: () => (
    <div className="w-full max-w-6xl space-y-[var(--space-lg)]">
      <div className="space-y-[var(--space-base)]">
        <h2 className="text-2xl font-rajdhani font-bold text-card-foreground">Treasure Valley Firearms Directory</h2>
        <p className="card-body">
          Real-world application of the card component system in TBGC's business context.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
        <Card variant="fire" className="w-full">
          <CardHeader>
            <CardTitle>Boise Firearms Depot</CardTitle>
            <CardDescription>
              Full-service firearms dealer & gunsmith
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-sm)]">
              <div className="flex flex-wrap gap-[var(--space-xs)]">
                <Badge variant="premium" shimmer>Gold Member</Badge>
                <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>Verified</Badge>
              </div>
              <p className="card-body">
                Specializing in tactical gear, custom builds, and professional gunsmithing services.
              </p>
              <div className="text-xs text-muted-foreground">
                <p>📍 1234 State Street, Boise, ID</p>
                <p>⭐ 4.8/5 (247 reviews)</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Visit Store</Button>
            <Button size="sm" variant="ghost">Reviews</Button>
          </CardFooter>
        </Card>

        <Card variant="fire-blue" className="w-full">
          <CardHeader>
            <CardTitle>Eagle Eye Range</CardTitle>
            <CardDescription>
              State-of-the-art indoor shooting facility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-sm)]">
              <div className="flex flex-wrap gap-[var(--space-xs)]">
                <Badge variant="info" icon={<Shield className="w-3 h-3" />}>Silver Member</Badge>
                <Badge variant="success">Open Today</Badge>
              </div>
              <p className="card-body">
                25-lane climate-controlled range with tactical training courses.
              </p>
              <div className="text-xs text-muted-foreground">
                <p>📍 5678 Eagle Road, Meridian, ID</p>
                <p>🕒 Mon-Sat 9AM-9PM</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Book Lane</Button>
            <Button size="sm" variant="ghost">Classes</Button>
          </CardFooter>
        </Card>

        <Card variant="default" className="w-full">
          <CardHeader>
            <CardTitle>Twin Falls Tactical</CardTitle>
            <CardDescription>
              Training & equipment specialists
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--space-sm)]">
              <div className="flex flex-wrap gap-[var(--space-xs)]">
                <Badge variant="outline">Free Listing</Badge>
                <Badge variant="warning" icon={<Clock className="w-3 h-3" />}>Updating Hours</Badge>
              </div>
              <p className="card-body">
                Professional tactical training and equipment for law enforcement.
              </p>
              <div className="text-xs text-muted-foreground">
                <p>📍 Twin Falls, ID</p>
                <p>📞 Contact for current hours</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Contact</Button>
            <Button size="sm" variant="ghost">Info</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};