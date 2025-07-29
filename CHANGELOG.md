# Changelog

All notable changes to The Boise Gun Club project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2025-07-28] - Design System Standardization & Theme System Overhaul

### 🔥 Major Improvements

#### Theme System Integration
- **FIXED**: Complete dark/light theme system that was previously broken
- **ADDED**: Proper theme provider integration with next-themes
- **UPDATED**: All components now use theme-aware classes (`bg-card`, `text-card-foreground`)
- **ADDED**: Custom `@variant dark` directive for Tailwind CSS v4 compatibility

#### Color Palette Standardization
- **ENFORCED**: 26-color Idaho Firearms Heritage Palette across all components
- **REMOVED**: All generic Tailwind colors (`gray-500`, `blue-600`, etc.)
- **STANDARDIZED**: Copper-orange as primary accent for light theme
- **STANDARDIZED**: Brass-yellow as primary accent for dark theme
- **UPDATED**: Clubhouse-lawn-green for success states and verified badges

#### Component Fixes & Enhancements
- **FIXED**: Dialog and alert-dialog positioning (popups no longer appear off-page)
- **FIXED**: Gallery showcase layout system - removed CVA conflicts
- **FIXED**: Stats showcase with proper theme support and fire gradients
- **ENHANCED**: Fire gradient animations (`h-1 bg-gradient-to-r from-copper-orange to-brass-yellow`)
- **UPDATED**: FacilityCard with proper palette colors for all states

### 🎨 Visual Improvements
- **ADDED**: Real images to all Storybook stories from `public/images` folder
- **ENHANCED**: Hover animations with copper-to-brass fire gradients
- **IMPROVED**: Contrast ratios for better accessibility
- **UNIFIED**: Consistent visual language across all 70+ components

### 🛠 Technical Improvements
- **ENFORCED**: Tailwind CSS v4 compliance (no inline styles, proper @theme usage)
- **UPDATED**: Component patterns to use Class Variance Authority (CVA)
- **ENHANCED**: Storybook integration with proper theme switching
- **IMPROVED**: CSS custom properties system for better performance

### 📚 Documentation
- **UPDATED**: CLAUDE.md with comprehensive color enforcement rules
- **ADDED**: Theme-aware component class requirements
- **DOCUMENTED**: Tailwind CSS v4 compliance guidelines
- **ENHANCED**: Development patterns and best practices

### 🧹 Code Quality
- **REMOVED**: 200+ instances of non-palette colors
- **ELIMINATED**: All hardcoded color values and hex codes
- **STANDARDIZED**: Component structure across entire codebase
- **IMPROVED**: Type safety and component prop consistency

### Breaking Changes
- Components now require proper theme provider setup
- Generic Tailwind color classes have been removed
- Some component APIs updated for better consistency

### Files Changed
- 39 files modified with 2,570 insertions and 226 deletions
- All UI components updated for theme compatibility
- All Storybook stories enhanced with real content
- Global CSS updated with proper theme system

---

## Previous Releases

Previous changelog entries can be found in `_archive/_archived-docs/CHANGELOG.md`