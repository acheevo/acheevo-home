import { useState, useEffect } from 'react';
import { Button, DarkModeToggle } from '@/components/ui';
import { APP_CONFIG } from '@/config/app';
import logoLight from '@/assets/Logos/Logo - Light mode.svg';
import logoDark from '@/assets/Logos/Logo - Dark Mode.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = `font-body text-body-md font-medium transition-all duration-300 relative group ${
    scrolled
      ? 'text-neutral-700 dark:text-neutral-200 hover:text-primary-700 dark:hover:text-primary-400'
      : 'text-white/90 hover:text-white'
  }`;

  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bg-white/85 dark:bg-neutral-900/90 border-b border-neutral-200/40 dark:border-white/10 shadow-sm'
          : 'bg-white/8 dark:bg-black/15'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-lg py-md">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-xs">

          {/* Brand — home link */}
          <a
            href="/"
            aria-label="Acheevo — go to homepage"
            className="flex items-center"
          >
            {/* Light logo: scrolled + light mode only */}
            <img
              src={logoLight}
              alt={APP_CONFIG.name}
              style={{ height: '28px', width: 'auto' }}
              className={`transition-opacity duration-300 dark:hidden ${scrolled ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
            />
            {/* Dark logo: unscrolled (over dark hero) in light mode + always in dark mode */}
            <img
              src={logoDark}
              alt={APP_CONFIG.name}
              style={{ height: '28px', width: 'auto' }}
              className={`transition-opacity duration-300 dark:block ${scrolled ? 'hidden' : 'block'}`}
            />
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center justify-center gap-lg" aria-label="Main navigation">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Pricing',      href: '#pricing' },
              { label: 'Stories',      href: '#testimonials' },
            ].map(({ label, href }) => (
              <a key={href} href={href} className={linkClass}>
                {label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  scrolled ? 'bg-primary-700 dark:bg-primary-400' : 'bg-white'
                }`} />
              </a>
            ))}
          </nav>

          {/* CTAs — desktop */}
          <div className="hidden md:flex items-center justify-end gap-md">
            <DarkModeToggle scrolled={scrolled} />
            <button
              className={`font-body text-body-md font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-neutral-700 dark:text-neutral-200 hover:text-primary-700 dark:hover:text-primary-400'
                  : 'text-white/90 hover:text-white'
              }`}
              aria-label="Sign in to your account"
            >
              Sign In
            </button>
            <Button
              size="md"
              variant={scrolled ? 'gradient' : 'outline'}
              className={!scrolled ? 'text-white border-white/50 hover:bg-white/10 hover:border-white' : ''}
              aria-label="Start your first conversation for free"
            >
              Start Free
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <div className="flex items-center gap-sm md:hidden">
            <DarkModeToggle scrolled={scrolled} />
            <button
              className={`w-11 h-11 flex items-center justify-center rounded-lg transition-colors ${
                scrolled ? 'text-neutral-700 dark:text-white' : 'text-white'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen(o => !o)}
            >
              {mobileMenuOpen ? (
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/20 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-lg py-md flex flex-col gap-sm">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Pricing',      href: '#pricing' },
              { label: 'Stories',      href: '#testimonials' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-body-lg text-neutral-800 dark:text-neutral-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors font-medium py-xs"
              >
                {label}
              </a>
            ))}
            <div className="flex flex-col gap-xs pt-sm border-t border-neutral-200 dark:border-neutral-700">
              <button
                className="font-body text-body-md text-neutral-700 dark:text-neutral-200 hover:text-primary-700 font-medium text-left py-xs"
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
              <Button
                size="md"
                variant="gradient"
                className="w-full"
                aria-label="Start your first conversation for free"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
