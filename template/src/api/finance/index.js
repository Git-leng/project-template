import instance from './instance';

/** 修改网商订单状态1：已首付，2：等待放款， 3：已放款，4：已结清，5：关闭 */
function mybankinterfacetestapi_updateTestOrderStatus(opts) {
    return instance({
        method: 'post',
        url: '/mybankinterfacetestapi/updateTestOrderStatus.json',
        opts: opts
    });
}

export default {
    mybankinterfacetestapi_updateTestOrderStatus
};