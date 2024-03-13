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
  plugins: ['react', '@typescript-eslint/eslint-plugin', "unused-imports"],
  rules: {
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ]
  },
  ignorePatterns: [
    'types',
    'build',
    '.eslintrc.js',
    'webpack.config.js',
    'tailwind.config.js',
  ],
}
