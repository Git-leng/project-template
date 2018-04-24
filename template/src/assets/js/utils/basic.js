import LocalConfig from 'src/config.json';

let config = {};

// 开发环境使用config.json的配置，测试，预发，线上不走
if (process.env.BUILD_DEV === 'development') {
    config = LocalConfig;
}

export default {
    env: process.env.NODE_ENV,
    envConfig: config,
    getJsonData(str, defaultData) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return defaultData;
        }
    }
};
