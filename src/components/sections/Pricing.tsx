import { Container, Button, ScrollReveal } from '@/components/ui';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What happens when beta ends?",
      answer: "When the beta period ends, you'll have the option to continue with a paid subscription at €15/month. You'll be notified well in advance, and all your conversation history and insights will be preserved. If you choose not to continue, you can export all your data before the transition."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! There's no long-term commitment. You can cancel your subscription at any time, and you'll retain access until the end of your billing period. You can also export all your insights and conversation history at any point."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, your privacy is our top priority. Your conversations and insights are encrypted and stored securely. We never share your personal data with third parties, and you have full control over your information. You can delete your data at any time."
    },
    {
      question: "What's included in the subscription?",
      answer: "Your subscription includes unlimited access to all 8 guided conversations, the ability to revisit and refine your answers, export your insights in multiple formats, and future updates and improvements to the platform. We're constantly adding new features based on user feedback."
    }
  ];

  return (
    <section id="pricing" className="p-[80px] bg-gradient-to-b from-white to-neutral-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <ScrollReveal animation="fade-in">
            <h2 className="text-h4 lg:text-h3 font-bold text-neutral-900 dark:text-white mb-sm">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={100}>
            <p className="text-body-lg text-neutral-600 dark:text-gray-300 font-light">
              Free now. Affordable later.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-tier pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg max-w-5xl mx-auto mb-xl">
          {/* Left Card - Beta (Current) */}
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="relative glass-purple dark:bg-gray-800 dark:border-purple-700 transition-all duration-300 p-lg space-y-md overflow-hidden shadow-elevated hover:shadow-elevated-lg transform hover:-translate-y-1 border-4 border-purple-500 dark:border-purple-600">
              {/* "Current" Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-lg py-xs rounded-bl-2xl font-semibold text-body-sm">
                Current
              </div>

              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>

              {/* Subtle gradient mesh background */}
              <div className="absolute inset-0 gradient-mesh opacity-30 dark:opacity-20 pointer-events-none"></div>

              {/* Tier label */}
              <div className="relative z-10 text-center pt-md">
                <h3 className="text-h5 font-bold text-neutral-900 dark:text-white mb-xs">
                  Beta Access
                </h3>
                <p className="text-body-md text-neutral-600 dark:text-gray-400">
                  Free while in beta
                </p>
              </div>

              {/* Price */}
              <div className="text-center pb-md border-b border-neutral-200 dark:border-gray-700 relative z-10">
                <div className="text-h1 font-bold gradient-text mb-xs">
                  Free
                </div>
                <p className="text-neutral-600 dark:text-gray-400 text-body-md">
                  Limited time offer
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-sm relative z-10">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-700 dark:text-gray-300 text-body-md">8 guided conversations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-700 dark:text-gray-300 text-body-md">Save and export your insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-700 dark:text-gray-300 text-body-md">Come back anytime</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-700 dark:text-gray-300 text-body-md">Cancel whenever</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-700 dark:text-gray-300 text-body-md">All future updates included</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="relative z-10 space-y-xs pt-md">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  aria-label="Start your 8-conversation journey for free"
                >
                  Begin for Free
                </Button>
                <p className="text-center text-body-sm text-neutral-600 dark:text-gray-400">
                  No email required to start
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card - After Beta */}
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="relative bg-white dark:bg-gray-800 transition-all duration-300 p-lg space-y-md overflow-hidden shadow-card rounded-3xl border-2 border-neutral-200 dark:border-gray-700 opacity-75">
              {/* "Coming Soon" Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-neutral-400 to-neutral-300 text-white px-lg py-xs rounded-bl-2xl font-semibold text-body-sm">
                Coming Soon
              </div>

              {/* Tier label */}
              <div className="relative z-10 text-center pt-md">
                <h3 className="text-h5 font-bold text-neutral-700 dark:text-gray-300 mb-xs">
                  After Beta
                </h3>
                <p className="text-body-md text-neutral-500 dark:text-gray-400">
                  When beta ends
                </p>
              </div>

              {/* Price */}
              <div className="text-center pb-md border-b border-neutral-200 dark:border-gray-700 relative z-10">
                <div className="text-h1 font-bold text-neutral-700 dark:text-gray-300 mb-xs">
                  €15
                  <span className="text-h5 text-neutral-500 dark:text-gray-400 font-normal">/month</span>
                </div>
                <p className="text-neutral-500 dark:text-gray-400 text-body-md">
                  Simple monthly pricing
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-sm relative z-10">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-neutral-400 dark:text-gray-500 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-600 dark:text-gray-400 text-body-md">8 guided conversations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-neutral-400 dark:text-gray-500 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-600 dark:text-gray-400 text-body-md">Save and export your insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-neutral-400 dark:text-gray-500 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-600 dark:text-gray-400 text-body-md">Come back anytime</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-neutral-400 dark:text-gray-500 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-600 dark:text-gray-400 text-body-md">Cancel whenever</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-neutral-400 dark:text-gray-500 mr-xs flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-neutral-600 dark:text-gray-400 text-body-md">All future updates included</span>
                </li>
              </ul>

              {/* CTA - Disabled state */}
              <div className="relative z-10 space-y-xs pt-md">
                <Button
                  size="lg"
                  className="w-full bg-neutral-300 dark:bg-gray-700 text-neutral-600 dark:text-gray-400 cursor-not-allowed hover:bg-neutral-300 dark:hover:bg-gray-700"
                  disabled
                  aria-label="Not available during beta"
                >
                  Not Available Yet
                </Button>
                <p className="text-center text-body-sm text-neutral-500 dark:text-gray-400">
                  Start with free beta access
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="fade-in" delay={400}>
            <h3 className="text-h5 lg:text-h4 font-bold text-neutral-900 dark:text-white text-center mb-xl">
              Frequently Asked Questions
            </h3>
          </ScrollReveal>

          <div className="space-y-sm">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={450 + index * 50}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden border border-neutral-200 dark:border-gray-700">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-xl py-lg flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-gray-700/50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-heading text-body-lg font-semibold text-neutral-900 dark:text-white pr-md">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-neutral-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-xl pb-lg pt-xs">
                      <p className="text-body-md text-neutral-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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

export default Pricing;
