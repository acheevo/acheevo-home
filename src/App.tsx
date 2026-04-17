import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer, Header } from '@/components';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { CookieConsent, ErrorBoundary, ScrollToTop } from '@/components/ui';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import About from '@/pages/About';

function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <Router>
          <RouteScrollReset />
          <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 transition-colors duration-300">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <a
                      href="#main-content"
                      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-md focus:py-sm focus:bg-white focus:text-primary-700 focus:rounded-lg focus:shadow-lg focus:font-medium focus:text-body-md"
                    >
                      Skip to main content
                    </a>
                    <Header />
                    <main id="main-content" className="flex-grow">
                      <Home />
                    </main>
                    <Footer />
                  </>
                }
              />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <ScrollToTop />
            <CookieConsent />
          </div>
        </Router>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;