import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translations: t, toggleLanguage, language } = useLanguage();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.solutions, href: '#solutions' },
    { name: t.nav.shop, href: '#product-buy' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-aurele-cream/90 backdrop-blur-xl border-b border-faint/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxe">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={isScrolled ? "/images/aurelon-logo.svg" : "/images/aurelon-logo-light.svg"}
                alt="Aurelon"
                className="w-8 h-8"
              />
              <span className={`font-display text-2xl tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                Aurelon
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 text-sm font-medium relative group ${
                    isScrolled
                      ? 'text-secondary hover:text-foreground'
                      : 'text-white/80 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-aurele-gold group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons + Cart + Language */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? 'text-secondary hover:text-foreground hover:bg-aurele-warm'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {language === 'en' ? 'हिं' : 'EN'}
              </button>

              {/* Cart Icon */}
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors duration-300 rounded-full ${
                  isScrolled
                    ? 'text-secondary hover:text-foreground hover:bg-aurele-warm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-aurele-gold text-aurele-noir text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              <motion.a
                href="#product-buy"
                className="group flex items-center gap-2 px-6 py-2.5 bg-aurele-gold text-aurele-noir font-medium rounded-full text-sm
                         hover:bg-aurele-gold-dark hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.nav.discover}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className={`text-xs font-medium px-2 py-1 rounded-full transition-colors duration-300 ${
                  isScrolled ? 'text-secondary hover:text-foreground' : 'text-white/70 hover:text-white'
                }`}
              >
                {language === 'en' ? 'हिं' : 'EN'}
              </button>

              {/* Mobile Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-secondary hover:text-foreground' : 'text-white/80 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-aurele-gold text-aurele-noir text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className={`p-2 transition-colors duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom-Sheet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Bottom sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-aurele-cream rounded-t-3xl md:hidden shadow-elevated"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-faint/50" />
              </div>

              <div className="px-6 pb-8 pt-2">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="py-4 text-xl font-display text-foreground border-b border-faint/30 hover:text-aurele-gold transition-colors min-h-[48px] flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="#product-buy"
                    className="btn-primary w-full justify-center min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.discoverCollection}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm text-muted text-center mt-4">
                  {t.nav.tagline}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
