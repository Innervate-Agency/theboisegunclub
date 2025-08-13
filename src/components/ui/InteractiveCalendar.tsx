'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  ChevronLeft, ChevronRight, Calendar as CalendarIcon, 
  MapPin, Clock, Users, Search, Filter, X,
  Zap, Trophy, Target, GraduationCap, Heart, Eye
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Event type for better type safety
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
  registrationUrl?: string
}

interface InteractiveCalendarProps {
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

export function InteractiveCalendar({ events, className }: InteractiveCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null)

  // Filter events based on category and search
  const filteredEvents = React.useMemo(() => {
    return events.filter(event => {
      const matchesCategory = selectedCategory === 'all' || event.eventType === selectedCategory
      const matchesSearch = searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [events, selectedCategory, searchQuery])

  // Get events for selected date
  const selectedDateEvents = React.useMemo(() => {
    if (!selectedDate) return []
    const dateStr = selectedDate.toDateString()
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === dateStr
    })
  }, [selectedDate, filteredEvents])

  // Get events for current month
  const monthEvents = React.useMemo(() => {
    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= monthStart && eventDate <= monthEnd
    })
  }, [currentMonth, filteredEvents])

  // Get events by date for calendar rendering
  const eventsByDate = React.useMemo(() => {
    const map = new Map<string, CalendarEvent[]>()
    filteredEvents.forEach(event => {
      const dateStr = new Date(event.date).toDateString()
      if (!map.has(dateStr)) {
        map.set(dateStr, [])
      }
      map.get(dateStr)!.push(event)
    })
    return map
  }, [filteredEvents])

  const categories = [
    { label: 'All Events', value: 'all', count: events.length },
    ...Object.entries(eventTypeConfig).map(([type, config]) => ({
      label: type + 's',
      value: type,
      count: events.filter(e => e.eventType === type).length,
      color: config.color
    }))
  ]

  

  const formatEventTime = (time: string) => {
    // Extract start time from time range (e.g., "8:00 AM - 3:00 PM" -> "8:00 AM")
    return time.split(' - ')[0] || time
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Search and Filters */}
      <div className="bg-card px-lg py-base">
        <div className="flex flex-col sm:flex-row gap-base items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-base flex-1">
            {/* Search */}
            <div className="relative min-w-64">
              <Search className="absolute left-3 top-micro/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-micro/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-xs">
              {categories.map((category) => {
                const isSelected = selectedCategory === category.value
                return (
                  <Button
                    key={category.value}
                    variant="flat"
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    animationType="plus-minus"
                    animationType="plus-minus"
                    animationState={isSelected}
                    className={cn(
                      "text-xs transition-colors duration-200",
                      isSelected 
                        ? "bg-rusty-orange/20 text-rusty-orange font-medium" 
                        : "bg-transparent text-muted-foreground hover:text-card-foreground hover:bg-muted/30"
                    )}
                  >
                    {category.label}
                    <span className="ml-xs text-[9px] font-mono opacity-70">
                      {category.count}
                    </span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="text-body-sm text-muted-foreground whitespace-nowrap">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>

      {/* Main Calendar Layout - Single Column, Truly Massive */}
      <div className="bg-background p-tinyxl">
        <div className="max-w-none space-y-2xl">
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-rajdhani text-5xl font-bold text-card-foreground">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-lg">
              <Button
                variant="flat"
                size="xl"
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              >
                <ChevronLeft className="h-6 w-6" />
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
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Truly Massive Calendar Grid */}
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
              caption: "hidden", // Hide default caption since we have custom header
              table: "w-full border-collapse border-spacing-0",
              head_row: "",
              head_cell: "text-muted-foreground font-medium text-2xl w-full h-20 text-center p-base",
              row: "",
              cell: "relative w-full h-32 text-center p-0",
              day: "w-full h-full hover:bg-accent/30 transition-colors rounded-xs flex flex-col items-center justify-start pt-base",
              day_selected: "bg-rusty-orange/20 text-rusty-orange font-bold",
              day_today: "bg-slate-blue/20 text-slate-blue font-bold",
              day_outside: "text-muted-foreground/30",
              day_disabled: "text-muted-foreground/20",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
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
                  <div className="w-full h-full flex flex-col items-center justify-start pt-base px-sm">
                    <span className={cn(
                      "text-2xl font-bold mb-base",
                      isSelected && "text-rusty-orange",
                      isToday && "text-slate-blue"
                    )}>
                      {date.getDate()}
                    </span>
                    
                    {dayEvents.length > 0 && (
                      <div className="flex flex-wrap gap-xs justify-center">
                        {dayEvents.slice(0, 6).map((event, idx) => {
                          const config = eventTypeConfig[event.eventType as keyof typeof eventTypeConfig]
                          return (
                            <div
                              key={idx}
                              className={`w-3 h-3 rounded-pill bg-${config.color}`}
                              title={event.title}
                            />
                          )
                        })}
                        {dayEvents.length > 6 && (
                          <div className="text-body-sm text-muted-foreground font-mono font-bold">
                            +{dayEvents.length - 6}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {dayEvents.length > 0 && (
                      <div className="text-xs text-muted-foreground mt-xs text-center">
                        {dayEvents.length} event{dayEvents.length !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                )
              }
            }}
          />

          {/* Selected Date Events - Below Calendar */}
          {selectedDate && (
            <div className="bg-muted/30 rounded-sm p-lg">
              <div className="space-y-base">
                {/* Selected Date Header */}
                <div className="text-center space-y-xs">
                  <div className="flex items-center justify-center gap-xs text-muted-foreground">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="text-heading-lg">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  {selectedDateEvents.length > 0 && (
                    <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                      {selectedDateEvents.length} Event{selectedDateEvents.length !== 1 ? 's' : ''}
                    </h3>
                  )}
                </div>

                {/* Events Grid */}
                {selectedDateEvents.length === 0 ? (
                  <div className="text-center p-xl">
                    <div className="text-muted-foreground text-heading-lg">
                      No events scheduled for this date.
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-base">
                    {selectedDateEvents.map((event, idx) => {
                      const config = eventTypeConfig[event.eventType as keyof typeof eventTypeConfig]
                      const Icon = config.icon

                      return (
                        <Card 
                          key={idx} 
                          className="p-base hover:shadow-present transition-shadow cursor-pointer"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="space-y-xs">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-xs">
                                <div className={`p-xs rounded bg-${config.color}/20`}>
                                  <Icon className={`h-4 w-4 text-${config.color}`} />
                                </div>
                                <span className={`text-${config.color} text-xs font-medium`}>
                                  {event.eventType.toUpperCase()}
                                </span>
                              </div>
                              {event.featured && (
                                <span className="text-rusty-orange text-xs font-medium">
                                  FEATURED
                                </span>
                              )}
                            </div>

                            <h4 className="font-medium text-base text-card-foreground">
                              {event.title}
                            </h4>

                            <div className="space-y-xs">
                              <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{formatEventTime(event.time)}</span>
                              </div>
                              <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location.split(',')[0]}</span>
                              </div>
                              {event.capacity && event.registeredCount && (
                                <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                  <Users className="h-4 w-4" />
                                  <span>{event.registeredCount}/{event.capacity}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between pt-xs">
                              <span className="text-body-sm font-medium text-rusty-orange">
                                {event.price}
                              </span>
                              <Button variant="flat" size="sm" className="h-8 px-sm text-xs">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Stats for Current Month */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-3xl font-bold text-rusty-orange">
                {monthEvents.length}
              </div>
              <div className="text-body-sm text-muted-foreground">
                Events This Month
              </div>
            </Card>
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-3xl font-bold text-sage-green">
                {monthEvents.filter(e => e.featured).length}
              </div>
              <div className="text-body-sm text-muted-foreground">Featured Events</div>
            </Card>
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-3xl font-bold text-slate-blue">
                {new Set(monthEvents.map(e => e.location.split(',')[0])).size}
              </div>
              <div className="text-body-sm text-muted-foreground">Venues</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}