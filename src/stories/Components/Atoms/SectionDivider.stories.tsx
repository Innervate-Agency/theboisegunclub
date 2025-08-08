import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SectionDivider } from '@/components/ui/section-divider'

const meta: Meta<typeof SectionDivider> = {
  title: 'Design System/Atoms/SectionDivider',
  component: SectionDivider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Firearms-themed section dividers for separating content areas. Better than generic slanted dividers - these are purpose-built for TBGC.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
        { name: 'gray', value: '#f8f9fa' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rifling', 'crosshair', 'sights', 'target', 'muzzle', 'clean'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Crosshair: Story = {
  args: {
    variant: 'crosshair',
    spacing: 'md',
  },
}

export const Rifling: Story = {
  args: {
    variant: 'rifling',
    spacing: 'md',
  },
}

export const Sights: Story = {
  args: {
    variant: 'sights',
    spacing: 'md',
  },
}

export const Target: Story = {
  args: {
    variant: 'target',
    spacing: 'md',
  },
}

export const Muzzle: Story = {
  args: {
    variant: 'muzzle',
    spacing: 'md',
  },
}

export const Clean: Story = {
  args: {
    variant: 'clean',
    spacing: 'md',
  },
}

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2xl p-lg">
      <div className="text-center space-y-xs">
        <h1 className="text-3xl font-rajdhani font-bold">TBGC Section Dividers</h1>
        <p className="text-muted-foreground">Firearms-appropriate alternatives to generic slanted dividers</p>
      </div>
      
      {/* Demo sections */}
      <div className="space-y-0">
        <section className="py-lg bg-card rounded-t-lg">
          <div className="container mx-auto px-base text-center">
            <h2 className="text-display-md font-rajdhani font-semibold mb-base">Range Management</h2>
            <p className="text-muted-foreground">Professional range scheduling and member management.</p>
          </div>
        </section>
        
        <SectionDivider variant="crosshair" spacing="none" />
        
        <section className="py-lg bg-muted/30">
          <div className="container mx-auto px-base text-center">
            <h2 className="text-display-md font-rajdhani font-semibold mb-base">Safety Training</h2>
            <p className="text-muted-foreground">Comprehensive safety protocols and certification tracking.</p>
          </div>
        </section>
        
        <SectionDivider variant="rifling" spacing="none" />
        
        <section className="py-lg bg-card">
          <div className="container mx-auto px-base text-center">
            <h2 className="text-display-md font-rajdhani font-semibold mb-base">Performance Analytics</h2>
            <p className="text-muted-foreground">Real-time performance tracking and improvement insights.</p>
          </div>
        </section>
        
        <SectionDivider variant="sights" spacing="none" />
        
        <section className="py-lg bg-muted/30">
          <div className="container mx-auto px-base text-center">
            <h2 className="text-display-md font-rajdhani font-semibold mb-base">Community Hub</h2>
            <p className="text-muted-foreground">Connect with fellow enthusiasts and share experiences.</p>
          </div>
        </section>
        
        <SectionDivider variant="target" spacing="none" />
        
        <section className="py-lg bg-card rounded-b-lg">
          <div className="container mx-auto px-base text-center">
            <h2 className="text-display-md font-rajdhani font-semibold mb-base">Premium Features</h2>
            <p className="text-muted-foreground">Advanced tools for serious enthusiasts and professionals.</p>
          </div>
        </section>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all divider variants used to separate different content sections.',
      },
    },
  },
}

// Dark theme compatibility
export const DarkThemeDemo: Story = {
  render: () => (
    <div className="min-h-screen bg-background space-y-0">
      <section className="py-xl bg-card">
        <div className="container mx-auto px-base text-center">
          <h2 className="text-3xl font-rajdhani font-bold mb-base">Dark Theme Compatibility</h2>
          <p className="text-muted-foreground">All dividers work seamlessly in both light and dark themes.</p>
        </div>
      </section>
      
      <SectionDivider variant="muzzle" spacing="none" />
      
      <section className="py-xl bg-muted/10">
        <div className="container mx-auto px-base text-center">
          <h2 className="text-display-md font-rajdhani font-semibold mb-base">No Blinding White Spots</h2>
          <p className="text-muted-foreground">Subtle patterns that maintain theme consistency at midnight or midday.</p>
        </div>
      </section>
      
      <SectionDivider variant="crosshair" spacing="none" />
      
      <section className="py-xl bg-card">
        <div className="container mx-auto px-base text-center">
          <h2 className="text-display-md font-rajdhani font-semibold mb-base">Professional Aesthetics</h2>
          <p className="text-muted-foreground">Firearms-inspired patterns that look intentional, not generic.</p>
        </div>
      </section>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Demonstration of how dividers maintain their subtle appearance in dark theme without creating jarring light spots.',
      },
    },
  },
}

// Spacing variations
export const SpacingDemo: Story = {
  render: () => (
    <div className="space-y-0 p-lg">
      <div className="text-center mb-lg">
        <h2 className="text-display-md font-rajdhani font-bold mb-xs">Spacing Variations</h2>
        <p className="text-muted-foreground">Different spacing options for various layout needs</p>
      </div>
      
      <div className="bg-card p-base rounded">
        <h3 className="font-semibold">No Spacing</h3>
      </div>
      <SectionDivider variant="crosshair" spacing="none" />
      <div className="bg-muted/30 p-base">
        <h3 className="font-semibold">Small Spacing</h3>
      </div>
      <SectionDivider variant="rifling" spacing="sm" />
      <div className="bg-card p-base">
        <h3 className="font-semibold">Medium Spacing (Default)</h3>
      </div>
      <SectionDivider variant="target" spacing="md" />
      <div className="bg-muted/30 p-base">
        <h3 className="font-semibold">Large Spacing</h3>
      </div>
      <SectionDivider variant="sights" spacing="lg" />
      <div className="bg-card p-base rounded">
        <h3 className="font-semibold">Extra Large Spacing</h3>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different spacing options for controlling vertical rhythm between sections.',
      },
    },
  },
}