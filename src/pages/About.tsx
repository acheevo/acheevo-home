import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Heart, Target } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-h1 text-heading dark:text-white font-bold mb-6">
          About {APP_CONFIG.name}
        </h1>
        <p className="text-h5 text-body dark:text-gray-300 mb-12 leading-relaxed">
          We believe everyone deserves clarity on their purpose. Through guided conversations, we help
          you discover what you're meant to do with your life.
        </p>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
                Too many people spend their lives feeling lost, unfulfilled, or questioning their direction.
                We created {APP_CONFIG.name} to change that.
              </p>
              <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
                Our mission is to help 100,000 people gain clarity on their life's purpose through a simple,
                structured process that works. We believe that with the right questions and enough time for
                reflection, anyone can discover what they're truly meant to do.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-6">
            How We Started
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/50">
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              {APP_CONFIG.name} was born from a simple observation: most people struggling to find their purpose
              weren't lacking potential—they were lacking the right process.
            </p>
            <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
              After years of coaching, workshops, and countless conversations, we identified the 8 essential
              questions that unlock purpose clarity. These aren't random prompts—they're a carefully designed
              sequence that builds upon itself, taking you from confusion to clarity.
            </p>
            <p className="text-body dark:text-gray-300 leading-relaxed">
              What started as a small coaching program has evolved into a complete system that's helped thousands
              of people gain the clarity they've been searching for.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-8">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-heading text-h5 text-heading dark:text-white font-bold mb-3">
                Structured, Not Vague
              </h3>
              <p className="text-body dark:text-gray-300 leading-relaxed">
                No fluffy exercises or abstract concepts. Just 8 specific conversations designed to extract
                clarity from your lived experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-heading text-h5 text-heading dark:text-white font-bold mb-3">
                Self-Paced Progress
              </h3>
              <p className="text-body dark:text-gray-300 leading-relaxed">
                Work through the program at your own speed. Most complete it in 4-8 weeks, but you have
                lifetime access to revisit whenever needed.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-heading text-h5 text-heading dark:text-white font-bold mb-3">
                Proven Framework
              </h3>
              <p className="text-body dark:text-gray-300 leading-relaxed">
                Built from years of real coaching sessions and refined with thousands of participants.
                This process works.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-heading text-h5 text-heading dark:text-white font-bold mb-3">
                Actionable Outcomes
              </h3>
              <p className="text-body dark:text-gray-300 leading-relaxed">
                You won't finish with vague inspiration. You'll walk away with clear direction and
                concrete next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-4">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                  <div>
                    <strong className="text-heading dark:text-white">Clarity over complexity.</strong>
                    <span className="text-body dark:text-gray-300"> Simple questions lead to profound insights.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                  <div>
                    <strong className="text-heading dark:text-white">Action over theory.</strong>
                    <span className="text-body dark:text-gray-300"> Understanding is worthless without application.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                  <div>
                    <strong className="text-heading dark:text-white">Honesty over encouragement.</strong>
                    <span className="text-body dark:text-gray-300"> We tell you what you need to hear, not what feels good.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                  <div>
                    <strong className="text-heading dark:text-white">Results over process.</strong>
                    <span className="text-body dark:text-gray-300"> The only metric that matters is whether you gain clarity.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-body dark:text-gray-300 mb-4 leading-relaxed">
                Have questions about the program? Want to share your success story? We'd love to hear from you.
              </p>
              <div className="space-y-2">
                <p className="text-body dark:text-gray-300">
                  <strong>General Inquiries:</strong>{' '}
                  <a href="mailto:hello@acheevo.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    hello@acheevo.com
                  </a>
                </p>
                <p className="text-body dark:text-gray-300">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:support@acheevo.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    support@acheevo.com
                  </a>
                </p>
                <p className="text-body dark:text-gray-300">
                  <strong>Partnerships:</strong>{' '}
                  <a href="mailto:partners@acheevo.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    partners@acheevo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-h3 font-bold mb-4">
            Ready to Find Your Purpose?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands who've gained clarity through our 8-conversation framework.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Journey
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
