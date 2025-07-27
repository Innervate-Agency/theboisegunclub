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
  title: 'Core UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
        <p className="text-sm text-gray-600">
          Learn the fundamental principles of safe firearm handling and operation in a structured environment.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">
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
        <h2 className="text-3xl font-bold text-gray-900">Membership Options</h2>
        <p className="text-lg text-gray-600">Choose the plan that fits your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic - completely clean */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>Essential range access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-gray-900">$50<span className="text-lg font-normal text-gray-600">/month</span></div>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center"><span className="mr-3">•</span>Range access during standard hours</li>
              <li className="flex items-center"><span className="mr-3">•</span>Basic safety training included</li>
              <li className="flex items-center"><span className="mr-3">•</span>Community events access</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base">Get Started</Button>
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
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">Popular</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-gray-900">$120<span className="text-lg font-normal text-gray-600">/month</span></div>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center"><span className="mr-3">•</span>Extended range hours</li>
              <li className="flex items-center"><span className="mr-3">•</span>Advanced training programs</li>
              <li className="flex items-center"><span className="mr-3">•</span>Equipment rental discounts</li>
              <li className="flex items-center"><span className="mr-3">•</span>Priority event booking</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base" style={{ backgroundColor: 'var(--color-brass-yellow)', color: 'var(--color-gunmetal-black)' }}>Choose Premium</Button>
          </CardFooter>
        </Card>

        {/* Elite - still restrained, just slightly different */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Elite</CardTitle>
            <CardDescription>Complete access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-gray-900">$200<span className="text-lg font-normal text-gray-600">/month</span></div>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center"><span className="mr-3">•</span>24/7 range access</li>
              <li className="flex items-center"><span className="mr-3">•</span>Personal coaching sessions</li>
              <li className="flex items-center"><span className="mr-3">•</span>Championship competitions</li>
              <li className="flex items-center"><span className="mr-3">•</span>VIP lounge access</li>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base">Contact Sales</Button>
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
        <h2 className="text-3xl font-bold text-gray-900">Range Services</h2>
        <p className="text-lg text-gray-600">Professional instruction and facilities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Instructor Profile - proper header/content structure */}
        <Card variant="elevated" className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <CardTitle className="text-xl">Jake Morrison</CardTitle>
            <CardDescription className="text-base">Certified Range Safety Officer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">15 years experience</p>
              <p className="font-medium">NRA Certified Instructor</p>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base">
              Contact Instructor
            </Button>
          </CardFooter>
        </Card>

        {/* Competition Card - premium styling with badge */}
        <Card variant="premium" className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
            </div>
            <CardTitle className="text-xl">Monthly Competition</CardTitle>
            <CardDescription className="text-base">Precision shooting contest</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center font-medium"><span className="mr-3">📅</span>March 22, 2025</p>
              <p className="flex items-center font-medium"><span className="mr-3">💰</span>$500 prize pool</p>
              <p className="flex items-center font-medium"><span className="mr-3">👥</span>24 participants registered</p>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base" style={{ backgroundColor: 'var(--color-brass-yellow)', color: 'var(--color-gunmetal-black)' }}>
              Register Now
            </Button>
          </CardFooter>
        </Card>

        {/* Equipment Card - clean structure with pricing */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <CardTitle className="text-xl">Equipment Rental</CardTitle>
            <CardDescription className="text-base">Professional grade firearms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Pistols</span>
                <span className="font-bold text-gray-900 text-lg">$25/hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Rifles</span>
                <span className="font-bold text-gray-900 text-lg">$35/hour</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Shotguns</span>
                <span className="font-bold text-gray-900 text-lg">$30/hour</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base">
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
        <h2 className="text-xl font-semibold text-gray-900">Interactive Cards</h2>
        <p className="text-gray-600">Hover to see subtle interactions</p>
      </div>
      
      <div className="space-y-4">
        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Range Reservation</h3>
              <p className="text-sm text-gray-600">Book your practice time</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CardContent>
        </Card>

        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Training Schedule</h3>
              <p className="text-sm text-gray-600">View upcoming sessions</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CardContent>
        </Card>

        <Card variant="interactive" className="w-full">
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Competition Results</h3>
              <p className="text-sm text-gray-600">Check your latest scores</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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