// This file has been deleted - functionality moved to existing Button.stories.tsx
// Please use /src/stories/Components/Atoms/Button.stories.tsx instead

export const AllVariantsWithAnimations: Story = {
  render: () => {
    const [states, setStates] = useState({
      expanded: false,
      toggles: {} as Record<string, boolean>,
      sortDirection: 'down' as 'up' | 'down',
      activeStates: {} as Record<string, boolean>
    })

    const toggleState = (key: string) => {
      setStates(prev => ({
        ...prev,
        toggles: {
          ...prev.toggles,
          [key]: !prev.toggles[key]
        }
      }))
    }

    const toggleActive = (key: string) => {
      setStates(prev => ({
        ...prev,
        activeStates: {
          ...prev.activeStates,
          [key]: !prev.activeStates[key]
        }
      }))
    }

    return (
      <div className="max-w-7xl mx-auto p-xl space-y-2xl">
        <div className="text-center space-y-base">
          <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
            Interactive Components
          </Badge>
          <h1 className="font-rajdhani text-4xl font-bold text-card-foreground">
            Button Animation System
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete button system with micro-animations. Flat buttons stay flat, shadowed buttons get better shadows, 
            and all variants include contextual micro-interactions.
          </p>
        </div>

        {/* Shadow-Enhanced Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Shadow-Enhanced Buttons</CardTitle>
            <p className="text-muted-foreground">Buttons with shadows that get cooler/better/bigger on hover</p>
          </CardHeader>
          <CardContent className="space-y-lg">
            
            {/* Default with Shadow Progression */}
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Default → Primary → Fire Variants</h4>
              <div className="flex flex-wrap gap-base">
                <Button variant="default" animationType="arrow">
                  Default Button
                </Button>
                <Button variant="primary" animationType="arrow">
                  Primary Action
                </Button>
                <Button variant="fire" animationType="arrow">
                  Fire Gradient
                </Button>
                <Button variant="fire-blue" animationType="arrow">
                  Fire Blue
                </Button>
                <Button variant="fire-purple" animationType="arrow">
                  Fire Purple  
                </Button>
                <Button variant="fire-green" animationType="arrow">
                  Fire Green
                </Button>
              </div>
            </div>

            {/* Glass & Accent Variants */}
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Glass & Accent Variants</h4>
              <div className="flex flex-wrap gap-base">
                <Button variant="glass" animationType="arrow">
                  <Wifi className="h-4 w-4" />
                  Glass Effect
                </Button>
                <Button variant="accent" animationType="chevron" animationState={states.sortDirection}>
                  Sort Direction
                </Button>
                <Button variant="success" animationType="x-o" animationState={states.activeStates['success']}>
                  <Shield className="h-4 w-4" />
                  {states.activeStates['success'] ? 'Active' : 'Inactive'}
                </Button>
                <Button 
                  variant="destructive" 
                  animationType="plus-minus" 
                  animationState={states.expanded}
                  onClick={() => setStates(prev => ({ ...prev, expanded: !prev.expanded }))}
                >
                  {states.expanded ? 'Collapse' : 'Expand'} Options
                </Button>
              </div>
            </div>

            {/* Animated State Controls */}
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Interactive State Controls</h4>
              <div className="flex flex-wrap gap-base">
                <Button 
                  variant="primary" 
                  animationType="chevron" 
                  animationState={states.sortDirection}
                  onClick={() => setStates(prev => ({ 
                    ...prev, 
                    sortDirection: prev.sortDirection === 'down' ? 'up' : 'down' 
                  }))}
                >
                  <Calendar className="h-4 w-4" />
                  Sort Events
                </Button>
                <Button 
                  variant="glass"
                  animationType="x-o"
                  animationState={states.activeStates['visibility']}
                  onClick={() => toggleActive('visibility')}
                >
                  <Eye className="h-4 w-4" />
                  {states.activeStates['visibility'] ? 'Hide' : 'Show'} Content
                </Button>
                <Button 
                  variant="fire"
                  animationType="plus-minus"
                  animationState={states.toggles['advanced']}
                  onClick={() => toggleState('advanced')}
                >
                  <Settings className="h-4 w-4" />
                  Advanced Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flat Buttons - Stay Flat */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Flat Buttons</CardTitle>
            <p className="text-muted-foreground">Pure flat design - no shadows, clean color transitions only</p>
          </CardHeader>
          <CardContent className="space-y-lg">
            
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Solid Variants (Flat with Animations)</h4>
              <div className="flex flex-wrap gap-base">
                <Button variant="solid-accent" animationType="arrow">
                  <Download className="h-4 w-4" />
                  Download Resource
                </Button>
                <Button variant="solid-success" animationType="arrow">
                  <Users className="h-4 w-4" />
                  Join Community
                </Button>
                <Button variant="solid-destructive" animationType="arrow">
                  <Upload className="h-4 w-4" />
                  Upload Files
                </Button>
                <Button variant="solid-primary" animationType="arrow">
                  <Star className="h-4 w-4" />
                  Get Started
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-base text-card-foreground">Flat Utility Buttons</h4>
              <div className="flex flex-wrap gap-base">
                <Button variant="flat" animationType="plus-minus" animationState={states.toggles['filters']}>
                  <Filter className="h-4 w-4" />
                  {states.toggles['filters'] ? 'Hide' : 'Show'} Filters
                </Button>
                <Button variant="flat" animationType="x-o" animationState={states.activeStates['search']}>
                  <Search className="h-4 w-4" />
                  {states.activeStates['search'] ? 'Close' : 'Open'} Search
                </Button>
                <Button 
                  variant="flat" 
                  animationType="chevron" 
                  animationState="right"
                >
                  <MapPin className="h-4 w-4" />
                  View Location
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-base text-card-foreground">Interactive Flat Controls</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
                <Button 
                  variant="flat"
                  animationType="plus-minus"
                  animationState={states.toggles['options']}
                  onClick={() => toggleState('options')}
                  className="justify-between"
                >
                  <span className="flex items-center gap-xs">
                    <Settings className="h-4 w-4" />
                    Options
                  </span>
                </Button>
                
                <Button 
                  variant="flat"
                  animationType="x-o"
                  animationState={states.activeStates['notifications']}
                  onClick={() => toggleActive('notifications')}
                  className="justify-between"
                >
                  <span className="flex items-center gap-xs">
                    <Volume2 className="h-4 w-4" />
                    Notifications
                  </span>
                </Button>

                <Button 
                  variant="flat"
                  animationType="chevron"
                  animationState={states.sortDirection}
                  onClick={() => setStates(prev => ({ 
                    ...prev, 
                    sortDirection: prev.sortDirection === 'down' ? 'up' : 'down' 
                  }))}
                  className="justify-between"
                >
                  <span className="flex items-center gap-xs">
                    <Clock className="h-4 w-4" />
                    Sort by Date
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outline & Link Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Minimal Variants</CardTitle>
            <p className="text-muted-foreground">Clean outline and link styles with subtle animations</p>
          </CardHeader>
          <CardContent className="space-y-lg">
            
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Outline Buttons</h4>
              <div className="flex flex-wrap gap-base">
                <Button variant="outline" animationType="arrow">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Button>
                <Button variant="outline" animationType="chevron" animationState="right">
                  <Mail className="h-4 w-4" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  animationType="plus-minus" 
                  animationState={states.toggles['details']}
                  onClick={() => toggleState('details')}
                >
                  <MoreHorizontal className="h-4 w-4" />
                  {states.toggles['details'] ? 'Less' : 'More'} Details
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-base text-card-foreground">Link Buttons</h4>
              <div className="flex flex-wrap gap-lg">
                <Button variant="link" animationType="arrow">
                  Learn More About Events
                </Button>
                <Button variant="link" animationType="chevron" animationState="right">
                  View Full Directory
                </Button>
                <Button variant="link" animationType="arrow">
                  Read Safety Guidelines
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Variations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-rajdhani text-2xl">Size Variations with Animations</CardTitle>
            <p className="text-muted-foreground">All button sizes support micro-animations</p>
          </CardHeader>
          <CardContent className="space-y-lg">
            
            <div>
              <h4 className="font-medium mb-base text-card-foreground">Shadow Button Sizes</h4>
              <div className="flex flex-wrap items-center gap-base">
                <Button variant="primary" size="sm" animationType="arrow">
                  Small Action
                </Button>
                <Button variant="primary" size="default" animationType="arrow">
                  Default Action
                </Button>
                <Button variant="primary" size="lg" animationType="arrow">
                  Large Action
                </Button>
                <Button variant="primary" size="xl" animationType="arrow">
                  Extra Large CTA
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-base text-card-foreground">Flat Button Sizes</h4>
              <div className="flex flex-wrap items-center gap-base">
                <Button variant="solid-accent" size="sm" animationType="plus-minus" animationState={states.toggles['sm']}>
                  Small
                </Button>
                <Button variant="solid-accent" size="default" animationType="x-o" animationState={states.activeStates['def']}>
                  Default  
                </Button>
                <Button variant="solid-accent" size="lg" animationType="chevron" animationState="right">
                  Large
                </Button>
                <Button variant="solid-accent" size="xl" animationType="arrow">
                  Extra Large
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guide */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="font-rajdhani text-xl">Animation Implementation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div>
                <h4 className="font-medium mb-sm text-card-foreground">Animation Types</h4>
                <ul className="space-y-xs text-sm text-muted-foreground font-mono">
                  <li>• <code>animationType="arrow"</code> - Stripe hover arrow</li>
                  <li>• <code>animationType="plus-minus"</code> - Expand/collapse</li>
                  <li>• <code>animationType="x-o"</code> - On/off toggle</li>
                  <li>• <code>animationType="chevron"</code> - Directional indicator</li>
                  <li>• <code>animationType="none"</code> - Disable animations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-sm text-card-foreground">Design Principles</h4>
                <ul className="space-y-xs text-sm text-muted-foreground">
                  <li>• Shadow buttons: shadows get better on hover</li>
                  <li>• Flat buttons: stay flat, color transitions only</li>
                  <li>• Micro-animations provide contextual feedback</li>
                  <li>• Consistent 300ms transition timing</li>
                  <li>• Theme-aware colors and effects</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-lg p-base bg-card rounded-card border border-border">
              <h5 className="font-medium text-sm mb-xs">Example Usage:</h5>
              <pre className="text-xs text-muted-foreground overflow-x-auto">
{`<Button variant="primary" animationType="arrow">
  Call to Action
</Button>

<Button 
  variant="flat" 
  animationType="plus-minus" 
  animationState={isExpanded}
  onClick={() => setIsExpanded(!isExpanded)}
>
  Toggle Options
</Button>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export const InteractiveDemo: Story = {
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<'primary' | 'flat' | 'solid-accent'>('primary')
    const [currentAnimation, setCurrentAnimation] = useState<'arrow' | 'plus-minus' | 'x-o' | 'chevron'>('arrow')
    const [animationState, setAnimationState] = useState<boolean | string>(false)

    const variants = [
      { value: 'primary' as const, label: 'Primary (Shadow)', description: 'Shadow gets elevated on hover' },
      { value: 'flat' as const, label: 'Flat', description: 'Stays flat, color change only' },
      { value: 'solid-accent' as const, label: 'Solid Accent', description: 'Flat with accent colors' }
    ]

    const animations = [
      { value: 'arrow' as const, label: 'Arrow', description: 'Stripe-style hover arrow' },
      { value: 'plus-minus' as const, label: 'Plus/Minus', description: 'Toggle expand/collapse' },
      { value: 'x-o' as const, label: 'X/O Toggle', description: 'On/off state indicator' },
      { value: 'chevron' as const, label: 'Chevron', description: 'Directional rotation' }
    ]

    return (
      <div className="max-w-4xl mx-auto p-xl space-y-xl">
        <div className="text-center space-y-base">
          <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
            Interactive Demo
          </Badge>
          <h1 className="font-rajdhani text-3xl font-bold text-card-foreground">
            Button Animation Builder
          </h1>
          <p className="text-muted-foreground">
            Customize button variants and animations to see the system in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Customize Button</CardTitle>
            </CardHeader>
            <CardContent className="space-y-lg">
              {/* Variant Selection */}
              <div>
                <h4 className="font-medium mb-base">Button Variant</h4>
                <div className="space-y-xs">
                  {variants.map(variant => (
                    <Button
                      key={variant.value}
                      variant={currentVariant === variant.value ? 'solid-accent' : 'flat'}
                      size="sm"
                      onClick={() => setCurrentVariant(variant.value)}
                      className="w-full justify-start"
                      animationType="none"
                    >
                      <div className="text-left">
                        <div className="font-medium">{variant.label}</div>
                        <div className="text-xs opacity-70">{variant.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Animation Selection */}
              <div>
                <h4 className="font-medium mb-base">Animation Type</h4>
                <div className="space-y-xs">
                  {animations.map(anim => (
                    <Button
                      key={anim.value}
                      variant={currentAnimation === anim.value ? 'solid-accent' : 'flat'}
                      size="sm"
                      onClick={() => setCurrentAnimation(anim.value)}
                      className="w-full justify-start"
                      animationType="none"
                    >
                      <div className="text-left">
                        <div className="font-medium">{anim.label}</div>
                        <div className="text-xs opacity-70">{anim.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Animation State Control */}
              {(currentAnimation === 'plus-minus' || currentAnimation === 'x-o') && (
                <div>
                  <h4 className="font-medium mb-base">Animation State</h4>
                  <Button
                    variant="outline"
                    onClick={() => setAnimationState(!animationState)}
                    className="w-full"
                    animationType="none"
                  >
                    Toggle State: {animationState ? 'Active' : 'Inactive'}
                  </Button>
                </div>
              )}

              {currentAnimation === 'chevron' && (
                <div>
                  <h4 className="font-medium mb-base">Chevron Direction</h4>
                  <div className="grid grid-cols-2 gap-xs">
                    {(['up', 'down', 'left', 'right'] as const).map(dir => (
                      <Button
                        key={dir}
                        variant={animationState === dir ? 'solid-accent' : 'flat'}
                        size="sm"
                        onClick={() => setAnimationState(dir)}
                        animationType="none"
                      >
                        {dir.charAt(0).toUpperCase() + dir.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-lg">
              <div className="h-32 flex items-center justify-center bg-muted/30 rounded-card">
                <Button
                  variant={currentVariant}
                  size="lg"
                  animationType={currentAnimation}
                  animationState={animationState}
                  onClick={() => {
                    if (currentAnimation === 'plus-minus' || currentAnimation === 'x-o') {
                      setAnimationState(!animationState)
                    }
                  }}
                >
                  <Settings className="h-4 w-4" />
                  Interactive Button
                </Button>
              </div>
              
              <div className="text-center space-y-base">
                <div className="text-sm text-muted-foreground">
                  <strong>Current Setup:</strong><br />
                  Variant: {variants.find(v => v.value === currentVariant)?.label}<br />
                  Animation: {animations.find(a => a.value === currentAnimation)?.label}<br />
                  {(currentAnimation === 'plus-minus' || currentAnimation === 'x-o') && (
                    <>State: {animationState ? 'Active' : 'Inactive'}<br /></>
                  )}
                  {currentAnimation === 'chevron' && (
                    <>Direction: {typeof animationState === 'string' ? animationState : 'right'}<br /></>
                  )}
                </div>
                
                <div className="p-base bg-card rounded-card border text-xs font-mono text-left">
                  {`<Button
  variant="${currentVariant}"
  animationType="${currentAnimation}"${(currentAnimation === 'plus-minus' || currentAnimation === 'x-o' || currentAnimation === 'chevron') ? `
  animationState={${typeof animationState === 'string' ? `"${animationState}"` : animationState}}` : ''}
>
  Interactive Button
</Button>`}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}