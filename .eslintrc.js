module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'no-console': 'error',
  },
};