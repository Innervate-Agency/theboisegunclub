'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, MagnifyingGlassIcon, MapPinIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from "@/lib/utils"
import { useCalendar } from "@/hooks/use-calendar"

interface InteractiveCalendarProps {
  events: CalendarEvent[]
  className?: string
}

export function InteractiveCalendar({ events, className }: InteractiveCalendarProps) {
  const {
    selectedDate,
    setSelectedDate,
    currentMonth,
    setCurrentMonth,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    selectedEvent,
    setSelectedEvent,
    filteredEvents,
    selectedDateEvents,
    monthEvents,
    eventsByDate,
    categories,
    formatEventTime,
  } = useCalendar(events)

  return (
    <div className={cn("w-full", className)}>
      <div className="bg-card px-lg py-base">
        <div className="flex flex-col sm:flex-row gap-base items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-base flex-1">
            <div className="relative min-w-64">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
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
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 size-6 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  <XMarkIcon className="size-3" />
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-xs">
              {categories.map((category) => {
                const isSelected = selectedCategory === category.value
                return (
                  <Button
                    key={category.value}
                    variant={isSelected ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label}
                    <span className="ml-xs text-body-xs font-mono opacity-70">
                      {category.count}
                    </span>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="text-body-sm text-muted-foreground whitespace-nowrap">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>

      <div className="bg-background p-xl">
        <div className="max-w-none space-y-xl">
          
          <div className="flex items-center justify-between">
            <h2 className="font-rajdhani text-heading-4xl font-bold text-card-foreground">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-lg">
              <Button
                variant="outline" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              >
                <ChevronLeftIcon className="size-6" />
              </Button>
              <Button
                variant="outline" onClick={() => setCurrentMonth(new Date())}
              >
                Today
              </Button>
              <Button
                variant="outline" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              >
                <ChevronRightIcon className="size-6" />
              </Button>
            </div>
          </div>

          <CalendarDaysIcon
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
              table: "w-full border-collapse border-spacing-0",
              head_row: "",
              head_cell: "text-muted-foreground font-medium text-heading-xl w-full h-20 text-center p-base",
              row: "",
              cell: "relative w-full h-32 text-center p-0",
              day: "w-full h-full hover:bg-accent/30 transition-colors rounded-sm flex flex-col items-center justify-start pt-base",
              day_selected: "bg-primary/20 text-primary font-rajdhani font-bold",
              day_today: "bg-secondary/20 text-secondary font-rajdhani font-bold",
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
                      "text-heading-xl font-bold mb-base",
                      isSelected && "text-primary",
                      isToday && "text-secondary"
                    )}>
                      {date.getDate()}
                    </span>
                    
                    {dayEvents.length > 0 && (
                      <div className="flex flex-wrap gap-xs justify-center">
                        {dayEvents.slice(0, 6).map((event, idx) => {
                          return (
                            <div
                              key={idx}
                              className={`size-2 rounded-full bg-primary`}
                              title={event.title}
                            />
                          )
                        })}
                        {dayEvents.length > 6 && (
                          <div className="text-body-sm text-muted-foreground font-mono font-rajdhani font-bold">
                            +{dayEvents.length - 6}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {dayEvents.length > 0 && (
                      <div className="text-body-xs text-muted-foreground mt-xs text-center">
                        {dayEvents.length} event{dayEvents.length !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                )
              }
            }}
          />

          {selectedDate && (
            <div className="bg-muted/30 rounded-sm p-lg">
              <div className="space-y-base">
                <div className="text-center space-y-xs">
                  <div className="flex items-center justify-center gap-xs text-muted-foreground">
                    <CalendarDaysIcon className="size-5" />
                    <span className="text-heading-lg">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  {selectedDateEvents.length > 0 && (
                    <h3 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                      {selectedDateEvents.length} Event{selectedDateEvents.length !== 1 ? 's' : ''}
                    </h3>
                  )}
                </div>

                {selectedDateEvents.length === 0 ? (
                  <div className="text-center p-xl">
                    <div className="text-muted-foreground text-heading-lg">
                      No events scheduled for this date.
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-base">
                    {selectedDateEvents.map((event, idx) => {
                      return (
                        <Card 
                          key={idx} 
                          className="p-base hover:shadow-present transition-shadow cursor-pointer"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="space-y-xs">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-xs">
                                <Badge variant="outline" size="sm">
                                  {event.eventType.toUpperCase()}
                                </Badge>
                              </div>
                              {event.featured && (
                                <span className="text-primary text-body-xs font-medium">
                                  FEATURED
                                </span>
                              )}
                            </div>

                            <h4 className="font-medium text-body-base text-card-foreground">
                              {event.title}
                            </h4>

                            <div className="space-y-xs">
                              <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                <ClockIcon className="size-4" />
                                <span>{formatEventTime(event.time)}</span>
                              </div>
                              <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                <MapPinIcon className="size-4" />
                                <span>{event.location.split(',')[0]}</span>
                              </div>
                              {event.capacity && event.registeredCount && (
                                <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                                  <UsersIcon className="size-4" />
                                  <span>{event.registeredCount}/{event.capacity}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between pt-xs">
                              <span className="text-body-sm font-medium text-primary">
                                {event.price}
                              </span>
                              <Button variant="outline" size="sm" className="h-8 px-sm text-body-xs">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-heading-2xl font-bold text-primary">
                {monthEvents.length}
              </div>
              <div className="text-body-sm text-muted-foreground">
                Events This Month
              </div>
            </Card>
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-heading-2xl font-bold text-success">
                {monthEvents.filter(e => e.featured).length}
              </div>
              <div className="text-body-sm text-muted-foreground">Featured Events</div>
            </Card>
            <Card className="p-base bg-card text-center">
              <div className="font-rajdhani text-heading-2xl font-bold text-info">
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
