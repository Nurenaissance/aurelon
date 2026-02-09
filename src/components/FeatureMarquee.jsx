import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FeatureMarquee = () => {
  const { translations: t } = useLanguage();

  const items = t.marquee.items;
  const separator = ' \u2014 ';

  const content = items.join(separator) + separator;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-4 md:py-6 bg-aurele-noir overflow-hidden"
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        <span className="text-aurele-gold/60 text-xs sm:text-sm tracking-widest uppercase px-2">
          {content}
        </span>
        <span className="text-aurele-gold/60 text-xs sm:text-sm tracking-widest uppercase px-2">
          {content}
        </span>
      </div>
    </motion.section>
  );
};

export default FeatureMarquee;
