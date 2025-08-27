'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useAuth } from './auth-context'
import { User } from '@/lib/auth'
import { ArrowRightOnRectangleIcon, BellIcon, BookOpenIcon, BuildingStorefrontIcon, CalendarDaysIcon, Cog6ToothIcon, MapIcon, ShieldCheckIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils'

interface UserDropdownProps {
  user: User
  align?: 'start' | 'center' | 'end'
  className?: string
}

export function UserDropdown({ user, align = 'end', className }: UserDropdownProps) {
  const { logout, getForumUrl } = useAuth()

  const handleForumAccess = async () => {
    const forumUrl = await getForumUrl()
    if (forumUrl) {
      window.open(forumUrl, '_blank')
    } else {
      // Fallback to regular forum URL
      window.open('https://boisegunclub.com/forums/', '_blank')
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  // Get role-specific styling
  const getRoleBadgeStyle = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return 'bg-destructive text-destructive-foreground border-destructive'
      case 'moderator':
        return 'bg-primary text-primary-foreground border-primary'
      case 'member':
        return 'bg-accent text-accent-foreground border-accent'
      default:
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  const getUserInitials = (username: string) => {
    return username
      .split('_')
      .map(part => part.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("h-auto p-xs gap-xs shadow-none hover:bg-muted/50", className)}
        >
          <Avatar className="size-7">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
              {getUserInitials(user.username)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline text-sm font-medium text-card-foreground">
            {user.username}
          </span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align={align} 
        className="w-64 mica shadow-prominent p-xs"
        sideOffset={8}
      >
        {/* User InformationCircleIcon Header */}
        <DropdownMenuLabel className="p-sm">
          <div className="flex items-center gap-sm">
            <Avatar className="size-10">
              <AvatarImage src={user.avatar} alt={user.username} />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {getUserInitials(user.username)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-card-foreground truncate">
                {user.username}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
              <Badge 
                variant="outline" 
                className={cn("text-xs mt-micro", getRoleBadgeStyle(user.role))}
              >
                {user.role === 'admin' && <ShieldCheckIcon className="size-3 mr-micro" />}
                {user.role}
              </Badge>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Quick Actions */}
        <div className="p-xs space-y-micro">
          <DropdownMenuItem 
            className="cursor-pointer focus:bg-muted/50"
            onClick={handleForumAccess}
          >
            <UsersIcon className="size-4 mr-sm" />
            <span>Access Forums</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
            <CalendarDaysIcon className="size-4 mr-sm" />
            <span>My Events</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
            <BellIcon className="size-4 mr-sm" />
            <span>Notifications</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        {/* Main Navigation */}
        <div className="p-xs space-y-micro">
          <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
            <UserIcon className="size-4 mr-sm" />
            <span>Profile Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
            <BookOpenIcon className="size-4 mr-sm" />
            <span>My Directory</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
            <BuildingStorefrontIcon className="size-4 mr-sm" />
            <span>My Listings</span>
          </DropdownMenuItem>

          {/* Admin/Moderator Only */}
          {(user.role === 'admin' || user.role === 'moderator') && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer focus:bg-muted/50">
                <Cog6ToothIcon className="size-4 mr-sm" />
                <span>
                  {user.role === 'admin' ? 'Admin Panel' : 'Moderation'}
                </span>
              </DropdownMenuItem>
            </>
          )}
        </div>

        <DropdownMenuSeparator />

        {/* Logout */}
        <div className="p-xs">
          <DropdownMenuItem 
            className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className="size-4 mr-sm" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </div>

        {/* Footer InformationCircleIcon */}
        <div className="px-sm py-xs border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            Last active: {new Date(user.lastActive).toLocaleDateString()}
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}