import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { AuthProvider } from '@/components/auth/auth-context';
import { CalendarDaysIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof SiteNavigation> = {
  title: 'Design System/Organisms/SiteNavigation',
  component: SiteNavigation,
  parameters: {
    nextjs: {
      router: {
        pathname: '/',
      },
    },
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
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
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
  parameters: {
    nextjs: {
      router: {
        pathname: '/',
      },
    },
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
    <div className="space-y-lg">
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Default Navigation</h3>
        <SiteNavigation variant="outline" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Premium Navigation</h3>
        <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Elite Navigation</h3>
        <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
      </div>
      
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Gun Club Navigation</h3>
        <SiteNavigation variant="gunclub" layout="horizontal" showLogo={true} />
      </div>
    </div>
  ),
};

export const ResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-lg">
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Desktop View</h3>
        <div className="border border-warm-stone rounded-sm overflow-hidden">
          <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
        </div>
      </div>
      
      <div>
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Mobile View</h3>
        <div className="max-w-sm border border-warm-stone rounded-sm overflow-hidden">
          <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
        </div>
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="space-y-lg">
      <SiteNavigation 
        variant="default" 
        layout="horizontal" 
        showLogo={true}
        customContent={
          <div className="flex items-center gap-base">
            <button className="px-base py-xs bg-sandy-ochre text-dark-chocolate font-medium rounded-input hover:bg-rusty-orange transition-colors">
              Member Login
            </button>
            <button className="px-base py-xs bg-transparent text-blued-steel font-medium border border-warning-amber rounded-input hover:bg-warning-amber/10 transition-colors">
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
        <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
        <div className="p-lg">
          <h2 className="text-display-sm font-rajdhani font-bold text-chester-white mb-base">Dark Mode Navigation</h2>
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
    <div className="space-y-md">
      <SiteNavigation variant="default" layout="horizontal" showLogo={true} />
      <div className="p-md bg-range-white rounded-sm">
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">Accessibility Features</h3>
        <ul className="space-y-xs text-desert-cliff-brown">
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