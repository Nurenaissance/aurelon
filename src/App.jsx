import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './components/Toast';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import HeroNew from './components/HeroNew';
import BrandStatement from './components/BrandStatement';
import Solutions from './components/Solutions';
import FeatureMarquee from './components/FeatureMarquee';
import SocialProofStrip from './components/SocialProofStrip';
import ProductBuy from './components/ProductBuy';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WhatsAppButton from './components/WhatsAppButton';
import { useCart } from './context/CartContext';

function AppContent() {
  const { isCheckoutOpen, setIsCheckoutOpen } = useCart();

  return (
    <div className="min-h-screen bg-aurele-cream overflow-x-hidden">
      {/* Subtle grain texture overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

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

      {/* WhatsApp Support */}
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <CartProvider>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </CartProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
