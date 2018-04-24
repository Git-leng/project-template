export default {
    // 修改登陆状态值
    setUserData(state, data) {
        state.userData = {
            ...state.userData,
            ...data
        };
    },
    // 设置是否初始化过
    setInited(state, flag) {
        state.inited = flag;
    }
};
