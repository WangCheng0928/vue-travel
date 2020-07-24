<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div type="button" class="btn-item">
              {{ this.city }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item in hotCities" :key="item.id">
            <div type="button" class="btn-item" @click="handleClick(item.name)">
              {{ item.name }}
            </div>
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
            @click="handleClick(city.name)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
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
  methods: {
    handleClick: function(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
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
@import '~@/assets/styles/variables.styl'
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
  top 1.56rem
  left 0
  right 0
  bottom 0
  overflow hidden
  touch-action none
  .title
    height 0.44rem
    line-height 0.44rem
    background #eee
    padding-left 0.2rem
    color #666
  .btn-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .btn-wrapper
      float left
      width 33.33%
      .btn-item
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid #ccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.4rem
      padding 0.2rem
</style>
