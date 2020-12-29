// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  experimental: {
    darkModeVariant: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        custom: '#0E182A', /* for bg dark */
        // myorange: '#fc4a1a',
        // myorange: "var(--color-bg-myorange)",
        // myorange: '#dfb91f',
        // mypink: '#fc4a1a',
        // mypink: "var(--color-bg-mypink)",
        myorange: '#dfb91f',
        mypink: '#fc4a1a',
        otherpink: '#fc1a54',
      },

      gradientColorStops: {
        myorange: '#dfb91f',
        mypink: '#fc4a1a',
        otherpink: '#fc1a54',
      },


      borderColor: {
        myorange: '#dfb91f',
        mypink: '#fc4a1a',
      },

      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        oren: '#FC4A1A',
        orenn: '#F5AF19',
        myorange: '#dfb91f',
        mypink: '#fc4a1a',
      },

      fontFamily: {
        proxbold: ['ProximaNova-Bold'],
        proxreg: ['ProximaNova-Regular'],
      },

      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

      },

    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-border-gradients')({
      variants: ['responsive'],
      directions: {
        't': 'to top',
        'r': 'to right',
        'b': 'to bottom',
        'l': 'to left',
      },
      gradients: {
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
      },
    }),
  ],
}