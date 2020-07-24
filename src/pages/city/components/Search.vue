<template>
  <div>
    <div class="search">
      <input
        class="searchInput"
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="contentScroll" v-if="keyword">
      <ul>
        <li class="content border bottom" v-for="item of list" :key="item.id">
          {{ item.name }}
        </li>
        <li class="content border bottom" v-show="hasData">没有找到搜索内容</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function() {
    return {
      keyword: '',
      list: [],
      timer: null
    };
  },
  mounted: function() {
    this.scroll = new BScroll(this.$refs.contentScroll);
  },
  computed: {
    hasData: function() {
      return !this.list.length;
    }
  },
  watch: {
    keyword: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.name.indexOf(this.keyword) > -1 ||
              value.spell.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 1000);
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .searchInput
    width 100%
    height 0.62rem
    line-height 0.62rem
    text-align center
    color #666
    padding 0.1rem
    box-sizing border-box
    border-radius 0.06rem
.search-content
  position absolute
  overflow hidden
  top 1.53rem
  left 0
  right 0
  bottom 0
  z-index 1
  background #fff
  .content
    padding 0.13rem
    line-height 0.4rem
    color #666
</style>
