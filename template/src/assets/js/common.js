import Variable from 'variable';
import init from './utils/init';
import Basic from './utils/basic';

export default {
    ...Basic,
    // 是否登陆
    getUserData() {
        return new Promise(resolve => {
            Variable.token = Basic.envConfig.token;
            resolve({
                userToken: Variable.token
            });
        });
    },
    init
};
