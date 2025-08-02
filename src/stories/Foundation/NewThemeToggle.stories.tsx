import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewThemeToggle from '@/components/ui/NewThemeToggle';

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
    <div className="space-y-[var(--space-lg)]">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-[var(--space-base)]">
          Theme Toggle
        </h3>
        <p className="text-sm text-desert-cliff-brown mb-[var(--space-md)]">
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
    <div className="space-y-[var(--space-lg)]">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-[var(--space-base)]">
          Theme States
        </h3>
        <p className="text-sm text-case-hardened mb-[var(--space-md)]">
          The toggle cycles through these three states:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-md)]">
        <div className="p-[var(--space-md)] bg-range-white rounded-lg text-center">
          <div className="text-2xl mb-[var(--space-xs)]">☀️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-[var(--space-xs)]">Light Mode</h4>
          <p className="text-sm text-case-hardened">Bright, clean interface</p>
        </div>
        <div className="p-[var(--space-md)] bg-night-sight rounded-lg text-center">
          <div className="text-2xl mb-[var(--space-xs)]">🌙</div>
          <h4 className="font-rajdhani font-bold text-titanium-white mb-[var(--space-xs)]">Dark Mode</h4>
          <p className="text-sm text-stainless-steel">Low-light friendly</p>
        </div>
        <div className="p-[var(--space-md)] bg-tactical-gray rounded-lg text-center">
          <div className="text-2xl mb-[var(--space-xs)]">🖥️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-[var(--space-xs)]">System</h4>
          <p className="text-sm text-case-hardened">Follows OS preference</p>
        </div>
      </div>
    </div>
  ),
};

export const FloatingPosition: Story = {
  render: () => (
    <div className="relative min-h-96 p-[var(--space-lg)] bg-gradient-to-br from-range-white to-tactical-gray rounded-lg">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-[var(--space-base)]">
          Floating Theme Toggle
        </h3>
        <p className="text-sm text-case-hardened mb-[var(--space-md)]">
          The toggle is positioned fixed at the bottom-left corner
        </p>
        <div className="p-[var(--space-md)] bg-range-white rounded-lg shadow-sm">
          <p className="text-case-hardened">
            This demonstrates the floating theme toggle positioned at the bottom-left of the screen.
            Click it to cycle through light, dark, and system themes.
          </p>
        </div>
      </div>
      <NewThemeToggle />
    </div>
  ),
}; 