/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        "xl": "1240px",
      },
      colors: {
        "gray": "rgba(255,255,255,0.42)",
        "green": "rgb(29,154,109)",
        "text-color": "rgb(255,255,255)",
        "color": "rgb(173, 173, 173)"
      },
      backgroundImage: {
        'header-bg': 'linear-gradient(182.92deg,rgba(0,255,163,0.12)36.581%,rgba(31,26,255,0.2)80.91%',
        'title-bg': 'linear-gradient(137.68deg,rgb(255,255,255),rgba(176,250,255,0))',
        "mainBg": "url('/image/main-bg.png')",
        'contact-bg': "url('/image/contact.png')",
        "card-bg": "url('/image/card-bg.png')",
        "cardTwo-bg": "url('/image/setup-bg-card.png')",
      },
      boxShadow: {
        btnShadow: "0px 4px 9px 0px rgba(176, 176, 176, 0.1)"
      },
      transitionDuration: {
        "0.4": "0.4"
      },
      // eslint-disable-next-line no-dupe-keys

    },
  },
  plugins: [],
}

