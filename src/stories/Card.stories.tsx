import type { Meta, StoryObj } from '@storybook/nextjs';
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