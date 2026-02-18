import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from './Toast';

const WEBHOOK_URL = 'https://nurenaiautomatic-b7hmdnb4fzbpbtbh.canadacentral-01.azurewebsites.net/webhook/aurelon-order';

const Footer = () => {
  const { translations: t } = useLanguage();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      addToast('Please enter a valid email address', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter_subscription',
          email,
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      setEmail('');
      addToast('Subscribed successfully!', 'success');
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      addToast('Subscription failed. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/aurelon' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/aurelon' },
    { name: 'Twitter', href: 'https://twitter.com/aurelon' },
  ];

  return (
    <footer className="relative bg-aurele-noir text-white">
      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-aurele-gold/30 to-transparent" />

      <div className="container-luxe">
        {/* CTA Email Section — absorbed from old CTA.jsx */}
        <div className="py-16 md:py-20 text-center border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              {t.footer.headline}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
              {t.footer.sub}
            </p>

            {/* Email Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
              >
                <Check className="w-5 h-5" />
                <span>{t.footer.successTitle} {t.footer.successMessage}</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.footer.placeholder}
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-aurele-gold/50 transition-all duration-300 min-h-[48px]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3.5 rounded-full bg-aurele-gold text-aurele-noir font-semibold text-sm hover:bg-aurele-gold-dark transition-all duration-300 min-h-[48px] disabled:opacity-60 flex items-center gap-2"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                    {t.footer.subscribe}
                  </button>
                </div>
                <p className="text-white/30 text-xs mt-3">{t.footer.noSpam}</p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          {/* Single row of links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex items-center gap-2">
              <span className="font-display text-xl tracking-tight text-white">Aurelon</span>
              <span className="w-1.5 h-1.5 rounded-full bg-aurele-gold" />
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-white/50">
              {t.footer.links.map((link, i) => {
                const hrefs = ['#brand-statement', '#', '#solutions', '#product-buy'];
                return (
                  <a key={i} href={hrefs[i] || '#'} className="hover:text-aurele-gold transition-colors duration-300">
                    {link}
                  </a>
                );
              })}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6 text-sm text-white/40">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-aurele-gold transition-colors duration-300">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 my-6" />

          {/* Copyright + Back to Top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
              <span>{t.footer.copyright}</span>
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-aurele-gold hover:border-aurele-gold/30 transition-all duration-300 text-sm min-h-[48px]"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom padding for mobile sticky cart bar */}
      <div className="h-16 md:hidden" />
    </footer>
  );
};

export default Footer;
