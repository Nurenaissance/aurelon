import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { translations: t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="cta" ref={ref} className="section-padding-lg section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aurele-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-luxe relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-large overflow-hidden bg-aurele-charcoal border border-white/5">
            {/* Top Border */}
            <div className="h-1 bg-aurele-gold" />

            <div className="p-8 md:p-16">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="label text-aurele-gold/70 mb-6 block"
                >
                  {t.cta.label}
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-display text-3xl md:text-4xl text-white mb-6"
                >
                  {t.cta.headline}{' '}
                  <span className="italic text-aurele-gold">{t.cta.headlineAccent}</span>?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white/60 max-w-xl mx-auto"
                >
                  {t.cta.subheading}
                </motion.p>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-md mx-auto"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Mail className="w-5 h-5 text-white/40" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.cta.placeholder}
                        className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aurele-gold/50 focus:ring-2 focus:ring-aurele-gold/20 transition-all duration-300"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-aurele-gold text-aurele-noir font-medium hover:bg-aurele-gold-dark hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>{t.cta.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.cta.button}</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/40 text-sm">
                      {t.cta.noSpam}
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-aurele-gold/20 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-aurele-gold" />
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">{t.cta.successTitle}</h3>
                    <p className="text-white/60">
                      {t.cta.successMessage}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 mt-12"
              >
                {t.cta.badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-aurele-gold" />
                    <span>{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-aurele-gold animate-pulse" />
            <span className="text-white/70 font-medium text-sm">
              {t.cta.limitedSpots}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
