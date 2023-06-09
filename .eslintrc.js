/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.tsx', '.json'],
      },
    },
  },
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'eslint-plugin-no-cyrillic-string',
  ],
  ignorePatterns: ['**/*.spec.ts', '*.js'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'import/no-import-module-exports': 'off',
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'prettier/prettier': 'warn',
    'no-cyrillic-string/no-cyrillic-string': 'error',

    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/prefer-regexp-exec': 0,
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'default-case': 'off',

    'no-await-in-loop': 'off',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['./app/root.tsx', './app/entry.client.tsx', './app/entry.server.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
