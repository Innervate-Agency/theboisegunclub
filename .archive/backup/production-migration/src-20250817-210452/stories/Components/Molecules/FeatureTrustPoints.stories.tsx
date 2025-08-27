import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/nextjs';
import { FeatureTrustPoints } from '@/components/ui/FeatureTrustPoints';
import { Search, CheckCircle, Star, Shield } from 'lucide-react';

export default {
  title: 'Design System/Components/Molecules/FeatureTrustPoints',
  component: FeatureTrustPoints,
} as ComponentMeta<typeof FeatureTrustPoints>;

const Template: ComponentStory<typeof FeatureTrustPoints> = (args) => <FeatureTrustPoints {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Search />,
  title: 'The Last Directory You\'ll Ever Need',
  description: 'A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.',
  points: [
    {
      icon: <CheckCircle />,
      text: '117+ Verified Local Businesses',
    },
    {
      icon: <Star />,
      text: 'Real-time Inventory & Service Updates',
    },
    {
      icon: <Shield />,
      text: 'Community-Driven Reviews & Ratings',
    },
  ],
};
