# Landing Page v2.0 — Compact Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the Acheevo landing page from 10 sections to 6 by eliminating redundant "how it works" sections, simplifying content-heavy components, and merging the final CTA into Pricing — leaving a focused, fast-reading page.

**Architecture:** Each task is self-contained. Tasks 1–5 modify individual section components; Task 6 wires everything together by updating the barrel export and Home.tsx. No new shared utilities needed — all changes stay within `src/components/sections/`. The old section files (Story, Features, ConversationsBreakdown, TrustSignals, CTA) are kept on disk but removed from exports and the page.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS with custom spacing scale (`xs=8px sm=12px md=16px lg=24px xl=32px 2xl=48px 3xl=64px`). No test framework exists — verification is TypeScript type-check only: `/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit` (run from `acheevo-home/`).

---

## File Structure

| File | Action | What changes |
|------|--------|--------------|
| `src/components/sections/HowItWorks.tsx` | **Create** | New section replacing Story + Features + ConversationsBreakdown |
| `src/components/sections/WhoThisIsFor.tsx` | **Modify** | Trim carousel from 8 → 6 statements |
| `src/components/sections/WhatYouGet.tsx` | **Modify** | Reduce list from 5 → 3 items; remove quote block |
| `src/components/sections/Testimonials.tsx` | **Modify** | Remove 5-card grid + modal; keep featured + 2 cards |
| `src/components/sections/Pricing.tsx` | **Modify** | Trim FAQ from 7 → 4 items; add inline CTA below FAQ |
| `src/components/sections/index.ts` | **Modify** | Export HowItWorks; remove TrustSignals, Story, Features, ConversationsBreakdown, CTA |
| `src/pages/Home.tsx` | **Modify** | Render 6 sections: Hero → WhoThisIsFor → HowItWorks → WhatYouGet → Testimonials → Pricing |

---

## Task 1: Trim WhoThisIsFor carousel (8 → 6 statements)

**Files:**
- Modify: `src/components/sections/WhoThisIsFor.tsx:7-16`

Remove the last two statements (indices 6 and 7) from the `recognitionStatements` array. The `total` variable is computed from the array length so it updates automatically.

- [ ] **Step 1: Open the file and locate the array**

The array starts at line 7. Current statements 0–7:
```
0: "You've changed direction twice and still don't feel like you've found it."
1: "You're good at what you do, but you're not sure it's what you should be doing."
2: "You've tried journaling, personality tests, and nothing has quite clicked."
3: "You know what you don't want, but you're still figuring out what you do want."
4: "You're tired of advice that sounds good but doesn't tell you where to start."
5: "You feel like there's something you're meant to be doing, but you can't name it yet."
6: "You want clarity, not another framework to learn."          ← REMOVE
7: "You're ready to have the conversation you've been avoiding with yourself."  ← REMOVE
```

- [ ] **Step 2: Remove the last two entries**

Replace the `recognitionStatements` array with:

```tsx
const recognitionStatements = [
  "You've changed direction twice and still don't feel like you've found it.",
  "You're good at what you do, but you're not sure it's what you should be doing.",
  "You've tried journaling, personality tests, and nothing has quite clicked.",
  "You know what you don't want, but you're still figuring out what you do want.",
  "You're tired of advice that sounds good but doesn't tell you where to start.",
  "You feel like there's something you're meant to be doing, but you can't name it yet.",
];
```

- [ ] **Step 3: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Verify in preview**

Open the preview. Navigate to the "IS THIS FOR YOU?" section. Confirm the counter reads "01 / 06" and autoplay cycles through 6 statements before looping.

---

## Task 2: Create HowItWorks.tsx

**Files:**
- Create: `src/components/sections/HowItWorks.tsx`

This new section replaces three sections (Story, Features, ConversationsBreakdown) with a single clean component: phone mockup on the left, 3 numbered steps on the right.

- [ ] **Step 1: Create the file**

```tsx
import { Container, ScrollReveal } from '@/components/ui';
import { Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Tell your story',
      description:
        'No forms, no surveys. Just you talking about your experiences — the highs, the lows, what matters. Acheevo listens and asks what comes next.',
    },
    {
      number: 2,
      title: 'Watch the patterns surface',
      description:
        'As you talk, Acheevo holds the thread across all 8 sessions. You'll start to see what energizes you, what drains you, and where your strengths actually lie.',
    },
    {
      number: 3,
      title: 'Walk away with a roadmap',
      description:
        'After eight conversations, you'll have a Purpose Summary — not a personality type, but a clear statement of what you're here to do and how to move toward it.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-100 dark:bg-primary-800 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header */}
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <p className="eyebrow mb-md">HOW IT WORKS</p>
            <h2 className="font-heading text-h4 lg:text-h3 text-neutral-900 dark:text-white mb-lg font-bold leading-tight">
              Not a quiz. Not a course.{' '}
              <span className="gradient-text">A real conversation.</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Eight structured conversations with an AI coach that remembers everything you say — and helps you connect it into a clear, personal roadmap.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-2xl items-center max-w-6xl mx-auto">
          {/* Left: Phone mockup */}
          <ScrollReveal animation="slide-right" threshold={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white dark:bg-neutral-800 rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status bar */}
                  <div className="bg-neutral-50 dark:bg-neutral-900 px-md py-3 flex items-center justify-between text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-neutral-400 rounded-sm relative">
                        <div className="absolute inset-0.5 bg-neutral-400 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  {/* Chat header */}
                  <div className="px-md py-xs border-b border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-action dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">
                          Purpose Discovery
                        </h3>
                        <p className="text-xs text-action dark:text-primary-400 font-medium">
                          Conversation 1 of 8
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="p-md space-y-xs bg-gradient-to-b from-primary-50/50 to-white dark:from-primary-950/30 dark:to-neutral-800 min-h-[400px]">
                    <div className="flex">
                      <div className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-neutral-800 dark:text-neutral-200">
                          Let's start with something meaningful. Tell me about a time when you felt most energized and alive.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary-200 dark:bg-primary-700 rounded-2xl rounded-tr-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-neutral-900 dark:text-white">
                          When I was teaching my nephew to code. Seeing his eyes light up when he finally understood...
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-neutral-800 dark:text-neutral-200">
                          That's beautiful. What was it about that moment that made you feel so alive?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary-200 dark:bg-primary-700 rounded-2xl rounded-tr-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-neutral-900 dark:text-white">
                          I realized I was making a real difference. Helping someone discover their potential.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '0ms' }}
                          />
                          <div
                            className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '150ms' }}
                          />
                          <div
                            className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '300ms' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: 3 numbered steps */}
          <div className="space-y-lg">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                animation="slide-left"
                delay={index * 100}
                threshold={0.2}
              >
                <div className="flex items-start gap-md p-lg bg-white dark:bg-neutral-800 rounded-2xl border-2 border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-action flex items-center justify-center">
                    <span className="font-heading text-body-lg font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-h6 text-neutral-900 dark:text-white font-bold mb-xs">
                      {step.title}
                    </h3>
                    <p className="font-body text-body-md text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
```

- [ ] **Step 2: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors (file is not yet imported anywhere, so no import errors either).

---

## Task 3: Simplify WhatYouGet (5 items → 3, remove quote block)

**Files:**
- Modify: `src/components/sections/WhatYouGet.tsx`

Two changes: (1) reduce `purposeSummaryComponents` from 5 to 3 items — keeping Core Strengths, Impact Statement, and Next Steps; (2) remove the "It's yours to keep" highlighted quote block at the bottom.

- [ ] **Step 1: Replace the `purposeSummaryComponents` array**

Find this in `WhatYouGet.tsx`:

```tsx
const purposeSummaryComponents = [
  {
    title: "Your Core Strengths",
    description: "What you're naturally good at and where you create the most value.",
  },
  {
    title: "Your Values in Action",
    description: "The principles that guide your decisions, translated into real-world contexts.",
  },
  {
    title: "Your Ideal Environment",
    description: "The conditions where you thrive—team structure, autonomy, pace, culture.",
  },
  {
    title: "Your Impact Statement",
    description: "The change you want to create and who benefits from your work.",
  },
  {
    title: "Your Next Steps",
    description: "Concrete, prioritized actions you can take in the next 30, 60, and 90 days.",
  },
];
```

Replace with:

```tsx
const purposeSummaryComponents = [
  {
    title: "Your Core Strengths",
    description: "What you're naturally good at and where you create the most value.",
  },
  {
    title: "Your Impact Statement",
    description: "The change you want to create and who benefits from your work.",
  },
  {
    title: "Your Next Steps",
    description: "Concrete, prioritized actions you can take in the next 30, 60, and 90 days.",
  },
];
```

- [ ] **Step 2: Update the mockup to show all 3 items (remove the `.slice(0, 3)`)**

Find this line in the mockup section:

```tsx
{purposeSummaryComponents.slice(0, 3).map((_, index) => (
```

Replace with:

```tsx
{purposeSummaryComponents.map((_, index) => (
```

- [ ] **Step 3: Remove the "It's yours to keep" quote block**

Find and delete this entire `ScrollReveal` block (approximately lines 124–131 in the original file):

```tsx
<ScrollReveal animation="slide-left" delay={600}>
  <div className="bg-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-xl p-lg border-2 border-primary-200 dark:border-primary-700">
    <p className="font-body text-body-md text-body dark:text-neutral-300 leading-relaxed">
      <span className="font-bold">It's yours to keep, share, or revisit.</span> Export it as a PDF, use it in career conversations, or come back to refine it as you grow.
    </p>
  </div>
</ScrollReveal>
```

- [ ] **Step 4: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors.

---

## Task 4: Slim down Testimonials (remove grid + modal, keep featured + 2 cards)

**Files:**
- Modify: `src/components/sections/Testimonials.tsx`

Remove: the `StoryModal` component, `expandedIndex` state, all "Read full story" buttons, and the 5-card grid. Keep: the featured testimonial block. Add: 2 simplified testimonial cards (David Chen and Jordan Rivera) in a side-by-side layout below the featured block.

- [ ] **Step 1: Remove the `StoryModal` component**

Delete the entire `StoryModal` component definition (lines 121–191 in the original file):

```tsx
const StoryModal: FC<{
  testimonial: Testimonial;
  onClose: () => void;
}> = ({ testimonial, onClose }) => {
  // ... entire block through closing brace and semicolon
};
```

- [ ] **Step 2: Remove the `expandedIndex` state and modal render from `Testimonials`**

In the `Testimonials` component body, remove:

```tsx
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
```

And at the bottom of the JSX, remove:

```tsx
{/* Full Story Modal */}
{expandedIndex !== null && (
  <StoryModal
    testimonial={testimonials[expandedIndex]}
    onClose={() => setExpandedIndex(null)}
  />
)}
```

- [ ] **Step 3: Remove "Read full story" button from the featured testimonial**

In the featured testimonial block, find and delete:

```tsx
{featuredTestimonial.fullQuote && (
  <button
    onClick={() => setExpandedIndex(0)}
    className="mt-lg inline-flex items-center gap-2xs text-body-md font-semibold text-action dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group cursor-pointer"
  >
    Read full story
    <svg
      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
)}
```

- [ ] **Step 4: Replace the 5-card grid with 2 inline cards**

Find and delete the entire `{/* Testimonial Grid */}` block:

```tsx
{/* Testimonial Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {gridTestimonials.map((testimonial, index) => (
    // ... all card content including "Read full story" buttons
  ))}
</div>
```

Replace it with this 2-card layout:

```tsx
{/* Two supporting testimonials */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
  {[testimonials[1], testimonials[2]].map((testimonial, index) => (
    <ScrollReveal key={testimonial.name} animation="slide-up" delay={100 * (index + 1)}>
      <div className="h-full bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-lg flex flex-col border border-neutral-100 dark:border-neutral-700/50">
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-md">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        {/* Quote */}
        <blockquote className="flex-1 mb-lg">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-body-sm">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        {/* Author */}
        <div className="flex items-center gap-3 pt-md border-t border-neutral-200 dark:border-neutral-700/50">
          <div className="relative flex-shrink-0">
            <Avatar initials={testimonial.initials} color={testimonial.avatarColor} />
            {testimonial.verified && (
              <div className="absolute -bottom-0.5 -right-0.5 bg-success rounded-full p-0.5 ring-2 ring-neutral-50 dark:ring-neutral-800">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
              {testimonial.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
              {testimonial.role}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              {testimonial.sessions} conversations &middot; {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  ))}
</div>
```

- [ ] **Step 5: Remove the `gridTestimonials` useMemo (now unused)**

Delete:

```tsx
const gridTestimonials = useMemo(() => testimonials.slice(1), []);
```

- [ ] **Step 6: Clean up unused imports**

The `useState` import is no longer needed (removed `expandedIndex`). The `useRef` and `useEffect` are only used in `StoryModal` (now deleted). Update the import line:

```tsx
import { FC, useMemo } from 'react';
```

Wait — `useMemo` is also removed now (step 5). The final imports should be:

```tsx
import { FC } from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
```

The `X` icon from lucide-react (used in StoryModal) is also no longer needed. Remove it from the import.

- [ ] **Step 7: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors.

---

## Task 5: Update Pricing (trim FAQ 7 → 4, add inline CTA)

**Files:**
- Modify: `src/components/sections/Pricing.tsx`

Remove 3 FAQ items (indices 2, 4, 6). Add a centered CTA block after the FAQ accordion.

- [ ] **Step 1: Reduce the `faqs` array to 4 items**

Replace the entire `faqs` array with:

```tsx
const faqs = [
  {
    question: "How is Acheevo different from ChatGPT?",
    answer: "ChatGPT is a general-purpose assistant that responds to whatever you ask. Acheevo is specifically designed for purpose discovery with a structured framework of 8 conversations that build on each other. It knows what questions to ask, when to dig deeper, and how to help you connect insights across conversations. Think of ChatGPT as a blank page—Acheevo is a guided journey with a clear destination.",
  },
  {
    question: "How long does each session take?",
    answer: "Each conversation takes 15-30 minutes, but you can go at your own pace. Some people complete one per day, others prefer one per week. There's no rush—the platform saves your progress automatically, and you can pause and resume whenever you like. Most people complete all 8 conversations within 4-8 weeks.",
  },
  {
    question: "What happens when beta ends?",
    answer: "When the beta period ends, you'll have the option to continue with a paid subscription at €15/month. You'll be notified well in advance, and all your conversation history and insights will be preserved. If you choose not to continue, you can export all your data before the transition.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, your privacy is our top priority. Your conversations and insights are encrypted and stored securely. We never share your personal data with third parties, and you have full control over your information. You can delete your data at any time.",
  },
];
```

- [ ] **Step 2: Add the inline CTA after the FAQ section**

Find the closing `</div>` of the `{/* FAQ Section */}` div and add after it (before the `</Container>` closing tag):

```tsx
{/* Final CTA */}
<ScrollReveal animation="fade-in" delay={500}>
  <div className="mt-3xl pt-xl border-t border-neutral-200 dark:border-neutral-700 text-center max-w-2xl mx-auto">
    <h2 className="font-heading text-h4 lg:text-h3 font-bold text-neutral-900 dark:text-white mb-md leading-tight">
      The most important conversation you'll have this year is the first one.
    </h2>
    <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 mb-xl font-light">
      Start free. No email required. See what surfaces in just 15 minutes.
    </p>
    <Button
      variant="gradient"
      size="lg"
      className="hover:shadow-glow"
      aria-label="Start your first purpose discovery conversation for free"
    >
      Start Conversation #1 — Free
    </Button>
    <p className="font-body text-body-sm text-neutral-500 dark:text-neutral-400 mt-md">
      Free during beta &middot; No credit card &middot; Your data is private
    </p>
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Remove the large bottom margin on the pricing cards grid**

Find:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-lg max-w-5xl mx-auto mb-2xl md:mb-[240px]">
```

Replace with:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-lg max-w-5xl mx-auto mb-2xl">
```

The `md:mb-[240px]` was leaving a massive gap; now the FAQ follows naturally.

- [ ] **Step 4: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors.

---

## Task 6: Wire up new page structure

**Files:**
- Modify: `src/components/sections/index.ts`
- Modify: `src/pages/Home.tsx`

This is the final wiring step. Update the sections barrel to export only the 6 active sections, then update Home.tsx to render them in order.

- [ ] **Step 1: Replace the contents of `src/components/sections/index.ts`**

```ts
export { default as Hero } from './Hero';
export { default as WhoThisIsFor } from './WhoThisIsFor';
export { default as HowItWorks } from './HowItWorks';
export { default as WhatYouGet } from './WhatYouGet';
export { default as Testimonials } from './Testimonials';
export { default as Pricing } from './Pricing';
```

The old section files (Story.tsx, Features.tsx, ConversationsBreakdown.tsx, TrustSignals.tsx, CTA.tsx) remain on disk but are no longer exported or imported anywhere.

- [ ] **Step 2: Replace the contents of `src/pages/Home.tsx`**

```tsx
import { Hero, WhoThisIsFor, HowItWorks, WhatYouGet, Testimonials, Pricing } from '@/components';

const Home = () => {
  return (
    <>
      <Hero />
      <WhoThisIsFor />
      <HowItWorks />
      <WhatYouGet />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default Home;
```

- [ ] **Step 3: Run TypeScript check**

```bash
cd /Users/christianarce/Documents/Sandbox/Acheevo/acheevo-home
/opt/homebrew/bin/node node_modules/.bin/tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Verify in preview**

Open the landing page in the browser. Scroll through and confirm:
1. Hero section appears
2. "IS THIS FOR YOU?" carousel appears with 6 statements (counter shows "01 / 06")
3. "HOW IT WORKS" section appears with phone mockup + 3 numbered steps
4. "YOUR OUTPUT" section appears with the Purpose Summary mockup + 3 items (no quote block at bottom)
5. "REAL STORIES" section appears with featured testimonial + 2 cards (no grid, no modal)
6. Pricing section appears with 4 FAQ items + CTA block at the bottom
7. No duplicate or missing sections

---

## Self-Review

### Spec coverage check

| Requirement | Task |
|-------------|------|
| Remove ConversationsBreakdown from page | Task 6 (excluded from barrel + Home) |
| Merge Story + Features → HowItWorks | Task 2 |
| Simplify WhatYouGet: 5 → 3 items | Task 3 |
| Remove "It's yours to keep" quote block | Task 3 |
| Delete TrustSignals from page | Task 6 (excluded from barrel + Home) |
| Slim Testimonials: remove grid + modal | Task 4 |
| Keep featured + add 2 cards | Task 4 |
| Trim FAQ 7 → 4 | Task 5 |
| Merge CTA into Pricing | Task 5 |
| Trim WhoThisIsFor 8 → 6 statements | Task 1 |
| Update barrel export | Task 6 |
| Update Home.tsx | Task 6 |

All requirements covered. ✓

### Placeholder scan

No TBDs, no "implement later", no vague steps. All code blocks are complete. ✓

### Type consistency

- `HowItWorks` uses `Container`, `ScrollReveal` from `@/components/ui` — same as all other sections ✓
- `Testimonials` keeps the `Testimonial` interface and `Avatar` component unchanged ✓
- `Pricing` uses `Button` already imported at line 1 ✓
- `purposeSummaryComponents` array reduced from 5 to 3 — the `.slice(0, 3)` removal is safe since the array now has exactly 3 items ✓
