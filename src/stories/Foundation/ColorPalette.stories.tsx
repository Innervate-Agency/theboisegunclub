import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/ColorPalette',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TBGC 26-color system inspired by Idaho firearms heritage. All colors are available as CSS variables and Tailwind utilities.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--color-*'],
      category: 'Colors'
    }
  },
  tags: ['foundation', 'colors', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const AllColors: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">TBGC Color Palette</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">26 heritage colors from Idaho firearms culture</p>
      </div>

      {/* Primary Brand Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Primary Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-base)]">
          <div className="space-y-[var(--space-xs)]">
            <div className="h-20 bg-brass-yellow rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Brass Yellow</div>
            <div className="text-xs text-muted-foreground">--color-brass-yellow</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-20 bg-copper-orange rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Copper Orange</div>
            <div className="text-xs text-muted-foreground">--color-copper-orange</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-20 bg-gunmetal-black rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Gunmetal Black</div>
            <div className="text-xs text-muted-foreground">--color-gunmetal-black</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-20 bg-blued-steel rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Blued Steel</div>
            <div className="text-xs text-muted-foreground">--color-blued-steel</div>
          </div>
        </div>
      </section>

      {/* Heritage Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Heritage Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[var(--space-base)]">
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-walnut-stock rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Walnut Stock</div>
            <div className="text-xs text-muted-foreground">--color-walnut-stock</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-case-hardened rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Case Hardened</div>
            <div className="text-xs text-muted-foreground">--color-case-hardened</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-tactical-gray rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Tactical Gray</div>
            <div className="text-xs text-muted-foreground">--color-tactical-gray</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-rifling-green rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Rifling Green</div>
            <div className="text-xs text-muted-foreground">--color-rifling-green</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-sight-gold rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Sight Gold</div>
            <div className="text-xs text-muted-foreground">--color-sight-gold</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-safety-red rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Safety Red</div>
            <div className="text-xs text-muted-foreground">--color-safety-red</div>
          </div>
        </div>
      </section>

      {/* Theme Colors */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Theme-Aware Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-base)]">
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-card rounded-lg shadow-sm border"></div>
            <div className="text-sm font-medium">Card Background</div>
            <div className="text-xs text-muted-foreground">--color-card</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-muted rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Muted Background</div>
            <div className="text-xs text-muted-foreground">--color-muted</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-foreground rounded-lg shadow-sm"></div>
            <div className="text-sm font-medium">Text Foreground</div>
            <div className="text-xs text-muted-foreground">--color-foreground</div>
          </div>
          <div className="space-y-[var(--space-xs)]">
            <div className="h-16 bg-border rounded-lg shadow-sm border-2"></div>
            <div className="text-sm font-medium">Border</div>
            <div className="text-xs text-muted-foreground">--color-border</div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const ColorTokens: Story = {
  parameters: {
    designToken: {
      showPreview: true,
      filterNames: ['--color-*'],
      category: 'All Color Tokens'
    }
  },
  render: () => (
    <div className="p-[var(--space-lg)]">
      <h1 className="text-3xl font-rajdhani font-bold mb-[var(--space-base)]">Color Token Reference</h1>
      <p className="text-muted-foreground mb-[var(--space-lg)]">
        All TBGC color tokens are displayed in the Design Tokens panel. 
        Use these tokens in your components for consistent theming.
      </p>
      <div className="bg-card p-[var(--space-md)] rounded-lg border">
        <h3 className="font-semibold mb-[var(--space-xs)]">Usage Examples:</h3>
        <pre className="text-sm bg-muted p-[var(--space-base)] rounded overflow-x-auto">
{`/* CSS Variables */
color: var(--color-brass-yellow);
background: var(--color-copper-orange);

/* Tailwind Classes */
className="bg-brass-yellow text-copper-orange"
className="border-tactical-gray text-gunmetal-black"`}
        </pre>
      </div>
    </div>
  ),
};