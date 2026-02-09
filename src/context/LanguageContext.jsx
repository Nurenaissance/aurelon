import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Translations object
export const translations = {
  en: {
    // Navbar
    nav: {
      solutions: 'Experience',
      shop: 'Shop',
      discover: 'Pre-Order',
      discoverCollection: 'Pre-Order Now',
      tagline: 'Your life. Now playing.',
    },
    // HeroNew
    heroNew: {
      headline: 'Your life. Now playing.',
      sub: 'Music, memories, and moments \u2014 from glasses you\u2019d actually wear.',
      cta: 'Explore',
      scrollLabel: 'Scroll to explore',
      badge: 'Now Shipping in India',
      trustBadges: {
        rating: '4.9 (2,500+ reviews)',
        shipping: 'Free Shipping',
        warranty: '1-Year Warranty',
      },
    },
    // Brand Statement
    brandStatement: {
      text: 'What if every walk had a soundtrack? Every hangout was a concert? And every moment worth remembering was already saved?',
    },
    // Solutions
    solutions: {
      soundtrack: {
        feeling: 'Your Soundtrack',
        headline: 'Background music to your life.',
        body: 'Open-ear audio plays your music while you hear the world around you. Your commute, your run, your evening walk \u2014 all with a score. Never isolated. Always present.',
        details: ['Open-ear audio', 'Hear the real world', 'All-day battery'],
      },
      concert: {
        feeling: 'Shared Listening',
        headline: 'Turn any place into a concert.',
        body: 'Sync music with friends through the Aurelon app. Same track, same moment, no headphones. Talk to each other over the music. Park, rooftop, train \u2014 your venue.',
        details: ['Sync via app', 'Talk over music', 'Any number of friends'],
      },
      witness: {
        feeling: 'Your Witness',
        headline: 'See it. Save it.',
        body: 'One-tap photos for road incidents, police encounters, or just life being beautiful. Record 1\u20132 minute clips without reaching for your phone. Your glasses remember what you saw.',
        details: ['One-tap capture', '1\u20132 min recording', 'Hands-free evidence'],
      },
    },
    // Marquee
    marquee: {
      items: ['Open-Ear Audio', 'Shared Listening', 'One-Tap Capture', '1\u20132 Min Recording', 'Sync Music', 'All-Day Battery', 'Privacy-First', 'Prescription-Ready', 'USB-C Charging', 'Bluetooth 5.3'],
    },
    // SocialProof
    socialProof: {
      stats: {
        customers: { value: '2,500+', label: 'Happy Customers' },
        rating: { value: '4.9', label: 'Average Rating' },
        recommend: { value: '98%', label: 'Recommend' },
      },
      quotes: [
        { text: 'My morning walks feel cinematic now. Same route, completely different experience.', author: 'Meera K.' },
        { text: 'We synced music at a rooftop dinner. Five friends, one soundtrack, zero headphones. People thought we were insane.', author: 'Vikram B.' },
        { text: 'Caught a hit-and-run on camera. The footage from my glasses was the only evidence. These paid for themselves.', author: 'Ananya L.' },
      ],
    },
    // ProductBuy
    productBuy: {
      sectionLabel: 'Shop',
      sectionHeadline: 'Make it yours.',
      name: 'Aurelon',
      subtitle: 'Music. Memories. Always on.',
      price: '\u20B97,999',
      emi: 'EMI from \u20B92,667/month',
      badge: 'Now Shipping',
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      color: 'Color',
      quantity: 'Quantity',
      trustBadges: {
        shipping: 'Free Shipping',
        returns: '30-Day Returns',
        warranty: '1-Year Warranty',
      },
      delivery: 'Ships within',
      deliveryTime: '3\u20135 business days',
      deliverySub: 'Free shipping across India',
      stock: 'Only 12 left in stock!',
      bestseller: 'Bestseller',
      inStock: 'In Stock',
      reviews: '4.9 (2,500+ reviews)',
      sold: '2,500+ sold',
      watchVideo: 'Watch Video',
    },
    // Footer
    footer: {
      tagline: 'Your life. Now playing.',
      headline: 'Stay in the loop',
      sub: 'Join thousands who added a soundtrack to their everyday life.',
      placeholder: 'Your email address',
      subscribe: 'Subscribe',
      successTitle: 'You\u2019re in!',
      successMessage: 'We\u2019ll send you the details shortly.',
      noSpam: 'No spam. Unsubscribe anytime.',
      links: ['Aurelon', 'Privacy', 'Support', 'Contact'],
      social: ['Instagram', 'LinkedIn', 'Twitter'],
      legal: 'Legal',
      privacy: 'Privacy',
      designedIn: 'Designed in India',
      backToTop: 'Back to top',
      copyright: '\u00A9 2026 Aurelon',
    },
  },
  hi: {
    // Navbar
    nav: {
      solutions: '\u0905\u0928\u0941\u092D\u0935',
      shop: '\u0916\u0930\u0940\u0926\u0947\u0902',
      discover: '\u092A\u094D\u0930\u0940-\u0911\u0930\u094D\u0921\u0930',
      discoverCollection: '\u0905\u092D\u0940 \u092A\u094D\u0930\u0940-\u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0947\u0902',
      tagline: '\u0906\u092A\u0915\u0940 \u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940\u0964 \u0905\u092D\u0940 \u091A\u0932 \u0930\u0939\u093E \u0939\u0948\u0964',
    },
    // HeroNew
    heroNew: {
      headline: '\u0906\u092A\u0915\u0940 \u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940\u0964 \u0905\u092D\u0940 \u091A\u0932 \u0930\u0939\u093E \u0939\u0948\u0964',
      sub: '\u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915, \u092F\u093E\u0926\u0947\u0902, \u0914\u0930 \u092A\u0932 \u2014 \u0910\u0938\u0947 \u091A\u0936\u094D\u092E\u0947 \u0938\u0947 \u091C\u094B \u0906\u092A \u0938\u091A \u092E\u0947\u0902 \u092A\u0939\u0928\u0928\u093E \u091A\u093E\u0939\u0947\u0902\u0964',
      cta: '\u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930 \u0915\u0930\u0947\u0902',
      scrollLabel: '\u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0915\u0930\u0947\u0902',
      badge: '\u0905\u092C \u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u0936\u093F\u092A\u093F\u0902\u0917',
      trustBadges: {
        rating: '4.9 (2,500+ \u0930\u093F\u0935\u094D\u092F\u0942\u091C\u093C)',
        shipping: '\u092B\u094D\u0930\u0940 \u0936\u093F\u092A\u093F\u0902\u0917',
        warranty: '1 \u0938\u093E\u0932 \u0935\u093E\u0930\u0902\u091F\u0940',
      },
    },
    // Brand Statement
    brandStatement: {
      text: '\u0915\u094D\u092F\u093E \u0939\u094B \u0905\u0917\u0930 \u0939\u0930 \u0938\u0948\u0930 \u0915\u093E \u0905\u092A\u0928\u093E \u0938\u093E\u0909\u0902\u0921\u091F\u094D\u0930\u0948\u0915 \u0939\u094B? \u0939\u0930 \u092E\u093F\u0932\u0928\u093E \u090F\u0915 \u0915\u0949\u0928\u094D\u0938\u0930\u094D\u091F? \u0914\u0930 \u0939\u0930 \u092F\u093E\u0926 \u0930\u0916\u0928\u0947 \u0932\u093E\u092F\u0915 \u092A\u0932 \u092A\u0939\u0932\u0947 \u0938\u0947 \u0938\u0947\u0935 \u0939\u094B?',
    },
    // Solutions
    solutions: {
      soundtrack: {
        feeling: '\u0906\u092A\u0915\u093E \u0938\u093E\u0909\u0902\u0921\u091F\u094D\u0930\u0948\u0915',
        headline: '\u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940 \u0915\u093E \u092C\u0948\u0915\u0917\u094D\u0930\u093E\u0909\u0902\u0921 \u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915\u0964',
        body: '\u0913\u092A\u0928-\u0908\u092F\u0930 \u0911\u0921\u093F\u092F\u094B \u0906\u092A\u0915\u093E \u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u092C\u091C\u093E\u0924\u093E \u0939\u0948 \u091C\u092C\u0915\u093F \u0906\u092A \u0926\u0941\u0928\u093F\u092F\u093E \u0938\u0941\u0928\u0924\u0947 \u0939\u0948\u0902\u0964 \u0938\u092B\u093C\u0930, \u0926\u094C\u0921\u093C, \u0936\u093E\u092E \u0915\u0940 \u0938\u0948\u0930 \u2014 \u0938\u092C\u0915\u093E \u0905\u092A\u0928\u093E \u0938\u094D\u0915\u094B\u0930\u0964 \u0915\u092D\u0940 \u0905\u0915\u0947\u0932\u0947 \u0928\u0939\u0940\u0902\u0964 \u0939\u092E\u0947\u0936\u093E \u092E\u094C\u091C\u0942\u0926\u0964',
        details: ['\u0913\u092A\u0928-\u0908\u092F\u0930 \u0911\u0921\u093F\u092F\u094B', '\u0905\u0938\u0932\u0940 \u0926\u0941\u0928\u093F\u092F\u093E \u0938\u0941\u0928\u0947\u0902', '\u092A\u0942\u0930\u0947 \u0926\u093F\u0928 \u0915\u0940 \u092C\u0948\u091F\u0930\u0940'],
      },
      concert: {
        feeling: '\u0936\u0947\u092F\u0930\u094D\u0921 \u0932\u093F\u0938\u0928\u093F\u0902\u0917',
        headline: '\u0915\u0939\u0940\u0902 \u092D\u0940 \u0915\u0949\u0928\u094D\u0938\u0930\u094D\u091F \u092C\u0928\u093E \u0926\u094B\u0964',
        body: 'Aurelon \u0910\u092A \u0938\u0947 \u0926\u094B\u0938\u094D\u0924\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u0938\u093F\u0902\u0915 \u0915\u0930\u094B\u0964 \u090F\u0915 \u0939\u0940 \u091F\u094D\u0930\u0948\u0915, \u090F\u0915 \u0939\u0940 \u092A\u0932, \u092C\u093F\u0928\u093E \u0939\u0947\u0921\u092B\u093C\u094B\u0928\u0964 \u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u0915\u0947 \u090A\u092A\u0930 \u092C\u093E\u0924 \u0915\u0930\u094B\u0964 \u092A\u093E\u0930\u094D\u0915, \u091B\u0924, \u091F\u094D\u0930\u0947\u0928 \u2014 \u0924\u0941\u092E\u094D\u0939\u093E\u0930\u093E \u0935\u0947\u0928\u094D\u092F\u0942\u0964',
        details: ['\u0910\u092A \u0938\u0947 \u0938\u093F\u0902\u0915', '\u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u092A\u0930 \u092C\u093E\u0924', '\u0915\u093F\u0924\u0928\u0947 \u092D\u0940 \u0926\u094B\u0938\u094D\u0924'],
      },
      witness: {
        feeling: '\u0906\u092A\u0915\u093E \u0917\u0935\u093E\u0939',
        headline: '\u0926\u0947\u0916\u094B\u0964 \u0938\u0947\u0935 \u0915\u0930\u094B\u0964',
        body: '\u0930\u094B\u0921 \u0907\u0902\u0938\u093F\u0921\u0947\u0902\u091F, \u092A\u0941\u0932\u093F\u0938 \u090F\u0928\u0915\u093E\u0909\u0902\u091F\u0930, \u092F\u093E \u092C\u0938 \u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940 \u0915\u0947 \u0916\u0942\u092C\u0938\u0942\u0930\u0924 \u092A\u0932 \u2014 \u090F\u0915 \u091F\u0948\u092A \u092E\u0947\u0902 \u092B\u093C\u094B\u091F\u094B\u0964 1\u20132 \u092E\u093F\u0928\u091F \u0915\u0940 \u0915\u094D\u0932\u093F\u092A \u092C\u093F\u0928\u093E \u092B\u093C\u094B\u0928 \u0928\u093F\u0915\u093E\u0932\u0947\u0964 \u0906\u092A\u0915\u093E \u091A\u0936\u094D\u092E\u093E \u092F\u093E\u0926 \u0930\u0916\u0924\u093E \u0939\u0948 \u091C\u094B \u0906\u092A\u0928\u0947 \u0926\u0947\u0916\u093E\u0964',
        details: ['\u090F\u0915-\u091F\u0948\u092A \u0915\u0948\u092A\u094D\u091A\u0930', '1\u20132 \u092E\u093F\u0928\u091F \u0930\u093F\u0915\u0949\u0930\u094D\u0921\u093F\u0902\u0917', '\u0939\u0948\u0902\u0921\u094D\u0938-\u092B\u094D\u0930\u0940 \u090F\u0935\u093F\u0921\u0947\u0902\u0938'],
      },
    },
    // Marquee
    marquee: {
      items: ['\u0913\u092A\u0928-\u0908\u092F\u0930 \u0911\u0921\u093F\u092F\u094B', '\u0936\u0947\u092F\u0930\u094D\u0921 \u0932\u093F\u0938\u0928\u093F\u0902\u0917', '\u0935\u0928-\u091F\u0948\u092A \u0915\u0948\u092A\u094D\u091A\u0930', '1\u20132 \u092E\u093F\u0928\u091F \u0930\u093F\u0915\u0949\u0930\u094D\u0921\u093F\u0902\u0917', '\u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u0938\u093F\u0902\u0915', '\u0911\u0932-\u0921\u0947 \u092C\u0948\u091F\u0930\u0940', '\u092A\u094D\u0930\u093E\u0907\u0935\u0947\u0938\u0940-\u092B\u093C\u0930\u094D\u0938\u094D\u091F', '\u092A\u094D\u0930\u093F\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u0936\u0928-\u0930\u0947\u0921\u0940', 'USB-C \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917', '\u092C\u094D\u0932\u0942\u091F\u0942\u0925 5.3'],
    },
    // SocialProof
    socialProof: {
      stats: {
        customers: { value: '2,500+', label: '\u0916\u0941\u0936 \u0915\u0938\u094D\u091F\u092E\u0930\u094D\u0938' },
        rating: { value: '4.9', label: '\u0914\u0938\u0924 \u0930\u0947\u091F\u093F\u0902\u0917' },
        recommend: { value: '98%', label: '\u0930\u093F\u0915\u092E\u0947\u0902\u0921 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902' },
      },
      quotes: [
        { text: '\u092E\u0947\u0930\u0940 \u0938\u0941\u092C\u0939 \u0915\u0940 \u0938\u0948\u0930 \u0905\u092C \u0938\u093F\u0928\u0947\u092E\u0948\u091F\u093F\u0915 \u0932\u0917\u0924\u0940 \u0939\u0948\u0964 \u0935\u0939\u0940 \u0930\u093E\u0938\u094D\u0924\u093E, \u092C\u093F\u0932\u094D\u0915\u0941\u0932 \u0905\u0932\u0917 \u0905\u0928\u0941\u092D\u0935\u0964', author: '\u092E\u0940\u0930\u093E \u0915\u0947.' },
        { text: '\u091B\u0924 \u092A\u0930 \u0921\u093F\u0928\u0930 \u092E\u0947\u0902 \u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915 \u0938\u093F\u0902\u0915 \u0915\u093F\u092F\u093E\u0964 \u092A\u093E\u0901\u091A \u0926\u094B\u0938\u094D\u0924, \u090F\u0915 \u0938\u093E\u0909\u0902\u0921\u091F\u094D\u0930\u0948\u0915, \u091C\u093C\u0940\u0930\u094B \u0939\u0947\u0921\u092B\u093C\u094B\u0928\u0964', author: '\u0935\u093F\u0915\u094D\u0930\u092E \u092C\u0940.' },
        { text: '\u0939\u093F\u091F-\u090F\u0902\u0921-\u0930\u0928 \u0915\u0948\u092E\u0930\u0947 \u092A\u0930 \u0915\u0948\u091A \u0915\u093F\u092F\u093E\u0964 \u092B\u093C\u0941\u091F\u0947\u091C \u0939\u0940 \u090F\u0915\u092E\u093E\u0924\u094D\u0930 \u0938\u092C\u0942\u0924 \u0925\u093E\u0964', author: '\u0905\u0928\u0928\u094D\u092F\u093E \u090F\u0932.' },
      ],
    },
    // ProductBuy
    productBuy: {
      sectionLabel: '\u0916\u0930\u0940\u0926\u0947\u0902',
      sectionHeadline: '\u0907\u0938\u0947 \u0905\u092A\u0928\u093E \u092C\u0928\u093E\u090F\u0902\u0964',
      name: 'Aurelon',
      subtitle: '\u092E\u094D\u092F\u0942\u091C\u093C\u093F\u0915\u0964 \u092F\u093E\u0926\u0947\u0902\u0964 \u0939\u092E\u0947\u0936\u093E \u0911\u0928\u0964',
      price: '\u20B97,999',
      emi: 'EMI \u20B92,667/\u092E\u093E\u0939 \u0938\u0947',
      badge: '\u0905\u092D\u0940 \u0936\u093F\u092A\u093F\u0902\u0917',
      addToCart: '\u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u0921\u093E\u0932\u0947\u0902',
      buyNow: '\u0905\u092D\u0940 \u0916\u0930\u0940\u0926\u0947\u0902',
      color: '\u0930\u0902\u0917',
      quantity: '\u092E\u093E\u0924\u094D\u0930\u093E',
      trustBadges: {
        shipping: '\u092B\u094D\u0930\u0940 \u0936\u093F\u092A\u093F\u0902\u0917',
        returns: '30 \u0926\u093F\u0928 \u0930\u093F\u091F\u0930\u094D\u0928',
        warranty: '1 \u0938\u093E\u0932 \u0935\u093E\u0930\u0902\u091F\u0940',
      },
      delivery: '\u0936\u093F\u092A\u093F\u0902\u0917',
      deliveryTime: '3\u20135 \u0915\u093E\u0930\u094D\u092F \u0926\u093F\u0935\u0938',
      deliverySub: '\u092D\u093E\u0930\u0924 \u092D\u0930 \u092E\u0947\u0902 \u092B\u094D\u0930\u0940 \u0936\u093F\u092A\u093F\u0902\u0917',
      stock: '\u0938\u093F\u0930\u094D\u092B\u093C 12 \u092C\u091A\u0947 \u0939\u0948\u0902!',
      bestseller: '\u092C\u0947\u0938\u094D\u091F\u0938\u0947\u0932\u0930',
      inStock: '\u0938\u094D\u091F\u0949\u0915 \u092E\u0947\u0902',
      reviews: '4.9 (2,500+ \u0930\u093F\u0935\u094D\u092F\u0942\u091C\u093C)',
      sold: '2,500+ \u092C\u093F\u0915\u0947',
      watchVideo: '\u0935\u0940\u0921\u093F\u092F\u094B \u0926\u0947\u0916\u0947\u0902',
    },
    // Footer
    footer: {
      tagline: '\u0906\u092A\u0915\u0940 \u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940\u0964 \u0905\u092D\u0940 \u091A\u0932 \u0930\u0939\u093E \u0939\u0948\u0964',
      headline: '\u091C\u0941\u0921\u093C\u0947 \u0930\u0939\u0947\u0902',
      sub: '\u0939\u091C\u093C\u093E\u0930\u094B\u0902 \u0932\u094B\u0917\u094B\u0902 \u0938\u0947 \u091C\u0941\u0921\u093C\u0947\u0902 \u091C\u093F\u0928\u094D\u0939\u094B\u0902\u0928\u0947 \u0905\u092A\u0928\u0940 \u091C\u093C\u093F\u0928\u094D\u0926\u0917\u0940 \u092E\u0947\u0902 \u0938\u093E\u0909\u0902\u0921\u091F\u094D\u0930\u0948\u0915 \u091C\u094B\u0921\u093C \u0926\u093F\u092F\u093E\u0964',
      placeholder: '\u0906\u092A\u0915\u093E \u0908\u092E\u0947\u0932 \u092A\u0924\u093E',
      subscribe: '\u0938\u092C\u094D\u0938\u0915\u094D\u0930\u093E\u0907\u092C',
      successTitle: '\u0906\u092A \u0936\u093E\u092E\u093F\u0932 \u0939\u094B \u0917\u090F!',
      successMessage: '\u0939\u092E \u0906\u092A\u0915\u094B \u091C\u0932\u094D\u0926 \u0921\u093F\u091F\u0947\u0932\u094D\u0938 \u092D\u0947\u091C\u0947\u0902\u0917\u0947\u0964',
      noSpam: '\u0915\u094B\u0908 \u0938\u094D\u092A\u0948\u092E \u0928\u0939\u0940\u0902\u0964 \u0915\u092D\u0940 \u092D\u0940 \u0905\u0928\u0938\u092C\u094D\u0938\u0915\u094D\u0930\u093E\u0907\u092C \u0915\u0930\u0947\u0902\u0964',
      links: ['Aurelon', '\u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E', '\u0938\u092A\u094B\u0930\u094D\u091F', '\u0938\u0902\u092A\u0930\u094D\u0915'],
      social: ['Instagram', 'LinkedIn', 'Twitter'],
      legal: '\u0915\u093E\u0928\u0942\u0928\u0940',
      privacy: '\u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E',
      designedIn: '\u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u0921\u093F\u091C\u093C\u093E\u0907\u0928',
      backToTop: '\u090A\u092A\u0930 \u091C\u093E\u090F\u0902',
      copyright: '\u00A9 2026 Aurelon',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
