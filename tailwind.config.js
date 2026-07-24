/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050505',
        bgSecondary: '#0F0F0F',
        cardBg: 'rgba(255, 255, 255, 0.05)',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        textMain: '#FFFFFF',
        textSub: '#A5A5A5',
        accentCyan: '#00E5FF',
        glowCyan: 'rgba(0, 229, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 229, 255, 0.8)' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 229, 255, 0.4)',
        'cyan-glow-lg': '0 0 50px rgba(0, 229, 255, 0.6)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
