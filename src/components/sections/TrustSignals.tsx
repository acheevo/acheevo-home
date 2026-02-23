import { Container } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const TrustSignals = () => {
  return (
    <section className="relative p-[80px] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(139, 92, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative">
        {/* Section Header with gradient emphasis */}
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-3xl">
            <h2 className="font-heading text-h4 lg:text-h3 text-gray-900 dark:text-white mb-sm font-semibold">
              Trusted by <span className="gradient-text">thousands</span> on their journey
            </h2>
            <p className="font-body text-body-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Join a growing community of people who've discovered their purpose and{' '}
              <span className="font-semibold text-gray-900 dark:text-white">transformed their lives</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Single horizontal stats strip with gradient border */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="relative rounded-2xl border-2 border-purple-100 dark:border-purple-800 bg-[#F3EFFE] dark:bg-gray-800 px-xl py-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-xl items-center">
                {/* Stat: 10k */}
                <div className="text-center md:border-r border-purple-200 dark:border-purple-700">
                  <div className="font-heading text-h2 font-semibold text-purple-700 dark:text-purple-400 mb-xs">
                    10k
                  </div>
                  <div className="font-heading text-body-md font-semibold text-gray-900 dark:text-white mb-2xs">
                    Lives Transformed
                  </div>
                  <p className="font-body text-body-sm text-gray-600 dark:text-gray-400">
                    &nbsp;
                  </p>
                </div>

                {/* Stat: 50k Conversations */}
                <div className="text-center md:border-r border-purple-200 dark:border-purple-700">
                  <div className="font-heading text-h2 font-semibold text-purple-700 dark:text-purple-400 mb-xs">
                    50k
                  </div>
                  <div className="font-heading text-body-md font-semibold text-gray-900 dark:text-white mb-2xs">
                    Conversations
                  </div>
                  <p className="font-body text-body-sm text-gray-600 dark:text-gray-400">
                    AI-guided sessions
                  </p>
                </div>

                {/* Stat: 4.8 Rating */}
                <div className="text-center md:border-r border-purple-200 dark:border-purple-700">
                  <div className="font-heading text-h2 font-semibold text-purple-700 dark:text-purple-400 mb-xs">
                    4.8
                  </div>
                  <div className="font-heading text-body-md font-semibold text-gray-900 dark:text-white mb-2xs">
                    Average Rating
                  </div>
                  <div className="flex items-center justify-center gap-xs">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" strokeWidth={2.5} />
                    <p className="font-body text-body-sm text-gray-600 dark:text-gray-400">
                      From verified users
                    </p>
                  </div>
                </div>

                {/* Stat: 92% Success Rate */}
                <div className="text-center">
                  <div className="inline-block rounded-xl bg-purple-700 dark:bg-purple-600 px-lg py-xl">
                    <div className="font-heading text-h2 font-semibold text-white mb-xs">
                      92%
                    </div>
                    <div className="font-heading text-body-md font-semibold text-purple-100 mb-2xs">
                      Success Rate
                    </div>
                    <p className="font-body text-body-sm text-purple-200">
                      Find clarity in 1-3 sessions
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </ScrollReveal>

        {/* Consolidated trust badges inline strip */}
        <ScrollReveal animation="fade-in" delay={400}>
          <div className="mt-2xl flex flex-wrap items-center justify-center gap-md">
            <div className="inline-flex items-center px-md py-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 shadow-lg">
              <span className="font-body text-body-sm text-gray-700 dark:text-gray-300 font-medium">
                Free during beta
              </span>
            </div>
            <div className="inline-flex items-center px-md py-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 shadow-lg">
              <span className="font-body text-body-sm text-gray-700 dark:text-gray-300 font-medium">
                Private & secure
              </span>
            </div>
            <div className="inline-flex items-center px-md py-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 shadow-lg">
              <span className="font-body text-body-sm text-gray-700 dark:text-gray-300 font-medium">
                No credit card required
              </span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default TrustSignals;
