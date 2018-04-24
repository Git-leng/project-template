import Vue from 'vue';
import Variable from 'variable';
import Common from 'common';
import myPlugin from 'assets/js/plugins';
import filters from 'assets/js/filters.js';
import router from './router/router';
import store from './store';
import App from './App';

Vue.use(myPlugin);

Vue.config.productionTip = false;

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Common.init();

/* eslint-disable no-new */
Variable.vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});