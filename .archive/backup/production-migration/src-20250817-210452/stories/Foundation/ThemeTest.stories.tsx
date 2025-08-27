import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'Design System/Foundation/ThemeTest',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-light-peachy)' },
        { name: 'dark', value: 'var(--color-dark-chocolate)' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="space-y-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const ThemeContrastTest: Story = {
  render: () => (
    <div className="space-y-lg">
      <div className="space-y-base">
        <h2 className="text-display-md font-rajdhani font-bold text-foreground">
          Theme Contrast Test
        </h2>
        <p className="text-muted-foreground">
          Testing proper contrast colors in light and dark themes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {/* Light Theme Card */}
        <Card className="p-md space-y-base">
          <h3 className="text-body-lg font-rajdhani font-semibold text-primary">
            Primary Text
          </h3>
          <p className="text-muted-foreground">
            This is muted foreground text for descriptions
          </p>
          <div className="space-y-xs">
            <Button className="w-full">
              Primary Button
            </Button>
            <Button variant="secondary" className="w-full">
              Secondary Button
            </Button>
            <div className="p-sm rounded-sm bg-accent/10 border border-accent/20">
              <p className="text-accent font-medium">
                Accent Color (Copper Orange in Light / Brass Yellow in Dark)
              </p>
            </div>
          </div>
        </Card>

        {/* Hover Test Card */}
        <Card className="p-md space-y-base group hover:shadow-elevated transition-all duration-200">
          <h3 className="text-body-lg font-rajdhani font-semibold text-primary group-hover:text-accent transition-colors">
            Hover to Test Accent
          </h3>
          <p className="text-muted-foreground">
            The title should change to rusty-orange (light) or sandy-ochre (dark) on hover
          </p>
          <div className="space-y-xs">
            <div className="p-sm rounded-sm bg-primary/10 border border-primary/20">
              <p className="text-primary font-medium">
                Primary Color (Blued Steel in Light / Titanium White in Dark)
              </p>
            </div>
            <div className="p-sm rounded-sm bg-secondary/10 border border-secondary/20">
              <p className="text-secondary font-medium">
                Secondary Color (Walnut Stock in Light / Tactical Gray in Dark)
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-base">
        <h3 className="text-display-sm font-rajdhani font-bold text-foreground">
          Color Usage Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-base text-body-sm">
          <div className="p-base rounded-sm bg-card border border-border">
            <h4 className="font-semibold text-accent mb-xs">Light Theme</h4>
            <ul className="space-y-micro text-muted-foreground">
              <li>• Accent: Copper Orange (rusty-orange) - Good contrast</li>
              <li>• Primary: Blued Steel (slate-blue)</li>
              <li>• Background: Range White (light-peachy)</li>
              <li>• Cards: Nickel White (card-surface)</li>
            </ul>
          </div>
          <div className="p-base rounded-sm bg-card border border-border">
            <h4 className="font-semibold text-accent mb-xs">Dark Theme</h4>
            <ul className="space-y-micro text-muted-foreground">
              <li>• Accent: Brass Yellow (rusty-orange) - Good contrast</li>
              <li>• Primary: Titanium White (crisp-off-white)</li>
              <li>• Background: Night Sight (dark-chocolate)</li>
              <li>• Cards: Carbon Fiber (rich-loam)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ThemeSwitchDemo: Story = {
  render: () => (
    <div className="space-y-md">
      <div className="text-center space-y-xs">
        <h2 className="text-display-md font-rajdhani font-bold text-foreground">
          Toggle Theme to Test Colors
        </h2>
        <p className="text-muted-foreground">
          Use the theme toggle in the toolbar to switch between light and dark modes
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-base">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-base group hover:shadow-elevated transition-all duration-200">
            <div className="space-y-sm">
              <h3 className="font-rajdhani font-semibold text-primary group-hover:text-accent transition-colors">
                Card {i}
              </h3>
              <p className="text-body-sm text-muted-foreground">
                This card demonstrates proper theme-aware colors and hover states.
              </p>
              <Button size="sm" className="w-full">
                Action Button
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
};
