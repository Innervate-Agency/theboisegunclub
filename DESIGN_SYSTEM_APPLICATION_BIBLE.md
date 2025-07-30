# 📖 **TBGC DESIGN SYSTEM APPLICATION BIBLE**

## 🎯 **THE ULTIMATE GUIDE TO SYSTEMATIC COMPONENT ENHANCEMENT**

> **PURPOSE**: This document prevents context drift, ensures consistency, and provides a systematic approach to applying the complete 1,868-line design system to ALL components. Future AI sessions must follow this guide exactly.

---

## 🏛️ **FOUNDATION PRINCIPLES (NEVER CHANGE THESE)**

### **🚫 ABSOLUTE PROHIBITIONS**
1. **NEVER modify `src/app/globals.css` or `@theme`** - The 1,868-line system is COMPLETE
2. **NEVER delete/remake components** - Only UPDATE/MODIFY existing components
3. **NEVER use hardcoded hex codes** - Only use the 26 approved TBGC colors
4. **NEVER break CVA patterns** - All components must use Class Variance Authority
5. **NEVER ignore shadow hierarchy** - Follow Stripe-inspired container-only shadows

### **✅ CORE DESIGN SYSTEM INVENTORY**
From the complete 1,868-line `globals.css`, we have:

#### **🎨 COLOR SYSTEM (26 Total)**
**Primary Brand (4):** `brass-yellow`, `copper-orange`, `gunmetal-black`, `nickel-white`
**Light Theme (13):** `range-white`, `shooting-bench`, `walnut-stock`, `blued-steel`, `case-hardened`, `muzzle-flash`, `recoil-pad`, `sight-gold`, `scope-blue`, `trigger-blue`, `rifling-green`, `bore-sight-green`, `safety-red`
**Dark Theme (9):** `night-sight`, `carbon-fiber`, `tactical-gray`, `titanium-white`, `stainless-steel`, `flash-hider`, `crimson-trace`, `cerakote-blue`, `ghost-ring`, `woodland-camo`

#### **🔥 FIRE GRADIENT SYSTEM**
- **Utilities**: `bg-fire-orange`, `bg-fire-blue`, `bg-fire-purple`, `bg-fire-green`, `bg-fire-animated`
- **Animations**: `animate-fire-unfurl`, `animate-fire-pulse`, `animate-fire-glow`
- **Philosophy**: Left-origin unfurling animations for premium/elite variants

#### **💎 MICA GLASS SYSTEM**
- **Overlays**: `mica-overlay`, `mica-dropdown`, `mica-modal`, `mica-tooltip`, `mica-toast`
- **Premium**: `mica-premium`, `mica-elite` with brass/copper gradients
- **Usage**: Only for dropdowns, modals, tooltips, and premium cards

#### **🎭 SHADOW HIERARCHY (Stripe-Inspired)**
- **Standard**: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Brand**: `shadow-brass`, `shadow-copper`, `shadow-premium`, `shadow-elite`
- **Flat**: `shadow-flat` (for nested elements)
- **Rules**: CONTAINERS ONLY get shadows, nested elements stay flat

#### **📏 SPACING SYSTEM**
- **12 Levels**: `space-micro` (2px) to `space-4xl` (128px)
- **Utilities**: `p-micro`, `gap-sm`, `m-lg` etc.
- **Responsive**: Systematic scaling across breakpoints

#### **🎯 TYPOGRAPHY HIERARCHY**
- **Fonts**: Rajdhani (H1-H2), Noto Sans (H3-H6), Noto Serif (editorial)
- **Scale**: `text-xs` to `text-9xl` with proper line-heights
- **Responsive**: `text-responsive-*` variants for mobile-first scaling

---

## 🛠️ **SYSTEMATIC APPLICATION METHODOLOGY**

### **📋 THE 8-STEP COMPONENT ENHANCEMENT PROCESS**

#### **STEP 1: COMPONENT ANALYSIS**
Before touching ANY component:
```bash
# 1. Read the component file completely
# 2. Check its Storybook story for variants
# 3. Identify current color usage patterns
# 4. Note existing CVA structure
# 5. Check for TypeScript interfaces
```

#### **STEP 2: COLOR SYSTEM APPLICATION**
**Replace ALL hardcoded colors with TBGC palette:**
```tsx
// ❌ BEFORE (Forbidden patterns)
className="bg-blue-500 text-white border-gray-300"
className="bg-[#F2CB05] text-[#000000]"
style={{backgroundColor: '#F28705'}}

// ✅ AFTER (TBGC Design System)
className="bg-scope-blue text-nickel-white border-case-hardened"
className="bg-brass-yellow text-gunmetal-black"
```

#### **STEP 3: SHADOW HIERARCHY ENFORCEMENT**
**Apply Stripe-inspired shadow rules:**
```tsx
// ✅ Container components get shadows
<Card className="shadow-md hover:shadow-lg"> {/* Container */}
  <Input className="shadow-flat" />          {/* Nested: flat */}
  <Button className="shadow-flat" />         {/* Nested: flat */}
</Card>

// ✅ Standalone elements can have shadows
<Button className="shadow-sm hover:shadow-md"> {/* Standalone: OK */}
```

#### **STEP 4: TYPOGRAPHY SYSTEM APPLICATION**
**Enforce proper font hierarchy:**
```tsx
// ✅ Proper typography hierarchy
<h1 className="font-rajdhani font-bold text-4xl text-gunmetal-black">
<h2 className="font-rajdhani font-semibold text-2xl text-gunmetal-black">
<h3 className="font-noto-sans font-semibold text-xl text-gunmetal-black">
<p className="font-noto-sans text-base text-case-hardened">
```

#### **STEP 5: FIRE GRADIENT ENHANCEMENT**
**Add fire gradient variants for premium components:**
```tsx
const componentVariants = cva(baseStyles, {
  variants: {
    variant: {
      default: "bg-card border-border text-card-foreground",
      premium: "bg-card border-brass-yellow/20 shadow-premium hover:shadow-elite ring-1 ring-brass-yellow/10",
      elite: "bg-card border-copper-orange/20 shadow-elite hover:shadow-xl ring-1 ring-copper-orange/10",
      fire: "bg-card relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-fire-orange after:transition-all after:duration-300 hover:after:w-full",
      glass: "mica-overlay border-border/30 shadow-glass backdrop-blur-sm",
    }
  }
})
```

#### **STEP 6: MICA GLASS INTEGRATION**
**Apply glass effects to appropriate components:**
```tsx
// ✅ Perfect candidates for mica effects
- Dropdowns: "mica-dropdown"
- Modals: "mica-modal" 
- Tooltips: "mica-tooltip"
- Premium cards: "mica-premium"
- Overlays: "mica-overlay"
```

#### **STEP 7: RESPONSIVE ENHANCEMENT**
**Add proper responsive scaling:**
```tsx
// ✅ Mobile-first responsive design
className="text-sm md:text-base lg:text-lg"
className="p-4 md:p-6 lg:p-8"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

#### **STEP 8: COMPONENT STATE INTEGRATION**
**Add ready-made component states:**
```tsx
// ✅ Use pre-built component states
<Button className="btn-primary">       {/* Uses globals.css state */}
<Card className="card-hover">          {/* Uses globals.css state */}
<Input className="input-focus">        {/* Uses globals.css state */}
```

---

## 🎨 **COMPONENT-SPECIFIC APPLICATION PATTERNS**

### **🔲 BUTTON COMPONENTS**
**Required variants:** `default`, `premium`, `elite`, `fire`, `glass`, `outline`, `ghost`
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center transition-stripe-fast rounded-md font-noto-sans shadow-flat",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        premium: "bg-brass-yellow text-gunmetal-black hover:bg-brass-yellow/90 shadow-brass",
        elite: "bg-copper-orange text-nickel-white hover:bg-copper-orange/90 shadow-copper",
        fire: "bg-card text-card-foreground relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-fire-orange after:transition-all hover:after:w-full",
        glass: "mica-overlay text-card-foreground border border-border/30",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 text-sm", 
        lg: "h-12 px-6 text-base",
      }
    }
  }
)
```

### **🃏 CARD COMPONENTS**
**Required variants:** `default`, `premium`, `elite`, `glass`, `fire`, `fire-blue`
```tsx
const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-stripe-fast overflow-hidden",
  {
    variants: {
      variant: {
        default: "shadow-sm hover:shadow-md",
        premium: "border-brass-yellow/20 shadow-premium hover:shadow-elite ring-1 ring-brass-yellow/10",
        elite: "border-copper-orange/20 shadow-elite hover:shadow-xl ring-1 ring-copper-orange/10",
        glass: "mica-overlay border-border/30 shadow-glass backdrop-blur-sm",
        fire: "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-fire-orange after:transition-all hover:after:w-full hover:after:h-2",
      }
    }
  }
)
```

### **📝 INPUT COMPONENTS**
**Required variants:** `default`, `filled`, `ghost`, `glass`
```tsx
const inputVariants = cva(
  "flex w-full rounded-md border bg-transparent px-3 py-2 text-sm transition-stripe-fast shadow-flat font-noto-sans",
  {
    variants: {
      variant: {
        default: "border-border focus-visible:border-brass-yellow focus-visible:ring-2 focus-visible:ring-brass-yellow/20",
        filled: "bg-muted border-border/60 hover:bg-background focus-visible:bg-background",
        ghost: "border-transparent hover:bg-muted/50 focus-visible:bg-muted/30",
        glass: "mica-overlay border-border/30 backdrop-blur-sm",
      }
    }
  }
)
```

### **🏷️ BADGE COMPONENTS**
**Required variants:** `default`, `premium`, `elite`, `glass`, semantic colors
```tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-xs font-noto-sans transition-stripe-fast shadow-flat",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        premium: "bg-brass-yellow/10 text-brass-yellow border border-brass-yellow/20",
        elite: "bg-copper-orange/10 text-copper-orange border border-copper-orange/20",
        glass: "mica-overlay text-card-foreground border border-border/30",
        success: "bg-rifling-green/10 text-rifling-green border border-rifling-green/20",
        warning: "bg-sight-gold/10 text-sight-gold border border-sight-gold/20",
        error: "bg-safety-red/10 text-safety-red border border-safety-red/20",
      }
    }
  }
)
```

---

## 🔧 **TECHNICAL IMPLEMENTATION RULES**

### **📐 CVA PATTERN REQUIREMENTS**
All components MUST follow this exact pattern:
```tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const componentVariants = cva(
  "base-classes-here", // Base styles always applied
  {
    variants: {
      variant: {
        default: "default-styles",
        premium: "brass-yellow-styles", 
        elite: "copper-orange-styles",
        // etc...
      },
      size: {
        sm: "small-styles",
        default: "default-styles", 
        lg: "large-styles",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)

export interface ComponentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional props here
}

export function Component({ variant, size, className, ...props }: ComponentProps) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)} {...props}>
      {/* Component content */}
    </div>
  )
}
```

### **🎯 TYPESCRIPT REQUIREMENTS**
```tsx
// ✅ Proper interface extension
export interface ComponentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional specific props
}

// ✅ Proper forwardRef for form components
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"
```

### **🎨 ANIMATION INTEGRATION**
```tsx
// ✅ Use design system animations
className="transition-stripe-fast hover:shadow-lg"    // 150ms Stripe easing
className="animate-fire-unfurl"                       // Fire gradient animation
className="animate-shimmer"                           // Loading animation
className="transition-elastic"                        // Elastic micro-interaction
```

---

## 📋 **COMPONENT PRIORITY MATRIX**

### **🥇 TIER 1: FOUNDATION COMPONENTS (Do First)**
1. **Button** - Used everywhere, sets tone
2. **Card** - Container foundation 
3. **Badge** - Semantic feedback
4. **Input** - Form foundation
5. **Select** - Dropdown foundation

### **🥈 TIER 2: LAYOUT COMPONENTS (Do Second)**
6. **Navigation** - Site structure
7. **Header/Footer** - Site branding
8. **Sidebar** - Layout structure
9. **Breadcrumb** - Navigation aids
10. **Pagination** - Content organization

### **🥉 TIER 3: FEATURE COMPONENTS (Do Third)**
11. **Stats Showcase** - Data display
12. **Testimonial Carousel** - Social proof
13. **Gallery Showcase** - Visual content
14. **Feature Grid** - Product features
15. **Pricing Table** - Business conversion

### **🏅 TIER 4: SPECIALIZED COMPONENTS (Do Last)**
16. **Charts** - Data visualization
17. **Calendar** - Event management
18. **Forms** - Complex interactions
19. **Modals/Dialogs** - Overlays
20. **Advanced UI** - Complex patterns

---

## 🚀 **QUALITY ASSURANCE CHECKLIST**

### **✅ BEFORE COMPONENT MODIFICATION**
- [ ] Component file completely analyzed
- [ ] Existing variants documented
- [ ] Color usage patterns identified
- [ ] CVA structure confirmed
- [ ] Story file reviewed

### **✅ DURING MODIFICATION**
- [ ] Only TBGC 26-color palette used
- [ ] CVA pattern maintained
- [ ] Shadow hierarchy followed
- [ ] Typography hierarchy enforced
- [ ] Fire gradients added for premium variants
- [ ] Mica effects applied appropriately
- [ ] Component states integrated

### **✅ AFTER MODIFICATION**
- [ ] TypeScript compiles without errors
- [ ] Component renders in Storybook
- [ ] All variants work correctly
- [ ] Dark mode functions properly
- [ ] Responsive scaling verified
- [ ] Accessibility maintained (4.5:1 contrast)
- [ ] Animation performance acceptable

---

## 🎯 **BUSINESS CONTEXT INTEGRATION**

### **🏢 TBGC BRAND VALUES IN DESIGN**
- **Precision**: Clean, exact spacing and alignment
- **Heritage**: Brass/copper accents, traditional typography
- **Community**: Warm, welcoming color palette
- **Quality**: Premium materials (glass effects, shadows)
- **Safety**: Clear visual hierarchy, accessible contrast

### **👥 USER TYPES CONSIDERATION**
- **Heritage Enthusiasts (35-65)**: Premium/elite variants with brass/copper
- **Safety-Conscious Families (25-45)**: Clear, accessible default variants  
- **Premium Collectors (40-70)**: Glass effects and sophisticated animations

---

## 📖 **CONTEXT PRESERVATION PROTOCOLS**

### **🔄 SESSION HANDOFF REQUIREMENTS**
When starting a new AI session, ALWAYS:
1. **Read this document first** - Complete understanding required
2. **Review recent component changes** - Check git history
3. **Validate design system integrity** - Ensure no globals.css changes
4. **Continue systematic progression** - Follow tier priority order
5. **Document changes made** - Update component status

### **📝 CHANGE DOCUMENTATION**
For each component modified, document:
```markdown
## Component: ButtonName
- **Status**: ✅ Enhanced with TBGC Design System
- **Changes**: Added fire gradients, shadow hierarchy, responsive scaling
- **Variants**: default, premium, elite, fire, glass
- **Testing**: Storybook verified, dark mode tested
- **Date**: 2025-01-xx
```

### **🚫 NEVER BREAK THESE RULES**
1. Never modify globals.css or @theme
2. Never delete/remake components
3. Never use non-TBGC colors
4. Never break CVA patterns
5. Never ignore this document

---

## 🏆 **SUCCESS METRICS**

### **📊 COMPONENT COMPLETENESS**
- [ ] All Tier 1 components enhanced (5/5)
- [ ] All Tier 2 components enhanced (5/5)
- [ ] All Tier 3 components enhanced (5/5)
- [ ] All Tier 4 components enhanced (5/5)

### **🎨 DESIGN SYSTEM INTEGRATION**
- [ ] 100% TBGC color palette usage
- [ ] 0 hardcoded hex colors
- [ ] Fire gradients in all premium/elite variants
- [ ] Mica effects in appropriate components
- [ ] Stripe shadow hierarchy enforced

### **⚡ TECHNICAL EXCELLENCE**
- [ ] All TypeScript errors resolved
- [ ] All Storybook stories functional
- [ ] Dark mode perfect across all components
- [ ] Responsive scaling verified
- [ ] Performance optimized

---

## 🎯 **FINAL ACTIVATION PROTOCOL**

**This document is the single source of truth for TBGC design system application. Any AI assistant working on this project must:**

1. **Read this document completely** before making any changes
2. **Follow the 8-step methodology** exactly as written
3. **Apply the component-specific patterns** precisely
4. **Use the quality assurance checklist** for every modification
5. **Document all changes** for session continuity
6. **Never violate the absolute prohibitions**

**The 1,868-line design system is complete. Now it's time to apply it systematically to create the most cohesive, professional, and visually stunning component library in the firearms industry.**

🔥 **LET'S BUILD THE FUTURE OF TBGC TOGETHER** 🔥
