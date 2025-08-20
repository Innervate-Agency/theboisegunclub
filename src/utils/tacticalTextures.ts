/**
 * Tactical Texture System
 * Generates SVG data URL patterns for sophisticated background textures
 * Inspired by the hero section dotted texture with tactical geometric shapes
 */

export interface TextureOptions {
  size?: number          // Pattern repeat size in pixels
  density?: number       // Shape density (0.1 to 1.0)
  opacity?: number       // Shape opacity (0.01 to 0.1)
  orientation?: number   // Rotation in degrees
  color?: string         // Shape color (hex without #)
}

/**
 * Default texture options optimized for ultra-subtle backgrounds
 */
const DEFAULT_OPTIONS: Required<TextureOptions> = {
  size: 40,
  density: 0.3,
  opacity: 0.005,
  orientation: 0,
  color: '000'
}

/**
 * Cube-Transparent Pattern (Brand Icon Inspired)
 * Creates isometric cube outlines perfect for premium areas
 */
export function getCubeTransparentPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  // Isometric cube path - simplified version of the cube-transparent icon
  const cubePath = `
    M${opts.size * 0.3} ${opts.size * 0.4}
    L${opts.size * 0.5} ${opts.size * 0.2}
    L${opts.size * 0.7} ${opts.size * 0.4}
    L${opts.size * 0.7} ${opts.size * 0.7}
    L${opts.size * 0.5} ${opts.size * 0.9}
    L${opts.size * 0.3} ${opts.size * 0.7}
    Z
    M${opts.size * 0.3} ${opts.size * 0.4}
    L${opts.size * 0.5} ${opts.size * 0.6}
    M${opts.size * 0.7} ${opts.size * 0.4}
    L${opts.size * 0.5} ${opts.size * 0.6}
    M${opts.size * 0.5} ${opts.size * 0.6}
    L${opts.size * 0.5} ${opts.size * 0.9}
  `
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='none' stroke='%23${opts.color}' stroke-width='1' stroke-opacity='${opts.density}' transform='rotate(${opts.orientation} ${opts.size/2} ${opts.size/2})'>
        <path d='${cubePath}'/>
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Tactical Triangles Pattern
 * Equilateral triangles in various orientations for action/competition areas
 */
export function getTacticalTrianglesPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  // Create multiple triangles with different orientations
  const triangleSize = opts.size * 0.15
  const positions = [
    { x: opts.size * 0.2, y: opts.size * 0.3, rotate: 0 },
    { x: opts.size * 0.7, y: opts.size * 0.2, rotate: 60 },
    { x: opts.size * 0.6, y: opts.size * 0.8, rotate: 180 },
    { x: opts.size * 0.1, y: opts.size * 0.7, rotate: 120 }
  ]
  
  const triangles = positions.map(pos => {
    const height = triangleSize * Math.sqrt(3) / 2
    return `
      <polygon 
        points='${pos.x},${pos.y - height/2} ${pos.x - triangleSize/2},${pos.y + height/2} ${pos.x + triangleSize/2},${pos.y + height/2}' 
        transform='rotate(${pos.rotate + opts.orientation} ${pos.x} ${pos.y})'
      />
    `
  }).join('')
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='%23${opts.color}' fill-opacity='${opts.density}'>
        ${triangles}
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Hexagon Grid Pattern
 * Honeycomb/tactical mesh pattern for technical content areas
 */
export function getHexagonGridPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  const hexRadius = opts.size * 0.12
  const centerX = opts.size * 0.5
  const centerY = opts.size * 0.5
  
  // Create hexagon path
  const hexPoints = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 90 + opts.orientation) * Math.PI / 180
    const x = centerX + hexRadius * Math.cos(angle)
    const y = centerY + hexRadius * Math.sin(angle)
    hexPoints.push(`${x},${y}`)
  }
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='none' stroke='%23${opts.color}' stroke-width='1' stroke-opacity='${opts.density}'>
        <polygon points='${hexPoints.join(' ')}'/>
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Diamond Crosshairs Pattern
 * Diamond shapes with center points for precision/competition content
 */
export function getDiamondCrosshairsPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  const diamondSize = opts.size * 0.1
  const positions = [
    { x: opts.size * 0.25, y: opts.size * 0.25 },
    { x: opts.size * 0.75, y: opts.size * 0.25 },
    { x: opts.size * 0.5, y: opts.size * 0.5 },
    { x: opts.size * 0.25, y: opts.size * 0.75 },
    { x: opts.size * 0.75, y: opts.size * 0.75 }
  ]
  
  const shapes = positions.map(pos => `
    <g transform='rotate(${opts.orientation} ${pos.x} ${pos.y})'>
      <rect x='${pos.x - diamondSize/2}' y='${pos.y - diamondSize/2}' width='${diamondSize}' height='${diamondSize}' transform='rotate(45 ${pos.x} ${pos.y})'/>
      <circle cx='${pos.x}' cy='${pos.y}' r='${diamondSize * 0.2}'/>
    </g>
  `).join('')
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='%23${opts.color}' fill-opacity='${opts.density}'>
        ${shapes}
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Simple Dots Pattern
 * Clean circular dots for subtle navbar texture
 */
export function getSimpleDotsPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  // Simple circular dots with tighter, more organic spacing
  const dotRadius = opts.size * 0.04
  const positions = [
    { x: opts.size * 0.15, y: opts.size * 0.25 },
    { x: opts.size * 0.35, y: opts.size * 0.18 },
    { x: opts.size * 0.55, y: opts.size * 0.32 },
    { x: opts.size * 0.22, y: opts.size * 0.55 },
    { x: opts.size * 0.75, y: opts.size * 0.28 },
    { x: opts.size * 0.45, y: opts.size * 0.65 },
    { x: opts.size * 0.68, y: opts.size * 0.55 },
    { x: opts.size * 0.85, y: opts.size * 0.75 },
    { x: opts.size * 0.12, y: opts.size * 0.78 },
    { x: opts.size * 0.38, y: opts.size * 0.82 }
  ]
  
  const dots = positions.map(pos => `
    <circle cx='${pos.x}' cy='${pos.y}' r='${dotRadius}' />
  `).join('')
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='%23${opts.color}' fill-opacity='${opts.density}'>
        ${dots}
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Angular Dots Pattern (Enhanced)
 * Enhanced version of current dot pattern with angular edges
 */
export function getAngularDotsPattern(options: TextureOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  
  // Angular dot shapes (small squares rotated)
  const dotSize = opts.size * 0.08
  const positions = [
    { x: opts.size * 0.2, y: opts.size * 0.2 },
    { x: opts.size * 0.6, y: opts.size * 0.15 },
    { x: opts.size * 0.8, y: opts.size * 0.6 },
    { x: opts.size * 0.3, y: opts.size * 0.8 },
    { x: opts.size * 0.1, y: opts.size * 0.5 }
  ]
  
  const dots = positions.map((pos, index) => `
    <rect 
      x='${pos.x - dotSize/2}' 
      y='${pos.y - dotSize/2}' 
      width='${dotSize}' 
      height='${dotSize}' 
      transform='rotate(${45 + opts.orientation + (index * 15)} ${pos.x} ${pos.y})'
    />
  `).join('')
  
  const svg = `
    <svg width='${opts.size}' height='${opts.size}' viewBox='0 0 ${opts.size} ${opts.size}' xmlns='http://www.w3.org/2000/svg'>
      <g fill='%23${opts.color}' fill-opacity='${opts.density}'>
        ${dots}
      </g>
    </svg>
  `.replace(/\s+/g, ' ').trim()
  
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Masking utilities for radial and linear fades
 */
export interface MaskingOptions {
  type: 'radial-center' | 'radial-corners' | 'linear-horizontal' | 'linear-vertical' | 'edge-fade' | 'asymmetric-dust'
  intensity?: number    // Fade intensity (0.6 to 1.0)
  position?: string     // Custom position (e.g., 'circle at 30% 70%')
}

export function getMaskingStyle(options: MaskingOptions): React.CSSProperties {
  const { type, intensity = 0.8, position } = options
  
  let maskImage = ''
  
  switch (type) {
    case 'radial-center':
      maskImage = position || `radial-gradient(circle at center, black 0%, black 40%, transparent ${intensity * 100}%)`
      break
    case 'radial-corners':
      maskImage = `
        radial-gradient(circle at 0% 0%, transparent 0%, black 30%, transparent 70%),
        radial-gradient(circle at 100% 0%, transparent 0%, black 30%, transparent 70%),
        radial-gradient(circle at 0% 100%, transparent 0%, black 30%, transparent 70%),
        radial-gradient(circle at 100% 100%, transparent 0%, black 30%, transparent 70%)
      `.replace(/\s+/g, ' ')
      break
    case 'linear-horizontal':
      maskImage = `linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)`
      break
    case 'linear-vertical':
      maskImage = `linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)`
      break
    case 'edge-fade':
      maskImage = `
        linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%),
        linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)
      `.replace(/\s+/g, ' ')
      break
    case 'asymmetric-dust':
      // Simple asymmetric fade - just a few spots with natural falloff
      maskImage = `
        radial-gradient(circle at 25% 25%, transparent 20%, black 60%),
        radial-gradient(circle at 75% 70%, transparent 15%, black 55%),
        radial-gradient(circle at 40% 80%, transparent 25%, black 65%),
        linear-gradient(125deg, transparent 10%, black 40%, transparent 90%)
      `.replace(/\s+/g, ' ')
      break
    default:
      maskImage = 'none'
  }
  
  return {
    maskImage,
    WebkitMaskImage: maskImage,
  }
}

/**
 * Preset texture configurations for ultra-subtle use cases
 */
export const TEXTURE_PRESETS = {
  // Footer - Ultra-subtle cube pattern with strong edge fade
  footer: {
    pattern: getCubeTransparentPattern({ size: 80, density: 0.2, opacity: 0.008 }),
    masking: getMaskingStyle({ type: 'edge-fade', intensity: 0.95 })
  },
  
  // Premium cards - Minimal cube pattern with strong corner fade
  premiumCard: {
    pattern: getCubeTransparentPattern({ size: 60, density: 0.15, opacity: 0.006 }),
    masking: getMaskingStyle({ type: 'radial-corners', intensity: 0.9 })
  },
  
  // Event cards - Very subtle triangular pattern with center focus
  eventCard: {
    pattern: getTacticalTrianglesPattern({ size: 50, density: 0.25, opacity: 0.005 }),
    masking: getMaskingStyle({ type: 'radial-center', intensity: 0.92 })
  },
  
  // Competition cards - Minimal diamond crosshairs with strong fade
  competitionCard: {
    pattern: getDiamondCrosshairsPattern({ size: 45, density: 0.3, opacity: 0.007 }),
    masking: getMaskingStyle({ type: 'radial-center', intensity: 0.88 })
  },
  
  // Directory listings - Subtle hexagon grid with linear fade
  directoryCard: {
    pattern: getHexagonGridPattern({ size: 55, density: 0.2, opacity: 0.006 }),
    masking: getMaskingStyle({ type: 'linear-horizontal', intensity: 0.93 })
  },
  
  // Navigation - Simple dots with gentle asymmetric fade
  navigation: {
    pattern: getSimpleDotsPattern({ size: 28, density: 0.12, opacity: 0.002 }),
    masking: getMaskingStyle({ type: 'asymmetric-dust' })
  }
}

/**
 * Generate complete texture style object
 */
export function getTextureStyle(preset: keyof typeof TEXTURE_PRESETS, opacity = 1): React.CSSProperties {
  const config = TEXTURE_PRESETS[preset]
  
  return {
    backgroundImage: config.pattern,
    opacity: opacity,
    ...config.masking
  }
}