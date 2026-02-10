import { Container } from '@/components/ui';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Built with Vite for instant hot module replacement and optimized production builds.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Type Safe",
      description: "Full TypeScript support with strict typing for bulletproof code quality.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Developer Experience",
      description: "Hot reload, ESLint, Prettier, and VS Code integration for seamless development.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Optimized Bundle",
      description: "Tree shaking, code splitting, and modern compression for minimal bundle sizes.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security First",
      description: "Built-in security headers, dependency scanning, and vulnerability monitoring.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Deploy Anywhere",
      description: "Docker containers, Vercel, Netlify, or any static hosting with zero configuration.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> ship faster</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Start with a solid foundation and focus on building your unique features. 
            No more boilerplate setup or configuration headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                99.9%
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Uptime
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                &lt;100ms
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Response Time
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                10K+
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Developers
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                1M+
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Downloads
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;