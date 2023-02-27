/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-':
          "url('https://cdn.discordapp.com/attachments/1061493503059824660/1067122134431838319/Untitled_design.png')",
        bg_login: "url('./src/assets/login/background.svg')",
      },
      spacing: {
        620: '39rem',
        screen: 'calc(var(--vh) * 100)',
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        primary_blue: '#5865F2',
        secondery_blue: '#404EED',
        primary_gray: '#36393F',
        secondery_gray: '#202225',
        text_gray: '#A6A8AC',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        ginto: ['Ginto Nord'],
      },
      borderRadius:{
        messageBorder: '50% 50% 50% 0;' 
      }
    },
  },
  plugins: [],
};
