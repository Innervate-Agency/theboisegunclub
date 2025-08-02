import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/TypographyScale',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TBGC typography system with three font families: Rajdhani (display), Noto Sans (body), and Noto Serif (accent). Includes responsive typography utilities.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--text-*', '--font-*', '--leading-*'],
      category: 'Typography'
    }
  },
  tags: ['foundation', 'typography', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const FontFamilies: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-xl)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">TBGC Typography System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Three complementary font families for different purposes</p>
      </div>

      {/* Rajdhani - Display */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Rajdhani - Display Font</h2>
        <div className="space-y-[var(--space-base)]">
          <div className="font-rajdhani font-light text-6xl">Light Weight</div>
          <div className="font-rajdhani font-normal text-6xl">Regular Weight</div>
          <div className="font-rajdhani font-medium text-6xl">Medium Weight</div>
          <div className="font-rajdhani font-semibold text-6xl">Semibold Weight</div>
          <div className="font-rajdhani font-bold text-6xl">Bold Weight</div>
          <div className="font-rajdhani font-black text-6xl">Black Weight</div>
        </div>
        <div className="mt-[var(--space-base)] text-sm text-muted-foreground">
          Usage: Headlines, hero text, navigation. Weights: 300, 400, 500, 600, 700, 900
        </div>
      </section>

      {/* Noto Sans - Body */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Noto Sans - Body Font</h2>
        <div className="space-y-[var(--space-base)] font-noto-sans">
          <div className="font-light text-2xl">Light Weight</div>
          <div className="font-normal text-2xl">Regular Weight</div>
          <div className="font-medium text-2xl">Medium Weight</div>
          <div className="font-semibold text-2xl">Semibold Weight</div>
          <div className="font-bold text-2xl">Bold Weight</div>
        </div>
        <div className="mt-[var(--space-base)] text-sm text-muted-foreground">
          Usage: Body text, buttons, forms, UI components. Weights: 300, 400, 500, 600, 700
        </div>
      </section>

      {/* Noto Serif - Accent */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Noto Serif - Accent Font</h2>
        <div className="space-y-[var(--space-base)] font-serif">
          <div className="font-light text-2xl italic">Light Italic</div>
          <div className="font-normal text-2xl">Regular Weight</div>
          <div className="font-medium text-2xl italic">Medium Italic</div>
          <div className="font-semibold text-2xl">Semibold Weight</div>
          <div className="font-bold text-2xl italic">Bold Italic</div>
        </div>
        <div className="mt-[var(--space-base)] text-sm text-muted-foreground">
          Usage: Editorial content, quotes, accent text. Weights: 300, 400, 500, 600, 700
        </div>
      </section>
    </div>
  ),
};

export const TypeScale: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">Typography Scale</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Consistent font sizes with responsive behavior</p>
      </div>

      {/* Font Size Scale */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Font Size Scale</h2>
        <div className="space-y-[var(--space-md)]">
          {[
            { name: 'XS', size: 'text-xs', responsive: 'text-responsive-xs', css: '--text-xs', px: '12px', usage: 'Captions, fine print' },
            { name: 'SM', size: 'text-sm', responsive: 'text-responsive-sm', css: '--text-sm', px: '14px', usage: 'Small text, labels' },
            { name: 'Base', size: 'text-base', responsive: 'text-responsive-base', css: '--text-base', px: '16px', usage: 'Body text, default' },
            { name: 'LG', size: 'text-lg', responsive: 'text-responsive-lg', css: '--text-lg', px: '18px', usage: 'Large body text' },
            { name: 'XL', size: 'text-xl', responsive: 'text-responsive-xl', css: '--text-xl', px: '20px', usage: 'Subheadings' },
            { name: '2XL', size: 'text-2xl', responsive: 'text-responsive-2xl', css: '--text-2xl', px: '24px', usage: 'Section headings' },
            { name: '3XL', size: 'text-3xl', responsive: 'text-responsive-3xl', css: '--text-3xl', px: '30px', usage: 'Page headings' },
            { name: '4XL', size: 'text-4xl', responsive: 'text-responsive-4xl', css: '--text-4xl', px: '36px', usage: 'Hero headings' },
          ].map((type) => (
            <div key={type.name} className="border rounded-lg p-[var(--space-md)]">
              <div className="flex items-center gap-[var(--space-base)] mb-[var(--space-base)]">
                <div className="w-16 text-sm font-medium">{type.name}</div>
                <div className="text-sm text-muted-foreground">{type.px}</div>
                <div className="text-xs font-mono text-muted-foreground">{type.css}</div>
                <div className="flex-1 text-xs text-muted-foreground">{type.usage}</div>
              </div>
              <div className={`${type.size} font-noto-sans`}>
                Static: The quick brown fox jumps over the lazy dog
              </div>
              <div className={`${type.responsive} font-noto-sans mt-[var(--space-xs)] text-muted-foreground`}>
                Responsive: Scales on mobile, tablet, desktop
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Typography */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Component Typography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          
          {/* Card Typography */}
          <div className="bg-card border rounded-lg p-[var(--space-md)]">
            <h3 className="card-title mb-[var(--space-xs)]">Card Title</h3>
            <p className="card-body mb-[var(--space-base)]">This is card body text using the card-body class for consistent typography across all card components.</p>
            <div className="card-caption">Card caption text for metadata</div>
            <div className="mt-[var(--space-base)] text-xs text-muted-foreground space-y-[var(--space-micro)]">
              <div><code>card-title</code> - Uses --card-title-size</div>
              <div><code>card-body</code> - Uses --card-body-size</div>
              <div><code>card-caption</code> - Uses --card-caption-size</div>
            </div>
          </div>

          {/* Button Typography */}
          <div className="space-y-[var(--space-base)]">
            <h3 className="text-lg font-semibold">Button Typography</h3>
            <div className="space-y-[var(--space-xs)]">
              <button className="bg-brass-yellow text-gunmetal-black px-[var(--space-sm)] py-[var(--space-md)] rounded text-xs font-medium">
                Small Button Text
              </button>
              <button className="bg-copper-orange text-white px-[var(--space-base)] py-[var(--space-xs)].5 rounded text-sm font-medium">
                Default Button Text  
              </button>
              <button className="bg-gunmetal-black text-brass-yellow px-[var(--space-md)] py-[var(--space-sm)] rounded text-base font-medium">
                Large Button Text
              </button>
            </div>
            <div className="text-xs text-muted-foreground space-y-[var(--space-micro)]">
              <div>Small: --button-text-sm (12px)</div>
              <div>Default: --button-text-base (14px)</div>
              <div>Large: --button-text-lg (16px)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">Responsive Typography</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Typography that scales beautifully across devices</p>
      </div>

      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Responsive Classes in Action</h2>
        <div className="space-y-[var(--space-lg)]">
          <div>
            <div className="text-responsive-4xl font-rajdhani font-bold text-gunmetal-black">
              Responsive Hero Heading
            </div>
            <div className="text-xs text-muted-foreground mt-[var(--space-xs)]">
              Uses <code>text-responsive-4xl</code> - scales from 36px mobile → 44px tablet → 48px desktop → 56px large desktop
            </div>
          </div>
          
          <div>
            <div className="text-responsive-2xl font-rajdhani font-semibold text-copper-orange">
              Responsive Section Heading
            </div>
            <div className="text-xs text-muted-foreground mt-[var(--space-xs)]">
              Uses <code>text-responsive-2xl</code> - scales from 24px mobile → 28px tablet → 32px desktop → 36px large desktop
            </div>
          </div>

          <div>
            <div className="text-responsive-xl font-serif italic">
              "Responsive editorial text that adapts to screen size while maintaining readability and aesthetic balance."
            </div>
            <div className="text-xs text-muted-foreground mt-[var(--space-xs)]">
              Uses <code>text-responsive-xl</code> - scales from 20px mobile → 22px tablet → 24px desktop → 26px large desktop
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[var(--space-xl)]">
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-base)]">Usage Guidelines</h2>
        <div className="bg-muted p-[var(--space-md)] rounded-lg">
          <pre className="text-sm overflow-x-auto">
{`/* CSS Variables */
font-size: var(--text-xl);
font-size: var(--card-title-size);

/* Responsive Classes */
className="text-responsive-xl"  // Scales across breakpoints
className="card-title"          // Component-specific size

/* Static Classes */
className="text-xl"             // Fixed size across all screens`}
          </pre>
        </div>
      </section>
    </div>
  ),
};