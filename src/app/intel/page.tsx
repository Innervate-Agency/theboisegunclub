'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function IntelRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to map page
    router.replace('/map')
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin h-8 w-8 border-4 border-rusty-orange border-t-transparent rounded-full mx-auto"></div>
        <p className="text-muted-foreground">Redirecting to Idaho Shooting Map...</p>
      </div>
    </div>
  )
}