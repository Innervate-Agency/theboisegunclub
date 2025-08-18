'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-context'
import { AuthModal } from './auth-modal'
import { UserDropdown } from './user-dropdown'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { UserCircle, SignIn, Users, Monitor } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface AuthButtonProps {
  variant?: 'default' | 'minimal' | 'forum-aware'
  size?: 'sm' | 'md' | 'lg'
  showTrialButton?: boolean
  className?: string
}

export function AuthButton({ 
  variant = 'default',
  size = 'sm',
  showTrialButton = true,
  className 
}: AuthButtonProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const [showAuthModal, setShowAuthModal] = React.useState(false)
  const [authMode, setAuthMode] = React.useState<'login' | 'register'>('login')

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center gap-base">
        <LoadingSpinner size="sm" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    )
  }

  // Authenticated state - show user dropdown
  if (isAuthenticated && user) {
    return (
      <div className={cn("flex items-center gap-base", className)}>
        <UserDropdown user={user} />
        {variant === 'forum-aware' && (
          <Button
            variant="ghost"
            size={size}
            className="text-[var(--nav-forums)] hover:text-[var(--nav-forums)]/80 border border-[var(--nav-forums)]/30 bg-[var(--nav-forums)]/10 hover:bg-[var(--nav-forums)]/20 font-rajdhani font-medium group relative overflow-hidden rounded-xs"
            onClick={async () => {
              const { getForumUrl } = useAuth()
              const forumUrl = await getForumUrl()
              if (forumUrl) {
                window.open(forumUrl, '_blank')
              } else {
                window.open('https://boisegunclub.com/forums/', '_blank')
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nav-forums/0 via-nav-forums/15 to-nav-forums/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-out" />
            <Users className="size-4 mr-xs transition-all duration-200 group-hover:scale-110 group-hover:-rotate-6" weight="bold" />
            <span className="relative">Forums</span>
          </Button>
        )}
      </div>
    )
  }

  // Unauthenticated state - show login/register buttons
  return (
    <>
      <div className={cn("flex items-center gap-base", className)}>
        <Button
          variant="ghost"
          size={size}
          className="shadow-none font-rajdhani font-medium group relative overflow-hidden rounded-xs"
          onClick={() => {
            setAuthMode('login')
            setShowAuthModal(true)
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
          <SignIn className="size-4 mr-xs transition-transform duration-200 group-hover:scale-110" weight="bold" />
          <span className="relative">Sign In</span>
        </Button>

        {showTrialButton && (
          <Button
            variant="ghost"
            size={size}
            className="bg-secondary/10 text-secondary hover:bg-secondary/20 shadow-none border border-secondary/30 text-xs"
            onClick={() => {
              setAuthMode('register')
              setShowAuthModal(true)
            }}
          >
            60-Day Free Trial
          </Button>
        )}

        {variant === 'forum-aware' && (
          <Button
            variant="ghost" 
            size={size}
            className="text-muted-foreground hover:text-secondary border border-border/50 bg-muted/5 hover:bg-secondary/10 font-rajdhani font-medium group relative overflow-hidden rounded-xs"
            onClick={() => {
              // For now, just alert - will eventually route to /dashboard
              alert('Dashboard coming soon! This will be your personalized gaming/activity hub.')
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rusty-orange/8 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Monitor className="size-4 mr-xs transition-all duration-200 group-hover:scale-110 group-hover:rotate-12" weight="bold" />
            <span className="relative">Dashboard</span>
          </Button>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  )
}