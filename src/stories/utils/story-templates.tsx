import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'

/**
 * Story template factory for The Boise Gun Club Design System
 * Eliminates duplication across 94+ story files by providing consistent
 * configurations and utilities for different component types.
 */

// Common story categories and their typical properties
export type StoryCategory = 'atom' | 'molecule' | 'organism' | 'pattern' | 'business'
export type ComponentType = 'display' | 'interactive' | 'form' | 'layout' | 'navigation' | 'feedback' | 'overlay'
export type StoryStability = 'stable' | 'beta' | 'experimental' | 'deprecated'

interface BaseStoryConfig {
  category: StoryCategory
  componentType?: ComponentType
  stability?: StoryStability
  layout?: 'centered' | 'padded' | 'fullscreen' | 'fullscreen-padded'
  viewport?: 'mobile' | 'tablet' | 'desktop' | 'wide'
  theme?: 'light' | 'dark' | 'auto'
}

/**
 * Standard variant options for common UI patterns
 */
export const COMMON_VARIANTS = {
  // Button variants from TBGC design system
  button: ['default', 'primary', 'secondary', 'accent', 'success', 'destructive', 'ghost', 'link', 'fire', 'fire-blue', 'fire-purple', 'fire-green'],
  
  // Card variants with shadow hierarchy
  card: ['default', 'elevated', 'interactive', 'outlined', 'subtle', 'premium', 'glass', 'fire', 'fire-blue', 'fire-green'],
  
  // Input variants
  input: ['default', 'filled', 'ghost', 'glass'],
  
  // Size options
  sizes: ['xs', 'sm', 'default', 'lg', 'xl'],
  iconSizes: ['xs', 'sm', 'default', 'lg', 'xl', 'icon'],
  
  // Status options for form components
  status: ['default', 'error', 'success', 'warning'],
}

/**
 * Generate standardized story tags based on configuration
 */
export function generateStoryTags(config: BaseStoryConfig): string[] {
  const baseTags = ['autodocs']
  
  // Add stability tag
  if (config.stability) {
    baseTags.push(config.stability)
  }
  
  // Add component type tag
  if (config.componentType) {
    baseTags.push(config.componentType)
  }
  
  // Add category tag
  baseTags.push(config.category)
  
  // Add special tags for certain categories
  if (config.category === 'atom') {
    baseTags.push('foundation')
  }
  
  return baseTags
}

/**
 * Create a standardized meta configuration for a component
 */
export function createStoryMeta<T extends React.ComponentType<any>>(
  component: T,
  config: BaseStoryConfig & {
    title: string
    description?: string
    customArgTypes?: Record<string, any>
  }
): Meta<T> {
  const { title, description, customArgTypes = {}, ...storyConfig } = config
  
  return {
    title: `Design System/${storyConfig.category === 'atom' ? 'Atoms' : 
           storyConfig.category === 'molecule' ? 'Molecules' :
           storyConfig.category === 'organism' ? 'Organisms' :
           storyConfig.category === 'pattern' ? 'Patterns' : 'Business'}/${title}`,
    component,
    parameters: {
      layout: storyConfig.layout || 'centered',
      docs: {
        description: {
          component: description || `# ${title} Component\n\nA ${storyConfig.category} component in the TBGC Design System.`
        }
      }
    },
    tags: generateStoryTags(storyConfig),
    argTypes: customArgTypes
  } as Meta<T>
}

/**
 * Create variant-based stories for components with multiple variants
 */
export function createVariantStories<T extends Record<string, any>>(
  variants: string[],
  baseArgs: Partial<T> = {}
): Record<string, StoryObj<any>> {
  const stories: Record<string, StoryObj<any>> = {}
  
  variants.forEach(variant => {
    const storyName = variant.charAt(0).toUpperCase() + variant.slice(1).replace(/[-_]/g, '')
    
    stories[storyName] = {
      args: {
        ...baseArgs,
        variant,
        children: baseArgs.children || `${storyName} Component`,
      }
    }
  })
  
  return stories
}

/**
 * Story template for atomic components (buttons, inputs, etc.)
 */
export function createAtomicStoryTemplate<T extends React.ComponentType<any>>(
  component: T,
  config: {
    title: string
    description?: string
    variants?: string[]
    sizes?: string[]
    componentType: ComponentType
    customArgTypes?: Record<string, any>
    baseArgs?: Record<string, any>
  }
) {
  const { title, variants, sizes, customArgTypes, baseArgs = {}, ...rest } = config
  
  const meta = createStoryMeta(component, {
    title,
    category: 'atom',
    customArgTypes: {
      ...(variants && {
        variant: {
          control: { type: 'select' },
          options: variants
        }
      }),
      ...(sizes && {
        size: {
          control: { type: 'select' },
          options: sizes
        }
      }),
      ...customArgTypes
    },
    ...rest
  })
  
  const stories: Record<string, StoryObj<any>> = {
    Default: {
      args: {
        ...baseArgs,
        children: baseArgs.children || `Default ${title}`
      }
    }
  }
  
  // Add variant stories
  if (variants) {
    Object.assign(stories, createVariantStories(variants, baseArgs))
  }
  
  return { meta, stories }
}

/**
 * Story template for composite components (molecules, organisms)
 */
export function createCompositeStoryTemplate<T extends React.ComponentType<any>>(
  component: T,
  config: {
    title: string
    category: 'molecule' | 'organism' | 'pattern'
    description?: string
    scenarios: Record<string, { args: Record<string, any>, description?: string }>
    componentType: ComponentType
    customArgTypes?: Record<string, any>
  }
) {
  const { title, scenarios, customArgTypes, ...rest } = config
  
  const meta = createStoryMeta(component, {
    title,
    layout: 'padded', // Composite components usually need more space
    customArgTypes,
    ...rest
  })
  
  const stories: Record<string, StoryObj<any>> = {}
  
  Object.entries(scenarios).forEach(([scenarioName, scenario]) => {
    stories[scenarioName] = {
      args: scenario.args
    }
  })
  
  return { meta, stories }
}
