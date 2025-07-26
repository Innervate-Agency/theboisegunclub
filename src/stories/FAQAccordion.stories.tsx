import type { Meta, StoryObj } from '@storybook/nextjs';
import FAQAccordion from '@/components/ui/faq-accordion';

const sampleFAQs = [
  {
    id: '1',
    question: 'How do I find business hours for local ranges?',
    answer: 'Each business listing in our directory includes current operating hours. Hours vary by location, so check individual listings for the most up-to-date information.',
    category: 'Directory'
  },
  {
    id: '2', 
    question: 'How do I get my business listed in the directory?',
    answer: 'Submit your business information through our "Add Your Business" form. We review all submissions and typically approve legitimate firearms businesses within 24-48 hours.',
    category: 'Business Listings'
  },
  {
    id: '3',
    question: 'Is the directory free to use?',
    answer: 'Yes, browsing the directory and accessing basic business information is completely free. Premium features like advanced search and exclusive deals are available with a paid membership.',
    category: 'General'
  },
  {
    id: '4',
    question: 'How do I report incorrect business information?',
    answer: 'Each business listing has a "Report Issue" link. You can also contact us directly through our support form with corrections or updates.',
    category: 'Directory'
  },
  {
    id: '5',
    question: 'Can I leave reviews for businesses?',
    answer: 'Yes, registered community members can leave reviews and ratings for businesses they\'ve visited. Reviews help other community members make informed decisions.',
    category: 'Community'
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
