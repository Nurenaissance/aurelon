import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const BrandStatement = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="brand-statement" className="py-16 md:py-32 bg-aurele-cream">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Gold editorial line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-0.5 bg-gradient-to-r from-aurele-gold to-aurele-gold/30 mx-auto mb-8 origin-left"
        />

        {/* Statement — word-level feel with a smooth single reveal */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary leading-relaxed"
        >
          {t.brandStatement.text}
        </motion.p>
      </div>
    </section>
  );
};

export default BrandStatement;
