'use client'

import React from 'react'
import { useAuth } from '@/components/auth/auth-context'
import { UserAvatar } from './user-avatar'
import { PrivateMessaging } from './private-messaging'
import { UserDashboard } from './user-dashboard'
import { NotificationBadge } from './notification-badge'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  ArrowRightOnRectangleIcon, 
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  XMarkIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

type FloatingState = 'closed' | 'menu' | 'chat' | 'dashboard'

interface FloatingUserSystemProps {
  className?: string
}

export function FloatingUserSystem({ className }: FloatingUserSystemProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const [state, setState] = React.useState<FloatingState>('closed')
  const [unreadMessages, setUnreadMessages] = React.useState(3) // Mock data for now
  const [notifications, setNotifications] = React.useState(2) // Mock data for now

  // Handle clicks outside to close menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.floating-user-system')) {
        setState('closed')
      }
    }

    if (state !== 'closed') {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [state])

  // Don't render during loading
  if (isLoading) return null

  // Unauthenticated state - show login buttons
  if (!isAuthenticated || !user) {
    return (
      <div className={cn("fixed bottom-6 right-6 z-50 floating-user-system", className)}>
        <div className="flex flex-col gap-sm">
          <Button
            onClick={() => {
              // Navigate to login page or open login modal
              window.location.href = '/auth/login'
            }}
            className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 font-rajdhani font-bold group"
            size="lg"
          >
            <ArrowRightOnRectangleIcon className="size-5 mr-xs group-hover:scale-110 transition-transform" />
            Login
          </Button>
          
          <Button
            variant="outline"
            onClick={() => {
              // Navigate to register page
              window.location.href = '/auth/register'
            }}
            className="mica-card shadow-whisper hover:shadow-present transition-all duration-300 font-rajdhani font-medium"
            size="sm"
          >
            <PlusIcon className="size-4 mr-xs" />
            Sign Up
          </Button>
        </div>
      </div>
    )
  }

  // Authenticated state
  return (
    <div className={cn("fixed bottom-6 right-6 z-50 floating-user-system", className)}>
      {/* Chat Interface Overlay */}
      {state === 'chat' && (
        <div className="absolute bottom-20 right-0 mb-base">
          <PrivateMessaging
            isOpen={true}
            onClose={() => setState('closed')}
            unreadCount={unreadMessages}
          />
        </div>
      )}

      {/* Dashboard Overlay */}
      {state === 'dashboard' && (
        <div className="absolute bottom-20 right-0 mb-base">
          <UserDashboard
            isOpen={true}
            onClose={() => setState('closed')}
            user={user}
          />
        </div>
      )}

      {/* Main FAB Stack */}
      <div className="relative flex flex-col items-end gap-sm">
        {/* Expanded Menu Items */}
        {state === 'menu' && (
          <div className="flex flex-col gap-xs animate-in slide-in-from-bottom-2 fade-in duration-200">
            {/* Private Messages FAB */}
            <Button
              onClick={() => setState('chat')}
              className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 relative group w-14 h-14 rounded-full p-0"
              title="Private Messages"
            >
              <ChatBubbleLeftRightIcon className="size-6 group-hover:scale-110 transition-transform" />
              {unreadMessages > 0 && (
                <NotificationBadge 
                  count={unreadMessages} 
                  className="absolute -top-1 -right-1"
                />
              )}
            </Button>

            {/* User Dashboard FAB */}
            <Button
              onClick={() => setState('dashboard')}
              className="mica-card shadow-present hover:shadow-elevated transition-all duration-300 relative group w-14 h-14 rounded-full p-0"
              title="User Dashboard"
            >
              <Cog6ToothIcon className="size-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
              {notifications > 0 && (
                <NotificationBadge 
                  count={notifications} 
                  className="absolute -top-1 -right-1"
                  variant="secondary"
                />
              )}
            </Button>
          </div>
        )}

        {/* Main User FAB */}
        <Button
          onClick={() => {
            if (state === 'closed') {
              setState('menu')
            } else {
              setState('closed')
            }
          }}
          className={cn(
            "mica-card shadow-commanding hover:shadow-hero transition-all duration-300 group relative",
            "w-16 h-16 rounded-full p-0",
            state !== 'closed' && "rotate-45"
          )}
          title={state === 'closed' ? 'Open user menu' : 'Close menu'}
        >
          {state === 'closed' ? (
            <UserAvatar 
              user={user}
              size="lg"
              showStatus={true}
              className="group-hover:scale-110 transition-transform"
            />
          ) : (
            <XMarkIcon className="size-7 text-card-foreground group-hover:scale-110 transition-transform" />
          )}
          
          {/* Total notification indicator on main FAB */}
          {state === 'closed' && (unreadMessages > 0 || notifications > 0) && (
            <NotificationBadge 
              count={unreadMessages + notifications} 
              className="absolute -top-1 -right-1"
              variant="primary"
            />
          )}
        </Button>
      </div>

      {/* Backdrop for overlay states */}
      {(state === 'chat' || state === 'dashboard') && (
        <div 
          className="fixed inset-0 bg-background/20 backdrop-blur-sm -z-10"
          onClick={() => setState('closed')}
        />
      )}
    </div>
  )
}