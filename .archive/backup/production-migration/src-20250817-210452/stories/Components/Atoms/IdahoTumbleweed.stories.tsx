import type { Meta, StoryObj } from '@storybook/react'
import { 
  IdahoTumbleweed, 
  NavbarTumbleweed, 
  LoadingTumbleweed, 
  ButtonTumbleweed, 
  HeroTumbleweed,
  PageLoadingTumbleweed,
  FormSubmissionTumbleweed,
  FileTransferTumbleweed,
  SearchLoadingTumbleweed,
  ImageLoadingTumbleweed
} from '@/components/ui/idaho-tumbleweed'
import { 
  PageLoadingOverlay,
  FormSubmissionLoading,
  FileTransferLoading,
  SearchLoading,
  ImageLoadingPlaceholder,
  LoadingState,
  ContentLoadingSkeleton
} from '@/components/ui/comprehensive-loading'
import { TumbleweedSuspense, useLoadingState } from '@/components/ui/tumbleweed-suspense'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Atoms/IdahoTumbleweed',
  component: IdahoTumbleweed,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The signature Idaho Tumbleweed animation system - a rolling diamond with realistic physics and trailing dust particles that captures the authentic Idaho spirit.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['nano', 'micro', 'default', 'large', 'hero']
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast']
    },
    intensity: {
      control: { type: 'select' },
      options: ['subtle', 'normal', 'strong']
    },
    showTrail: {
      control: { type: 'boolean' }
    },
    paused: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof IdahoTumbleweed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
    speed: 'normal',
    intensity: 'normal',
    showTrail: true,
    paused: false
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-xl">
      <div className="text-center space-y-xs">
        <IdahoTumbleweed size="nano" />
        <p className="text-xs text-muted-foreground">Nano</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed size="micro" />
        <p className="text-xs text-muted-foreground">Micro</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed size="default" />
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed size="large" />
        <p className="text-xs text-muted-foreground">Large</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed size="hero" />
        <p className="text-xs text-muted-foreground">Hero</p>
      </div>
    </div>
  )
}

export const Speeds: Story = {
  render: () => (
    <div className="flex items-center gap-xl">
      <div className="text-center space-y-xs">
        <IdahoTumbleweed speed="slow" />
        <p className="text-xs text-muted-foreground">Slow</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed speed="normal" />
        <p className="text-xs text-muted-foreground">Normal</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed speed="fast" />
        <p className="text-xs text-muted-foreground">Fast</p>
      </div>
    </div>
  )
}

export const Intensities: Story = {
  render: () => (
    <div className="flex items-center gap-xl">
      <div className="text-center space-y-xs">
        <IdahoTumbleweed intensity="subtle" />
        <p className="text-xs text-muted-foreground">Subtle</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed intensity="normal" />
        <p className="text-xs text-muted-foreground">Normal</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed intensity="strong" />
        <p className="text-xs text-muted-foreground">Strong</p>
      </div>
    </div>
  )
}

export const Presets: Story = {
  render: () => (
    <div className="space-y-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
        <div className="text-center space-y-xs p-base border rounded-xs">
          <NavbarTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Navbar</p>
          <p className="text-xs text-muted-foreground">Large, slow, subtle</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <LoadingTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Loading</p>
          <p className="text-xs text-muted-foreground">Default, normal, with trail</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <ButtonTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Button</p>
          <p className="text-xs text-muted-foreground">Micro, fast, subtle</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <HeroTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Hero</p>
          <p className="text-xs text-muted-foreground">Hero, slow, strong</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-lg">
        <div className="text-center space-y-xs p-base border rounded-xs">
          <PageLoadingTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Page Loading</p>
          <p className="text-xs text-muted-foreground">Large, normal, with trail</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <FormSubmissionTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Form Submit</p>
          <p className="text-xs text-muted-foreground">Default, fast, with trail</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <FileTransferTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">File Transfer</p>
          <p className="text-xs text-muted-foreground">Default, slow, strong</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <SearchLoadingTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Search</p>
          <p className="text-xs text-muted-foreground">Micro, normal, subtle</p>
        </div>
        <div className="text-center space-y-xs p-base border rounded-xs">
          <ImageLoadingTumbleweed />
          <p className="text-xs text-muted-foreground font-medium">Image Loading</p>
          <p className="text-xs text-muted-foreground">Default, normal, no trail</p>
        </div>
      </div>
    </div>
  )
}

export const WithColors: Story = {
  render: () => (
    <div className="flex items-center gap-xl">
      <div className="text-center space-y-xs">
        <IdahoTumbleweed color="#F2CB05" />
        <p className="text-xs text-muted-foreground">Golden</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed color="#D2691E" />
        <p className="text-xs text-muted-foreground">Rusty Orange</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed color="#6B8E3D" />
        <p className="text-xs text-muted-foreground">Sagebrush</p>
      </div>
      <div className="text-center space-y-xs">
        <IdahoTumbleweed color="#4682B4" />
        <p className="text-xs text-muted-foreground">Slate Blue</p>
      </div>
    </div>
  )
}

export const WithoutTrail: Story = {
  args: {
    showTrail: false,
    size: 'large'
  }
}

export const Paused: Story = {
  args: {
    paused: true,
    size: 'large'
  }
}

export const ReducedMotion: Story = {
  render: () => (
    <div className="space-y-base">
      <p className="text-sm text-muted-foreground">
        Tumbleweeds automatically respect `prefers-reduced-motion` settings
      </p>
      <div className="flex items-center gap-lg">
        <div className="text-center space-y-xs">
          <IdahoTumbleweed />
          <p className="text-xs text-muted-foreground">Normal</p>
        </div>
        <div className="text-center space-y-xs">
          <IdahoTumbleweed paused={true} />
          <p className="text-xs text-muted-foreground">Reduced Motion</p>
        </div>
      </div>
    </div>
  )
}

// Comprehensive Loading Scenarios
export const ComprehensiveLoadingScenarios: Story = {
  render: () => {
    const [pageLoading, setPageLoading] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)
    const [fileTransferring, setFileTransferring] = useState(false)
    const [searching, setSearching] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [progress, setProgress] = useState(0)

    const simulateFileTransfer = () => {
      setFileTransferring(true)
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setFileTransferring(false)
            return 0
          }
          return prev + 10
        })
      }, 200)
    }

    return (
      <div className="space-y-xl">
        <h3 className="text-lg font-rajdhani font-bold">Comprehensive Loading System Demo</h3>
        
        {/* Control buttons */}
        <div className="flex flex-wrap gap-sm">
          <Button size="sm" onClick={() => setPageLoading(!pageLoading)}>
            Toggle Page Loading
          </Button>
          <Button size="sm" onClick={() => setFormSubmitting(!formSubmitting)}>
            Toggle Form Submission
          </Button>
          <Button size="sm" onClick={simulateFileTransfer}>
            Simulate File Transfer
          </Button>
          <Button size="sm" onClick={() => setSearching(!searching)}>
            Toggle Search
          </Button>
          <Button size="sm" onClick={() => setImageLoading(!imageLoading)}>
            Toggle Image Loading
          </Button>
        </div>

        {/* Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          
          {/* Form with submission loading */}
          <div className="relative border rounded-xs p-base">
            <h4 className="font-rajdhani font-medium mb-sm">Form Submission</h4>
            <div className="space-y-xs">
              <input className="w-full p-xs border rounded-xs" placeholder="Email" />
              <input className="w-full p-xs border rounded-xs" placeholder="Password" />
              <Button size="sm" className="w-full">Submit</Button>
            </div>
            <FormSubmissionLoading isSubmitting={formSubmitting} />
          </div>

          {/* File transfer */}
          <div className="border rounded-xs p-base">
            <h4 className="font-rajdhani font-medium mb-sm">File Transfer</h4>
            <FileTransferLoading 
              isTransferring={fileTransferring} 
              progress={progress}
              message="Downloading tactical manual"
            />
          </div>

          {/* Search loading */}
          <div className="border rounded-xs p-base">
            <h4 className="font-rajdhani font-medium mb-sm">Search</h4>
            <div className="flex items-center gap-xs">
              <input className="flex-1 p-xs border rounded-xs" placeholder="Search..." />
              <SearchLoading isSearching={searching} />
            </div>
          </div>

          {/* Image loading placeholder */}
          <div className="border rounded-xs p-base">
            <h4 className="font-rajdhani font-medium mb-sm">Image Loading</h4>
            <ImageLoadingPlaceholder 
              isLoading={imageLoading} 
              width="100%" 
              height="120px"
            />
          </div>

          {/* Content skeleton */}
          <div className="border rounded-xs p-base">
            <h4 className="font-rajdhani font-medium mb-sm">Content Loading</h4>
            <ContentLoadingSkeleton isLoading={true} lines={4} />
          </div>

          {/* Loading states */}
          <div className="border rounded-xs p-base space-y-sm">
            <h4 className="font-rajdhani font-medium">Loading States</h4>
            <LoadingState isLoading={true} size="small" message="Small loading..." />
            <LoadingState isLoading={true} size="default" message="Default loading..." />
            <LoadingState isLoading={true} size="large" message="Large loading..." />
          </div>
        </div>

        {/* Page loading overlay */}
        <PageLoadingOverlay 
          isLoading={pageLoading} 
          message="Loading The Boise Gun Club..."
        />
      </div>
    )
  }
}

export const SuspenseDemo: Story = {
  render: () => {
    const LazyComponent = React.lazy(() => 
      new Promise(resolve => 
        setTimeout(() => resolve({ 
          default: () => <div className="p-xl text-center">Lazy loaded content!</div> 
        }), 2000)
      )
    )

    return (
      <div className="space-y-base">
        <h3 className="text-lg font-rajdhani font-bold">Suspense Wrapper Demo</h3>
        <p className="text-sm text-muted-foreground">
          This component will show a tumbleweed while loading for 2 seconds
        </p>
        <TumbleweedSuspense fallbackMessage="Loading lazy component...">
          <LazyComponent />
        </TumbleweedSuspense>
      </div>
    )
  }
}