/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Sans KR','sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      animation: {
        twinkle: 'twinkle 2s infinite ease-in-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0.1'},
        }
      },
      backgroundImage:{
        'icon_bg1':'url("./images/sns_blog.png")',
        'icon_bg2':'url("./images/sns_kakao.png")',
        'icon_bg3':'url("./images/sns_insta.png")',
      }
    },
  },
  plugins: [],
}

