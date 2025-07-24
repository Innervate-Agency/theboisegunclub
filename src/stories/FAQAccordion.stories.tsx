import type { Meta, StoryObj } from '@storybook/react';
import FAQAccordion from '@/components/ui/faq-accordion';

const sampleFAQs = [
  {
    id: '1',
    question: 'What are the range hours?',
    answer: 'Our ranges are open Monday through Friday from 9 AM to 8 PM, and Saturday-Sunday from 8 AM to 6 PM.',
    category: 'General'
  },
  {
    id: '2', 
    question: 'Do I need to be a member to use the facilities?',
    answer: 'No, we welcome both members and non-members. However, members receive discounted rates and priority booking.',
    category: 'Membership'
  },
  {
    id: '3',
    question: 'What safety equipment is required?',
    answer: 'Eye and ear protection are mandatory on all ranges. We provide safety equipment for rent if you don\'t have your own.',
    category: 'Safety'
  },
  {
    id: '4',
    question: 'Can I bring my own ammunition?',
    answer: 'Yes, you may bring your own ammunition. All ammunition must be commercially manufactured and meet our safety standards.',
    category: 'Equipment'
  }
];

const meta: Meta<typeof FAQAccordion> = {
  title: 'Content & Media/FAQAccordion',
  component: FAQAccordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqs: sampleFAQs,
  },
  render: (args) => (
    <div className="w-full max-w-4xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};

export const CompactView: Story = {
  args: {
    faqs: sampleFAQs,
    variant: 'compact',
    showCategories: false,
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};

export const CardView: Story = {
  args: {
    faqs: sampleFAQs,
    variant: 'card',
  },
  render: (args) => (
    <div className="w-full max-w-4xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};
