<style lang="less">
    @import '~src/assets/less/index.less';
    * {
        -webkit-tap-highlight-color: transparent;
    }
</style>
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>
