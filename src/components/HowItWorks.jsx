import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Glasses, Smartphone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const icons = [Glasses, Smartphone, Sparkles];

  const steps = t.howItWorks.steps.map((step, index) => ({
    number: String(index + 1).padStart(2, '0'),
    icon: icons[index],
    ...step,
  }));

  return (
    <section ref={ref} className="section-padding bg-aurele-warm relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="label mb-6 block">{t.howItWorks.label}</span>
          <h2 className="heading-lg mb-6">
            {t.howItWorks.headline}{' '}
            <span className="italic text-aurele-gold">{t.howItWorks.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.howItWorks.subheading}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-aurele-gold/20 via-aurele-gold to-aurele-gold/20 origin-left"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="card p-8 text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 rounded-full bg-aurele-gold text-aurele-noir text-sm font-medium">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-aurele-warm border border-faint/50 flex items-center justify-center mt-4 mb-6">
                    <step.icon className="w-8 h-8 text-aurele-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl text-foreground mb-4">{step.title}</h3>
                  <p className="text-body-sm mb-6">{step.description}</p>

                  {/* Detail Tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurele-warm border border-faint/50 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurele-gold" />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="card-large overflow-hidden">
            <div className="aspect-video relative bg-gradient-to-br from-aurele-cream to-white">
              {/* Video placeholder - Replace with actual video */}
              {/* <video src="/videos/product-demo.mp4" className="w-full h-full object-cover" controls /> */}

              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-20 h-20 rounded-full bg-aurele-gold flex items-center justify-center mb-6 mx-auto shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-aurele-noir ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>

                  <h4 className="font-display text-xl text-foreground mb-2">{t.howItWorks.videoTitle}</h4>
                  <p className="text-muted">{t.howItWorks.videoLength}</p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-aurele-gold/30 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-aurele-gold/30 rounded-br-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
