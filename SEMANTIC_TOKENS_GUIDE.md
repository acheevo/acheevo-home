# Semantic Design Tokens - Usage Guide

## ✅ All Figma "Mapped" Tokens Implemented

Your Figma design tokens have been fully implemented with semantic naming for proper design system adherence.

## 🎨 Semantic Token Categories

### Text Colors
Use these semantic text utilities instead of arbitrary colors:

| Utility Class | Figma Token | Color | Usage |
|--------------|-------------|-------|-------|
| `text-heading` | textHeadings | `#22252b` | All headings (h1-h6) |
| `text-body` | textBody | `#333740` | Body text, paragraphs |
| `text-action` | textAction | `#a259fb` | Interactive text, links |
| `text-action-hover` | textActionHover | `#9137ff` | Hover state for links |
| `text-disabled` | textDisabled | `#737780` | Disabled text |
| `text-info` | textInformation | `#000aff` | Info messages |
| `text-success` | textSuccess | `#0da500` | Success messages |
| `text-warning` | textWarning | `#ff6b00` | Warning messages |
| `text-error` | textError | `#ff0000` | Error messages |
| `text-on-action` | textOnAction | `#fdfdfd` | Text on action buttons |
| `text-on-disabled` | textOnDisabled | `#22252b` | Text on disabled elements |

**Examples:**
```jsx
<h1 className="text-heading">Heading</h1>
<p className="text-body">Body text</p>
<a className="text-action hover:text-action-hover">Link</a>
<span className="text-disabled">Disabled</span>
<p className="text-error">Error message</p>
```

### Background/Surface Colors
Use these semantic background utilities:

| Utility Class | Figma Token | Color | Usage |
|--------------|-------------|-------|-------|
| `bg-page` | surfacePage | `#fdfdfd` | Page background |
| `bg-surface` | surfacePrimary | `#fdfdfd` | Cards, containers |
| `bg-action` | surfaceAction | `#a259fb` | Primary action buttons |
| `bg-action-hover` | surfaceActionHover | `#9137ff` | Action hover state |
| `bg-action-hover-2` | surfaceActionHover2 | `#f6eeff` | Subtle hover |
| `bg-disabled` | surfaceDisabled | `#ecedee` | Disabled backgrounds |
| `bg-disabled-selected` | surfaceDisabledSelected | `#737780` | Disabled selected |
| `bg-success` | surfaceSuccess | `#e7f6e5` | Success backgrounds |
| `bg-error` | surfaceError | `#ffe5e5` | Error backgrounds |
| `bg-warning` | surfaceWarning | `#fff0e5` | Warning backgrounds |
| `bg-info` | surfaceInformation | `#e5e7ff` | Info backgrounds |

**Examples:**
```jsx
<body className="bg-page">...</body>
<div className="bg-surface">Card</div>
<button className="bg-action hover:bg-action-hover">CTA</button>
<div className="bg-error text-error">Error box</div>
<div className="bg-success text-success">Success box</div>
```

### Border Colors
Use these semantic border utilities:

| Utility Class | Figma Token | Color | Usage |
|--------------|-------------|-------|-------|
| `border-primary` | borderPrimary | `#d0d1d4` | Default borders |
| `border-secondary` | borderSecondary | `#a259fb` | Secondary borders |
| `border-action` | borderAction | `#a259fb` | Action borders |
| `border-action-hover` | borderActionHover | `#9137ff` | Action hover |
| `border-focus` | borderFocus | `#a259fb` | Focus state |
| `border-disabled` | borderDisabled | `#a1a4aa` | Disabled borders |
| `border-error` | borderError | `#ff0000` | Error borders |
| `border-success` | borderSuccess | `#0da500` | Success borders |
| `border-warning` | borderWarning | `#ff6b00` | Warning borders |
| `border-info` | borderInformation | `#000aff` | Info borders |

**Examples:**
```jsx
<div className="border-2 border-primary">Default border</div>
<input className="border border-focus focus:border-focus" />
<div className="border border-error">Error state</div>
<button className="border-2 border-action hover:border-action-hover">Button</button>
```

### Icon Colors
Icons should use semantic colors from the text utilities:

```jsx
// Primary icons
<Icon className="text-[#737780]" /> // iconPrimary

// Action icons
<Icon className="text-action" /> // iconAction
<Icon className="text-action-hover" /> // iconActionHover

// Semantic icons
<Icon className="text-info" /> // iconInformation
<Icon className="text-success" /> // iconSuccess
<Icon className="text-warning" /> // iconWarning
<Icon className="text-error" /> // iconError

// On colored backgrounds
<Icon className="text-on-action" /> // iconOnAction
```

## 🔧 Component Usage

### Buttons (Using Semantic Tokens)
```jsx
// Primary action button
<Button variant="primary">
  // Uses: bg-action, hover:bg-action-hover, text-on-action
</Button>

// Secondary button
<Button variant="secondary">
  // Uses: bg-surface, border-primary, text-body
</Button>

// Outline button
<Button variant="outline">
  // Uses: border-primary, text-action, hover:bg-action-hover-2
</Button>

// Ghost button
<Button variant="ghost">
  // Uses: hover:bg-action-hover-2, text-body
</Button>
```

### Cards
```jsx
<div className="bg-surface border border-primary rounded-3xl p-8">
  <h3 className="text-heading">Card Title</h3>
  <p className="text-body">Card content</p>
</div>
```

### Forms
```jsx
// Normal input
<input className="border border-primary focus:border-focus text-body" />

// Error state
<input className="border border-error text-error" />

// Success state
<input className="border border-success text-success" />

// Disabled state
<input className="bg-disabled text-disabled border-disabled" disabled />
```

### Alerts/Messages
```jsx
// Success
<div className="bg-success border border-success p-4 rounded-lg">
  <p className="text-success">Success message</p>
</div>

// Error
<div className="bg-error border border-error p-4 rounded-lg">
  <p className="text-error">Error message</p>
</div>

// Warning
<div className="bg-warning border border-warning p-4 rounded-lg">
  <p className="text-warning">Warning message</p>
</div>

// Info
<div className="bg-info border border-info p-4 rounded-lg">
  <p className="text-info">Info message</p>
</div>
```

## ✅ Design System Compliance

All components now use semantic tokens:
- ✅ **Body**: Uses `bg-page` and `text-body`
- ✅ **Headings**: All h1-h6 use `text-heading`
- ✅ **Buttons**: Use `bg-action`, `text-on-action`, `border-action`
- ✅ **Forms**: Use `border-primary`, `border-focus`
- ✅ **Cards**: Use `bg-surface`, `border-primary`

## 🚀 Benefits

1. **Consistency**: All colors come from Figma design system
2. **Maintainability**: Change one token, update everywhere
3. **Semantic Meaning**: Classes describe purpose, not appearance
4. **Design System Adherence**: Enforces proper token usage
5. **Type Safety**: IDE autocomplete for semantic classes

## 📝 Migration Guide

### Before (Arbitrary Colors)
```jsx
<button className="bg-[#a259fb] text-white">Click me</button>
<p className="text-[#333740]">Some text</p>
```

### After (Semantic Tokens)
```jsx
<button className="bg-action text-on-action">Click me</button>
<p className="text-body">Some text</p>
```

## 🎯 Next Steps

1. ✅ All Figma mapped tokens are implemented
2. Review components to ensure semantic token usage
3. Add hover/focus states using semantic tokens
4. Consider adding dark mode variants to tokens
5. Document any custom component-specific token usage
