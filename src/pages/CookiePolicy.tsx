import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';

const CookiePolicy = () => {
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
          Cookie Policy
        </h1>
        <p className="text-body-sm text-disabled dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-purple dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              What Are Cookies?
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely
              used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              {APP_CONFIG.name} uses cookies and similar tracking technologies to improve your experience, analyze
              website traffic, and understand where our visitors are coming from.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Types of Cookies We Use
            </h2>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              1. Essential Cookies
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              These cookies are necessary for the website to function properly. They enable basic functions like
              page navigation, secure access to your account, and access to secure areas of the website.
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Purpose:</strong> Authentication, security, and basic functionality</li>
              <li><strong>Duration:</strong> Session or up to 1 year</li>
              <li><strong>Can be disabled:</strong> No (required for the service to work)</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              2. Analytics Cookies
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously. We use this information to improve our website and services.
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Purpose:</strong> Website analytics and performance monitoring</li>
              <li><strong>Duration:</strong> Up to 2 years</li>
              <li><strong>Can be disabled:</strong> Yes</li>
              <li><strong>Third parties:</strong> Google Analytics (anonymized)</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              3. Functional Cookies
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences
              (language, theme, region) and providing personalized content.
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Purpose:</strong> User preferences and personalization</li>
              <li><strong>Duration:</strong> Up to 1 year</li>
              <li><strong>Can be disabled:</strong> Yes (may affect functionality)</li>
            </ul>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              4. Marketing Cookies
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              These cookies track your online activity to help us deliver more relevant advertising and measure
              the effectiveness of our marketing campaigns.
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Purpose:</strong> Targeted advertising and marketing analytics</li>
              <li><strong>Duration:</strong> Up to 2 years</li>
              <li><strong>Can be disabled:</strong> Yes</li>
              <li><strong>Third parties:</strong> Facebook Pixel, Google Ads (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Specific Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 mb-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-heading dark:text-white">Cookie Name</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-heading dark:text-white">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-heading dark:text-white">Type</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-heading dark:text-white">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-body dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User session management</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">cookie_consent</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Store cookie preferences</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">theme_preference</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remember dark/light mode</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Functional</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1 year</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Analytics tracking</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics,
              deliver advertisements, and so on. These third parties have their own privacy policies, and we have
              no control over their cookies.
            </p>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Third-party services we may use include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics (anonymized IP)</li>
              <li><strong>Payment Processors:</strong> For secure payment processing (Stripe, PayPal)</li>
              <li><strong>Customer Support:</strong> For live chat and support features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              How to Manage Cookies
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie
              preferences through:
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              1. Our Cookie Consent Banner
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              When you first visit our website, you'll see a cookie consent banner where you can choose which
              types of cookies to accept. You can change your preferences at any time by clicking the cookie
              settings link in the footer.
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              2. Browser Settings
            </h3>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li>View and delete cookies currently stored</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when closing the browser</li>
            </ul>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              Please note that blocking or deleting cookies may impact your user experience and some features
              may not function properly.
            </p>

            <h3 className="font-heading text-h6 text-heading dark:text-white font-semibold mb-3">
              Browser-Specific Instructions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-body dark:text-gray-300 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Changes to This Cookie Policy
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. Please check this page periodically for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-h4 text-heading dark:text-white font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
