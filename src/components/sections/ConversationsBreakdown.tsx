import { Container, ScrollReveal } from '@/components/ui';

const ConversationsBreakdown = () => {
  const conversations = [
    {
      number: 1,
      title: "Peak Moments",
      description: "When have you felt most alive, fulfilled, or 'in flow'?",
    },
    {
      number: 2,
      title: "What Drains You",
      description: "What activities or situations leave you feeling depleted?",
    },
    {
      number: 3,
      title: "Core Values",
      description: "What principles guide your decisions and define who you are?",
    },
    {
      number: 4,
      title: "Natural Strengths",
      description: "What comes easily to you that others find difficult?",
    },
    {
      number: 5,
      title: "Ideal Environment",
      description: "Where and with whom do you do your best work?",
    },
    {
      number: 6,
      title: "Impact & Legacy",
      description: "What change do you want to see in the world?",
    },
    {
      number: 7,
      title: "Connecting the Dots",
      description: "How do all these patterns come together?",
    },
    {
      number: 8,
      title: "Your Purpose Summary",
      description: "A clear, actionable statement of what you're here to do.",
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
              WHAT YOU'LL ACTUALLY TALK ABOUT
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-heading dark:text-white mb-sm font-bold leading-tight">
              Eight sessions.{' '}
              <span className="gradient-text">Each one goes deeper.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={200}>
            <p className="font-body text-body-xl text-body dark:text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              Every conversation builds on the one before it, revealing patterns and insights that lead to your purpose.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile: Horizontal Scrollable | Desktop: 4+4 Grid */}
        <div className="relative">
          {/* Mobile Scrollable Container */}
          <div className="md:hidden overflow-x-auto pb-md -mx-md px-md scrollbar-hide">
            <div className="flex gap-md min-w-max">
              {conversations.map((conversation, index) => (
                <ScrollReveal
                  key={conversation.number}
                  animation="slide-up"
                  delay={index * 50}
                  threshold={0.1}
                >
                  <div className="w-[280px] bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg p-lg flex-shrink-0">
                    <div className="flex items-start gap-md mb-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                        <span className="font-heading text-body-lg font-bold text-white">
                          {conversation.number}
                        </span>
                      </div>
                      <h3 className="font-heading text-h6 text-heading dark:text-white font-bold leading-tight flex-1">
                        {conversation.title}
                      </h3>
                    </div>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed ml-[56px]">
                      {conversation.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Desktop 4+4 Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-lg max-w-7xl mx-auto">
            {conversations.map((conversation, index) => (
              <ScrollReveal
                key={conversation.number}
                animation="slide-up"
                delay={index * 75}
                threshold={0.2}
              >
                <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg p-lg h-full">
                  <div className="flex items-start gap-md mb-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                      <span className="font-heading text-body-lg font-bold text-white">
                        {conversation.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-h6 text-heading dark:text-white font-bold leading-tight flex-1">
                      {conversation.title}
                    </h3>
                  </div>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    {conversation.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="md:hidden text-center mt-md">
            <p className="font-body text-body-sm text-neutral-500 dark:text-gray-400">
              Swipe to see all conversations →
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ConversationsBreakdown;
