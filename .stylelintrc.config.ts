import type { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-no-empty': true,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'number-leading-zero': 'always',
    'string-quotes': 'double',
    'selector-list-comma-newline-after': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    'font-family-no-duplicate-names': true,
    'no-duplicate-selectors': true,
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'scss/selector-no-redundant-nesting-selector': true,
    indentation: 2,
    'no-missing-end-of-source-newline': true,
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};

export default config;
