import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Briefcase,
  Plane,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const { translations: t } = useLanguage();

  const icons = [Briefcase, Plane, Palette];

  const experiences = t.useCases.experiences.map((exp, index) => ({
    ...exp,
    icon: icons[index],
  }));

  return (
    <section id="experience" ref={ref} className="section-padding-lg section-dark relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-aurele-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="label text-aurele-gold/70 mb-6 block">{t.useCases.label}</span>
          <h2 className="heading-lg text-white mb-6">
            {t.useCases.headline}{' '}
            <span className="italic text-aurele-gold">{t.useCases.headlineAccent}</span>
          </h2>
          <p className="text-body text-white/60">
            {t.useCases.subheading}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'bg-aurele-gold text-aurele-noir'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20'
              }`}
            >
              <exp.icon className="w-5 h-5" />
              <span className="font-medium">{exp.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-gold mb-6">
              {experiences[activeTab].subtitle}
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
              {experiences[activeTab].title}
            </h3>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              {experiences[activeTab].description}
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {experiences[activeTab].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-aurele-gold" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="p-6 rounded-xl bg-white/5 border-l-2 border-aurele-gold">
              <p className="text-white/70 italic mb-3">{experiences[activeTab].testimonial}</p>
              <p className="text-white/40 text-sm">— {experiences[activeTab].author}</p>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            key={`visual-${activeTab}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-aurele-gold/10 rounded-large blur-2xl" />

              {/* Visual Card */}
              <div className="relative rounded-large overflow-hidden bg-aurele-charcoal border border-white/5">
                {/* Header accent */}
                <div className="h-1 bg-aurele-gold" />

                {/* Content */}
                <div className="p-8">
                  <div className="aspect-video rounded-xl bg-aurele-noir border border-white/5 p-8 relative overflow-hidden">
                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {(() => {
                          const Icon = experiences[activeTab].icon;
                          return (
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-aurele-gold/10 border border-aurele-gold/30 flex items-center justify-center mb-4">
                              <Icon className="w-10 h-10 text-aurele-gold" />
                            </div>
                          );
                        })()}
                        <p className="text-white font-display text-lg">{experiences[activeTab].subtitle}</p>
                        <p className="text-white/40 text-sm mt-1">{t.useCases.activeMode}</p>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-aurele-gold/30 rounded-tl" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-aurele-gold/30 rounded-br" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-aurele-gold/30 transition-all duration-300 group"
          >
            <span>{t.useCases.bottomCta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
