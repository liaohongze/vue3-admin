# vue3-admin

vue3后台管理脚手架

## 一、安装必要插件

1. `volar`：vue文件高亮及语法解析
2. `TypeScript Vue Plugin`：ts文件识别引入.vue文件
3. `ESlint`
4. `prettier`

1、本工作区禁用Vetur插件，不然会导入组件的代码会报错

2、使用vue官方推荐的代码风格，覆盖prettier规则：GitHub上vue项目，把`.prettierrc`文件复制到项目的根目录

```json
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```
