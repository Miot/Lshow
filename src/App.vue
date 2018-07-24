<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
</script>

<style lang="less">
@import url('../static/css/yez_css_Reset.css');
@import url('../static/css/common.less');
@import url('../static/css/rewriteMintUI.less');

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  font-size: 0.26rem;
}

</style>
