import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Translations object
export const translations = {
  en: {
    // Navbar
    nav: {
      collection: 'Collection',
      craftsmanship: 'Craftsmanship',
      experience: 'Experience',
      studio: 'Studio',
      shop: 'Shop',
      discover: 'Discover',
      discoverCollection: 'Discover Collection',
      tagline: 'Intelligence you wear with elegance',
    },
    // Hero
    hero: {
      label: 'Premiere Collection',
      headline1: 'Intelligence,',
      headline2: 'worn with',
      headline3: 'elegance',
      subheading: 'Premium smart glasses. Discreet AI, real-time translation, voice assistant — French-inspired craftsmanship meets innovation.',
      cta: 'Discover Collection',
      experience: 'Watch Experience',
      scroll: 'Scroll',
      stats: {
        languages: 'Languages',
        hours: 'Hours',
        grams: 'Grams',
      },
      productName: 'Aurelon One',
      productTag: 'Integrated AI',
      tags: ['AI Translation', 'Voice Assistant', 'Spatial Audio', 'All-day Battery'],
      floatingAI: 'AI',
      floatingAILabel: 'Integrated',
      madeIn: 'Designed in',
      madeInCountry: 'India',
    },
    // Features
    features: {
      label: 'Features',
      headline: 'Intelligence at the service of',
      headlineAccent: 'elegance',
      subheading: 'Every feature is designed to enrich your daily life without ever compromising style.',
      items: [
        {
          title: 'Instant Translation',
          description: 'Understand and speak 24 languages in real-time. AI translates your conversations instantly, naturally.',
          highlight: '24 languages',
        },
        {
          title: 'Personal AI Assistant',
          description: 'An intelligent assistant that anticipates your needs. Ask questions, get answers — hands-free.',
          highlight: 'Adaptive intelligence',
        },
        {
          title: 'Crystal Clear Calls',
          description: 'Take your calls without lifting a finger. Advanced noise reduction for perfect clarity, even on the move.',
          highlight: 'HD Audio',
        },
        {
          title: 'Immersive Audio',
          description: 'Bone conduction speakers for rich sound while staying connected to your environment.',
          highlight: 'Spatial audio',
        },
        {
          title: 'Exceptional Battery',
          description: '12 hours of continuous use. A quick 20-minute charge gives you 4 additional hours.',
          highlight: '12h battery',
        },
        {
          title: 'Absolute Privacy',
          description: 'Fully local AI processing. Your data stays yours. Privacy LED indicator included.',
          highlight: 'On-device AI',
        },
      ],
      bottomText: 'And much more to discover in every pair.',
      bottomCta: 'View full specifications',
    },
    // Problem Solution (Philosophy)
    philosophy: {
      label: 'Our Philosophy',
      headline: 'The art of seeing',
      headlineAccent: 'differently',
      subheading: 'At Aurelon, we believe elegance and intelligence are not contradictory. We fuse them to create exceptional objects that transcend technology.',
      points: [
        {
          title: 'Vision',
          description: 'Technology should fade away to better serve. Our smart glasses disappear into your daily life to reveal your potential.',
        },
        {
          title: 'Craftsmanship',
          description: 'Each pair is assembled by hand in our studio. Traditional craftsmanship meets tomorrow\'s innovation.',
        },
        {
          title: 'Excellence',
          description: 'Premium materials, cutting-edge AI, obsessive attention to detail. Nothing is left to chance.',
        },
      ],
      quote: 'True technological elegance is the kind you don\'t notice. It accompanies you, elevates you, and remains invisible.',
      quoteAuthor: 'Founder, Aurelon',
    },
    // Use Cases
    useCases: {
      label: 'The Experience',
      headline: 'Designed for',
      headlineAccent: 'your life',
      subheading: 'Aurelon adapts to your lifestyle, not the other way around. Discover how our glasses enrich every moment.',
      experiences: [
        {
          id: 'business',
          title: 'The Professional',
          subtitle: 'Elegant productivity',
          description: 'Take calls while commuting, transcribe meetings, stay connected without reaching for your phone. Discreet efficiency for those who demand the best.',
          features: [
            'Hands-free calls on the go',
            'Instant voice transcription',
            'Translation for international meetings',
          ],
          testimonial: '"I manage client calls during my commute. My productivity has transformed."',
          author: 'Rahul D., Sales Director',
        },
        {
          id: 'travel',
          title: 'The Traveler',
          subtitle: 'Explore without borders',
          description: 'Break language barriers instantly. Navigate unfamiliar cities with discreet audio directions. Experience the world like a local.',
          features: [
            'Real-time translation in 24 languages',
            'Discreet audio navigation',
            'Contextual cultural information',
          ],
          testimonial: '"I explored Tokyo without speaking Japanese. Aurelon translated every conversation."',
          author: 'Priya M., Photographer',
        },
        {
          id: 'creative',
          title: 'The Creative',
          subtitle: 'Inspiration without interruption',
          description: 'Capture ideas on the fly, listen to music while staying connected to the world. A tool for creative minds that refuse compromise.',
          features: [
            'Voice dictation for spontaneous ideas',
            'Ambient-aware audio',
            'Voice commands for creative apps',
          ],
          testimonial: '"I dictate my ideas instantly. My notebook has become obsolete."',
          author: 'Arjun R., Designer',
        },
      ],
      activeMode: 'Active Mode',
      bottomCta: 'Discover your experience',
    },
    // How It Works
    howItWorks: {
      label: 'How it works',
      headline: 'Simple as',
      headlineAccent: 'hello',
      subheading: 'No complex setup. No learning curve. Aurelon adapts to you, not the other way around.',
      steps: [
        {
          title: 'Wear',
          description: 'Put on your Aurelon like any elegant pair of glasses. Exceptional comfort allows all-day wear.',
          detail: 'Automatic Bluetooth connection',
        },
        {
          title: 'Connect',
          description: 'The Aurelon app syncs instantly. Customize your preferences and discover all possibilities.',
          detail: 'Setup in under 2 minutes',
        },
        {
          title: 'Live',
          description: 'Intelligence fades away to let you live. Translations, calls, assistant — everything happens naturally, by voice.',
          detail: 'Response in under 500ms',
        },
      ],
      videoTitle: 'See Aurelon in action',
      videoLength: '2:30 min — Product presentation',
    },
    // Why Aurelon
    whyAurele: {
      label: 'The Studio',
      headline: 'Why choose',
      headlineAccent: 'Aurelon',
      subheading: 'Craftsmanship at the service of innovation. Every detail counts, every choice is deliberate.',
      differentiators: [
        {
          title: 'Premium Materials',
          description: 'Aerospace titanium, Italian acetate, precision optical lenses. Every component is selected for exceptional quality.',
          stat: 'Premium',
        },
        {
          title: 'Cutting-edge AI',
          description: 'Our proprietary AI is developed in-house. It learns, adapts, and improves with you.',
          stat: 'Made in India',
        },
        {
          title: 'Brand Warranty',
          description: '2 years complete warranty. Personalized customer service. Free repair or replacement for defects.',
          stat: '2 Years',
        },
        {
          title: 'Sustainable Commitment',
          description: 'Responsible production, recyclable materials, trade-in program. Excellence doesn\'t exclude environmental consciousness.',
          stat: 'Eco-friendly',
        },
      ],
      specs: {
        weight: 'Weight',
        battery: 'Battery',
        quickCharge: 'Quick charge',
        resistance: 'Resistance',
        connectivity: 'Connectivity',
        languages: 'Languages',
      },
      specsTitle: 'Technical Specifications',
      specsSubtitle: 'Excellence in every detail',
      badge: 'Designed and assembled in',
      badgeCountry: 'India',
    },
    // Pricing
    pricing: {
      label: 'Shop',
      headline: 'Choose your',
      headlineAccent: 'companion',
      subheading: 'Two collections designed for different lifestyles. One same standard of excellence.',
      plans: [
        {
          name: 'Aurelon One',
          badge: 'Signature Collection',
          description: 'The essence of intelligent elegance',
          features: [
            'Integrated artificial intelligence',
            'Real-time translation (24 languages)',
            'Personal voice assistant',
            'Immersive spatial audio',
            '12 hours battery life',
            '2-year warranty',
            'Free shipping',
          ],
          cta: 'Order Now',
        },
        {
          name: 'Aurelon Pro',
          badge: 'Coming Soon',
          description: 'For the highest standards',
          features: [
            'Everything in Aurelon One',
            'Premium high-fidelity audio',
            'Extended battery (16+ hours)',
            'Priority AI processing',
            'Exclusive materials',
            '3-year warranty',
            'Personal concierge',
          ],
          cta: 'Join Waitlist',
        },
      ],
      enterprise: {
        badge: 'Enterprise',
        headline: 'Custom Solutions',
        description: 'Equip your teams with Aurelon. Customized solutions, preferential rates, and dedicated support for organizations.',
        cta: 'Request a Demo',
        features: ['Preferential rates', 'Training included', 'Dedicated support', 'Flexible billing'],
      },
      trustBadge: '30-day money back guarantee — Free shipping in India — Pay in 3 interest-free EMIs',
    },
    // Trust / Testimonials
    trust: {
      label: 'Testimonials',
      headline: 'They chose',
      headlineAccent: 'Aurelon',
      subheading: 'Discover why our customers can\'t live without their Aurelon.',
      stats: {
        customers: 'Happy customers',
        rating: 'Average rating',
        recommend: 'Recommend',
        support: 'Customer support',
      },
      testimonials: [
        {
          quote: 'Aurelon transformed how I travel. The instant translation is stunningly natural.',
          author: 'Meera K.',
          role: 'International Consultant',
        },
        {
          quote: 'French elegance meets technology. My colleagues can\'t believe these are smart glasses.',
          author: 'Vikram B.',
          role: 'Architect',
        },
        {
          quote: 'The comfort is exceptional. I wear them all day without even thinking about it. A remarkable product.',
          author: 'Ananya L.',
          role: 'Marketing Director',
        },
      ],
      press: {
        label: 'In the press',
        mentions: [
          { name: 'Economic Times', quote: 'India\'s answer to premium smart eyewear' },
          { name: 'Tech Today', quote: 'Aurelon reinvents intelligent glasses' },
          { name: 'Vogue India', quote: 'The most elegant high-tech accessory' },
        ],
      },
    },
    // CTA
    cta: {
      label: 'Start the journey',
      headline: 'Ready to see the world',
      headlineAccent: 'differently',
      subheading: 'Join the first to discover intelligent elegance. Sign up to receive an exclusive invitation.',
      placeholder: 'Your email address',
      button: 'Get my invitation',
      submitting: 'Signing up...',
      successTitle: 'Thank you for your interest',
      successMessage: 'You\'ll receive your invitation very soon.',
      noSpam: 'No spam. Unsubscribe anytime.',
      badges: ['Money back guarantee', 'Free shipping', '2-year warranty'],
      limitedSpots: 'Limited spots for launch',
    },
    // Footer
    footer: {
      tagline: 'Intelligence you wear with elegance. Craftsmanship at the service of innovation.',
      newsletter: 'Get updates',
      subscribe: 'Subscribe',
      sections: {
        collection: 'Collection',
        brand: 'The Brand',
        support: 'Support',
      },
      links: {
        collection: ['Aurelon One', 'Aurelon Pro', 'Accessories', 'Customization'],
        brand: ['Our Story', 'The Studio', 'Commitments', 'Press'],
        support: ['Help Center', 'Warranty', 'Repairs', 'Contact'],
      },
      legal: 'Legal',
      privacy: 'Privacy',
      designedIn: 'Designed in India',
      backToTop: 'Back to top',
    },
  },
  hi: {
    // Hindi translations
    nav: {
      collection: 'कलेक्शन',
      craftsmanship: 'कारीगरी',
      experience: 'अनुभव',
      studio: 'स्टूडियो',
      shop: 'खरीदें',
      discover: 'खोजें',
      discoverCollection: 'कलेक्शन देखें',
      tagline: 'बुद्धिमत्ता जो आप पहनते हैं',
    },
    hero: {
      label: 'प्रीमियर कलेक्शन',
      headline1: 'बुद्धिमत्ता,',
      headline2: 'जो पहनी जाए',
      headline3: 'शान से',
      subheading: 'प्रीमियम स्मार्ट चश्मा। डिस्क्रीट AI, रियल-टाइम अनुवाद, वॉयस असिस्टेंट — फ्रेंच-इंस्पायर्ड कारीगरी और इनोवेशन।',
      cta: 'कलेक्शन देखें',
      experience: 'अनुभव देखें',
      scroll: 'स्क्रॉल करें',
      stats: {
        languages: 'भाषाएं',
        hours: 'घंटे',
        grams: 'ग्राम',
      },
      productName: 'Aurelon One',
      productTag: 'इंटीग्रेटेड AI',
      tags: ['AI अनुवाद', 'वॉयस असिस्टेंट', 'स्पेशल ऑडियो', 'ऑल-डे बैटरी'],
      floatingAI: 'AI',
      floatingAILabel: 'इंटीग्रेटेड',
      madeIn: 'डिज़ाइन्ड इन',
      madeInCountry: 'इंडिया',
    },
    features: {
      label: 'फीचर्स',
      headline: 'बुद्धिमत्ता जो सेवा करे',
      headlineAccent: 'शान की',
      subheading: 'हर फीचर आपकी रोज़मर्रा की ज़िंदगी को बेहतर बनाने के लिए डिज़ाइन किया गया है।',
      items: [
        {
          title: 'तुरंत अनुवाद',
          description: '24 भाषाओं को रियल-टाइम में समझें और बोलें। AI आपकी बातचीत का तुरंत अनुवाद करता है।',
          highlight: '24 भाषाएं',
        },
        {
          title: 'पर्सनल AI असिस्टेंट',
          description: 'एक बुद्धिमान असिस्टेंट जो आपकी ज़रूरतों को समझता है। सवाल पूछें, जवाब पाएं — हैंड्स-फ्री।',
          highlight: 'एडाप्टिव इंटेलिजेंस',
        },
        {
          title: 'क्रिस्टल क्लियर कॉल्स',
          description: 'बिना हाथ उठाए कॉल लें। परफेक्ट क्लैरिटी के लिए एडवांस्ड नॉइज़ रिडक्शन।',
          highlight: 'HD ऑडियो',
        },
        {
          title: 'इमर्सिव ऑडियो',
          description: 'बोन कंडक्शन स्पीकर्स से रिच साउंड और अपने आसपास से कनेक्टेड रहें।',
          highlight: 'स्पेशल ऑडियो',
        },
        {
          title: 'असाधारण बैटरी',
          description: '12 घंटे का लगातार उपयोग। 20 मिनट की क्विक चार्ज से 4 घंटे और मिलें।',
          highlight: '12h बैटरी',
        },
        {
          title: 'पूर्ण गोपनीयता',
          description: 'पूरी तरह लोकल AI प्रोसेसिंग। आपका डेटा आपका रहता है। प्राइवेसी LED इंडिकेटर।',
          highlight: 'ऑन-डिवाइस AI',
        },
      ],
      bottomText: 'और भी बहुत कुछ खोजने के लिए।',
      bottomCta: 'पूरी स्पेसिफिकेशन देखें',
    },
    pricing: {
      label: 'खरीदें',
      headline: 'अपना चुनें',
      headlineAccent: 'साथी',
      subheading: 'दो कलेक्शन अलग-अलग लाइफस्टाइल के लिए। एक ही उत्कृष्टता का मानक।',
      plans: [
        {
          name: 'Aurelon One',
          badge: 'सिग्नेचर कलेक्शन',
          description: 'इंटेलिजेंट एलिगेंस का सार',
          features: [
            'इंटीग्रेटेड आर्टिफिशियल इंटेलिजेंस',
            'रियल-टाइम अनुवाद (24 भाषाएं)',
            'पर्सनल वॉयस असिस्टेंट',
            'इमर्सिव स्पेशल ऑडियो',
            '12 घंटे बैटरी लाइफ',
            '2 साल वारंटी',
            'फ्री शिपिंग',
          ],
          cta: 'अभी ऑर्डर करें',
        },
        {
          name: 'Aurelon Pro',
          badge: 'जल्द आ रहा है',
          description: 'उच्चतम मानकों के लिए',
          features: [
            'Aurelon One की सभी सुविधाएं',
            'प्रीमियम हाई-फिडेलिटी ऑडियो',
            'एक्सटेंडेड बैटरी (16+ घंटे)',
            'प्रायोरिटी AI प्रोसेसिंग',
            'एक्सक्लूसिव मटेरियल्स',
            '3 साल वारंटी',
            'पर्सनल कॉन्सीयज',
          ],
          cta: 'वेटलिस्ट जॉइन करें',
        },
      ],
      enterprise: {
        badge: 'एंटरप्राइज़',
        headline: 'कस्टम सॉल्यूशंस',
        description: 'अपनी टीमों को Aurelon से लैस करें। कस्टमाइज़्ड सॉल्यूशंस और डेडिकेटेड सपोर्ट।',
        cta: 'डेमो का अनुरोध करें',
        features: ['प्रेफरेंशियल रेट्स', 'ट्रेनिंग शामिल', 'डेडिकेटेड सपोर्ट', 'फ्लेक्सिबल बिलिंग'],
      },
      trustBadge: '30 दिन मनी बैक गारंटी — भारत में फ्री शिपिंग — 3 आसान EMI में भुगतान करें',
    },
    cta: {
      label: 'सफर शुरू करें',
      headline: 'दुनिया को देखने के लिए तैयार',
      headlineAccent: 'अलग तरीके से',
      subheading: 'इंटेलिजेंट एलिगेंस खोजने वाले पहले लोगों में शामिल हों।',
      placeholder: 'आपका ईमेल पता',
      button: 'इनविटेशन पाएं',
      submitting: 'साइन अप हो रहा है...',
      successTitle: 'आपकी रुचि के लिए धन्यवाद',
      successMessage: 'आपको जल्द ही इनविटेशन मिलेगा।',
      noSpam: 'कोई स्पैम नहीं। कभी भी अनसब्सक्राइब करें।',
      badges: ['मनी बैक गारंटी', 'फ्री शिपिंग', '2 साल वारंटी'],
      limitedSpots: 'लॉन्च के लिए सीमित स्पॉट्स',
    },
    footer: {
      tagline: 'बुद्धिमत्ता जो आप पहनते हैं। इनोवेशन की सेवा में कारीगरी।',
      newsletter: 'अपडेट पाएं',
      subscribe: 'सब्सक्राइब',
      sections: {
        collection: 'कलेक्शन',
        brand: 'ब्रांड',
        support: 'सपोर्ट',
      },
      links: {
        collection: ['Aurelon One', 'Aurelon Pro', 'एक्सेसरीज़', 'कस्टमाइज़ेशन'],
        brand: ['हमारी कहानी', 'स्टूडियो', 'प्रतिबद्धताएं', 'प्रेस'],
        support: ['हेल्प सेंटर', 'वारंटी', 'रिपेयर्स', 'संपर्क'],
      },
      legal: 'कानूनी',
      privacy: 'गोपनीयता',
      designedIn: 'भारत में डिज़ाइन',
      backToTop: 'ऊपर जाएं',
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
