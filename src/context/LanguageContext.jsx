import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Translations object
export const translations = {
  en: {
    // Navbar
    nav: {
      solutions: 'Solutions',
      shop: 'Shop',
      discover: 'Pre-Order',
      discoverCollection: 'Pre-Order Now',
      tagline: 'Less phone. More presence.',
    },
    // HeroNew
    heroNew: {
      headline: 'Less phone. More presence.',
      sub: 'Everyday glasses, quietly upgraded.',
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
      text: 'What if your glasses just\u2026 helped? No learning curve. No second screen. Just a quiet layer of technology that keeps you connected to what matters.',
    },
    // Solutions
    solutions: {
      safer: {
        feeling: 'Feel Safer',
        headline: 'You hear the world.',
        body: 'Open-ear audio keeps you aware. Privacy-first. No isolation.',
        details: ['Open-ear audio', 'Privacy-first design', 'No audio isolation'],
      },
      connected: {
        feeling: 'Stay Connected',
        headline: 'Without pulling your phone out.',
        body: 'Calls, notifications, music — all accessible through your glasses.',
        details: ['Hands-free calls', 'Smart notifications', 'Music & podcasts'],
      },
      play: {
        feeling: 'Technology as Play',
        headline: 'Music together. Moments captured.',
        body: 'Shared listening, one-tap capture. Fun, not complicated.',
        details: ['Shared listening', 'One-tap capture', 'Fun, not complex'],
      },
    },
    // Marquee
    marquee: {
      items: ['Open-Ear Audio', 'Hands-Free Calls', 'Shared Listening', 'All-Day Battery', 'One-Tap Capture', 'Privacy-First', 'Prescription-Ready', 'USB-C Charging', 'Bluetooth 5.3'],
    },
    // SocialProof
    socialProof: {
      stats: {
        customers: { value: '2,500+', label: 'Happy Customers' },
        rating: { value: '4.9', label: 'Average Rating' },
        recommend: { value: '98%', label: 'Recommend' },
      },
      quotes: [
        { text: 'The call quality surprised me. I take investor calls on these now.', author: 'Meera K.' },
        { text: 'My colleagues had no idea for weeks. They just look like normal glasses.', author: 'Ananya L.' },
        { text: 'Shared listening on flights — it\'s become our favourite travel thing.', author: 'Vikram B.' },
      ],
    },
    // ProductBuy
    productBuy: {
      sectionLabel: 'Shop',
      sectionHeadline: 'Make it yours.',
      name: 'Aurelon',
      subtitle: 'Smart Glasses for Everyday Life',
      price: '₹7,999',
      emi: 'EMI from ₹2,667/month',
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
      deliveryTime: '3-5 business days',
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
      tagline: 'Less phone. More presence.',
      headline: 'Stay in the loop',
      sub: 'Join thousands who\'ve quietly upgraded their everyday glasses.',
      placeholder: 'Your email address',
      subscribe: 'Subscribe',
      successTitle: 'You\'re in!',
      successMessage: 'We\'ll send you the details shortly.',
      noSpam: 'No spam. Unsubscribe anytime.',
      links: ['Aurelon', 'Privacy', 'Support', 'Contact'],
      social: ['Instagram', 'LinkedIn', 'Twitter'],
      legal: 'Legal',
      privacy: 'Privacy',
      designedIn: 'Designed in India',
      backToTop: 'Back to top',
      copyright: '© 2026 Aurelon',
    },
  },
  hi: {
    // Navbar
    nav: {
      solutions: 'समाधान',
      shop: 'खरीदें',
      discover: 'प्री-ऑर्डर',
      discoverCollection: 'अभी प्री-ऑर्डर करें',
      tagline: 'कम फ़ोन। ज़्यादा मौजूदगी।',
    },
    // HeroNew
    heroNew: {
      headline: 'कम फ़ोन। ज़्यादा मौजूदगी।',
      sub: 'रोज़ का चश्मा, चुपचाप अपग्रेडेड।',
      cta: 'एक्सप्लोर करें',
      scrollLabel: 'एक्सप्लोर करने के लिए स्क्रॉल करें',
      badge: 'अब भारत में शिपिंग',
      trustBadges: {
        rating: '4.9 (2,500+ रिव्यूज़)',
        shipping: 'फ्री शिपिंग',
        warranty: '1 साल वारंटी',
      },
    },
    // Brand Statement
    brandStatement: {
      text: 'क्या हो अगर आपका चश्मा बस\u2026 मदद करे? कोई सीखने की ज़रूरत नहीं। कोई दूसरी स्क्रीन नहीं। बस टेक्नोलॉजी की एक शांत परत जो आपको उससे जोड़े रखे जो मायने रखता है।',
    },
    // Solutions
    solutions: {
      safer: {
        feeling: 'सुरक्षित महसूस करें',
        headline: 'आप दुनिया सुनते हैं।',
        body: 'ओपन-ईयर ऑडियो आपको जागरूक रखता है। प्राइवेसी-फ़र्स्ट। कोई आइसोलेशन नहीं।',
        details: ['ओपन-ईयर ऑडियो', 'प्राइवेसी-फ़र्स्ट डिज़ाइन', 'कोई ऑडियो आइसोलेशन नहीं'],
      },
      connected: {
        feeling: 'जुड़े रहें',
        headline: 'बिना फ़ोन निकाले।',
        body: 'कॉल, नोटिफ़िकेशन, म्यूज़िक — सब आपके चश्मे से।',
        details: ['हैंड्स-फ्री कॉल', 'स्मार्ट नोटिफ़िकेशन', 'म्यूज़िक और पॉडकास्ट'],
      },
      play: {
        feeling: 'टेक्नोलॉजी = मज़ा',
        headline: 'साथ म्यूज़िक। पल कैप्चर।',
        body: 'शेयर्ड लिसनिंग, एक-टैप कैप्चर। मज़ेदार, जटिल नहीं।',
        details: ['शेयर्ड लिसनिंग', 'एक-टैप कैप्चर', 'मज़ेदार, जटिल नहीं'],
      },
    },
    // Marquee
    marquee: {
      items: ['ओपन-ईयर ऑडियो', 'हैंड्स-फ्री कॉल', 'शेयर्ड लिसनिंग', 'ऑल-डे बैटरी', 'वन-टैप कैप्चर', 'प्राइवेसी-फ़र्स्ट', 'प्रिस्क्रिप्शन-रेडी', 'USB-C चार्जिंग', 'ब्लूटूथ 5.3'],
    },
    // SocialProof
    socialProof: {
      stats: {
        customers: { value: '2,500+', label: 'खुश कस्टमर्स' },
        rating: { value: '4.9', label: 'औसत रेटिंग' },
        recommend: { value: '98%', label: 'रिकमेंड करते हैं' },
      },
      quotes: [
        { text: 'कॉल क्वालिटी ने सरप्राइज़ किया। अब इन्वेस्टर कॉल्स इन पर लेता हूं।', author: 'मीरा के.' },
        { text: 'कलीग्स को हफ़्तों तक पता नहीं चला। बिल्कुल नॉर्मल चश्मे जैसे दिखते हैं।', author: 'अनन्या एल.' },
        { text: 'फ़्लाइट पर शेयर्ड लिसनिंग — हमारी फ़ेवरेट ट्रैवल चीज़ बन गई।', author: 'विक्रम बी.' },
      ],
    },
    // ProductBuy
    productBuy: {
      sectionLabel: 'खरीदें',
      sectionHeadline: 'इसे अपना बनाएं।',
      name: 'Aurelon',
      subtitle: 'रोज़मर्रा की ज़िंदगी के लिए स्मार्ट ग्लासेस',
      price: '₹7,999',
      emi: 'EMI ₹2,667/माह से',
      badge: 'अभी शिपिंग',
      addToCart: 'कार्ट में डालें',
      buyNow: 'अभी खरीदें',
      color: 'रंग',
      quantity: 'मात्रा',
      trustBadges: {
        shipping: 'फ्री शिपिंग',
        returns: '30 दिन रिटर्न',
        warranty: '1 साल वारंटी',
      },
      delivery: 'शिपिंग',
      deliveryTime: '3-5 कार्य दिवस',
      deliverySub: 'भारत भर में फ्री शिपिंग',
      stock: 'सिर्फ़ 12 बचे हैं!',
      bestseller: 'बेस्टसेलर',
      inStock: 'स्टॉक में',
      reviews: '4.9 (2,500+ रिव्यूज़)',
      sold: '2,500+ बिके',
      watchVideo: 'वीडियो देखें',
    },
    // Footer
    footer: {
      tagline: 'कम फ़ोन। ज़्यादा मौजूदगी।',
      headline: 'जुड़े रहें',
      sub: 'हज़ारों लोगों से जुड़ें जिन्होंने चुपचाप अपना चश्मा अपग्रेड कर लिया।',
      placeholder: 'आपका ईमेल पता',
      subscribe: 'सब्सक्राइब',
      successTitle: 'आप शामिल हो गए!',
      successMessage: 'हम आपको जल्द डिटेल्स भेजेंगे।',
      noSpam: 'कोई स्पैम नहीं। कभी भी अनसब्सक्राइब करें।',
      links: ['Aurelon', 'गोपनीयता', 'सपोर्ट', 'संपर्क'],
      social: ['Instagram', 'LinkedIn', 'Twitter'],
      legal: 'कानूनी',
      privacy: 'गोपनीयता',
      designedIn: 'भारत में डिज़ाइन',
      backToTop: 'ऊपर जाएं',
      copyright: '© 2026 Aurelon',
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
