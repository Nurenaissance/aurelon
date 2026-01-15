import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Verified } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Trust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { translations: t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: '2,500+', label: t.trust.stats.customers },
    { value: '4.9', label: t.trust.stats.rating, suffix: '/5' },
    { value: '98%', label: t.trust.stats.recommend },
    { value: '24/7', label: t.trust.stats.support },
  ];

  const testimonials = [
    {
      quote: "The 8MP camera quality is incredible! I use it for my travel vlogs and the anti-shake feature makes such a difference. Best purchase I've made this year.",
      author: 'Priya Sharma',
      role: 'Travel Blogger',
      location: 'Mumbai',
      rating: 5,
      verified: true,
      image: '/images/lifestyle/smart-glasses-1.jpg',
    },
    {
      quote: "As a business consultant, the AI translation feature has been a game changer. Had seamless conversations in Japan without any language barriers.",
      author: 'Rahul Mehta',
      role: 'Business Consultant',
      location: 'Bangalore',
      rating: 5,
      verified: true,
      image: '/images/lifestyle/smart-glasses-2.jpg',
    },
    {
      quote: "So lightweight I forget I'm wearing them! The ChatGPT assistant helps me stay productive during my commute. Highly recommend to every professional.",
      author: 'Anita Desai',
      role: 'Marketing Director',
      location: 'Delhi',
      rating: 5,
      verified: true,
      image: '/images/lifestyle/smart-glasses-3.jpg',
    },
    {
      quote: "Perfect for capturing moments hands-free. The video quality at 1080p is impressive. My friends keep asking where I got these stylish glasses!",
      author: 'Vikram Singh',
      role: 'Content Creator',
      location: 'Pune',
      rating: 5,
      verified: true,
      image: '/images/lifestyle/smart-glasses-4.jpg',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-aurele-noir">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-aurele-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxe relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-aurele-gold/70 text-sm font-medium tracking-widest uppercase mb-6 block">
            {t.trust.label}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            {t.trust.headline}{' '}
            <span className="italic text-aurele-gold">{t.trust.headlineAccent}</span>
          </h2>
          <p className="text-white/60 text-lg">
            {t.trust.subheading}
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="font-display text-3xl md:text-4xl text-white mb-1">
                {stat.value}
                {stat.suffix && <span className="text-aurele-gold text-xl">{stat.suffix}</span>}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <motion.img
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].author}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aurele-noir/60 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="relative">
              <Quote className="w-16 h-16 text-aurele-gold/20 mb-6" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-aurele-gold fill-current" />
                  ))}
                </div>
                {testimonials[activeTestimonial].verified && (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                    <Verified className="w-3 h-3" />
                    Verified Purchase
                  </span>
                )}
              </div>

              {/* Quote */}
              <motion.p
                key={`quote-${activeTestimonial}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light"
              >
                "{testimonials[activeTestimonial].quote}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${activeTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-full bg-aurele-gold/20 flex items-center justify-center border-2 border-aurele-gold/30">
                  <span className="font-display text-aurele-gold text-xl">
                    {testimonials[activeTestimonial].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-lg">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2 ml-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'w-8 bg-aurele-gold'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            { text: "Camera quality exceeded my expectations!", author: "Sneha K.", rating: 5 },
            { text: "The AI translation is scarily accurate.", author: "Arjun R.", rating: 5 },
            { text: "Comfortable enough for all-day wear.", author: "Meera P.", rating: 5 },
          ].map((review, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-aurele-gold fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-sm mb-3">"{review.text}"</p>
              <span className="text-white/40 text-xs">— {review.author}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
