import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Languages,
  Mic,
  Phone,
  Music,
  Battery,
  Shield,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const icons = [Languages, Mic, Phone, Music, Battery, Shield];

  return (
    <section id="features" ref={ref} className="section-padding bg-aurele-warm relative overflow-hidden">
      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="label mb-6 block">{t.features.label}</span>
          <h2 className="heading-lg mb-6">
            {t.features.headline}{' '}
            <span className="italic text-aurele-gold">{t.features.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.features.subheading}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-hover p-8 h-full">
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="feature-icon-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Highlight Badge */}
                    <div className="badge-gold mb-4 text-xs">
                      {feature.highlight}
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-aurele-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">
            {t.features.bottomText}
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-aurele-gold hover:text-aurele-gold-dark transition-colors duration-300 font-medium"
          >
            <span>{t.features.bottomCta}</span>
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
