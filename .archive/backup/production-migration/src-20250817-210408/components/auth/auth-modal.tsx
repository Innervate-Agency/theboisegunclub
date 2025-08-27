'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useAuth } from './auth-context'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Eye, EyeSlash, EnvelopeSimple, User, Lock, Shield } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'login' | 'register'
  onModeChange: (mode: 'login' | 'register') => void
}

export function AuthModal({ isOpen, onClose, mode, onModeChange }: AuthModalProps) {
  const { login, register, isLoading } = useAuth()
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Reset form when modal opens/closes or mode changes
  React.useEffect(() => {
    if (!isOpen) {
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      setErrors({})
      setIsSubmitting(false)
    }
  }, [isOpen, mode])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    // Registration-specific validation
    if (mode === 'register') {
      if (!formData.username) {
        newErrors.username = 'Username is required'
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters'
      } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.username = 'Username can only contain letters, numbers, and underscores'
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      let success = false
      
      if (mode === 'login') {
        success = await login(formData.email, formData.password)
      } else {
        success = await register(formData.username, formData.email, formData.password)
      }

      if (success) {
        onClose()
      } else {
        setErrors({
          submit: mode === 'login' 
            ? 'Invalid email or password' 
            : 'Registration failed. Please try again.'
        })
      }
    } catch (error) {
      setErrors({
        submit: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md fixed inset-y-0 right-0 left-auto w-full sm:w-96 max-w-none rounded-none rounded-l-xs mica shadow-modal transform-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full">
        <DialogHeader className="text-center space-y-xs">
          <DialogTitle className="text-2xl font-rajdhani font-[600] text-card-foreground flex items-center justify-center gap-sm">
                        <Shield className="size-6 text-primary" weight="bold" />
            {mode === 'login' ? 'Welcome Back' : 'Join The Club'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {mode === 'login' 
              ? 'Sign in to access forums, events, and exclusive content'
              : 'Create your account to join the Treasure Valley firearms community'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-lg">
          {/* Registration Username Field */}
          {mode === 'register' && (
            <div className="space-y-xs">
              <Label htmlFor="username" className="text-sm font-medium text-card-foreground">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-xs top-1/2 -translate-y-1/2 size-4 text-muted-foreground" weight="bold" />
                <Input
                  id="username"
                  type="text"
                  placeholder="gunsmith_mike"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className={cn("pl-lg", errors.username && "border-destructive")}
                  disabled={isSubmitting}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-destructive">{errors.username}</p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-xs">
            <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
              Email Address
            </Label>
            <div className="relative">
              <EnvelopeSimple className="absolute left-xs top-1/2 -translate-y-1/2 size-4 text-muted-foreground" weight="bold" />
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={cn("pl-lg", errors.email && "border-destructive")}
                disabled={isSubmitting}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-xs">
            <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-xs top-1/2 -translate-y-1/2 size-4 text-muted-foreground" weight="bold" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={cn("pl-lg pr-lg", errors.password && "border-destructive")}
                disabled={isSubmitting}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-xs top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent shadow-none rounded-xs"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isSubmitting}
              >
                {showPassword ? (
                  <EyeSlash className="size-4 text-muted-foreground" weight="bold" />
                ) : (
                  <Eye className="size-4 text-muted-foreground" weight="bold" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-xs text-destructive">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field (Registration only) */}
          {mode === 'register' && (
            <div className="space-y-xs">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-card-foreground">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-xs top-1/2 -translate-y-1/2 size-4 text-muted-foreground" weight="bold" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={cn("pl-lg", errors.confirmPassword && "border-destructive")}
                  disabled={isSubmitting}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-destructive">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Submit Error */}
          {errors.submit && (
            <div className="text-center">
              <p className="text-sm text-destructive">{errors.submit}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full shadow-none rounded-xs"
            disabled={isSubmitting}
          >
            {isSubmitting && <LoadingSpinner size="sm" className="mr-xs" />}
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        {/* Mode Switch */}
        <div className="space-y-base">
          <Separator />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button
              type="button"
              variant="link"
              className="text-primary hover:text-primary/80 p-0 h-auto font-medium shadow-none rounded-xs"
              onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')}
              disabled={isSubmitting}
            >
              {mode === 'login' ? 'Create Account' : 'Sign In'}
            </Button>
          </div>
        </div>

        {/* Forum Notice */}
        <div className="text-center border-t border-border/50 pt-base">
          <p className="text-xs text-muted-foreground">
            Your account works across the main site and forums
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}