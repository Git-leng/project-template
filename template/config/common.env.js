var path = require('path');
var projectConfig = require('./project.config');
var pkg = require('../package.json');

var getFilenameFormat = function() {
    if(projectConfig.version) {
        return 'js/[name].[chunkhash].' + pkg.version +'.js';
    } else {
        return 'js/[name].[chunkhash].js';
    }
}

var getChunkFilenameFormat = function() {
    if(projectConfig.version) {
        return 'js/[id].[chunkhash].' + pkg.version +'.js';
    } else {
        return 'js/[id].[chunkhash].js';
    }
}

var getCssFilenameFormat = function() {
    if(projectConfig.version) {
        return 'css/[name].[contenthash].' + pkg.version +'.css';
    } else {
        return 'css/[name].[contenthash].css';
    }
}

module.exports = {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '.',

    filenameFormat: getFilenameFormat(),
    chunkFilenameFormat: getChunkFilenameFormat(),
    cssFilenameFormat: getCssFilenameFormat()
};
