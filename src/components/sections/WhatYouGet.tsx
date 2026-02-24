import { Container, ScrollReveal } from '@/components/ui';

const WhatYouGet = () => {
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

  return (
    <section className="relative py-3xl bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(162, 89, 251) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-3xl">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">
              YOUR OUTPUT
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-heading dark:text-white mb-sm font-bold leading-tight">
              Here's what you get at the end of{' '}
              <span className="gradient-text">conversation 8</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Split Layout: Mockup Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center max-w-6xl mx-auto">
          {/* Left Side - Purpose Summary Mockup */}
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="relative">
              {/* Placeholder for Purpose Summary mockup/screenshot */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border-4 border-purple-200 dark:border-purple-700 p-xl shadow-elevated aspect-[4/5] flex flex-col justify-center">
                {/* Mockup Header */}
                <div className="text-center mb-xl">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-lg py-sm rounded-full text-body-sm font-bold mb-md">
                    YOUR PURPOSE SUMMARY
                  </div>
                  <h3 className="font-heading text-h5 text-heading dark:text-white font-bold">
                    [Your Name]'s Purpose
                  </h3>
                </div>

                {/* Mockup Content Sections */}
                <div className="space-y-lg">
                  {purposeSummaryComponents.slice(0, 3).map((_, index) => (
                    <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-md border border-purple-100 dark:border-purple-800">
                      <div className="h-2 w-16 bg-purple-300 dark:bg-purple-600 rounded mb-sm"></div>
                      <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mb-xs"></div>
                      <div className="h-3 w-4/5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-lg py-sm rounded-full text-body-sm font-bold shadow-lg rotate-12">
                Personalized
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Descriptive Copy */}
          <div className="space-y-lg">
            <ScrollReveal animation="slide-left" delay={250}>
              <p className="font-body text-body-xl text-body dark:text-gray-300 leading-relaxed font-light">
                Not a vague sense of direction. Not a personality type. A comprehensive document that synthesizes everything from your eight conversations into a clear, actionable summary.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={300}>
              <div className="space-y-md">
                <h3 className="font-heading text-h6 text-heading dark:text-white font-bold mb-md">
                  Your Purpose Summary includes:
                </h3>
                {purposeSummaryComponents.map((component, index) => (
                  <ScrollReveal key={index} animation="slide-left" delay={350 + index * 50}>
                    <div className="flex items-start gap-md p-md bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                        <span className="font-heading text-body-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-body-lg text-heading dark:text-white font-bold mb-xs">
                          {component.title}
                        </h4>
                        <p className="font-body text-body-sm text-body dark:text-gray-400 leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={600}>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-lg border-2 border-purple-200 dark:border-purple-700">
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                  <span className="font-bold">It's yours to keep, share, or revisit.</span> Export it as a PDF, use it in career conversations, or come back to refine it as you grow.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatYouGet;
