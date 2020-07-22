<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuosearch82"></span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市<span class="iconfont icon-xiala"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
};
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff
  .header-left
    width .64rem
    .icon-back
      font-size .5rem
      text-align center
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .2rem
    padding-left .1rem
    background #fff
    border-radius .1rem
    color #ccc
    .icon-sousuosearch82
      font-size .35rem
  .header-right
    width 1.24rem
    float right
    text-align center
</style>
