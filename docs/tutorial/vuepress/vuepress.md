## Vuepress 制作偏技术型文档类首页
::: tip
[Vuepress官方网站](https://vuepress.vuejs.org/zh/)
:::
### 1. 创建并进入一个新的目录
```shell
mkdir vuepress-starter && cd vuepress-starter
```

### 2. 初始化
```shell
npm install
```

### 3. 将 VuePress 安装为本地依赖
::: warning
 官方不再推荐全局安装Vuepress  
:::
   
```shell
npm install -D vuepress
```
### 4. 创建你的第一篇文档
```shell
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

### 5. 在`packages.json`中增加
```shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 6. 本地启动
```shell
npm run docs:dev
```

### 7. 个性化首页
需要遵循[Front Matter](#FrontMatter)
 ```shell
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
   

### <span id="FrontMatter">Front Matter</span>