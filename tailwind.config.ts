import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: '#111314',
        gold: '#D4AF37',
        ivory: '#F6F5F2',
        mocha: '#604B3A',
        sapphire: '#2B5C9B',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      animation: {
        'shine': 'shine 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'sparkle': 'sparkle 0.15s ease-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(12deg)' },
          '100%': { transform: 'translateX(100%) rotate(12deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sparkle: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      boxShadow: {
        'inner-coal': 'inset 0 0 0 1px rgba(17, 19, 20, 0.13)',
        'glow-sapphire': '0 0 0 3px rgba(43, 92, 155, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;