import type { Meta, StoryObj } from '@storybook/nextjs';
import NewThemeToggle from '@/components/ui/NewThemeToggle';

const meta: Meta<typeof NewThemeToggle> = {
  title: 'Core UI/NewThemeToggle',
  component: NewThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Theme toggle component for switching between light, dark, and system themes. Features smooth animations and cycles through all three options.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewThemeToggle>;

export const Default: Story = {
  render: () => <NewThemeToggle />,
};

export const ThemeToggleExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">
          Theme Toggle
        </h3>
        <p className="text-sm text-desert-cliff-brown mb-6">
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
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">
          Theme States
        </h3>
        <p className="text-sm text-desert-cliff-brown mb-6">
          The toggle cycles through these three states:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-cloudy-day-white rounded-lg text-center">
          <div className="text-2xl mb-2">☀️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-2">Light Mode</h4>
          <p className="text-sm text-desert-cliff-brown">Bright, clean interface</p>
        </div>
        <div className="p-6 bg-kent-slate-gray rounded-lg text-center">
          <div className="text-2xl mb-2">🌙</div>
          <h4 className="font-rajdhani font-bold text-chester-white mb-2">Dark Mode</h4>
          <p className="text-sm text-don-gray">Low-light friendly</p>
        </div>
        <div className="p-6 bg-overcast rounded-lg text-center">
          <div className="text-2xl mb-2">🖥️</div>
          <h4 className="font-rajdhani font-bold text-blued-steel mb-2">System</h4>
          <p className="text-sm text-desert-cliff-brown">Follows OS preference</p>
        </div>
      </div>
    </div>
  ),
};

export const FloatingPosition: Story = {
  render: () => (
    <div className="relative min-h-96 p-8 bg-gradient-to-br from-cloudy-day-white to-overcast rounded-lg">
      <div className="text-center">
        <h3 className="text-lg font-rajdhani font-bold text-blued-steel mb-4">
          Floating Theme Toggle
        </h3>
        <p className="text-sm text-desert-cliff-brown mb-6">
          The toggle is positioned fixed at the bottom-left corner
        </p>
        <div className="p-6 bg-cloudy-day-white rounded-lg shadow-sm">
          <p className="text-desert-cliff-brown">
            This demonstrates the floating theme toggle positioned at the bottom-left of the screen.
            Click it to cycle through light, dark, and system themes.
          </p>
        </div>
      </div>
      <NewThemeToggle />
    </div>
  ),
}; 