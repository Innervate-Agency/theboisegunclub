import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/DesignTokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The complete TBGC design system tokens: 26 colors, fire gradients, typography, spacing, and animation systemotion. This is the foundation for all components.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--color-sandy-ochre', '--color-rusty-orange', '--spacing-base', '--spacing-md'],
      category: 'Design System Tokens'
    }
  },
  tags: ['foundation', 'tokens', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const ColorPalette: Story = {
  render: () => (
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">TBGC Color System</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">26 carefully crafted colors from Idaho firearms heritage</p>
      </div>

      {/* Primary Brand Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Primary Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
          <div className="bg-sandy-ochre p-md rounded-sm text-black">
            <div className="font-bold">Brass Yellow</div>
            <div className="text-body-sm opacity-80">sandy-ochre</div>
          </div>
          <div className="bg-rusty-orange p-md rounded-sm text-white">
            <div className="font-bold">Copper Orange</div>
            <div className="text-body-sm opacity-80">rusty-orange</div>
          </div>
          <div className="bg-dark-chocolate p-md rounded-sm text-white">
            <div className="font-bold">Gunmetal Black</div>
            <div className="text-body-sm opacity-80">dark-chocolate</div>
          </div>
          <div className="bg-card-surface p-md rounded-sm text-black border">
            <div className="font-bold">Nickel White</div>
            <div className="text-body-sm opacity-80">card-surface</div>
          </div>
        </div>
      </section>

      {/* Light Theme Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Light Theme - Spring Day at the Range</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-base">
          <div className="bg-range-white p-base rounded-sm text-black border">
            <div className="font-bold text-body-sm">Range White</div>
          </div>
          <div className="bg-card-surface p-base rounded-sm text-black">
            <div className="font-bold text-body-sm">Shooting Bench</div>
          </div>
          <div className="bg-walnut-stock p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Walnut Stock</div>
          </div>
          <div className="bg-blued-steel p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Blued Steel</div>
          </div>
          <div className="bg-warning-amber p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Case Hardened</div>
          </div>
          <div className="bg-muzzle-flash p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Muzzle Flash</div>
          </div>
        </div>
      </section>

      {/* Ayu Enhancement Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Ayu Enhancement Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-base">
          <div className="bg-slate-blue p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Blue</div>
          </div>
          <div className="bg-ayu-green p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Green</div>
          </div>
          <div className="bg-ayu-teal p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Teal</div>
          </div>
          <div className="bg-ayu-cobalt p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Cobalt</div>
          </div>
          <div className="bg-ayu-purple p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Purple</div>
          </div>
          <div className="bg-ayu-red p-base rounded-sm text-white">
            <div className="font-bold text-body-sm">Ayu Red</div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const FireGradients: Story = {
  render: () => (
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">FireIcon Gradient System</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">Animated gradients that "unfurl" from the left like proper fire effects</p>
      </div>

      {/* Static FireIcon Gradients */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Static FireIcon Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="bg-fire-orange p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Orange</div>
            <div className="text-body-sm opacity-80">Copper Orange → Brass Yellow</div>
          </div>
          <div className="bg-fire-blue p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Blue</div>
            <div className="text-body-sm opacity-80">Ayu Blue → Ayu Green</div>
          </div>
          <div className="bg-fire-purple p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Purple</div>
            <div className="text-body-sm opacity-80">Ayu Purple → Ayu Cobalt</div>
          </div>
          <div className="bg-fire-green p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Green</div>
            <div className="text-body-sm opacity-80">Ayu Green → Bore Sight Green</div>
          </div>
        </div>
      </section>

      {/* Animated FireIcon Gradients */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Animated FireIcon Effects</h2>
        <div className="space-y-md">
          <div className="relative bg-card p-lg rounded-sm border overflow-hidden cursor-pointer animate-fire-unfurl">
            <div className="relative z-10">
              <div className="font-bold text-display-sm">FireIcon Unfurl Effect</div>
              <div className="text-body-sm text-muted-foreground">Hover to see gradient unfurl from left</div>
            </div>
          </div>
          
          <div className="animate-fire-pulse p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Pulse Animation</div>
            <div className="text-body-sm opacity-80">Continuous background animation</div>
          </div>
          
          <div className="bg-fire-orange animate-fire-glow p-lg rounded-sm text-white">
            <div className="font-bold text-display-sm">FireIcon Glow Effect</div>
            <div className="text-body-sm opacity-80">Pulsing glow shadow</div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">Typography System</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">Idaho firearms heritage typography hierarchy</p>
      </div>

      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Font Families</h2>
        <div className="space-y-base">
          <div className="p-md bg-card rounded-sm border">
            <h3 className="font-rajdhani text-display-sm font-bold mb-xs">Rajdhani - Display Font</h3>
            <p className="text-muted-foreground">Used for H1, H2 headers and display text</p>
          </div>
          <div className="p-md bg-card rounded-sm border">
            <h3 className="font-noto-sans text-display-sm font-bold mb-xs">Noto Sans - Body Font</h3>
            <p className="text-muted-foreground">Used for H3-H6, body text, and UI components</p>
          </div>
          <div className="p-md bg-card rounded-sm border">
            <h3 className="font-serif text-display-sm font-bold mb-xs">Noto Serif - Editorial Font</h3>
            <p className="text-muted-foreground">Used for articles, blog posts, and editorial content</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Text Scale</h2>
        <div className="space-y-sm">
          <div className="text-9xl font-rajdhani font-bold">9XL Display</div>
          <div className="text-8xl font-rajdhani font-bold">8XL Display</div>
          <div className="text-7xl font-rajdhani font-bold">7XL Display</div>
          <div className="text-6xl font-rajdhani font-bold">6XL Display</div>
          <div className="text-5xl font-rajdhani font-bold">5XL Heading</div>
          <div className="text-4xl font-rajdhani font-bold">4XL Heading</div>
          <div className="text-3xl font-rajdhani font-bold">3XL Heading</div>
          <div className="text-display-md font-rajdhani font-bold">2XL Heading</div>
          <div className="text-display-sm font-noto-sans font-bold">XL Heading</div>
          <div className="text-body-lg font-noto-sans font-semibold">Large Text</div>
          <div className="text-base font-noto-sans">Base Text</div>
          <div className="text-body-sm font-noto-sans">Small Text</div>
          <div className="text-caption font-noto-sans">Extra Small Text</div>
        </div>
      </section>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">Spacing System</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">Consistent spacing tokens from micro to page-level</p>
      </div>

      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Spacing Scale</h2>
        <div className="space-y-base">
          {[
            { name: 'Micro', value: '2px', class: 'space-micro' },
            { name: 'Tiny', value: '4px', class: 'space-tiny' },
            { name: 'XS', value: '8px', class: 'space-xs' },
            { name: 'SM', value: '12px', class: 'space-sm' },
            { name: 'Base', value: '16px', class: 'space-base' },
            { name: 'MD', value: '24px', class: 'space-md' },
            { name: 'LG', value: '32px', class: 'space-lg' },
            { name: 'XL', value: '48px', class: 'space-xl' },
            { name: '2XL', value: '64px', class: 'space-2xl' },
            { name: '3XL', value: '96px', class: 'space-3xl' },
            { name: '4XL', value: '128px', class: 'space-4xl' },
          ].map((space) => (
            <div key={space.name} className="flex items-center gap-base">
              <div className="w-20 text-body-sm font-mono">{space.name}</div>
              <div className="w-16 text-caption text-muted-foreground">{space.value}</div>
              <div className={`bg-sandy-ochre h-5`} style={{ width: space.value }}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
