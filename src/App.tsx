import { Footer, Hero, TrustSignals, Story, Features, Testimonials, Pricing, CTA } from '@/components';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
  );
}

export default App;