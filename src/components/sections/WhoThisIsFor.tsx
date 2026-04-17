import { useRef, useState, useEffect, useCallback } from 'react';
import { Container, ScrollReveal, Button } from '@/components/ui';

const FADE_MS = 220;

const WhoThisIsFor = () => {
  const recognitionStatements = [
    "You've changed direction twice and still don't feel like you've found it.",
    "You're good at what you do, but you're not sure it's what you should be doing.",
    "You've tried journaling, personality tests, and nothing has quite clicked.",
    "You know what you don't want, but you're still figuring out what you do want.",
    "You're tired of advice that sounds good but doesn't tell you where to start.",
    "You feel like there's something you're meant to be doing, but you can't name it yet.",
  ];

  const total = recognitionStatements.length;
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitioning = useRef(false);
  const currentRef = useRef(0);

  const changeTo = useCallback((next: number) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      currentRef.current = next;
      setCurrent(next);
      setVisible(true);
      setTimeout(() => { transitioning.current = false; }, FADE_MS);
    }, FADE_MS);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      changeTo((currentRef.current + 1) % total);
    }, 4500);
  }, [changeTo, total]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  const handlePrev = () => { changeTo((currentRef.current - 1 + total) % total); startAutoPlay(); };
  const handleNext = () => { changeTo((currentRef.current + 1) % total); startAutoPlay(); };
  const handleJumpTo = (i: number) => { changeTo(i); startAutoPlay(); };

  const cardStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transition: `opacity ${FADE_MS}ms ease-in-out`,
  };

  return (
    <section id="who-its-for" aria-label="Is this for you" className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-3xl">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">IS THIS FOR YOU?</p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-neutral-900 dark:text-white mb-sm font-semibold leading-tight">
              Acheevo is for you{' '}
              <span className="text-primary-700 dark:text-primary-400">if…</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in" delay={150}>
          {/* Carousel track */}
          <div className="relative mb-lg" role="region" aria-label="Recognition statements carousel">


            {/* Card */}
            <div className="max-w-2xl mx-auto px-0 md:px-2xl">
              <div style={cardStyle} aria-live="polite" aria-atomic="true">
                <div
                  className="relative bg-white dark:bg-neutral-800 rounded-2xl p-xl md:p-2xl"
                  style={{
                    border: '1.5px solid rgba(162,89,251,0.25)',
                    boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Statement text */}
                  <p className="font-body text-body-md text-body dark:text-neutral-300 leading-relaxed font-light">
                    {recognitionStatements[current]}
                  </p>

                  {/* Card footer */}
                  <div className="mt-lg pt-md border-t border-neutral-100 dark:border-neutral-700 flex items-center justify-between">
                    <span className="font-body text-body-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-xs">
                      <span
                        className="inline-block rounded-full bg-primary-100 dark:bg-primary-900/40"
                        style={{ width: '8px', height: '8px' }}
                      />
                      <span className="font-body text-body-sm text-primary-600 dark:text-primary-400 font-medium">
                        Does this resonate?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop arrows — flanking the card */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
              style={{ left: '0', width: '44px', height: '44px' }}
              aria-label="Previous statement"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
              style={{ right: '0', width: '44px', height: '44px' }}
              aria-label="Next statement"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile arrows + progress dots inline */}
          <div className="flex items-center justify-center gap-md mb-2xl">
            {/* Prev — mobile only */}
            <button
              onClick={handlePrev}
              className="md:hidden flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:border-primary-400 transition-all duration-200 text-neutral-500 hover:text-primary-600 flex-shrink-0"
              style={{ width: '44px', height: '44px' }}
              aria-label="Previous statement"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-xs">
              {recognitionStatements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleJumpTo(i)}
                  aria-label={`Go to statement ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: i === current
                      ? 'rgb(162, 89, 251)'
                      : 'rgba(162, 89, 251, 0.22)',
                    border: 'none',
                    padding: 0,
                    cursor: i === current ? 'default' : 'pointer',
                    flexShrink: 0,
                    transition: 'width 320ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms ease',
                  }}
                />
              ))}
            </div>

            {/* Next — mobile only */}
            <button
              onClick={handleNext}
              className="md:hidden flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:border-primary-400 transition-all duration-200 text-neutral-500 hover:text-primary-600 flex-shrink-0"
              style={{ width: '44px', height: '44px' }}
              aria-label="Next statement"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-in" delay={400}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body text-body-lg text-body dark:text-neutral-300 mb-md">
              If any of these landed — start here.
            </p>
            <Button variant="gradient" size="lg" className="hover:shadow-glow" aria-label="Start your first conversation">
              Start My First Conversation
            </Button>
            <p className="font-body text-body-sm text-neutral-500 dark:text-neutral-400 mt-md">
              Free during beta
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default WhoThisIsFor;
