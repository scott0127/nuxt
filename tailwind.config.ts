module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sacramento: ['Sacramento', 'sans-serif'],
        mario: ['New Super Mario Font U', 'sans-serif'],
        Caveat: ['Caveat', 'cursive'],
        Neonderthaw: ['Neonderthaw', 'cursive'],
        Bungee: ['Bungee Shade', 'sans-serif'],
        Londrina: ['Londrina Shadow', 'sans-serif'],
        Comfortaa: ['Comfortaa', 'sans-serif'],
        Kalam: ['Kalam', 'cursive'],
        LondrinaShadow: ['Londrina Shadow', 'sans-serif'],
        Playpen: ['Playpen Sans', 'cursive'],
        Willfteka: ['Willfteka', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
        Chinese: ['Noto Sans TC', 'sans-serif']
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ]
}
