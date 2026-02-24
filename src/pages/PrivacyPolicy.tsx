import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';
import { Button, Container, ScrollReveal } from '@/components/ui';
import { Footer } from '@/components';

const sections = [
  'Introduction',
  'Information We Collect',
  'How We Use Your Information',
  'How We Share Your Information',
  'Data Security',
  'Your Rights and Choices',
  'Cookies and Tracking Technologies',
  'Data Retention',
  'International Data Transfers',
  "Children's Privacy",
  'Changes to This Privacy Policy',
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

const PrivacyPolicy = () => {
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
              Privacy{' '}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed max-w-2xl mb-lg">
              We take your privacy seriously. Here&apos;s exactly what we collect, why, and what you can do about it.
            </p>
            <span className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400">
              Last updated: {lastUpdated}
            </span>
          </ScrollReveal>
        </Container>
      </section>

      {/* Key Commitment Banner */}
      <div className="bg-white dark:bg-gray-900 px-[80px] pt-xl">
        <Container size="xl">
          <ScrollReveal animation="fade-in">
            <div className="flex items-center gap-md bg-purple-600 dark:bg-purple-700 rounded-2xl px-lg py-md text-white">
              <Shield className="w-6 h-6 flex-shrink-0 text-purple-200" />
              <p className="font-body text-body-md font-semibold">
                We never sell your personal data. Full stop.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </div>

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

                <SectionCard id={toId('Introduction')} title="Introduction">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    At {APP_CONFIG.name}, we take your privacy seriously. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use our purpose discovery program and services.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Information We Collect')} title="Information We Collect">
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Personal Information
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    We may collect personal information that you provide to us, including:
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <BulletItem>Name and contact information (email address, phone number)</BulletItem>
                    <BulletItem>Account credentials</BulletItem>
                    <BulletItem>Payment and billing information</BulletItem>
                    <BulletItem>Responses to our purpose discovery questions and exercises</BulletItem>
                    <BulletItem>Communication preferences</BulletItem>
                  </ul>
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Usage Information
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="space-y-sm">
                    <BulletItem>Device information (IP address, browser type, operating system)</BulletItem>
                    <BulletItem>Usage data (pages visited, time spent, features used)</BulletItem>
                    <BulletItem>Cookies and similar tracking technologies</BulletItem>
                  </ul>
                </SectionCard>

                <SectionCard id={toId('How We Use Your Information')} title="How We Use Your Information">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-sm">
                    <BulletItem>Provide, maintain, and improve our services</BulletItem>
                    <BulletItem>Process your transactions and send related information</BulletItem>
                    <BulletItem>Send you program materials, updates, and educational content</BulletItem>
                    <BulletItem>Respond to your comments, questions, and requests</BulletItem>
                    <BulletItem>Monitor and analyze trends, usage, and activities</BulletItem>
                    <BulletItem>Detect, prevent, and address technical issues and security vulnerabilities</BulletItem>
                    <BulletItem>Comply with legal obligations</BulletItem>
                  </ul>
                </SectionCard>

                <SectionCard id={toId('How We Share Your Information')} title="How We Share Your Information">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="space-y-sm">
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, email delivery, hosting)
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">With Your Consent:</strong> When you explicitly authorize us to share your information
                    </BulletItem>
                  </ul>
                </SectionCard>

                <SectionCard id={toId('Data Security')} title="Data Security">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
                    or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Your Rights and Choices')} title="Your Rights and Choices">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="space-y-sm mb-md">
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Access:</strong> Request access to your personal information
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Correction:</strong> Request correction of inaccurate information
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Deletion:</strong> Request deletion of your personal information
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Portability:</strong> Request a copy of your data in a portable format
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Opt-out:</strong> Unsubscribe from marketing communications
                    </BulletItem>
                    <BulletItem>
                      <strong className="text-heading dark:text-white">Object:</strong> Object to certain processing of your information
                    </BulletItem>
                  </ul>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Cookies and Tracking Technologies')} title="Cookies and Tracking Technologies">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our service and store certain
                    information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    For more information, please see our{' '}
                    <Link to="/cookies" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                      Cookie Policy
                    </Link>.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Data Retention')} title="Data Retention">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                    Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </SectionCard>

                <SectionCard id={toId('International Data Transfers')} title="International Data Transfers">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    Your information may be transferred to and maintained on computers located outside of your state,
                    province, country, or other governmental jurisdiction where data protection laws may differ.
                    We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy.
                  </p>
                </SectionCard>

                <SectionCard id={toId("Children's Privacy")} title="Children's Privacy">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect
                    personal information from children. If you become aware that a child has provided us with personal
                    information, please contact us immediately.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Changes to This Privacy Policy')} title="Changes to This Privacy Policy">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review
                    this Privacy Policy periodically for any changes.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Contact Us')} title="Contact Us">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
