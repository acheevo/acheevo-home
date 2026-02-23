import { Container, Button } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';

const CTA = () => {
  return (
    <section className="relative p-[80px] overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">
      {/* Enhanced background pattern - scattered dots */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1.5px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Gentle wavy lines pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
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
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2xl">

            {/* Left side - Message */}
            <div className="flex-1 text-center md:text-left">
              <ScrollReveal animation="slide-up">
                <h2 className="font-heading text-h3 lg:text-h2 text-white leading-tight mb-lg font-bold" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}>
                  Ready to discover your purpose?
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={100}>
                <p className="font-body text-body-lg lg:text-body-xl text-white/95 leading-relaxed font-light" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                  Join 10,000+ people who've found clarity through meaningful conversation.
                </p>
              </ScrollReveal>
            </div>

            {/* Right side - Enhanced CTA */}
            <div className="flex-shrink-0">
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="flex flex-col items-center md:items-end gap-md">
                  {/* Solid white button with purple text and enhanced padding */}
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-50 shadow-2xl font-bold hover:scale-105 transition-all"
                    style={{
                      color: '#7C3AED',
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                      fontSize: '18px'
                    }}
                    aria-label="Start your purpose discovery journey for free"
                  >
                    Begin for Free
                  </Button>

                  {/* Trust note positioned to the right */}
                  <div className="flex items-center gap-xs">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium text-body-md" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
                      Free • No credit card required
                    </span>
                  </div>
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
