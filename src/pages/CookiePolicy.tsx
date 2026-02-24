import { Link } from 'react-router-dom';
import { ArrowLeft, Chrome, Globe, Monitor, Compass } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';
import { Button, Container, ScrollReveal } from '@/components/ui';
import { Footer } from '@/components';

const sections = [
  'What Are Cookies?',
  'Types of Cookies We Use',
  'Specific Cookies We Use',
  'Third-Party Cookies',
  'How to Manage Cookies',
  'Changes to This Cookie Policy',
  'Contact Us',
];

const toId = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-sm">
    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 flex-shrink-0" />
    <span className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">{children}</span>
  </li>
);

const SectionCard = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <ScrollReveal animation="slide-up">
    <div
      id={id}
      className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg mb-md scroll-mt-24"
    >
      <h2 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-md">
        {title}
      </h2>
      {children}
    </div>
  </ScrollReveal>
);

const cookieTypes = [
  {
    name: 'Essential',
    number: '1.',
    accentClass: 'border-l-4 border-green-500',
    badgeClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700',
    description:
      'These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access to your account, and access to secure areas of the website.',
    details: [
      { label: 'Purpose', value: 'Authentication, security, and basic functionality' },
      { label: 'Duration', value: 'Session or up to 1 year' },
      { label: 'Can be disabled', value: 'No (required for the service to work)' },
    ],
  },
  {
    name: 'Analytics',
    number: '2.',
    accentClass: 'border-l-4 border-blue-500',
    badgeClass: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700',
    description:
      'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this information to improve our website and services.',
    details: [
      { label: 'Purpose', value: 'Website analytics and performance monitoring' },
      { label: 'Duration', value: 'Up to 2 years' },
      { label: 'Can be disabled', value: 'Yes' },
      { label: 'Third parties', value: 'Google Analytics (anonymized)' },
    ],
  },
  {
    name: 'Functional',
    number: '3.',
    accentClass: 'border-l-4 border-purple-500',
    badgeClass: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700',
    description:
      'These cookies enable enhanced functionality and personalization, such as remembering your preferences (language, theme, region) and providing personalized content.',
    details: [
      { label: 'Purpose', value: 'User preferences and personalization' },
      { label: 'Duration', value: 'Up to 1 year' },
      { label: 'Can be disabled', value: 'Yes (may affect functionality)' },
    ],
  },
  {
    name: 'Marketing',
    number: '4.',
    accentClass: 'border-l-4 border-orange-500',
    badgeClass: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-700',
    description:
      'These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns.',
    details: [
      { label: 'Purpose', value: 'Targeted advertising and marketing analytics' },
      { label: 'Duration', value: 'Up to 2 years' },
      { label: 'Can be disabled', value: 'Yes' },
      { label: 'Third parties', value: 'Facebook Pixel, Google Ads (if applicable)' },
    ],
  },
];

const cookieRows = [
  { name: 'session_id', purpose: 'User session management', type: 'Essential', duration: 'Session', typeColor: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700' },
  { name: 'cookie_consent', purpose: 'Store cookie preferences', type: 'Essential', duration: '1 year', typeColor: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700' },
  { name: 'theme_preference', purpose: 'Remember dark/light mode', type: 'Functional', duration: '1 year', typeColor: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700' },
  { name: '_ga', purpose: 'Google Analytics tracking', type: 'Analytics', duration: '2 years', typeColor: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700' },
];

const browserSteps = [
  {
    icon: <Chrome className="w-5 h-5" />,
    name: 'Chrome',
    path: 'Settings \u2192 Privacy and security \u2192 Cookies and other site data',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    name: 'Firefox',
    path: 'Settings \u2192 Privacy & Security \u2192 Cookies and Site Data',
  },
  {
    icon: <Compass className="w-5 h-5" />,
    name: 'Safari',
    path: 'Preferences \u2192 Privacy \u2192 Manage Website Data',
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    name: 'Edge',
    path: 'Settings \u2192 Cookies and site permissions \u2192 Manage cookies',
  },
];

const CookiePolicy = () => {
  const lastUpdated = 'February 24, 2026';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">

      {/* Mini Nav Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-[80px] py-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-h5 font-bold text-heading dark:text-white hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
          >
            {APP_CONFIG.name}
          </Link>
          <div className="flex items-center gap-md">
            <Link
              to="/"
              className="inline-flex items-center gap-xs font-body text-body-sm text-body dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Button variant="gradient" size="sm">
              Start Free
            </Button>
          </div>
        </div>
      </header>

      {/* Page Hero Header */}
      <section className="bg-[#F3EFFE] dark:bg-gray-800 p-[80px]">
        <Container size="xl">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">LEGAL</p>
            <h1 className="font-heading text-h1 text-heading dark:text-white font-bold mb-lg max-w-3xl">
              Cookie{' '}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed max-w-2xl mb-lg">
              We use cookies to make Acheevo work. Here&apos;s which ones, why, and how to control them.
            </p>
            <span className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400">
              Last updated: {lastUpdated}
            </span>
          </ScrollReveal>
        </Container>
      </section>

      <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="p-[80px]">
          <Container size="xl">
            <div className="flex gap-xl items-start">

              {/* Sticky Table of Contents — desktop only */}
              <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-24">
                <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-md">
                  <p className="font-heading text-body-sm text-purple-700 dark:text-purple-400 font-bold mb-md uppercase tracking-wider">
                    Contents
                  </p>
                  <nav className="space-y-xs">
                    {sections.map((section) => (
                      <a
                        key={section}
                        href={`#${toId(section)}`}
                        className="block font-body text-body-sm text-body dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors leading-snug py-[2px]"
                      >
                        {section}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 min-w-0">

                <SectionCard id={toId('What Are Cookies?')} title="What Are Cookies?">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely
                    used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    {APP_CONFIG.name} uses cookies and similar tracking technologies to improve your experience, analyze
                    website traffic, and understand where our visitors are coming from.
                  </p>
                </SectionCard>

                {/* Types of Cookies — accent bar cards */}
                <ScrollReveal animation="slide-up">
                  <div
                    id={toId('Types of Cookies We Use')}
                    className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg mb-md scroll-mt-24"
                  >
                    <h2 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-lg">
                      Types of Cookies We Use
                    </h2>
                    <div className="space-y-md">
                      {cookieTypes.map((ct) => (
                        <div
                          key={ct.name}
                          className={`bg-white dark:bg-gray-900 rounded-xl p-md ${ct.accentClass} hover:shadow-md transition-all duration-200`}
                        >
                          <div className="flex items-center gap-sm mb-sm">
                            <span className="font-body text-body-sm text-gray-500 dark:text-gray-500">{ct.number}</span>
                            <span
                              className={`inline-flex items-center px-sm py-[2px] rounded-full border font-body text-body-sm font-semibold ${ct.badgeClass}`}
                            >
                              {ct.name}
                            </span>
                          </div>
                          <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                            {ct.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-xs">
                            {ct.details.map((d) => (
                              <div key={d.label} className="flex items-start gap-xs">
                                <span className="font-body text-body-sm text-heading dark:text-white font-semibold min-w-[120px]">
                                  {d.label}:
                                </span>
                                <span className="font-body text-body-sm text-body dark:text-gray-400">
                                  {d.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Specific Cookies — styled grid instead of table */}
                <ScrollReveal animation="slide-up">
                  <div
                    id={toId('Specific Cookies We Use')}
                    className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg mb-md scroll-mt-24"
                  >
                    <h2 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-lg">
                      Specific Cookies We Use
                    </h2>
                    {/* Header row */}
                    <div className="hidden sm:grid grid-cols-4 gap-sm px-md py-sm bg-purple-100 dark:bg-purple-900/40 rounded-lg mb-sm">
                      <span className="font-heading text-body-sm text-heading dark:text-white font-semibold">Cookie Name</span>
                      <span className="font-heading text-body-sm text-heading dark:text-white font-semibold">Purpose</span>
                      <span className="font-heading text-body-sm text-heading dark:text-white font-semibold">Type</span>
                      <span className="font-heading text-body-sm text-heading dark:text-white font-semibold">Duration</span>
                    </div>
                    <div className="space-y-xs">
                      {cookieRows.map((row) => (
                        <div
                          key={row.name}
                          className="grid grid-cols-1 sm:grid-cols-4 gap-xs sm:gap-sm px-md py-sm bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700"
                        >
                          <span className="font-body text-body-sm text-heading dark:text-white font-mono font-medium">
                            {row.name}
                          </span>
                          <span className="font-body text-body-sm text-body dark:text-gray-400 sm:col-span-1">
                            {row.purpose}
                          </span>
                          <span>
                            <span
                              className={`inline-flex items-center px-xs py-[2px] rounded-full border font-body text-body-sm font-medium ${row.typeColor}`}
                            >
                              {row.type}
                            </span>
                          </span>
                          <span className="font-body text-body-sm text-body dark:text-gray-400">
                            {row.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <SectionCard id={toId('Third-Party Cookies')} title="Third-Party Cookies">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    In addition to our own cookies, we may use various third-party cookies to report usage statistics,
                    deliver advertisements, and so on. These third parties have their own privacy policies, and we have
                    no control over their cookies.
                  </p>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    Third-party services we may use include:
                  </p>
                  <ul className="space-y-sm">
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Google Analytics:</strong> For website analytics (anonymized IP)
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Payment Processors:</strong> For secure payment processing (Stripe, PayPal)
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Customer Support:</strong> For live chat and support features
                    </BulletItem>
                  </ul>
                </SectionCard>

                {/* How to Manage Cookies */}
                <ScrollReveal animation="slide-up">
                  <div
                    id={toId('How to Manage Cookies')}
                    className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg mb-md scroll-mt-24"
                  >
                    <h2 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-md">
                      How to Manage Cookies
                    </h2>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                      You have the right to decide whether to accept or reject cookies. You can manage your cookie
                      preferences through:
                    </p>

                    <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                      1. Our Cookie Consent Banner
                    </h3>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                      When you first visit our website, you&apos;ll see a cookie consent banner where you can choose which
                      types of cookies to accept. You can change your preferences at any time by clicking the cookie
                      settings link in the footer.
                    </p>

                    <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                      2. Browser Settings
                    </h3>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                      Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="space-y-sm mb-lg">
                      <BulletItem>View and delete cookies currently stored</BulletItem>
                      <BulletItem>Block third-party cookies</BulletItem>
                      <BulletItem>Block cookies from specific sites</BulletItem>
                      <BulletItem>Block all cookies</BulletItem>
                      <BulletItem>Delete all cookies when closing the browser</BulletItem>
                    </ul>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                      Please note that blocking or deleting cookies may impact your user experience and some features
                      may not function properly.
                    </p>

                    <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-md">
                      Browser-Specific Instructions
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-sm">
                      {browserSteps.map((step) => (
                        <div
                          key={step.name}
                          className="flex items-start gap-md bg-white dark:bg-gray-900 rounded-xl p-md border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-200"
                        >
                          <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                            {step.icon}
                          </div>
                          <div>
                            <p className="font-heading text-body-sm text-heading dark:text-white font-semibold mb-[2px]">
                              {step.name}
                            </p>
                            <p className="font-body text-body-sm text-gray-600 dark:text-gray-400 leading-snug">
                              {step.path}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <SectionCard id={toId('Changes to This Cookie Policy')} title="Changes to This Cookie Policy">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for
                    other operational, legal, or regulatory reasons. Please check this page periodically for updates.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Contact Us')} title="Contact Us">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <a
                    href="mailto:privacy@acheevo.com"
                    className="inline-flex items-center gap-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-200"
                  >
                    privacy@acheevo.com
                  </a>
                </SectionCard>

              </div>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
