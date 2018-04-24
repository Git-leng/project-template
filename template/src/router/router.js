import routeData from 'src/router';
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Common from 'common';

function lazyLoad(path) {
    return () => import('src/' + path + '.vue');
}

// 处理路由数据，然后使用
let routes = [];
for (let key in routeData) {
    let item = {};
    item.name = routeData[key].name;
    item.component = lazyLoad(routeData[key].path);
    item.path = key;
    routes.push(item);
}

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
