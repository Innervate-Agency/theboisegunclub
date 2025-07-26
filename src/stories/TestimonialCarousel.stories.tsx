import type { Meta, StoryObj } from '@storybook/nextjs';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';

const meta: Meta<typeof TestimonialCarousel> = {
  title: 'Content & Media/TestimonialCarousel',
  component: TestimonialCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTestimonials = [
  {
    name: 'John Rodriguez',
    role: 'Community Member',
    content: 'This directory has been invaluable for finding quality firearms businesses across the Treasure Valley. The community connections and reviews are fantastic.',
    rating: 5,
    avatar: 'https://github.com/shadcn.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Gun Shop Owner',
    content: 'Being listed in the directory has significantly increased our customer base. The platform makes it easy for people to find our shop and services.',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    role: 'Firearms Instructor',
    content: 'I\'ve connected with dozens of new students through this platform. It\'s the go-to resource for firearms training in the region.',
    rating: 5,
  },
];

export const Default: Story = {
  args: {
    title: 'What Our Community Says',
    subtitle: 'Success Stories',
    testimonials: sampleTestimonials,
  },
  render: (args) => <TestimonialCarousel {...args} />,
};
