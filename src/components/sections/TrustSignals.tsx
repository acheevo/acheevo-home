import { useState, useEffect } from 'react';
import { Container } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const TRUST_LABELS = ['Free during beta', 'Private and secure', 'No credit card required'];
const CYCLE_MS = 2500;

const TrustSignals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % TRUST_LABELS.length);
        setVisible(true);
      }, 300);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trust" aria-label="Trust signals and statistics" className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-dots-sm" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-3xl">
            <p className="eyebrow mb-sm">BY THE NUMBERS</p>
            <h2 className="font-heading text-h4 lg:text-h3 text-neutral-900 dark:text-white mb-sm font-semibold leading-tight">
              The numbers <span className="text-primary-700 dark:text-primary-400">speak for themselves</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              Real outcomes from real people — tracked since we launched.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats strip */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="relative rounded-2xl bg-white dark:bg-neutral-800 px-xl py-xl" style={{ border: '1.5px solid rgba(162,89,251,0.25)', boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-xl items-center">
                {/* Stat: 10k */}
                <div className="text-center md:border-r border-primary-200 dark:border-primary-700">
                  <div className="font-heading text-h2 font-semibold text-primary-700 dark:text-primary-400 mb-xs">
                    10k
                  </div>
                  <div className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-2xs">
                    Journeys Started
                  </div>
                  <p className="font-body text-body-sm text-body dark:text-neutral-300">
                    And still growing
                  </p>
                </div>

                {/* Stat: 50k Conversations */}
                <div className="text-center md:border-r border-primary-200 dark:border-primary-700">
                  <div className="font-heading text-h2 font-semibold text-primary-700 dark:text-primary-400 mb-xs">
                    50k
                  </div>
                  <div className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-2xs">
                    Conversations
                  </div>
                  <p className="font-body text-body-sm text-body dark:text-neutral-300">
                    AI-guided sessions
                  </p>
                </div>

                {/* Stat: 4.8 Rating */}
                <div className="text-center md:border-r border-primary-200 dark:border-primary-700">
                  <div className="font-heading text-h2 font-semibold text-primary-700 dark:text-primary-400 mb-xs">
                    4.8
                  </div>
                  <div className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-2xs">
                    Average Rating
                  </div>
                  <div className="flex items-center justify-center gap-xs">
                    <CheckCircle className="w-5 h-5 text-success-500 dark:text-success-400" strokeWidth={2.5} />
                    <p className="font-body text-body-sm text-body dark:text-neutral-300">
                      From 890 reviews
                    </p>
                  </div>
                </div>

                {/* Stat: 92% Success Rate */}
                <div className="text-center">
                  <div className="inline-block rounded-xl bg-primary-700 dark:bg-primary-600 px-lg py-xl">
                    <div className="font-heading text-h2 font-semibold text-white mb-xs">
                      92%
                    </div>
                    <div className="font-heading text-body-md font-semibold text-primary-100 mb-2xs">
                      Report feeling clearer
                    </div>
                    <p className="font-body text-body-sm text-primary-200">
                      After just 3 sessions
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </ScrollReveal>

        {/* Cycling trust label */}
        <div className="mt-lg flex items-center justify-center h-6" aria-live="polite">
          <span
            className="font-body text-body-sm text-primary-500 font-medium transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {TRUST_LABELS[activeIndex]}
          </span>
        </div>
      </Container>
    </section>
  );
};

export default TrustSignals;
