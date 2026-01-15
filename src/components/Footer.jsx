import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { translations: t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    collection: t.footer.links.collection.map((name, i) => ({
      name,
      href: i < 2 ? (i === 0 ? '#features' : '#pricing') : '#',
    })),
    brand: t.footer.links.brand.map((name, i) => ({
      name,
      href: i < 2 ? (i === 0 ? '#craftsmanship' : '#atelier') : '#',
    })),
    support: t.footer.links.support.map((name) => ({
      name,
      href: '#',
    })),
  };

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  return (
    <footer className="relative bg-aurele-noir text-white">
      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-aurele-gold/30 to-transparent" />

      <div className="container-luxe">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <a href="#" className="flex items-center mb-6">
                <span className="font-display text-2xl tracking-tight text-white">
                  Aurelon
                </span>
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-aurele-gold" />
              </a>

              <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-sm text-white/40 mb-3">{t.footer.newsletter}</p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-aurele-gold/50 transition-all duration-300"
                    />
                  </div>
                  <button className="px-4 py-2.5 rounded-lg bg-aurele-gold text-aurele-noir font-medium text-sm hover:bg-aurele-gold-dark transition-all duration-300">
                    {t.footer.subscribe}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-sm text-white/40 hover:text-aurele-gold transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-display text-sm text-white mb-4">{t.footer.sections.collection}</h4>
              <ul className="space-y-3">
                {footerLinks.collection.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-aurele-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm text-white mb-4">{t.footer.sections.brand}</h4>
              <ul className="space-y-3">
                {footerLinks.brand.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-aurele-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm text-white mb-4">{t.footer.sections.support}</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-aurele-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>© 2025 Aurelon</span>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:text-aurele-gold transition-colors">{t.footer.legal}</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:text-aurele-gold transition-colors">{t.footer.privacy}</a>
            <span className="hidden md:inline">·</span>
            <span>{t.footer.designedIn}</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-aurele-gold hover:border-aurele-gold/30 transition-all duration-300 text-sm"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
