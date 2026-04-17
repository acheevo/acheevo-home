import { FC, useRef, useState, useEffect, useCallback } from 'react';
import { Container, ScrollReveal } from '@/components/ui';
import imgSarah from '@/assets/Sarah Mitchell.jpg';
import imgDavid from '@/assets/David Chen.jpg';
import imgJordan from '@/assets/Jordan Rivera.jpg';
import imgPatricia from '@/assets/Patricia Owens.jpg';
import imgMarcus from '@/assets/Marcus Grant.jpg';
import imgEmily from '@/assets/Emily Watson.jpg';

const FADE_MS = 220;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  date: string;
  sessions: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Ten years climbing someone else's ladder. Acheevo asked questions nobody had ever asked me — and I finally saw what I'd been avoiding. The clarity didn't make the leap easy. It just made it obvious.",
    name: 'Sarah Mitchell, 38',
    role: 'Life Coach',
    avatar: imgSarah,
    date: '2 weeks ago',
    sessions: 8,
  },
  {
    quote:
      "Turned out it wasn't the job I hated. It was the disconnect from my values. I didn't need to quit — I just needed to see what was missing.",
    name: 'David Chen, 31',
    role: 'Software Engineering Lead',
    avatar: imgDavid,
    date: '1 month ago',
    sessions: 5,
  },
  {
    quote:
      "Everyone kept saying 'just pick something.' Acheevo helped me find the pattern in everything I'd ever cared about. Turns out I'm wired for education design.",
    name: 'Jordan Rivera, 22',
    role: 'Education Designer',
    avatar: imgJordan,
    date: '3 weeks ago',
    sessions: 4,
  },
  {
    quote:
      "At 52, I thought the window had closed. It hadn't. Acheevo showed me that 30 years of experience wasn't scattered — it was all pointing somewhere. I cried when I saw the thread. Properly cried.",
    name: 'Patricia Owens, 52',
    role: 'Nonprofit Founder',
    avatar: imgPatricia,
    date: '1 month ago',
    sessions: 7,
  },
  {
    quote:
      "Revenue's up 40% since I stopped leading with a services list and started leading with a why. That came from Acheevo.",
    name: 'Marcus Grant, 36',
    role: 'Brand Strategist',
    avatar: imgMarcus,
    date: '2 months ago',
    sessions: 6,
  },
  {
    quote:
      "I was running on empty — 60-hour weeks, no joy, no idea why I was still showing up. Acheevo helped me see that burnout wasn't weakness, it was misalignment. That one reframe changed everything. I set real boundaries for the first time in four years, and instead of the world ending, things actually got better. I still work in the ICU. I just know why again.",
    name: 'Emily Watson, 29',
    role: 'ICU Nurse',
    avatar: imgEmily,
    date: '3 weeks ago',
    sessions: 4,
  },
];

const Avatar: FC<{ name: string; src: string }> = ({ name, src }) => (
  <img
    src={src}
    alt={name}
    className="rounded-full object-cover flex-shrink-0 ring-4 ring-white dark:ring-neutral-800 shadow-md"
    style={{ width: '48px', height: '48px', minWidth: '48px' }}
  />
);

const Testimonials: FC = () => {
  const total = testimonials.length;
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
    }, 8000);
  }, [changeTo, total]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  const handlePrev = () => { changeTo((currentRef.current - 1 + total) % total); startAutoPlay(); };
  const handleNext = () => { changeTo((currentRef.current + 1) % total); startAutoPlay(); };
  const handleJumpTo = (i: number) => { changeTo(i); startAutoPlay(); };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-white dark:bg-neutral-900 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20 dark:opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-2xl max-w-4xl mx-auto">
          <ScrollReveal animation="slide-up">
            <p className="eyebrow mb-sm">REAL STORIES</p>
            <h2 className="font-heading text-h4 lg:text-h3 font-semibold leading-tight text-neutral-900 dark:text-white mb-sm">
              Real people.{' '}
              <span className="text-primary-700 dark:text-primary-400">Real clarity.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              Not everyone quits their job. But everyone walks away knowing something they didn&apos;t before.
            </p>
          </ScrollReveal>
        </div>


        {/* Carousel */}
        <ScrollReveal animation="fade-in" delay={300}>
          <div className="relative" role="region" aria-label="Testimonials slider">

            {/* Desktop edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden md:block bg-gradient-to-r from-white dark:from-neutral-900 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden md:block bg-gradient-to-l from-white dark:from-neutral-900 to-transparent" />

            {/* Card */}
            <div className="max-w-2xl mx-auto px-0 md:px-2xl mb-lg">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease-in-out`,
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-lg flex flex-col" style={{ border: '1.5px solid rgba(162,89,251,0.25)', boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)' }}>
                  {/* Quote */}
                  <blockquote className="flex-1 mb-lg" aria-label={`Testimonial from ${testimonial.name}`}>
                    <p className="font-body text-body-md text-body dark:text-neutral-300 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-md border-t border-neutral-200 dark:border-neutral-700/50">
                    <Avatar name={testimonial.name} src={testimonial.avatar} />
                    <div className="min-w-0">
                      <p className="font-heading font-semibold text-body-sm text-neutral-900 dark:text-white truncate">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-body-xs text-neutral-600 dark:text-neutral-300 truncate">
                        {testimonial.role}
                      </p>
                      <p className="font-body text-body-xs text-neutral-600 dark:text-neutral-300 mt-0.5">
                        {testimonial.sessions} conversations &middot; {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
              style={{ left: '0', width: '44px', height: '44px' }}
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
              style={{ right: '0', width: '44px', height: '44px' }}
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile arrows + progress dots */}
          <div className="flex items-center justify-center gap-md">
            <button
              onClick={handlePrev}
              className="md:hidden flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:border-primary-400 transition-all duration-200 text-neutral-500 hover:text-primary-600 flex-shrink-0"
              style={{ width: '44px', height: '44px' }}
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-xs">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleJumpTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
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

            <button
              onClick={handleNext}
              className="md:hidden flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:border-primary-400 transition-all duration-200 text-neutral-500 hover:text-primary-600 flex-shrink-0"
              style={{ width: '44px', height: '44px' }}
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Testimonials;
