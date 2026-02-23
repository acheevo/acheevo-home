import { Footer, Hero, TrustSignals, Story, Features, Testimonials, Pricing, CTA } from '@/components';
import { DarkModeProvider } from '@/contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <main className="flex-grow">
          <Hero />
          <TrustSignals />
          <Story />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;