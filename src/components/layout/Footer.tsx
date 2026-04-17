import { Link } from 'react-router-dom';
import { Container } from '@/components/ui';
import logoDark from '@/assets/Logos/Logo - Dark Mode.svg';

const NAV_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'What you get', href: '#your-output' },
      { label: "Who it's for", href: '#who-its-for' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about', internal: true },
      { label: 'Contact', href: 'mailto:hello@acheevo.com' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy', internal: true },
      { label: 'Terms of Service', href: '/terms', internal: true },
      { label: 'Cookie Policy', href: '/cookies', internal: true },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-neutral-900 dark:bg-neutral-950 px-md md:px-[80px] pt-[64px] pb-[40px] transition-colors duration-300"
    >
      <Container>
        {/* Top section: brand + nav columns */}
        <div className="flex flex-col lg:flex-row lg:gap-[80px] gap-[48px] mb-[64px]">

          {/* Brand column */}
          <div className="flex-shrink-0 lg:w-[280px]">
            <img src={logoDark} alt="Acheevo" style={{ height: '28px', width: 'auto' }} className="mb-sm" />
            <p className="font-body text-body-sm text-neutral-400 leading-relaxed mb-xl">
              Discover your purpose<br />in 8 conversations.
            </p>

            {/* Social icons */}
            <div className="flex gap-lg" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  role="listitem"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 md:grid-cols-3 gap-x-[48px] gap-y-[40px] flex-1"
          >
            {NAV_COLUMNS.map(({ heading, links }) => (
              <div key={heading}>
                <p className="font-heading font-semibold text-body-sm text-primary-500 uppercase tracking-widest mb-sm">
                  {heading}
                </p>
                <ul className="space-y-xs" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      {'internal' in link && link.internal ? (
                        <Link
                          to={link.href}
                          className="font-body text-body-md text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="font-body text-body-md text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mb-lg" aria-hidden="true" />

        {/* Bottom bar: copyright */}
        <p className="font-body text-body-xs text-neutral-500 text-center">
          &copy; {new Date().getFullYear()} Acheevo. All rights reserved.
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
