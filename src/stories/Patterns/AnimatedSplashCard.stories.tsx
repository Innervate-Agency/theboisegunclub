import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AnimatedSplashCard from '@/components/ui/AnimatedSplashCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Users, Calendar, Star } from 'lucide-react';

const meta: Meta<typeof AnimatedSplashCard> = {
  title: 'Design System/Templates/AnimatedSplashCard',
  component: AnimatedSplashCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated card component with splash gradient effects on hover, perfect for highlighting important community announcements and featured businesses.'
      }
    }
  },
  tags: ['autodocs', 'stable', 'organism', 'display', 'community', 'business'],
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
        <Target className="mx-auto mb-base icon-2xl icon-secondary" />
        <h3 className="text-display-md font-bold text-foreground mb-xs">
          Treasure Valley Firearms Hub
         </h3>
         <p className="text-muted-foreground mb-base">
           Connect with 500+ local businesses, events, and fellow enthusiasts across the region
        </p>
        <Button size="sm" className="bg-copper-orange hover:bg-brass-yellow">
          Explore Directory
        </Button>
      </div>
    )
  }
};

// Premium directory access promotion
export const PremiumAccess: Story = {
  args: {
    children: (
      <div className="text-center">
        <Badge className="mb-base bg-brass-yellow text-gunmetal-black">
          Limited Time Offer
        </Badge>
        <Trophy className="mx-auto mb-base icon-2xl icon-primary" />
        <h3 className="text-display-md font-bold text-foreground mb-xs">
          50% Off Premium Access
        </h3>
        <p className="text-muted-foreground mb-base">
          Unlock exclusive business deals, priority event notifications, and advanced search features.
        </p>
        <div className="flex gap-xs justify-center">
          <Button size="sm" className="bg-copper-orange hover:bg-brass-yellow">
            Upgrade Now
          </Button>
          <Button size="sm" variant="outline">
            View Benefits
          </Button>
        </div>
      </div>
    )
  }
};

// Regional event announcement
export const RegionalEvent: Story = {
  args: {
    children: (
      <div className="text-center">
        <Calendar className="mx-auto mb-base icon-2xl icon-secondary" />
        <h3 className="text-display-md font-bold text-foreground mb-xs">
          Treasure Valley Gun Show
        </h3>
        <p className="text-muted-foreground mb-base">
          The region's largest firearms event featuring 200+ vendors and educational seminars.
        </p>
        <div className="bg-muted/50 rounded-card p-sm mb-base">
          <p className="text-body-sm text-foreground">
            <strong>Date:</strong> August 15-17, 2025<br />
            <strong>Location:</strong> Ford Idaho Center<br />
            <strong>Tickets:</strong> $15 adults, kids free
          </p>
        </div>
        <Button size="sm" className="bg-copper-orange hover:bg-brass-yellow">
          Get Tickets
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
        <Users className="mx-auto mb-base icon-2xl icon-accent" />
        <h3 className="text-display-md font-bold text-foreground mb-xs">
          NRA Certified Training
        </h3>
        <p className="text-muted-foreground mb-base">
          Learn from certified instructors in our comprehensive safety and marksmanship programs
        </p>
        <div className="grid grid-cols-2 gap-xs mb-base">
          <Badge variant="outline" className="text-caption">Basic Safety</Badge>
          <Badge variant="outline" className="text-caption">Advanced Skills</Badge>
          <Badge variant="outline" className="text-caption">Competition Prep</Badge>
          <Badge variant="outline" className="text-caption">Youth Programs</Badge>
        </div>
        <Button size="sm" className="bg-copper-orange hover:bg-brass-yellow">
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
        <Star className="mx-auto mb-base icon-2xl icon-primary" />
        <h3 className="text-display-md font-bold text-foreground mb-xs">
          Championship Results
        </h3>
        <p className="text-muted-foreground mb-base">
          Congratulations to our members who excelled in recent competitions
        </p>
        <div className="space-y-xs mb-base">
          <div className="flex justify-between items-center bg-muted/50 rounded p-xs">
            <span className="text-body-sm font-medium">John Smith</span>
            <Badge className="bg-brass-yellow text-gunmetal-black">1st Place</Badge>
          </div>
          <div className="flex justify-between items-center bg-muted/50 rounded p-xs">
            <span className="text-body-sm font-medium">Sarah Johnson</span>
            <Badge variant="outline">2nd Place</Badge>
          </div>
          <div className="flex justify-between items-center bg-muted/50 rounded p-xs">
            <span className="text-body-sm font-medium">Mike Wilson</span>
            <Badge variant="outline">3rd Place</Badge>
          </div>
        </div>
        <Button size="sm" variant="outline">
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
        <div className="mb-base">
          <h3 className="text-display-md font-bold text-foreground mb-xs">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-base">
            Get the latest news, events, and exclusive member benefits delivered to your inbox
          </p>
        </div>
        <div className="space-y-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-sm py-xs border rounded-input bg-background text-foreground border-border"
          />
          <div className="flex gap-xs">
            <Button size="sm" className="flex-1 bg-copper-orange hover:bg-brass-yellow">
              Subscribe
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
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
        <h4 className="text-body-lg font-semibold text-foreground mb-xs">
          Range Hours
        </h4>
        <div className="text-body-sm text-muted-foreground space-y-micro">
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
        <div className="text-center mb-md">
          <Target className="mx-auto mb-base icon-2xl icon-secondary" />
          <h2 className="text-3xl font-bold text-foreground mb-sm">
                       State-of-the-Art Facilities
           </h2>
           <p className="text-muted-foreground mb-base">
             Experience shooting at Idaho&apos;s most modern and well-equipped gun club
          </p>
        </div>
        <div className="grid grid-cols-2 gap-base mb-md">
          <div className="text-center">
            <div className="text-display-md font-bold text-copper-orange">12</div>
            <div className="text-body-sm text-muted-foreground">Shooting Lanes</div>
          </div>
          <div className="text-center">
            <div className="text-display-md font-bold text-copper-orange">3</div>
            <div className="text-body-sm text-muted-foreground">Trap Fields</div>
          </div>
          <div className="text-center">
            <div className="text-display-md font-bold text-copper-orange">2</div>
            <div className="text-body-sm text-muted-foreground">Skeet Fields</div>
          </div>
          <div className="text-center">
            <div className="text-display-md font-bold text-copper-orange">1</div>
            <div className="text-body-sm text-muted-foreground">Sporting Clays</div>
          </div>
        </div>
        <Button size="sm" className="w-full bg-copper-orange hover:bg-brass-yellow">
          Schedule a Tour
        </Button>
      </div>
    )
  }
}; 