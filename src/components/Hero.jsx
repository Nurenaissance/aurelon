import { motion } from 'framer-motion';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations: t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Toggle video sound
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aurele-cream">
      {/* Video Background (uncomment when you have video) */}
      {/*
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-aurele-cream/60" />
      </div>
      */}

      {/* Fallback Background Elements (remove when using video) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-aurele-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-aurele-warm rounded-full blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-luxe pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Editorial Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="label">{t.hero.label}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-xl mb-6"
            >
              <span className="block">{t.hero.headline1}</span>
              <span className="block">
                {t.hero.headline2}{' '}
                <span className="italic text-aurele-gold">{t.hero.headline3}</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-body max-w-xl mx-auto lg:mx-0 mb-10"
            >
              {t.hero.subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#cta"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#experience"
                className="btn-secondary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                <span>{t.hero.experience}</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '24', label: t.hero.stats.languages, suffix: '+' },
                { value: '12', label: t.hero.stats.hours, suffix: 'h' },
                { value: '42', label: t.hero.stats.grams, suffix: 'g' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl text-foreground">
                    {stat.value}
                    <span className="text-aurele-gold">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Product Card */}
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-aurele-gold/10 to-transparent rounded-large blur-2xl" />

              {/* Main Product Display */}
              <div className="relative card-large p-8 md:p-12">
                {/* Product Image Area - Replace with actual product image */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-aurele-warm to-white flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for product image */}
                  {/* <img src="/images/product-hero.png" alt="AURELE One" className="w-full h-full object-contain" /> */}

                  {/* Elegant Glasses Illustration (placeholder) */}
                  <div className="relative z-10 text-center">
                    <div className="w-72 h-24 mx-auto">
                      <svg viewBox="0 0 240 70" className="w-full h-full">
                        <rect x="15" y="18" width="85" height="38" rx="12" fill="none" stroke="#1A1814" strokeWidth="1.5" />
                        <rect x="140" y="18" width="85" height="38" rx="12" fill="none" stroke="#1A1814" strokeWidth="1.5" />
                        <path d="M100 37 Q120 30 140 37" fill="none" stroke="#1A1814" strokeWidth="1.5" />
                        <path d="M15 37 L5 37" fill="none" stroke="#1A1814" strokeWidth="1.5"/>
                        <path d="M225 37 L235 37" fill="none" stroke="#1A1814" strokeWidth="1.5"/>
                        <circle cx="57" cy="37" r="2.5" fill="#C9A961"/>
                        <circle cx="182" cy="37" r="2.5" fill="#C9A961"/>
                      </svg>
                    </div>
                    <p className="font-display text-lg text-foreground mt-6">{t.hero.productName}</p>
                    <p className="text-sm text-muted mt-1">{t.hero.productTag}</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-aurele-gold/30 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-aurele-gold/30 rounded-br-lg" />
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-3 mt-8 justify-center">
                  {t.hero.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-aurele-warm border border-faint/50 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-3 card rounded-xl"
              >
                <div className="text-center">
                  <div className="font-display text-lg text-foreground">{t.hero.floatingAI}</div>
                  <div className="text-xs text-muted">{t.hero.floatingAILabel}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-5 py-3 card rounded-xl"
              >
                <div className="text-center">
                  <div className="font-display text-lg text-foreground">{t.hero.madeIn}</div>
                  <div className="text-xs text-aurele-gold font-medium">{t.hero.madeInCountry}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted tracking-widest uppercase">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-aurele-gold to-transparent" />
        </motion.div>
      </motion.div>

      {/* Video Mute Button (show when using video) */}
      {/*
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
      */}
    </section>
  );
};

export default Hero;
