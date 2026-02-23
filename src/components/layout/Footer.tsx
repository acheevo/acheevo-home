import { APP_CONFIG } from '@/config/app';
import { Twitter, Instagram, Linkedin, Mail, Lock, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-gray-900 text-body dark:text-gray-300 border-t border-purple-200/20 dark:border-purple-800/30 p-[80px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl">
            {/* Column 1: Brand/About + Newsletter */}
            <div>
              <h3 className="font-heading text-h6 text-heading dark:text-white font-bold mb-md">
                {APP_CONFIG.name}
              </h3>
              <p className="font-body text-body-sm leading-relaxed mb-lg text-body dark:text-gray-400 italic">
                8 conversations. A lifetime of clarity.
              </p>

              {/* Newsletter signup */}
              <div className="mb-lg">
                <h4 className="font-heading text-body-sm text-heading dark:text-white font-semibold mb-sm">
                  Get purpose tips
                </h4>
                <div className="flex gap-xs">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-sm py-xs rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white font-body text-body-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    aria-label="Email for newsletter"
                  />
                  <button
                    className="px-md py-xs rounded-lg border border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 font-body text-body-sm font-medium transition-all duration-200"
                    aria-label="Subscribe to newsletter"
                  >
                    Join
                  </button>
                </div>
              </div>

              <p className="font-body text-body-sm text-disabled dark:text-gray-500">
                &copy; {currentYear} {APP_CONFIG.name}
              </p>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h4 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-md">Resources</h4>
              <ul className="space-y-sm">
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-md">Legal</h4>
              <ul className="space-y-sm">
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-body-sm text-body dark:text-gray-400 hover:text-action dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 inline-block">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect - Social icons in pill row */}
            <div>
              <h4 className="font-heading text-body-md text-heading dark:text-white font-semibold mb-md">Connect</h4>
              <div className="flex gap-sm">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group"
                  aria-label="Follow us on X"
                >
                  <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" strokeWidth={2} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" strokeWidth={2} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" strokeWidth={2} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group"
                  aria-label="Contact us"
                >
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Trust seals row at bottom */}
          <div className="mt-2xl pt-lg border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-xl text-body-sm">
              <div className="flex items-center gap-xs text-gray-600 dark:text-gray-400">
                <Lock className="w-5 h-5" strokeWidth={2} />
                <span className="font-medium">Your data is private</span>
              </div>
              <div className="flex items-center gap-xs text-gray-600 dark:text-gray-400">
                <Shield className="w-5 h-5" strokeWidth={2} />
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-xs text-gray-600 dark:text-gray-400">
                <Heart className="w-5 h-5" strokeWidth={2} />
                <span className="font-medium">Made with care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
