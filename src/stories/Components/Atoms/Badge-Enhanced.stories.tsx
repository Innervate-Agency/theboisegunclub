import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components/ui/badge';
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, MapPinIcon, BuildingOfficeIcon, CalendarIcon, TrophyIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        // Intel variants
        'intel-location', 'intel-verified', 'intel-priority', 'intel-restricted',
        // Directory variants  
        'directory-business', 'directory-verified', 'directory-ffl',
        // Events variants
        'events-featured', 'events-competition', 'events-training'
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    hideIcon: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const IntelLocation: Story = {
  args: {
    variant: 'intel-location',
    children: 'Public Range',
  },
};

export const IntelVerified: Story = {
  args: {
    variant: 'intel-verified',
    children: 'Verified',
  },
};

export const DirectoryBusiness: Story = {
  args: {
    variant: 'directory-business',
    children: 'FFL Dealer',
  },
};

export const EventsFeatured: Story = {
  args: {
    variant: 'events-featured',
    children: 'Featured Event',
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'intel-location',
    icon: <MapPinIcon className="h-3 w-3" />,
    children: 'Custom Icon',
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'directory-business',
    hideIcon: true,
    children: 'No Icon',
  },
};

export const SmallSize: Story = {
  args: {
    variant: 'events-featured',
    size: 'sm',
    children: 'Small',
  },
};

export const LargeSize: Story = {
  args: {
    variant: 'events-featured',
    size: 'lg',
    children: 'Large',
  },
};

export const ShowcaseGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="intel-location">Location</Badge>
      <Badge variant="intel-verified">Verified</Badge>
      <Badge variant="intel-priority">Priority</Badge>
      <Badge variant="directory-business">Business</Badge>
      <Badge variant="directory-ffl">FFL</Badge>
      <Badge variant="events-featured">Featured</Badge>
      <Badge variant="events-competition">Competition</Badge>
      <Badge variant="events-training">Training</Badge>
    </div>
  ),
};
