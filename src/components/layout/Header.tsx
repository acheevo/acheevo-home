import { useState, useEffect } from 'react';
import { Container, Button } from '@/components/ui';
import { APP_CONFIG } from '@/config/app';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-lg py-md">
        {/* 3-column grid layout: Logo left, Nav center, CTAs right */}
        <div className="grid grid-cols-3 items-center gap-xs">
            {/* Section 1: Brand (logomark + wordmark) - Left aligned */}
            <div className="flex items-center gap-sm">
              <svg
                className="w-24 h-24 text-action"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6 L12 12 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
              <span className="font-heading text-h5 font-bold text-action">
                {APP_CONFIG.name}
              </span>
            </div>

            {/* Section 2: Navigation Links - Center */}
            <nav className="hidden md:flex items-center justify-center gap-lg">
              <a
                href="#how-it-works"
                className="font-body text-body-md text-body hover:text-action transition-all duration-200 font-medium relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#pricing"
                className="font-body text-body-md text-body hover:text-action transition-all duration-200 font-medium relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#testimonials"
                className="font-body text-body-md text-body hover:text-action transition-all duration-200 font-medium relative group"
              >
                Stories
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Section 3: CTAs - Right aligned */}
            <div className="hidden md:flex items-center justify-end gap-md">
              <button
                className="font-body text-body-md text-body hover:text-action transition-colors font-medium"
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
              <Button
                size="md"
                aria-label="Start your free journey to discover purpose"
              >
                Begin for Free
              </Button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;