/**
 * filter file
 */
export default {
    /**
     * @desc 分转成元,向上取整,并且三位一个逗号,
     * 值无效或者不存在,则返回0
     * @params 转换数字   1000 => 1,
     * place 小数点后保留几位
     * symbol 货币符号
     * thousand 整数部分分隔符
     * decimal 小数部分分割符
     */
    reverseYuan: (value = 0) => {
        if (isNaN(+value)) {
            return '数据异常';
        }
        if (!value && +value !== 0) {
            return '';
        }
        let negative = value < 0 ? '-' : '';
        value = `${Math.ceil(Math.abs(+value) / 100)}`;
        let j = value.length > 3 ? value.length % 3 : 0;
        let top = j ? `${value.substr(0, j)},` : '';
        return negative + top + value.substr(j).replace(/(\d{3})(?=\d)/g, '$1,');
    },
    /**
     * @desc 分转成元,默认保留两个小数点
     * 值无效或者不存在,则返回0
     */
    reverseYuanNoDou: (value = 0) => {
        if (isNaN(+value)) {
            return '数据异常';
        }
        if (!value && +value !== 0) {
            return '';
        }
        return value / 100;
    },
    /**
     * @desc 分转成万,默认保留两个小数点
     * 值无效或者不存在,则返回0
     */
    reverseWan: (value = 0, place = 2) => {
        if (isNaN(+value)) {
            return '数据异常';
        }
        if (!value && +value !== 0) {
            return '';
        }
        value /= 1000000;
        return value.toFixed(place);
    },
    /**
     * @desc 首付专用
     */
    reverseFirstPay: (value = 0) => {
        if (isNaN(+value)) {
            return '';
        }
        value = +value;
        if (!value && +value !== 0) {
            return '';
        }
        value = Math.floor(value / 10000);
        if (value % 100 === 0) {
            return value / 100;
        }
        return (value / 100).toFixed(2);
    },
    /**
     * @desc 分转成元,默认保留两个小数点
     * 值无效或者不存在,则返回0
     */
    toHttps: (value = '') => {
        if (location.protocol === 'https:' && /^http:\/\/*/.test(value)) {
            return value.substr(5);
        }
        return value;
    }
};
