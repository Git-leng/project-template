import Variable from 'variable';
import Http from '@souche-f2e/http-request';
import config from './config';

const ajax = (url, params = {}) => {
    params.url = url;
    params.type = params.type || 'get';
    return Http.ajax(params).then(res => {
        if (res.code === '10001') {
            Variable.vm.$store.dispatch('doLogout');
        }
        if (res.message === 'OK' || res.success || config.env === 'mock') {
            return Promise.resolve(res.data);
        } else {
            throw res;
        }
    }).catch(err => {
        if (err.message === 'Network Error') {
            err.message = '网络异常';
        }
        let errMsg = err.traceId ? '' : `</br>${err.traceId}`;
        Variable.vm.$toast(`${err.msg || err.message || '系统异常'}${errMsg}`);
        return Promise.reject(err);
    });
};

export default {
    finance(baseURL) {
        return function(params) {
            params.opts = params.opts || {};
            params.opts.token = params.opts.token || Variable.token;
            return ajax(baseURL() + params.url, {
                data: params.opts,
                type: params.method
            });
        };
    }
};
