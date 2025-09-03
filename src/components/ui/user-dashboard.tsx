'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { UserAvatar } from './user-avatar'
import { NotificationBadge } from './notification-badge'
import { useAuth } from '@/components/auth/auth-context'
import { cn } from '@/lib/utils'
import { 
  XMarkIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  EyeIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  FireIcon,
  StarIcon
} from '@heroicons/react/24/outline'

interface User {
  id: string
  username: string
  email: string
  role: string
  avatar?: string
  forumUserId?: string
  lastActive?: string
  createdAt?: string
}

interface UserDashboardProps {
  isOpen: boolean
  onClose: () => void
  user: User
  className?: string
}

export function UserDashboard({ 
  isOpen, 
  onClose, 
  user,
  className 
}: UserDashboardProps) {
  const { logout } = useAuth()
  
  // Mock user stats (in production, fetch from NodeBB API)
  const [userStats] = React.useState({
    forumPosts: 127,
    reputation: 89,
    joinDate: '2023-08-15',
    lastActive: 'Online now',
    messageCount: 45,
    topicsStarted: 12,
    badgesEarned: 8
  })

  // Mock recent activity (from NodeBB)
  const [recentActivity] = React.useState([
    {
      id: '1',
      type: 'post',
      title: 'Replied to "Best USPSA holster recommendations"',
      time: '2 hours ago',
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: '2',
      type: 'topic',
      title: 'Started topic "Range day at Boise Shooting Park"',
      time: '1 day ago',
      icon: FireIcon
    },
    {
      id: '3',
      type: 'badge',
      title: 'Earned "Marksman" badge',
      time: '3 days ago',
      icon: TrophyIcon
    }
  ])

  const handleLogout = async () => {
    try {
      await logout()
      onClose()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleForumVisit = async () => {
    // In production, get forum URL from auth context
    const forumUrl = 'https://boisegunclub.com/forums/'
    window.open(forumUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <Card className={cn(
      "mica-card shadow-hero w-80 max-h-[32rem] flex flex-col overflow-hidden",
      className
    )}>
      <CardHeader className="pb-sm border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-xs">
            <UserCircleIcon className="size-5 text-nav-events" />
            <h3 className="font-rajdhani font-bold text-card-foreground">
              Dashboard
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <XMarkIcon className="size-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-0">
        <div className="p-sm space-y-lg">
          {/* User Profile Section */}
          <div className="flex items-center gap-sm">
            <UserAvatar 
              user={user}
              size="lg"
              showStatus={true}
              showOnlineStatus={true}
            />
            <div className="flex-1">
              <h4 className="font-rajdhani font-bold text-card-foreground">
                {user.username}
              </h4>
              <div className="flex items-center gap-xs">
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-xs capitalize",
                    user.role === 'admin' && "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
                    user.role === 'moderator' && "bg-weathered-gold/20 text-weathered-gold border-weathered-gold/30",
                    user.role === 'member' && "bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30"
                  )}
                >
                  {user.role}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {userStats.lastActive}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-xs">
            <div className="bg-muted/50 rounded-xs p-sm text-center">
              <div className="font-rajdhani font-bold text-lg text-card-foreground">
                {userStats.forumPosts}
              </div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div className="bg-muted/50 rounded-xs p-sm text-center">
              <div className="font-rajdhani font-bold text-lg text-nav-events">
                {userStats.reputation}
              </div>
              <div className="text-xs text-muted-foreground">Reputation</div>
            </div>
            <div className="bg-muted/50 rounded-xs p-sm text-center">
              <div className="font-rajdhani font-bold text-lg text-card-foreground">
                {userStats.topicsStarted}
              </div>
              <div className="text-xs text-muted-foreground">Topics</div>
            </div>
            <div className="bg-muted/50 rounded-xs p-sm text-center">
              <div className="font-rajdhani font-bold text-lg text-weathered-gold">
                {userStats.badgesEarned}
              </div>
              <div className="text-xs text-muted-foreground">Badges</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h5 className="font-rajdhani font-bold text-sm text-card-foreground mb-sm">
              Recent Activity
            </h5>
            <div className="space-y-xs">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start gap-xs p-xs hover:bg-muted/30 rounded-xs transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-nav-events/20 rounded-xs flex items-center justify-center mt-0.5">
                    <activity.icon className="size-3 text-nav-events" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-card-foreground line-clamp-2">
                      {activity.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-xs">
            <Button
              onClick={handleForumVisit}
              className="w-full justify-start bg-nav-events/10 hover:bg-nav-events/20 text-nav-events border-nav-events/30 font-rajdhani"
              variant="outline"
            >
              <GlobeAltIcon className="size-4 mr-xs" />
              Visit Forums
            </Button>
            
            <Button
              onClick={() => {
                // Navigate to profile settings
                window.location.href = '/profile'
              }}
              className="w-full justify-start font-rajdhani"
              variant="outline"
            >
              <Cog6ToothIcon className="size-4 mr-xs" />
              Settings
            </Button>
          </div>

          {/* Account Info */}
          <div className="border-t border-border/50 pt-sm">
            <div className="text-xs text-muted-foreground space-y-xs">
              <div className="flex items-center justify-between">
                <span>Joined:</span>
                <span>{new Date(userStats.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>User ID:</span>
                <span className="font-mono">{user.id}</span>
              </div>
              {user.forumUserId && (
                <div className="flex items-center justify-between">
                  <span>Forum ID:</span>
                  <span className="font-mono">{user.forumUserId}</span>
                </div>
              )}
            </div>
          </div>

          {/* Logout */}
          <Button
            onClick={handleLogout}
            className="w-full justify-start text-rusty-orange hover:text-white hover:bg-rusty-orange font-rajdhani"
            variant="outline"
          >
            <ArrowRightOnRectangleIcon className="size-4 mr-xs" />
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}