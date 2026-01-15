import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translations: t } = useLanguage();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.collection, href: '#features' },
    { name: t.nav.craftsmanship, href: '#craftsmanship' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.studio, href: '#atelier' },
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

            {/* CTA Buttons + Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="#pricing"
                className={`text-sm transition-colors duration-300 ${
                  isScrolled
                    ? 'text-secondary hover:text-foreground'
                    : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {t.nav.shop}
              </motion.a>

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
                href="#cta"
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
                className={`p-2 transition-colors duration-300 ${
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-aurele-cream pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="py-4 text-2xl font-display text-foreground border-b border-faint/30 hover:text-aurele-gold transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-8">
                <a
                  href="#cta"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav.discoverCollection}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-sm text-muted text-center">
                {t.nav.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
