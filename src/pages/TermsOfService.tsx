import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Gift } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';
import { Button, Container, ScrollReveal } from '@/components/ui';
import { Footer } from '@/components';

const sections = [
  'Agreement to Terms',
  'Description of Service',
  'User Accounts',
  'Payment and Fees',
  'User Content and Conduct',
  'Intellectual Property Rights',
  'Disclaimers and Limitations of Liability',
  'Indemnification',
  'Termination',
  'Governing Law and Dispute Resolution',
  'Changes to Terms',
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

const TermsOfService = () => {
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
              Terms of{' '}
              <span className="gradient-text">Service</span>
            </h1>
            <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed max-w-2xl mb-lg">
              Plain language where possible. Here are the rules for using Acheevo.
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

                <SectionCard id={toId('Agreement to Terms')} title="Agreement to Terms">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    By accessing or using {APP_CONFIG.name}&apos;s services, you agree to be bound by these Terms of Service
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are
                    prohibited from using or accessing this service.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Description of Service')} title="Description of Service">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    {APP_CONFIG.name} provides a purpose discovery program consisting of guided conversations, exercises,
                    and educational materials designed to help you gain clarity on your life&apos;s purpose and direction.
                  </p>
                  {/* Important Disclaimer — amber warning card */}
                  <ScrollReveal animation="fade-in">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-lg mt-md">
                      <div className="flex items-start gap-md">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-heading text-body-md text-amber-800 dark:text-amber-300 font-semibold mb-xs">
                            Important Disclaimer
                          </p>
                          <p className="font-body text-body-md text-amber-700 dark:text-amber-400 leading-relaxed">
                            {APP_CONFIG.name} is not a substitute for professional mental health
                            services, therapy, or medical advice. Our program is educational and self-exploratory in nature. If you
                            are experiencing mental health concerns, please seek appropriate professional help.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </SectionCard>

                <SectionCard id={toId('User Accounts')} title="User Accounts">
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Account Registration
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    To access certain features of our service, you may be required to register for an account. You agree to:
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <BulletItem>Provide accurate, current, and complete information</BulletItem>
                    <BulletItem>Maintain and promptly update your account information</BulletItem>
                    <BulletItem>Maintain the security of your password and account</BulletItem>
                    <BulletItem>Accept all responsibility for activities under your account</BulletItem>
                    <BulletItem>Notify us immediately of any unauthorized use</BulletItem>
                  </ul>
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Account Eligibility
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    You must be at least 18 years old to use our services. By using our services, you represent and
                    warrant that you meet this age requirement.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Payment and Fees')} title="Payment and Fees">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    If you purchase any of our paid services:
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <BulletItem>You agree to pay all fees associated with your purchase</BulletItem>
                    <BulletItem>Prices are subject to change with notice</BulletItem>
                    <BulletItem>Payments are processed securely through third-party payment processors</BulletItem>
                    <BulletItem>All sales are final unless otherwise stated in our refund policy</BulletItem>
                    <BulletItem>You are responsible for any applicable taxes</BulletItem>
                  </ul>

                  {/* 30-day money-back callout */}
                  <ScrollReveal animation="fade-in">
                    <div className="bg-[#F3EFFE] dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-xl p-lg">
                      <div className="flex items-start gap-md">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                          <Gift className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-heading text-body-md text-purple-700 dark:text-purple-300 font-bold mb-xs">
                            30-Day Money-Back Guarantee
                          </p>
                          <p className="font-body text-body-md text-purple-600 dark:text-purple-400 leading-relaxed">
                            We offer a 30-day money-back guarantee. If you&apos;re not satisfied with the program within the first
                            30 days of purchase, contact us for a full refund. After 30 days, all sales are final.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </SectionCard>

                <SectionCard id={toId('User Content and Conduct')} title="User Content and Conduct">
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Your Content
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                    You retain ownership of any content you submit to our service (your responses, notes, and personal
                    reflections). By submitting content, you grant us a license to use, store, and process it solely
                    for the purpose of providing our services to you.
                  </p>
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Prohibited Conduct
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    You agree not to:
                  </p>
                  <ul className="space-y-sm">
                    <BulletItem>Use the service for any illegal purpose</BulletItem>
                    <BulletItem>Violate any laws or regulations</BulletItem>
                    <BulletItem>Infringe upon the rights of others</BulletItem>
                    <BulletItem>Share your account credentials with others</BulletItem>
                    <BulletItem>Attempt to circumvent security features</BulletItem>
                    <BulletItem>Interfere with or disrupt the service</BulletItem>
                    <BulletItem>Copy, modify, or distribute our content without permission</BulletItem>
                    <BulletItem>Use automated systems to access the service</BulletItem>
                  </ul>
                </SectionCard>

                <SectionCard id={toId('Intellectual Property Rights')} title="Intellectual Property Rights">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    All content, features, and functionality of {APP_CONFIG.name} (including but not limited to text,
                    graphics, logos, images, and software) are the exclusive property of {APP_CONFIG.name} and are
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly
                    perform any of our content without our prior written consent.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Disclaimers and Limitations of Liability')} title="Disclaimers and Limitations of Liability">
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Service &ldquo;As Is&rdquo;
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                    Our service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either express
                    or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
                  </p>
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    No Professional Advice
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                    The information provided through our service is for educational and informational purposes only and
                    does not constitute professional advice. You should not rely on this information as a substitute for
                    professional medical, psychological, or legal advice.
                  </p>
                  <h3 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-sm">
                    Limitation of Liability
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, {APP_CONFIG.name} shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Indemnification')} title="Indemnification">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless {APP_CONFIG.name}, its officers, directors,
                    employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of
                    your use of the service or violation of these Terms.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Termination')} title="Termination">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We reserve the right to terminate or suspend your account and access to the service immediately,
                    without prior notice or liability, for any reason, including if you breach these Terms. Upon
                    termination, your right to use the service will immediately cease.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Governing Law and Dispute Resolution')} title="Governing Law and Dispute Resolution">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the United States,
                    without regard to its conflict of law provisions. Any disputes arising from these Terms or your
                    use of the service shall be resolved through binding arbitration, except where prohibited by law.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Changes to Terms')} title="Changes to Terms">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by
                    posting the new Terms on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of
                    the service after any changes constitutes acceptance of the new Terms.
                  </p>
                </SectionCard>

                <SectionCard id={toId('Contact Us')} title="Contact Us">
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <a
                    href="mailto:legal@acheevo.com"
                    className="inline-flex items-center gap-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-200"
                  >
                    legal@acheevo.com
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

export default TermsOfService;
