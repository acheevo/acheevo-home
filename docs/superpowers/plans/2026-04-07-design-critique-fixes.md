# Design Critique Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply design critique recommendations: mobile navigation, global focus-visible rings, Hero CTA consolidation, and nav scroll state.

**Architecture:** All changes are self-contained to existing files — no new components needed. Hero.tsx receives the most significant changes (mobile menu + scroll shadow + CTA). index.css gets a global focus-visible rule. No new dependencies.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite

---

## File Map

| File | Change |
|------|--------|
| `src/components/sections/Hero.tsx` | Add mobile hamburger menu, add scroll-shadow state on nav, demote secondary CTA to ghost anchor |
| `src/index.css` | Add global `focus-visible` ring rule |

---

### Task 1: Global focus-visible rings

**Files:**
- Modify: `src/index.css` (after `@tailwind utilities;` block, inside `@layer base`)

- [ ] **Step 1: Add focus-visible rule to index.css**

In `src/index.css`, inside the `@layer base` block (after the `h6` rule, before the scrollbar rules), add:

```css
/* Global keyboard focus indicator */
*:focus-visible {
  outline: 2px solid rgba(124, 58, 237, 0.8);
  outline-offset: 3px;
  border-radius: 4px;
}
```

- [ ] **Step 2: Verify visually**

Tab through the page in Chrome. Every interactive element (buttons, links, FAQ accordion triggers, cookie buttons) should show a purple ring. No element should show the default browser ring (blue on Chrome).

---

### Task 2: Consolidate Hero CTAs

**Files:**
- Modify: `src/components/sections/Hero.tsx` lines 124–146

The current secondary CTA is a full `<Button variant="outline">` that competes visually with the primary CTA. Replace it with a plain anchor tag that scrolls to `#how-it-works`.

- [ ] **Step 1: Replace secondary Button with anchor in Hero.tsx**

Find the CTA buttons block (lines 124–146) and replace with:

```tsx
{/* CTA Buttons */}
<ScrollReveal animation="slide-up" delay={300}>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-md pt-md">
    <Button
      variant="gradient"
      size="lg"
      className="w-full sm:w-auto font-semibold hover:shadow-glow"
      aria-label="Find your direction and start your first conversation for free"
    >
      Find Your Direction — It's Free
    </Button>

    <a
      href="#how-it-works"
      className="font-body text-body-lg text-white/80 hover:text-white transition-colors duration-200 font-medium underline-offset-4 hover:underline"
      aria-label="Scroll down to see how Acheevo works"
    >
      See How It Works ↓
    </a>
  </div>
</ScrollReveal>
```

- [ ] **Step 2: Verify**

In Chrome, the Hero should now have one prominent gradient button and one subtle text link below/beside it. The text link should scroll smoothly to `#how-it-works` when clicked (the Story section has `id="how-it-works"` — verify this or add it).

---

### Task 3: Add nav scroll shadow to Hero

**Files:**
- Modify: `src/components/sections/Hero.tsx` — add `useEffect` + `useState` for scroll tracking

The Hero's embedded `<nav>` is `position: relative` inside the hero. When the page scrolls and the nav becomes sticky (it doesn't currently), a shadow helps. Since the nav is inside the hero (not sticky), this task instead adds a subtle `backdrop-blur` + background deepening to the nav when the user has scrolled past the top.

- [ ] **Step 1: Add scroll state to Hero.tsx**

At the top of the `Hero` component function, add:

```tsx
import { useState, useEffect } from 'react';

// Inside the Hero component, before the return:
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

- [ ] **Step 2: Apply scroll class to nav element**

Find the `<nav>` tag in Hero.tsx (line ~30) and update its className to include the conditional:

```tsx
<nav className={`relative z-20 px-lg py-md transition-all duration-300 ${
  scrolled ? 'bg-black/20 backdrop-blur-md' : ''
}`}>
```

- [ ] **Step 3: Verify**

Scroll the page slightly. The Hero nav should gain a subtle dark blurred background once the page scrolls past 10px, helping the nav links stay readable as the user scrolls the page.

---

### Task 4: Mobile hamburger menu in Hero

**Files:**
- Modify: `src/components/sections/Hero.tsx` — add mobile menu state + hamburger button + mobile drawer

The Hero's nav currently hides all links and CTAs on mobile (`hidden md:flex`). Mobile users see only the logo. This task adds a hamburger toggle and a full-screen mobile menu.

- [ ] **Step 1: Add mobile menu state**

Add inside the Hero component (alongside the `scrolled` state from Task 3):

```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

- [ ] **Step 2: Add hamburger button to the nav grid**

In the nav's 3-column grid, the third column currently has `hidden md:flex`. Replace the entire third-column div with:

```tsx
{/* Section 3: CTAs — desktop right, mobile hamburger */}
<div className="flex items-center justify-end gap-md">
  {/* Desktop CTAs */}
  <div className="hidden md:flex items-center gap-md">
    <DarkModeToggle />
    <button
      className="font-body text-body-md text-white/90 hover:text-white transition-colors font-medium"
      aria-label="Sign in to your account"
    >
      Sign In
    </button>
    <Button
      size="md"
      variant="outline"
      className="text-white border-white/50 hover:bg-white/10 hover:border-white"
      aria-label="Start your first conversation for free"
    >
      Start Free
    </Button>
  </div>

  {/* Mobile hamburger */}
  <button
    className="md:hidden p-xs text-white hover:text-white/80 transition-colors"
    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={mobileMenuOpen}
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
</div>
```

- [ ] **Step 3: Add mobile menu drawer below the nav grid**

Immediately after the closing `</div>` of the 3-column grid (but still inside `<nav>`), add the mobile drawer:

```tsx
{/* Mobile menu drawer */}
{mobileMenuOpen && (
  <div className="md:hidden mt-sm border-t border-white/20 pt-sm pb-md">
    <div className="flex flex-col gap-sm">
      <a
        href="#how-it-works"
        onClick={() => setMobileMenuOpen(false)}
        className="font-body text-body-lg text-white/90 hover:text-white transition-colors font-medium py-xs"
      >
        How It Works
      </a>
      <a
        href="#pricing"
        onClick={() => setMobileMenuOpen(false)}
        className="font-body text-body-lg text-white/90 hover:text-white transition-colors font-medium py-xs"
      >
        Pricing
      </a>
      <a
        href="#testimonials"
        onClick={() => setMobileMenuOpen(false)}
        className="font-body text-body-lg text-white/90 hover:text-white transition-colors font-medium py-xs"
      >
        Stories
      </a>
      <div className="flex flex-col gap-xs pt-sm border-t border-white/20">
        <DarkModeToggle />
        <button
          className="font-body text-body-md text-white/90 hover:text-white transition-colors font-medium text-left py-xs"
          aria-label="Sign in to your account"
        >
          Sign In
        </button>
        <Button
          size="md"
          variant="outline"
          className="text-white border-white/50 hover:bg-white/10 hover:border-white w-full"
          aria-label="Start your first conversation for free"
        >
          Start Free
        </Button>
      </div>
    </div>
  </div>
)}
```

- [ ] **Step 4: Verify on mobile viewport**

In Chrome DevTools, set viewport to 375px (iPhone SE). The nav should show only the logo + hamburger icon. Tapping the hamburger should expand the menu with all nav links and the CTA. Tapping a link should close the menu and scroll to the section.

---

## Self-Review Checklist

- [x] Task 1 covers: focus-visible rings for all interactive elements
- [x] Task 2 covers: Hero CTA consolidation (primary gradient + ghost text link)
- [x] Task 3 covers: nav scroll state (backdrop-blur deepens on scroll)
- [x] Task 4 covers: mobile hamburger menu with all nav links + CTA
- [x] No placeholder code — all steps contain actual JSX/CSS
- [x] Type consistency — `useState`, `useEffect` imports already available in React; `mobileMenuOpen` used consistently
- [x] No new dependencies added
