import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BellIcon, BoltIcon, CheckCircleIcon, CursorArrowRaysIcon, ExclamationTriangleIcon, InformationCircleIcon, ShieldCheckIcon, StarIcon, TrophyIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle
} from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Design System/Atoms/Alert',
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
      options: ['default', 'info', 'success', 'warning', 'destructive'],
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg'],
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
    <Alert variant="secondary" {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert variant="secondary">
      <InformationCircleIcon />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert variant="destructive" {...args}>
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning!</AlertTitle>
      <AlertDescription>
        Please be careful when proceeding.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert variant="destructive" {...args}>
      <XCircleIcon className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-md max-w-2xl">
      <Alert variant="outline">
        <InformationCircleIcon className="h-4 w-4" />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert with clean theme-aware styling.
        </AlertDescription>
      </Alert>
      
      <Alert variant="secondary">
        <InformationCircleIcon className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational message with blue theme colors.
        </AlertDescription>
      </Alert>
      
      <Alert variant="secondary">
        <CheckCircleIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your action was completed successfully.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review this information carefully.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <XCircleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-md max-w-2xl">
      <Alert size="sm" variant="secondary">
        <InformationCircleIcon className="h-4 w-4" />
        <AlertTitle>Small Alert</AlertTitle>
        <AlertDescription>
          This is a compact alert with smaller text and padding.
        </AlertDescription>
      </Alert>
      
      <Alert size="default" variant="secondary">
        <CheckCircleIcon className="h-4 w-4" />
        <AlertTitle>Default Size Alert</AlertTitle>
        <AlertDescription>
          This is the standard alert size with balanced spacing.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Large Alert</AlertTitle>
        <AlertDescription>
          This is a large alert with generous padding and bigger text for important messages.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Alert variant="destructive" {...args}>
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const Premium: Story = {
  render: (args) => (
    <Alert variant="secondary" {...args}>
      <AlertTitle>Premium Feature</AlertTitle>
      <AlertDescription>
        This is a premium feature. Thanks for being a member!
      </AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>
        You can close this alert by clicking the &apos;X&apos; icon.
      </AlertDescription>
    </Alert>
  ),
};





// Gun Club Context Examples
export const GunClubExamples: Story = {
  render: () => (
    <div className="space-y-md">
      <h2 className="text-display-md font-rajdhani font-bold mb-base">Gun Club Context</h2>
      
      <div className="space-y-base">
        <Alert variant="destructive">
          <ShieldCheckIcon />
          <AlertTitle>Range Safety Notice</AlertTitle>
          <AlertDescription>
            EyeIcon and ear protection required at all times on the range. Please ensure all firearms are pointed downrange.
          </AlertDescription>
        </Alert>
        
        <Alert variant="secondary">
          <TrophyIcon />
          <AlertTitle>Competition Results</AlertTitle>
          <AlertDescription>
            Congratulations! You&apos;ve achieved a new personal best score of 24/25 in today&apos;s trap round.
          </AlertDescription>
        </Alert>
        
        <Alert variant="secondary">
          <StarIcon />
          <AlertTitle>Premium Member Benefit</AlertTitle>
          <AlertDescription>
            As a premium member, you now have access to advanced coaching sessions and priority lane booking.
          </AlertDescription>
        </Alert>
        
        <Alert variant="secondary">
          <CursorArrowRaysIcon />
          <AlertTitle>Elite Achievement Unlocked</AlertTitle>
          <AlertDescription>
            You&apos;ve reached Master Class classification! Your dedication to excellence is truly remarkable.
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <XCircleIcon />
          <AlertTitle>Range Closure</AlertTitle>
          <AlertDescription>
            Trap Field 2 is temporarily closed for maintenance. Please use alternative fields for today&apos;s session.
          </AlertDescription>
        </Alert>
        
        <Alert variant="secondary">
          <InformationCircleIcon />
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
      <div className="space-y-md">
        <h2 className="text-display-md font-rajdhani font-bold mb-base">Interactive Features</h2>
        
        <div className="space-y-base">
          <Alert variant="secondary" >
            <BoltIcon />
            <AlertTitle>Animated Premium Alert</AlertTitle>
            <AlertDescription>
              This alert features entrance animations, Mica effects, and functionality.
            </AlertDescription>
          </Alert>
          
          <Alert variant="secondary" >
            <StarIcon />
            <AlertTitle>Elite Interactive Alert</AlertTitle>
            <AlertDescription>
              Watch the shimmer animation and hover effects. Notice the enhanced Mica background and scale transforms.
            </AlertDescription>
          </Alert>
          
          <Alert variant="outline">
            <BellIcon />
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
    <div className="space-y-lg">
      <h2 className="text-display-md font-rajdhani font-bold mb-base">Triple Fusion Design</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Stripe Precision */}
        <div className="space-y-base">
          <h3 className="font-rajdhani font-semibold text-body-lg">Stripe Precision</h3>
          <Alert variant="outline">
            <InformationCircleIcon />
            <AlertTitle>Micro-interactions</AlertTitle>
            <AlertDescription>
              150ms transitions, precise timing, professional shadows, and button-lift effects.
            </AlertDescription>
          </Alert>
        </div>
        
        {/* ClickUp Vibrancy */}
        <div className="space-y-base">
          <h3 className="font-rajdhani font-semibold text-body-lg">ClickUp Vibrancy</h3>
          <Alert variant="destructive">
            <ExclamationTriangleIcon />
            <AlertTitle>Strategic Gradients</AlertTitle>
            <AlertDescription>
              Idaho-inspired color palette with 3-8% opacity gradients for professional energy.
            </AlertDescription>
          </Alert>
        </div>
        
        {/* Windows 11 Mica */}
        <div className="space-y-base">
          <h3 className="font-rajdhani font-semibold text-body-lg">Windows 11 Mica</h3>
          <Alert variant="secondary">
            <BoltIcon />
            <AlertTitle>Material Depth</AlertTitle>
            <AlertDescription>
              Opaque glass with colorful noise patterns and sophisticated backdrop effects.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-xs p-md border border-border/20">
        <div className="flex items-center gap-sm mb-base">
          <CursorArrowRaysIcon className="h-5 w-5 text-rusty-orange" />
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
    variant: 'info',
    size: 'default',
  },
  render: (args) => (
    <div className="space-y-base">
      <h3 className="font-rajdhani font-semibold">Interactive Alert</h3>
      <Alert {...args}>
        <InformationCircleIcon className="h-4 w-4" />
        <AlertTitle>Customizable Alert</AlertTitle>
        <AlertDescription>
          Use the controls to explore different variants and sizes.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
