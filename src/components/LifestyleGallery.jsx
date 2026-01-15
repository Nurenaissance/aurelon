import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Star } from 'lucide-react';

const LifestyleGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const lifestyleImages = [
    { src: '/images/lifestyle/smart-glasses-1.jpg', alt: 'Woman wearing Aurelon smart glasses' },
    { src: '/images/lifestyle/smart-glasses-2.jpg', alt: 'Professional with Aurelon AI glasses' },
    { src: '/images/lifestyle/smart-glasses-3.jpg', alt: 'Stylish smart glasses lifestyle' },
    { src: '/images/lifestyle/smart-glasses-4.jpg', alt: 'Modern AI glasses fashion' },
    { src: '/images/lifestyle/smart-glasses-5.jpg', alt: 'Aurelon glasses in action' },
    { src: '/images/lifestyle/smart-glasses-6.jpg', alt: 'Smart glasses everyday style' },
  ];

  const reviews = [
    { name: 'Priya S.', rating: 5, text: 'Love the camera quality! Perfect for travel vlogging.' },
    { name: 'Anita M.', rating: 5, text: 'The AI translation is a game changer for my business trips.' },
    { name: 'Sneha K.', rating: 5, text: 'So lightweight and stylish. Get compliments everywhere!' },
  ];

  return (
    <section ref={ref} className="py-16 bg-aurele-cream overflow-hidden">
      <div className="container-luxe">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-aurele-gold" />
            <span className="text-sm font-medium text-secondary">@aurelon.india</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Join the <span className="italic text-aurele-gold">Community</span>
          </h2>
          <p className="text-secondary max-w-md mx-auto">
            See how our customers are styling their Aurelon glasses
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {lifestyleImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Quick Reviews Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-6 border-t border-b border-faint/30"
        >
          {reviews.map((review, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-aurele-gold fill-current" />
                ))}
              </div>
              <p className="text-secondary">"{review.text}"</p>
              <span className="text-muted">— {review.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-8"
        >
          <div className="text-center">
            <span className="block font-display text-3xl text-foreground">2,500+</span>
            <span className="text-sm text-secondary">Happy Customers</span>
          </div>
          <div className="text-center">
            <span className="block font-display text-3xl text-foreground">4.9</span>
            <span className="text-sm text-secondary">Average Rating</span>
          </div>
          <div className="text-center">
            <span className="block font-display text-3xl text-foreground">98%</span>
            <span className="text-sm text-secondary">Would Recommend</span>
          </div>
          <div className="text-center">
            <span className="block font-display text-3xl text-foreground">24hr</span>
            <span className="text-sm text-secondary">Fast Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
