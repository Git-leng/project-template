<style lang="less">
    @import '~src/assets/less/index.less';
    .pg-index {}
</style>
<template>
    <div class="pg-index">
        <h1>我是首页</h1>
    </div>
</template>
<script>
    import Api from 'api';

    export default {
        mounted() {
            Api.finance.mybankinterfacetestapi_updateTestOrderStatus().then(res => {
                console.log(res); // eslint-disable-line
            });
        }
    };
</script>
