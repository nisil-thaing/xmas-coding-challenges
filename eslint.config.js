import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const sharedGlobals = { globals: { ...globals.browser, ...globals.node } };

const noUnusedVars = {
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
};
const baseRules = {
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  semi: ['error', 'always'],
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  ...noUnusedVars,
};
const tsRules = {
  ...baseRules,
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
  ],
};

export default defineConfig([
  globalIgnores(['dist', 'build', 'coverage', 'node_modules']),
  {
    settings: {
      react: { version: 'detect' },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: sharedGlobals,
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: baseRules,
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    rules: tsRules,
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    plugins: { 'react-hooks': pluginReactHooks },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  eslintConfigPrettier,
]);
