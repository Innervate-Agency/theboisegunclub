"use client";

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'Design System/Theme Test',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f6f1' },
        { name: 'dark', value: '#2F3135' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="space-y-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const ThemeContrastTest: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-rajdhani font-bold text-foreground">
          Theme Contrast Test
        </h2>
        <p className="text-muted-foreground">
          Testing proper contrast colors in light and dark themes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Light Theme Card */}
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-rajdhani font-semibold text-primary">
            Primary Text
          </h3>
          <p className="text-muted-foreground">
            This is muted foreground text for descriptions
          </p>
          <div className="space-y-2">
            <Button className="w-full">
              Primary Button
            </Button>
            <Button variant="secondary" className="w-full">
              Secondary Button
            </Button>
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-accent font-medium">
                Accent Color (Copper Orange in Light / Brass Yellow in Dark)
              </p>
            </div>
          </div>
        </Card>

        {/* Hover Test Card */}
        <Card className="p-6 space-y-4 group hover:shadow-lg transition-all duration-200">
          <h3 className="text-lg font-rajdhani font-semibold text-primary group-hover:text-accent transition-colors">
            Hover to Test Accent
          </h3>
          <p className="text-muted-foreground">
            The title should change to copper-orange (light) or brass-yellow (dark) on hover
          </p>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-primary font-medium">
                Primary Color (Blued Steel in Light / Titanium White in Dark)
              </p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="text-secondary font-medium">
                Secondary Color (Walnut Stock in Light / Tactical Gray in Dark)
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-rajdhani font-bold text-foreground">
          Color Usage Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-accent mb-2">Light Theme</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Accent: Copper Orange (#F28705) - Good contrast</li>
              <li>• Primary: Blued Steel (#372103)</li>
              <li>• Background: Range White (#f8f6f1)</li>
              <li>• Cards: Nickel White (#FFFFFF)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-accent mb-2">Dark Theme</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Accent: Brass Yellow (#F2CB05) - Good contrast</li>
              <li>• Primary: Titanium White (#FDFDFD)</li>
              <li>• Background: Night Sight (#2F3135)</li>
              <li>• Cards: Carbon Fiber (#4B4B4B)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ThemeSwitchDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-rajdhani font-bold text-foreground">
          Toggle Theme to Test Colors
        </h2>
        <p className="text-muted-foreground">
          Use the theme toggle in the toolbar to switch between light and dark modes
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-4 group hover:shadow-lg transition-all duration-200">
            <div className="space-y-3">
              <h3 className="font-rajdhani font-semibold text-primary group-hover:text-accent transition-colors">
                Card {i}
              </h3>
              <p className="text-sm text-muted-foreground">
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
