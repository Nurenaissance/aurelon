# Design System - Aurelon

> Premium AI Eyewear | Intelligence You Wear

## Direction

**Personality**: French-inspired luxury aesthetic. Sophisticated, effortlessly elegant, quietly confident. Premium tech meets timeless design. Think Cartier meets Apple—but for the Indian premium market.

**Target Market**: India (English + Hindi). French luxury *style*, not French language.

**Foundation**: Warm luxury palette with cream, champagne gold, and deep noir. Approachable yet premium.

**Depth**: Layered shadows for premium, tactile feel. Surfaces feel elevated and precious.

**Accent**: Champagne Gold (#C9A961) — timeless luxury, warmth, premium.

**Mode**: Light mode primary with warm cream backgrounds. Dark sections for contrast and drama.

---

## D2C Media Strategy (CRITICAL)

Modern D2C premium brands are **media-first**. The site must feel like a magazine editorial, not a landing page.

### Hero Section
- **Full-screen hero video** (autoplay, muted, loop) showing product in lifestyle context
- OR: Cinematic product photography with parallax
- Text overlay with strong headline
- Reference: Warby Parker, Gentle Monster, Ray-Ban Stories

### Product Imagery Requirements
1. **Hero shots**: Clean studio photography, white/cream background
2. **Lifestyle shots**: Models wearing glasses in aspirational settings
3. **Detail shots**: Close-ups of hinges, lenses, materials, craftsmanship
4. **360° view**: Interactive product rotation
5. **Scale shots**: Product next to common objects for size reference

### Video Content (Essential)
1. **Hero video** (15-30s): Lifestyle montage, no dialogue
2. **Product demo** (60-90s): Features walkthrough
3. **How it works** (2-3 min): Setup and pairing guide
4. **Testimonials**: Real customer video reviews
5. **Behind the scenes**: Craftsmanship, design process

### Image Specs
- Hero: 1920x1080 minimum, WebP format
- Product: 1200x1200 square for consistency
- Lifestyle: 16:9 aspect ratio
- All images: Optimized for web (<200KB), lazy loaded

---

## Tokens

### Colors
```css
/* Backgrounds */
--bg-cream: #FAF8F5;
--bg-warm: #F5F2ED;
--bg-noir: #1A1814;
--bg-charcoal: #2D2926;

/* Text */
--foreground: #1A1814;
--secondary: #4A4540;
--muted: #8A857D;
--faint: #D4CFC6;

/* Accent */
--accent: #C9A961;
--accent-light: #E5D4A8;
--accent-dark: #9E8347;

/* Semantic */
--success: #6B8E6B;
--warning: #D4A76A;
--error: #B87070;
```

### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Typography
**Display Font**: 'Playfair Display', serif — elegant, editorial, luxurious
**Body Font**: 'DM Sans', sans-serif — clean, modern, readable
**Scale**: 12, 14, 16 (base), 18, 20, 24, 32, 40, 48, 56, 72

**Headline Style**: Playfair Display, 500 weight, tight tracking (-0.02em)
**Body Style**: DM Sans, 400-500 weight
**Label Style**: DM Sans, 500 weight, slight positive tracking for uppercase

### Border Radius
Scale: 0px (sharp), 4px, 8px, 12px, 24px, 9999px (pill)
Primary: 8px for cards, 24px for large containers, pill for buttons

### Shadows
```css
/* Subtle elevation */
--shadow-sm: 0 1px 2px rgba(26, 24, 20, 0.04);

/* Card elevation */
--shadow-md:
  0 0 0 1px rgba(26, 24, 20, 0.03),
  0 2px 4px rgba(26, 24, 20, 0.04),
  0 8px 16px rgba(26, 24, 20, 0.06);

/* Premium elevation */
--shadow-lg:
  0 0 0 1px rgba(26, 24, 20, 0.02),
  0 4px 8px rgba(26, 24, 20, 0.04),
  0 16px 32px rgba(26, 24, 20, 0.08),
  0 32px 64px rgba(26, 24, 20, 0.06);

/* Gold glow */
--shadow-glow: 0 0 40px rgba(201, 169, 97, 0.15);
```

---

## D2C Section Patterns

### Hero (Full-Screen Video/Image)
```
┌─────────────────────────────────────────┐
│  [VIDEO/IMAGE - Full viewport height]   │
│                                         │
│     HEADLINE (Playfair, large)          │
│     Subhead (DM Sans, muted)            │
│                                         │
│     [CTA Button]  [Secondary Link]      │
│                                         │
│         ↓ Scroll indicator              │
└─────────────────────────────────────────┘
```

### Product Showcase (Split Layout)
```
┌──────────────────┬──────────────────────┐
│                  │                      │
│  [PRODUCT        │   Product Name       │
│   IMAGE/VIDEO    │   ₹XX,XXX            │
│   with zoom]     │                      │
│                  │   • Feature 1        │
│  [Thumbnails]    │   • Feature 2        │
│                  │   • Feature 3        │
│                  │                      │
│                  │   [Add to Cart]      │
└──────────────────┴──────────────────────┘
```

### Lifestyle Gallery (Masonry/Grid)
```
┌────────┬────────┬────────┐
│ [img]  │ [img]  │ [img]  │
│ tall   │ square │ wide   │
├────────┼────────┼────────┤
│ [img]  │ [video]│ [img]  │
└────────┴────────┴────────┘
```

### Testimonials (Video-First)
```
┌─────────────────────────────────────────┐
│  "Quote from customer..."               │
│                                         │
│  ┌─────────┐  Name                      │
│  │ [VIDEO] │  Location                  │
│  │  ▶ Play │  ★★★★★                     │
│  └─────────┘                            │
└─────────────────────────────────────────┘
```

---

## Component Patterns

### Cards
- Background: white or --bg-cream
- Border: 1px solid --faint (subtle)
- Radius: 8px standard, 24px for hero cards
- Shadow: --shadow-md
- Hover: --shadow-lg with subtle transform

### Buttons
**Primary**:
- Background: --accent (champagne gold)
- Text: --bg-noir
- Radius: pill (9999px)
- Padding: 16px 32px
- Hover: darken + shadow-glow

**Secondary**:
- Background: transparent
- Border: 1px solid --foreground
- Text: --foreground
- Radius: pill
- Hover: background --foreground, text white

### Section Layout
- Max-width: 1280px (content), full-bleed for images/video
- Padding: 96px vertical (desktop), 64px (mobile)
- Content spacing: 64px between major sections

### Navigation
- Fixed top, transparent initially
- Background: --bg-cream/80 with backdrop-blur on scroll
- Height: 80px
- Logo left, links center (desktop), CTA right

---

## Language & Localization

**Primary**: English (India)
**Secondary**: Hindi

**Bilingual Strategy**:
- Headlines: English only (brand voice)
- Body/descriptions: Toggle English/Hindi
- CTAs: English with Hindi alternative
- Legal/support: Both languages

**Pricing**: Always in ₹ (INR), no Euro/USD

**Tone Adaptation**:
- English: Sophisticated, minimal, confident
- Hindi: Warm, respectful, aspirational (formal आप, not तू/तुम)

---

## Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Warm cream over pure white | Creates luxury, approachable feel vs clinical | Jan 2025 |
| Playfair Display for headlines | Editorial elegance, timeless | Jan 2025 |
| Champagne gold accent | Timeless luxury, warmth, premium positioning | Jan 2025 |
| Light mode primary | Better for D2C shopping, product showcase | Jan 2025 |
| Pill-shaped buttons | Soft, premium, distinctive | Jan 2025 |
| English + Hindi | Indian market, not French demographic | Jan 2025 |
| Video-first hero | Modern D2C standard, higher engagement | Jan 2025 |
| INR pricing | Target market is India | Jan 2025 |

---

## Voice & Tone

**Brand Voice**: Confident but not arrogant. Sophisticated but approachable. Intelligent but not technical. Premium without pretension.

**Headlines**: Short, evocative, editorial (English)
**Body**: Clear, warm, conversational
**CTAs**: Inviting, not pushy

**Examples**:
- "See the world differently" (not "L'intelligence portée")
- "Crafted for you" (not "Fait pour vous")
- "Starting at ₹74,990" (not "€890")
