/**
 * 自定义指令
 */
export default {
    install(Vue) {
        // 设置网站背景色(待优化)
        Vue.prototype.$setBodyBack = function(color = '#f2f2f2') {
            document.body.style.background = color;
        };
    }
};
