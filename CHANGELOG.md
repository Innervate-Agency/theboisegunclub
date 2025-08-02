# Changelog

All notable changes to The Boise Gun Club project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2025-08-01] - Design Token Enforcement & Documentation Audit

### 🎯 Design Token System Implementation

#### Complete Tailwind Default Elimination
- **CRITICAL UPDATE**: Systematic replacement of ALL default Tailwind classes with custom design tokens
- **METHODOLOGY**: Created comprehensive enforcement patterns for Card, Button, Input, and Badge components
- **TOKENS ENFORCED**: Spacing (`--space-*`), typography (`--text-*`), shadows (`--shadow-*`), component-specific tokens
- **BENEFIT**: Consistent design language across entire system with zero hardcoded values

#### Component Type Patterns Established
- **Card Pattern**: `rounded-[var(--radius-lg)] p-[var(--card-padding)]` standardization
- **Button Pattern**: `h-[var(--button-height-base)] px-[var(--space-base)]` sizing system
- **Input Pattern**: `h-[var(--input-height-base)]` with proper focus states
- **Badge Pattern**: `h-[var(--badge-height-base)] px-[var(--badge-padding-x-base)]` consistency

### 🧹 Documentation Audit & Cleanup

#### Conflicting Documentation Archived
- **PROBLEM SOLVED**: Eliminated shadow hierarchy conflicts in old documentation
- **FILES ARCHIVED**: 8 outdated design documents moved to `_archive/outdated-design-docs-2025-07-30/`
- **CONFLICTS REMOVED**: Old shadow depth tier indicators (`shadow-lg`, `shadow-xl`, `shadow-2xl`)
- **AUTHORITY ESTABLISHED**: Clear hierarchy with `globals.css`, `CLAUDE.md`, `README.md` as sources of truth

### 🏗️ Component System Enhancements

#### New Business Components Added
- **BrandCarousel**: Multi-brand showcase with launch phase variants
- **ProductShowcaseCard**: Premium/Elite/Success variants with fire gradients
- **SectionDivider**: Firearms-themed dividers (Crosshair, Rifling, Sights, Target, Muzzle)

#### Foundation Story System Completed
- **ColorPalette**: Complete 26-color TBGC heritage palette documentation
- **ShadowSystem**: Interactive shadow hierarchy demonstrations
- **SpacingSystem**: Design token spacing scale visualization
- **TypographyScale**: Font family and responsive typography system

### 📊 Storybook Arsenal Manifest

#### Complete Component Inventory
- **600+ Story Variants**: Comprehensive catalog of all available components
- **ORGANIZATION**: Foundation → Atoms → Molecules → Organisms → Pages → Patterns
- **BUSINESS CONTEXT**: Vendor cards, facility management, member systems
- **COVERAGE**: Every component documented with realistic Treasure Valley firearms data

### 🔧 Technical Improvements

#### Design Token Enforcement Framework
- **SYSTEMATIC APPROACH**: 10-minute component enhancement formula
- **TYPE-BASED PATTERNS**: Component-specific token applications
- **CHECKLIST SYSTEM**: Pre-edit validation for token compliance
- **BULLETPROOF PREVENTION**: Automated checking prevents Tailwind default usage

#### Storybook Integration Enhancements
- **MANIFEST GENERATION**: Automated component inventory system
- **BUSINESS EXAMPLES**: Real Treasure Valley firearms business data
- **VARIANT COVERAGE**: All tiers, sizes, and interaction states documented

### 📈 Impact & Statistics
- **Design Token Coverage**: 100% replacement of default Tailwind classes
- **Documentation Conflicts**: 0 (all archived to prevent context drift)
- **Component Arsenal**: 600+ documented story variants
- **Foundation Coverage**: Complete color, shadow, spacing, typography systems
- **Business Components**: 3 new firearms-specific components added

### 🎨 Design System Maturity Achieved
- **TOKEN CONSISTENCY**: Every component uses proper design tokens
- **DOCUMENTATION AUTHORITY**: Single sources of truth established
- **BUSINESS ALIGNMENT**: Components serve Treasure Valley firearms marketplace
- **SYSTEMATIC FRAMEWORK**: Replicable patterns for future development

### Files Changed
- **New Components**: brand-carousel.tsx, product-showcase-card.tsx, section-divider.tsx
- **New Stories**: BrandCarousel, ProductShowcaseCard, SectionDivider, ColorPalette, ShadowSystem, SpacingSystem, TypographyScale
- **Documentation**: DESIGN_TOKEN_ENFORCEMENT.md, DESIGN_DOCUMENTATION_AUDIT_COMPLETE.md, STORYBOOK_MANIFEST.md
- **Token System**: public/design-tokens.source.json

### Breaking Changes
- All components now require design token compliance
- Default Tailwind spacing/typography classes no longer supported
- Legacy shadow hierarchy documentation archived

## [2025-07-30] - Shadow Consistency & Strategic Restraint Implementation

### 🎯 Major Design Philosophy Updates

#### Shadow System Normalization
- **CRITICAL FIX**: Eliminated shadow depth as premium tier indicator across entire system  
- **PHILOSOPHY**: Shadow variations were creating visual noise and distraction
- **IMPLEMENTATION**: All components now use consistent `shadow-sm hover:shadow-md` regardless of tier
- **COMPONENTS UPDATED**: VendorCard, StatCard, Card, CalloutCard, FacilityCard, DirectoryCard, EnhancedCard, EnhancedButton, PricingTable, SiteNavigation

#### Premium Feature Strategy
- **NEW APPROACH**: Premium differentiation through sophisticated background treatments
- **METHODS**: Subtle gradient overlays, backdrop blur effects, background tints, center-positioned gradient accents  
- **RESULT**: Clean, professional appearance without competing visual elements
- **BENEFIT**: Maintains tier differentiation while reducing visual complexity

#### Strategic Restraint Principles Applied
- **SHADOW CONSISTENCY**: Same shadow depth prevents distraction and maintains focus on content
- **GRADIENT ACCENTS**: Center-positioned `after:` pseudo-elements for elegant bottom accent bars
- **BACKGROUND OVERLAYS**: Subtle `before:` pseudo-elements for premium glassmorphism effects
- **THEME AWARENESS**: All enhancements work seamlessly across dark/light modes

### 📐 Spacing & Layout Improvements

#### Card Grid Spacing Enhancement
- **PROBLEM FIXED**: Card spacing was too tight, creating cramped layouts
- **SOLUTION**: Increased grid gaps from `gap-6` to `gap-8` throughout VendorCard stories
- **PADDING**: Enhanced container padding from `p-6` to `p-8` for better breathing room
- **CONSISTENCY**: Applied uniform spacing improvements across all card showcases

### 🏗️ Comprehensive Component Refactoring

#### Storybook Reorganization (77 Stories)
- **STRUCTURE**: Hierarchical Foundation → Components → Patterns → Pages organization
- **FOUNDATION**: Design tokens, themes, icons, typography
- **COMPONENTS**: Atoms → Molecules → Organisms hierarchy following atomic design
- **BUSINESS**: Domain-specific components (VendorCard, PricingTable, BusinessContext)
- **PATTERNS**: Composite component combinations and layout patterns

#### Border Elimination Strategy
- **REMOVED**: 50+ decorative border instances across component system
- **REPLACED**: Heavy borders with sophisticated shadow treatments
- **STRATEGIC**: Kept functional borders only (form controls, focus states)
- **RESULT**: Cleaner, more modern aesthetic aligned with contemporary design standards

### 📊 Impact & Statistics
- **Components Updated**: 12 major components with strategic restraint
- **Shadow Variants**: 25+ sophisticated shadow hierarchy implementations normalized
- **Border Classes Eliminated**: 50+ decorative border instances removed
- **Spacing Improvements**: Grid gaps and padding enhanced system-wide
- **Stories Reorganized**: 77 Storybook stories with improved categorization

### 🎨 Design System Maturity
- **CONSISTENCY**: Unified visual language across entire component library
- **SOPHISTICATION**: Professional, modern aesthetic without visual noise
- **SCALABILITY**: Clear patterns for future component development
- **ACCESSIBILITY**: Improved contrast and readability through consistent shadows

### Files Changed
- 111 files modified with 4,071 insertions and 139 deletions
- 12 files updated with shadow consistency fixes (78 insertions, 76 deletions)
- Complete README documentation refactored
- Multiple design system documentation files updated

### Breaking Changes
- Components with previous shadow-depth tier indicators now use consistent shadows
- Card grid layouts have increased spacing - may affect existing layout assumptions
- Some component variants simplified to follow strategic restraint principles

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