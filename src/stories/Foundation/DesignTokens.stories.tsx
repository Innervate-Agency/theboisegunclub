import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/DesignTokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The complete TBGC design system tokens: 26 colors, fire gradients, typography, spacing, and animation system. This is the foundation for all components.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--color-*', '--space-*', '--text-*', '--shadow-*'],
      category: 'Design System Tokens'
    }
  },
  tags: ['foundation', 'tokens', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const ColorPalette: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">TBGC Color System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">26 carefully crafted colors from Idaho firearms heritage</p>
      </div>

      {/* Primary Brand Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Primary Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-base)]">
          <div className="bg-brass-yellow p-[var(--space-md)] rounded-lg text-black">
            <div className="font-bold">Brass Yellow</div>
            <div className="text-sm opacity-80">#F2CB05</div>
          </div>
          <div className="bg-copper-orange p-[var(--space-md)] rounded-lg text-white">
            <div className="font-bold">Copper Orange</div>
            <div className="text-sm opacity-80">#F28705</div>
          </div>
          <div className="bg-gunmetal-black p-[var(--space-md)] rounded-lg text-white">
            <div className="font-bold">Gunmetal Black</div>
            <div className="text-sm opacity-80">#0A0A0A</div>
          </div>
          <div className="bg-nickel-white p-[var(--space-md)] rounded-lg text-black border">
            <div className="font-bold">Nickel White</div>
            <div className="text-sm opacity-80">#FFFFFF</div>
          </div>
        </div>
      </section>

      {/* Light Theme Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Light Theme - Spring Day at the Range</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[var(--space-base)]">
          <div className="bg-range-white p-[var(--space-base)] rounded-lg text-black border">
            <div className="font-bold text-sm">Range White</div>
          </div>
          <div className="bg-shooting-bench p-[var(--space-base)] rounded-lg text-black">
            <div className="font-bold text-sm">Shooting Bench</div>
          </div>
          <div className="bg-walnut-stock p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Walnut Stock</div>
          </div>
          <div className="bg-blued-steel p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Blued Steel</div>
          </div>
          <div className="bg-case-hardened p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Case Hardened</div>
          </div>
          <div className="bg-muzzle-flash p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Muzzle Flash</div>
          </div>
        </div>
      </section>

      {/* Ayu Enhancement Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Ayu Enhancement Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[var(--space-base)]">
          <div className="bg-ayu-blue p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Blue</div>
          </div>
          <div className="bg-ayu-green p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Green</div>
          </div>
          <div className="bg-ayu-teal p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Teal</div>
          </div>
          <div className="bg-ayu-cobalt p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Cobalt</div>
          </div>
          <div className="bg-ayu-purple p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Purple</div>
          </div>
          <div className="bg-ayu-red p-[var(--space-base)] rounded-lg text-white">
            <div className="font-bold text-sm">Ayu Red</div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const FireGradients: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">Fire Gradient System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Animated gradients that "unfurl" from the left like proper fire effects</p>
      </div>

      {/* Static Fire Gradients */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Static Fire Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          <div className="bg-fire-orange p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Orange</div>
            <div className="text-sm opacity-80">Copper Orange → Brass Yellow</div>
          </div>
          <div className="bg-fire-blue p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Blue</div>
            <div className="text-sm opacity-80">Ayu Blue → Ayu Green</div>
          </div>
          <div className="bg-fire-purple p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Purple</div>
            <div className="text-sm opacity-80">Ayu Purple → Ayu Cobalt</div>
          </div>
          <div className="bg-fire-green p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Green</div>
            <div className="text-sm opacity-80">Ayu Green → Bore Sight Green</div>
          </div>
        </div>
      </section>

      {/* Animated Fire Gradients */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Animated Fire Effects</h2>
        <div className="space-y-[var(--space-md)]">
          <div className="relative bg-card p-[var(--space-lg)] rounded-lg border overflow-hidden cursor-pointer animate-fire-unfurl">
            <div className="relative z-10">
              <div className="font-bold text-xl">Fire Unfurl Effect</div>
              <div className="text-sm text-muted-foreground">Hover to see gradient unfurl from left</div>
            </div>
          </div>
          
          <div className="animate-fire-pulse p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Pulse Animation</div>
            <div className="text-sm opacity-80">Continuous background animation</div>
          </div>
          
          <div className="bg-fire-orange animate-fire-glow p-[var(--space-lg)] rounded-lg text-white">
            <div className="font-bold text-xl">Fire Glow Effect</div>
            <div className="text-sm opacity-80">Pulsing glow shadow</div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">Typography System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Idaho firearms heritage typography hierarchy</p>
      </div>

      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Font Families</h2>
        <div className="space-y-[var(--space-base)]">
          <div className="p-[var(--space-md)] bg-card rounded-lg border">
            <h3 className="font-rajdhani text-xl font-bold mb-[var(--space-xs)]">Rajdhani - Display Font</h3>
            <p className="text-muted-foreground">Used for H1, H2 headers and display text</p>
          </div>
          <div className="p-[var(--space-md)] bg-card rounded-lg border">
            <h3 className="font-noto-sans text-xl font-bold mb-[var(--space-xs)]">Noto Sans - Body Font</h3>
            <p className="text-muted-foreground">Used for H3-H6, body text, and UI components</p>
          </div>
          <div className="p-[var(--space-md)] bg-card rounded-lg border">
            <h3 className="font-serif text-xl font-bold mb-[var(--space-xs)]">Noto Serif - Editorial Font</h3>
            <p className="text-muted-foreground">Used for articles, blog posts, and editorial content</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Text Scale</h2>
        <div className="space-y-[var(--space-sm)]">
          <div className="text-9xl font-rajdhani font-bold">9XL Display</div>
          <div className="text-8xl font-rajdhani font-bold">8XL Display</div>
          <div className="text-7xl font-rajdhani font-bold">7XL Display</div>
          <div className="text-6xl font-rajdhani font-bold">6XL Display</div>
          <div className="text-5xl font-rajdhani font-bold">5XL Heading</div>
          <div className="text-4xl font-rajdhani font-bold">4XL Heading</div>
          <div className="text-3xl font-rajdhani font-bold">3XL Heading</div>
          <div className="text-2xl font-rajdhani font-bold">2XL Heading</div>
          <div className="text-xl font-noto-sans font-bold">XL Heading</div>
          <div className="text-lg font-noto-sans font-semibold">Large Text</div>
          <div className="text-base font-noto-sans">Base Text</div>
          <div className="text-sm font-noto-sans">Small Text</div>
          <div className="text-xs font-noto-sans">Extra Small Text</div>
        </div>
      </section>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">Spacing System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Consistent spacing tokens from micro to page-level</p>
      </div>

      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Spacing Scale</h2>
        <div className="space-y-[var(--space-base)]">
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
            <div key={space.name} className="flex items-center gap-[var(--space-base)]">
              <div className="w-20 text-sm font-mono">{space.name}</div>
              <div className="w-16 text-xs text-muted-foreground">{space.value}</div>
              <div className={`bg-brass-yellow h-5`} style={{ width: space.value }}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
