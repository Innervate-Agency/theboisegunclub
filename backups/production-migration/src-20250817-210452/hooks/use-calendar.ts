"use client"

import * as React from "react"

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

export function useCalendar(events: CalendarEvent[]) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null)

  const filteredEvents = React.useMemo(() => {
    return events.filter(event => {
      const matchesCategory = selectedCategory === "all" || event.eventType === selectedCategory
      const matchesSearch = searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [events, selectedCategory, searchQuery])

  const selectedDateEvents = React.useMemo(() => {
    if (!selectedDate) return []
    const dateStr = selectedDate.toDateString()
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === dateStr
    })
  }, [selectedDate, filteredEvents])

  const monthEvents = React.useMemo(() => {
    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= monthStart && eventDate <= monthEnd
    })
  }, [currentMonth, filteredEvents])

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

  const categories = React.useMemo(() => {
    const eventTypes = [...new Set(events.map(e => e.eventType))]
    return [
      { label: "All Events", value: "all", count: events.length },
      ...eventTypes.map(type => ({
        label: type + "s",
        value: type,
        count: events.filter(e => e.eventType === type).length,
      }))
    ]
  }, [events])

  const formatEventTime = (time: string) => {
    return time.split(" - ")[0] || time
  }

  return {
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
  }
}
