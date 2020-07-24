<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont northIconback head-back"></div>
    </router-link>
    <div>城市选择</div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';

  .header
    position relative
    height $headHeight
    line-height $headHeight
    background $bgColor
    color #ffffff
    text-align center
    font-size .33rem
    .head-back
      position absolute
      float left
      font-size .6rem
      left .1rem
      color #fff
</style>
