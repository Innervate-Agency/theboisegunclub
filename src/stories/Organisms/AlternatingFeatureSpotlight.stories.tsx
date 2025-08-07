import type { Meta, StoryObj } from '@storybook/react';
import AlternatingFeatureSpotlight from '@/components/organisms/AlternatingFeatureSpotlight';
import { Search, Calendar, MessageSquare, ShieldCheck, List, Star, Users, Lock, Store } from 'lucide-react';

const meta: Meta<typeof AlternatingFeatureSpotlight> = {
  title: 'Design System/Organisms/AlternatingFeatureSpotlight',
  component: AlternatingFeatureSpotlight,
  decorators: [
    (Story) => (
      <div className="bg-range-white dark:bg-night-sight overflow-x-hidden">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Final version. The atmospheric glow is now a large, dramatic, dual-color splat that bleeds out from behind the card. The ugly padding has been removed.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlternatingFeatureSpotlight>;

export const DirectorySpotlight: Story = {
  name: 'Spotlight: Directory',
  args: {
    icon: <Search />,
    title: "The Last Directory You'll Ever Need",
    description: "A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.",
    features: [
      { icon: <ShieldCheck />,
 text: '117+ Verified Local Businesses' },
      { icon: <List />,
 text: 'Real-time Inventory & Service Updates' },
      { icon: <Star />,
 text: 'Community-Driven Reviews & Ratings' },
    ],
    imageSrc: '/images/Fractal/1.webp',
    imageAlt: 'Abstract fractal image representing a network.',
    glowColor1: '#3F6331', // woodland-camo
    glowColor2: '#F28705', // copper-orange
    accentColor: '#3F6331',
    reverse: false,
  },
};

export const CalendarSpotlight: Story = {
  name: 'Spotlight: Calendar (Reversed)',
  args: {
    ...DirectorySpotlight.args,
    icon: <Calendar />,
    title: 'One Calendar to Rule Them All',
    description: "We're consolidating every match, class, and event from every local club into one master calendar. Stop searching, start participating.",
    features: [
      { icon: <Users />,
 text: 'Unified View of All Local Clubs' },
      { icon: <List />,
 text: 'Smart Scheduling to Avoid Conflicts' },
      { icon: <Star />,
 text: 'Direct Registration & Reminders' },
    ],
    imageSrc: '/images/Fractal/2.webp',
    imageAlt: 'Abstract fractal image representing a timeline.',
    glowColor1: '#009FED', // cerakote-blue
    glowColor2: '#75B700', // ayu-green
    accentColor: '#009FED',
    reverse: true,
  },
};

export const CommunitySpotlight: Story = {
    name: 'Spotlight: Community',
    args: {
      ...DirectorySpotlight.args,
      icon: <MessageSquare />,
      title: 'Built for Us, by Us',
      description: "A secure, private, and Idaho-focused space for discussion, trading, and connecting with fellow enthusiasts. No more Facebook bullshit.",
      features: [
        { icon: <Lock />,
 text: 'Secure, Private Discussion Forums' },
        { icon: <Store />,
 text: 'Verified Member Marketplace' },
        { icon: <Star />,
 text: 'Idaho-Specific Legal & News Updates' },
      ],
      imageSrc: '/images/Fractal/3.webp',
      imageAlt: 'Abstract fractal image representing connections.',
      glowColor1: '#6E5083', // ayu-purple
      glowColor2: '#FF3B49', // ayu-red
      accentColor: '#6E5083',
      reverse: false,
    },
  };