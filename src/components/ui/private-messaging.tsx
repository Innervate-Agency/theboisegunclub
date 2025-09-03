'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { UserAvatarCompact } from './user-avatar'
import { NotificationBadge, PulseIndicator } from './notification-badge'
import { cn } from '@/lib/utils'
import { 
  XMarkIcon,
  PaperAirplaneIcon,
  FaceSmileIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

interface ChatMessage {
  id: string
  userId: string
  username: string
  avatar?: string
  message: string
  timestamp: Date
  isRead: boolean
}

interface ChatThread {
  id: string
  participants: Array<{
    id: string
    username: string
    avatar?: string
    isOnline: boolean
  }>
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
  isTyping?: string[]
}

interface PrivateMessagingProps {
  isOpen: boolean
  onClose: () => void
  unreadCount: number
  className?: string
}

export function PrivateMessaging({ 
  isOpen, 
  onClose, 
  unreadCount,
  className 
}: PrivateMessagingProps) {
  const [activeThread, setActiveThread] = React.useState<string | null>(null)
  const [messageInput, setMessageInput] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')
  
  // Mock data - in production, this would come from NodeBB API
  const [chatThreads] = React.useState<ChatThread[]>([
    {
      id: '1',
      participants: [
        { id: '2', username: 'shooter_mike', avatar: '', isOnline: true }
      ],
      lastMessage: 'Hey, are you going to the USPSA match this weekend?',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
      unreadCount: 2
    },
    {
      id: '2', 
      participants: [
        { id: '3', username: 'range_master', avatar: '', isOnline: false }
      ],
      lastMessage: 'Thanks for the help with the steel targets!',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      unreadCount: 0
    },
    {
      id: '3',
      participants: [
        { id: '4', username: 'tactical_annie', avatar: '', isOnline: true }
      ],
      lastMessage: 'The new Glock range is amazing! You should check it out.',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      unreadCount: 1
    }
  ])

  const [messages] = React.useState<ChatMessage[]>([
    {
      id: '1',
      userId: '2',
      username: 'shooter_mike',
      message: 'Hey, are you going to the USPSA match this weekend?',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: false
    },
    {
      id: '2',
      userId: 'current',
      username: 'you',
      message: 'Yeah! I\'ve been practicing my transitions all week.',
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      isRead: true
    },
    {
      id: '3',
      userId: '2',
      username: 'shooter_mike',
      message: 'Nice! I heard they\'re running a classifier too. Should be fun!',
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      isRead: false
    }
  ])

  // Filter threads based on search
  const filteredThreads = React.useMemo(() => {
    if (!searchQuery) return chatThreads
    return chatThreads.filter(thread =>
      thread.participants.some(p => 
        p.username.toLowerCase().includes(searchQuery.toLowerCase())
      ) || thread.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [chatThreads, searchQuery])

  const activeThreadData = chatThreads.find(t => t.id === activeThread)
  const threadMessages = activeThread ? messages : []

  const handleSendMessage = () => {
    if (!messageInput.trim() || !activeThread) return
    
    // In production, send to NodeBB Chat API
    console.log('Sending message:', messageInput, 'to thread:', activeThread)
    setMessageInput('')
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    
    if (diff < 1000 * 60) return 'Just now'
    if (diff < 1000 * 60 * 60) return `${Math.floor(diff / (1000 * 60))}m ago`
    if (diff < 1000 * 60 * 60 * 24) return `${Math.floor(diff / (1000 * 60 * 60))}h ago`
    return date.toLocaleDateString()
  }

  if (!isOpen) return null

  return (
    <Card className={cn(
      "mica-card shadow-hero w-80 h-96 flex flex-col overflow-hidden",
      className
    )}>
      <CardHeader className="pb-sm border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-xs">
            <ChatBubbleLeftRightIcon className="size-5 text-nav-events" />
            <h3 className="font-rajdhani font-bold text-card-foreground">
              {activeThread ? 'Chat' : 'Messages'}
            </h3>
            {unreadCount > 0 && (
              <NotificationBadge count={unreadCount} size="sm" />
            )}
          </div>
          <div className="flex items-center gap-xs">
            {activeThread && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveThread(null)}
                className="h-8 w-8 p-0"
              >
                <PlusIcon className="size-4 rotate-45" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <XMarkIcon className="size-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {!activeThread ? (
          // Thread List View
          <div className="flex flex-col h-full">
            {/* Search */}
            <div className="p-sm border-b border-border/50">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 h-8 text-sm"
                />
              </div>
            </div>

            {/* Thread List */}
            <div className="flex-1 overflow-y-auto">
              {filteredThreads.map(thread => (
                <button
                  key={thread.id}
                  onClick={() => setActiveThread(thread.id)}
                  className="w-full p-sm hover:bg-muted/50 transition-colors border-b border-border/30 last:border-0"
                >
                  <div className="flex items-start gap-sm">
                    <div className="relative flex-shrink-0">
                      <UserAvatarCompact 
                        user={{
                          id: thread.participants[0].id,
                          username: thread.participants[0].username,
                          avatar: thread.participants[0].avatar,
                          email: '',
                          role: 'member'
                        }}
                        showUsername={false}
                      />
                      {thread.participants[0].isOnline && (
                        <PulseIndicator 
                          variant="success" 
                          size="sm"
                          className="absolute -bottom-0.5 -right-0.5"
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 text-left overflow-hidden">
                      <div className="flex items-center justify-between mb-xs">
                        <span className="font-medium text-sm text-card-foreground truncate">
                          {thread.participants[0].username}
                        </span>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {formatTime(thread.lastMessageTime)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {thread.lastMessage}
                      </p>
                    </div>
                    
                    {thread.unreadCount > 0 && (
                      <NotificationBadge 
                        count={thread.unreadCount} 
                        size="sm"
                        className="flex-shrink-0"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Active Chat View
          <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-sm space-y-sm">
              {threadMessages.map(message => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-xs",
                    message.userId === 'current' ? 'flex-row-reverse' : 'flex-row'
                  )}
                >
                  {message.userId !== 'current' && (
                    <UserAvatarCompact
                      user={{
                        id: message.userId,
                        username: message.username,
                        avatar: message.avatar,
                        email: '',
                        role: 'member'
                      }}
                      showUsername={false}
                    />
                  )}
                  
                  <div className={cn(
                    "max-w-[75%] rounded-lg p-xs",
                    message.userId === 'current'
                      ? "bg-nav-events text-white"
                      : "bg-muted text-card-foreground"
                  )}>
                    <p className="text-sm">{message.message}</p>
                    <p className={cn(
                      "text-xs mt-xs",
                      message.userId === 'current' 
                        ? "text-white/70"
                        : "text-muted-foreground"
                    )}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {activeThreadData?.isTyping && activeThreadData.isTyping.length > 0 && (
                <div className="flex items-center gap-xs text-muted-foreground">
                  <PulseIndicator variant="primary" size="sm" />
                  <span className="text-xs">
                    {activeThreadData.isTyping.join(', ')} typing...
                  </span>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t border-border/50 p-sm">
              <div className="flex gap-xs">
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  className="flex-1 h-8 text-sm"
                />
                <Button
                  size="sm"
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="h-8 w-8 p-0"
                >
                  <PaperAirplaneIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}