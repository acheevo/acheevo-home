import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-body-sm text-disabled dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-purple dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Introduction
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              At {APP_CONFIG.name}, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our purpose discovery program and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Information We Collect
            </h2>
            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Personal Information
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials</li>
              <li>Payment and billing information</li>
              <li>Responses to our purpose discovery questions and exercises</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Usage Information
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We automatically collect certain information when you use our services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you program materials, updates, and educational content</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security vulnerabilities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              How We Share Your Information
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, email delivery, hosting)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Data Security
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
              or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Object:</strong> Object to certain processing of your information</li>
            </ul>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and store certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              For more information, please see our <Link to="/cookies" className="text-purple-600 dark:text-purple-400 hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Data Retention
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              International Data Transfers
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where data protection laws may differ.
              We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Children's Privacy
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect
              personal information from children. If you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-body dark:text-gray-300 mb-2">
              Email: <a href="mailto:privacy@acheevo.com" className="text-purple-600 dark:text-purple-400 hover:underline">privacy@acheevo.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
