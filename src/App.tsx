import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from '@/components';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { CookieConsent } from '@/components/ui';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import About from '@/pages/About';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <main className="flex-grow">
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
          <CookieConsent />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;