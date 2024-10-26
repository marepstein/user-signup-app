import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/ffern-friends/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      terracotta200: '#F1BEA2',
      terracotta300: '#EB9466',
      terracotta400: '#D0865D',
      terracotta500: '#B35F32',
      ash50: '#FFFFFF',
      ash100: '#FAF9F5',
      ash300: '#DCDCD6',
      ash600: '#717267',
      ash900: '#030302',
      red50: '#FFEBEE',
      red200: '#EF9A9A',
      red800: '#891615',
      sand75: '#F5F2EC',
      sand100: '#EFE7DA',
      sand200: '#E2D5C5',
      green50: '#D1E6C8',
      green100: '#D1E6C8',
      green900: '#082B0B',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      gap: {
        2.5: '10px',
      },
      boxShadow: {
        'custom-light': '2px 2px 4px 0px rgba(3, 3, 2, 0.15)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.backface-visible': {
            'backface-visibility': 'visible',
          },
        });
      }),
    ],
  },
};
export default config;
