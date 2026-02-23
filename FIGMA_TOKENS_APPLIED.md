# Figma Design Tokens Applied

## 🎨 Color System from Figma Tokens

### Primary Colors (Purple)
Based on your Figma `primary` and `colorPurple` tokens:

| Token | Tailwind | Hex | Usage |
|-------|----------|-----|-------|
| colorPurple100 | primary-100 | `#f6eeff` | Light backgrounds |
| colorPurple200 | primary-200 | `#cea6ff` | Hover states |
| colorPurple300 | primary-300 | `#c290ff` | Borders, dividers |
| colorPurple400 | primary-400 | `#b67aff` | Disabled states |
| **primaryDefault** | **primary-500** | **`#a259fb`** | **Main brand color** |
| primary600 | primary-600 | `#9137ff` | Hover, active states |
| primary700 | primary-700 | `#7216e3` | Pressed states |
| primary800 | primary-800 | `#5200b7` | Dark accents |

### Secondary Colors (Pink/Magenta)
Based on your Figma `secondary` and `colorPink` tokens:

| Token | Tailwind | Hex | Usage |
|-------|----------|-----|-------|
| secondary100 | secondary-100 | `#fee5ff` | Light backgrounds |
| secondary200 | secondary-200 | `#febfff` | Hover states |
| secondary300 | secondary-300 | `#fc80ff` | Borders |
| secondary400 | secondary-400 | `#fb40ff` | Highlights |
| **secondaryDefault** | **secondary-500** | **`#fa00ff`** | **Secondary brand** |
| secondary600 | secondary-600 | `#bb00bf` | Active states |
| secondary700 | secondary-700 | `#7d0080` | Pressed states |
| secondary800 | secondary-800 | `#3e0040` | Dark accents |

### Neutral/Grey Scale
Based on your Figma `neutral` and `colorGrey` tokens:

| Token | Tailwind | Hex | Usage |
|-------|----------|-----|-------|
| neutralWhite | neutral-50 | `#fdfdfd` | Page background |
| neutral100 | neutral-100 | `#ecedee` | Cards, surfaces |
| neutral200 | neutral-200 | `#d0d1d4` | Borders |
| neutral300 | neutral-300 | `#a1a4aa` | Dividers |
| neutral400 | neutral-400 | `#737780` | Disabled text |
| **neutralDefault** | **neutral-500** | **`#444955`** | **Body text** |
| neutral600 | neutral-600 | `#333740` | Headings |
| neutral700 | neutral-700 | `#22252b` | Dark headings |
| neutral800 | neutral-800 | `#111215` | Almost black |
| neutralBlack | neutral-900 | `#030303` | Pure black |

### Semantic Colors

#### Success (Green)
| Tailwind | Hex |
|----------|-----|
| success-100 | `#e7f6e5` |
| success-500 | `#0da500` ← Default |
| success-800 | `#074302` |

#### Error (Red)
| Tailwind | Hex |
|----------|-----|
| error-100 | `#ffe5e5` |
| error-500 | `#ff0000` ← Default |
| error-800 | `#400000` |

#### Warning (Orange)
| Tailwind | Hex |
|----------|-----|
| warning-100 | `#fff0e5` |
| warning-500 | `#ff6b00` ← Default |
| warning-800 | `#401b00` |

#### Information (Blue)
| Tailwind | Hex |
|----------|-----|
| info-100 | `#e5e7ff` |
| info-500 | `#000aff` ← Default |
| info-800 | `#000340` |

## 🎯 Mapped Tokens (Semantic Usage)

Based on your Figma `mapped` tokens, here's how colors are used semantically:

### Text Colors
```css
textHeadings:     #22252b (neutral-700)
textBody:         #333740 (neutral-600)
textAction:       #a259fb (primary-500)
textActionHover:  #9137ff (primary-600)
textDisabled:     #737780 (neutral-400)
textOnAction:     #fdfdfd (neutral-50)
```

### Surface/Background Colors
```css
surfacePage:         #fdfdfd (neutral-50)
surfaceAction:       #a259fb (primary-500)
surfaceActionHover:  #9137ff (primary-600)
surfaceDisabled:     #ecedee (neutral-100)
surfaceSuccess:      #e7f6e5 (success-100)
surfaceError:        #ffe5e5 (error-100)
surfaceWarning:      #fff0e5 (warning-100)
```

### Border Colors
```css
borderPrimary:     #d0d1d4 (neutral-200)
borderAction:      #a259fb (primary-500)
borderFocus:       #a259fb (primary-500)
borderDisabled:    #a1a4aa (neutral-300)
```

### Icon Colors
```css
iconPrimary:      #737780 (neutral-400)
iconAction:       #a259fb (primary-500)
iconOnAction:     #fdfdfd (neutral-50)
iconSuccess:      #0da500 (success-500)
iconError:        #ff0000 (error-500)
```

## 🎨 Applied Gradients

### Primary Gradient (Purple to Pink)
```css
.gradient-calm
background: linear-gradient(135deg, #a259fb 0%, #fa00ff 100%)
```

### Soft Gradient (Background)
```css
.gradient-calm-soft
background: linear-gradient(180deg, #f6eeff 0%, #fdfdfd 100%)
```

### Hero Gradient (Overlay)
```css
.gradient-hero
background: linear-gradient(135deg, rgba(162, 89, 251, 0.85) 0%, rgba(250, 0, 255, 0.85) 100%)
```

### Text Gradient
```css
.gradient-text
from-primary-500 via-primary-600 to-secondary-500
```

## 🔧 Tailwind Usage Examples

```jsx
// Primary button with gradient
<button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
  Click me
</button>

// Text with brand color
<h1 className="text-primary-500">Heading</h1>

// Card with border
<div className="border-2 border-neutral-200 bg-neutral-50">
  Card content
</div>

// Success message
<div className="bg-success-100 text-success-500 border border-success-500">
  Success!
</div>

// Error state
<input className="border-error-500 text-error-500" />

// Disabled state
<button className="bg-neutral-100 text-neutral-400 cursor-not-allowed">
  Disabled
</button>
```

## ✅ Components Updated

All components now use the Figma design tokens:
- ✅ Buttons (primary gradient: purple to pink)
- ✅ Hero section (purple/pink gradient overlay)
- ✅ Headers and text (neutral scale)
- ✅ Cards and surfaces (neutral backgrounds)
- ✅ Borders and dividers (neutral-200)
- ✅ Shadows (purple accent glow)
- ✅ Scrollbar (purple)

## 🚀 Next Steps

1. Review colors in the browser at http://localhost:3000/
2. Adjust any component-specific colors if needed
3. Add success/error/warning states to forms
4. Implement focus states using `borderFocus` color
5. Consider adding dark mode using the darker token variants
