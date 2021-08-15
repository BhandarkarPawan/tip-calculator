module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkestCyan: 'hsl(183, 100%, 15%)',
        darkCyan: '#26B89E',
        darkGrayCyan: 'hsl(186, 14%, 43%)',
        darkGrayCyan2: ' hsl(184, 14%, 56%)',
        lightGrayCyan: 'hsl(185, 41%, 84%)',
        lightGrayCyan2: 'hsl(189, 41%, 97%)',
        strongCyan: 'hsl(172, 67%, 45%)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        'responsive',
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'active',
      ],
    },
  },
  plugins: [],
};
