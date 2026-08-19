/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meridian: {
          navy: {
            DEFAULT: '#0B132A',
            50: '#F0F4FA',
            100: '#D9E3F3',
            200: '#B3C7E7',
            800: '#0F1A38',
            900: '#0B132A',
            950: '#060B1A',
          },
          gold: {
            DEFAULT: '#C5A059',
            light: '#E5C989',
            dark: '#9A7730',
            50: '#FBF8EF',
            100: '#F5EDD5',
            500: '#C5A059',
            600: '#B38B42',
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 19, 42, 0.15)',
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.35)',
        'card-hover': '0 20px 30px -10px rgba(11, 19, 42, 0.12)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
