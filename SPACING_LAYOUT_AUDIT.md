# Spacing & Layout Improvement Plan

## 🔍 Current Issues

### Inconsistent Spacing Values
- ❌ Using arbitrary values (py-20, gap-8, pt-10, pt-8)
- ❌ Not using Figma semantic tokens (sm, md, lg, xl, 2xl, 3xl)
- ❌ Old "8px scale" values still in use
- ❌ No consistent section spacing

### Typography Spacing
- ❌ Using arbitrary text sizes (text-5xl, text-xl) instead of Figma tokens
- ❌ Headings not using h1-h6 classes
- ❌ Body text not using body-sm/md/lg classes

### Components to Fix
1. **Hero Section** - Using old spacing values
2. **Features Section** - Needs Figma spacing
3. **CTA Section** - Needs consistent spacing
4. **Header** - Update to semantic spacing
5. **Footer** - Update to semantic spacing

## 🎯 Spacing Guidelines (From Figma Tokens)

### Section Spacing (Vertical)
- **Small sections**: `py-2xl` (48px)
- **Medium sections**: `py-3xl` (64px)
- **Large sections**: `py-3xl` to larger custom values
- **Section gaps**: `space-y-2xl` or `space-y-3xl`

### Content Spacing (Within sections)
- **Tight**: `space-y-sm` (12px)
- **Normal**: `space-y-md` (16px)
- **Loose**: `space-y-lg` (24px)
- **Very loose**: `space-y-xl` (32px)

### Component Spacing
- **Buttons**: `gap-md` (16px) between buttons
- **Cards**: `gap-lg` (24px) between cards
- **Form elements**: `space-y-md` (16px)

## ✅ Improvement Checklist

### Typography
- [ ] Update all headings to use `text-h1` through `text-h6`
- [ ] Update body text to use `text-body-sm`, `text-body-md`, `text-body-lg`
- [ ] Ensure headings have `font-heading` class
- [ ] Ensure body has `font-body` class

### Spacing
- [ ] Replace `py-20` with `py-2xl` or `py-3xl`
- [ ] Replace `gap-4`, `gap-6`, `gap-8` with `gap-md`, `gap-lg`, `gap-xl`
- [ ] Replace `space-y-8`, `space-y-10` with `space-y-lg`, `space-y-xl`
- [ ] Replace `pt-10`, `pt-8` with `pt-xl`, `pt-lg`
- [ ] Use consistent section spacing throughout

### Border Radius
- [ ] Update cards to use `rounded-xl` or `rounded-2xl`
- [ ] Ensure buttons use `rounded-round` (52px)
- [ ] Update images to use appropriate Figma radius values

### Responsive Design
- [ ] Review mobile spacing (may need tighter spacing)
- [ ] Ensure touch targets are adequate (min 44px)
- [ ] Test on different screen sizes

## 🚀 Implementation Order

1. **Hero Section** - Most visible, fix first
2. **Features Section** - Main content area
3. **CTA Section** - Important for conversions
4. **Header & Footer** - Site-wide consistency
5. **Other sections** - Testimonials, Pricing

## 📊 Target Spacing Values

### Vertical Spacing
```jsx
// Section padding
<section className="py-3xl">  // 64px top/bottom

// Content spacing
<div className="space-y-xl">  // 32px between elements

// Tight spacing
<div className="space-y-md">  // 16px between elements
```

### Horizontal Spacing
```jsx
// Button groups
<div className="gap-md">      // 16px gap

// Card grids
<div className="gap-lg">      // 24px gap
```

### Container Widths
```jsx
// Hero content
<div className="max-w-4xl">  // ~896px

// Body content
<div className="max-w-3xl">  // ~768px

// Wide content
<div className="max-w-6xl">  // ~1152px
```

## 🎨 Design Principles

1. **Consistency**: Use semantic tokens everywhere
2. **Rhythm**: Establish visual rhythm with consistent spacing
3. **Hierarchy**: Larger spacing = more important separation
4. **Breathing Room**: Don't be afraid of whitespace
5. **Mobile First**: Consider mobile spacing first, then scale up

## 📝 Notes

- Figma spacing tokens are: 2, 4, 8, 12, 16, 24, 32, 48, 64px
- Semantic names: 3xs, 2xs, xs, sm, md, lg, xl, 2xl, 3xl
- Always prefer semantic names over numeric values
- Typography sizes should match Figma exactly
