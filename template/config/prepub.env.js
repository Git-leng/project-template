var merge = require('webpack-merge');
var commonConf = require('./common.env');

var prepubConfig = merge(commonConf, {
    env: 'prepub',
    assetsPublicPath: '/projects/{{ department }}/{{ name }}/',
    globalConfig: {
        NODE_ENV: JSON.stringify("prepub")
    }
});

module.exports = prepubConfig;
