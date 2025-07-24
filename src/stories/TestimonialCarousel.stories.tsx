import type { Meta, StoryObj } from '@storybook/react';
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
    name: 'John Doe',
    role: 'Member',
    content: 'This is the best gun club I have ever been a member of. The facilities are top-notch and the community is welcoming.',
    rating: 5,
    avatar: 'https://github.com/shadcn.png',
  },
  {
    name: 'Jane Smith',
    role: 'Visitor',
    content: 'I had a great time visiting the club. The staff was friendly and helpful, and the ranges were clean and well-maintained.',
    rating: 4,
  },
];

export const Default: Story = {
  args: {
    title: 'What Our Members Say',
    subtitle: 'Testimonials',
    testimonials: sampleTestimonials,
  },
  render: (args) => <TestimonialCarousel {...args} />,
};
