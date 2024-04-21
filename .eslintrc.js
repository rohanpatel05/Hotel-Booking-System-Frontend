module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@tanstack/query'],
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    "@tanstack/query/no-deprecated-options": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@tanstack/query/stable-query-client": "error",
  },
};
