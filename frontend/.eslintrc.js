module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off'
  },

  root: true,

  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/standard'
  ]
}
