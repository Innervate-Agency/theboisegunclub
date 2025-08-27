import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/SpacingSystem',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TBGC spacing system with consistent 1.5x scaling ratio. All spacing tokens are available as CSS variables and used throughout the design system.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--spacing-xs', '--spacing-sm', '--spacing-base', '--spacing-md', '--spacing-lg', '--spacing-xl', '--spacing-2xl'],
      category: 'Spacing'
    }
  },
  tags: ['foundation', 'spacing', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const SpacingScale: Story = {
  render: () => (
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">TBGC Spacing System</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">Consistent spacing with 1.5x scaling ratio</p>
      </div>

      {/* Base Spacing Scale */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Base Spacing Scale</h2>
        <div className="space-y-base">
          {[
            { name: 'Micro', value: '--spacing-micro', px: '2px', usage: 'Fine details, border thickness' },
            { name: 'XS', value: '--spacing-xs', px: '8px', usage: 'Small gaps, compact layouts' },
            { name: 'SM', value: '--spacing-sm', px: '12px', usage: 'Default gaps, form spacing' },
            { name: 'Base', value: '--spacing-base', px: '16px', usage: 'Card padding, button padding' },
            { name: 'MD', value: '--spacing-md', px: '24px', usage: 'Section spacing, large gaps' },
            { name: 'LG', value: '--spacing-lg', px: '32px', usage: 'Component separation' },
            { name: 'XL', value: '--spacing-xl', px: '48px', usage: 'Major section spacing' },
            { name: '2XL', value: '--spacing-2xl', px: '64px', usage: 'Hero section spacing' },
            { name: '3XL', value: '--spacing-3xl', px: '96px', usage: 'Large hero spacing' },
            { name: '4XL', value: '--spacing-4xl', px: '128px', usage: 'Maximum section spacing' },
          ].map((token) => (
            <div key={token.name} className="flex items-center gap-base p-base bg-card rounded-sm border">
              <div className="w-24 text-body-sm font-medium">{token.name}</div>
              <div className="flex-1">
                <div 
                  className="bg-sandy-ochre rounded"
                  style={{ 
                    width: `var(${token.value})`,
                    height: '24px',
                    minWidth: '2px'
                  }}
                ></div>
              </div>
              <div className="w-32 text-body-sm text-muted-foreground">{token.px}</div>
              <div className="w-48 text-body-sm font-mono text-muted-foreground">{token.value}</div>
              <div className="flex-1 text-caption text-muted-foreground">{token.usage}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Spacing */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Component-Specific Spacing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          
          {/* Card Spacing */}
          <div className="space-y-base">
            <h3 className="text-body-lg font-semibold">Card Spacing</h3>
            <div className="bg-card border rounded-sm" style={{ padding: 'var(--card-padding)' }}>
              <div className="bg-muted rounded p-xs text-body-sm">
                Card content with <code>--card-padding</code>
              </div>
            </div>
            <div className="text-caption text-muted-foreground">
              Uses <code>var(--card-padding)</code> for consistent card internal spacing
            </div>
          </div>

          {/* Button Spacing */}
          <div className="space-y-base">
            <h3 className="text-body-lg font-semibold">Button Spacing</h3>
            <div className="space-y-xs">
              <button 
                className="bg-sandy-ochre text-dark-chocolate rounded font-medium"
                style={{ 
                  height: 'var(--button-height-sm)',
                  padding: 'var(--button-padding-sm)'
                }}
              >
                Small Button
              </button>
              <button 
                className="bg-rusty-orange text-white rounded font-medium"
                style={{ 
                  height: 'var(--button-height-base)',
                  padding: 'var(--button-padding-base)'
                }}
              >
                Default Button
              </button>
              <button 
                className="bg-dark-chocolate text-sandy-ochre rounded font-medium"
                style={{ 
                  height: 'var(--button-height-lg)',
                  padding: 'var(--button-padding-lg)'
                }}
              >
                Large Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Usage Examples</h2>
        <div className="bg-muted p-md rounded-sm">
          <pre className="text-body-sm overflow-x-auto">
{`/* CSS Variables */
padding: var(--spacing-md);
margin-bottom: var(--spacing-lg);
gap: var(--spacing-xs);

/* Tailwind with Design Tokens */
className="p-md mb-lg gap-xs"

/* Component-Specific Tokens */
className="p-card"
style={{ height: 'var(--button-height-base)' }}`}
          </pre>
        </div>
      </section>
    </div>
  ),
};

export const SpacingTokens: Story = {
  parameters: {
    designToken: {
      showPreview: true,
      filterNames: ['--spacing-xs', '--spacing-sm', '--spacing-base', '--spacing-md', '--spacing-lg', '--spacing-xl', '--spacing-2xl'],
      category: 'Spacing Tokens'
    }
  },
  render: () => (
    <div className="p-lg">
      <h1 className="text-3xl font-rajdhani font-bold mb-base">Spacing Token Reference</h1>
      <p className="text-muted-foreground mb-lg">
        All TBGC spacing tokens follow a consistent 1.5x scaling ratio and are displayed in the Design Tokens panel.
      </p>
    </div>
  ),
};