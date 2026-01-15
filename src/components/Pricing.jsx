import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const collections = [
    {
      name: t.pricing.plans[0].name,
      badge: t.pricing.plans[0].badge,
      price: '24,999',
      currency: '₹',
      description: t.pricing.plans[0].description,
      features: t.pricing.plans[0].features,
      cta: t.pricing.plans[0].cta,
      ctaLink: '#cta',
      highlighted: true,
    },
    {
      name: t.pricing.plans[1].name,
      badge: t.pricing.plans[1].badge,
      price: '34,999',
      currency: '₹',
      description: t.pricing.plans[1].description,
      features: t.pricing.plans[1].features,
      cta: t.pricing.plans[1].cta,
      ctaLink: '#cta',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="section-padding-lg relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurele-warm" />
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="label mb-6 block">{t.pricing.label}</span>
          <h2 className="heading-lg mb-6">
            {t.pricing.headline}{' '}
            <span className="italic text-aurele-gold">{t.pricing.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.pricing.subheading}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {collections.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Glow Effect for Highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-aurele-gold/10 rounded-large blur-xl" />
              )}

              <div className={`relative bg-white rounded-large overflow-hidden shadow-card ${
                plan.highlighted ? 'border-2 border-aurele-gold' : 'border border-faint/30'
              }`}>
                {/* Top accent */}
                <div className={`h-1 ${
                  plan.highlighted
                    ? 'bg-aurele-gold'
                    : 'bg-faint/30'
                }`} />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl text-foreground">{plan.name}</h3>
                      <p className="text-muted text-sm mt-1">{plan.description}</p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      plan.highlighted
                        ? 'bg-aurele-gold/10 text-aurele-gold-dark border border-aurele-gold/30'
                        : 'bg-aurele-warm text-muted border border-faint/50'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-muted">{plan.currency}</span>
                      <span className="font-display text-5xl text-foreground">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted
                            ? 'bg-aurele-gold/20 text-aurele-gold'
                            : 'bg-aurele-warm text-muted'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-4 rounded-full text-center font-medium transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-aurele-gold text-aurele-noir hover:bg-aurele-gold-dark hover:shadow-glow'
                        : 'bg-aurele-warm text-foreground border border-faint/50 hover:bg-faint/30'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-large p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <span className="badge-gold mb-6 inline-block">{t.pricing.enterprise.badge}</span>

              <h3 className="heading-md mb-4">
                {t.pricing.enterprise.headline}
              </h3>
              <p className="text-body-sm mb-6">
                {t.pricing.enterprise.description}
              </p>

              <a
                href="#cta"
                className="btn-secondary group"
              >
                <span>{t.pricing.enterprise.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4">
              {t.pricing.enterprise.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-aurele-warm border border-faint/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-aurele-gold" />
                  <span className="text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm">
            {t.pricing.trustBadge}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
