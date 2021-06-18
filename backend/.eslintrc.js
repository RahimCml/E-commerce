module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2021,

  },
  ignorePatterns: [
    'sellers.js',
    'products.js',
    'customers.js',
    'create-records.js',
    'printSelectedOrders.js',
    'products.test.js',
    'sellers.test.js',
  ],
  rules: {
    'consistent-return': 'error',
    'no-console': 'off',
  },
};
