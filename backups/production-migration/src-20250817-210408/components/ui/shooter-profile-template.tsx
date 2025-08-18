'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'
import { cn } from '@/lib/utils'
import {
  Trophy, Target, Calendar, Medal, ChartLine,
  MapPin, Clock, Star, TrendUp, Medal as Award,
  User, Shield, Ranking
} from '@phosphor-icons/react'

export interface ShooterProfile {
  id: string
  name: string
  avatar?: string
  location: string
  yearsActive: number
  classification: {
    uspsa?: string
    idpa?: string
    steelChallenge?: string
    threeGun?: string
  }
  stats: {
    eventsEntered: number
    wins: number
    topThree: number
    averageFinish: string
    favoriteStage: string
  }
  recentEvents: Array<{
    name: string
    date: string
    division: string
    finish: string
    score?: string
  }>
  achievements: Array<{
    title: string
    date: string
    event: string
    type: 'win' | 'podium' | 'classification' | 'special'
  }>
  preferences: {
    primaryDivision: string
    secondaryDivision?: string
    favoriteVenue: string
    shootingStyle: string
  }
}

export interface ShooterProfileTemplateProps {
  profile: ShooterProfile
  isPublic?: boolean
  isOwner?: boolean
  className?: string
}

export function ShooterProfileTemplate({
  profile,
  isPublic = true,
  isOwner = false,
  className
}: ShooterProfileTemplateProps) {
  const getClassificationColor = (classification: string) => {
    switch (classification.toLowerCase()) {
      case 'grandmaster':
      case 'master':
        return 'elite'
      case 'a class':
      case 'expert':
        return 'success'
      case 'b class':
      case 'sharpshooter':
        return 'info-river'
      case 'c class':
      case 'marksman':
        return 'warning'
      default:
        return 'default'
    }
  }

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'win':
        return Trophy
      case 'podium':
        return Medal
      case 'classification':
        return Ranking
      case 'special':
        return Award
      default:
        return Star
    }
  }

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-nav-events-hero px-md py-xl">
        <div className="container mx-auto max-w-site relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-xl">
            
            {/* Profile Info */}
            <div className="flex items-center gap-lg flex-1">
              <Avatar className="size-24 rounded-xs">
                {profile.avatar ? (
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                ) : null}
                <AvatarFallback className="rounded-xs bg-card font-rajdhani font-bold text-heading-lg">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-sm flex-1">
                <div className="flex items-center gap-sm">
                  <h1 className="font-rajdhani text-display-sm md:text-display-base font-bold text-card-foreground">
                    {profile.name}
                  </h1>
                  {isPublic && (
                    <Badge variant="outline" size="sm">
                      <Shield weight="bold" className="size-3 mr-xs" />
                      Public Profile
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-base text-body-base text-muted-foreground">
                  <div className="flex items-center gap-xs">
                    <MapPin weight="bold" className="size-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-xs">
                    <Calendar weight="bold" className="size-4" />
                    <span>{profile.yearsActive} years competing</span>
                  </div>
                  <div className="flex items-center gap-xs">
                    <Target weight="bold" className="size-4" />
                    <span>{profile.preferences.primaryDivision}</span>
                  </div>
                </div>

                {/* Classifications */}
                <div className="flex flex-wrap gap-xs">
                  {Object.entries(profile.classification).map(([division, classification]) => (
                    classification && (
                      <Badge 
                        key={division}
                        variant={getClassificationColor(classification)}
                        size="sm"
                      >
                        {division.toUpperCase()}: {classification}
                      </Badge>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-base lg:gap-lg">
              <div className="text-center p-base bg-card/20 rounded-xs backdrop-blur-sm">
                <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                  {profile.stats.eventsEntered}
                </div>
                <div className="text-body-xs text-muted-foreground">
                  Events
                </div>
              </div>
              <div className="text-center p-base bg-card/20 rounded-xs backdrop-blur-sm">
                <div className="font-rajdhani font-bold text-heading-lg text-rusty-orange">
                  {profile.stats.wins}
                </div>
                <div className="text-body-xs text-muted-foreground">
                  Wins
                </div>
              </div>
              <div className="text-center p-base bg-card/20 rounded-xs backdrop-blur-sm">
                <div className="font-rajdhani font-bold text-heading-lg text-slate-blue">
                  {profile.stats.topThree}
                </div>
                <div className="text-body-xs text-muted-foreground">
                  Podiums
                </div>
              </div>
              <div className="text-center p-base bg-card/20 rounded-xs backdrop-blur-sm">
                <div className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                  {profile.stats.averageFinish}
                </div>
                <div className="text-body-xs text-muted-foreground">
                  Avg Finish
                </div>
              </div>
            </div>
          </div>

          {isOwner && (
            <div className="flex gap-sm mt-lg">
              <Button variant="outline" size="sm" className="gap-xs">
                <User weight="bold" className="size-4" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="gap-xs">
                <ChartLine weight="bold" className="size-4" />
                View Analytics
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid lg:grid-cols-12 gap-xl">
            
            {/* Recent Performance */}
            <div className="lg:col-span-8 space-y-xl">
              <h2 className="font-rajdhani text-heading-2xl font-bold text-card-foreground">
                Recent Performance
              </h2>

              <div className="space-y-base">
                {profile.recentEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-elevated transition-shadow">
                    <CardContent className="p-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-rajdhani font-bold text-heading-base text-card-foreground mb-xs">
                            {event.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-base text-body-sm text-muted-foreground">
                            <div className="flex items-center gap-xs">
                              <Calendar weight="bold" className="size-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-xs">
                              <Target weight="bold" className="size-4" />
                              <span>{event.division}</span>
                            </div>
                            {event.score && (
                              <div className="flex items-center gap-xs">
                                <ChartLine weight="bold" className="size-4" />
                                <span>{event.score}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={
                              event.finish.includes('1st') ? 'elite' :
                              event.finish.includes('2nd') || event.finish.includes('3rd') ? 'success' :
                              'default'
                            }
                            size="sm"
                          >
                            {event.finish}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Performance Chart Placeholder */}
              <Card className="mica border-2 border-dashed border-border/50">
                <CardContent className="p-xl text-center">
                  <div className="space-y-base">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-xs mb-base">
                      <TrendUp weight="bold" className="size-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
                      Performance Analytics Coming Soon
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Detailed performance charts, trends, and insights will be available once we have more historical data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-lg">
              
              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-xs font-rajdhani">
                    <Trophy weight="bold" className="size-5 text-rusty-orange" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-lg pt-0">
                  <div className="space-y-base">
                    {profile.achievements.slice(0, 5).map((achievement, index) => {
                      const Icon = getAchievementIcon(achievement.type)
                      return (
                        <div key={index} className="flex items-start gap-sm p-sm bg-muted/50 rounded-xs">
                          <div className="flex items-center justify-center w-8 h-8 bg-background rounded-xs flex-shrink-0">
                            <Icon weight="bold" className="size-4 text-rusty-orange" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-rajdhani font-semibold text-body-sm text-card-foreground">
                              {achievement.title}
                            </div>
                            <div className="text-body-xs text-muted-foreground">
                              {achievement.event} • {new Date(achievement.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {profile.achievements.length > 5 && (
                    <Button variant="ghost" size="sm" className="w-full mt-base" animationType="arrow">
                      View All Achievements
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Shooting Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-xs font-rajdhani">
                    <Target weight="bold" className="size-5 text-rusty-orange" />
                    Shooting Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-lg pt-0">
                  <div className="space-y-base">
                    <div>
                      <div className="text-body-sm font-medium text-card-foreground mb-xs">
                        Primary Division
                      </div>
                      <Badge variant="success">{profile.preferences.primaryDivision}</Badge>
                    </div>
                    {profile.preferences.secondaryDivision && (
                      <div>
                        <div className="text-body-sm font-medium text-card-foreground mb-xs">
                          Secondary Division
                        </div>
                        <Badge variant="default">{profile.preferences.secondaryDivision}</Badge>
                      </div>
                    )}
                    <div>
                      <div className="text-body-sm font-medium text-card-foreground mb-xs">
                        Favorite Venue
                      </div>
                      <div className="text-body-sm text-muted-foreground">
                        {profile.preferences.favoriteVenue}
                      </div>
                    </div>
                    <div>
                      <div className="text-body-sm font-medium text-card-foreground mb-xs">
                        Shooting Style
                      </div>
                      <div className="text-body-sm text-muted-foreground">
                        {profile.preferences.shootingStyle}
                      </div>
                    </div>
                    <div>
                      <div className="text-body-sm font-medium text-card-foreground mb-xs">
                        Favorite Stage Type
                      </div>
                      <div className="text-body-sm text-muted-foreground">
                        {profile.stats.favoriteStage}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact/Connect */}
              {isPublic && (
                <Card className="bg-gradient-to-br from-card to-rusty-orange/5">
                  <CardHeader>
                    <CardTitle className="font-rajdhani text-rusty-orange">
                      Connect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-lg pt-0">
                    <div className="space-y-sm">
                      <p className="text-body-sm text-muted-foreground">
                        Want to compete together or share shooting tips?
                      </p>
                      <Button size="sm" className="w-full" animationType="arrow">
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}