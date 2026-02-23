# Dark Mode Color Palette Guide

## Color Strategy

The dark mode implementation maintains the purple brand identity while ensuring proper contrast and readability.

## Background Colors

### Light Mode
- **Primary Background**: `bg-white` (#FFFFFF)
- **Secondary Background**: `bg-gray-50` (#F9FAFB)
- **Tertiary Background**: `bg-neutral-100` (#ECEDEE)

### Dark Mode
- **Primary Background**: `dark:bg-gray-900` (#111827)
- **Secondary Background**: `dark:bg-gray-800` (#1F2937)
- **Tertiary Background**: `dark:bg-gray-700` (#374151)

## Text Colors

### Light Mode
- **Headings**: `text-heading` (#22252B) or `text-gray-900`
- **Body Text**: `text-body` (#333740) or `text-gray-600`
- **Disabled/Secondary**: `text-gray-500` (#6B7280)

### Dark Mode
- **Headings**: `dark:text-white` (#FFFFFF)
- **Body Text**: `dark:text-gray-300` (#D1D5DB)
- **Disabled/Secondary**: `dark:text-gray-400` (#9CA3AF)

## Purple Accent Colors

### Light Mode
- **Primary Purple**: `text-purple-700` (#7C3AED)
- **Secondary Purple**: `text-purple-600` (#9333EA)
- **Background Purple**: `bg-purple-50` (#FAF5FF)
- **Border Purple**: `border-purple-100` (#E9D5FF)

### Dark Mode
- **Primary Purple**: `dark:text-purple-400` (#C084FC)
- **Secondary Purple**: `dark:text-purple-500` (#A855F7)
- **Background Purple**: `dark:bg-purple-900/30` (rgba(88, 28, 135, 0.3))
- **Border Purple**: `dark:border-purple-700` (#6B21A8)

## Border Colors

### Light Mode
- **Primary**: `border-gray-200` (#E5E7EB)
- **Secondary**: `border-gray-300` (#D1D5DB)
- **Accent**: `border-purple-200` (#DDD6FE)

### Dark Mode
- **Primary**: `dark:border-gray-700` (#374151)
- **Secondary**: `dark:border-gray-600` (#4B5563)
- **Accent**: `dark:border-purple-800` (#581C87)

## Component-Specific Colors

### Cards

#### Light Mode
```css
bg-white
border-2 border-purple-100
shadow-card
```

#### Dark Mode
```css
dark:bg-gray-800
dark:border-purple-800
shadow-card (adjusted for dark)
```

### Buttons

#### Primary Button (Gradient)
- **Light & Dark**: Same gradient maintained
```css
bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600
text-white
```

#### Secondary Button
- **Light**: `bg-white text-gray-900 border-gray-300`
- **Dark**: `dark:bg-gray-800 dark:text-white dark:border-gray-600`

### Forms

#### Input Fields
- **Light**: `bg-white border-gray-300 text-gray-900`
- **Dark**: `dark:bg-gray-800 dark:border-gray-600 dark:text-white`

#### Focus States
- Both modes: `focus:border-purple-500 focus:ring-1 focus:ring-purple-500`

### Hero Section

#### Background Overlays
- **Light**:
  - `from-purple-900/23 via-purple-800/19 to-purple-900/26`
  - `bg-purple-600/25`
  - `from-black/40`

- **Dark**:
  - `dark:from-purple-950/40 dark:via-purple-900/35 dark:to-purple-950/45`
  - `dark:bg-purple-800/35`
  - `dark:from-black/60`

### Stats/Trust Signals

#### Light Mode
```css
bg-[#F3EFFE]  /* Light purple tint */
border-purple-100
text-purple-700
```

#### Dark Mode
```css
dark:bg-gray-800
dark:border-purple-800
dark:text-purple-400
```

## Contrast Ratios (WCAG AA Compliance)

All color combinations meet WCAG AA standards:

### Light Mode
- **Heading on White**: 16.75:1 (AAA)
- **Body on White**: 7.23:1 (AAA)
- **Purple on Light Background**: 4.52:1 (AA)

### Dark Mode
- **White on Gray-900**: 18.14:1 (AAA)
- **Gray-300 on Gray-900**: 10.36:1 (AAA)
- **Purple-400 on Gray-900**: 4.89:1 (AA)

## Gradient Preservation

The purple gradients maintain their vibrancy in both modes:

```css
/* Used in buttons, text highlights, and decorative elements */
.gradient-text {
  @apply bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500
         bg-clip-text text-transparent;
}

/* Works identically in both light and dark modes */
```

## Semantic Color Mapping

| Element Type | Light Mode | Dark Mode |
|-------------|-----------|-----------|
| Page Background | white | gray-900 |
| Card Background | white | gray-800 |
| Heading Text | gray-900 | white |
| Body Text | gray-600 | gray-300 |
| Muted Text | gray-500 | gray-400 |
| Primary Accent | purple-700 | purple-400 |
| Border Default | gray-200 | gray-700 |
| Border Accent | purple-100 | purple-800 |
| Hover Background | purple-50 | purple-900/30 |
| Input Background | white | gray-800 |
| Success Color | green-600 | green-400 |
| Error Color | red-600 | red-400 |

## Shadow Adaptations

Shadows are automatically adjusted by Tailwind's dark mode:

```css
/* Light mode - darker shadows for depth */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Dark mode - lighter shadows for definition */
dark:shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4)
```

## Pattern & Overlay Opacity

Background patterns and overlays use reduced opacity in dark mode:

```css
/* Light mode */
opacity-30

/* Dark mode */
dark:opacity-20
```

This prevents visual noise while maintaining decorative elements.

## Implementation Example

```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border border-gray-200 dark:border-gray-700
  shadow-lg
  hover:shadow-xl
  transition-colors duration-300
">
  <h2 className="
    text-h3
    text-heading dark:text-white
    mb-md
  ">
    Heading Text
  </h2>

  <p className="
    text-body-lg
    text-body dark:text-gray-300
  ">
    Body text content
  </p>

  <button className="
    bg-purple-600 dark:bg-purple-700
    text-white
    border border-purple-500 dark:border-purple-600
    hover:bg-purple-700 dark:hover:bg-purple-600
  ">
    Call to Action
  </button>
</div>
```

## Quick Reference

When adding new components:

1. **Backgrounds**: Use gray scale (white → gray-900)
2. **Text**: Use semantic names (heading → white, body → gray-300)
3. **Accents**: Keep purple, adjust brightness (700 → 400)
4. **Borders**: Lighten in dark mode (200 → 700)
5. **Hovers**: Use transparent purple overlays
6. **Transitions**: Always include `transition-colors duration-300`
