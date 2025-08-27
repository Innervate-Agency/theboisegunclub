import React from 'react';
import { BuildingOffice2Icon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, CursorArrowRaysIcon, ListBulletIcon, LockClosedIcon, MagnifyingGlassIcon, ShareIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

export const statCardsData = [
  {
    icon: <BuildingOffice2Icon />,
    value: '100+',
    label: 'Local Vendors',
    variant: 'default',
  },
  {
    icon: <CalendarDaysIcon />,
    value: '50+',
    label: 'Community Events',
    variant: 'default',
  },
  {
    icon: <ShareIcon />,
    value: '1,200+',
    label: 'Active Members',
    variant: 'default',
  },
  {
    icon: <CursorArrowRaysIcon />,
    value: '24/7',
    label: 'Community Support',
    variant: 'default',
  },
] as const;

export const directoryData = {
  icon: <MagnifyingGlassIcon />,
  title: "The Last Directory You'll Ever Need",
  description: "A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.",
  features: [
    { icon: <ShieldCheck />, text: '117+ Verified Local Businesses' },
    { icon: <ListBulletIcon />, text: 'Real-time Inventory & Service Updates' },
    { icon: <StarIcon />, text: 'Community-Driven Reviews & Ratings' },
  ],
  imageSrc: '/images/Fractal/1.webp',
  imageAlt: 'Abstract fractal image representing a network.',
};

export const calendarData = {
  icon: <CalendarDaysIcon />,
  title: 'One CalendarDaysIcon to Rule Them All',
  description: "We're consolidating every match, class, and event from every local club into one master calendar. Stop searching, start participating.",
  features: [
    { icon: <UsersIcon />, text: 'Unified View of All Local Clubs' },
    { icon: <ListBulletIcon />, text: 'Smart Scheduling to Avoid Conflicts' },
    { icon: <StarIcon />, text: 'Direct Registration & Reminders' },
  ],
  imageSrc: '/images/Fractal/2.webp',
  imageAlt: 'Abstract fractal image representing a timeline.',
};

export const communityData = {
  icon: <ChatBubbleLeftRightIcon />,
  title: 'Built for Us, by Us',
  description: "A secure, private, and Idaho-focused space for discussion, trading, and connecting with fellow enthusiasts. No more Facebook bullshit.",
  features: [
    { icon: <LockClosedIcon />, text: 'Secure, Private Discussion Forums' },
    { icon: <Store />, text: 'Verified Member Buy & Sell' },
    { icon: <StarIcon />, text: 'Idaho-Specific Legal & News Updates' },
  ],
  imageSrc: '/images/Fractal/3.webp',
  imageAlt: 'Abstract fractal image representing connections.',
};
