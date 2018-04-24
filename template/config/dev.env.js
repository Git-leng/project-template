'use strict'

var merge = require('webpack-merge');
var commonConf = require('./common.env');
var projectConfig = require('./project.config')

var devConf = merge(commonConf, {
    env: 'dev',
    assetsPublicPath: '/projects/{{ department }}/{{ name }}/',
    // globalConfig 中的 key 需要为 JSON 字符串
    globalConfig: {
        NODE_ENV: JSON.stringify("development")
    },
    port: projectConfig.port,
    host: projectConfig.host || 'localhost',
    autoOpenBrowser: true,
    proxyTable: {}
});

module.exports = devConf;
