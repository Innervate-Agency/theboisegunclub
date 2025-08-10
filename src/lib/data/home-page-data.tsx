import React from 'react';
import { Building2, Calendar, Share2, Target, Search, MessageSquare, ShieldCheck, List, Star, Users, Lock, Store } from 'lucide-react';

export const statCardsData = [
  {
    icon: <Building2 />,
    value: '100+',
    label: 'Local Vendors',
    variant: 'default',
  },
  {
    icon: <Calendar />,
    value: '50+',
    label: 'Community Events',
    variant: 'default',
  },
  {
    icon: <Share2 />,
    value: '1,200+',
    label: 'Active Members',
    variant: 'default',
  },
  {
    icon: <Target />,
    value: '24/7',
    label: 'Community Support',
    variant: 'default',
  },
] as const;

export const directoryData = {
  icon: <Search />,
  title: "The Last Directory You'll Ever Need",
  description: "A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.",
  features: [
    { icon: <ShieldCheck />, text: '117+ Verified Local Businesses' },
    { icon: <List />, text: 'Real-time Inventory & Service Updates' },
    { icon: <Star />, text: 'Community-Driven Reviews & Ratings' },
  ],
  imageSrc: '/images/Fractal/1.webp',
  imageAlt: 'Abstract fractal image representing a network.',
  glowColor1: '#3F6331',
  glowColor2: '#FF00FF',
  accentColor: '#3F6331',
};

export const calendarData = {
  icon: <Calendar />,
  title: 'One Calendar to Rule Them All',
  description: "We're consolidating every match, class, and event from every local club into one master calendar. Stop searching, start participating.",
  features: [
    { icon: <Users />, text: 'Unified View of All Local Clubs' },
    { icon: <List />, text: 'Smart Scheduling to Avoid Conflicts' },
    { icon: <Star />, text: 'Direct Registration & Reminders' },
  ],
  imageSrc: '/images/Fractal/2.webp',
  imageAlt: 'Abstract fractal image representing a timeline.',
  glowColor1: '#FF00FF',
  glowColor2: '#75B700',
  accentColor: '#FF00FF',
};

export const communityData = {
  icon: <MessageSquare />,
  title: 'Built for Us, by Us',
  description: "A secure, private, and Idaho-focused space for discussion, trading, and connecting with fellow enthusiasts. No more Facebook bullshit.",
  features: [
    { icon: <Lock />, text: 'Secure, Private Discussion Forums' },
    { icon: <Store />, text: 'Verified Member Marketplace' },
    { icon: <Star />, text: 'Idaho-Specific Legal & News Updates' },
  ],
  imageSrc: '/images/Fractal/3.webp',
  imageAlt: 'Abstract fractal image representing connections.',
  glowColor1: '#FF00FF',
  glowColor2: '#FF3B49',
  accentColor: '#FF00FF',
};
