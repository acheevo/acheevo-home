import { useState } from 'react';
import { Container, Button } from '@/components/ui';
import { APP_CONFIG } from '@/config/app';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 ${className || ''}`}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900 font-display">
                {APP_CONFIG.name}
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Pricing
              </a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Docs
              </a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Blog
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary-600 to-primary-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;