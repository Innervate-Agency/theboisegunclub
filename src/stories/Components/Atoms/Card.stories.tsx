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

const meta: Meta<typeof Card> = {
  title: 'Components/Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable', 'display', 'atom'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'interactive', 'outlined', 'subtle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ================== STRIPE-STYLE COMPONENT HIERARCHY DEMO ==================

export const StripeHierarchy: Story = {
  name: "Stripe-Style Component Sizing",
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-card-foreground">Card Component Hierarchy</h2>
        <p className="text-sm text-muted-foreground">
          Demonstrating proper button sizing within cards vs standalone usage, following Stripe's design patterns.
        </p>
      </div>
      
      {/* Row 1: Cards with proper small buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Basic Training</CardTitle>
            <CardDescription>
              Introductory course for new shooters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="card-body">Duration: 4 hours</p>
              <p className="card-body">Class size: 8 students max</p>
              <Badge variant="success">Available</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="flat">Enroll Now</Button>
            <Button size="sm" variant="ghost">Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Advanced Tactics</CardTitle>
            <CardDescription>
              Professional-level tactical training
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="card-body">Duration: 8 hours</p>
              <p className="card-body">Prerequisites required</p>
              <Badge variant="warning">Limited spots</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="accent">Reserve Spot</Button>
            <Button size="sm" variant="ghost">Details</Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Competition Prep</CardTitle>
            <CardDescription>
              Get ready for USPSA matches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="card-body">Duration: 6 hours</p>
              <p className="card-body">Equipment provided</p>
              <Badge variant="info">New class</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="success">Sign Up</Button>
            <Button size="sm" variant="ghost">Preview</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Hero section with larger buttons */}
      <Card className="w-full" variant="elevated">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
          <CardDescription className="text-base">
            Join Treasure Valley's premier firearms training community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="card-body mb-4">
            Over 1,500 students trained with 100% safety record. Professional instructors, 
            modern facilities, and comprehensive curriculum for all skill levels.
          </p>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row gap-4">
          <Button size="lg" variant="solid-accent">Browse All Courses</Button>
          <Button size="default" variant="ghost">Contact Instructor</Button>
        </CardFooter>
      </Card>

      {/* Comparison section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Size Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-muted-foreground">✅ Inside Cards/Forms</h4>
            <div className="space-y-2">
              <Button size="sm" variant="flat">Small Flat Button</Button>
              <Button size="sm" variant="ghost">Small Ghost Button</Button>
              <Button size="sm" variant="accent">Small Accent Button</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-muted-foreground">✅ Standalone/Hero Actions</h4>
            <div className="space-y-2">
              <Button size="default" variant="default">Default Button</Button>
              <Button size="lg" variant="primary">Large Primary</Button>
              <Button size="xl" variant="solid-accent">XL Call-to-Action</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Safety Training</CardTitle>
        <CardDescription>
          Comprehensive firearms safety course for all skill levels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="card-body">
          Learn the fundamental principles of safe firearm handling and operation in a structured environment.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="flat">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  ),
};

// TBGC Design System: Sophisticated membership tiers with proper spacing
export const MembershipTiers: Story = {
  render: () => (
    <div className="space-y-12 p-8 max-w-6xl">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-card-foreground">Membership Options</h2>
        <p className="text-lg text-muted-foreground">Choose the plan that fits your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic - completely clean */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>Essential range access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-card-foreground">$50<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center"><span className="mr-3">•</span>Range access during standard hours</li>
              <li className="flex items-center"><span className="mr-3">•</span>Basic safety training included</li>
              <li className="flex items-center"><span className="mr-3">•</span>Community events access</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="flat" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Premium - Test the design system variables */}
        <Card variant="premium" className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Most popular choice</CardDescription>
              </div>
              <Badge variant="warning">Popular</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-card-foreground">$120<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center"><span className="mr-3">•</span>Extended range hours</li>
              <li className="flex items-center"><span className="mr-3">•</span>Advanced training programs</li>
              <li className="flex items-center"><span className="mr-3">•</span>Equipment rental discounts</li>
              <li className="flex items-center"><span className="mr-3">•</span>Priority event booking</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="solid-accent" className="w-full">Choose Premium</Button>
          </CardFooter>
        </Card>

        {/* Elite - still restrained, just slightly different */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Elite</CardTitle>
            <CardDescription>Complete access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-card-foreground">$200<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center"><span className="mr-3">•</span>24/7 range access</li>
              <li className="flex items-center"><span className="mr-3">•</span>Personal coaching sessions</li>
              <li className="flex items-center"><span className="mr-3">•</span>Championship competitions</li>
              <li className="flex items-center"><span className="mr-3">•</span>VIP lounge access</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="ghost" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  }
};

// TBGC Design System: Professional range services with proper spacing
export const RangeServices: Story = {
  render: () => (
    <div className="space-y-12 p-8 max-w-6xl">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-card-foreground">Range Services</h2>
        <p className="text-lg text-muted-foreground">Professional instruction and facilities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Instructor Profile - proper header/content structure */}
        <Card variant="elevated" className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <CardTitle className="text-xl">Jake Morrison</CardTitle>
            <CardDescription className="text-base">Certified Range Safety Officer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium">15 years experience</p>
              <p className="font-medium">NRA Certified Instructor</p>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="ghost" className="w-full">
              Contact Instructor
            </Button>
          </CardFooter>
        </Card>

        {/* Competition Card - premium styling with badge */}
        <Card variant="premium" className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-scope-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-scope-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <Badge variant="warning">Featured</Badge>
            </div>
            <CardTitle className="text-xl">Monthly Competition</CardTitle>
            <CardDescription className="text-base">Precision shooting contest</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center font-medium"><span className="mr-3">📅</span>March 22, 2025</p>
              <p className="flex items-center font-medium"><span className="mr-3">💰</span>$500 prize pool</p>
              <p className="flex items-center font-medium"><span className="mr-3">👥</span>24 participants registered</p>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="solid-accent" className="w-full">
              Register Now
            </Button>
          </CardFooter>
        </Card>

        {/* Equipment Card - clean structure with pricing */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <CardTitle className="text-xl">Equipment Rental</CardTitle>
            <CardDescription className="text-base">Professional grade firearms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground font-medium">Pistols</span>
                <span className="font-bold text-card-foreground text-lg">$25/hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground font-medium">Rifles</span>
                <span className="font-bold text-card-foreground text-lg">$35/hour</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-medium">Shotguns</span>
                <span className="font-bold text-card-foreground text-lg">$30/hour</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm" variant="ghost" className="w-full">
              View Inventory
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Interactive examples
export const InteractiveCards: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-2xl">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-card-foreground">Interactive Cards</h2>
        <p className="text-muted-foreground">Hover to see subtle interactions</p>
      </div>
      
      <div className="space-y-4">
        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Range Reservation</h3>
              <p className="text-sm text-muted-foreground">Book your practice time</p>
            </div>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CardContent>
        </Card>

        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Training Schedule</h3>
              <p className="text-sm text-muted-foreground">View upcoming sessions</p>
            </div>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CardContent>
        </Card>

        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Competition Results</h3>
              <p className="text-sm text-muted-foreground">Check your latest scores</p>
            </div>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};