'use client'

// Re-export useCardPageFilters as useUnifiedGallery for consistency with unified gallery system
export { 
  useCardPageFilters as useUnifiedGallery,
  type UseCardPageFiltersProps as UseUnifiedGalleryProps,
  type FilterState
} from './useCardPageFilters'