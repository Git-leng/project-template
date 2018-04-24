# {{ name }}

> {{ description }}

## 项目简介

### 1. 如何访问

// TODO

### 2. 项目文档、设计稿

// TODO

### 3. 项目文件结构

// TODO

## 初始化项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

## 发布

参考文档：http://fedoc.sqaproxy.souche.com/#/f2e/standard/publish_project
