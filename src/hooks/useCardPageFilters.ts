'use client'

import { useState, useMemo, useCallback } from 'react'
import type { ViewMode } from '@/components/ui/card-page-layout'

export interface FilterState {
  searchQuery: string
  activeTab: string
  selectedFilters: Record<string, string[]>
  viewMode: ViewMode
  sortBy: string
  currentPage: number
}

export interface UseCardPageFiltersProps<T> {
  items: T[]
  initialTab?: string
  initialSortBy?: string
  initialViewMode?: ViewMode
  itemsPerPage?: number
  
  // Filter functions
  searchFilter: (item: T, query: string) => boolean
  tabFilter: (item: T, activeTab: string) => boolean
  customFilters: Record<string, (item: T, selectedValues: string[]) => boolean>
  sortFunctions: Record<string, (a: T, b: T) => number>
}

export function useCardPageFilters<T>({
  items,
  initialTab = 'all',
  initialSortBy = 'default',
  initialViewMode = 'grid',
  itemsPerPage = 12,
  searchFilter,
  tabFilter,
  customFilters,
  sortFunctions
}: UseCardPageFiltersProps<T>) {
  
  const [filterState, setFilterState] = useState<FilterState>({
    searchQuery: '',
    activeTab: initialTab,
    selectedFilters: {},
    viewMode: initialViewMode,
    sortBy: initialSortBy,
    currentPage: 1
  })

  // Update search query
  const setSearchQuery = useCallback((query: string) => {
    setFilterState(prev => ({ 
      ...prev, 
      searchQuery: query,
      currentPage: 1 // Reset to first page when searching
    }))
  }, [])

  // Update active tab
  const setActiveTab = useCallback((tabId: string) => {
    setFilterState(prev => ({ 
      ...prev, 
      activeTab: tabId,
      currentPage: 1 // Reset to first page when changing tabs
    }))
  }, [])

  // Update selected filters for a specific category
  const updateFilters = useCallback((category: string, filterId: string, multiSelect: boolean = true) => {
    setFilterState(prev => {
      const currentFilters = prev.selectedFilters[category] || []
      
      let newFilters: string[]
      if (multiSelect) {
        // Toggle filter in multiselect mode
        newFilters = currentFilters.includes(filterId)
          ? currentFilters.filter(id => id !== filterId)
          : [...currentFilters, filterId]
      } else {
        // Single select mode
        newFilters = currentFilters.includes(filterId) ? [] : [filterId]
      }

      return {
        ...prev,
        selectedFilters: {
          ...prev.selectedFilters,
          [category]: newFilters
        },
        currentPage: 1 // Reset to first page when changing filters
      }
    })
  }, [])

  // Update view mode
  const setViewMode = useCallback((mode: ViewMode) => {
    setFilterState(prev => ({ ...prev, viewMode: mode }))
  }, [])

  // Update sort option
  const setSortBy = useCallback((sortId: string) => {
    setFilterState(prev => ({ ...prev, sortBy: sortId }))
  }, [])

  // Update current page
  const setCurrentPage = useCallback((page: number) => {
    setFilterState(prev => ({ ...prev, currentPage: page }))
  }, [])

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setFilterState(prev => ({
      ...prev,
      searchQuery: '',
      activeTab: initialTab,
      selectedFilters: {},
      currentPage: 1
    }))
  }, [initialTab])

  // Apply all filters and sorting
  const filteredItems = useMemo(() => {
    let filtered = [...items].filter(item => item != null)

    // Apply search filter
    if (filterState.searchQuery.trim()) {
      filtered = filtered.filter(item => searchFilter(item, filterState.searchQuery))
    }

    // Apply tab filter
    if (filterState.activeTab !== 'all') {
      filtered = filtered.filter(item => tabFilter(item, filterState.activeTab))
    }

    // Apply custom filters
    Object.entries(filterState.selectedFilters).forEach(([category, selectedValues]) => {
      if (selectedValues.length > 0 && customFilters[category]) {
        filtered = filtered.filter(item => customFilters[category](item, selectedValues))
      }
    })

    // Apply sorting
    if (sortFunctions[filterState.sortBy]) {
      filtered.sort(sortFunctions[filterState.sortBy])
    }

    return filtered
  }, [items, filterState, searchFilter, tabFilter, customFilters, sortFunctions])

  // Paginated items
  const paginatedItems = useMemo(() => {
    const startIndex = (filterState.currentPage - 1) * itemsPerPage
    return filteredItems.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredItems, filterState.currentPage, itemsPerPage])

  // Pagination info
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  // Grid class name based on view mode
  const getGridClassName = useCallback(() => {
    switch (filterState.viewMode) {
      case 'grid':
        return "grid-auto-fill-320" // Modern responsive grid, 320px min width
      case 'dense':
        return "grid-dense-md" // Dense grid for maximum content visibility  
      case 'card':
        return "grid-auto-fill-350" // Large cards with enhanced content
      case 'list':
        return "flex flex-col gap-base" // Single column list view
      default:
        return "grid-auto-fill-320"
    }
  }, [filterState.viewMode])

  return {
    // State
    searchQuery: filterState.searchQuery,
    activeTab: filterState.activeTab,
    selectedFilters: filterState.selectedFilters,
    viewMode: filterState.viewMode,
    sortBy: filterState.sortBy,
    currentPage: filterState.currentPage,
    
    // Actions
    setSearchQuery,
    setActiveTab,
    updateFilters,
    setViewMode,
    setSortBy,
    setCurrentPage,
    clearAllFilters,
    
    // Results
    filteredItems,
    paginatedItems,
    totalPages,
    totalResults: items.length,
    filteredResults: filteredItems.length,
    
    // Utilities
    getGridClassName
  }
}