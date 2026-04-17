import { Container, ScrollReveal } from '@/components/ui';

const WhatYouGet = () => {
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

  return (
    <section id="your-output" aria-label="Your output" className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-white dark:bg-neutral-900 overflow-hidden transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2xl">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">YOUR OUTPUT</p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-neutral-900 dark:text-white mb-sm font-semibold leading-tight">
              Here&apos;s what you get at the end of{' '}
              <span className="text-primary-700 dark:text-primary-400">conversation 8</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={150}>
            <p className="font-body text-body-lg text-body dark:text-neutral-300 leading-relaxed font-light">
              Not a vague sense of direction. Not a personality type. A comprehensive document that synthesizes everything from your eight conversations into a clear, actionable summary.
            </p>
          </ScrollReveal>
        </div>

        {/* Purpose Summary Card */}
        <ScrollReveal animation="fade-in" delay={250}>
          <div className="max-w-3xl mx-auto">
            <div
              className="relative bg-white dark:bg-neutral-800 rounded-2xl px-xl md:px-2xl py-xl overflow-hidden"
              style={{
                border: '1.5px solid rgba(162,89,251,0.25)',
                boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {/* Items */}
              <div className="divide-y divide-neutral-100 dark:divide-neutral-700/50">
                {purposeSummaryComponents.map((component, index) => (
                  <div key={index} className="py-lg first:pt-0 last:pb-0">
                    <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-xs">
                      {component.title}
                    </h3>
                    <p className="font-body text-body-md text-body dark:text-neutral-300 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default WhatYouGet;
