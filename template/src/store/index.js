/**
 * @desc 根状态管理集
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Basic from 'assets/js/utils/basic';
import Const from 'const';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);

let state = {
    userData: {},
    inited: false // 是否初始化过
};

export default new Vuex.Store({
    strict: Const.DEV === Basic.env,
    state,
    actions,
    mutations,
    getters
});