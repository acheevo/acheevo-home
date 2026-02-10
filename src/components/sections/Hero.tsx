import { Container, Button } from '@/components/ui';
import { APP_CONFIG } from '@/config/app';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-accent-400/20 to-primary-400/20 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary-100/50 via-transparent to-transparent"></div>
      </div>
      
      <Container className="relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-8 animate-slide-down">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            New features available
          </div>
          
          {/* Main headline */}
          <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-8 animate-slide-up">
            Build the{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
                future
              </span>
              <svg className="absolute -bottom-2 left-0 right-0 h-3 text-primary-200" viewBox="0 0 200 12" fill="currentColor">
                <path d="M0 8c30-4 60-4 90-4s60 0 90 4v4H0z" />
              </svg>
            </span>{' '}
            of web development
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Create stunning, scalable applications with our modern React template. 
            <span className="font-semibold text-gray-800"> Lightning-fast development</span> meets 
            <span className="font-semibold text-gray-800"> enterprise-grade architecture</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
            >
              Start Building Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-gray-300 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 text-lg group"
            >
              <svg className="mr-2 w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Live Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
              </div>
              <span>10,000+ developers trust us</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 rating from 2,847 reviews</span>
            </div>
          </div>
          
          {/* Dashboard preview */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 transform rotate-1"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto border border-gray-200/50 backdrop-blur-sm">
              {/* Browser mockup */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 font-mono">
                  {APP_CONFIG.name}.dev
                </div>
                <div className="w-16"></div>
              </div>
              
              {/* Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Lightning Fast</h3>
                  <p className="text-gray-600">Built with Vite for instant hot reload and optimized builds</p>
                </div>
                
                <div className="group text-center transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Type Safe</h3>
                  <p className="text-gray-600">Full TypeScript support with strict type checking</p>
                </div>
                
                <div className="group text-center transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Production Ready</h3>
                  <p className="text-gray-600">Docker, CI/CD, and deployment configs included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;