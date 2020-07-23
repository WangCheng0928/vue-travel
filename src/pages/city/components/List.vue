<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div type="button" class="btn-item">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item in hotCities" :key="item.id">
            <div type="button" class="btn-item">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cityList, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="city of cityList"
            :key="city.id"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  data: function() {
    return {};
  },
  name: 'CityList',
  mounted: function() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter: function() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.53rem
    left 0
    right 0
    bottom 0
    overflow hidden
    touch-action: none;
    .title
      height .44rem
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
    .btn-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .btn-wrapper
        float left
        width 33.33%
        .btn-item
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .4rem
        padding .2rem
</style>
