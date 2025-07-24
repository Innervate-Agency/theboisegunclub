# AI ENFORCEMENT CHECKLIST

**MANDATORY VALIDATION BEFORE ANY CODE CHANGES**

## 🚨 CRITICAL VIOLATIONS TO PREVENT

### **Design System Violations**

- [ ] **NO "premium/elite" without Leonard Yellow/Lahoma Orange gradients**
- [ ] **NO hardcoded hex colors** - Use ONLY the 26 approved colors from globals.css
- [ ] **NO generic "premium" styling** - Follow exact brand color system
- [ ] **NO right-aligned text** - Always left-align, use 50/50 div layouts instead
- [ ] **NO emojis in UI** - Use Lucide React icons only
- [ ] **NO outside images** - Only `/public/images/` directory files

### **APPROVED COLORS ONLY (26 total)**

**Primary:** `bg-leonard-yellow`, `bg-lahoma-orange`, `bg-rich-black`, `bg-pure-white`
**Light Theme:** `bg-cloudy-day-white`, `bg-overcast`, `bg-sand-dune-brown`, `bg-craters-of-the-moon`, `bg-desert-cliff-brown`, `bg-clay-pidgeon-orange`, `bg-gunclub-orange`, `bg-wildeye-susan-yellow`, `bg-idaho-sky-blue`, `bg-snake-river-blue`, `bg-owyhee-field-green`, `bg-boise-yard-green`, `bg-scoring-bench-red`
**Dark Theme:** `bg-kent-slate-gray`, `bg-ed-charcoal`, `bg-pidgeon-clay-gray`, `bg-chester-white`, `bg-don-gray`, `bg-jerry-orange`, `bg-abe-red`, `bg-clubhouse-roof-blue`, `bg-clubhouse-walk-gray`, `bg-clubhouse-lawn-green`
**Legacy:** `bg-brand-blue`, `bg-brand-green`, `bg-brand-red`

### **Typography Violations**

- [ ] **NO wrong fonts** - H1-H2: Rajdhani, H3-H6: Noto Sans, Editorial: Noto Serif
- [ ] **NO font-weight 800** - Maximum is 700 for Rajdhani
- [ ] **NO hardcoded font families** - Use CSS custom properties only

### **Technical Stack Violations**  

- [ ] **NO inline styles** - Use Tailwind v4 classes only
- [ ] **NO old Tailwind syntax** - `bg-leonard-yellow` NOT `bg-[var(--color-leonard-yellow)]`
- [ ] **NO !important hacks** - Proper CSS specificity only
- [ ] **NO hardcoded transitions** - Use `transition-fast` (150ms) or `transition-smooth` (300ms)

## ✅ MANDATORY CHECKLIST FOR ANY COMPONENT WORK

### **Before Starting:**

1. [ ] Read component's current implementation in `/src/components/ui/`
2. [ ] Check Storybook story for existing variants
3. [ ] Verify CSS variables exist in `globals.css` @theme
4. [ ] Confirm fonts available: Rajdhani, Noto Sans, Noto Serif

### **During Implementation:**

1. [ ] Use ONLY the 26 approved colors from globals.css (see list above)
2. [ ] Follow CVA pattern for variants (seen in existing components)
3. [ ] Use Tailwind v4 direct syntax: `bg-leonard-yellow/20` for opacity
4. [ ] Implement proper Server/Client component patterns
5. [ ] Add proper TypeScript interfaces
6. [ ] Primary focus: Leonard Yellow + Lahoma Orange for premium/elite variants

### **After Implementation:**

1. [ ] Verify no hardcoded colors in final code
2. [ ] Confirm typography follows H1-H2 (Rajdhani), H3-H6 (Noto Sans) rules
3. [ ] Test both light and dark themes
4. [ ] Validate accessibility (4.5:1 contrast minimum)
5. [ ] Check motion respects `prefers-reduced-motion`

## 🎯 APPROVED PATTERNS TO FOLLOW

### **Color Usage:**

```tsx
// ✅ CORRECT - Using approved 26-color palette
<div className="bg-leonard-yellow text-craters-of-the-moon">
<div className="border-lahoma-orange/30 bg-cloudy-day-white">
<div className="hover:bg-gunclub-orange transition-fast">
<div className="bg-kent-slate-gray text-chester-white">
<div className="border-idaho-sky-blue/50 bg-overcast">

// ❌ FORBIDDEN - All hardcoded colors
<div className="bg-[#F2CB05]">
<div className="bg-[var(--color-leonard-yellow)]">
<div style={{backgroundColor: '#F2CB05'}}>
<div className="bg-blue-500">
<div className="text-red-600">
```

### **Typography:**

```tsx
// ✅ CORRECT
<h1 className="font-heading font-bold">BOISE GUNCLUB</h1>
<h3 className="font-sans font-semibold">Section Header</h3>
<p className="font-sans">Body text content</p>

// ❌ FORBIDDEN
<h1 className="font-bold text-xl">Title</h1>
<h3 style={{fontFamily: 'Arial'}}>Header</h3>
```

### **Component Structure:**

```tsx
// ✅ CORRECT - Following established CVA pattern with approved colors
const buttonVariants = cva(
  "inline-flex items-center justify-center transition-stripe-fast",
  {
    variants: {
      variant: {
        default: "bg-leonard-yellow text-craters-of-the-moon hover:bg-lahoma-orange",
        premium: "bg-gradient-premium shadow-premium mica-premium",
        light: "bg-cloudy-day-white text-craters-of-the-moon border-desert-cliff-brown",
        dark: "bg-kent-slate-gray text-chester-white hover:bg-ed-charcoal"
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
      }
    }
  }
)
```

## 🛡️ ENFORCEMENT PROTOCOL

**Before making ANY changes:**

1. Ask user to confirm which specific component needs work
2. Read existing implementation first
3. Show planned approach using established patterns
4. Get explicit approval before proceeding

**If violating patterns:**

1. STOP immediately
2. Reference this checklist
3. Revise approach to follow established standards
4. Get user confirmation before continuing

**Never proceed if:**

- Using colors not in the brand system
- Breaking typography hierarchy  
- Adding inline styles
- Using deprecated Tailwind syntax
- Ignoring existing component patterns

This checklist exists because extensive documentation already exists - the problem is AI adherence, not missing information.
