import { Button } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { APP_CONFIG } from '@/config/app';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-white flex items-center justify-center overflow-hidden p-sm">
      <div className="relative z-10 w-full h-full">
        {/* Hero container with rounded corners and mountain background */}
        <div className="relative rounded-3xl overflow-hidden h-full flex flex-col">
          {/* Mountain background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/backgrounds/hero-mountain.jpg)',
            }}
          >
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/65 via-purple-800/55 to-purple-900/75" />
            <div className="absolute inset-0 bg-purple-600/25 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Soft ambient light effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full filter blur-3xl" />
          </div>

          {/* Navigation - Inside hero container */}
          <nav className="relative z-20 px-lg py-md">
            <div className="grid grid-cols-3 items-center gap-xs">
              {/* Section 1: Brand (logomark + wordmark) - Left aligned */}
              <div className="flex items-center gap-sm">
                <svg
                  className="w-24 h-24 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6 L12 12 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
                <span className="font-heading text-h5 font-bold text-white">
                  {APP_CONFIG.name}
                </span>
              </div>

              {/* Section 2: Navigation Links - Center */}
              <div className="hidden md:flex items-center justify-center gap-lg">
                <a
                  href="#how-it-works"
                  className="font-body text-body-md text-white/90 hover:text-white transition-all duration-200 font-medium relative group"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#pricing"
                  className="font-body text-body-md text-white/90 hover:text-white transition-all duration-200 font-medium relative group"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#testimonials"
                  className="font-body text-body-md text-white/90 hover:text-white transition-all duration-200 font-medium relative group"
                >
                  Stories
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>

              {/* Section 3: CTAs - Right aligned */}
              <div className="hidden md:flex items-center justify-end gap-md">
                <button
                  className="font-body text-body-md text-white/90 hover:text-white transition-colors font-medium"
                  aria-label="Sign in to your account"
                >
                  Sign In
                </button>
                <Button
                  size="md"
                  variant="outline"
                  className="text-white border-white/50 hover:bg-white/10 hover:border-white"
                  aria-label="Start your free journey to discover purpose"
                >
                  Begin for Free
                </Button>
              </div>
            </div>
          </nav>

          {/* Content */}
          <div className="relative flex-grow flex items-center justify-center text-center z-10 py-3xl px-lg">
            <div className="max-w-4xl mx-auto space-y-xl">
              {/* Social proof badge */}
              <ScrollReveal animation="fade-in" delay={0}>
                <div className="flex items-center justify-center mb-md">
                  <div className="inline-flex items-center px-md py-xs bg-white/15 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                    <span className="font-body text-body-sm text-gray-100 font-medium">Join 10,000+ people finding their purpose</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Main headline - Emotionally resonant and aspirational */}
              <ScrollReveal animation="slide-up" delay={100}>
                <h1 className="font-heading text-h3 md:text-h2 lg:text-h1 text-white leading-tight mb-sm" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                  Feeling stuck?{' '}
                  <br />
                  Let's figure out what{' '}
                  <span className="font-bold">you're here to do</span>
                </h1>
              </ScrollReveal>

              {/* Subtitle - Speaks to pain and solution */}
              <ScrollReveal animation="slide-up" delay={200}>
                <p className="font-body text-body-lg md:text-body-xl text-white leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
                  Through eight guided conversations, we'll help you understand what you value, what you're good at, and where those two things meet.{' '}
                  <span className="font-medium text-white">No fluff. Just clarity.</span>
                </p>
              </ScrollReveal>

              {/* CTA Buttons - Specific and action-oriented */}
              <ScrollReveal animation="slide-up" delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-md pt-xl">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full sm:w-auto font-semibold hover:shadow-glow"
                    aria-label="Begin your 8-conversation journey to discover your purpose"
                  >
                    Begin for Free
                  </Button>

                  {/* Secondary CTA */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto font-semibold text-white border-white/50 hover:bg-white/10 hover:border-white"
                    aria-label="Scroll to see how Acheevo works"
                  >
                    See How It Works ↓
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;