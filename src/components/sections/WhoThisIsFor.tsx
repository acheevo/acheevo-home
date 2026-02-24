import { Container, ScrollReveal, Button } from '@/components/ui';

const WhoThisIsFor = () => {
  const recognitionStatements = [
    "You've changed direction twice and still don't feel like you've found it.",
    "You're good at what you do, but you're not sure it's what you should be doing.",
    "You've tried journaling, personality tests, and nothing has quite clicked.",
    "You know what you don't want, but you're still figuring out what you do want.",
    "You're tired of advice that sounds good but doesn't tell you where to start.",
    "You feel like there's something you're meant to be doing, but you can't name it yet.",
    "You want clarity, not another framework to learn.",
    "You're ready to have the conversation you've been avoiding with yourself.",
  ];

  return (
    <section className="relative py-3xl bg-gradient-to-b from-neutral-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
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
              IS THIS FOR YOU?
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-heading dark:text-white mb-sm font-bold leading-tight">
              Acheevo is for you{' '}
              <span className="gradient-text">if…</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 2-column grid of recognition statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-5xl mx-auto mb-2xl">
          {recognitionStatements.map((statement, index) => (
            <ScrollReveal
              key={index}
              animation="slide-up"
              delay={index * 50}
              threshold={0.2}
            >
              <div className="flex items-start gap-md p-lg bg-white dark:bg-gray-800 rounded-xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed flex-1">
                  {statement}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Section CTA */}
        <ScrollReveal animation="fade-in" delay={400}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body text-body-lg text-body dark:text-gray-300 mb-md">
              If any of these landed — start here.
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="hover:shadow-glow"
              aria-label="Start your first conversation"
            >
              Start My First Conversation
            </Button>
            <p className="font-body text-body-sm text-neutral-500 dark:text-gray-400 mt-md">
              Free during beta
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default WhoThisIsFor;
