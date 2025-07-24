import type { Meta, StoryObj } from '@storybook/react';
import { SiteFooter } from '@/components/ui/site-footer';

const meta: Meta<typeof SiteFooter> = {
  title: 'Layout & Containers/Site Footer',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive site footer component with links, contact information, and newsletter signup for gun club website.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'minimal']
    },
    showNewsletter: {
      control: 'boolean'
    },
    showSocial: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof SiteFooter>;

// Default footer with all features
export const Default: Story = {
  args: {
    variant: 'default',
    showNewsletter: true,
    showSocial: true
  }
};

// Glass variant footer
export const GlassVariant: Story = {
  args: {
    variant: 'glass',
    showNewsletter: true,
    showSocial: true
  }
};

// Minimal footer variant
export const MinimalVariant: Story = {
  args: {
    variant: 'minimal',
    showNewsletter: false,
    showSocial: true
  }
};

// Footer without newsletter
export const WithoutNewsletter: Story = {
  args: {
    variant: 'default',
    showNewsletter: false,
    showSocial: true
  }
};

// Footer without social media
export const WithoutSocial: Story = {
  args: {
    variant: 'default',
    showNewsletter: true,
    showSocial: false
  }
};

// Basic footer with minimal features
export const BasicFooter: Story = {
  args: {
    variant: 'minimal',
    showNewsletter: false,
    showSocial: false
  }
};

// Mobile optimized footer
export const MobileOptimized: Story = {
  render: (args) => (
    <div className="max-w-md mx-auto">
      <SiteFooter {...args} />
    </div>
  ),
  args: {
    variant: 'default',
    showNewsletter: true,
    showSocial: true
  }
};

// Footer with glass effect
export const GlassEffect: Story = {
  args: {
    variant: 'glass',
    showNewsletter: true,
    showSocial: true
  }
}; 