import { useState, useEffect, useRef, useCallback } from 'react';
import { Container, ScrollReveal } from '@/components/ui';

const CYCLE_MS = 15000;

const faqs = [
  {
    question: "What does it actually feel like to use Acheevo?",
    answer: "No generic advice. No pre-written responses. Acheevo adapts to your answers in real time, asking follow-up questions that feel personal—because they are. You'll feel heard, not processed.",
  },
  {
    question: "How is Acheevo different from ChatGPT or other AI tools?",
    answer: "ChatGPT is a general-purpose assistant that responds to whatever you ask. Acheevo is specifically designed for purpose discovery with a structured framework of 8 conversations that build on each other. It knows what questions to ask, when to dig deeper, and how to connect insights across sessions. Every conversation builds on the last—your insights, patterns, and breakthroughs are tracked and referenced throughout the journey. By the end, you'll have a living document of self-discovery, not just vague inspiration.",
  },
  {
    question: "Is Acheevo right for me?",
    answer: "Acheevo works best for people willing to reflect honestly, sit with discomfort, and take their answers seriously. This isn't passive content consumption. If you're tired of surface-level advice—personality tests, generic frameworks, blog posts that sound good but go nowhere—and you're ready for real self-discovery, you're in the right place.",
  },
  {
    question: "How long does each session take?",
    answer: "Each conversation takes 15–30 minutes, but you can go at your own pace. Some people complete one per day, others prefer one per week. There's no rush—the platform saves your progress automatically, and you can pause and resume whenever you like. Most people complete all 8 conversations within 4–8 weeks.",
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

const FAQ = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(0);

  const goTo = useCallback((index: number) => {
    if (index === activeRef.current) return;
    setVisible(false);
    setTimeout(() => {
      activeRef.current = index;
      setActive(index);
      setProgressKey(k => k + 1);
      setVisible(true);
    }, 200);
  }, []);

  const startCycle = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % faqs.length;
      goTo(next);
    }, CYCLE_MS);
  }, [goTo]);

  useEffect(() => {
    startCycle();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startCycle]);

  const handleSelect = (index: number) => {
    goTo(index);
    startCycle();
  };

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="px-md md:px-[80px] py-2xl md:py-[120px] bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <Container>
        {/* Header */}
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-[64px]">
            <p className="eyebrow mb-sm">FAQ</p>
            <h2 className="font-heading text-h4 lg:text-h3 font-semibold text-neutral-900 dark:text-white leading-tight">
              Common <span className="text-primary-700 dark:text-primary-400">Questions</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <ScrollReveal animation="fade-in" delay={100}>
          <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[80px]">

            {/* Left — question list */}
            <ul className="flex-shrink-0 lg:w-[420px] list-none m-0 p-0" aria-label="FAQ questions">
              {faqs.map((faq, index) => {
                const isActive = active === index;
                return (
                  <li key={index}>
                  <button
                    onClick={() => handleSelect(index)}
                    aria-pressed={isActive}
                    aria-controls="faq-answer"
                    className={`
                      group w-full text-left relative py-lg pr-md transition-colors duration-200
                      border-b border-neutral-100 dark:border-neutral-800
                      ${isActive ? 'pl-lg' : 'pl-0 hover:pl-sm'}
                    `}
                    style={{ transition: 'padding-left 200ms ease' }}
                  >
                    {/* Active left bar */}
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-primary-500 transition-opacity duration-200"
                      style={{ opacity: isActive ? 1 : 0 }}
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-md">
                      {/* Number */}
                      <span
                        className={`font-heading text-body-xs font-semibold mt-[3px] flex-shrink-0 transition-colors duration-200 ${
                          isActive
                            ? 'text-primary-500'
                            : 'text-neutral-300 dark:text-neutral-600 group-hover:text-primary-400'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Question text */}
                      <span
                        className={`font-body text-body-md leading-snug transition-colors duration-200 ${
                          isActive
                            ? 'text-neutral-900 dark:text-white font-medium'
                            : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Progress bar — only on active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                        <div
                          key={progressKey}
                          className="h-full bg-primary-400"
                          style={{
                            animation: `faq-progress ${CYCLE_MS}ms linear forwards`,
                          }}
                        />
                      </div>
                    )}
                  </button>
                  </li>
                );
              })}
            </ul>

            {/* Right — answer panel */}
            <div className="flex-1 lg:pt-lg">
              <div
                id="faq-answer"
                role="region"
                aria-live="polite"
                aria-atomic="true"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 200ms ease, transform 200ms ease',
                }}
              >
                <p className="font-body text-body-lg text-body dark:text-neutral-300 leading-relaxed">
                  {faqs[active].answer}
                </p>

                {/* Active question label */}
                <p className="mt-xl font-heading text-body-xs text-neutral-300 dark:text-neutral-600 uppercase tracking-widest">
                  {String(active + 1).padStart(2, '0')} / {String(faqs.length).padStart(2, '0')}
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </Container>

      {/* Progress bar keyframe */}
      <style>{`
        @keyframes faq-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
