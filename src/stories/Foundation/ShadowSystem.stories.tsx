import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Design System/Foundation/ShadowSystem',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TBGC shadow system following strategic restraint principles. Consistent shadow-sm hover:shadow-md pattern across all components for professional appearance.',
      },
    },
    designToken: {
      showPreview: true,
      filterNames: ['--shadow-*'],
      category: 'Shadows'
    }
  },
  tags: ['foundation', 'shadows', 'design-system'],
};

export default meta;
type Story = StoryObj;

export const ShadowHierarchy: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)] bg-muted/20">
      <div>
        <h1 className="text-4xl font-rajdhani font-bold mb-[var(--space-xs)]">TBGC Shadow System</h1>
        <p className="text-lg text-muted-foreground mb-[var(--space-lg)]">Strategic restraint with consistent depth hierarchy</p>
      </div>

      {/* Base Shadow Scale */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Base Shadow Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
          {[
            { name: 'None', class: 'shadow-none', usage: 'Flat elements, no elevation' },
            { name: 'XS', class: 'shadow-xs', usage: 'Subtle hints, minimal elevation' },
            { name: 'SM', class: 'shadow-sm', usage: 'Default cards, low elevation' },
            { name: 'MD', class: 'shadow-md', usage: 'Hover state, medium elevation' },
            { name: 'LG', class: 'shadow-lg', usage: 'Modals, high elevation' },
            { name: 'XL', class: 'shadow-xl', usage: 'Maximum elevation, overlays' },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-[var(--space-sm)]">
              <div className={`bg-card p-[var(--space-md)] rounded-lg ${shadow.class} h-32 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="font-medium">{shadow.name}</div>
                  <div className="text-sm text-muted-foreground">{shadow.class}</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{shadow.usage}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Restraint Pattern */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Strategic Restraint Pattern</h2>
        <div className="bg-card p-[var(--space-md)] rounded-lg border">
          <h3 className="font-semibold mb-[var(--space-base)]">Universal Pattern: shadow-sm hover:shadow-md</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-base)]">
            <div className="bg-brass-yellow/10 p-[var(--space-base)] rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="font-medium">Standard Card</div>
              <div className="text-sm text-muted-foreground mt-[var(--space-xs)]">shadow-sm hover:shadow-md</div>
            </div>
            <div className="bg-copper-orange/10 p-[var(--space-base)] rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="font-medium">Premium Card</div>
              <div className="text-sm text-muted-foreground mt-[var(--space-xs)]">Same shadow pattern</div>
            </div>
            <div className="bg-rifling-green/10 p-[var(--space-base)] rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="font-medium">Elite Card</div>
              <div className="text-sm text-muted-foreground mt-[var(--space-xs)]">Consistent depth</div>
            </div>
          </div>
          <div className="mt-[var(--space-base)] text-sm text-muted-foreground">
            ✅ All component variants use the same shadow pattern to avoid visual noise
          </div>
        </div>
      </section>

      {/* Branded Shadows */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Branded Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
          {[
            { name: 'Brass', class: 'shadow-brass', color: 'bg-brass-yellow/20' },
            { name: 'Copper', class: 'shadow-copper', color: 'bg-copper-orange/20' },
            { name: 'Premium', class: 'shadow-premium', color: 'bg-gradient-to-br from-brass-yellow/20 to-copper-orange/20' },
            { name: 'Elite', class: 'shadow-elite', color: 'bg-gradient-to-br from-copper-orange/20 to-brass-yellow/20' },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-[var(--space-sm)]">
              <div className={`${shadow.color} p-[var(--space-md)] rounded-lg ${shadow.class} h-24 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="font-medium">{shadow.name}</div>
                  <div className="text-sm text-muted-foreground">{shadow.class}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[var(--space-base)] text-sm text-muted-foreground">
          Special branded shadows for premium features and accent elements
        </div>
      </section>

      {/* Glass Shadows */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Glass & Special Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-md)]">
          <div className="space-y-[var(--space-sm)]">
            <div className="bg-card/50 backdrop-blur-sm p-[var(--space-md)] rounded-lg shadow-glass border border-white/20 h-24 flex items-center justify-center">
              <div className="text-center">
                <div className="font-medium">Glass</div>
                <div className="text-sm text-muted-foreground">shadow-glass</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Glassmorphism effects</div>
          </div>
          
          <div className="space-y-[var(--space-sm)]">
            <div className="bg-card p-[var(--space-md)] rounded-lg shadow-inset h-24 flex items-center justify-center">
              <div className="text-center">
                <div className="font-medium">Inset</div>
                <div className="text-sm text-muted-foreground">shadow-inset</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Inward depth effect</div>
          </div>

          <div className="space-y-[var(--space-sm)]">
            <div className="bg-card p-[var(--space-md)] rounded-lg shadow-flat h-24 flex items-center justify-center">
              <div className="text-center">
                <div className="font-medium">Flat</div>
                <div className="text-sm text-muted-foreground">shadow-flat</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Minimal, flat appearance</div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-2xl font-rajdhani font-bold mb-[var(--space-md)]">Usage Guidelines</h2>
        <div className="bg-card p-[var(--space-md)] rounded-lg border space-y-[var(--space-base)]">
          <div>
            <h3 className="font-semibold text-rifling-green mb-[var(--space-xs)]">✅ Do</h3>
            <ul className="text-sm space-y-[var(--space-micro)] text-muted-foreground">
              <li>• Use shadow-sm hover:shadow-md for ALL interactive components</li>
              <li>• Use consistent shadow depth across component variants</li>
              <li>• Apply branded shadows sparingly for premium features</li>
              <li>• Use glass shadows for overlay elements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-safety-red mb-[var(--space-xs)]">❌ Don't</h3>
            <ul className="text-sm space-y-[var(--space-micro)] text-muted-foreground">
              <li>• Use different shadow depths for premium vs standard variants</li>
              <li>• Mix shadow-lg, shadow-xl arbitrarily across components</li>
              <li>• Create visual noise with inconsistent shadow patterns</li>
              <li>• Use shadows to indicate component tier</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted p-[var(--space-md)] rounded-lg mt-[var(--space-md)]">
          <h3 className="font-semibold mb-[var(--space-sm)]">Code Examples</h3>
          <pre className="text-sm overflow-x-auto">
{`/* CSS Variables */
box-shadow: var(--shadow-sm);
box-shadow: var(--shadow-premium);

/* Tailwind Classes */
className="shadow-sm hover:shadow-md"
className="shadow-premium"

/* Strategic Restraint Pattern */
className="shadow-sm hover:shadow-md transition-shadow"`}
          </pre>
        </div>
      </section>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => (
    <div className="p-[var(--space-lg)] space-y-[var(--space-lg)]">
      <div>
        <h1 className="text-3xl font-rajdhani font-bold mb-[var(--space-xs)]">Interactive Shadow Demo</h1>
        <p className="text-muted-foreground mb-[var(--space-lg)]">Hover over the cards to see the strategic restraint pattern in action</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
        {[
          { title: 'Basic Card', desc: 'Standard shadow pattern', variant: 'default' },
          { title: 'Premium Card', desc: 'Same shadow depth', variant: 'premium' },
          { title: 'Elite Card', desc: 'Consistent elevation', variant: 'elite' },
          { title: 'Glass Card', desc: 'Glassmorphism effect', variant: 'glass' },
          { title: 'Fire Card', desc: 'With gradient accent', variant: 'fire' },
          { title: 'Branded Card', desc: 'Premium shadows', variant: 'branded' },
        ].map((card, index) => (
          <div 
            key={index}
            className={`
              bg-card p-[var(--space-md)] rounded-lg transition-all duration-200 cursor-pointer
              ${card.variant === 'glass' ? 'bg-card/50 backdrop-blur-sm border border-white/20 shadow-glass hover:shadow-lg' : 
                card.variant === 'branded' ? 'shadow-premium hover:shadow-elite' :
                'shadow-sm hover:shadow-md'}
            `}
          >
            <h3 className="font-semibold mb-[var(--space-xs)]">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.desc}</p>
            {card.variant === 'fire' && (
              <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow rounded-full mt-[var(--space-base)]"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        Notice how all cards use consistent shadow behavior regardless of styling variants
      </div>
    </div>
  ),
};