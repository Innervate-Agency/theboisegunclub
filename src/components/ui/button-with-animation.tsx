import * as React from 'react'
import { EnhancedButton, EnhancedButtonProps } from '@/components/ui/enhanced-button'
import { cn } from '@/lib/utils'
import { 
  HoverArrow, 
  PlusMinusToggle, 
  XOToggle, 
  ChevronRotate, 
  ArrowToDoubleArrow,
  ZeroToX,
  PlayPauseToggle,
  EyeToggle,
  CheckTransition,
  LoadingDots,
  PulseRing
} from '@/components/ui/micro-animations'

export type AnimationType = 
  | 'hover-arrow'
  | 'plus-minus' 
  | 'x-o'
  | 'chevron'
  | 'arrow-double'
  | 'zero-x'
  | 'play-pause'
  | 'eye-toggle'
  | 'check'
  | 'loading-dots'
  | 'pulse-ring'

export interface ButtonWithAnimationProps extends EnhancedButtonProps {
  animation?: AnimationType
  animationActive?: boolean
  animationSpeed?: 'fast' | 'normal' | 'slow'
  showAnimation?: boolean
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

export const ButtonWithAnimation = React.forwardRef<HTMLButtonElement, ButtonWithAnimationProps>(
  ({ 
    animation = 'hover-arrow',
    animationActive = false,
    animationSpeed = 'normal',
    showAnimation = true,
    iconPosition = 'right',
    children,
    className,
    disabled,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [internalActive, setInternalActive] = React.useState(animationActive)

    // Update internal state when prop changes
    React.useEffect(() => {
      setInternalActive(animationActive)
    }, [animationActive])

    const renderAnimation = () => {
      if (!showAnimation) return null

      const animationProps = {
        className: "transition-all duration-300",
        isActive: internalActive || isHovered,
        speed: animationSpeed
      }

      switch (animation) {
        case 'hover-arrow':
          return <HoverArrow {...animationProps} isActive={isHovered} />
        case 'plus-minus':
          return <PlusMinusToggle {...animationProps} />
        case 'x-o':
          return <XOToggle {...animationProps} />
        case 'chevron':
          return <ChevronRotate {...animationProps} direction="down" />
        case 'arrow-double':
          return <ArrowToDoubleArrow {...animationProps} />
        case 'zero-x':
          return <ZeroToX {...animationProps} />
        case 'play-pause':
          return <PlayPauseToggle {...animationProps} />
        case 'eye-toggle':
          return <EyeToggle {...animationProps} />
        case 'check':
          return <CheckTransition {...animationProps} />
        case 'loading-dots':
          return <LoadingDots {...animationProps} />
        case 'pulse-ring':
          return <PulseRing {...animationProps} />
        default:
          return <HoverArrow {...animationProps} isActive={isHovered} />
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Toggle internal active state for toggle-type animations
      if (['plus-minus', 'x-o', 'play-pause', 'eye-toggle', 'check', 'pulse-ring'].includes(animation)) {
        setInternalActive(!internalActive)
      }
      
      // Call original onClick if provided
      props.onClick?.(e)
    }

    return (
      <EnhancedButton
        ref={ref}
        className={cn(
          "transition-all duration-300 gap-2",
          iconPosition === 'left' ? "flex-row" : "flex-row",
          className
        )}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        {...props}
      >
        {iconPosition === 'left' && renderAnimation()}
        <span className="flex-1">{children}</span>
        {iconPosition === 'right' && renderAnimation()}
      </EnhancedButton>
    )
  }
)

ButtonWithAnimation.displayName = "ButtonWithAnimation"

// Quick preset components for common use cases
export const CTAButton = React.forwardRef<HTMLButtonElement, Omit<ButtonWithAnimationProps, 'animation'>>(
  (props, ref) => (
    <ButtonWithAnimation 
      ref={ref}
      animation="hover-arrow" 
      variant="default"
      showAnimation={false} // Don't show separate animation icon for CTAs
      {...props} 
    />
  )
)

export const ToggleButton = React.forwardRef<HTMLButtonElement, Omit<ButtonWithAnimationProps, 'animation'>>(
  (props, ref) => (
    <ButtonWithAnimation 
      ref={ref}
      animation="plus-minus" 
      variant="outline" 
      {...props} 
    />
  )
)

export const ProcessButton = React.forwardRef<HTMLButtonElement, Omit<ButtonWithAnimationProps, 'animation'>>(
  (props, ref) => (
    <ButtonWithAnimation 
      ref={ref}
      animation="arrow-double" 
      variant="default" 
      {...props} 
    />
  )
)

export const NavigationButton = React.forwardRef<HTMLButtonElement, Omit<ButtonWithAnimationProps, 'animation'>>(
  (props, ref) => (
    <ButtonWithAnimation 
      ref={ref}
      animation="hover-arrow" 
      variant="ghost" 
      {...props} 
    />
  )
)

CTAButton.displayName = "CTAButton"
ToggleButton.displayName = "ToggleButton"
ProcessButton.displayName = "ProcessButton"
NavigationButton.displayName = "NavigationButton"