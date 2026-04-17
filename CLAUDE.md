# Claude Development Context

This file contains important context for Claude when working on this project.

## Project Overview

Acheevo is a purpose-discovery product landing page. The proposition: users discover their professional and personal purpose through 8 structured AI conversations. The site is a React SPA — a single landing page with auxiliary legal/about routes.

## Technology Stack

- **React 18** with TypeScript
- **Vite** as the build tool and development server (port 3000)
- **Tailwind CSS** — fully customised token-based design system (see below)
- **React Router v6** for client-side routing
- **GSAP** for animations (currently used in HowItWorks)
- **Lucide React** for icons
- **ESLint** for code linting
- **Docker** for containerisation
- **GitHub Actions** for CI/CD

## Key Commands

- `npm run dev` — Start development server (port 3000)
- `npm run build` — Production build
- `npm run type-check` — TypeScript checking
- `npm run lint` — ESLint

## Project Structure

```
src/
├── assets/              # Images and SVG files (avatars, arrows)
├── components/
│   ├── ui/              # Button, Container, ScrollReveal, CookieConsent, ErrorBoundary
│   ├── layout/          # Header, Footer
│   └── sections/        # One file per landing page section (see below)
├── contexts/            # DarkModeContext
├── pages/               # Home, About, PrivacyPolicy, TermsOfService, CookiePolicy
├── config/              # App configuration
├── utils/               # cn() for className merging
└── types/               # TypeScript type definitions
```

## Routes

| Path | Component |
|---|---|
| `/` | Home (all sections) |
| `/about` | About |
| `/privacy` | PrivacyPolicy |
| `/terms` | TermsOfService |
| `/cookies` | CookiePolicy |

## Landing Page Sections (in render order)

| Component | Description |
|---|---|
| `Hero` | Full-bleed image, headline, primary CTA |
| `HowItWorks` | Interactive MacBook mockup + 3 step callouts with GSAP, auto-cycles 4.5s |
| `WhatYouGet` | 3 output cards (Core Strengths, Impact Statement, Next Steps) |
| `WhoThisIsFor` | Carousel of recognition statements, auto-cycles 4.5s |
| `Testimonials` | Single-card carousel with real avatars, auto-cycles 8s |
| `TrustSignals` | Stats and trust indicators |
| `Pricing` | Two pricing cards (Beta free / After Beta €15) |
| `FAQ` | Two-column interactive FAQ, auto-cycles 15s |
| `CTA` | Full-width gradient banner before footer |

## Design System — Critical Rules

### Spacing Scale (NOT Tailwind defaults)
Custom tokens override all numeric spacing. Always use named tokens:

| Token | Value |
|---|---|
| `3xs` | 2px |
| `2xs` | 4px |
| `xs` | 8px |
| `sm` | 12px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |

> ⚠️ `w-12` renders as **12px**, not 48px. Use `style={{ width: '48px' }}` for fixed pixel sizes.

### Typography Scale

| Token | Size | Line Height |
|---|---|---|
| `body-xs` | 10px | 16px |
| `body-sm` | 12px | 20px |
| `body-md` | 16px | 24px |
| `body-lg` | 20px | 32px |
| `body-xl` | 24px | 36px |
| `h6` | 20px | 24px |
| `h5` | 24px | 28px |
| `h4` | 32px | 40px |
| `h3` | 40px | 48px |
| `h2` | 48px | 56px |
| `h1` | 60px | 72px |
| `display` | 72px | 84px |

### Colour Palette (key values)

**Primary (purple)**
- `primary-400` — #b67aff (light, dark-mode accents)
- `primary-500` — #a259fb (default)
- `primary-700` — #7216e3 (brand solid colour, used on titles)
- `primary-800` — #5200b7
- `primary-900` — #22252b

**Neutral**
- `neutral-50` — #fdfdfd
- `neutral-500` — #444955 (default text secondary)
- `neutral-800` — #111215
- `neutral-900` — #030303 (footer background)

**Note:** `bg-success` = `#e7f6e5` (light tint). For solid green use `bg-success-500`.

### Brand Gradient (CTA banner, buttons)
```
bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900
dark:from-primary-800 dark:via-primary-900 dark:to-primary-900
```

### Section Heading Colour Pattern
Brand-accented words in headings use `text-primary-700 dark:text-primary-400` (solid, no gradient).

### Standard Section Padding
```
px-md md:px-[80px] py-2xl md:py-[120px]
```

### Card Style Pattern
```jsx
style={{
  border: '1.5px solid rgba(162,89,251,0.25)',
  boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)'
}}
```

## Component Patterns

### ScrollReveal
Wraps content with IntersectionObserver-based animations. Respects `prefers-reduced-motion`.
```tsx
<ScrollReveal animation="slide-up" delay={100}>
  ...
</ScrollReveal>
```
Animations: `slide-up`, `slide-down`, `slide-left`, `slide-right`, `fade-in`, `scale-in`

### Auto-cycling carousels
Pattern used in WhoThisIsFor, Testimonials, FAQ, HowItWorks:
- `setInterval` for auto-advance
- `useRef` to track current index without stale closures
- Fade transition via `FADE_MS` constant (220–300ms depending on component)
- Timer resets on manual interaction

### Avatar images
Fixed pixel sizes via inline `style={{ width: '48px', height: '48px' }}` — Tailwind numeric sizing is unreliable due to custom spacing scale.

## Accessibility

- WCAG 2.1 AA target, AAA where feasible
- Skip-to-main-content link in `App.tsx` (keyboard-only visible)
- All interactive carousels have `aria-live="polite"` on content regions
- Navigation buttons have descriptive `aria-label`
- `role="list"` / `<ul><li>` for grouped interactive items
- Section `<section>` elements all have `aria-label`
- `prefers-reduced-motion` respected in ScrollReveal

## Dark Mode

Managed via `DarkModeContext` (localStorage persistence). Dark mode is **not** driven by the OS `prefers-color-scheme` media query — toggling requires the in-app control.

## Docker

- Production: multi-stage Node + Nginx build
- Development: single-stage with hot reload (`docker-compose --profile dev up`)

## Known Behaviours

- `npm audit` may show moderate vulnerabilities in dev dependencies — does not affect production
- TypeScript strict mode may show IDE warnings that don't block the build
