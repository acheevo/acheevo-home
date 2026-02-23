import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

/**
 * ScrollReveal Component Props
 *
 * @property children - Content to reveal on scroll
 * @property animation - Animation type (default: 'fade-in')
 * @property delay - Animation delay in milliseconds (default: 0)
 * @property threshold - Intersection threshold 0-1, how much of element must be visible (default: 0.1)
 * @property once - Whether animation should only trigger once (default: true)
 * @property className - Additional CSS classes
 */
export interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

/**
 * ScrollReveal Component
 *
 * Wraps children with scroll-triggered animations using IntersectionObserver API.
 * Animations are triggered when the element enters the viewport.
 *
 * **Accessibility Features:**
 * - Respects `prefers-reduced-motion` media query (WCAG 2.1 Level AA)
 * - Users who prefer reduced motion see content immediately without animations
 * - Dynamically listens for changes to motion preferences
 *
 * **Usage:**
 * ```tsx
 * <ScrollReveal animation="slide-up" delay={100} threshold={0.2}>
 *   <div>Your content here</div>
 * </ScrollReveal>
 * ```
 */
const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion for accessibility
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // If user prefers reduced motion, show content immediately without animations
    if (mediaQuery.matches) {
      setIsVisible(true);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  const animationClasses = {
    'fade-in': 'opacity-0',
    'slide-up': 'translate-y-8 opacity-0',
    'slide-down': '-translate-y-8 opacity-0',
    'scale-in': 'scale-95 opacity-0',
    'slide-left': 'translate-x-8 opacity-0',
    'slide-right': '-translate-x-8 opacity-0',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'translate-y-0 opacity-100',
    'slide-down': 'translate-y-0 opacity-100',
    'scale-in': 'scale-100 opacity-100',
    'slide-left': 'translate-x-0 opacity-100',
    'slide-right': 'translate-x-0 opacity-100',
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        // If user prefers reduced motion, skip all transition classes
        prefersReducedMotion
          ? ''
          : 'transition-all duration-700 ease-out',
        // Show content immediately if reduced motion is preferred, otherwise animate
        prefersReducedMotion || isVisible
          ? visibleClasses[animation]
          : animationClasses[animation],
        className
      )}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transitionDelay: isVisible ? `${delay}ms` : '0ms',
            }
      }
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
