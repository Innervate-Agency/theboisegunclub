import React from 'react';
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

The **Card** component is a foundational element of the TBGC design system, featuring strategic restraint, fire gradient animations, and comprehensive theming with the Idaho Firearms Heritage palette.

## Key Features
- **Strategic restraint** - shadow system instead of borders (per design system policy)
- **Fire gradient animations** (copper/brass, blue, green, red variants using Idaho palette)
- **Windows 11 Mica glass effects** with backdrop blur
- **Theme-aware styling** for light/dark modes
- **Size variants** - proper padding controls (sm, default, lg)

## Variant Philosophy
- Use \`default\` for most content cards (clean baseline)
- Use \`interactive\` for clickable cards (subtle hover feedback)
- Use \`premium\` for enhanced cards (copper-brass accent)
- Use \`fire\` variants sparingly for premium features (inspired by VendorCard tiers)
- Use \`glass\` for overlays and modals (Windows 11 Mica)

## Strategic Restraint
Following VendorCard patterns - each variant should provide clear value progression without excessive visual noise.
        `
      }
    }
  },
  tags: ['autodocs', 'stable', 'display', 'atom', 'foundation'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'interactive', 'outlined', 'subtle', 'premium', 'glass', 'fire', 'fire-blue', 'fire-green', 'fire-red'],
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
          Clean, professional styling with strategic restraint
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the standard card variant for most content. It uses Idaho palette colors with strategic restraint design principles.
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
        <p >
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
    <div className="w-full max-w-5xl space-y-lg">
      <div className="space-y-base">
        <h2 className="text-display-md font-rajdhani font-bold text-card-foreground">Fire Gradient System</h2>
        <p >
          Sophisticated gradient animations that "unfurl" on hover. Use sparingly for premium features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <Card variant="fire" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-xs">
              <Target className="w-4 h-4" />
              Fire Orange
            </CardTitle>
            <CardDescription>
              Classic TBGC brand gradient
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="premium" className="mb-xs">Premium</Badge>
            <p >
              Copper to brass gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-blue" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-xs">
              <Shield className="w-4 h-4" />
              Fire Blue
            </CardTitle>
            <CardDescription>
              Cool tactical theme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="info" className="mb-xs">Tactical</Badge>
            <p >
              Blue to green gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-red" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-xs">
              <Zap className="w-4 h-4" />
              Fire Purple
            </CardTitle>
            <CardDescription>
              Elite membership tier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="elite" className="mb-xs">Elite</Badge>
            <p >
              Purple to cobalt gradient animation
            </p>
          </CardContent>
        </Card>

        <Card variant="fire-green" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-xs">
              <Award className="w-4 h-4" />
              Fire Green
            </CardTitle>
            <CardDescription>
              Success and achievement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="success" className="mb-xs">Achievement</Badge>
            <p >
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
    <div className="w-full max-w-5xl space-y-lg">
      <div className="space-y-base">
        <h2 className="text-display-md font-rajdhani font-bold text-card-foreground">Advanced Styling Options</h2>
        <p >
          Premium, glass, and specialized variants for different use cases.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        <Card variant="premium" className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-xs">
              <Star className="w-4 h-4" />
              Premium Card
            </CardTitle>
            <CardDescription>
              Enhanced with gradient accents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-xs">
              <Badge variant="premium" shimmer>Premium Member</Badge>
              <p >
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
            <CardTitle className="flex items-center gap-xs">
              <Zap className="w-4 h-4" />
              Glass Card
            </CardTitle>
            <CardDescription>
              Modern glassmorphism effect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-xs">
              <Badge variant="glass">Mica Effect</Badge>
              <p >
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
            <CardTitle className="flex items-center gap-xs">
              <CheckCircle className="w-4 h-4" />
              Elevated Card
            </CardTitle>
            <CardDescription>
              Enhanced hover animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-xs">
              <Badge variant="success">Available</Badge>
              <p >
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
    <div className="w-full max-w-6xl space-y-lg">
      <div className="space-y-base">
        <h2 className="text-display-md font-rajdhani font-bold text-card-foreground">Treasure Valley Firearms Directory</h2>
        <p >
          Real-world application of the card component system in TBGC's business context.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <Card variant="fire" className="w-full">
          <CardHeader>
            <CardTitle>Boise Firearms Depot</CardTitle>
            <CardDescription>
              Full-service firearms dealer & gunsmith
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-sm">
              <div className="flex flex-wrap gap-xs">
                <Badge variant="premium" shimmer>Gold Member</Badge>
                <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>Verified</Badge>
              </div>
              <p >
                Specializing in tactical gear, custom builds, and professional gunsmithing services.
              </p>
              <div className="text-caption text-muted-foreground">
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
            <div className="space-y-sm">
              <div className="flex flex-wrap gap-xs">
                <Badge variant="info" icon={<Shield className="w-3 h-3" />}>Silver Member</Badge>
                <Badge variant="success">Open Today</Badge>
              </div>
              <p >
                25-lane climate-controlled range with tactical training courses.
              </p>
              <div className="text-caption text-muted-foreground">
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
            <div className="space-y-sm">
              <div className="flex flex-wrap gap-xs">
                <Badge variant="outline">Free Listing</Badge>
                <Badge variant="warning" icon={<Clock className="w-3 h-3" />}>Updating Hours</Badge>
              </div>
              <p >
                Professional tactical training and equipment for law enforcement.
              </p>
              <div className="text-caption text-muted-foreground">
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