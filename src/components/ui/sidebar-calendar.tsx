'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ChevronLeft, ChevronRight, Calendar as CalendarIcon
} from 'lucide-react'
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
}

const eventTypeColors = {
  Competition: 'bg-rusty-orange',
  Training: 'bg-sagebrush-green', 
  Charity: 'bg-slate-blue',
  Expo: 'bg-slate-blue',
  Social: 'bg-canyon-clay',
  Demo: 'bg-rusty-orange'
}

export function SidebarCalendar({ events, className }: SidebarCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())

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
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-rajdhani font-bold flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Event Calendar
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Compact Calendar */}
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          className="w-full"
          classNames={{
            months: "flex flex-col w-full",
            month: "w-full space-y-4",
            caption: "hidden", // We have custom header
            table: "w-full table-fixed border-separate border-spacing-0",
            head_row: "flex w-full",
            head_cell: "text-muted-foreground font-medium text-xs h-8 text-center flex-1 flex items-center justify-center",
            row: "flex w-full",
            cell: "relative flex-1 h-10 border border-border/20",
            day: "w-full h-full hover:bg-accent/30 transition-colors flex flex-col items-center justify-center text-sm cursor-pointer",
            day_selected: "bg-rusty-orange/20 text-rusty-orange font-bold",
            day_today: "bg-slate-blue/20 text-slate-blue font-bold",
            day_outside: "text-muted-foreground/30",
            day_disabled: "text-muted-foreground/20 cursor-not-allowed"
          }}
          components={{
            Day: ({ day }) => {
              const date = day.date
              const dateStr = date.toDateString()
              const dayEvents = eventsByDate.get(dateStr) || []
              const isSelected = selectedDate?.toDateString() === dateStr
              const isToday = new Date().toDateString() === dateStr

              return (
                <div className="w-full h-full flex flex-col items-center justify-center relative p-1">
                  <span className={cn(
                    "text-sm leading-none",
                    isSelected && "text-rusty-orange font-bold",
                    isToday && "text-slate-blue font-bold"
                  )}>
                    {date.getDate()}
                  </span>
                  
                  {/* Event indicators */}
                  {dayEvents.length > 0 && (
                    <div className="flex gap-0.5 mt-1">
                      {dayEvents.slice(0, 3).map((event, idx) => {
                        const color = eventTypeColors[event.eventType as keyof typeof eventTypeColors] || 'bg-muted'
                        return (
                          <div
                            key={idx}
                            className={`w-1 h-1 rounded-full ${color}`}
                            title={event.title}
                          />
                        )
                      })}
                      {dayEvents.length > 3 && (
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      )}
                    </div>
                  )}
                </div>
              )
            }
          }}
        />

        {/* Selected Date Events */}
        {selectedDate && selectedDateEvents.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="text-sm font-medium text-card-foreground">
              {selectedDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric'
              })} Events
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {selectedDateEvents.slice(0, 3).map((event, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${eventTypeColors[event.eventType as keyof typeof eventTypeColors] || 'bg-muted'}`} />
                  <span className="text-muted-foreground truncate">{event.title}</span>
                  {event.featured && (
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
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
        <div className="mt-4 pt-3 border-t border-border">
          <div className="grid grid-cols-2 gap-2 text-xs">
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
      </CardContent>
    </Card>
  )
}