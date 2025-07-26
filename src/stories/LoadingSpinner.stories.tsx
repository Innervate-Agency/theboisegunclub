import type { Meta, StoryObj } from '@storybook/nextjs';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Core UI/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loading spinner component with clay target theming. Uses Leonard Yellow and Lahoma Orange for branded loading states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    text: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    size: 'md',
    text: 'Loading...',
  },
};

export const WithCustomText: Story = {
  args: {
    size: 'md',
    text: 'Processing membership application...',
  },
};

export const LoadingSchedule: Story = {
  args: {
    size: 'md',
    text: 'Loading range schedule...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="sm" text="Small" />
        <span className="text-sm text-desert-cliff-brown">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="md" text="Medium" />
        <span className="text-sm text-desert-cliff-brown">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="lg" text="Large" />
        <span className="text-sm text-desert-cliff-brown">Large</span>
      </div>
    </div>
  ),
};

export const GunClubContexts: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="md" text="Loading competition results..." />
        <span className="text-sm text-desert-cliff-brown">Competition Results</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="md" text="Processing membership renewal..." />
        <span className="text-sm text-desert-cliff-brown">Membership Processing</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="md" text="Uploading range photos..." />
        <span className="text-sm text-desert-cliff-brown">File Upload</span>
      </div>
    </div>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center gap-4 p-4 bg-cloudy-day-white rounded-lg">
        <LoadingSpinner size="sm" text="" />
        <span className="text-blued-steel">Processing membership application...</span>
      </div>
      <div className="flex items-center gap-4 p-4 bg-cloudy-day-white rounded-lg">
        <LoadingSpinner size="sm" text="" />
        <span className="text-blued-steel">Loading range schedule...</span>
      </div>
      <div className="flex items-center gap-4 p-4 bg-cloudy-day-white rounded-lg">
        <LoadingSpinner size="sm" text="" />
        <span className="text-blued-steel">Submitting competition scores...</span>
      </div>
    </div>
  ),
}; 