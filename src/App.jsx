import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LifestyleGallery from './components/LifestyleGallery';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import UseCases from './components/UseCases';
import WhyLumiq from './components/WhyLumiq';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <LanguageProvider>
    <CartProvider>
    <div className="min-h-screen bg-aurele-cream overflow-x-hidden">
      {/* Subtle grain texture overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Lifestyle Gallery - Social Proof */}
        <LifestyleGallery />

        {/* Philosophy / Brand Story */}
        <ProblemSolution />

        {/* Features */}
        <Features />

        {/* Experience / Use Cases */}
        <UseCases />

        {/* Why Aurelon */}
        <WhyLumiq />

        {/* How It Works */}
        <HowItWorks />

        {/* Pricing / Boutique */}
        <Pricing />

        {/* Trust / Testimonials */}
        <Trust />

        {/* CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </CartProvider>
    </LanguageProvider>
  );
}

export default App;
