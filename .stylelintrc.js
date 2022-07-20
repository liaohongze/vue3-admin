module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order'
  ],
  customSyntax: 'postcss-html',
  rules: {
    indentation: 2,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'string-quotes': 'single',
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'deep'] }
    ]
  }
}
