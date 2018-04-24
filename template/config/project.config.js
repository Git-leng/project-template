module.exports = {
    projectTemplate: 'souche:souche-vue/project-template#2.0-finance',
    noEscape: {{ noEscape }},
    department: '{{ department }}',
    name: '{{ name }}',
    description: '{{ description }}',
    author: '{{ author }}',
    singlePage: true,
    /*
     * 多页面的应用，要在 multiPageNames 里配置每个页面的名称, eg:
     *
     *    multiPageNames: [ 'list', 'detail' ]
     *
     * 然后需要在 src/pages 目录下创建同名文件
     */
    multiPageNames: [],
    build: 'standalone',
    unit: false,
    e2e: false,
    port: {{ port }},
    vuex: true,
    router: true,
    hash: false,
    destDirName: '{{ destDirName }}',
    host: 'localhost',
    version: true,// 打包增加版本号
    bundleAnalyzerReport: false, // 打包出来的代码体积可视化
    destDirName: '{{ department }}-{{ name }}',
    autoOpenBrowser: true
};
