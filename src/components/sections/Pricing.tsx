import { Container, Button, ScrollReveal } from '@/components/ui';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" aria-label="Pricing" className="px-md md:px-[80px] py-2xl md:py-[120px] bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">PRICING</p>
            <h2 className="font-heading text-h4 lg:text-h3 font-semibold text-neutral-900 dark:text-white mb-sm leading-tight">
              Simple, <span className="text-primary-700 dark:text-primary-400">Transparent Pricing</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={100}>
            <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 font-light">
              Try the full experience free during beta. No credit card. Your conversations are private.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-tier pricing cards */}
        <div className="flex flex-wrap justify-center gap-lg mb-2xl">
          {/* Left Card - Beta (Current) */}
          <ScrollReveal animation="slide-up" delay={200} className="w-full md:w-[480px]">
            <div
              className="relative flex flex-col items-start bg-white dark:bg-neutral-800 rounded-3xl duration-300 w-full"
              style={{
                padding: '24px',
                gap: '24px',
                border: '1.5px solid rgba(162,89,251,0.25)',
                boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {/* "Current" Badge — absolute top right */}
              <div className="absolute top-0 right-0 bg-primary-700 text-white px-lg py-xs rounded-bl-2xl rounded-tr-3xl flex items-center gap-sm">
                <span className="font-semibold text-body-sm">Current</span>
                <div className="w-px h-3 bg-primary-400 opacity-50" aria-hidden="true"></div>
                <div className="flex items-center gap-xs">
                  <div className="w-[6px] h-[6px] rounded-full animate-pulse flex-shrink-0 bg-primary-200" aria-hidden="true"></div>
                  <span className="text-body-xs font-medium text-primary-200">Ending soon</span>
                </div>
              </div>

              {/* Tier label */}
              <div className="text-left pt-md w-full">
                <h3 className="font-heading text-h5 font-semibold text-neutral-900 dark:text-white mb-xs">
                  Beta Access
                </h3>
                <p className="font-body text-body-md text-body dark:text-neutral-300">
                  Full access, completely free
                </p>
              </div>

              {/* Price */}
              <div className="text-left w-full">
                <div className="text-h2 font-semibold text-primary-700 dark:text-primary-400">
                  Free
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-xs w-full flex-1">
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-action dark:text-primary-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">8 guided conversations</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-action dark:text-primary-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Save and export your insights</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-action dark:text-primary-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Come back anytime</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-action dark:text-primary-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">All future updates included</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="space-y-xs w-full">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  aria-label="Claim your free access before beta ends"
                >
                  Claim My Free Access
                </Button>
                <p className="text-left text-body-sm text-neutral-600 dark:text-neutral-400">
                  No email required to start
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card - After Beta */}
          <ScrollReveal animation="slide-up" delay={300} className="w-full md:w-[480px]">
            <div
              className="relative flex flex-col items-start bg-white dark:bg-neutral-800 rounded-3xl duration-300 opacity-75 w-full"
              style={{
                padding: '24px',
                gap: '24px',
                border: '1.5px solid rgba(162,89,251,0.25)',
                boxShadow: '0 8px 40px rgba(162,89,251,0.08), 0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {/* "Coming Soon" Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-neutral-400 to-neutral-300 text-white px-lg py-xs rounded-bl-2xl rounded-tr-3xl font-semibold text-body-sm">
                Coming Soon
              </div>

              {/* Tier label */}
              <div className="text-left pt-md w-full">
                <h3 className="font-heading text-h5 font-semibold text-neutral-700 dark:text-neutral-300 mb-xs">
                  After Beta
                </h3>
                <p className="font-body text-body-md text-body dark:text-neutral-300">
                  When beta ends · Simple monthly pricing
                </p>
              </div>

              {/* Price */}
              <div className="text-left w-full">
                <div className="text-h2 font-semibold text-neutral-700 dark:text-neutral-300">
                  €15
                  <span className="text-h5 text-neutral-500 dark:text-neutral-400 font-normal">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-xs w-full flex-1">
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-neutral-400 dark:text-neutral-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Everything in Beta, plus:</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-neutral-400 dark:text-neutral-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Priority support and early feature access</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-neutral-400 dark:text-neutral-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Advanced analytics and tracking</span>
                </li>
                <li className="flex items-center gap-sm">
                  <Check className="w-[20px] h-[20px] text-neutral-400 dark:text-neutral-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-body text-body-md text-body dark:text-neutral-300">Quarterly purpose check-ins</span>
                </li>
              </ul>

              {/* CTA - Email Capture */}
              <div className="space-y-xs w-full">
                <label htmlFor="notify-email" className="sr-only">Email address for launch notification</label>
                <div className="flex items-center w-full rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 focus-within:border-primary-500 dark:focus-within:border-primary-400 transition-colors pr-xs">
                  <input
                    id="notify-email"
                    type="email"
                    placeholder="Your email"
                    className="flex-1 min-w-0 px-md py-sm bg-transparent text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none"
                    aria-label="Email address for paid tier updates"
                  />
                  <button
                    className="flex-shrink-0 bg-neutral-700 dark:bg-neutral-600 text-white hover:bg-neutral-800 dark:hover:bg-neutral-500 transition-colors font-semibold text-body-sm px-md py-xs rounded-lg"
                    aria-label="Get notified when paid tier launches"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="text-left text-body-sm text-neutral-500 dark:text-neutral-400">
                  Get notified when it launches
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </Container>
    </section>
  );
};

export default Pricing;
