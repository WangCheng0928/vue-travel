<template>
  <div>
    <div class="group-title">
      <span class="title">周末去哪儿</span>
    </div>
    <ul class="weekend-list">
      <li class="weekend-item" v-for="item of weekendList" :key="item.id">
        <div>
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
          title: '三峡人家',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/3a/f96e254541abb.jpg_r_640x214_6b1fc9f0.jpg',
          title: '鄂西旅游圈',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1509/7e/e23304b4b90d16.jpg_r_640x214_87d3b4f1.jpg',
          title: '宜昌必打卡',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
          title: '武汉必打卡',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1811/8c/80108ae993d1e3.jpg_r_640x214_89628567.jpg',
          title: '追溯山水',
          desc: '好玩的水上公园，夏天清凉的好地方'
        }
      ]
    };
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'
.group-title
  width 100%
  height 0.46rem
  padding 0.2rem
  background #eee
  .title
    height 0.46rem
    line-height 0.46rem
    margin-left 0.1rem
.weekend-item
  display flex
  flex-direction column
  width 100%
  height 3.8rem
  overflow hidden
  .item-img
    width 100%
    height 2.6rem
  .item-info
    flex 1
    padding 0.2rem
    min-width 0
    .item-title
      line-height 0.48rem
      height 0.48rem
      ellipsis()
    .item-desc
      font-size 0.2rem
      line-height 0.42rem
      color #ccc
      ellipsis()
    .item-btn
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>
