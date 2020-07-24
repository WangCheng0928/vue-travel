<template>
  <div>
    <div class="ticket-list" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont northIconpiao item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
.ticket-list
  line-height .8rem
  font-size .3rem
  padding 0 .2rem
  .item-title-icon
    display inline-block
    width .36rem
    height .36rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size .4rem .3rem
</style>
