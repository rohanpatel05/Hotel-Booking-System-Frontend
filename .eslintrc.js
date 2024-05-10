module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@tanstack/query", "jest"],
  extends: [
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/stable-query-client": "error",
  },
};
