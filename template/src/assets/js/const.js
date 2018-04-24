/**
 *  @desc 常量类文件, 记录cookie，localstorage等key的值
 */
export default class Const {

    // dev 环境
    static DEV = 'development';
    // 预发布 环境
    static PRE = 'prepub';
    // 线上 环境
    static PROD = 'production';
    /**
     * sessionStorage 的key
     */
    /**
     * localStorage 的 key
     */
    /**
     * cookie 的key
     */
    // 登陆之后，个人信息存放标识
    static TOKEN = '_security_token';
    // 登陆之后，个人信息存放标识
    static USER_DATA = 'userData';
    // 登陆时使用的临时cache
    static LOGIN_CACHE = 'login-cache';
    // 打开页面的spm值，存储一天
    static COOKIE_SPM = 'spm';
    // 给app用的spm值，缓存90天
    static COOKIE_SPM_APP_USE = 'spm-app-use';
}
