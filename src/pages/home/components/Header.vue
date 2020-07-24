<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuosearch82"></span>
      <input class="inputContent" placeholder="输入城市/景点/游玩主题 " />
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}<span class="iconfont icon-xiala"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl'
.header
  display flex
  align-items center
  line-height $headHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    .icon-back
      font-size 0.5rem
      text-align center
  .header-input
    flex 1
    display flex
    align-items center
    height 0.64rem
    line-height 0.64rem
    background #fff
    border-radius 0.1rem
    color #ccc
    .icon-sousuosearch82
      font-size 0.35rem
    .inputContent
      flex 1
      padding-left 0.1rem
      align-self center
      line-height 0.2rem
      color #666
  .header-right
    color #fff
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
</style>
