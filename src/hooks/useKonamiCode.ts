'use client'

import { useState, useEffect, useRef } from 'react'

interface KonamiCodeOptions {
  onComplete?: () => void
  resetOnComplete?: boolean
  resetTimeout?: number
}

export function useKonamiCode(options: KonamiCodeOptions = {}) {
  const {
    onComplete,
    resetOnComplete = true,
    resetTimeout = 5000
  } = options

  const [sequence, setSequence] = useState<string[]>([])
  const [isActivated, setIsActivated] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // The famous Konami code sequence
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ]

  // Reset sequence after timeout
  const resetSequence = () => {
    setSequence([])
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  // Check if current sequence matches Konami code
  const checkSequence = (currentSequence: string[]) => {
    if (currentSequence.length > konamiSequence.length) {
      resetSequence()
      return false
    }

    // Check if current sequence matches the beginning of Konami code
    for (let i = 0; i < currentSequence.length; i++) {
      if (currentSequence[i] !== konamiSequence[i]) {
        resetSequence()
        return false
      }
    }

    // Complete match
    if (currentSequence.length === konamiSequence.length) {
      setIsActivated(true)
      onComplete?.()
      
      if (resetOnComplete) {
        resetSequence()
      }
      
      return true
    }

    return false
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only track these specific keys
      const trackableKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
      ]

      if (!trackableKeys.includes(event.code)) {
        return
      }

      // Prevent default behavior for arrow keys
      if (event.code.startsWith('Arrow')) {
        event.preventDefault()
      }

      setSequence(currentSequence => {
        const newSequence = [...currentSequence, event.code]
        checkSequence(newSequence)
        return newSequence
      })

      // Reset sequence after timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        resetSequence()
      }, resetTimeout)
    }

    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [resetTimeout])

  const reset = () => {
    resetSequence()
    setIsActivated(false)
  }

  return {
    sequence,
    isActivated,
    progress: sequence.length,
    totalSteps: konamiSequence.length,
    isComplete: sequence.length === konamiSequence.length,
    reset,
    // Debug helper
    expectedNext: konamiSequence[sequence.length] || null
  }
}