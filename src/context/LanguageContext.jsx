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
      subheading: '8MP HD camera smart glasses with AI translation, ChatGPT voice assistant, 1080P video recording, and 10-hour battery life.',
      cta: 'Discover Collection',
      experience: 'Watch Experience',
      scroll: 'Scroll',
      stats: {
        languages: 'Languages',
        hours: 'Hours',
        grams: 'Grams',
      },
      productName: 'Aurelon One',
      productTag: '8MP AI Camera',
      tags: ['8MP HD Camera', 'AI Translation', 'ChatGPT Assistant', '1080P Video'],
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
          title: '8MP HD Camera',
          description: '8MP HD camera with anti-shake technology. Capture 20MP photos and 1080P video at 30fps. Gesture control for hands-free shooting.',
          highlight: '1080P Video',
        },
        {
          title: 'AI Translation',
          description: 'Real-time translation in 24+ languages powered by advanced AI. Break language barriers instantly in any conversation.',
          highlight: '24+ languages',
        },
        {
          title: 'Voice Assistant',
          description: 'ChatGPT-powered AI assistant. Ask questions, get directions, control your device — all hands-free with voice commands.',
          highlight: 'ChatGPT AI',
        },
        {
          title: 'HiFi Spatial Audio',
          description: 'Dual HiFi bass speakers with directional audio. Crystal clear calls with dual silicon microphones and noise reduction.',
          highlight: 'Dual speakers',
        },
        {
          title: '10-Hour Battery',
          description: '220mAh battery with 10 hours music playback. Quick magnetic charging in 90 minutes. 7-day standby time.',
          highlight: '10h playback',
        },
        {
          title: 'IPX5 Water Resistant',
          description: 'IPX5 splash-proof rating for all-weather use. TR90 lightweight frame with polarized UV400 lenses. Only 42g total weight.',
          highlight: 'IPX5 rated',
        },
      ],
      bottomText: 'CE, FCC & RoHS certified. Bluetooth 5.3 connectivity.',
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
      subheading: 'Premium smart glasses with advanced features. CE, FCC & RoHS certified quality.',
      differentiators: [
        {
          title: 'TR90 Lightweight Frame',
          description: 'Ultra-light TR90 frame weighing only 42g. Polarized UV400 lenses protect your eyes while looking stylish.',
          stat: '42g',
        },
        {
          title: 'Advanced AI Chip',
          description: 'Powered by JL7018F processor with ChatGPT integration. Real-time AI translation and voice assistant capabilities.',
          stat: 'ChatGPT AI',
        },
        {
          title: 'Quality Certified',
          description: 'CE, FCC & RoHS certified. 1-year warranty with dedicated customer support. Quality you can trust.',
          stat: 'Certified',
        },
        {
          title: 'All-Weather Design',
          description: 'IPX5 water resistant for rain and sweat protection. Perfect for outdoor activities, sports, and daily commute.',
          stat: 'IPX5',
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
          description: '8MP AI Camera Smart Glasses',
          features: [
            '8MP HD camera with anti-shake',
            '1080P video @ 30fps recording',
            'AI translation (24+ languages)',
            'ChatGPT voice assistant',
            'Dual HiFi speakers + noise reduction',
            '10hr battery + 90min quick charge',
            'Bluetooth 5.3 + IPX5 waterproof',
          ],
          cta: 'Order Now',
        },
        {
          name: 'Aurelon Pro',
          badge: 'Coming Soon',
          description: '20MP Pro Camera Edition',
          features: [
            'Everything in Aurelon One',
            '20MP high-resolution camera',
            '4K video recording capability',
            '16+ hours extended battery',
            'Premium titanium frame',
            '3-year warranty',
            'Priority AI processing',
          ],
          cta: 'Join Waitlist',
        },
      ],
      enterprise: {
        badge: 'Enterprise',
        headline: 'Bulk Orders',
        description: 'Special pricing for bulk orders. OEM/ODM customization available. Dedicated support for businesses.',
        cta: 'Request Quote',
        features: ['Bulk pricing', 'Custom branding', 'Dedicated support', 'Flexible terms'],
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
      subheading: '8MP HD कैमरा स्मार्ट चश्मा। AI अनुवाद, ChatGPT वॉयस असिस्टेंट, 1080P वीडियो रिकॉर्डिंग, और 10 घंटे बैटरी लाइफ।',
      cta: 'कलेक्शन देखें',
      experience: 'अनुभव देखें',
      scroll: 'स्क्रॉल करें',
      stats: {
        languages: 'भाषाएं',
        hours: 'घंटे',
        grams: 'ग्राम',
      },
      productName: 'Aurelon One',
      productTag: '8MP AI कैमरा',
      tags: ['8MP HD कैमरा', 'AI अनुवाद', 'ChatGPT असिस्टेंट', '1080P वीडियो'],
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
          title: '8MP HD कैमरा',
          description: 'एंटी-शेक तकनीक के साथ 8MP HD कैमरा। 20MP फोटो और 1080P वीडियो @ 30fps कैप्चर करें। हैंड्स-फ्री शूटिंग के लिए जेस्चर कंट्रोल।',
          highlight: '1080P वीडियो',
        },
        {
          title: 'AI अनुवाद',
          description: 'एडवांस्ड AI द्वारा 24+ भाषाओं में रियल-टाइम अनुवाद। किसी भी बातचीत में भाषा की बाधाओं को तुरंत तोड़ें।',
          highlight: '24+ भाषाएं',
        },
        {
          title: 'वॉयस असिस्टेंट',
          description: 'ChatGPT-पावर्ड AI असिस्टेंट। सवाल पूछें, दिशा-निर्देश पाएं, अपने डिवाइस को कंट्रोल करें — सब हैंड्स-फ्री वॉयस कमांड से।',
          highlight: 'ChatGPT AI',
        },
        {
          title: 'HiFi स्पेशल ऑडियो',
          description: 'डायरेक्शनल ऑडियो के साथ ड्युअल HiFi बास स्पीकर्स। नॉइज़ रिडक्शन के साथ ड्युअल सिलिकॉन माइक्रोफोन से क्रिस्टल क्लियर कॉल्स।',
          highlight: 'ड्युअल स्पीकर्स',
        },
        {
          title: '10 घंटे बैटरी',
          description: '10 घंटे म्यूज़िक प्लेबैक के साथ 220mAh बैटरी। 90 मिनट में क्विक मैग्नेटिक चार्जिंग। 7 दिन का स्टैंडबाय टाइम।',
          highlight: '10h प्लेबैक',
        },
        {
          title: 'IPX5 वाटर रेसिस्टेंट',
          description: 'सभी मौसम में उपयोग के लिए IPX5 स्प्लैश-प्रूफ रेटिंग। पोलराइज़्ड UV400 लेंस के साथ TR90 लाइटवेट फ्रेम। कुल वज़न सिर्फ 42g।',
          highlight: 'IPX5 रेटेड',
        },
      ],
      bottomText: 'CE, FCC और RoHS सर्टिफाइड। Bluetooth 5.3 कनेक्टिविटी।',
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
          description: '8MP AI कैमरा स्मार्ट ग्लासेस',
          features: [
            '8MP HD कैमरा एंटी-शेक के साथ',
            '1080P वीडियो @ 30fps रिकॉर्डिंग',
            'AI अनुवाद (24+ भाषाएं)',
            'ChatGPT वॉयस असिस्टेंट',
            'ड्युअल HiFi स्पीकर्स + नॉइज़ रिडक्शन',
            '10hr बैटरी + 90min क्विक चार्ज',
            'Bluetooth 5.3 + IPX5 वाटरप्रूफ',
          ],
          cta: 'अभी ऑर्डर करें',
        },
        {
          name: 'Aurelon Pro',
          badge: 'जल्द आ रहा है',
          description: '20MP प्रो कैमरा एडिशन',
          features: [
            'Aurelon One की सभी सुविधाएं',
            '20MP हाई-रेज़ोल्यूशन कैमरा',
            '4K वीडियो रिकॉर्डिंग क्षमता',
            '16+ घंटे एक्सटेंडेड बैटरी',
            'प्रीमियम टाइटेनियम फ्रेम',
            '3 साल वारंटी',
            'प्रायोरिटी AI प्रोसेसिंग',
          ],
          cta: 'वेटलिस्ट जॉइन करें',
        },
      ],
      enterprise: {
        badge: 'एंटरप्राइज़',
        headline: 'बल्क ऑर्डर्स',
        description: 'बल्क ऑर्डर के लिए स्पेशल प्राइसिंग। OEM/ODM कस्टमाइज़ेशन उपलब्ध। बिज़नेस के लिए डेडिकेटेड सपोर्ट।',
        cta: 'कोट मांगें',
        features: ['बल्क प्राइसिंग', 'कस्टम ब्रांडिंग', 'डेडिकेटेड सपोर्ट', 'फ्लेक्सिबल टर्म्स'],
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
