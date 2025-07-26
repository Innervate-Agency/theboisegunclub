import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Share2, 
  Calendar,
  Trophy,
  Target,
  Shield,
  Award,
  User,
  Mail,
  Phone,
  ChevronRight,
  ExternalLink,
  Download,
  Settings,
  MoreHorizontal
} from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Core UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>Clean card with warm cream background from your design system.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This uses your beautiful cloudy-day-white color instead of harsh white.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Premium: Story = {
  render: (args) => (
    <Card variant="premium" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Premium Membership</CardTitle>
        <CardDescription>Subtle Leonard Yellow accent with professional styling</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p>Elegant premium styling using your existing theme variables.</p>
          <Badge variant="premium">Premium</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="premium" className="w-full">
          Upgrade to Premium
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Elite: Story = {
  render: (args) => (
    <Card variant="elite" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Elite Championship</CardTitle>
        <CardDescription>Enhanced border and shadows with restraint</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p>Professional elite styling that doesn't hurt your eyes.</p>
          <Badge variant="elite">Elite</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="elite" className="w-full">
          Join Elite Program
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  render: (args) => (
    <div className="relative w-[400px] h-[300px] p-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <Card variant="glass" {...args}>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>Clean glassmorphism effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Subtle and professional glass effect.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Clean showcase without the garish colors
export const MembershipTiers: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold">Membership Tiers</h2>
        <p className="text-muted-foreground">Clean, professional card designs using your theme system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Standard Access</CardTitle>
            <CardDescription>Basic membership benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Range access during standard hours</li>
              <li>• Basic safety training included</li>
              <li>• Community events access</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        <Card variant="premium" className="w-full">
          <CardHeader>
            <CardTitle>Premium Membership</CardTitle>
            <CardDescription>Enhanced access with subtle Leonard Yellow accent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Badge variant="premium">Most Popular</Badge>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Extended range hours</li>
                <li>• Advanced training programs</li>
                <li>• Equipment rental discounts</li>
                <li>• Priority event booking</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="premium" className="w-full">Choose Premium</Button>
          </CardFooter>
        </Card>

        <Card variant="elite" className="w-full">
          <CardHeader>
            <CardTitle>Elite Championship</CardTitle>
            <CardDescription>Professional styling with enhanced shadows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Badge variant="elite">Exclusive</Badge>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24/7 range access</li>
                <li>• Personal coaching sessions</li>
                <li>• Championship competitions</li>
                <li>• VIP lounge access</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="elite" className="w-full">Join Elite</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  }
};

// ================== INTERACTIVE CARD VARIANTS ==================

export const ClickableCard: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl bg-range-white">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">Interactive Cards</h2>
        <p className="text-blued-steel">Cards that respond to user interaction</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="cursor-pointer hover:shadow-brass hover:-translate-y-1 transition-stripe-normal">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-gunmetal-black">Safety Training Course</CardTitle>
                <CardDescription className="text-blued-steel">Basic firearms safety and handling</CardDescription>
              </div>
              <ChevronRight className="h-5 w-5 text-case-hardened" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Calendar className="h-4 w-4 text-sight-gold" />
                Next session: March 15, 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Clock className="h-4 w-4 text-sight-gold" />
                4 hours duration
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Users className="h-4 w-4 text-sight-gold" />
                12 spots remaining
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-copper hover:-translate-y-1 transition-stripe-normal border-l-4 border-l-brass-yellow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-gunmetal-black">Range Reservation</CardTitle>
                <CardDescription className="text-blued-steel">Book your range time</CardDescription>
              </div>
              <ExternalLink className="h-5 w-5 text-case-hardened" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <MapPin className="h-4 w-4 text-copper-orange" />
                Indoor Range A-C
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Target className="h-4 w-4 text-copper-orange" />
                25-100 yard distances
              </div>
              <Badge className="bg-rifling-green text-nickel-white">
                Available Now
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const MediaCards: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-5xl bg-shooting-bench">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">Media Cards</h2>
        <p className="text-blued-steel">Cards with images and rich content</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Instructor Profile Card */}
        <Card className="overflow-hidden bg-range-white shadow-sm hover:shadow-brass transition-stripe-normal">
          <div className="h-32 bg-gradient-to-r from-brass-yellow/20 to-copper-orange/20 relative">
            <div className="absolute bottom-4 left-4">
              <div className="w-16 h-16 bg-gunmetal-black rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-nickel-white" />
              </div>
            </div>
          </div>
          <CardHeader className="pt-8">
            <CardTitle className="text-gunmetal-black font-rajdhani">Jake Morrison</CardTitle>
            <CardDescription className="text-blued-steel font-noto-sans">Certified Range Safety Officer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Award className="h-4 w-4 text-sight-gold" />
                15 years experience
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Shield className="h-4 w-4 text-sight-gold" />
                NRA Certified Instructor
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Contact Instructor
            </Button>
          </CardFooter>
        </Card>

        {/* Event Card */}
        <Card className="overflow-hidden bg-range-white shadow-sm hover:shadow-copper transition-stripe-normal">
          <div className="h-32 bg-gradient-to-r from-scope-blue/10 to-trigger-blue/10 flex items-center justify-center">
            <Trophy className="h-12 w-12 text-scope-blue" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-gunmetal-black font-rajdhani">Monthly Competition</CardTitle>
                <CardDescription className="text-blued-steel font-noto-sans">Precision shooting contest</CardDescription>
              </div>
              <Badge className="bg-muzzle-flash text-gunmetal-black">
                Featured
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Calendar className="h-4 w-4 text-copper-orange" />
                March 22, 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Trophy className="h-4 w-4 text-copper-orange" />
                $500 prize pool
              </div>
              <div className="flex items-center gap-2 text-sm text-blued-steel">
                <Users className="h-4 w-4 text-copper-orange" />
                24 participants registered
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="accent" className="w-full">
              Register Now
            </Button>
          </CardFooter>
        </Card>

        {/* Equipment Card */}
        <Card className="overflow-hidden bg-range-white shadow-sm hover:shadow-md transition-stripe-normal">
          <div className="h-32 bg-gradient-to-r from-walnut-stock/10 to-case-hardened/10 flex items-center justify-center">
            <Target className="h-12 w-12 text-walnut-stock" />
          </div>
          <CardHeader>
            <CardTitle className="text-gunmetal-black font-rajdhani">Rental Equipment</CardTitle>
            <CardDescription className="text-blued-steel font-noto-sans">Professional grade firearms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blued-steel font-noto-sans">Pistols</span>
                <span className="text-gunmetal-black font-semibold">$25/hour</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blued-steel font-noto-sans">Rifles</span>
                <span className="text-gunmetal-black font-semibold">$35/hour</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blued-steel font-noto-sans">Shotguns</span>
                <span className="text-gunmetal-black font-semibold">$30/hour</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              View Inventory
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const CardWithActions: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl bg-range-white">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">Cards with Actions</h2>
        <p className="text-blued-steel">Action buttons and interactive elements</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card with Action Button in Header */}
        <Card className="bg-shooting-bench shadow-sm hover:shadow-md transition-stripe-normal">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-gunmetal-black font-rajdhani">Membership Status</CardTitle>
                <CardDescription className="text-blued-steel font-noto-sans">Your current membership details</CardDescription>
              </div>
              <CardAction>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-blued-steel font-noto-sans">Plan</span>
                <Badge className="bg-brass-yellow text-gunmetal-black">
                  Premium
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-blued-steel font-noto-sans">Expires</span>
                <span className="text-gunmetal-black font-semibold">Dec 31, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blued-steel font-noto-sans">Range Hours Used</span>
                <span className="text-gunmetal-black font-semibold">24 / 100</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="accent" className="flex-1">
              Renew Membership
            </Button>
            <Button variant="secondary">
              <Settings className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Social Card with Multiple Actions */}
        <Card className="bg-shooting-bench shadow-sm hover:shadow-md transition-stripe-normal">
          <CardHeader>
            <CardTitle className="text-gunmetal-black font-rajdhani">Range Session</CardTitle>
            <CardDescription className="text-blued-steel font-noto-sans">Yesterday at Boise Gun Club</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gunmetal-black font-noto-sans">
                Great session working on precision shooting. Hit 8/10 bullseyes at 50 yards with the new Sig P320.
              </p>
              <div className="flex items-center gap-4 text-sm text-blued-steel">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-muzzle-flash" />
                  4.8/5 accuracy
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4 text-muzzle-flash" />
                  50 rounds
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  12
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
              <Button variant="secondary" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export Data
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const CompactCards: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-3xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-gunmetal-black">Compact Cards</h2>
        <p className="text-case-hardened">Space-efficient card layouts</p>
      </div>
      
      <div className="space-y-4">
        {/* Horizontal Compact Cards */}
        <Card className="flex flex-row items-center p-4 bg-range-white hover:shadow-brass transition-stripe-normal cursor-pointer">
          <div className="w-12 h-12 bg-brass-yellow/10 rounded-lg flex items-center justify-center mr-4">
            <Calendar className="h-6 w-6 text-brass-yellow" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-noto-sans font-semibold text-gunmetal-black">Upcoming Training</h3>
            <p className="text-sm text-blued-steel truncate font-noto-sans">Advanced marksmanship course</p>
          </div>
          <div className="text-right ml-4">
            <p className="text-sm font-medium text-gunmetal-black font-noto-sans">Mar 15</p>
            <p className="text-xs text-case-hardened font-noto-sans">2:00 PM</p>
          </div>
        </Card>

        <Card className="flex flex-row items-center p-4 bg-range-white hover:shadow-copper transition-stripe-normal cursor-pointer">
          <div className="w-12 h-12 bg-rifling-green/10 rounded-lg flex items-center justify-center mr-4">
            <Trophy className="h-6 w-6 text-rifling-green" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-noto-sans font-semibold text-gunmetal-black">Competition Results</h3>
            <p className="text-sm text-blued-steel truncate font-noto-sans">Monthly precision contest - 2nd place</p>
          </div>
          <div className="text-right ml-4">
            <Badge variant="secondary" className="bg-rifling-green/10 text-rifling-green">
              2nd
            </Badge>
          </div>
        </Card>

        <Card className="flex flex-row items-center p-4 bg-range-white hover:shadow-md transition-stripe-normal cursor-pointer">
          <div className="w-12 h-12 bg-scope-blue/10 rounded-lg flex items-center justify-center mr-4">
            <Users className="h-6 w-6 text-scope-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-noto-sans font-semibold text-gunmetal-black">New Member Welcome</h3>
            <p className="text-sm text-blued-steel truncate font-noto-sans">Sarah Johnson joined the club</p>
          </div>
          <div className="text-right ml-4">
            <p className="text-xs text-case-hardened font-noto-sans">2 hours ago</p>
          </div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const ProfessionalShowcase: Story = {
  render: () => (
    <div className="space-y-16 p-16 max-w-7xl bg-range-white">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-rajdhani font-bold text-gunmetal-black tracking-tight">
          The Complete TBGC Card System
        </h1>
        <p className="text-xl text-case-hardened max-w-4xl mx-auto leading-relaxed font-noto-sans">
          Versatile card components for every use case - from membership tiers to interactive content
        </p>
      </div>

      {/* Variant Showcase */}
      <div className="space-y-12">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center">
          Card Variants & Sizes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card size="xs">
            <CardHeader>
              <CardTitle className="text-lg">Extra Small</CardTitle>
              <CardDescription className="text-xs">Compact information</CardDescription>
            </CardHeader>
          </Card>
          
          <Card size="sm">
            <CardHeader>
              <CardTitle>Small Card</CardTitle>
              <CardDescription>Perfect for lists</CardDescription>
            </CardHeader>
          </Card>
          
          <Card size="md">
            <CardHeader>
              <CardTitle>Medium Card</CardTitle>
              <CardDescription>Default size for most content</CardDescription>
            </CardHeader>
          </Card>
          
          <Card size="lg">
            <CardHeader>
              <CardTitle>Large Card</CardTitle>
              <CardDescription>Rich content with plenty of space</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Real-world Examples */}
      <div className="space-y-12">
        <h2 className="text-3xl font-rajdhani font-semibold text-blued-steel text-center">
          Real-world Applications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dashboard Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-gunmetal-black">Dashboard Cards</h3>
            <Card size="sm">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="text-2xl font-bold text-gunmetal-black font-noto-sans">147</p>
                  <p className="text-sm text-case-hardened font-noto-sans">Active Members</p>
                </div>
                <Users className="h-8 w-8 text-brass-yellow" />
              </CardContent>
            </Card>
            
            <Card size="sm">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="text-2xl font-bold text-gunmetal-black font-noto-sans">89%</p>
                  <p className="text-sm text-case-hardened font-noto-sans">Range Utilization</p>
                </div>
                <Target className="h-8 w-8 text-rifling-green" />
              </CardContent>
            </Card>
          </div>

          {/* Content Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-gunmetal-black">Content Cards</h3>
            <Card>
              <CardHeader>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>Essential firearms safety rules</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blued-steel font-noto-sans">
                  Always treat every firearm as if it's loaded, never point the muzzle at anything you don't intend to destroy.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-rajdhani font-semibold text-gunmetal-black">Action Cards</h3>
            <Card className="border-l-4 border-l-brass-yellow">
              <CardHeader>
                <CardTitle>Book Range Time</CardTitle>
                <CardDescription>Reserve your preferred slot</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center space-y-4 pt-8 border-t border-case-hardened/20">
        <p className="text-case-hardened font-noto-serif italic">
          "Flexible card components that adapt to any content while maintaining visual consistency"
        </p>
        <p className="text-sm text-case-hardened/70 font-noto-sans">
          Design System v2.0 • The Boise Gun Club • 2025
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};