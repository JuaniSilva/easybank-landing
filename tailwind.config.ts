import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': 'hsl(233, 26%, 24%)',
        'primary-lime-green': 'hsl(136, 65%, 51%)',
        'primary-bright-cyan': 'hsl(192, 70%, 51%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 62%)',
        'neutral-light-grayish-blue': 'hsl(220, 16%, 96%)',
        'neutral-very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'public-sans': ['var(--font-public-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'intro-mobile': "url('/images/bg-intro-mobile.svg')",
      },
      backgroundPosition: {
        'intro-mobile-position': 'top 95px  right ',
      },
    },
  },
  plugins: [],
};
export default config;
