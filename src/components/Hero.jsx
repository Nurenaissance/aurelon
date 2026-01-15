import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Zap,
  Play,
  ChevronDown,
} from 'lucide-react';

const Hero = () => {
  const { translations: t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const colors = [
    { name: 'Obsidian Black', hex: '#1A1814', image: 0 },
    { name: 'Tortoise Shell', hex: '#8B6914', image: 1 },
    { name: 'Crystal Clear', hex: '#E8E4DE', image: 2 },
  ];

  const productImages = [
    { id: 0, alt: 'Aurelon One - Front View', src: '/images/products/product-front.webp' },
    { id: 1, alt: 'Aurelon One - Side View', src: '/images/products/product-side.webp' },
    { id: 2, alt: 'Aurelon One - Details', src: '/images/products/product-details.webp' },
    { id: 3, alt: 'Aurelon One - Angle View', src: '/images/products/product-angle.webp' },
  ];

  const scrollToProduct = () => {
    document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Full-Screen Lifestyle Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-aurele-noir/60 via-aurele-noir/40 to-aurele-noir/80 z-10" />
          {/* Luxury gradient background with animated glow */}
          <div className="absolute inset-0 bg-aurele-noir">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aurele-gold/10 rounded-full blur-[200px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-aurele-gold/5 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-luxe text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-aurele-gold animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Now Shipping in India</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]">
              <span className="block">See the World</span>
              <span className="block italic text-aurele-gold">Differently</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              8MP HD camera smart glasses with AI translation, ChatGPT voice assistant,
              1080P video recording, and 10-hour battery life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                onClick={scrollToProduct}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-aurele-gold text-aurele-noir font-semibold rounded-full hover:bg-aurele-gold-dark hover:shadow-glow transition-all duration-300 flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now — ₹24,999</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Film</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-aurele-gold fill-current" />
                  ))}
                </div>
                <span>4.9 (2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>1-Year Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Product Preview Floating */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 relative"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Real Product Image */}
              <img
                src="/images/products/product-front.webp"
                alt="Aurelon One AI Smart Glasses"
                className="w-full drop-shadow-2xl rounded-lg"
              />

              {/* Floating Feature Tags */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 top-1/4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs"
              >
                8MP Camera
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -right-4 top-1/4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs"
              >
                10h Battery
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 px-3 py-1.5 rounded-full bg-aurele-gold/20 backdrop-blur-sm border border-aurele-gold/30 text-aurele-gold text-xs font-medium"
              >
                ChatGPT AI
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Shop</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </section>

      {/* Product Showcase Section - Shopify Style */}
      <section id="product-showcase" className="py-16 md:py-24 bg-aurele-cream">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl bg-white border border-faint/30 overflow-hidden mb-4 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center p-4 md:p-8"
                  >
                    <img
                      src={productImages[selectedImage].src}
                      alt={productImages[selectedImage].alt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={() => setSelectedImage(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-aurele-gold text-aurele-noir text-xs font-medium">
                    Bestseller
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-medium border border-success/20">
                    In Stock
                  </span>
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-error text-error' : 'text-muted'}`} />
                </button>

                {/* Video Play Button */}
                <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-card text-sm font-medium hover:bg-white transition-colors">
                  <Play className="w-4 h-4 fill-foreground" />
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square rounded-xl bg-white border-2 transition-all duration-300 overflow-hidden ${
                      selectedImage === index ? 'border-aurele-gold' : 'border-faint/30 hover:border-faint'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center p-2">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right - Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Breadcrumb */}
              <div className="text-sm text-muted mb-4">
                <span className="hover:text-aurele-gold cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span className="hover:text-aurele-gold cursor-pointer">AI Glasses</span>
                <span className="mx-2">/</span>
                <span className="text-foreground">Aurelon One</span>
              </div>

              {/* Product Title */}
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                Aurelon One
              </h1>
              <p className="text-secondary text-lg mb-4">8MP AI Camera Smart Glasses</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-aurele-gold fill-current" />
                  ))}
                </div>
                <span className="text-sm text-secondary">4.9 (2,847 reviews)</span>
                <span className="text-faint">|</span>
                <span className="text-sm text-success font-medium">2,500+ sold</span>
              </div>

              {/* Price */}
              <div className="mb-6 p-4 rounded-xl bg-aurele-warm/50 border border-aurele-gold/20">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-semibold text-foreground">₹24,999</span>
                  <span className="text-lg text-muted line-through">₹34,999</span>
                  <span className="px-2 py-1 rounded bg-success/10 text-success text-sm font-medium">
                    17% OFF
                  </span>
                </div>
                <p className="text-sm text-secondary">
                  or <span className="font-medium">₹8,333/mo</span> with No-Cost EMI
                </p>
              </div>

              {/* Quick Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['8MP HD Camera', '1080P Video', 'AI Translation', '10h Battery'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-faint/30 text-sm">
                    <Zap className="w-3.5 h-3.5 text-aurele-gold" />
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">Color: <span className="font-normal text-secondary">{colors[selectedColor].name}</span></span>
                </div>
                <div className="flex gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(index)}
                      className={`w-14 h-14 rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedColor === index
                          ? 'border-aurele-gold shadow-glow'
                          : 'border-faint/30 hover:border-faint'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="w-10 h-10 rounded-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <span className="font-medium text-foreground mb-3 block">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white border border-faint/30 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center text-foreground hover:bg-aurele-warm transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center text-foreground hover:bg-aurele-warm transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-warning font-medium">Only 12 left in stock!</span>
                </div>
              </div>

              {/* Add to Cart & Buy Now */}
              <div className="space-y-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    addToCart({
                      id: 'aurelon-one',
                      name: 'Aurelon One',
                      price: 24999,
                      color: colors[selectedColor].name,
                      image: productImages[0].src,
                    }, quantity);
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 2000);
                  }}
                  className={`w-full justify-center py-4 text-lg flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${
                    addedToCart
                      ? 'bg-emerald-500 text-white'
                      : 'bg-aurele-gold text-aurele-noir hover:bg-aurele-gold-dark'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart — ₹{(24999 * quantity).toLocaleString()}</span>
                    </>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-dark justify-center py-4"
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-xl bg-white border border-faint/30">
                  <Truck className="w-5 h-5 mx-auto mb-1.5 text-aurele-gold" />
                  <span className="text-xs text-secondary block font-medium">Free Shipping</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-white border border-faint/30">
                  <RotateCcw className="w-5 h-5 mx-auto mb-1.5 text-aurele-gold" />
                  <span className="text-xs text-secondary block font-medium">30-Day Returns</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-white border border-faint/30">
                  <Shield className="w-5 h-5 mx-auto mb-1.5 text-aurele-gold" />
                  <span className="text-xs text-secondary block font-medium">1-Year Warranty</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="p-4 rounded-xl bg-white border border-faint/30">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Arrives by <span className="text-aurele-gold">Jan 22-25</span>
                    </p>
                    <p className="text-xs text-muted mt-1">Free express shipping on orders over ₹20,000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
