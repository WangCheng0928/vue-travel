<template>
  <div>
    <router-link tag="div" to="/" class="arrow-back" v-show="showArrow">
      <div class="iconfont northIconback icon-back"></div>
    </router-link>
    <div class="header-fixed" v-show="!showArrow" :style="opacotyStyle">
      <router-link to="/">
        <div class="iconfont northIconback head-back"></div>
      </router-link>
      <div>景点详情</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data: function() {
    return {
      showArrow: true,
      opacotyStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll: function() {
      const top = document.documentElement.scrollTop;
      if (top > 60 && top < 140) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacotyStyle = {
          opacity
        };
        this.showArrow = false;
      } else {
        this.showArrow = true;
      }
    }
  },
  activated: function() {
    window.addEventListener('scroll', this.handleScroll);
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';
.arrow-back
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius 50%
  text-align center
  background rgba(0, 0, 0, .8)
  .icon-back
    color #fff
    font-size .5rem
.header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headHeight
    line-height $headHeight
    background $bgColor
    color #ffffff
    text-align center
    font-size .3rem
    .head-back
      position absolute
      float left
      font-size .6rem
      left .1rem
      color #fff
</style>
