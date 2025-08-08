import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NewThemeToggle } from '@/components/ui/NewThemeToggle';

const meta: Meta<typeof NewThemeToggle> = {
  title: 'Design System/Foundation/ThemeToggle',
  component: NewThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Theme toggle component for switching between light, dark, and system themes. Features smooth animations and cycles through all three options.',
      },
    },
  },
  tags: ['autodocs', 'stable', 'interactive'],
};

export default meta;
type Story = StoryObj<typeof NewThemeToggle>;

export const Default: Story = {
  render: () => <NewThemeToggle />,
};

export const ThemeToggleExample: Story = {
  render: () => (
    <div className="space-y-lg">
      <div className="text-center">
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">
          Theme Toggle
        </h3>
        <p className="text-body-sm text-desert-cliff-brown mb-md">
          Click to cycle through light → dark → system themes
        </p>
      </div>
      <div className="flex justify-center">
        <NewThemeToggle />
      </div>
    </div>
  ),
};

export const ThemeStates: Story = {
  render: () => (
    <div className="space-y-lg">
      <div className="text-center">
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">
          Theme States
        </h3>
        <p className="text-body-sm text-warning-amber mb-md">
          The toggle cycles through these three states:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="p-md bg-range-white rounded-card text-center">
          <div className="text-display-md mb-xs">☀️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-xs">Light Mode</h4>
          <p className="text-body-sm text-warning-amber">Bright, clean interface</p>
        </div>
        <div className="p-md bg-night-sight rounded-card text-center">
          <div className="text-display-md mb-xs">🌙</div>
          <h4 className="font-rajdhani font-bold text-titanium-white mb-xs">Dark Mode</h4>
          <p className="text-body-sm text-stainless-steel">Low-light friendly</p>
        </div>
        <div className="p-md bg-warm-stone rounded-card text-center">
          <div className="text-display-md mb-xs">🖥️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-xs">System</h4>
          <p className="text-body-sm text-warning-amber">Follows OS preference</p>
        </div>
      </div>
    </div>
  ),
};

export const FloatingPosition: Story = {
  render: () => (
    <div className="relative min-h-96 p-lg bg-gradient-to-br from-range-white to-warm-stone rounded-card">
      <div className="text-center">
        <h3 className="text-body-lg font-rajdhani font-bold text-blued-steel mb-base">
          Floating Theme Toggle
        </h3>
        <p className="text-body-sm text-warning-amber mb-md">
          The toggle is positioned fixed at the bottom-left corner
        </p>
        <div className="p-md bg-range-white rounded-card shadow-flat">
          <p className="text-warning-amber">
            This demonstrates the floating theme toggle positioned at the bottom-left of the screen.
            Click it to cycle through light, dark, and system themes.
          </p>
        </div>
      </div>
      <NewThemeToggle />
    </div>
  ),
}; 