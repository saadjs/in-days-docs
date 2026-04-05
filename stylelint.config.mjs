export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['docs/images/**'],
  rules: {
    'alpha-value-notation': null,
    'color-function-notation': null,
    'color-hex-length': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['BlinkMacSystemFont']
      }
    ]
  }
};
