import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconShowcase } from '@/components/ui/icon-showcase';

const meta: Meta<typeof IconShowcase> = {
  title: 'Design System/Foundation/IconShowcase',
  component: IconShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of professional Lucide React icons integrated with the TBGC Design Systemotion. Features clean line icons organized by category with consistent sizing and coloring tokens.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title for the icon showcase'
    },
    subtitle: {
      control: 'text', 
      description: 'Subtitle description for the showcase'
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconShowcase>;

// Default showcase with all categories
export const Default: Story = {
  args: {
    title: 'Professional Icon Library',
    subtitle: 'Lucide React icons integrated with Idaho Firearms Heritage Design System'
  }
};

// Minimal showcase without header
export const Minimal: Story = {
  args: {}
};

// Business focus showcase
export const BusinessFocused: Story = {
  args: {
    title: 'Business & Commerce Icons',
    subtitle: 'Professional icons for firearms dealers, ranges, and outdoor businesses'
  }
};

// Development reference
export const DeveloperReference: Story = {
  args: {
    title: 'Developer Icon Reference',
    subtitle: 'Complete icon system with TBGC color tokens and sizing utilities'
  }
};