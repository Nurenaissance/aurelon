import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SocialProofStrip = () => {
  const { translations: t } = useLanguage();

  const stats = [
    t.socialProof.stats.customers,
    t.socialProof.stats.rating,
    t.socialProof.stats.recommend,
  ];

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="py-14 md:py-24 bg-aurele-cream">
      <div className="container-luxe">
        {/* Stats Row — staggered per stat */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-20 mb-10 md:mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <span className="block font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm md:text-base text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Gold divider — animated width */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="h-px bg-gradient-to-r from-transparent via-aurele-gold/30 to-transparent mb-10 md:mb-14"
        />

        {/* Testimonial Cards — desktop grid, mobile horizontal scroll */}
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {t.socialProof.quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-faint/30"
            >
              <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
                &ldquo;{quote.text}&rdquo;
              </p>
              <span className="text-sm text-muted font-medium">
                &mdash; {quote.author}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile — horizontal scrollable cards */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max pb-2">
            {t.socialProof.quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-faint/30 w-[280px] flex-shrink-0"
              >
                <p className="text-base italic text-foreground leading-relaxed mb-3">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <span className="text-sm text-muted font-medium">
                  &mdash; {quote.author}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
