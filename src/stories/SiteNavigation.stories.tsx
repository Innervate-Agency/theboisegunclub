import type { Meta, StoryObj } from '@storybook/nextjs';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { Home, Users, Calendar, Target, Trophy, Settings, Shield } from 'lucide-react';

const meta: Meta<typeof SiteNavigation> = {
  title: 'Navigation/SiteNavigation',
  component: SiteNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main site navigation component with Idaho theming, premium variants, and gun club specific styling. Features responsive design and accessibility support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass', 'gunclub'],
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'mega'],
    },
    sticky: {
      control: 'boolean',
    },
    showLogo: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteNavigation>;

export const Default: Story = {
  args: {
    variant: 'default',
    layout: 'horizontal',
    sticky: false,
    showLogo: true,
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    layout: 'horizontal',
    sticky: true,
    showLogo: true,
  },
};

export const Elite: Story = {
  args: {
    variant: 'elite',
    layout: 'horizontal',
    sticky: true,
    showLogo: true,
  },
};

export const GunClub: Story = {
  args: {
    variant: 'gunclub',
    layout: 'horizontal',
    sticky: true,
    showLogo: true,
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    layout: 'horizontal',
    sticky: true,
    showLogo: true,
  },
};

export const MegaMenu: Story = {
  args: {
    variant: 'premium',
    layout: 'mega',
    sticky: true,
    showLogo: true,
  },
};

export const VerticalSidebar: Story = {
  args: {
    variant: 'default',
    layout: 'vertical',
    sticky: false,
    showLogo: true,
  },
};

export const NavigationVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Default Navigation</h3>
        <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Premium Navigation</h3>
        <SiteNavigation variant="premium" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Elite Navigation</h3>
        <SiteNavigation variant="elite" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Gun Club Navigation</h3>
        <SiteNavigation variant="gunclub" layout="horizontal" showLogo={true} />
      </div>
    </div>
  ),
};

export const ResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Desktop View</h3>
        <div className="border border-overcast rounded-lg overflow-hidden">
          <SiteNavigation variant="premium" layout="horizontal" showLogo={true} />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Mobile View</h3>
        <div className="max-w-sm border border-overcast rounded-lg overflow-hidden">
          <SiteNavigation variant="premium" layout="horizontal" showLogo={true} />
        </div>
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="space-y-8">
      <SiteNavigation 
        variant="premium" 
        layout="horizontal" 
        showLogo={true}
        customContent={
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-brass-yellow text-gunmetal-black font-medium rounded-md hover:bg-copper-orange transition-colors">
              Member Login
            </button>
            <button className="px-4 py-2 bg-transparent text-blued-steel font-medium border border-case-hardened rounded-md hover:bg-case-hardened/10 transition-colors">
              Join Now
            </button>
          </div>
        }
      />
    </div>
  ),
};

export const DarkModeExample: Story = {
  render: () => (
    <div className="dark">
      <div className="bg-kent-slate-gray min-h-screen">
        <SiteNavigation variant="premium" layout="horizontal" showLogo={true} />
        <div className="p-8">
          <h2 className="text-xl font-rajdhani font-bold text-chester-white mb-4">Dark Mode Navigation</h2>
          <p className="text-don-gray">
            Navigation adapts to dark theme with appropriate colors and contrast ratios.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-6">
      <SiteNavigation variant="premium" layout="horizontal" showLogo={true} />
      <div className="p-6 bg-cloudy-day-white rounded-lg">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">Accessibility Features</h3>
        <ul className="space-y-2 text-desert-cliff-brown">
          <li>✓ Keyboard navigation support</li>
          <li>✓ Screen reader compatibility</li>
          <li>✓ High contrast mode support</li>
          <li>✓ Focus indicators</li>
          <li>✓ ARIA labels and roles</li>
          <li>✓ Skip navigation links</li>
        </ul>
      </div>
    </div>
  ),
}; 