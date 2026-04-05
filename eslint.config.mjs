import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['docs/images/**']
  },
  {
    files: ['docs/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser
      }
    },
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules
    }
  }
];
