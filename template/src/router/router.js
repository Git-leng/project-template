import routeData from 'src/router';
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Common from 'common';

function lazyLoad(path) {
    return () => import('src/' + path + '.vue');
}

let converRouter = (data) => {
    let arr = [];
    for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            let item = {};
            item.name = data[key].name;
            item.path = key;
            item.component = lazyLoad(data[key].path);
            if (data[key] && data[key].children) {
                item.children = converRouter(data[key].children);
            }
            arr.push(item);
        }
    }
    return arr;
};

let routes = converRouter(routerMap);

Vue.use(Router);

const router = new Router({
    base: '/',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    },
    routes
});

router.beforeEach((to, from, next) => {
    // 获取数据
    if (store.state.inited) {
        next();
    } else {
        Common.getUserData().then(res => {
            store.commit('setUserData', res);
            store.commit('setInited', true);
            next();
        });
    }
});

export default router;
