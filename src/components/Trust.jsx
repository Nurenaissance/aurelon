import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Trust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();

  const stats = [
    { value: '2,500+', label: t.trust.stats.customers },
    { value: '4.9', label: t.trust.stats.rating, suffix: '/5' },
    { value: '98%', label: t.trust.stats.recommend },
    { value: '24/7', label: t.trust.stats.support },
  ];

  const testimonials = t.trust.testimonials.map((testimonial) => ({
    ...testimonial,
    rating: 5,
  }));

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-aurele-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="label mb-6 block">{t.trust.label}</span>
          <h2 className="heading-lg mb-6">
            {t.trust.headline}{' '}
            <span className="italic text-aurele-gold">{t.trust.headlineAccent}</span>
          </h2>
          <p className="text-body">
            {t.trust.subheading}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-large p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-aurele-gold text-2xl">{stat.suffix}</span>}
                </div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-aurele-gold/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-aurele-gold fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-secondary mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-aurele-warm flex items-center justify-center">
                  <span className="font-display text-foreground text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-medium text-sm">{testimonial.author}</div>
                  <div className="text-muted text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-muted mb-8">{t.trust.press.label}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.trust.press.mentions.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-aurele-warm/50 border border-faint/30"
              >
                <div className="font-display text-lg text-foreground mb-2">{item.name}</div>
                <p className="text-muted text-sm italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
