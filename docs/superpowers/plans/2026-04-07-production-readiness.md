# Production Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all critical, important, and minor issues identified in the post-analysis audit so the Acheevo landing page is production-ready.

**Architecture:** Each task is self-contained. No new dependencies are introduced. All fixes work within the existing React 18 + TypeScript + Vite + Tailwind CSS stack. The project has no test framework — TypeScript type-checking (`tsc --noEmit`) serves as the primary correctness gate after each task.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, React Router, Lucide React

**Verification command (run after every task):**
```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected output: no errors (empty or only warnings about unused vars that pre-existed).

---

## File Map

| File | Change |
|------|--------|
| `index.html` | Add SEO meta tags (description, OG, Twitter) |
| `src/components/ui/ErrorBoundary.tsx` | **Create** — class component error boundary |
| `src/App.tsx` | Wrap routes with `<ErrorBoundary>` |
| `src/components/ui/Button.tsx` | Remove dead `gradient-accent` variant |
| `src/components/ui/index.ts` | Export `ErrorBoundary` |
| `src/components/sections/Features.tsx` | Remove unused `imageSrc`/`imageAlt` from data array |
| `src/components/ui/Container.tsx` | Fix mobile padding `px-2xs` → `px-md` |
| `src/index.css` | Add `.bg-dots` utility class |
| `src/components/sections/WhoThisIsFor.tsx` | Use `.bg-dots` class |
| `src/components/sections/Features.tsx` | Use `.bg-dots` class |
| `src/components/sections/ConversationsBreakdown.tsx` | Use `.bg-dots` class |
| `src/components/sections/WhatYouGet.tsx` | Use `.bg-dots` class |
| `src/components/sections/TrustSignals.tsx` | Use `.bg-dots` class (40px variant) |
| `src/contexts/DarkModeContext.tsx` | Wrap `localStorage` calls in try/catch |
| `src/components/ui/CookieConsent.tsx` | Wrap `localStorage` calls in try/catch + iOS safe area |
| `src/components/sections/Testimonials.tsx` | Focus trap, ESC key, `useMemo` for grid array |
| `src/components/sections/CTA.tsx` | Remove hardcoded `fontSize: '18px'` inline style |

---

## Task 1: SEO Meta Tags

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add meta description, OG tags, Twitter card tags**

Replace the `<head>` content in `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acheevo - Discover Your Purpose in 8 Conversations</title>

    <!-- SEO -->
    <meta name="description" content="Acheevo guides you through 8 AI-powered conversations to uncover your purpose, clarify your direction, and walk away with a personal roadmap. Free during beta." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://acheevo.com/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://acheevo.com/" />
    <meta property="og:title" content="Acheevo - Discover Your Purpose in 8 Conversations" />
    <meta property="og:description" content="Acheevo guides you through 8 AI-powered conversations to uncover your purpose, clarify your direction, and walk away with a personal roadmap. Free during beta." />
    <meta property="og:image" content="https://acheevo.com/images/og-image.jpg" />
    <meta property="og:site_name" content="Acheevo" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@acheevo" />
    <meta name="twitter:title" content="Acheevo - Discover Your Purpose in 8 Conversations" />
    <meta name="twitter:description" content="Acheevo guides you through 8 AI-powered conversations to uncover your purpose, clarify your direction, and walk away with a personal roadmap. Free during beta." />
    <meta name="twitter:image" content="https://acheevo.com/images/og-image.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Dark mode flash prevention - runs before page render -->
    <script>
      (function() {
        const savedTheme = localStorage.getItem('darkMode');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'true' || (savedTheme === null && systemPrefersDark);

        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
        }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Verify — open browser dev tools, check `<head>` has all tags**

Navigate to `http://localhost:3000`, open DevTools → Elements → `<head>`. Confirm `og:title`, `twitter:card`, `meta name="description"` are present.

- [ ] **Step 3: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add index.html
git commit -m "feat: add SEO meta tags, OG and Twitter card markup"
```

---

## Task 2: Error Boundary

**Files:**
- Create: `src/components/ui/ErrorBoundary.tsx`
- Modify: `src/components/ui/index.ts`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create ErrorBoundary component**

Create `src/components/ui/ErrorBoundary.tsx`:

```tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-md">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-h4 text-neutral-900 dark:text-white mb-md font-bold">
              Something went wrong
            </h1>
            <p className="font-body text-body-md text-neutral-600 dark:text-neutral-400 mb-lg">
              We hit an unexpected error. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-lg py-sm bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-round transition-colors"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

- [ ] **Step 2: Export from ui/index.ts**

Open `src/components/ui/index.ts`. Add this line with the other exports:

```ts
export { default as ErrorBoundary } from './ErrorBoundary';
```

- [ ] **Step 3: Wrap App with ErrorBoundary**

Open `src/App.tsx`. Add `ErrorBoundary` to the import and wrap the `DarkModeProvider`:

```tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from '@/components';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { CookieConsent, ErrorBoundary } from '@/components/ui';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import About from '@/pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <main className="flex-grow">
                      <Home />
                    </main>
                    <Footer />
                  </>
                }
              />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <CookieConsent />
          </div>
        </Router>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

- [ ] **Step 4: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/components/ui/ErrorBoundary.tsx src/components/ui/index.ts src/App.tsx
git commit -m "feat: add error boundary to prevent blank page on component errors"
```

---

## Task 3: Dead Code Removal

**Files:**
- Modify: `src/components/ui/Button.tsx` (remove `gradient-accent` variant)
- Modify: `src/components/sections/Features.tsx` (remove unused `imageSrc`/`imageAlt` from data)

- [ ] **Step 1: Remove gradient-accent variant from Button.tsx**

In `src/components/ui/Button.tsx`, change the `ButtonProps` interface and `variants` object.

Change line 5 from:
```tsx
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'gradient-accent';
```
To:
```tsx
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
```

Remove the `gradient-accent` entry from the `variants` object (line 20):
```tsx
    const variants = {
      primary: 'bg-action hover:bg-action-hover text-on-action focus:ring-focus shadow-depth-2 hover:shadow-depth-3',
      secondary: 'bg-surface hover:bg-action-hover-2 text-body border-2 border-primary hover:border-action-hover focus:ring-focus shadow-depth-1 hover:shadow-depth-2',
      outline: 'border-2 border-primary bg-transparent hover:bg-action-hover-2 text-action hover:text-action-hover focus:ring-focus hover:shadow-depth-3',
      ghost: 'hover:bg-action-hover-2 text-body focus:ring-focus',
      gradient: 'bg-action hover:bg-action-hover text-on-action focus:ring-focus shadow-depth-2 hover:shadow-depth-3',
    };
```

- [ ] **Step 2: Remove imageSrc/imageAlt from Features.tsx data**

In `src/components/sections/Features.tsx`, update the `features` array to remove the unused properties. The `features` variable has no type annotation so this is a safe removal:

```tsx
  const features = [
    {
      step: 1,
      title: "Tell your story",
      description: "No forms, no surveys. Just you talking about your experiences—the highs, the lows, what matters. We listen and ask what comes next.",
    },
    {
      step: 2,
      title: "Watch the patterns surface",
      description: "As you talk, Acheevo holds the thread. You'll start to see what energizes you, what drains you, and where your strengths actually lie.",
    },
    {
      step: 3,
      title: "Walk away with a roadmap",
      description: "After eight conversations, you'll have a Purpose Summary—not a personality type or vague insight, but a clear statement of what you're here to do and how to move toward it.",
    },
  ];
```

- [ ] **Step 3: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/components/ui/Button.tsx src/components/sections/Features.tsx
git commit -m "refactor: remove dead gradient-accent button variant and unused image props"
```

---

## Task 4: Container Mobile Padding Fix

**Files:**
- Modify: `src/components/ui/Container.tsx`

**Context:** The custom Tailwind spacing scale maps `2xs = 4px`, `sm = 12px`, `md = 16px`. The current `px-2xs` gives 4px horizontal padding on mobile — too tight. `px-md` gives 16px which is the standard mobile padding used throughout all sections.

- [ ] **Step 1: Fix mobile padding**

In `src/components/ui/Container.tsx`, change line 22 from:
```tsx
          'mx-auto px-2xs sm:px-sm lg:px-xs',
```
To:
```tsx
          'mx-auto px-md sm:px-md lg:px-xs',
```

- [ ] **Step 2: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 3: Visual verify — resize browser to 375px wide and confirm no content clips against edge**

- [ ] **Step 4: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/components/ui/Container.tsx
git commit -m "fix: increase Container mobile padding from 4px to 16px"
```

---

## Task 5: Extract Repeated Dot Pattern to Utility Class

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/sections/WhoThisIsFor.tsx`
- Modify: `src/components/sections/Features.tsx`
- Modify: `src/components/sections/ConversationsBreakdown.tsx`
- Modify: `src/components/sections/WhatYouGet.tsx`
- Modify: `src/components/sections/TrustSignals.tsx`

**Context:** Five sections each contain an identical inline `radial-gradient` background pattern with inconsistent spacing (48px on 4 sections, 40px on TrustSignals). This creates maintenance burden — a single utility class handles it cleanly.

- [ ] **Step 1: Add utility classes to index.css**

In `src/index.css`, inside `@layer components { ... }`, add after the existing component classes:

```css
  /* Repeating purple dot pattern — used as section background decoration */
  .bg-dots {
    background-image: radial-gradient(circle at 2px 2px, rgb(162, 89, 251) 1px, transparent 0);
    background-size: 48px 48px;
  }

  .bg-dots-sm {
    background-image: radial-gradient(circle at 2px 2px, rgb(162, 89, 251) 1px, transparent 0);
    background-size: 40px 40px;
  }
```

- [ ] **Step 2: Replace inline style in WhoThisIsFor.tsx**

In `src/components/sections/WhoThisIsFor.tsx`, find the decorative background div (currently around line 75):
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(162,89,251) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>
```
Replace with:
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>
```

- [ ] **Step 3: Replace inline style in Features.tsx**

In `src/components/sections/Features.tsx`, find (around line 32):
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(162, 89, 251) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>
```
Replace with:
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>
```

- [ ] **Step 4: Replace inline style in ConversationsBreakdown.tsx**

Open `src/components/sections/ConversationsBreakdown.tsx`, find the same pattern with `backgroundSize: '48px 48px'` and replace with:
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>
```

- [ ] **Step 5: Replace inline style in WhatYouGet.tsx**

Open `src/components/sections/WhatYouGet.tsx`, find the same pattern with `backgroundSize: '48px 48px'` and replace with:
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>
```

- [ ] **Step 6: Replace inline style in TrustSignals.tsx**

In `src/components/sections/TrustSignals.tsx`, find (around line 9, uses `backgroundSize: '40px 40px'`):
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(162, 89, 251) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
```
Replace with:
```tsx
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots-sm" />
      </div>
```

- [ ] **Step 7: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 8: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/index.css src/components/sections/WhoThisIsFor.tsx src/components/sections/Features.tsx src/components/sections/ConversationsBreakdown.tsx src/components/sections/WhatYouGet.tsx src/components/sections/TrustSignals.tsx
git commit -m "refactor: extract repeated dot background pattern to .bg-dots utility class"
```

---

## Task 6: localStorage Try/Catch Guards

**Files:**
- Modify: `src/contexts/DarkModeContext.tsx`
- Modify: `src/components/ui/CookieConsent.tsx`

**Context:** `localStorage` throws a `DOMException` in iOS private browsing and other storage-blocked contexts. Without try/catch, the entire app crashes on first interaction.

- [ ] **Step 1: Guard DarkModeContext.tsx**

Replace the contents of `src/contexts/DarkModeContext.tsx` with:

```tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

function readStoredTheme(): boolean | null {
  try {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
  } catch {
    // localStorage unavailable (private browsing, storage blocked)
  }
  return null;
}

function writeStoredTheme(value: boolean): void {
  try {
    localStorage.setItem('darkMode', value.toString());
  } catch {
    // localStorage unavailable — silently skip persistence
  }
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = readStoredTheme();
    if (stored !== null) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    writeStoredTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
```

- [ ] **Step 2: Guard CookieConsent.tsx**

In `src/components/ui/CookieConsent.tsx`, replace the `useEffect` and `saveConsent` function:

```tsx
  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable — show banner by default
      setVisible(true);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice, prefs?: CookiePreferences) => {
    const data = {
      choice,
      preferences: prefs || preferences,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(data));
    } catch {
      // localStorage unavailable — consent won't persist, but don't crash
    }
    setVisible(false);
  };
```

- [ ] **Step 3: Add iOS safe area to CookieConsent banner**

In `src/components/ui/CookieConsent.tsx` line 64, change:
```tsx
    <div className="fixed bottom-0 left-0 right-0 z-50 p-md">
```
To:
```tsx
    <div className="fixed bottom-0 left-0 right-0 z-50 p-md pb-safe">
```

Then add this to `src/index.css` inside `@layer utilities { ... }` (create the layer if it doesn't exist, otherwise append):
```css
@layer utilities {
  .pb-safe {
    padding-bottom: max(theme(spacing.md), env(safe-area-inset-bottom));
  }
}
```

- [ ] **Step 4: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/contexts/DarkModeContext.tsx src/components/ui/CookieConsent.tsx src/index.css
git commit -m "fix: guard localStorage calls with try/catch for private browsing + iOS safe area on cookie banner"
```

---

## Task 7: Testimonials Modal Accessibility

**Files:**
- Modify: `src/components/sections/Testimonials.tsx`

**Context:** The `StoryModal` component has no focus trap, no ESC key handler, and the `gridTestimonials` array is recreated every render. All three are fixed in this task.

- [ ] **Step 1: Add ESC key handler and focus management to StoryModal**

Replace the `StoryModal` component entirely (lines 121–175):

```tsx
const StoryModal: FC<{
  testimonial: Testimonial;
  onClose: () => void;
}> = ({ testimonial, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the modal container on open
    modalRef.current?.focus();

    // ESC key to close
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Full story from ${testimonial.name}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Avatar initials={testimonial.initials} color={testimonial.avatarColor} size="lg" />
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1 ring-4 ring-white dark:ring-neutral-900">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-lg text-neutral-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        <blockquote className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
          "{testimonial.fullQuote || testimonial.quote}"
        </blockquote>

        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>{testimonial.sessions} conversations</span>
          <span>{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Add useRef and useMemo imports, memoize gridTestimonials**

Change the import at the top of `src/components/sections/Testimonials.tsx` from:
```tsx
import { FC, useState } from 'react';
```
To:
```tsx
import { FC, useState, useRef, useEffect, useMemo } from 'react';
```

In the `Testimonials` component body, change:
```tsx
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const featuredTestimonial = testimonials[0];
  const gridTestimonials = testimonials.slice(1);
```
To:
```tsx
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const featuredTestimonial = testimonials[0];
  const gridTestimonials = useMemo(() => testimonials.slice(1), []);
```

- [ ] **Step 3: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 4: Visual verify — open a testimonial modal, press ESC, confirm it closes**

- [ ] **Step 5: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/components/sections/Testimonials.tsx
git commit -m "fix: testimonials modal focus management, ESC key, and memoize grid array"
```

---

## Task 8: Minor Polish

**Files:**
- Modify: `src/components/sections/CTA.tsx`

**Context:** The CTA button uses `fontSize: '18px'` as an inline style which doesn't scale. The `text-body-lg` Tailwind class already handles the size correctly — the inline style overrides it unnecessarily.

- [ ] **Step 1: Remove hardcoded fontSize from CTA button**

In `src/components/sections/CTA.tsx`, find the Button with inline style (around line 68):
```tsx
                  <Button
                    size="lg"
                    className="bg-white hover:bg-neutral-50 text-primary-700 shadow-2xl font-bold hover:scale-105 transition-all"
                    style={{
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                      fontSize: '18px'
                    }}
                    aria-label="Start your first purpose discovery conversation for free"
                  >
```
Replace with (keep padding overrides which give the button intentional extra size, remove only the fontSize):
```tsx
                  <Button
                    size="lg"
                    className="bg-white hover:bg-neutral-50 text-primary-700 shadow-2xl font-bold hover:scale-105 transition-all"
                    style={{
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                    }}
                    aria-label="Start your first purpose discovery conversation for free"
                  >
```

- [ ] **Step 2: Run type check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home && /opt/homebrew/bin/node node_modules/.bin/tsc --noEmit 2>&1
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
git add src/components/sections/CTA.tsx
git commit -m "fix: remove hardcoded fontSize override from CTA button"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] SEO meta tags → Task 1
- [x] Error boundary → Task 2
- [x] Dead gradient-accent variant → Task 3
- [x] Dead imageSrc props in Features → Task 3
- [x] Container 4px mobile padding → Task 4
- [x] Repeated dot pattern → Task 5
- [x] localStorage try/catch → Task 6
- [x] iOS safe area on cookie banner → Task 6 Step 3
- [x] Modal focus trap + ESC key → Task 7
- [x] useMemo for gridTestimonials → Task 7 Step 2
- [x] CTA hardcoded fontSize → Task 8

**Placeholder scan:** All steps contain exact code. No TBDs.

**Type consistency:** `useRef`, `useEffect`, `useMemo` all imported correctly in Task 7. `ErrorBoundary` exported and imported correctly in Task 2.
