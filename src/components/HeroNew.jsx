import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroNew = () => {
  const { translations: t } = useLanguage();

  const scrollToExplore = () => {
    document.getElementById('brand-statement')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-aurele-noir">
          <div
            className="absolute top-1/3 left-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-aurele-gold/10 rounded-full blur-[150px] md:blur-[200px]"
            style={{ animation: 'glow-slow 6s ease-in-out infinite' }}
          />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-aurele-gold/5 rounded-full blur-[100px] md:blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px]" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative z-20 container-luxe text-center hidden md:block pt-24 pb-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-[1.05]"
        >
          {t.heroNew.headline}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/60 max-w-xl mx-auto mb-12"
        >
          {t.heroNew.sub}
        </motion.p>

        {/* Product Image — floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[550px] mx-auto mb-16"
        >
          <img
            src="/images/products/product-front.webp"
            alt="Aurelon Smart Glasses"
            className="w-full drop-shadow-2xl"
            style={{ animation: 'float-slow 5s ease-in-out infinite' }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToExplore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="inline-flex flex-col items-center gap-2 text-white/50 hover:text-aurele-gold transition-colors duration-300 group cursor-pointer"
        >
          <span className="text-sm tracking-widest uppercase">{t.heroNew.cta}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-20 w-full md:hidden min-h-screen flex flex-col">
        {/* Product image — centered in top area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center px-8 pt-24"
        >
          <img
            src="/images/products/product-front.webp"
            alt="Aurelon Smart Glasses"
            className="w-full max-w-[300px] drop-shadow-2xl"
            style={{ animation: 'float-slow 5s ease-in-out infinite' }}
          />
        </motion.div>

        {/* Text + scroll CTA at bottom with gradient */}
        <div className="bg-gradient-to-t from-aurele-noir via-aurele-noir/95 to-transparent pt-16 pb-12 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl text-white mb-3 leading-[1.1]"
          >
            {t.heroNew.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/60 mb-8"
          >
            {t.heroNew.sub}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToExplore}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-3 text-white/50 active:text-aurele-gold transition-colors"
          >
            <span className="text-sm tracking-widest uppercase">{t.heroNew.cta}</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
