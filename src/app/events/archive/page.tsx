import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Trophy, Target, Calendar, Users, 
  Database, Plus, MagnifyingGlass as Search,
  ChartLine, Medal, Crown, Clock
} from '@phosphor-icons/react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Idaho Shooting Sports Archive | The Boise Gun Club',
  description: 'Comprehensive archive of Idaho shooting sports events, scores, and shooter profiles. Historical competition data, records, and achievements from across the Treasure Valley.',
}

// Sample historical data for demonstration
const recentEvents = [
  {
    id: 'uspsa-july-2024',
    name: 'USPSA Action Pistol Championship',
    date: '2024-07-15',
    location: 'Boise Gun Club',
    participants: 47,
    status: 'completed',
    division: 'Open/Limited/Production',
    scores: 'Available'
  },
  {
    id: 'steel-challenge-june-2024',
    name: 'Steel Challenge Monthly',
    date: '2024-06-20',
    location: 'Treasure Valley Gun Range',
    participants: 23,
    status: 'completed',
    division: 'Rimfire/Centerfire',
    scores: 'Processing'
  },
  {
    id: 'idpa-may-2024',
    name: 'IDPA Defensive Pistol Match',
    date: '2024-05-18',
    location: 'Capital City Arms',
    participants: 31,
    status: 'completed',
    division: 'CDP/SSP/ESP',
    scores: 'Available'
  }
]

const topShooters = [
  {
    name: 'Mike Thompson',
    slug: 'mike-thompson',
    division: 'USPSA Open',
    classification: 'A Class',
    averageFinish: '3rd',
    eventsEntered: 47
  },
  {
    name: 'Sarah Rodriguez',
    slug: 'sarah-rodriguez',
    division: 'IDPA CDP',
    classification: 'Expert',
    averageFinish: '2nd',
    eventsEntered: 32
  },
  {
    name: 'John Davis',
    slug: 'john-davis',
    division: 'Steel Challenge',
    classification: 'Master',
    averageFinish: '1st',
    eventsEntered: 28
  }
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-nav-events-hero px-md py-2xl">
        <div className="container mx-auto max-w-site relative z-10">
          <div className="text-center space-y-lg">
            <div className="inline-flex items-center gap-sm p-sm bg-card/10 rounded-xs border border-border/20">
              <Database weight="bold" className="size-5 text-rusty-orange" />
              <span className="text-body-sm font-rajdhani font-medium text-card-foreground">
                Archive System Beta
              </span>
            </div>
            
            <h1 className="font-rajdhani text-display-lg md:text-display-xl font-bold text-card-foreground leading-tight">
              Idaho Shooting Sports Archive
            </h1>
            
            <p className="text-heading-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The definitive record of Idaho competitive shooting. Track your performance, 
              browse historical results, and celebrate our community's achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-sm justify-center">
              <Link href="/events/archive/submit">
                <Button size="lg" className="gap-sm" animationType="arrow">
                  <Plus weight="bold" className="size-4" />
                  Submit Results
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-sm">
                <Trophy weight="bold" className="size-4" />
                Browse Records
              </Button>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-current rounded-full" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-current rotate-45" />
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-2 border-current" />
        </div>
      </section>

      {/* Search Section */}
      <section className="py-lg section-bg-nav-events-neutral border-b border-border/50">
        <div className="container mx-auto max-w-site px-md">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events, shooters, or venues..."
                className="pl-10 h-12 text-body-base shadow-elevated"
              />
            </div>
            <div className="flex flex-wrap gap-xs mt-base justify-center">
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">USPSA</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">IDPA</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">Steel Challenge</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">3-Gun</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">Precision Rifle</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid lg:grid-cols-12 gap-xl">
            
            {/* Recent Events */}
            <div className="lg:col-span-8 space-y-xl">
              <div className="flex items-center justify-between">
                <h2 className="font-rajdhani text-heading-2xl font-bold text-card-foreground">
                  Recent Events
                </h2>
                <Link href="/events">
                  <Button variant="ghost" size="sm" animationType="arrow">
                    View All Events
                  </Button>
                </Link>
              </div>

              <div className="space-y-base">
                {recentEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-elevated transition-shadow cursor-pointer">
                    <CardContent className="p-lg">
                      <div className="flex items-start justify-between mb-base">
                        <div className="space-y-xs flex-1">
                          <div className="flex items-center gap-xs">
                            <Badge variant="events-competition" size="sm">
                              Competition
                            </Badge>
                            <Badge 
                              variant={event.scores === 'Available' ? 'success' : 'warning'} 
                              size="sm"
                            >
                              {event.scores}
                            </Badge>
                          </div>
                          <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                            {event.name}
                          </h3>
                          <p className="text-body-sm text-muted-foreground">
                            {event.division}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-xs">
                          <ChartLine weight="bold" className="size-3" />
                          View Results
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-base text-body-sm">
                        <div className="flex items-center gap-xs text-muted-foreground">
                          <Calendar weight="bold" className="size-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-xs text-muted-foreground">
                          <Target weight="bold" className="size-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-xs text-muted-foreground">
                          <Users weight="bold" className="size-4" />
                          <span>{event.participants} shooters</span>
                        </div>
                        <div className="flex items-center gap-xs text-muted-foreground">
                          <Clock weight="bold" className="size-4" />
                          <span className="capitalize">{event.status}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <Card className="mica border-2 border-dashed border-border/50">
                <CardContent className="p-xl text-center">
                  <div className="space-y-base">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-xs mb-base">
                      <Plus weight="bold" className="size-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                      Missing an Event?
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Help us build the most comprehensive shooting sports archive in Idaho. 
                      Submit results from past events and matches.
                    </p>
                    <Link href="/events/archive/submit">
                      <Button className="gap-sm" animationType="arrow">
                        <Plus weight="bold" className="size-4" />
                        Submit Historical Results
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-lg">
              
              {/* Top Performers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-xs font-rajdhani">
                    <Crown weight="bold" className="size-5 text-rusty-orange" />
                    Top Performers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-lg pt-0">
                  <div className="space-y-base">
                    {topShooters.map((shooter, index) => (
                      <Link 
                        key={index} 
                        href={`/events/archive/shooters/${shooter.slug}`}
                        className="block"
                      >
                        <div className="flex items-center gap-sm p-sm bg-muted/50 rounded-xs hover:bg-muted/70 transition-colors cursor-pointer">
                          <div className="flex items-center justify-center w-8 h-8 bg-background rounded-xs">
                            <span className="font-rajdhani font-bold text-body-sm">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-rajdhani font-semibold text-body-base text-card-foreground group-hover:text-rusty-orange transition-colors">
                              {shooter.name}
                            </div>
                            <div className="text-body-xs text-muted-foreground">
                              {shooter.division} • {shooter.classification}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-body-xs font-medium text-card-foreground">
                              Avg: {shooter.averageFinish}
                            </div>
                            <div className="text-body-xs text-muted-foreground">
                              {shooter.eventsEntered} events
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-base" animationType="arrow">
                    View All Rankings
                  </Button>
                </CardContent>
              </Card>

              {/* Archive Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-xs font-rajdhani">
                    <Medal weight="bold" className="size-5 text-rusty-orange" />
                    Archive Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-lg pt-0">
                  <div className="grid grid-cols-2 gap-base">
                    <div className="text-center p-base bg-muted/50 rounded-xs">
                      <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                        156
                      </div>
                      <div className="text-body-xs text-muted-foreground">
                        Events Archived
                      </div>
                    </div>
                    <div className="text-center p-base bg-muted/50 rounded-xs">
                      <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                        2,847
                      </div>
                      <div className="text-body-xs text-muted-foreground">
                        Shooter Profiles
                      </div>
                    </div>
                    <div className="text-center p-base bg-muted/50 rounded-xs">
                      <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                        47
                      </div>
                      <div className="text-body-xs text-muted-foreground">
                        Active Venues
                      </div>
                    </div>
                    <div className="text-center p-base bg-muted/50 rounded-xs">
                      <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                        12
                      </div>
                      <div className="text-body-xs text-muted-foreground">
                        Years of Data
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Getting Started */}
              <Card className="bg-gradient-to-br from-card to-rusty-orange/5">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-rusty-orange">
                    New to the Archive?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-lg pt-0">
                  <div className="space-y-sm text-body-sm">
                    <p className="text-muted-foreground">
                      The Idaho Shooting Sports Archive is community-driven. 
                      Here's how you can contribute:
                    </p>
                    <ul className="space-y-xs text-muted-foreground">
                      <li>• Submit match results and scores</li>
                      <li>• Create your shooter profile</li>
                      <li>• Add historical event data</li>
                      <li>• Help verify information</li>
                    </ul>
                  </div>
                  <Button size="sm" className="w-full mt-base" animationType="arrow">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}