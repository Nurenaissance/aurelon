/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        aurele: {
          cream: '#FAF8F5',
          warm: '#F5F2ED',
          noir: '#1A1814',
          charcoal: '#2D2926',
          gold: '#C9A961',
          'gold-light': '#E5D4A8',
          'gold-dark': '#9E8347',
        },
        // Text hierarchy
        foreground: '#1A1814',
        secondary: '#4A4540',
        muted: '#8A857D',
        faint: '#D4CFC6',
        // Semantic
        success: '#6B8E6B',
        warning: '#D4A76A',
        error: '#B87070',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 24, 20, 0.04)',
        'card': '0 0 0 1px rgba(26, 24, 20, 0.03), 0 2px 4px rgba(26, 24, 20, 0.04), 0 8px 16px rgba(26, 24, 20, 0.06)',
        'elevated': '0 0 0 1px rgba(26, 24, 20, 0.02), 0 4px 8px rgba(26, 24, 20, 0.04), 0 16px 32px rgba(26, 24, 20, 0.08), 0 32px 64px rgba(26, 24, 20, 0.06)',
        'glow': '0 0 40px rgba(201, 169, 97, 0.15)',
        'glow-lg': '0 0 60px rgba(201, 169, 97, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(201, 169, 97, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A961 0%, #E5D4A8 50%, #C9A961 100%)',
        'gradient-noir': 'linear-gradient(180deg, #1A1814 0%, #2D2926 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 97, 0.1) 50%, transparent 100%)',
      },
      borderRadius: {
        'card': '8px',
        'large': '24px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
