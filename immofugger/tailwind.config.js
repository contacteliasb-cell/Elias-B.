/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sehr dunkles Blauschwarz als Grundton („Kontor bei Nacht")
        night: {
          DEFAULT: '#0A0E14',
          soft: '#0D121B',
          card: '#11161F',
          raised: '#161D29',
          line: '#232C3B',
        },
        // Renaissance-Gold für CTAs, Linien, Zahlen
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C567',
          pale: '#F0DFA8',
          deep: '#9A7B1A',
        },
        // Gedämpftes Bordeaux (Fugger-Lilie / Siegel) – sparsam
        bordeaux: {
          DEFAULT: '#6E2B35',
          light: '#8C3A46',
        },
        // Warmes Off-White & gedecktes Grau für Text
        parchment: {
          DEFAULT: '#F2EEE3',
          dim: '#C7C2B4',
        },
        slateink: '#96A0B0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 24px rgba(201, 162, 39, 0.35)',
        'gold-glow-lg': '0 0 48px rgba(201, 162, 39, 0.45)',
        card: '0 8px 30px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E3C567 50%, #C9A227 100%)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
