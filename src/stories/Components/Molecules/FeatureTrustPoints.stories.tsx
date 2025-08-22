import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/nextjs';
import { FeatureTrustPoints } from '@/components/ui/FeatureTrustPoints';
import { CheckCircleIcon, MagnifyingGlassIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Design System/Components/Molecules/FeatureTrustPoints',
  component: FeatureTrustPoints,
} as ComponentMeta<typeof FeatureTrustPoints>;

const Template: ComponentStory<typeof FeatureTrustPoints> = (args) => <FeatureTrustPoints {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <MagnifyingGlassIcon />,
  title: 'The Last Directory You\'ll Ever Need',
  description: 'A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.',
  points: [
    {
      icon: <CheckCircleIcon />,
      text: '117+ Verified Local Businesses',
    },
    {
      icon: <StarIcon />,
      text: 'Real-time Inventory & Service Updates',
    },
    {
      icon: <ShieldCheckIcon />,
      text: 'Community-Driven Reviews & Ratings',
    },
  ],
};
