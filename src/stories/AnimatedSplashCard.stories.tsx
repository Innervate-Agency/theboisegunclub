import type { Meta, StoryObj } from '@storybook/react';
import AnimatedSplashCard from '@/components/ui/AnimatedSplashCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Users, Calendar, Star } from 'lucide-react';

const meta: Meta<typeof AnimatedSplashCard> = {
  title: 'Content & Media/Animated Splash Card',
  component: AnimatedSplashCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated card component with splash gradient effects on hover, perfect for highlighting important gun club content.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AnimatedSplashCard>;

// Default animated splash card
export const Default: Story = {
  args: {
    children: (
      <div className="text-center">
        <Target className="mx-auto mb-4 h-12 w-12 text-copper-orange" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
                     Welcome to Boise Gun Club
         </h3>
         <p className="text-muted-foreground mb-4">
           Join Idaho&apos;s premier shooting facility and become part of our community
        </p>
        <Button className="bg-copper-orange hover:bg-brass-yellow">
          Learn More
        </Button>
      </div>
    )
  }
};

// Membership promotion card
export const MembershipPromotion: Story = {
  args: {
    children: (
      <div className="text-center">
        <Badge className="mb-4 bg-brass-yellow text-gunmetal-black">
          Limited Time Offer
        </Badge>
        <Trophy className="mx-auto mb-4 h-12 w-12 text-copper-orange" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          50% Off First Year
        </h3>
        <p className="text-muted-foreground mb-4">
          New members save big on their first year membership. Join now and start your shooting journey.
        </p>
        <div className="flex gap-2 justify-center">
          <Button className="bg-copper-orange hover:bg-brass-yellow">
            Join Now
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    )
  }
};

// Event announcement card
export const EventAnnouncement: Story = {
  args: {
    children: (
      <div className="text-center">
        <Calendar className="mx-auto mb-4 h-12 w-12 text-copper-orange" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Monthly Trap Competition
        </h3>
        <p className="text-muted-foreground mb-4">
          Join us for our monthly trap shooting competition. All skill levels welcome!
        </p>
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-foreground">
            <strong>Date:</strong> First Saturday of Every Month<br />
            <strong>Time:</strong> 9:00 AM - 2:00 PM<br />
            <strong>Entry Fee:</strong> $25 for members, $35 for guests
          </p>
        </div>
        <Button className="bg-copper-orange hover:bg-brass-yellow">
          Register Now
        </Button>
      </div>
    )
  }
};

// Training program card
export const TrainingProgram: Story = {
  args: {
    children: (
      <div className="text-center">
        <Users className="mx-auto mb-4 h-12 w-12 text-copper-orange" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          NRA Certified Training
        </h3>
        <p className="text-muted-foreground mb-4">
          Learn from certified instructors in our comprehensive safety and marksmanship programs
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Badge variant="outline" className="text-xs">Basic Safety</Badge>
          <Badge variant="outline" className="text-xs">Advanced Skills</Badge>
          <Badge variant="outline" className="text-xs">Competition Prep</Badge>
          <Badge variant="outline" className="text-xs">Youth Programs</Badge>
        </div>
        <Button className="bg-copper-orange hover:bg-brass-yellow">
          View Programs
        </Button>
      </div>
    )
  }
};

// Achievement showcase card
export const AchievementShowcase: Story = {
  args: {
    children: (
      <div className="text-center">
        <Star className="mx-auto mb-4 h-12 w-12 text-brass-yellow" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Championship Results
        </h3>
        <p className="text-muted-foreground mb-4">
          Congratulations to our members who excelled in recent competitions
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center bg-muted/50 rounded p-2">
            <span className="text-sm font-medium">John Smith</span>
            <Badge className="bg-brass-yellow text-gunmetal-black">1st Place</Badge>
          </div>
          <div className="flex justify-between items-center bg-muted/50 rounded p-2">
            <span className="text-sm font-medium">Sarah Johnson</span>
            <Badge variant="outline">2nd Place</Badge>
          </div>
          <div className="flex justify-between items-center bg-muted/50 rounded p-2">
            <span className="text-sm font-medium">Mike Wilson</span>
            <Badge variant="outline">3rd Place</Badge>
          </div>
        </div>
        <Button variant="outline">
          View All Results
        </Button>
      </div>
    )
  }
};

// Newsletter signup card
export const NewsletterSignup: Story = {
  args: {
    children: (
      <div className="text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-4">
            Get the latest news, events, and exclusive member benefits delivered to your inbox
          </p>
        </div>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md bg-background text-foreground border-border"
          />
          <div className="flex gap-2">
            <Button className="flex-1 bg-var(--lahoma-orange) hover:bg-var(--leonard-yellow)">
              Subscribe
            </Button>
            <Button variant="outline" className="flex-1">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    )
  }
};

// Small info card
export const SmallInfoCard: Story = {
  args: {
    className: 'w-72',
    children: (
      <div className="text-center">
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Range Hours
        </h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Monday - Friday: 9 AM - 8 PM</p>
          <p>Saturday: 8 AM - 6 PM</p>
          <p>Sunday: 10 AM - 5 PM</p>
        </div>
      </div>
    )
  }
};

// Large feature card
export const LargeFeatureCard: Story = {
  args: {
    className: 'w-96',
    children: (
      <div>
        <div className="text-center mb-6">
          <Target className="mx-auto mb-4 h-16 w-16 text-copper-orange" />
          <h2 className="text-3xl font-bold text-foreground mb-3">
                       State-of-the-Art Facilities
           </h2>
           <p className="text-muted-foreground mb-4">
             Experience shooting at Idaho&apos;s most modern and well-equipped gun club
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-copper-orange">12</div>
            <div className="text-sm text-muted-foreground">Shooting Lanes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-copper-orange">3</div>
            <div className="text-sm text-muted-foreground">Trap Fields</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-copper-orange">2</div>
            <div className="text-sm text-muted-foreground">Skeet Fields</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-copper-orange">1</div>
            <div className="text-sm text-muted-foreground">Sporting Clays</div>
          </div>
        </div>
        <Button className="w-full bg-var(--lahoma-orange) hover:bg-var(--leonard-yellow)">
          Schedule a Tour
        </Button>
      </div>
    )
  }
}; 