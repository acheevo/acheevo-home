import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import ScrollReveal from '@/components/ui/ScrollReveal';
import hero1 from '@/assets/HERO1.jpg';
import hero2 from '@/assets/HERO2.jpg';
import hero3 from '@/assets/HERO3.jpg';

const HEROES = [hero1, hero2, hero3];
const CYCLE_MS = 8000;

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(i => (i + 1) % HEROES.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" aria-label="Hero" className="relative min-h-[90vh] h-[90vh] overflow-hidden flex flex-col rounded-bl-[48px] rounded-br-[48px]">

      {/* Cycling hero backgrounds */}
      <div className="absolute inset-0" aria-hidden="true">
        {HEROES.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns will-change-transform"
            style={{
              backgroundImage: `url(${src})`,
              opacity: bgIndex === i ? 1 : 0,
              transition: 'opacity 1200ms ease-in-out',
            }}
          />
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/23 via-purple-800/19 to-purple-900/26 dark:from-purple-950/40 dark:via-purple-900/35 dark:to-purple-950/45" />
        <div className="absolute inset-0 bg-purple-600/25 mix-blend-multiply dark:bg-purple-800/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60" />
      </div>

      {/* Soft ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex-grow flex items-center justify-center text-center z-10 px-lg">
        <div className="max-w-4xl mx-auto space-y-lg">
          {/* Social proof badge */}
          <ScrollReveal animation="fade-in" delay={0}>
            <div className="flex items-center justify-center mb-md">
              <div className="inline-flex items-center px-md py-xs bg-white/15 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                <span className="font-body text-body-sm text-gray-100 font-medium">+10k people found clarity</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Main headline */}
          <ScrollReveal animation="slide-up" delay={100}>
            <h1 className="font-heading text-h3 md:text-h2 lg:text-h1 text-white leading-tight" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Find your direction.{' '}
              <br />
              <span className="font-semibold">Change your life.</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal animation="slide-up" delay={200}>
            <p className="font-body text-body-lg md:text-body-xl text-white/90 leading-relaxed font-light" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
              Your purpose isn&apos;t lost — it&apos;s undiscovered. Acheevo guides you there, one conversation at a time.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="flex items-center justify-center pt-md">
              <Button
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto font-semibold hover:shadow-glow bg-primary-700 hover:bg-primary-800"
                aria-label="Start your journey and begin your first conversation for free"
              >
                Start Your Journey
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
};

export default Hero;