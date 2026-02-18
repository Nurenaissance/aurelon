import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';
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
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const ProductBuy = () => {
  const { translations: t } = useLanguage();
  const { addToCart, setIsCheckoutOpen } = useCart();
  const { addToast } = useToast();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [swipeDir, setSwipeDir] = useState(0);

  const colors = [
    { name: 'Obsidian Black', hex: '#1A1814', image: 0 },
    { name: 'Tortoise Shell', hex: '#8B6914', image: 1 },
    { name: 'Crystal Clear', hex: '#E8E4DE', image: 2 },
  ];

  const productImages = [
    { id: 0, alt: 'Aurelon Smart Glasses - Front View', src: '/images/products/product-front.webp' },
    { id: 1, alt: 'Aurelon Smart Glasses - Side View', src: '/images/products/product-side.webp' },
    { id: 2, alt: 'Aurelon Smart Glasses - Details', src: '/images/products/product-details.webp' },
    { id: 3, alt: 'Aurelon Smart Glasses - Angle View', src: '/images/products/product-angle.webp' },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: 'aurelon',
      name: 'Aurelon',
      price: 7999,
      color: colors[selectedColor].name,
      image: productImages[0].src,
    }, quantity);
    setAddedToCart(true);
    addToast(`${colors[selectedColor].name} Aurelon added to cart`, 'cart');
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: 'aurelon',
      name: 'Aurelon',
      price: 7999,
      color: colors[selectedColor].name,
      image: productImages[0].src,
    }, quantity);
    setIsCheckoutOpen(true);
  };

  const goToImage = (dir) => {
    setSwipeDir(dir);
    setSelectedImage(prev => {
      if (dir > 0) return prev === productImages.length - 1 ? 0 : prev + 1;
      return prev === 0 ? productImages.length - 1 : prev - 1;
    });
  };

  return (
    <>
      <section id="product-buy" className="py-14 md:py-24 bg-aurele-cream">
        <div className="container-luxe">
          {/* Section Intro — staggered label + headline */}
          <div className="text-center mb-10 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted mb-3 block"
            >
              {t.productBuy.sectionLabel}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="font-display text-3xl md:text-4xl text-foreground"
            >
              {t.productBuy.sectionHeadline}
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              {/* Main Image — swipeable on mobile */}
              <div
                className="relative aspect-square rounded-2xl bg-white border border-faint/30 overflow-hidden mb-3 md:mb-4 group touch-pan-y"
                onTouchStart={(e) => { e.currentTarget._touchX = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                  const diff = e.currentTarget._touchX - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 50) goToImage(diff > 0 ? 1 : -1);
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, x: swipeDir * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: swipeDir * -30 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center justify-center p-4 md:p-8"
                  >
                    <img
                      src={productImages[selectedImage].src}
                      alt={productImages[selectedImage].alt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows — desktop only */}
                <button
                  onClick={() => goToImage(-1)}
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hidden md:flex"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={() => goToImage(1)}
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hidden md:flex"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Badges */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 flex flex-col gap-2">
                  <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-aurele-gold text-aurele-noir text-xs font-medium">
                    {t.productBuy.bestseller}
                  </span>
                  <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-success/10 text-success text-xs font-medium border border-success/20">
                    {t.productBuy.inStock}
                  </span>
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    addToast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist', 'info');
                  }}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  className="absolute top-3 md:top-4 right-3 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 shadow-card flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isWishlisted ? 'fill-error text-error' : 'text-muted'}`} />
                </button>

                {/* Video Play Button — cycles through product images */}
                <button
                  onClick={() => {
                    let i = 0;
                    const interval = setInterval(() => {
                      i++;
                      if (i >= productImages.length) { clearInterval(interval); return; }
                      setSwipeDir(1);
                      setSelectedImage(i);
                    }, 600);
                  }}
                  className="absolute bottom-3 md:bottom-4 right-3 md:right-4 hidden sm:flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/90 shadow-card text-sm font-medium hover:bg-white transition-colors"
                >
                  <Play className="w-4 h-4 fill-foreground" />
                  <span>{t.productBuy.watchVideo}</span>
                </button>

                {/* Mobile swipe dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
                  {productImages.map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === selectedImage ? 'bg-aurele-gold w-4' : 'bg-foreground/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery — hidden on small mobile, visible from sm+ */}
              <div className="hidden sm:flex gap-2 md:gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => { setSwipeDir(0); setSelectedImage(index); }}
                    className={`flex-1 aspect-square rounded-xl bg-white border-2 transition-all duration-300 overflow-hidden ${
                      selectedImage === index ? 'border-aurele-gold' : 'border-faint/30 hover:border-faint'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center p-1.5 md:p-2">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
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
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="flex flex-col"
            >
              {/* Product Title */}
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                {t.productBuy.name}
              </h2>
              <p className="text-secondary text-base md:text-lg mb-4">{t.productBuy.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-aurele-gold fill-current" />
                  ))}
                </div>
                <span className="text-sm text-secondary">{t.productBuy.reviews}</span>
                <span className="text-faint">|</span>
                <span className="text-sm text-success font-medium">{t.productBuy.sold}</span>
              </div>

              {/* Price */}
              <div className="mb-5 md:mb-6 p-4 rounded-xl bg-aurele-warm/50 border border-aurele-gold/20">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl md:text-3xl font-semibold text-foreground">{t.productBuy.price}</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 text-sm font-medium">
                    {t.productBuy.badge}
                  </span>
                </div>
                <p className="text-sm text-secondary">
                  {t.productBuy.emi}
                </p>
              </div>

              {/* Quick Features */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-6">
                {['Hands-Free Calls', 'Open-Ear Audio', 'All-Day Battery', 'Instant Capture'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white border border-faint/30 text-xs md:text-sm">
                    <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-aurele-gold" />
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Color Selection */}
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground text-sm md:text-base">{t.productBuy.color}: <span className="font-normal text-secondary">{colors[selectedColor].name}</span></span>
                </div>
                <div className="flex gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedColor === index
                          ? 'border-aurele-gold shadow-glow'
                          : 'border-faint/30 hover:border-faint'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-5 md:mb-6">
                <span className="font-medium text-foreground mb-3 block text-sm md:text-base">{t.productBuy.quantity}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white border border-faint/30 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-foreground hover:bg-aurele-warm transition-colors min-h-[44px]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 md:w-12 text-center font-medium text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-foreground hover:bg-aurele-warm transition-colors min-h-[44px]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-warning font-medium">{t.productBuy.stock}</span>
                </div>
              </div>

              {/* Add to Cart & Buy Now — visible on all screens */}
              <div className="space-y-3 mb-5 md:mb-6">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`w-full justify-center py-3.5 md:py-4 text-base md:text-lg flex items-center gap-2 rounded-full font-semibold transition-all duration-300 min-h-[48px] ${
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
                      <span>{t.productBuy.addToCart} — ₹{(7999 * quantity).toLocaleString()}</span>
                    </>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuyNow}
                  className="w-full btn-dark justify-center py-3.5 md:py-4 min-h-[48px]"
                >
                  {t.productBuy.buyNow}
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5 md:mb-6">
                <div className="text-center p-2.5 md:p-3 rounded-xl bg-white border border-faint/30">
                  <Truck className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-1.5 text-aurele-gold" />
                  <span className="text-[11px] md:text-xs text-secondary block font-medium">{t.productBuy.trustBadges.shipping}</span>
                </div>
                <div className="text-center p-2.5 md:p-3 rounded-xl bg-white border border-faint/30">
                  <RotateCcw className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-1.5 text-aurele-gold" />
                  <span className="text-[11px] md:text-xs text-secondary block font-medium">{t.productBuy.trustBadges.returns}</span>
                </div>
                <div className="text-center p-2.5 md:p-3 rounded-xl bg-white border border-faint/30">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-1.5 text-aurele-gold" />
                  <span className="text-[11px] md:text-xs text-secondary block font-medium">{t.productBuy.trustBadges.warranty}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="p-3.5 md:p-4 rounded-xl bg-white border border-faint/30">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.productBuy.delivery} <span className="text-aurele-gold">{t.productBuy.deliveryTime}</span>
                    </p>
                    <p className="text-xs text-muted mt-1">{t.productBuy.deliverySub}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-lg border-t border-faint/30 px-4 py-3 shadow-elevated">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <span className="text-lg font-semibold text-foreground">₹{(7999 * quantity).toLocaleString()}</span>
            <span className="text-xs text-muted block truncate">{t.productBuy.emi}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 min-h-[48px] ${
              addedToCart
                ? 'bg-emerald-500 text-white'
                : 'bg-aurele-gold text-aurele-noir active:bg-aurele-gold-dark'
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{t.productBuy.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductBuy;
