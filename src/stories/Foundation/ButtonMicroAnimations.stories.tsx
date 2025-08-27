import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRightIcon, CheckIcon, ChevronUpIcon, EyeIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

const meta: Meta = {
  title: 'Foundation/Button Micro-Animations',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive collection of Stripe-inspired micro-animations for buttons and interactive elements. Features smooth morphing icons, state transitions, and contextual feedback animations.'
      }
    }
  },
}

export default meta
type Story = StoryObj

// Micro-animation components inspired by Stripe's design system
const HoverArrow = ({ isHovered }: { isHovered: boolean }) => (
  <div className="relative overflow-hidden">
    <ArrowRightIcon 
      className={`h-4 w-4 transition-transform duration-300 ${
        isHovered ? 'translate-x-1' : 'translate-x-0'
      }`} 
    />
    <ArrowRightIcon 
      className={`h-4 w-4 absolute top-0 left-0 transition-transform duration-300 ${
        isHovered ? 'translate-x-0' : '-translate-x-full'
      }`} 
    />
  </div>
)

const PlusMinusToggle = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-4 h-4">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`w-3 h-0.5 bg-current transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-0'}`} />
      <div className={`w-0.5 h-3 bg-current absolute transition-transform duration-300 ${isExpanded ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
    </div>
  </div>
)

const XOToggle = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-4 h-4">
    {/* X State */}
    <div className={`absolute inset-0 transition-all duration-300 ${isActive ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
      <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
    </div>
    {/* O State */}
    <div className={`absolute inset-0 transition-all duration-300 ${isActive ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}>
      <Circle className="w-4 h-4" />
    </div>
  </div>
)

const ChevronRotate = ({ direction }: { direction: 'up' | 'down' | 'left' | 'right' }) => {
  const rotationMap = {
    up: 'rotate-0',
    right: 'rotate-90',
    down: 'rotate-180',
    left: 'rotate-270'
  }
  
  return (
    <ChevronUpIcon className={`h-4 w-4 transition-transform duration-300 ${rotationMap[direction]}`} />
  )
}

const PlayPauseToggle = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="relative w-4 h-4">
    {/* Play State */}
    <div className={`absolute inset-0 transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
      <Play className="w-4 h-4 fill-current" />
    </div>
    {/* Pause State */}
    <div className={`absolute inset-0 transition-all duration-300 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
      <Pause className="w-4 h-4 fill-current" />
    </div>
  </div>
)

const HeartFill = ({ isFavorited }: { isFavorited: boolean }) => (
  <div className="relative">
    <HeartIcon className={`h-4 w-4 transition-all duration-300 ${isFavorited ? 'fill-current scale-110' : 'fill-none scale-100'}`} />
  </div>
)

const StarFill = ({ isStarred }: { isStarred: boolean }) => (
  <div className="relative">
    <StarIcon className={`h-4 w-4 transition-all duration-300 ${isStarred ? 'fill-current scale-110 text-rusty-orange' : 'fill-none scale-100'}`} />
  </div>
)

const EyeIconToggle = ({ isVisible }: { isVisible: boolean }) => (
  <div className="relative w-4 h-4">
    <div className={`absolute inset-0 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
      <EyeIcon className="w-4 h-4" />
    </div>
    <div className={`absolute inset-0 transition-all duration-300 ${isVisible ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
      <EyeIconOff className="w-4 h-4" />
    </div>
  </div>
)

const CheckTransition = ({ isChecked }: { isChecked: boolean }) => (
  <div className="relative w-4 h-4">
    <div className={`absolute inset-0 transition-all duration-300 ${isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
      <div className="w-4 h-4 rounded-pill bg-sage-green flex items-center justify-center">
        <CheckIcon className="w-3 h-3 text-white" strokeWidth={3} />
      </div>
    </div>
    <div className={`absolute inset-0 transition-all duration-300 ${isChecked ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
      <div className="w-4 h-4 rounded-full border-2 border-current" />
    </div>
  </div>
)

const LoadingDots = () => (
  <div className="flex gap-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-1 h-1 bg-current rounded-full animate-pulse"
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: '1s'
        }}
      />
    ))}
  </div>
)

const PulseRing = ({ isActive }: { isActive: boolean }) => (
  <div className="relative">
    <div className="w-4 h-4 rounded-pill bg-current" />
    {isActive && (
      <div className="absolute inset-0 w-4 h-4 rounded-pill bg-current animate-ping opacity-30" />
    )}
  </div>
)

export const Default: Story = {
  render: () => {
    const [states, setStates] = useState({
      hover: false,
      expanded: false,
      toggle: false,
      chevron: 'down' as 'up' | 'down' | 'left' | 'right',
      playing: false,
      favorited: false,
      starred: false,
      visible: true,
      checked: false,
      loading: false,
      active: false
    })

    return (
      <div className="max-w-7xl mx-auto p-xl space-y-2xl">
        <div className="text-center space-y-base">
          <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
            Micro-Interactions
          </Badge>
          <h1 className="font-rajdhani text-4xl font-bold text-card-foreground">
            Button Micro-Animations
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stripe-inspired micro-animations that provide contextual feedback and enhance user experience. 
            Click buttons to see state transitions and hover effects.
          </p>
        </div>

        {/* Navigation Animations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Navigation & Action Animations</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Hover Arrow (Stripe Classic)</h4>
              <Button
                variant="solid-accent"
                onMouseEnter={() => setStates(s => ({ ...s, hover: true }))}
                onMouseLeave={() => setStates(s => ({ ...s, hover: false }))}
                className="w-full justify-between"
              >
                Learn More
                <HoverArrow isHovered={states.hover} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Classic &quot;&gt;&quot; transforms to &quot;-&gt;&quot; on hover. Perfect for CTAs and navigation.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Chevron Rotation</h4>
              <Button
                variant="outline"
                onClick={() => setStates(s => ({ 
                  ...s, 
                  chevron: s.chevron === 'down' ? 'up' : 'down' 
                }))}
                className="w-full justify-between"
              >
                Sort Direction
                <ChevronRotate direction={states.chevron} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Smooth chevron rotation for sort controls and dropdown indicators.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Check Transition</h4>
              <Button
                variant="ghost"
                onClick={() => setStates(s => ({ ...s, checked: !s.checked }))}
                className="w-full justify-between"
              >
                Complete Task
                <CheckTransition isChecked={states.checked} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Empty circle transforms to filled checkmark for completion states.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Animations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Toggle & State Animations</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Plus/Minus Toggle</h4>
              <Button
                variant="outline"
                onClick={() => setStates(s => ({ ...s, expanded: !s.expanded }))}
                className="w-full justify-between"
              >
                {states.expanded ? 'Collapse' : 'Expand'} Section
                <PlusMinusToggle isExpanded={states.expanded} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Plus morphs to minus for expand/collapse functionality.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">X/O Toggle</h4>
              <Button
                variant="outline"
                onClick={() => setStates(s => ({ ...s, toggle: !s.toggle }))}
                className="w-full justify-between"
              >
                {states.toggle ? 'Active' : 'Inactive'} Mode
                <XOToggle isActive={states.toggle} />
              </Button>
              <p className="text-xs text-muted-foreground">
                X transforms to O with rotation and scaling for on/off states.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Play/Pause Toggle</h4>
              <Button
                variant="solid-accent"
                onClick={() => setStates(s => ({ ...s, playing: !s.playing }))}
                className="w-full justify-between"
              >
                {states.playing ? 'Pause' : 'Play'} Media
                <PlayPauseToggle isPlaying={states.playing} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Play triangle transforms to pause bars with smooth scaling.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">EyeIcon Visibility Toggle</h4>
              <Button
                variant="ghost"
                onClick={() => setStates(s => ({ ...s, visible: !s.visible }))}
                className="w-full justify-between"
              >
                {states.visible ? 'Hide' : 'Show'} Content
                <EyeIconToggle isVisible={states.visible} />
              </Button>
              <p className="text-xs text-muted-foreground">
                EyeIcon transforms to crossed-out eye for show/hide functionality.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">HeartIcon Favorite</h4>
              <Button
                variant="ghost"
                onClick={() => setStates(s => ({ ...s, favorited: !s.favorited }))}
                className={`w-full justify-between ${states.favorited ? 'text-rusty-orange' : ''}`}
              >
                {states.favorited ? 'Unfavorite' : 'Favorite'} Item
                <HeartFill isFavorited={states.favorited} />
              </Button>
              <p className="text-xs text-muted-foreground">
                HeartIcon outline fills with color and scales up when favorited.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">StarIcon Rating</h4>
              <Button
                variant="ghost"
                onClick={() => setStates(s => ({ ...s, starred: !s.starred }))}
                className="w-full justify-between"
              >
                {states.starred ? 'Unstar' : 'StarIcon'} Item
                <StarFill isStarred={states.starred} />
              </Button>
              <p className="text-xs text-muted-foreground">
                StarIcon fills with rusty-orange and scales up when starred.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Loading & Status Animations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Loading & Status Animations</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Loading Dots</h4>
              <Button
                variant="solid-accent"
                onClick={() => setStates(s => ({ ...s, loading: !s.loading }))}
                disabled={states.loading}
                className="w-full justify-center"
              >
                {states.loading ? (
                  <LoadingDots />
                ) : (
                  'Start Process'
                )}
              </Button>
              <p className="text-xs text-muted-foreground">
                Three dots animate in sequence for loading states.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Pulse Ring</h4>
              <Button
                variant="outline"
                onClick={() => setStates(s => ({ ...s, active: !s.active }))}
                className="w-full justify-between"
              >
                {states.active ? 'Recording...' : 'Start Recording'}
                <PulseRing isActive={states.active} />
              </Button>
              <p className="text-xs text-muted-foreground">
                Pulsing ring animation for active/recording states.
              </p>
            </div>

            <div className="space-y-base">
              <h4 className="font-medium text-sm text-card-foreground">Multi-State Progress</h4>
              <div className="flex gap-xs">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStates(s => ({ ...s, chevron: 'left' }))}
                  className="flex-1"
                >
                  <ChevronRotate direction="left" />
                  Prev
                </Button>
                <Button
                  variant="outline"  
                  size="sm"
                  onClick={() => setStates(s => ({ ...s, chevron: 'right' }))}
                  className="flex-1"
                >
                  Next
                  <ChevronRotate direction="right" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Directional chevrons for step-by-step navigation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="font-rajdhani text-xl">Implementation Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div>
                <h4 className="font-medium mb-sm text-card-foreground">Animation Principles</h4>
                <ul className="space-y-xs text-sm text-muted-foreground">
                  <li>• Use 300ms duration for most transitions</li>
                  <li>• Apply ease-out timing for natural feel</li>
                  <li>• Scale and rotate effects add personality</li>
                  <li>• Opacity changes provide smooth states</li>
                  <li>• Combine transforms for complex animations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-sm text-card-foreground">Accessibility</h4>
                <ul className="space-y-xs text-sm text-muted-foreground">
                  <li>• Respect prefers-reduced-motion setting</li>
                  <li>• Maintain clear focus indicators</li>
                  <li>• Provide text alternatives for icons</li>
                  <li>• Ensure adequate color contrast</li>
                  <li>• Test with screen readers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export const InteractivePlayground: Story = {
  render: () => {
    const [selectedAnimation, setSelectedAnimation] = useState('hover-arrow')
    const [animationState, setAnimationState] = useState(false)

    const animations = [
      { id: 'hover-arrow', name: 'Hover Arrow', description: 'Stripe-style arrow transformation' },
      { id: 'plus-minus', name: 'Plus/Minus', description: 'Expand/collapse toggle' },
      { id: 'x-o', name: 'X/O Toggle', description: 'On/off state indicator' },
      { id: 'chevron', name: 'Chevron Rotate', description: 'Directional indicator' },
      { id: 'play-pause', name: 'Play/Pause', description: 'Media control toggle' },
      { id: 'heart', name: 'HeartIcon Fill', description: 'Favorite animation' },
      { id: 'star', name: 'StarIcon Fill', description: 'Rating indicator' },
      { id: 'eye', name: 'EyeIcon Toggle', description: 'Visibility control' },
      { id: 'check', name: 'Check Mark', description: 'Completion indicator' },
      { id: 'pulse', name: 'Pulse Ring', description: 'Active status indicator' }
    ]

    const renderAnimation = () => {
      switch (selectedAnimation) {
        case 'hover-arrow':
          return <HoverArrow isHovered={animationState} />
        case 'plus-minus':
          return <PlusMinusToggle isExpanded={animationState} />
        case 'x-o':
          return <XOToggle isActive={animationState} />
        case 'chevron':
          return <ChevronRotate direction={animationState ? 'up' : 'down'} />
        case 'play-pause':
          return <PlayPauseToggle isPlaying={animationState} />
        case 'heart':
          return <HeartFill isFavorited={animationState} />
        case 'star':
          return <StarFill isStarred={animationState} />
        case 'eye':
          return <EyeIconToggle isVisible={animationState} />
        case 'check':
          return <CheckTransition isChecked={animationState} />
        case 'pulse':
          return <PulseRing isActive={animationState} />
        default:
          return <HoverArrow isHovered={animationState} />
      }
    }

    return (
      <div className="max-w-4xl mx-auto p-xl space-y-xl">
        <div className="text-center space-y-base">
          <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
            Interactive Playground
          </Badge>
          <h1 className="font-rajdhani text-3xl font-bold text-card-foreground">
            Test Button Animations
          </h1>
          <p className="text-muted-foreground">
            Select an animation and toggle states to see micro-interactions in action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Animation Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-xs">
                {animations.map((anim) => (
                  <Button
                    key={animotion.id}
                    variant={selectedAnimation === animotion.id ? 'solid-accent' : 'ghost'}
                    onClick={() => setSelectedAnimation(animotion.id)}
                    className="w-full justify-start"
                  >
                    {animotion.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Animation Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Animation Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-lg">
              <div className="h-32 flex items-center justify-center bg-muted/30 rounded-sm">
                <div className="text-6xl">
                  {renderAnimation()}
                </div>
              </div>
              
              <div className="text-center space-y-base">
                <p className="text-sm text-muted-foreground">
                  {animations.find(a => a.id === selectedAnimation)?.description}
                </p>
                
                <Button
                  variant="solid-accent"
                  onClick={() => setAnimationState(!animationState)}
                  className="w-full"
                >
                  Toggle State: {animationState ? 'Active' : 'Inactive'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}