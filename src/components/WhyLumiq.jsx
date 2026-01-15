import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Gem,
  Cpu,
  Award,
  Heart,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyLumiq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const icons = [Gem, Cpu, Award, Heart];

  const differentiators = t.whyAurele.differentiators.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  const specs = [
    { label: t.whyAurele.specs.weight, value: '42g' },
    { label: t.whyAurele.specs.battery, value: '12h' },
    { label: t.whyAurele.specs.quickCharge, value: '20min = 4h' },
    { label: t.whyAurele.specs.resistance, value: 'IPX4' },
    { label: t.whyAurele.specs.connectivity, value: 'Bluetooth 5.3' },
    { label: t.whyAurele.specs.languages, value: '24+' },
  ];

  return (
    <section id="atelier" ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-aurele-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-aurele-warm rounded-full blur-[100px]" />
      </div>

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="label mb-6 block">{t.whyAurele.label}</span>
          <h2 className="heading-lg mb-6">
            {t.whyAurele.headline}{' '}
            <span className="italic text-aurele-gold">{t.whyAurele.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.whyAurele.subheading}
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover p-8 group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="feature-icon-lg group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <span className="badge-gold text-xs">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-body-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-large p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="heading-md mb-2">{t.whyAurele.specsTitle}</h3>
            <p className="text-muted">{t.whyAurele.specsSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="text-center p-4 rounded-xl bg-aurele-warm/50"
              >
                <div className="font-display text-2xl text-foreground mb-1">{spec.value}</div>
                <div className="text-sm text-muted">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-aurele-warm border border-faint/50">
            <div className="w-2 h-2 rounded-full bg-aurele-gold" />
            <span className="text-secondary">
              {t.whyAurele.badge} <span className="text-foreground font-medium">{t.whyAurele.badgeCountry}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLumiq;
