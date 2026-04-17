import { Container, Button } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';

const CTA = () => {
  return (
    <section id="cta" aria-label="Start for free" className="relative px-md md:px-[80px] py-2xl md:py-[120px] overflow-hidden bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-primary-900 transition-colors duration-300" style={{ borderRadius: '48px 48px 0 0' }}>
      {/* Enhanced background pattern - scattered dots */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1.5px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Gentle wavy lines pattern */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.5"
              />
              <path
                d="M0 70 Q 25 50, 50 70 T 100 70"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3xl">

            {/* Left side - Message */}
            <div className="flex-1 text-center md:text-left">
              <ScrollReveal animation="slide-up">
                <h2 className="font-heading text-h4 lg:text-h3 text-white leading-tight mb-lg font-semibold">
                  Sometimes the right questions<br />are all it takes.
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={100}>
                <p className="font-body text-body-lg text-white leading-relaxed font-light">
                  Start free. No email required. See what surfaces in just 15 minutes.<br />Your data is private and never shared.
                </p>
              </ScrollReveal>
            </div>

            {/* Right side - Enhanced CTA */}
            <div className="flex-shrink-0">
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="flex flex-col items-center md:items-end gap-md">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-neutral-50 text-primary-700 shadow-2xl font-semibold hover:scale-105 transition-all"
                    style={{
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                    }}
                    aria-label="Start your first purpose discovery conversation for free"
                  >
                    Start Conversation
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
