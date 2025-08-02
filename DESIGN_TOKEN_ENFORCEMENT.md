# 🚫 DESIGN TOKEN ENFORCEMENT - ZERO TAILWIND DEFAULTS

## ❌ **ABSOLUTELY FORBIDDEN** 
**NEVER FUCKING EVER use default Tailwind classes:**

### **Spacing (FORBIDDEN)**
```css
/* ❌ BANNED - Default Tailwind */
gap-8, p-4, m-6, space-y-4, py-8, px-6

/* ✅ REQUIRED - globals.css tokens */
gap-[var(--space-lg)]      /* 32px */
p-[var(--card-padding)]    /* 24px */  
m-[var(--space-md)]        /* 24px */
space-y-[var(--space-base)] /* 16px */
```

### **Typography (FORBIDDEN)**
```css
/* ❌ BANNED - Default Tailwind */
text-lg, text-xl, text-2xl, leading-6

/* ✅ REQUIRED - globals.css tokens */
text-[var(--text-lg)]      /* 18px */
text-[var(--text-xl)]      /* 20px */
leading-[var(--leading-normal)] /* 1.5 */
```

### **Colors (FORBIDDEN)**
```css
/* ❌ BANNED - Default Tailwind */
bg-blue-500, text-gray-600, border-red-400

/* ✅ REQUIRED - globals.css tokens */
bg-ayu-blue, text-case-hardened, border-copper-orange
```

### **Shadows (FORBIDDEN)**
```css
/* ❌ BANNED - Default Tailwind */
shadow-lg, shadow-xl, drop-shadow-md

/* ✅ REQUIRED - globals.css tokens */
shadow-[var(--shadow-lg)]
shadow-[var(--shadow-premium)]
```

## ✅ **COMPONENT TYPE PATTERNS**

### **🃏 Card Components**
```tsx
const cardVariants = cva(
  // Base using design tokens ONLY
  "rounded-[var(--radius-lg)] p-[var(--card-padding)] bg-card text-card-foreground border border-border",
  {
    variants: {
      variant: {
        default: "shadow-[var(--shadow-sm)]",
        premium: "shadow-[var(--shadow-premium)] border-copper-orange/20",
        elite: "shadow-[var(--shadow-elite)] border-brass-yellow/20"
      },
      spacing: {
        tight: "p-[var(--space-sm)]",     /* 12px */
        normal: "p-[var(--card-padding)]", /* 24px */
        loose: "p-[var(--space-lg)]"      /* 32px */
      }
    }
  }
)
```

### **🔲 Button Components**
```tsx
const buttonVariants = cva(
  // Base using design tokens ONLY
  "inline-flex items-center justify-center rounded-[var(--radius-base)] font-medium transition-all duration-[var(--timing-fast)]",
  {
    variants: {
      size: {
        sm: "h-[var(--button-height-sm)] px-[var(--space-sm)] text-[var(--button-text-sm)]",      /* 32px, 12px, 12px */
        default: "h-[var(--button-height-base)] px-[var(--space-base)] text-[var(--button-text-base)]", /* 40px, 16px, 14px */
        lg: "h-[var(--button-height-lg)] px-[var(--space-md)] text-[var(--button-text-lg)]"      /* 48px, 24px, 16px */
      }
    }
  }
)
```

### **📝 Input Components**
```tsx
const inputVariants = cva(
  // Base using design tokens ONLY
  "flex w-full rounded-[var(--radius-base)] border border-border bg-background px-[var(--space-sm)] text-[var(--text-sm)] transition-colors duration-[var(--timing-fast)]",
  {
    variants: {
      size: {
        sm: "h-[var(--input-height-sm)]",     /* 32px */
        default: "h-[var(--input-height-base)]", /* 40px */
        lg: "h-[var(--input-height-lg)]"     /* 48px */
      }
    }
  }
)
```

### **🏷️ Badge Components**
```tsx
const badgeVariants = cva(
  // Base using design tokens ONLY
  "inline-flex items-center rounded-[var(--radius-sm)] font-medium transition-colors duration-[var(--timing-fast)]",
  {
    variants: {
      size: {
        sm: "h-[var(--badge-height-sm)] px-[var(--badge-padding-x-sm)] text-[var(--text-xs)]",     /* 20px, 8px, 12px */
        default: "h-[var(--badge-height-base)] px-[var(--badge-padding-x-base)] text-[var(--text-xs)]", /* 24px, 12px, 12px */
        lg: "h-[var(--badge-height-lg)] px-[var(--badge-padding-x-lg)] text-[var(--text-sm)]"     /* 32px, 16px, 14px */
      }
    }
  }
)
```

## 🏗️ **SYSTEMATIC APPLICATION RULES**

### **1. Spacing Hierarchy**
```tsx
// ✅ Container spacing
className="p-[var(--space-4xl)]"          // Page containers (128px)
className="p-[var(--space-3xl)]"          // Hero sections (96px)  
className="p-[var(--space-2xl)]"          // Major sections (64px)
className="p-[var(--space-xl)]"           // Large sections (48px)
className="p-[var(--space-lg)]"           // Section spacing (32px)
className="p-[var(--card-padding)]"       // Card padding (24px)
className="p-[var(--space-base)]"         // Standard spacing (16px)
className="p-[var(--space-sm)]"           // Compact elements (12px)
```

### **2. Gap Hierarchy**
```tsx
// ✅ Grid/flex gaps using design tokens
className="gap-[var(--space-4xl)]"        // Page sections (128px)
className="gap-[var(--space-2xl)]"        // Card grids (64px)
className="gap-[var(--space-xl)]"         // Component groups (48px)
className="gap-[var(--space-lg)]"         // Related elements (32px)
className="gap-[var(--space-md)]"         // Form elements (24px)
className="gap-[var(--space-base)]"       // Button groups (16px)
className="gap-[var(--space-sm)]"         // Inline elements (12px)
```

### **3. Typography Hierarchy**
```tsx
// ✅ Text sizing using design tokens
className="text-[var(--text-6xl)]"        // Hero titles (60px)
className="text-[var(--text-4xl)]"        // Page titles (36px)
className="text-[var(--text-2xl)]"        // Section titles (24px)
className="text-[var(--card-title-size)]" // Card titles (18px)
className="text-[var(--text-base)]"       // Body text (16px)
className="text-[var(--card-body-size)]"  // Card body (14px)
className="text-[var(--card-caption-size)]" // Captions (12px)
```

## 🔧 **ENFORCEMENT CHECKLIST**

Before ANY component edit:
- [ ] Replace ALL `gap-*` with `gap-[var(--space-*)]`
- [ ] Replace ALL `p-*` with `p-[var(--space-*)]` or component tokens
- [ ] Replace ALL `text-*` with `text-[var(--text-*)]`
- [ ] Replace ALL `shadow-*` with `shadow-[var(--shadow-*)]`
- [ ] Replace ALL default colors with TBGC palette colors
- [ ] Use component-specific tokens (`--card-padding`, `--button-height-base`)

## 🎯 **COMPONENT ENHANCEMENT FORMULA**

1. **Read existing component**
2. **Identify component type** (Card, Button, Input, Badge, etc.)
3. **Apply corresponding pattern from above**
4. **Replace ALL Tailwind defaults with globals.css tokens**
5. **Test in Storybook**
6. **Verify no hardcoded values remain**

**This framework makes each component take 10 minutes instead of 1 hour.**