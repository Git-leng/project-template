/**
 * @desc 路由模块
 * @desc 支持子路由
 */

/* export default {
    '/': {
        path: 'views/index',
        name: 'index',
        children: {
            'test': {
                path: 'views/test',
                name: 'test',
                children: {
                    'a': {
                        path: 'views/a',
                        name: 'a',
                        children: {
                            'b': {
                                path: 'views/b',
                                name: 'b'
                            }
                        }
                    }
                }
            }
        }
    },
    '/c': {
        path: 'views/test',
        name: 'c',
        children: {
            'a': {
                path: 'views/a',
                name: 'a',
                children: {
                    'b': {
                        path: 'views/b',
                        name: 'b'
                    },
                    'test': {
                        path: 'views/test',
                        name: 'cd'
                    }
                }
            }
        }
    },
    '*': {
        name: '',
        path: 'views/404'
    }
}; */

export default {
    // app首页
    '/': {
        name: 'index',
        path: 'views/index'
    }
};
