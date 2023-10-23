module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', "@typescript-eslint"],
  rules: {
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  ignorePatterns: [
    'types',
    'build',
    '.eslintrc.js',
    'webpack.config.js',
    'tailwind.config.js',
  ],
}
