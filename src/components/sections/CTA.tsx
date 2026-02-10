import { Container, Button } from '@/components/ui';

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-500/5 via-transparent to-transparent"></div>
      </div>
      
      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-300 ring-1 ring-inset ring-primary-500/20 mb-8">
            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free forever • No credit card required
          </div>
          
          {/* Main headline */}
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            Ready to build something
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent block">
              extraordinary?
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who have shipped faster with our production-ready template. 
            Start building your next project in minutes, not hours.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
            >
              Get Started Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50 px-8 py-4 text-lg group"
            >
              <svg className="mr-2 w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View on GitHub
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold text-white">MIT License</span>
              </div>
              <p className="text-gray-400">Free to use for any project</p>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl font-bold text-white">24/7 Support</span>
              </div>
              <p className="text-gray-400">Community & documentation</p>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-2xl font-bold text-white">Regular Updates</span>
              </div>
              <p className="text-gray-400">Latest features & security</p>
            </div>
          </div>
          
          {/* Social proof */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Company logos would go here - using placeholder text for now */}
              <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-300 font-medium">Google</div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-300 font-medium">Microsoft</div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-300 font-medium">Netflix</div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-300 font-medium">Airbnb</div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-300 font-medium">Stripe</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;