'use client'

import React, { useState, useEffect } from 'react'

interface TacticalStats {
  brassCasings: number // Page visits
  sectionsVisited: string[]
  rangeTime: number // Total time on site (minutes)
  lastVisit: string
  achievements: string[]
  totalSessions: number
}

const defaultStats: TacticalStats = {
  brassCasings: 0,
  sectionsVisited: [],
  rangeTime: 0,
  lastVisit: '',
  achievements: [],
  totalSessions: 0
}

const STORAGE_KEY = 'boise-gun-club-tactical-stats'
const SECTIONS = ['home', 'events', 'directory', 'armory', 'intel', 'marketplace', 'forums']

export function useTacticalTracker() {
  const [stats, setStats] = useState<TacticalStats>(defaultStats)
  const [sessionStartTime] = useState(Date.now())
  const [mounted, setMounted] = useState(false)

  // Load stats from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsedStats = JSON.parse(saved)
        setStats(parsedStats)
        
        // Track new session
        const updatedStats = {
          ...parsedStats,
          totalSessions: parsedStats.totalSessions + 1,
          lastVisit: new Date().toISOString()
        }
        setStats(updatedStats)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats))
      } catch (error) {
        console.warn('Could not parse tactical stats:', error)
      }
    } else {
      // First time visitor
      const initialStats = {
        ...defaultStats,
        totalSessions: 1,
        lastVisit: new Date().toISOString()
      }
      setStats(initialStats)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStats))
    }
  }, [])

  // Save stats when component unmounts (track session time)
  useEffect(() => {
    if (!mounted) return

    const handleBeforeUnload = () => {
      const sessionTime = Math.round((Date.now() - sessionStartTime) / 60000) // minutes
      const updatedStats = {
        ...stats,
        rangeTime: stats.rangeTime + sessionTime
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats))
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [stats, sessionStartTime, mounted])

  const fireBrass = React.useCallback(() => {
    if (!mounted) return
    
    setStats(prevStats => {
      const updatedStats = {
        ...prevStats,
        brassCasings: prevStats.brassCasings + 1
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats))
      return updatedStats
    })
  }, [mounted])

  const visitSection = React.useCallback((section: string) => {
    if (!mounted) return
    
    setStats(prevStats => {
      if (prevStats.sectionsVisited.includes(section)) return prevStats
      
      const updatedSections = [...prevStats.sectionsVisited, section]
      const newAchievements = [...prevStats.achievements]
      
      // Check for achievements
      if (updatedSections.length === SECTIONS.length && !prevStats.achievements.includes('explorer')) {
        newAchievements.push('explorer')
      }
      
      if (prevStats.brassCasings >= 50 && !prevStats.achievements.includes('marksman')) {
        newAchievements.push('marksman')
      }
      
      if (prevStats.totalSessions >= 10 && !prevStats.achievements.includes('regular')) {
        newAchievements.push('regular')
      }

      const updatedStats = {
        ...prevStats,
        sectionsVisited: updatedSections,
        achievements: newAchievements
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats))
      return updatedStats
    })
  }, [mounted])

  const isAchievementNew = (achievement: string) => {
    return stats.achievements.includes(achievement)
  }

  const getProgressToNextAchievement = () => {
    if (!stats.achievements.includes('explorer')) {
      return {
        name: 'Range Explorer',
        description: 'Visit all platform sections',
        progress: stats.sectionsVisited.length,
        total: SECTIONS.length,
        icon: '🗺️'
      }
    }
    
    if (!stats.achievements.includes('marksman')) {
      return {
        name: 'Marksman',
        description: 'Fire 50 brass casings (page visits)',
        progress: Math.min(stats.brassCasings, 50),
        total: 50,
        icon: '🎯'
      }
    }
    
    if (!stats.achievements.includes('regular')) {
      return {
        name: 'Range Regular',
        description: 'Complete 10 visits to the platform',
        progress: Math.min(stats.totalSessions, 10),
        total: 10,
        icon: '⭐'
      }
    }
    
    return null
  }

  return {
    stats,
    fireBrass,
    visitSection,
    isAchievementNew,
    getProgressToNextAchievement,
    mounted
  }
}