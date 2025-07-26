import type { Meta, StoryObj } from '@storybook/nextjs'
import { CheckCircle, AlertTriangle, XCircle, Info, Zap, Shield, Trophy, Target, Bell, Star } from 'lucide-react'
import { 
  Alert, 
  AlertDescription, 
  AlertTitle
} from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Feedback & Alerts/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Enhanced Alert component with Stripe precision, ClickUp vibrancy, and Windows 11 Mica effects. Features Premium and Elite variants with sophisticated animations and Idaho-inspired color palette.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info', 'premium', 'elite', 'glass'],
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg', 'xl'],
    },
    dismissible: {
      control: 'boolean',
    },
    animate: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Alert variant="success" {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert variant="info">
      <Info />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert variant="warning" {...args}>
      <AlertTitle>Warning!</AlertTitle>
      <AlertDescription>
        Please be careful when proceeding.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Alert variant="error" {...args}>
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const Premium: Story = {
  render: (args) => (
    <Alert variant="premium" {...args}>
      <AlertTitle>Premium Feature</AlertTitle>
      <AlertDescription>
        This is a premium feature. Thanks for being a member!
      </AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: (args) => (
    <Alert dismissible {...args}>
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>
        You can close this alert by clicking the &apos;X&apos; icon.
      </AlertDescription>
    </Alert>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Alert Variants</h2>
      
      <div className="space-y-4">
        <Alert variant="default">
          <Info />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            Clean, professional baseline with Stripe-inspired micro-interactions.
          </AlertDescription>
        </Alert>
        
        <Alert variant="success">
          <CheckCircle />
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>
            Successful operations with subtle gradients and data visualization shadows.
          </AlertDescription>
        </Alert>
        
        <Alert variant="warning">
          <AlertTriangle />
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>
            Leonard Yellow to Lahoma Orange gradient hints for important notices.
          </AlertDescription>
        </Alert>
        
        <Alert variant="error">
          <XCircle />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>
            Clear error communication with proper contrast and accessibility.
          </AlertDescription>
        </Alert>
        
        <Alert variant="info">
          <Info />
          <AlertTitle>Info Alert</AlertTitle>
          <AlertDescription>
            Professional information display with enhanced visual hierarchy.
          </AlertDescription>
        </Alert>
        
        <Alert variant="premium">
          <Zap />
          <AlertTitle>Premium Alert</AlertTitle>
          <AlertDescription>
            Windows 11 Mica effects with Leonard Yellow accent and hover enhancements.
          </AlertDescription>
        </Alert>
        
        <Alert variant="elite">
          <Zap />
          <AlertTitle>Elite Alert</AlertTitle>
          <AlertDescription>
            Maximum impact with animated shimmer, enhanced Mica effects, and scale transforms.
          </AlertDescription>
        </Alert>
        
        <Alert variant="glass">
          <Bell />
          <AlertTitle>Glass Alert</AlertTitle>
          <AlertDescription>
            Opaque glass with backdrop blur for overlays and hero sections.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Size Options</h2>
      
      <div className="space-y-4">
        <Alert variant="success" size="sm">
          <CheckCircle />
          <AlertTitle>Small Alert</AlertTitle>
          <AlertDescription>
            Compact size for sidebar notifications.
          </AlertDescription>
        </Alert>
        
        <Alert variant="info" size="default">
          <Info />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            Standard size for most use cases with optimal readability.
          </AlertDescription>
        </Alert>
        
        <Alert variant="warning" size="lg">
          <AlertTriangle />
          <AlertTitle>Large Alert</AlertTitle>
          <AlertDescription>
            Larger size for important announcements and featured content.
          </AlertDescription>
        </Alert>
        
        <Alert variant="premium" size="xl">
          <Zap />
          <AlertTitle>Extra Large Alert</AlertTitle>
          <AlertDescription>
            Maximum size for hero sections and major announcements with premium styling.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// Gun Club Context Examples
export const GunClubExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Gun Club Context</h2>
      
      <div className="space-y-4">
        <Alert variant="warning" dismissible>
          <Shield />
          <AlertTitle>Range Safety Notice</AlertTitle>
          <AlertDescription>
            Eye and ear protection required at all times on the range. Please ensure all firearms are pointed downrange.
          </AlertDescription>
        </Alert>
        
        <Alert variant="success">
          <Trophy />
          <AlertTitle>Competition Results</AlertTitle>
          <AlertDescription>
            Congratulations! You&apos;ve achieved a new personal best score of 24/25 in today&apos;s trap round.
          </AlertDescription>
        </Alert>
        
        <Alert variant="premium">
          <Star />
          <AlertTitle>Premium Member Benefit</AlertTitle>
          <AlertDescription>
            As a premium member, you now have access to advanced coaching sessions and priority lane booking.
          </AlertDescription>
        </Alert>
        
        <Alert variant="elite">
          <Target />
          <AlertTitle>Elite Achievement Unlocked</AlertTitle>
          <AlertDescription>
            You&apos;ve reached Master Class classification! Your dedication to excellence is truly remarkable.
          </AlertDescription>
        </Alert>
        
        <Alert variant="error">
          <XCircle />
          <AlertTitle>Range Closure</AlertTitle>
          <AlertDescription>
            Trap Field 2 is temporarily closed for maintenance. Please use alternative fields for today&apos;s session.
          </AlertDescription>
        </Alert>
        
        <Alert variant="info">
          <Info />
          <AlertTitle>Weather Advisory</AlertTitle>
          <AlertDescription>
            High winds expected this afternoon. Outdoor ranges may experience delays. Check with range officers for updates.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// Interactive Features
export const InteractiveFeatures: Story = {
  render: () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-rajdhani font-bold mb-4">Interactive Features</h2>
        
        <div className="space-y-4">
          <Alert variant="premium" dismissible animate>
            <Zap />
            <AlertTitle>Animated Premium Alert</AlertTitle>
            <AlertDescription>
              This alert features entrance animations, Mica effects, and dismissible functionality.
            </AlertDescription>
          </Alert>
          
          <Alert variant="elite" dismissible animate>
            <Star />
            <AlertTitle>Elite Interactive Alert</AlertTitle>
            <AlertDescription>
              Watch the shimmer animation and hover effects. Notice the enhanced Mica background and scale transforms.
            </AlertDescription>
          </Alert>
          
          <Alert variant="glass" dismissible>
            <Bell />
            <AlertTitle>Glass Effect Alert</AlertTitle>
            <AlertDescription>
              Perfect for overlays with backdrop blur and transparent styling.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  },
};

// Fusion Design Showcase
export const FusionShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-4">Triple Fusion Design</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stripe Precision */}
        <div className="space-y-4">
          <h3 className="font-rajdhani font-semibold text-lg">Stripe Precision</h3>
          <Alert variant="default">
            <Info />
            <AlertTitle>Micro-interactions</AlertTitle>
            <AlertDescription>
              150ms transitions, precise timing, professional shadows, and button-lift effects.
            </AlertDescription>
          </Alert>
        </div>
        
        {/* ClickUp Vibrancy */}
        <div className="space-y-4">
          <h3 className="font-rajdhani font-semibold text-lg">ClickUp Vibrancy</h3>
          <Alert variant="warning">
            <AlertTriangle />
            <AlertTitle>Strategic Gradients</AlertTitle>
            <AlertDescription>
              Idaho-inspired color palette with 3-8% opacity gradients for professional energy.
            </AlertDescription>
          </Alert>
        </div>
        
        {/* Windows 11 Mica */}
        <div className="space-y-4">
          <h3 className="font-rajdhani font-semibold text-lg">Windows 11 Mica</h3>
          <Alert variant="premium">
            <Zap />
            <AlertTitle>Material Depth</AlertTitle>
            <AlertDescription>
              Opaque glass with colorful noise patterns and sophisticated backdrop effects.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-xl p-6 border border-border/20">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-lahoma-orange" />
          <h3 className="font-rajdhani font-semibold">Result: Professional Authority</h3>
        </div>
        <p className="text-muted-foreground font-noto-sans">
          This fusion approach creates components that feel like they belong in a Stripe product, 
          have the energy of ClickUp&apos;s interface, display the material depth of Windows 11, 
          while maintaining the professional authority appropriate for a gun club context.
        </p>
      </div>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'premium',
    size: 'default',
    dismissible: true,
    animate: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <h3 className="font-rajdhani font-semibold">Interactive Alert</h3>
      <Alert {...args}>
        <Zap />
        <AlertTitle>Customizable Alert</AlertTitle>
        <AlertDescription>
          Use the controls to explore different variants, sizes, and features.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
