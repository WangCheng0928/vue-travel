<template>
  <div>
    <div class="group-title">
      <img
        class="title-img"
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      <span class="title">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li class="like-item" v-for="item of recommendList" :key="item.id">
        <div>
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'
.group-title
  width 100%
  height .46rem
  padding .2rem
  background #eee
  .title-img
    height 100%
  .title
    height .46rem
    line-height .46rem
    margin-left  .1rem
.like-item
  display flex
  width 100%
  height 1.9rem
  overflow hidden
  .item-img
    padding .1rem
    width 1.7rem
    height 1.7rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .58rem
      height  .58rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-btn
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
