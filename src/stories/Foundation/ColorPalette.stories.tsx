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
    <div className="p-lg space-y-lg">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-xs">TBGC Color Palette</h1>
        <p className="text-body-lg text-muted-foreground mb-lg">26 heritage colors from Idaho firearms culture</p>
      </div>

      {/* Primary Brand Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Primary Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
          <div className="space-y-xs">
            <div className="h-20 bg-sandy-ochre rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Brass Yellow</div>
            <div className="text-caption text-muted-foreground">--color-sandy-ochre</div>
          </div>
          <div className="space-y-xs">
            <div className="h-20 bg-rusty-orange rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Copper Orange</div>
            <div className="text-caption text-muted-foreground">--color-rusty-orange</div>
          </div>
          <div className="space-y-xs">
            <div className="h-20 bg-dark-chocolate rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Gunmetal Black</div>
            <div className="text-caption text-muted-foreground">--color-dark-chocolate</div>
          </div>
          <div className="space-y-xs">
            <div className="h-20 bg-blued-steel rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Blued Steel</div>
            <div className="text-caption text-muted-foreground">--color-blued-steel</div>
          </div>
        </div>
      </section>

      {/* Heritage Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Heritage Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-base">
          <div className="space-y-xs">
            <div className="h-16 bg-walnut-stock rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Walnut Stock</div>
            <div className="text-caption text-muted-foreground">--color-walnut-stock</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-warning-amber rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Case Hardened</div>
            <div className="text-caption text-muted-foreground">--color-warning-amber</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-warm-stone rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Tactical Gray</div>
            <div className="text-caption text-muted-foreground">--color-warm-stone</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-rifling-green rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Rifling Green</div>
            <div className="text-caption text-muted-foreground">--color-rifling-green</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-sight-gold rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Sight Gold</div>
            <div className="text-caption text-muted-foreground">--color-sight-gold</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-safety-red rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Safety Red</div>
            <div className="text-caption text-muted-foreground">--color-safety-red</div>
          </div>
        </div>
      </section>

      {/* Theme Colors */}
      <section>
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Theme-Aware Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
          <div className="space-y-xs">
            <div className="h-16 bg-card rounded-sm shadow-flat border"></div>
            <div className="text-body-sm font-medium">Card Background</div>
            <div className="text-caption text-muted-foreground">--color-card</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-muted rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Muted Background</div>
            <div className="text-caption text-muted-foreground">--color-muted</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-foreground rounded-sm shadow-flat"></div>
            <div className="text-body-sm font-medium">Text Foreground</div>
            <div className="text-caption text-muted-foreground">--color-foreground</div>
          </div>
          <div className="space-y-xs">
            <div className="h-16 bg-border rounded-sm shadow-flat border-2"></div>
            <div className="text-body-sm font-medium">Border</div>
            <div className="text-caption text-muted-foreground">--color-border</div>
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
    <div className="p-lg">
      <h1 className="text-3xl font-rajdhani font-bold mb-base">Color Token Reference</h1>
      <p className="text-muted-foreground mb-lg">
        All TBGC color tokens are displayed in the Design Tokens panel. 
        Use these tokens in your components for consistent theming.
      </p>
      <div className="bg-card p-md rounded-sm border">
        <h3 className="font-semibold mb-xs">Usage Examples:</h3>
        <pre className="text-body-sm bg-muted p-base rounded overflow-x-auto">
{`/* CSS Variables */
color: var(--color-sandy-ochre);
background: var(--color-rusty-orange);

/* Tailwind Classes */
className="bg-sandy-ochre text-rusty-orange"
className="border-warm-stone text-dark-chocolate"`}
        </pre>
      </div>
    </div>
  ),
};