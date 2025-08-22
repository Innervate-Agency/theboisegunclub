/**
 * Performance Monitoring Suite - 2025 Edition
 * 
 * Real-time performance tracking with Core Web Vitals,
 * bundle analysis, and React component profiling.
 */

export interface PerformanceMetrics {
  // Core Web Vitals
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay  
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
  
  // Bundle metrics
  jsSize?: number
  cssSize?: number
  totalSize?: number
  
  // React metrics
  renderTime?: number
  componentCount?: number
  reRenders?: number
}

class PerformanceTracker {
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeTracking()
    }
  }

  private initializeTracking() {
    // Core Web Vitals tracking
    this.trackLCP()
    this.trackFID() 
    this.trackCLS()
    this.trackNavigationTiming()
  }

  private trackLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        this.metrics.lcp = lastEntry.startTime
        this.sendMetrics('lcp', lastEntry.startTime)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch (e) {
    }
  }

  private trackFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const firstInput = list.getEntries()[0] as PerformanceEventTiming
        if (firstInput) {
          const fid = firstInput.processingStart - firstInput.startTime
          this.metrics.fid = fid
          this.sendMetrics('fid', fid)
        }
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch (e) {
    }
  }

  private trackCLS() {
    try {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShift[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        this.metrics.cls = clsValue
        this.sendMetrics('cls', clsValue)
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    } catch (e) {
    }
  }

  private trackNavigationTiming() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        this.metrics.fcp = navigation.loadEventStart - navigation.fetchStart
        this.metrics.ttfb = navigation.responseStart - navigation.fetchStart
      }
    }
  }

  private sendMetrics(name: string, value: number) {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Replace with your analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metric', {
          metric_name: name,
          metric_value: Math.round(value),
          custom_map: { metric_1: name }
        })
      }
    }
  }

  // Bundle size tracking
  trackBundleSize() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      
      let jsSize = 0
      let cssSize = 0
      
      resources.forEach(resource => {
        if (resource.name.includes('.js')) {
          jsSize += resource.transferSize || 0
        } else if (resource.name.includes('.css')) {
          cssSize += resource.transferSize || 0
        }
      })
      
      this.metrics.jsSize = jsSize
      this.metrics.cssSize = cssSize
      this.metrics.totalSize = jsSize + cssSize
      
    }
  }

  // React component performance tracking
  trackComponentRender(componentName: string, renderTime: number) {
    this.metrics.renderTime = (this.metrics.renderTime || 0) + renderTime
    this.metrics.componentCount = (this.metrics.componentCount || 0) + 1
    
    if (renderTime > 16) { // Slower than 60fps
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  // Generate performance report
  generateReport(): string {
    const m = this.metrics
    return `
📊 Performance Report:
• LCP: ${m.lcp ? Math.round(m.lcp) + 'ms' : 'pending'}
• FID: ${m.fid ? Math.round(m.fid) + 'ms' : 'pending'}  
• CLS: ${m.cls ? m.cls.toFixed(3) : 'pending'}
• Bundle: ${m.totalSize ? Math.round(m.totalSize/1024) + 'KB' : 'calculating'}
• Components: ${m.componentCount || 0} rendered
    `.trim()
  }

  // Cleanup
  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// React hook for component performance tracking
export function usePerformanceTracker(componentName: string) {
  if (typeof window !== 'undefined') {
    const startTime = performance.now()
    
    return {
      trackRender: () => {
        const endTime = performance.now()
        const renderTime = endTime - startTime
        performanceTracker.trackComponentRender(componentName, renderTime)
      }
    }
  }
  
  return { trackRender: () => {} }
}

// Singleton instance
export const performanceTracker = new PerformanceTracker()

// Core Web Vitals grades
export function getPerformanceGrade(metrics: PerformanceMetrics): string {
  const { lcp, fid, cls } = metrics
  
  let score = 0
  
  // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
  if (lcp) {
    if (lcp < 2500) score += 3
    else if (lcp < 4000) score += 2
    else score += 1
  }
  
  // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
  if (fid) {
    if (fid < 100) score += 3
    else if (fid < 300) score += 2
    else score += 1
  }
  
  // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
  if (cls !== undefined) {
    if (cls < 0.1) score += 3
    else if (cls < 0.25) score += 2
    else score += 1
  }
  
  const maxScore = 9
  const percentage = (score / maxScore) * 100
  
  if (percentage >= 80) return 'A'
  if (percentage >= 70) return 'B' 
  if (percentage >= 60) return 'C'
  if (percentage >= 50) return 'D'
  return 'F'
}