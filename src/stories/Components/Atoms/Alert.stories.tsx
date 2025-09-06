import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
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
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert with standard styling.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircleIcon className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please be careful when proceeding with this action.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <XCircleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
    size: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <InformationCircleIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here is some important information you should know.
      </AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
  },
  render: (args) => (
    <Alert {...args}>
      <InformationCircleIcon className="h-4 w-4" />
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>
        This alert can be dismissed by clicking the X button.
      </AlertDescription>
    </Alert>
  ),
};

export const SmallSize: Story = {
  args: {
    variant: 'default',
    size: 'sm',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Small Alert</AlertTitle>
      <AlertDescription>
        This is a smaller sized alert.
      </AlertDescription>
    </Alert>
  ),
};

export const LargeSize: Story = {
  args: {
    variant: 'default',
    size: 'lg',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Large Alert</AlertTitle>
      <AlertDescription>
        This is a larger sized alert with more prominent styling.
      </AlertDescription>
    </Alert>
  ),
};
