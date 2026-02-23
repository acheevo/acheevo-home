import { Container, ScrollReveal, Button } from '@/components/ui';

const Features = () => {
  const features = [
    {
      step: 1,
      title: "Start talking",
      description: "We ask questions. Simple at first, then deeper. Just a conversation that adapts to you.",
      imageSrc: "/images/feature-conversation.svg",
      imageAlt: "Conversation illustration",
    },
    {
      step: 2,
      title: "See the patterns",
      description: "Themes will emerge—what you value, what energizes you. We'll help you see the connections.",
      imageSrc: "/images/feature-discovery.svg",
      imageAlt: "Discovery illustration",
    },
    {
      step: 3,
      title: "Know what's next",
      description: "You'll leave with clear direction. Not vague advice—specific next steps you can take.",
      imageSrc: "/images/feature-roadmap.svg",
      imageAlt: "Roadmap illustration",
    },
  ];

  return (
    <section id="how-it-works" className="relative p-[80px] bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
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
              OUR SIMPLE PROCESS
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <h2 className="font-heading text-h4 lg:text-h3 text-heading dark:text-white mb-sm font-bold leading-tight">
              How it{' '}
              <span className="gradient-text">works</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={200}>
            <p className="font-body text-body-xl text-body dark:text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              We'll guide you through eight conversations designed to help you understand yourself better.
            </p>
          </ScrollReveal>
        </div>

        {/* Three-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.step}
              animation="slide-up"
              delay={index * 150}
              threshold={0.2}
            >
              <div className="group bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                {/* Content - with padding to create space */}
                <div className="p-lg">
                  <p className="font-heading text-h6 text-purple-700 dark:text-purple-400 mb-md font-bold text-left">
                    {feature.step}. {feature.title}
                  </p>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA section */}
        <ScrollReveal animation="fade-in" delay={500}>
          <div className="text-center mt-3xl pt-xl border-t border-neutral-200 dark:border-gray-700 max-w-2xl mx-auto">
            <p className="font-body text-body-lg text-body dark:text-gray-300 mb-md">
              Ready to start conversation #1?
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="hover:shadow-glow"
              aria-label="Start your first conversation now"
            >
              Begin for Free
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

export default Features;
