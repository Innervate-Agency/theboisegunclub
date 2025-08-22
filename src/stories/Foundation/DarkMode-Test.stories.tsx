import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import { CalloutCard } from '@/components/ui/callout-card';
import StatCard from '@/components/ui/StatCard';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DarkModeTest = () => {
  return (
    <div className="space-y-lg p-lg">
      <div>
        <h1 className="text-3xl font-rajdhani font-bold mb-base">Dark Mode Theme Test</h1>
        <p className="text-muted-foreground mb-lg">
          This story tests the semantic color system in both light and dark modes. 
          Use the theme toggle in Storybook to test both modes.
        </p>
      </div>

      {/* Text Colors Test */}
      <Card>
        <CardHeader>
          <CardTitle>Text Colors</CardTitle>
          <CardDescription>Testing foreground and muted-foreground colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-base">
          <div className="space-y-xs">
            <p className="text-foreground font-semibold">Primary Text (text-foreground)</p>
            <p className="text-muted-foreground">Secondary Text (text-muted-foreground)</p>
            <p className="text-primary">Primary Color (text-primary)</p>
            <p className="text-destructive">Destructive Color (text-destructive)</p>
          </div>
        </CardContent>
      </Card>

      {/* Components Test */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        <StatCard
          value="1,234"
          label="Active Members"
          description="Club membership this month"
          trend="up"
          trendValue="+12%"
        />
        
        <CalloutCard
          title="Safety Notice"
          description="Always follow range safety protocols"
          variant="outline"
        />

        <Card>
          <CardHeader>
            <CardTitle>Input Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-base">
            <Input placeholder="Test input field" />
            <div className="flex gap-xs">
              <Button variant="outline">Default</Button>
              <Button variant="outline">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex gap-xs">
              <Badge variant="outline">Default Badge</Badge>
              <Badge variant="outline">Secondary Badge</Badge>
              <Badge variant="destructive">Destructive Badge</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Background Colors Test */}
      <Card>
        <CardHeader>
          <CardTitle>Background Colors</CardTitle>
          <CardDescription>Testing background, card, and muted backgrounds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            <div className="bg-background border border-border p-base rounded">
              <p className="text-foreground font-medium">Background</p>
              <p className="text-muted-foreground text-body-sm">bg-background</p>
            </div>
            <div className="bg-card border border-border p-base rounded">
              <p className="text-card-foreground font-medium">Card</p>
              <p className="text-muted-foreground text-body-sm">bg-card</p>
            </div>
            <div className="bg-muted border border-border p-base rounded">
              <p className="text-foreground font-medium">Muted</p>
              <p className="text-muted-foreground text-body-sm">bg-muted</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof DarkModeTest> = {
  title: 'Design System/Foundation/DarkModeTest',
  component: DarkModeTest,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Test story for validating the dark mode theme system with semantic colors. Use the theme toggle to switch between light and dark modes.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DarkModeTest>;

export const Default: Story = {};

export const LightMode: Story = {
  parameters: {
    theme: 'light'
  }
};

export const DarkMode: Story = {
  parameters: {
    theme: 'dark'
  }
};
