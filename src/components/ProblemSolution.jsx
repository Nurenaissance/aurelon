import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const philosophyPoints = t.philosophy.points.map((point, index) => ({
    number: String(index + 1).padStart(2, '0'),
    ...point,
  }));

  return (
    <section ref={ref} id="craftsmanship" className="section-padding-lg relative overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container-luxe">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="label mb-6 block">{t.philosophy.label}</span>
          <h2 className="heading-lg mb-6">
            {t.philosophy.headline} <span className="italic text-aurele-gold">{t.philosophy.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.philosophy.subheading}
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Number accent */}
              <div className="font-display text-7xl text-faint/30 absolute -top-4 -left-2">
                {point.number}
              </div>

              <div className="relative pt-8">
                <h3 className="heading-md mb-4 editorial-line">{point.title}</h3>
                <p className="text-body-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 card-large text-center">
            {/* Quote marks */}
            <div className="absolute top-8 left-8 font-display text-6xl text-aurele-gold/20">"</div>
            <div className="absolute bottom-8 right-8 font-display text-6xl text-aurele-gold/20">"</div>

            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed relative z-10">
              {t.philosophy.quote}
            </blockquote>

            <div className="mt-8">
              <div className="w-12 h-px bg-aurele-gold mx-auto mb-4" />
              <p className="text-muted">
                <span className="text-foreground font-medium">Aanya Sharma</span>
                <span className="mx-2">—</span>
                {t.philosophy.quoteAuthor}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
};

export default ProblemSolution;
