'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils'

// Event type for the sidebar calendar
interface SidebarCalendarEvent {
  title: string
  date: string
  eventType: string
  featured: boolean
}

interface SidebarCalendarProps {
  events: SidebarCalendarEvent[]
  className?: string
  onDateSelect?: (date: Date | undefined) => void
}

const eventTypeColors = {
  Competition: 'bg-rusty-orange',
  Training: 'bg-sagebrush-green', 
  Charity: 'bg-slate-blue',
  Expo: 'bg-slate-blue',
  Social: 'bg-canyon-clay',
  Demo: 'bg-rusty-orange'
}

export function SidebarCalendar({ events, className, onDateSelect }: SidebarCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())

  // Navigation functions with proper date handling
  const goToPreviousMonth = () => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(newDate.getMonth() - 1)
      return newDate
    })
  }

  const goToNextMonth = () => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(newDate.getMonth() + 1)
      return newDate
    })
  }

  const goToToday = () => {
    const today = new Date()
    setCurrentMonth(today)
    setSelectedDate(today)
    onDateSelect?.(today)
  }

  // Handle date selection with callback
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onDateSelect?.(date)
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target && (event.target as HTMLElement).closest('.sidebar-calendar')) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault()
            goToPreviousMonth()
            break
          case 'ArrowRight':
            event.preventDefault()
            goToNextMonth()
            break
          case 'Home':
            event.preventDefault()
            goToToday()
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])  

  // Group events by date
  const eventsByDate = React.useMemo(() => {
    const grouped = new Map<string, SidebarCalendarEvent[]>()
    events.forEach(event => {
      const eventDate = new Date(event.date)
      const dateStr = eventDate.toDateString()
      if (!grouped.has(dateStr)) {
        grouped.set(dateStr, [])
      }
      grouped.get(dateStr)!.push(event)
    })
    return grouped
  }, [events])

  // Get events for selected date
  const selectedDateEvents = selectedDate ? eventsByDate.get(selectedDate.toDateString()) || [] : []

  return (
    <div className={cn("w-80 flex-shrink-0 sidebar-calendar", className)} tabIndex={0}>
      <div className="space-y-lg">

        {/* CalendarDaysIcon Content */}
        <div className="space-y-lg">
          {/* Month/Year Display with Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousMonth}
              className="h-8 w-8 p-0 hover:bg-accent/50"
              title="Previous month"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={goToToday}
              className="text-base font-rajdhani font-semibold text-card-foreground hover:bg-accent/50 h-8 px-3"
              title="Go to today"
            >
              {currentMonth.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextMonth}
              className="h-8 w-8 p-0 hover:bg-accent/50"
              title="Next month"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>

          {/* CalendarDaysIcon Grid */}
          <div className="space-y-sm">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-0 text-muted-foreground font-medium text-xs">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="h-8 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>
            
            {/* CalendarDaysIcon Days */}
            <div className="grid grid-cols-7 gap-0 border border-border/20 rounded-sm">
              {(() => {
                const year = currentMonth.getFullYear()
                const month = currentMonth.getMonth()
                const firstDay = new Date(year, month, 1)
                const lastDay = new Date(year, month + 1, 0)
                const startDate = new Date(firstDay)
                startDate.setDate(startDate.getDate() - firstDay.getDay())
                
                const days = []
                for (let i = 0; i < 42; i++) {
                  const currentDate = new Date(startDate)
                  currentDate.setDate(startDate.getDate() + i)
                  days.push(currentDate)
                }
                
                return days.map((date, index) => {
                  const dateStr = date.toDateString()
                  const dayEvents = eventsByDate.get(dateStr) || []
                  const isSelected = selectedDate?.toDateString() === dateStr
                  const isToday = new Date().toDateString() === dateStr
                  const isCurrentMonth = date.getMonth() === month
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      className={cn(
                        "relative h-10 border-r border-b border-border/20 flex flex-col items-center justify-center text-sm cursor-pointer transition-colors hover:bg-accent/30",
                        "last:border-r-0 [&:nth-child(7n)]:border-r-0",
                        "[&:nth-last-child(-n+7)]:border-b-0",
                        isSelected && "bg-rusty-orange/20 text-rusty-orange font-bold",
                        isToday && !isSelected && "bg-slate-blue/20 text-slate-blue font-bold",
                        !isCurrentMonth && "text-muted-foreground/30"
                      )}
                    >
                      <span className="text-xs leading-none">
                        {date.getDate()}
                      </span>
                      
                      {/* Event indicators - larger and more visible */}
                      {dayEvents.length > 0 && (
                        <div className="flex gap-0.5 mt-1">
                          {dayEvents.slice(0, 3).map((event, idx) => {
                            const color = eventTypeColors[event.eventType as keyof typeof eventTypeColors] || 'bg-muted'
                            return (
                              <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full ${color}`}
                                title={event.title}
                              />
                            )
                          })}
                          {dayEvents.length > 3 && (
                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70" />
                          )}
                        </div>
                      )}
                    </button>
                  )
                })
              })()}
            </div>
          </div>
        </div>

        {/* Selected Date Events */}
        {selectedDate && selectedDateEvents.length > 0 && (
          <div className="space-y-sm">
            <div className="text-sm font-medium text-card-foreground">
              {selectedDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric'
              })} Events
            </div>
            <div className="space-y-xs max-h-32 overflow-y-auto">
              {selectedDateEvents.slice(0, 3).map((event, idx) => (
                <div key={idx} className="flex items-center gap-xs text-xs">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${eventTypeColors[event.eventType as keyof typeof eventTypeColors] || 'bg-muted'}`} />
                  <span className="text-muted-foreground truncate">{event.title}</span>
                  {event.featured && (
                    <Badge variant="status-info" className="text-xs">Featured</Badge>
                  )}
                </div>
              ))}
              {selectedDateEvents.length > 3 && (
                <div className="text-xs text-muted-foreground">
                  +{selectedDateEvents.length - 3} more events
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick stats */}
        <div className="pt-base border-t border-border">
          <div className="grid grid-cols-2 gap-base text-xs">
            <div className="text-center">
              <div className="font-bold text-card-foreground">{events.length}</div>
              <div className="text-muted-foreground">Total Events</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-card-foreground">{events.filter(e => e.featured).length}</div>
              <div className="text-muted-foreground">Featured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}