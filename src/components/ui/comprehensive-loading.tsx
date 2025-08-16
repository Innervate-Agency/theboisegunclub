'use client'

import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { cn } from '@/lib/utils'
import { 
  PageLoadingTumbleweed, 
  FormSubmissionTumbleweed, 
  FileTransferTumbleweed,
  SearchLoadingTumbleweed,
  ImageLoadingTumbleweed,
  LoadingTumbleweed
} from './idaho-tumbleweed'

// Full-page loading overlay for slow page loads
export function PageLoadingOverlay({ 
  isLoading, 
  message = "Loading...",
  className 
}: { 
  isLoading: boolean
  message?: string
  className?: string 
}) {
  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "bg-background/80 backdrop-blur-sm",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MotionDiv
            className="flex flex-col items-center gap-base"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <PageLoadingTumbleweed />
            <p className="text-sm text-muted-foreground font-rajdhani font-medium">
              {message}
            </p>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// Form submission loading state
export function FormSubmissionLoading({ 
  isSubmitting, 
  message = "Submitting...",
  className 
}: { 
  isSubmitting: boolean
  message?: string
  className?: string 
}) {
  return (
    <AnimatePresence>
      {isSubmitting && (
        <MotionDiv
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-background/90 backdrop-blur-sm rounded-xs z-10",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-xs">
            <FormSubmissionTumbleweed />
            <span className="text-sm text-muted-foreground font-rajdhani font-medium">
              {message}
            </span>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// File download/upload progress indicator
export function FileTransferLoading({ 
  isTransferring, 
  progress,
  message = "Processing...",
  type = "download",
  className 
}: { 
  isTransferring: boolean
  progress?: number
  message?: string
  type?: "download" | "upload"
  className?: string 
}) {
  const progressMessage = progress !== undefined 
    ? `${message} ${Math.round(progress)}%`
    : message

  return (
    <AnimatePresence>
      {isTransferring && (
        <MotionDiv
          className={cn(
            "flex items-center gap-sm p-sm rounded-xs",
            "bg-muted/50 border border-border",
            className
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <FileTransferTumbleweed />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-rajdhani font-medium text-foreground">
              {type === "download" ? "Downloading" : "Uploading"}
            </p>
            <p className="text-xs text-muted-foreground">
              {progressMessage}
            </p>
            {progress !== undefined && (
              <div className="w-full bg-muted rounded-full h-1 mt-xs">
                <MotionDiv
                  className="bg-rusty-orange h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// Search loading indicator (inline)
export function SearchLoading({ 
  isSearching, 
  className 
}: { 
  isSearching: boolean
  className?: string 
}) {
  return (
    <AnimatePresence>
      {isSearching && (
        <MotionDiv
          className={cn("flex items-center gap-xs", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SearchLoadingTumbleweed />
          <span className="text-xs text-muted-foreground font-rajdhani">
            Searching...
          </span>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// Image loading placeholder
export function ImageLoadingPlaceholder({ 
  isLoading,
  width,
  height,
  className 
}: { 
  isLoading: boolean
  width?: number | string
  height?: number | string
  className?: string 
}) {
  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className={cn(
            "flex items-center justify-center",
            "bg-muted/30 border border-border/50 rounded-xs",
            className
          )}
          style={{ width, height }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ImageLoadingTumbleweed />
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// Generic loading state with customizable message
export function LoadingState({ 
  isLoading,
  message = "Loading...",
  size = "default",
  showMessage = true,
  className 
}: { 
  isLoading: boolean
  message?: string
  size?: "small" | "default" | "large"
  showMessage?: boolean
  className?: string 
}) {
  const TumbleweedComponent = size === "large" 
    ? PageLoadingTumbleweed 
    : size === "small" 
      ? SearchLoadingTumbleweed 
      : LoadingTumbleweed

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className={cn(
            "flex items-center gap-xs",
            size === "large" && "flex-col gap-base",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <TumbleweedComponent />
          {showMessage && (
            <span className={cn(
              "text-muted-foreground font-rajdhani font-medium",
              size === "large" ? "text-sm" : "text-xs"
            )}>
              {message}
            </span>
          )}
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

// Loading skeleton with tumbleweed for card/content loading
export function ContentLoadingSkeleton({ 
  isLoading,
  lines = 3,
  showTumbleweed = true,
  className 
}: { 
  isLoading: boolean
  lines?: number
  showTumbleweed?: boolean
  className?: string 
}) {
  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className={cn("space-y-sm", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {showTumbleweed && (
            <div className="flex items-center gap-xs mb-base">
              <LoadingTumbleweed />
              <span className="text-xs text-muted-foreground font-rajdhani">
                Loading content...
              </span>
            </div>
          )}
          <div className="space-y-xs">
            {Array.from({ length: lines }).map((_, i) => (
              <MotionDiv
                key={i}
                className="h-3 bg-muted/50 rounded-xs"
                style={{ width: `${90 - i * 15}%` }}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }}
              />
            ))}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}