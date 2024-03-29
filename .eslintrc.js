module.exports = {
  plugins: ['prettier'],
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
