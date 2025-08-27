import type { Meta, StoryObj } from '@storybook/nextjs';
import AlternatingFeatureSpotlight from '@/components/organisms/AlternatingFeatureSpotlight';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, ListBulletIcon, LockClosedIcon, MagnifyingGlassIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

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
    variant: 'directory',
    icon: <MagnifyingGlassIcon />,
    title: "The Last Directory You'll Ever Need",
    description: "A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.",
    features: [
      { icon: <ShieldCheck />,
 text: '117+ Verified Local Businesses' },
      { icon: <ListBulletIcon />,
 text: 'Real-time Inventory & Service Updates' },
      { icon: <StarIcon />,
 text: 'Community-Driven Reviews & Ratings' },
    ],
    imageSrc: '/images/Fractal/1.webp',
    imageAlt: 'Abstract fractal image representing a network.',
    reverse: false,
  },
};

export const CalendarSpotlight: Story = {
  name: 'Spotlight: CalendarDaysIcon (Reversed)',
  args: {
    ...DirectorySpotlight.args,
    variant: 'calendar',
    icon: <CalendarDaysIcon />,
    title: 'One CalendarDaysIcon to Rule Them All',
    description: "We're consolidating every match, class, and event from every local club into one master calendar. Stop searching, start participating.",
    features: [
      { icon: <UsersIcon />,
 text: 'Unified View of All Local Clubs' },
      { icon: <ListBulletIcon />,
 text: 'Smart Scheduling to Avoid Conflicts' },
      { icon: <StarIcon />,
 text: 'Direct Registration & Reminders' },
    ],
    imageSrc: '/images/Fractal/2.webp',
    imageAlt: 'Abstract fractal image representing a timeline.',
    reverse: true,
  },
};

export const CommunitySpotlight: Story = {
    name: 'Spotlight: Community',
    args: {
      ...DirectorySpotlight.args,
      variant: 'community',
      icon: <ChatBubbleLeftRightIcon />,
      title: 'Built for Us, by Us',
      description: "A secure, private, and Idaho-focused space for discussion, trading, and connecting with fellow enthusiasts. No more Facebook bullshit.",
      features: [
        { icon: <LockClosedIcon />,
 text: 'Secure, Private Discussion Forums' },
        { icon: <Store />,
 text: 'Verified Member Buy & Sell' },
        { icon: <StarIcon />,
 text: 'Idaho-Specific Legal & News Updates' },
      ],
      imageSrc: '/images/Fractal/3.webp',
      imageAlt: 'Abstract fractal image representing connections.',
      reverse: false,
    },
  };