# vue3-admin

vue3后台管理脚手架

## 一、安装必要插件

1. `volar`：vue文件高亮及语法解析
2. `TypeScript Vue Plugin`：ts文件识别引入.vue文件
3. `ESlint`
4. `prettier`
5. `Stylelint`

1、本工作区禁用Vetur插件，不然会导入组件的代码会报错

2、使用vue官方推荐的代码风格，覆盖prettier规则：GitHub上vue项目，把`.prettierrc`文件复制到项目的根目录

```json
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```

## 二、Stylelint样式代码检查(包括顺序检查)

1、安装依赖

```shell
pnpm add -D postcss postcss-html sass stylelint stylelint-scss stylelint-order stylelint-config-rational-order stylelint-config-recommended-vue stylelint-config-standard stylelint-config-standard-scss
```

2、添加`.stylelintrc.js`文件

```js
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
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-+[a-z0-9]+)*$',

    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'number-leading-zero': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'deep'] }
    ]
  }
}


```

3、添加`.stylelintignore`文件，忽略文件检查

```txt
/dist/*
/public/*
public/*
*.min.css
```

4、vscode本地的`setting.js`文件或者项目根目录下`.vscode/settings.json`中添加

```json
"stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"]
```
