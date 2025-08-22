import { Metadata } from 'next'
import { getCompletedEvents, type EventData } from '@/lib/comprehensive-events-data'
import { EventCard } from '@/components/ui/EventCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArchiveBoxIcon, CalendarDaysIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event Archive - Idaho Firearms Events',
  description: 'Browse completed Idaho firearms events, competitions, and training sessions. View results, statistics, and historical data.',
  openGraph: {
    title: 'Idaho Firearms Event Archive',
    description: 'Historical record of Idaho shooting sports events with results and statistics.',
    type: 'website'
  }
}

export default function EventArchivePage() {
  const completedEvents = getCompletedEvents()
  
  // Group events by year
  const eventsByYear = completedEvents.reduce((acc, event) => {
    const year = new Date(event.date).getFullYear()
    if (!acc[year]) acc[year] = []
    acc[year].push(event)
    return acc
  }, {} as Record<number, EventData[]>)

  const totalEvents = completedEvents.length
  const competitions = completedEvents.filter(e => e.eventType === 'Competition' || e.eventType === 'Championship').length
  const trainingSessions = completedEvents.filter(e => e.eventType === 'Training').length
  const totalParticipants = completedEvents.reduce((sum, event) => sum + (event.registeredCount || 0), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nav-events via-nav-events/90 to-nav-events/80 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-xs">
                <ArchiveBoxIcon className="h-12 w-12" />
              </div>
            </div>
            <h1 className="font-rajdhani font-bold text-4xl md:text-6xl mb-6">
              Event Archive
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Historical record of Idaho firearms events, competitions, and training sessions
            </p>
            
            {/* Archive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 rounded-xs p-4">
                <div className="text-2xl font-bold">{totalEvents}</div>
                <div className="text-sm text-white/80">Total Events</div>
              </div>
              <div className="bg-white/10 rounded-xs p-4">
                <div className="text-2xl font-bold">{competitions}</div>
                <div className="text-sm text-white/80">Competitions</div>
              </div>
              <div className="bg-white/10 rounded-xs p-4">
                <div className="text-2xl font-bold">{trainingSessions}</div>
                <div className="text-sm text-white/80">Training Sessions</div>
              </div>
              <div className="bg-white/10 rounded-xs p-4">
                <div className="text-2xl font-bold">{totalParticipants}</div>
                <div className="text-sm text-white/80">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archive Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Archive Navigation */}
          <div className="mb-12">
            <Card className="mica-card border-nav-events/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5 text-nav-events" />
                  Browse Archive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/events" className="block">
                    <div className="p-4 bg-nav-events/5 hover:bg-nav-events/10 border border-nav-events/20 hover:border-nav-events/30 rounded-xs transition-all duration-200 text-center">
                      <CalendarDaysIcon className="h-6 w-6 text-nav-events mx-auto mb-2" />
                      <div className="font-medium">Upcoming Events</div>
                    </div>
                  </Link>
                  
                  <div className="p-4 bg-rusty-orange/5 border border-rusty-orange/20 rounded-xs text-center opacity-60">
                    <TrophyIcon className="h-6 w-6 text-rusty-orange mx-auto mb-2" />
                    <div className="font-medium">Results & Scores</div>
                    <div className="text-xs text-muted-foreground mt-1">Coming Soon</div>
                  </div>
                  
                  <div className="p-4 bg-sagebrush-green/5 border border-sagebrush-green/20 rounded-xs text-center opacity-60">
                    <ChartBarIcon className="h-6 w-6 text-sagebrush-green mx-auto mb-2" />
                    <div className="font-medium">Statistics</div>
                    <div className="text-xs text-muted-foreground mt-1">Coming Soon</div>
                  </div>
                  
                  <div className="p-4 bg-slate-blue/5 border border-slate-blue/20 rounded-xs text-center opacity-60">
                    <ArchiveBoxIcon className="h-6 w-6 text-slate-blue mx-auto mb-2" />
                    <div className="font-medium">Photos & Media</div>
                    <div className="text-xs text-muted-foreground mt-1">Coming Soon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events by Year */}
          {Object.keys(eventsByYear).length === 0 ? (
            <Card className="mica-card text-center py-12">
              <CardContent>
                <ArchiveBoxIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Archived Events Yet</h3>
                <p className="text-muted-foreground">
                  As events are completed, they will appear here with results and historical data.
                </p>
                <Link 
                  href="/events" 
                  className="inline-block mt-4 px-6 py-2 bg-nav-events text-white rounded-xs hover:bg-nav-events/90 transition-colors"
                >
                  View Upcoming Events
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-12">
              {Object.entries(eventsByYear)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, events]) => (
                  <div key={year}>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-rajdhani font-bold text-3xl text-card-foreground">{year}</h2>
                      <div className="flex-1 h-px bg-border"></div>
                      <Badge variant="outline" className="px-3 py-1">
                        {events.length} events
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {events.map((event, index) => (
                        <div key={`${event.slug}-${index}`} className="relative">
                          <EventCard
                            {...event}
                            className="mica-card"
                          />
                          {/* Archive Badge */}
                          <div className="absolute top-2 left-2 z-10">
                            <Badge 
                              variant="outline" 
                              className="bg-muted/80 text-muted-foreground border-0 text-xs"
                            >
                              Completed
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
          
          {/* Future Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="mica-card opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrophyIcon className="h-5 w-5 text-rusty-orange" />
                  Results & Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View detailed results, scores, and rankings for completed competitions.
                </p>
                <Badge variant="outline" className="text-xs">Coming Soon</Badge>
              </CardContent>
            </Card>
            
            <Card className="mica-card opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ChartBarIcon className="h-5 w-5 text-sagebrush-green" />
                  Personal Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your personal performance and progress across events.
                </p>
                <Badge variant="outline" className="text-xs">Coming Soon</Badge>
              </CardContent>
            </Card>
            
            <Card className="mica-card opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ArchiveBoxIcon className="h-5 w-5 text-slate-blue" />
                  Event Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse photos, videos, and media from past events.
                </p>
                <Badge variant="outline" className="text-xs">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}