import type { Meta, StoryObj } from '@storybook/react';
import ArticleCard from '@/components/molecules/ArticleCard';

const meta: Meta<typeof ArticleCard> = {
  title: 'Molecules/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'tbgc',
      values: [
        { name: 'tbgc', value: 'var(--color-peachy-white)' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slug: 'sample-guide',
    title: 'The Ultimate Guide to Firearm Safety',
    date: '2025-08-15',
    author: 'John Doe',
    summary: 'A comprehensive overview of the fundamental rules of firearm safety, suitable for beginners and experienced shooters alike. Learn how to handle, transport, and store your firearms responsibly.',
  },
};