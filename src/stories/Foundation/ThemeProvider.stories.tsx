import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof ThemeProvider> = {
  title: 'Design System/Foundation/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Theme provider component that wraps the application to enable dark/light theme switching using next-themes.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const ThemeDemo = () => (
  <div className="min-h-screen bg-background text-foreground p-lg">
    <div className="max-w-4xl mx-auto space-y-lg">
      <div className="text-center space-y-base">
        <h1 className="text-4xl font-bold text-rusty-orange">Theme System Demo</h1>
        <p className="text-muted-foreground">
          This demonstrates how the ThemeProvider enables seamless dark/light mode switching
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-sandy-ochre">Light Theme Features</CardTitle>
            <CardDescription>
              Range white backgrounds with copper orange accents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-base">
            <div className="flex gap-xs">
              <Badge variant="default">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
            <Button className="w-full">Copper Orange Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-rusty-orange">Dark Theme Features</CardTitle>
            <CardDescription>
              Night sight backgrounds with brass yellow accents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-base">
            <div className="flex gap-xs">
              <Badge variant="outline">Outlined</Badge>
              <Badge className="bg-sagebrush-green">Success</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Brass Yellow Outline
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card border border-border rounded-card p-md">
        <h3 className="text-display-sm font-semibold mb-base">Theme-Aware Components</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-base text-body-sm">
          <div className="space-y-xs">
            <div className="w-full h-8 bg-background border border-border rounded"></div>
            <p className="text-muted-foreground">bg-background</p>
          </div>
          <div className="space-y-xs">
            <div className="w-full h-8 bg-card border border-border rounded"></div>
            <p className="text-muted-foreground">bg-card</p>
          </div>
          <div className="space-y-xs">
            <div className="w-full h-8 bg-muted border border-border rounded"></div>
            <p className="text-muted-foreground">bg-muted</p>
          </div>
          <div className="space-y-xs">
            <div className="w-full h-8 bg-rusty-orange/20 border border-border rounded"></div>
            <p className="text-muted-foreground">rusty-orange/20</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Default: Story = {
  render: () => <ThemeDemo />,
};

export const LightMode: Story = {
  render: () => <ThemeDemo />,
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark">
      <ThemeDemo />
    </div>
  ),
};