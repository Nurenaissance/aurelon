import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroNew from './components/HeroNew';
import BrandStatement from './components/BrandStatement';
import Solutions from './components/Solutions';
import FeatureMarquee from './components/FeatureMarquee';
import SocialProofStrip from './components/SocialProofStrip';
import ProductBuy from './components/ProductBuy';
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
        <HeroNew />
        <BrandStatement />
        <Solutions />
        <FeatureMarquee />
        <SocialProofStrip />
        <ProductBuy />
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </CartProvider>
    </LanguageProvider>
  );
}

export default App;
