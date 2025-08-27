'use client'

import { useState, useEffect } from 'react'

const NIGHT_OPS_KEY = 'boise-gun-club-night-ops'

export function useNightOpsTheme() {
  const [isNightOps, setIsNightOps] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load night ops state from localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(NIGHT_OPS_KEY)
    if (saved === 'true') {
      setIsNightOps(true)
      applyNightOpsTheme()
    }
  }, [])

  // Apply night ops CSS variables
  const applyNightOpsTheme = () => {
    const root = document.documentElement
    
    // Night ops color palette - tactical green/amber theme
    root.style.setProperty('--background', '#0A0F0A') // Deep forest black
    root.style.setProperty('--foreground', '#00FF41') // Matrix green
    root.style.setProperty('--card', '#0D1B0D') // Dark tactical green
    root.style.setProperty('--card-foreground', '#00DD37') // Bright tactical green
    root.style.setProperty('--muted', '#1A331A') // Muted tactical green
    root.style.setProperty('--muted-foreground', '#7ACC7A') // Light tactical green
    root.style.setProperty('--border', '#2D5A2D') // Border tactical green
    root.style.setProperty('--input', '#1A331A') // Input tactical green
    root.style.setProperty('--primary', '#FFD700') // Gold accent
    root.style.setProperty('--primary-foreground', '#0A0F0A') // Dark text on gold
    root.style.setProperty('--secondary', '#FF4500') // Warning orange
    root.style.setProperty('--secondary-foreground', '#0A0F0A') // Dark text on orange
    
    // Night vision tactical colors
    root.style.setProperty('--nav-home', '#00FF41') // Matrix green
    root.style.setProperty('--nav-events', '#FFFF00') // Tactical yellow
    root.style.setProperty('--nav-directory', '#00CCFF') // Tactical cyan
    root.style.setProperty('--nav-armory', '#FF6600') // Tactical orange
    root.style.setProperty('--nav-intel', '#CC00FF') // Tactical purple
    root.style.setProperty('--nav-marketplace', '#FF0066') // Tactical pink
    root.style.setProperty('--nav-forums', '#66FF00') // Tactical lime
    
    // Add night ops class to body
    document.body.classList.add('night-ops-mode')
  }

  // Remove night ops theme
  const removeNightOpsTheme = () => {
    const root = document.documentElement
    
    // Remove all custom properties to revert to CSS defaults
    const properties = [
      '--background', '--foreground', '--card', '--card-foreground',
      '--muted', '--muted-foreground', '--border', '--input',
      '--primary', '--primary-foreground', '--secondary', '--secondary-foreground',
      '--nav-home', '--nav-events', '--nav-directory', '--nav-armory',
      '--nav-intel', '--nav-marketplace', '--nav-forums'
    ]
    
    properties.forEach(prop => {
      root.style.removeProperty(prop)
    })
    
    // Remove night ops class
    document.body.classList.remove('night-ops-mode')
  }

  // Toggle night ops mode
  const toggleNightOps = () => {
    const newState = !isNightOps
    setIsNightOps(newState)
    
    if (newState) {
      applyNightOpsTheme()
      localStorage.setItem(NIGHT_OPS_KEY, 'true')
    } else {
      removeNightOpsTheme()
      localStorage.removeItem(NIGHT_OPS_KEY)
    }
  }

  // Activate night ops (called from Konami code)
  const activateNightOps = () => {
    if (!isNightOps) {
      toggleNightOps()
    }
  }

  // Deactivate night ops
  const deactivateNightOps = () => {
    if (isNightOps) {
      toggleNightOps()
    }
  }

  return {
    isNightOps,
    mounted,
    toggleNightOps,
    activateNightOps,
    deactivateNightOps
  }
}