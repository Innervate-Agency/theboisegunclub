'use client'

import * as React from 'react'
import { PageLoadingTumbleweed, LoadingTumbleweed } from './idaho-tumbleweed'
import { cn } from '@/lib/utils'

// Suspense wrapper with Idaho Tumbleweed fallback
export function TumbleweedSuspense({ 
  children,
  fallbackMessage = "Loading...",
  variant = "default",
  className
}: {
  children: React.ReactNode
  fallbackMessage?: string
  variant?: "default" | "page" | "minimal"
  className?: string
}) {
  const fallbackContent = React.useMemo(() => {
    switch (variant) {
      case "page":
        return (
          <div className={cn(
            "min-h-screen flex flex-col items-center justify-center gap-base",
            "bg-background",
            className
          )}>
            <PageLoadingTumbleweed />
            <p className="text-sm text-muted-foreground font-rajdhani font-medium">
              {fallbackMessage}
            </p>
          </div>
        )
      
      case "minimal":
        return (
          <div className={cn("flex items-center justify-center p-base", className)}>
            <LoadingTumbleweed />
          </div>
        )
      
      default:
        return (
          <div className={cn(
            "flex flex-col items-center justify-center gap-sm p-xl",
            "min-h-[200px]",
            className
          )}>
            <LoadingTumbleweed />
            <p className="text-sm text-muted-foreground font-rajdhani font-medium">
              {fallbackMessage}
            </p>
          </div>
        )
    }
  }, [variant, fallbackMessage, className])

  return (
    <React.Suspense fallback={fallbackContent}>
      {children}
    </React.Suspense>
  )
}

// Hook for managing loading states across components
export function useLoadingState(initialState = false) {
  const [isLoading, setIsLoading] = React.useState(initialState)
  const [message, setMessage] = React.useState<string>()

  const startLoading = React.useCallback((loadingMessage?: string) => {
    setIsLoading(true)
    if (loadingMessage) setMessage(loadingMessage)
  }, [])

  const stopLoading = React.useCallback(() => {
    setIsLoading(false)
    setMessage(undefined)
  }, [])

  const withLoading = React.useCallback(async <T,>(
    asyncFn: () => Promise<T>,
    loadingMessage?: string
  ): Promise<T> => {
    startLoading(loadingMessage)
    try {
      const result = await asyncFn()
      return result
    } finally {
      stopLoading()
    }
  }, [startLoading, stopLoading])

  return {
    isLoading,
    message,
    startLoading,
    stopLoading,
    withLoading
  }
}

// Error boundary with tumbleweed retry functionality
export class TumbleweedErrorBoundary extends React.Component<
  {
    children: React.ReactNode
    fallback?: React.ComponentType<{ error: Error; retry: () => void }>
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo)
    console.error('TumbleweedErrorBoundary caught an error:', error, errorInfo)
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback
      
      if (Fallback && this.state.error) {
        return <Fallback error={this.state.error} retry={this.retry} />
      }

      return (
        <div className="flex flex-col items-center justify-center gap-base p-xl min-h-[200px]">
          <LoadingTumbleweed paused />
          <div className="text-center space-y-xs">
            <p className="text-sm font-rajdhani font-medium text-foreground">
              Something went wrong
            </p>
            <p className="text-xs text-muted-foreground">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
          </div>
          <button
            onClick={this.retry}
            className="px-sm py-xs text-xs bg-rusty-orange text-white rounded-xs hover:bg-rusty-orange/90 transition-colors font-rajdhani font-medium"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Combined wrapper for robust loading/error handling
export function TumbleweedWrapper({ 
  children,
  loadingMessage = "Loading...",
  errorFallback,
  onError,
  className
}: {
  children: React.ReactNode
  loadingMessage?: string
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  className?: string
}) {
  return (
    <TumbleweedErrorBoundary fallback={errorFallback} onError={onError}>
      <TumbleweedSuspense fallbackMessage={loadingMessage} className={className}>
        {children}
      </TumbleweedSuspense>
    </TumbleweedErrorBoundary>
  )
}