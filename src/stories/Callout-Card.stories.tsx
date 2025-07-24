import type { Meta, StoryObj } from '@storybook/react';
import { CalloutCard, ImportantCallout, SubtleCallout } from '@/components/ui/callout-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Shield, Target, Trophy, Users, Calendar, Info } from 'lucide-react';

const meta: Meta<typeof CalloutCard> = {
  title: 'Accessibility & Effects/Callout Card',
  component: CalloutCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Highlighted content cards with gradient borders for important gun club announcements, safety notices, and featured information.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'animated']
    }
  }
};

export default meta;
type Story = StoryObj<typeof CalloutCard>;

// Default callout card
export const Default: Story = {
  args: {
    title: 'Range Safety Notice',
    description: 'All members must complete the safety orientation before using the ranges.',
    variant: 'default',
    children: (
      <div className="flex items-center gap-2 mt-4">
        <Shield className="h-4 w-4 text-orange-500" />
        <span className="text-sm font-medium">Safety First</span>
      </div>
    )
  }
};

// Safety notice callout
export const SafetyNotice: Story = {
  args: {
    title: 'Mandatory Safety Training',
    description: 'New safety training requirements are now in effect for all members.',
    variant: 'animated',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-sm font-semibold text-red-600">Required</span>
        </div>
        <Button size="sm" className="bg-red-600 hover:bg-red-700">
          Schedule Training
        </Button>
      </div>
    )
  }
};

// Event announcement callout
export const EventAnnouncement: Story = {
  args: {
    title: 'Monthly Competition Registration',
    description: 'Sign up for our monthly trap shooting competition. Limited spots available.',
    variant: 'default',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-500" />
          <span className="text-sm">March 15th, 2024</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Register Now
          </Button>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    )
  }
};

// New member welcome callout
export const NewMemberWelcome: Story = {
  args: {
    title: 'Welcome New Members!',
    description: 'Get started with our comprehensive orientation program designed for new shooters.',
    variant: 'subtle',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-green-500" />
          <Badge variant="outline" className="text-green-700 border-green-300">
            New Member
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Start Orientation
          </Button>
          <Button size="sm" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
};

// Competition results callout
export const CompetitionResults: Story = {
  args: {
    title: 'February Competition Results',
    description: 'Congratulations to our top performers in last month&apos;s competition.',
    variant: 'default',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-semibold">Results Posted</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>1st Place: John Smith</span>
            <span className="font-semibold">95/100</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>2nd Place: Sarah Johnson</span>
            <span className="font-semibold">92/100</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>3rd Place: Mike Wilson</span>
            <span className="font-semibold">89/100</span>
          </div>
        </div>
        <Button size="sm" variant="outline">
          View Full Results
        </Button>
      </div>
    )
  }
};

// Important callout variant
export const ImportantCalloutVariant: StoryObj<typeof ImportantCallout> = {
  args: {
    title: 'Range Closure Notice',
    description: 'Indoor range will be closed for maintenance this weekend.',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-semibold">March 18-19, 2024</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Outdoor ranges remain open. Thank you for your patience.
        </p>
        <Button size="sm" variant="outline">
          View Schedule
        </Button>
      </div>
    )
  }
};

// Subtle callout variant
export const SubtleCalloutVariant: StoryObj<typeof SubtleCallout> = {
  args: {
    title: 'Pro Shop Special',
    description: 'Save 15% on all ammunition this week.',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-purple-500" />
          <Badge variant="outline" className="text-purple-700 border-purple-300">
            Limited Time
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Valid through March 31st, 2024
        </p>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Shop Now
        </Button>
      </div>
    )
  }
};

// Training program callout
export const TrainingProgram: Story = {
  args: {
    title: 'Advanced Marksmanship Course',
    description: 'Take your shooting skills to the next level with our advanced training program.',
    variant: 'animated',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-orange-500" />
          <Badge variant="outline" className="text-orange-700 border-orange-300">
            8 Week Course
          </Badge>
        </div>
        <div className="text-sm space-y-1">
          <p>• Precision shooting techniques</p>
          <p>• Competition preparation</p>
          <p>• Equipment optimization</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
            Enroll Now
          </Button>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    )
  }
};

// Membership renewal callout
export const MembershipRenewal: Story = {
  args: {
    title: 'Membership Renewal Reminder',
    description: 'Your membership expires soon. Renew now to continue enjoying all benefits.',
    variant: 'subtle',
    children: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-semibold">Expires: March 31, 2024</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            Renew Now
          </Button>
          <Button size="sm" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
}; 