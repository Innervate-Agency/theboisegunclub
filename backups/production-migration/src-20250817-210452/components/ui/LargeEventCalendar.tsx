'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ChevronLeft, ChevronRight, Calendar as CalendarIcon, 
  MapPin, Clock, Users, Trophy, Target, Eye, Heart, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalendarEvent {
  title: string
  description: string
  date: string
  time: string
  location: string
  eventType: string
  capacity?: number
  registeredCount?: number
  price: string
  featured: boolean
}

interface LargeEventCalendarProps {
  events: CalendarEvent[]
  className?: string
}

const eventTypeConfig = {
  Competition: { color: 'rusty-orange', icon: Trophy },
  Training: { color: 'sage-green', icon: Target },
  Charity: { color: 'slate-blue', icon: Heart },
  Expo: { color: 'slate-blue', icon: Eye },
  Social: { color: 'slate-blue', icon: Users },
  Demo: { color: 'rusty-orange', icon: Zap }
}

export function LargeEventCalendar({ events, className }: LargeEventCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())

  // Get events for current month
  const monthEvents = React.useMemo(() => {
    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= monthStart && eventDate <= monthEnd
    })
  }, [currentMonth, events])

  // Get events by date for calendar rendering
  const eventsByDate = React.useMemo(() => {
    const map = new Map<string, CalendarEvent[]>()
    events.forEach(event => {
      const dateStr = new Date(event.date).toDateString()
      if (!map.has(dateStr)) {
        map.set(dateStr, [])
      }
      map.get(dateStr)!.push(event)
    })
    return map
  }, [events])

  // Get events for selected date
  const selectedDateEvents = React.useMemo(() => {
    if (!selectedDate) return []
    const dateStr = selectedDate.toDateString()
    return eventsByDate.get(dateStr) || []
  }, [selectedDate, eventsByDate])

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-blue to-slate-blue text-primary-foreground py-3xl">
        <div className="container mx-auto max-w-site px-lg text-center">
          <h1 className="font-rajdhani text-display-lg font-bold mb-base">Event Calendar</h1>
          <p className="text-body-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Discover upcoming firearms events across the Treasure Valley. Click any date to see events.
          </p>
        </div>
      </div>

      {/* Main Calendar Section */}
      <div className="py-3xl bg-background">
        <div className="container mx-auto max-w-site px-lg">
          <div className="space-y-2xl">
            
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-heading-4xl font-bold text-card-foreground">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex items-center gap-lg">
                <Button
                  variant="flat"
                  size="xl"
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                >
                  <ChevronLeft className="size-6" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setCurrentMonth(new Date())}
                  className="shadow-none"
                >
                  Today
                </Button>
                <Button
                  variant="flat"
                  size="xl"
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                >
                  <ChevronRight className="size-6" />
                </Button>
              </div>
            </div>

            {/* Massive Calendar */}
            <div className="bg-card rounded-xs p-tinyxl shadow-present">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="w-full"
                classNames={{
                  months: "w-full",
                  month: "w-full space-y-lg",
                  caption: "hidden",
                  table: "w-full table-fixed",
                  head_row: "mb-lg",
                  head_cell: "text-muted-foreground font-rajdhani font-bold text-heading-xl h-16 text-center",
                  row: "mb-sm",
                  cell: "h-40 p-0 relative border border-border/20 hover:border-rusty-orange/30 transition-colors",
                  day: "w-full h-full p-base flex flex-col items-start justify-start hover:bg-accent/20 transition-colors rounded-none",
                  day_selected: "bg-rusty-orange/20 text-rusty-orange font-bold border-rusty-orange",
                  day_today: "bg-slate-blue/10 text-slate-blue font-bold border-slate-blue/30",
                  day_outside: "text-muted-foreground/30",
                  day_disabled: "text-muted-foreground/20",
                  day_hidden: "invisible",
                }}
                components={{
                  Day: ({ day }) => {
                    const date = day.date;
                    const dateStr = date.toDateString()
                    const dayEvents = eventsByDate.get(dateStr) || []
                    const isSelected = selectedDate?.toDateString() === dateStr
                    const isToday = new Date().toDateString() === dateStr

                    return (
                      <div className="w-full h-full flex flex-col">
                        {/* Day Number */}
                        <div className="flex items-center justify-between mb-xs">
                          <span className={cn(
                            "text-heading-xl font-rajdhani font-bold",
                            isSelected && "text-rusty-orange",
                            isToday && "text-slate-blue"
                          )}>
                            {date.getDate()}
                          </span>
                          {dayEvents.length > 0 && (
                            <Badge className={cn(
                              "text-body-xs h-5",
                              dayEvents.some(e => e.featured) 
                                ? "bg-rusty-orange text-primary-foreground" 
                                : "bg-muted text-muted-foreground"
                            )}>
                              {dayEvents.length}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Event Indicators */}
                        <div className="flex-1 space-y-xs overflow-hidden">
                          {dayEvents.slice(0, 3).map((event, idx) => {
                            const config = eventTypeConfig[event.eventType as keyof typeof eventTypeConfig]
                            return (
                              <div
                                key={idx}
                                className={cn(
                                  "text-body-xs p-xs rounded truncate",
                                  `bg-${config.color}/20 text-${config.color}`
                                )}
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            )
                          })}
                          {dayEvents.length > 3 && (
                            <div className="text-body-xs text-muted-foreground font-medium">
                              +{dayEvents.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  }
                }}
              />
            </div>

            {/* Selected Date Events */}
            {selectedDate && selectedDateEvents.length > 0 && (
              <div className="space-y-lg">
                <h3 className="font-rajdhani text-heading-2xl font-bold text-card-foreground text-center">
                  Events for {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                  {selectedDateEvents.map((event, idx) => {
                    const config = eventTypeConfig[event.eventType as keyof typeof eventTypeConfig]
                    const Icon = config.icon

                    return (
                      <Card key={idx} className="hover:shadow-elevated transition-all duration-300">
                        <CardContent className="p-lg space-y-base">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-sm">
                              <div className={`p-sm rounded-xs bg-${config.color}/20`}>
                                <Icon className={`size-5 text-${config.color}`} />
                              </div>
                              <Badge className={`bg-${config.color}/20 text-${config.color}`}>
                                {event.eventType}
                              </Badge>
                            </div>
                            {event.featured && (
                              <Badge className="bg-rusty-orange text-primary-foreground">Featured</Badge>
                            )}
                          </div>

                          <h4 className="font-rajdhani text-body-xl font-bold text-card-foreground">
                            {event.title}
                          </h4>

                          <p className="text-body-sm text-muted-foreground line-clamp-tiny">
                            {event.description}
                          </p>

                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                              <Clock className="size-4" />
                              <span>{event.time.split(' - ')[0]}</span>
                            </div>
                            <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                              <MapPin className="size-4" />
                              <span>{event.location.split(',')[0]}</span>
                            </div>
                            {event.capacity && event.registeredCount && (
                              <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                <Users className="size-4" />
                                <span>{event.registeredCount}/{event.capacity}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-sm">
                            <span className="font-rajdhani text-heading-lg font-bold text-rusty-orange">
                              {event.price}
                            </span>
                            <Button variant="solid-accent" animationType="arrow" size="sm">
                              Register
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* No Events Selected State */}
            {selectedDate && selectedDateEvents.length === 0 && (
              <div className="text-center py-3xl">
                <CalendarIcon className="h-16 w-16 text-muted-foreground/50 mx-auto mb-lg" />
                <h3 className="font-rajdhani text-heading-xl font-bold text-card-foreground mb-base">
                  No Events Scheduled
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  No events are scheduled for {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}. Check other dates or browse upcoming events below.
                </p>
              </div>
            )}

            {/* Monthly Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
              <Card className="text-center p-lg">
                <div className="font-rajdhani text-heading-3xl font-bold text-rusty-orange">
                  {monthEvents.length}
                </div>
                <div className="text-muted-foreground">Events This Month</div>
              </Card>
              <Card className="text-center p-lg">
                <div className="font-rajdhani text-heading-3xl font-bold text-sage-green">
                  {monthEvents.filter(e => e.featured).length}
                </div>
                <div className="text-muted-foreground">Featured Events</div>
              </Card>
              <Card className="text-center p-lg">
                <div className="font-rajdhani text-heading-3xl font-bold text-slate-blue">
                  {new Set(monthEvents.map(e => e.location.split(',')[0])).size}
                </div>
                <div className="text-muted-foreground">Venues</div>
              </Card>
              <Card className="text-center p-lg">
                <div className="font-rajdhani text-heading-3xl font-bold text-slate-blue">
                  {new Set(monthEvents.map(e => e.eventType)).size}
                </div>
                <div className="text-muted-foreground">Event Types</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
