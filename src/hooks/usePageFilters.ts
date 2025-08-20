import { useState, useMemo, useCallback } from 'react'

interface FilterState {
  selectedFilters: Record<string, string[]>
  searchQuery: string
  sortBy: string
  totalResults: number
  filteredResults: number
}

interface UsePageFiltersOptions<T> {
  items: T[]
  searchFilter: (item: T, query: string) => boolean
  categoryFilters?: Record<string, (item: T, selectedValues: string[]) => boolean>
  sortFunctions?: Record<string, (a: T, b: T) => number>
  initialSortBy?: string
}

export function usePageFilters<T>({
  items,
  searchFilter,
  categoryFilters = {},
  sortFunctions = {},
  initialSortBy = 'date'
}: UsePageFiltersOptions<T>) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState(initialSortBy)

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let filtered = items

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(item => searchFilter(item, searchQuery))
    }

    // Apply category filters
    Object.entries(selectedFilters).forEach(([category, values]) => {
      if (values.length > 0 && categoryFilters[category]) {
        filtered = filtered.filter(item => categoryFilters[category](item, values))
      }
    })

    // Apply sorting
    if (sortFunctions[sortBy]) {
      filtered = [...filtered].sort(sortFunctions[sortBy])
    }

    return filtered
  }, [items, searchQuery, selectedFilters, sortBy, searchFilter, categoryFilters, sortFunctions])

  // Filter management
  const handleFilterChange = useCallback((sectionId: string, optionId: string) => {
    setSelectedFilters(prev => {
      const current = prev[sectionId] || []
      const isSelected = current.includes(optionId)
      
      return {
        ...prev,
        [sectionId]: isSelected 
          ? current.filter(id => id !== optionId)
          : [...current, optionId]
      }
    })
  }, [])

  const handleClearSection = useCallback((sectionId: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [sectionId]: []
    }))
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedFilters({})
    setSearchQuery('')
  }, [])

  const filters: FilterState = {
    selectedFilters,
    searchQuery,
    sortBy,
    totalResults: items.length,
    filteredResults: filteredItems.length
  }

  return {
    filters,
    filteredItems,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    handleFilterChange,
    handleClearSection,
    handleClearAll
  }
}