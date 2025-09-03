'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  CheckBadgeIcon,
  ShieldCheckIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline'
import { 
  CheckBadgeIcon as CheckBadgeIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid 
} from '@heroicons/react/24/solid'

interface User {
  id: string
  username: string
  email: string
  role: string
  avatar?: string
  forumUserId?: string
  lastActive?: string
}

interface UserAvatarProps {
  user: User
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showStatus?: boolean
  showRole?: boolean
  showOnlineStatus?: boolean
  className?: string
  onClick?: () => void
}

export function UserAvatar({ 
  user, 
  size = 'md',
  showStatus = false,
  showRole = false,
  showOnlineStatus = true,
  className,
  onClick 
}: UserAvatarProps) {
  // Mock online status (in production, get from NodeBB Socket.IO)
  const [isOnline] = React.useState(true)
  
  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'w-8 h-8',
      image: 32,
      status: 'w-2.5 h-2.5',
      roleIcon: 'w-3 h-3'
    },
    md: {
      container: 'w-10 h-10',
      image: 40,
      status: 'w-3 h-3',
      roleIcon: 'w-3.5 h-3.5'
    },
    lg: {
      container: 'w-12 h-12',
      image: 48,
      status: 'w-3.5 h-3.5',
      roleIcon: 'w-4 h-4'
    },
    xl: {
      container: 'w-16 h-16',
      image: 64,
      status: 'w-4 h-4',
      roleIcon: 'w-5 h-5'
    }
  }

  const config = sizeConfig[size]

  // Get role configuration
  const getRoleConfig = (role: string) => {
    switch (role) {
      case 'admin':
        return {
          icon: ShieldCheckIconSolid,
          color: 'text-rusty-orange',
          bgColor: 'bg-rusty-orange/20',
          label: 'Admin'
        }
      case 'moderator':
        return {
          icon: CheckBadgeIconSolid,
          color: 'text-weathered-gold',
          bgColor: 'bg-weathered-gold/20',
          label: 'Moderator'
        }
      case 'member':
        return {
          icon: CheckBadgeIcon,
          color: 'text-sagebrush-green',
          bgColor: 'bg-sagebrush-green/20',
          label: 'Verified'
        }
      default:
        return null
    }
  }

  const roleConfig = getRoleConfig(user.role)

  // Generate avatar fallback from username
  const getInitials = (username: string) => {
    return username
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center",
        config.container,
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Avatar Image or Fallback */}
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          width={config.image}
          height={config.image}
          className="rounded-full object-cover border-2 border-border"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-blue to-nav-events rounded-full border-2 border-border flex items-center justify-center">
          {getInitials(user.username) ? (
            <span className={cn(
              "font-rajdhani font-bold text-white",
              size === 'sm' && "text-xs",
              size === 'md' && "text-sm", 
              size === 'lg' && "text-base",
              size === 'xl' && "text-lg"
            )}>
              {getInitials(user.username)}
            </span>
          ) : (
            <UserCircleIcon className={cn(
              "text-white",
              size === 'sm' && "w-5 h-5",
              size === 'md' && "w-6 h-6",
              size === 'lg' && "w-7 h-7", 
              size === 'xl' && "w-9 h-9"
            )} />
          )}
        </div>
      )}

      {/* Online Status Indicator */}
      {showOnlineStatus && (
        <div 
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            config.status,
            isOnline ? "bg-sagebrush-green" : "bg-muted-foreground/50"
          )}
          title={isOnline ? "Online" : "Offline"}
        />
      )}

      {/* Role Badge */}
      {showRole && roleConfig && (
        <div 
          className={cn(
            "absolute -top-1 -right-1 rounded-full flex items-center justify-center",
            roleConfig.bgColor,
            "border border-border"
          )}
          title={roleConfig.label}
        >
          <roleConfig.icon className={cn(config.roleIcon, roleConfig.color)} />
        </div>
      )}

      {/* Status Badge (for special states) */}
      {showStatus && (
        <Badge
          variant="outline" 
          className={cn(
            "absolute -bottom-1 left-1/2 transform -translate-x-1/2",
            "text-[10px] px-1 py-0 h-4",
            roleConfig?.bgColor,
            roleConfig?.color
          )}
        >
          {roleConfig?.label}
        </Badge>
      )}
    </div>
  )
}

// Compact version for use in lists or small spaces
export function UserAvatarCompact({ 
  user, 
  showUsername = true,
  className 
}: { 
  user: User
  showUsername?: boolean
  className?: string 
}) {
  return (
    <div className={cn("flex items-center gap-xs", className)}>
      <UserAvatar 
        user={user} 
        size="sm" 
        showOnlineStatus={true}
        showRole={false}
      />
      {showUsername && (
        <span className="text-sm font-medium text-card-foreground truncate">
          {user.username}
        </span>
      )}
    </div>
  )
}