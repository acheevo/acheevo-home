import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-h2 text-heading dark:text-white font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-body-sm text-disabled dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-purple dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Agreement to Terms
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              By accessing or using {APP_CONFIG.name}'s services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Description of Service
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              {APP_CONFIG.name} provides a purpose discovery program consisting of guided conversations, exercises,
              and educational materials designed to help you gain clarity on your life's purpose and direction.
            </p>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              <strong>Important Disclaimer:</strong> {APP_CONFIG.name} is not a substitute for professional mental health
              services, therapy, or medical advice. Our program is educational and self-exploratory in nature. If you
              are experiencing mental health concerns, please seek appropriate professional help.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              User Accounts
            </h2>
            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Account Registration
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              To access certain features of our service, you may be required to register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept all responsibility for activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Account Eligibility
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You must be at least 18 years old to use our services. By using our services, you represent and
              warrant that you meet this age requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Payment and Fees
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              If you purchase any of our paid services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>You agree to pay all fees associated with your purchase</li>
              <li>Prices are subject to change with notice</li>
              <li>Payments are processed securely through third-party payment processors</li>
              <li>All sales are final unless otherwise stated in our refund policy</li>
              <li>You are responsible for any applicable taxes</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Refund Policy
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We offer a 30-day money-back guarantee. If you're not satisfied with the program within the first
              30 days of purchase, contact us for a full refund. After 30 days, all sales are final.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              User Content and Conduct
            </h2>
            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Your Content
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You retain ownership of any content you submit to our service (your responses, notes, and personal
              reflections). By submitting content, you grant us a license to use, store, and process it solely
              for the purpose of providing our services to you.
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Prohibited Conduct
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Share your account credentials with others</li>
              <li>Attempt to circumvent security features</li>
              <li>Interfere with or disrupt the service</li>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use automated systems to access the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              All content, features, and functionality of {APP_CONFIG.name} (including but not limited to text,
              graphics, logos, images, and software) are the exclusive property of {APP_CONFIG.name} and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly
              perform any of our content without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Disclaimers and Limitations of Liability
            </h2>
            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Service "As Is"
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Our service is provided "as is" and "as available" without any warranties of any kind, either express
              or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              No Professional Advice
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              The information provided through our service is for educational and informational purposes only and
              does not constitute professional advice. You should not rely on this information as a substitute for
              professional medical, psychological, or legal advice.
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Limitation of Liability
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              To the maximum extent permitted by law, {APP_CONFIG.name} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Indemnification
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You agree to indemnify, defend, and hold harmless {APP_CONFIG.name}, its officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of
              your use of the service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Termination
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We reserve the right to terminate or suspend your account and access to the service immediately,
              without prior notice or liability, for any reason, including if you breach these Terms. Upon
              termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to its conflict of law provisions. Any disputes arising from these Terms or your
              use of the service shall be resolved through binding arbitration, except where prohibited by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Changes to Terms
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by
              posting the new Terms on this page and updating the "Last updated" date. Your continued use of
              the service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-body dark:text-gray-300 mb-2">
              Email: <a href="mailto:legal@acheevo.com" className="text-purple-600 dark:text-purple-400 hover:underline">legal@acheevo.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
