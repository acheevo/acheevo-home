import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Heart, Target, Zap, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { APP_CONFIG } from '@/config/app';
import { Button, Container, ScrollReveal } from '@/components/ui';
import { Footer } from '@/components';

const About = () => {
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
        <Container size="lg">
          <ScrollReveal animation="fade-in">
            <p className="eyebrow mb-sm">WHO WE ARE</p>
            <h1 className="font-heading text-h1 text-heading dark:text-white font-bold mb-lg max-w-3xl">
              Built by people who{' '}
              <span className="gradient-text">needed this</span>
            </h1>
            <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed max-w-2xl">
              Acheevo was made by people who spent years feeling productive but purposeless. We made the thing we needed &mdash; and couldn&apos;t find.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <main className="flex-grow bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        {/* Our Mission */}
        <section className="p-[80px]">
          <Container size="lg">
            <ScrollReveal animation="slide-up">
              <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-md">
                      Our Mission
                    </h2>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                      Too many people spend their lives feeling lost, unfulfilled, or questioning their direction.
                      We created {APP_CONFIG.name} to change that.
                    </p>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                      Our mission is to help 100,000 people gain clarity on their life&apos;s purpose through a simple,
                      structured process that works. We believe that with the right questions and enough time for
                      reflection, anyone can discover what they&apos;re truly meant to do.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* How We Started */}
        <section className="px-[80px] pb-[80px]">
          <Container size="lg">
            <ScrollReveal animation="slide-up">
              <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-lg">
                How We Started
              </h2>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-lg border-2 border-purple-100/50 dark:border-purple-800/50">
                <div className="flex items-start gap-sm mb-md">
                  <span className="font-heading text-h2 text-purple-300 dark:text-purple-700 leading-none font-bold">&ldquo;</span>
                </div>
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                  {APP_CONFIG.name} was born from a simple observation: most people struggling to find their purpose
                  weren&apos;t lacking potential&mdash;they were lacking the right process.
                </p>
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-md">
                  After years of coaching, workshops, and countless conversations, we identified the 8 essential
                  questions that unlock purpose clarity. These aren&apos;t random prompts&mdash;they&apos;re a carefully designed
                  sequence that builds upon itself, taking you from confusion to clarity.
                </p>
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                  What started as a small coaching program has evolved into a complete system that&apos;s helped thousands
                  of people gain the clarity they&apos;ve been searching for.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* What Makes Us Different */}
        <section className="px-[80px] pb-[80px]">
          <Container size="lg">
            <ScrollReveal animation="fade-in">
              <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-xl">
                What Makes Us Different
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-md">
              <ScrollReveal animation="slide-up" delay={0}>
                <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-md">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-sm">
                    Structured, Not Vague
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    No fluffy exercises or abstract concepts. Just 8 specific conversations designed to extract
                    clarity from your lived experience.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-md">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-sm">
                    Self-Paced Progress
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    Work through the program at your own speed. Most complete it in 4&ndash;8 weeks, but you have
                    lifetime access to revisit whenever needed.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-md">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-sm">
                    Proven Framework
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    Built from years of real coaching sessions and refined with thousands of participants.
                    This process works.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-md">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading text-h5 text-purple-700 dark:text-purple-400 font-bold mb-sm">
                    Actionable Outcomes
                  </h3>
                  <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed">
                    You won&apos;t finish with vague inspiration. You&apos;ll walk away with clear direction and
                    concrete next steps.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* Our Values */}
        <section className="px-[80px] pb-[80px]">
          <Container size="lg">
            <ScrollReveal animation="slide-up">
              <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-lg">
                      Our Values
                    </h2>
                    <ul className="space-y-lg">
                      <li className="flex items-start gap-md">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                        <div>
                          <strong className="font-body text-body-md text-heading dark:text-white font-semibold">Clarity over complexity.</strong>
                          <span className="font-body text-body-md text-body dark:text-gray-300"> Simple questions lead to profound insights.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-md">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                        <div>
                          <strong className="font-body text-body-md text-heading dark:text-white font-semibold">Action over theory.</strong>
                          <span className="font-body text-body-md text-body dark:text-gray-300"> Understanding is worthless without application.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-md">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                        <div>
                          <strong className="font-body text-body-md text-heading dark:text-white font-semibold">Honesty over encouragement.</strong>
                          <span className="font-body text-body-md text-body dark:text-gray-300"> We tell you what you need to hear, not what feels good.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-md">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                        <div>
                          <strong className="font-body text-body-md text-heading dark:text-white font-semibold">Results over process.</strong>
                          <span className="font-body text-body-md text-body dark:text-gray-300"> The only metric that matters is whether you gain clarity.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Get in Touch */}
        <section className="px-[80px] pb-[80px]">
          <Container size="lg">
            <ScrollReveal animation="slide-up">
              <div className="bg-[#F8F5FF] dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-800 p-lg">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-md">
                      Get in Touch
                    </h2>
                    <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-lg">
                      Have questions about the program? Want to share your success story? We&apos;d love to hear from you.
                    </p>
                    <div className="flex flex-wrap gap-md">
                      <a
                        href="mailto:hello@acheevo.com"
                        className="inline-flex items-center gap-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        General: hello@acheevo.com
                      </a>
                      <a
                        href="mailto:support@acheevo.com"
                        className="inline-flex items-center gap-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Support: support@acheevo.com
                      </a>
                      <a
                        href="mailto:partners@acheevo.com"
                        className="inline-flex items-center gap-xs bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700 px-md py-xs font-body text-body-sm text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Partnerships: partners@acheevo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="px-[80px] pb-[80px]">
          <Container size="lg">
            <ScrollReveal animation="slide-up">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-purple-100 dark:border-purple-700 p-lg md:p-xl text-center shadow-lg">
                <h2 className="font-heading text-h3 text-heading dark:text-white font-bold mb-md">
                  Ready to Find Your <span className="gradient-text">Purpose?</span>
                </h2>
                <p className="font-body text-body-md text-body dark:text-gray-300 leading-relaxed mb-xl max-w-xl mx-auto">
                  Join thousands who&apos;ve gained clarity through our 8-conversation framework.
                </p>
                <Button variant="gradient" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </ScrollReveal>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
