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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1705/90/90f9d68b53356c56a3.img.jpg_200x200_51e3aaf6.jpg',
          title: '爱情海水上公园',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1508/a5/9d1cfe865c3dbb14b70441daf48683b1.water.jpg_200x200_d78e27ae.jpg',
          title: '大悟十八潭',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/201404/04/7261ce30cfc33323d5270d407d47cef3.jpg_200x200_c08b4f49.jpg',
          title: '双峰山',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1505/88/88ef012c5ce7a9c8.water.jpg_200x200_81484032.jpg',
          title: '汤池温泉',
          desc: '好玩的水上公园，夏天清凉的好地方'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1812/c7/c75074c45cf079fda3.img.jpg_200x200_0811145c.jpg',
          title: '天屿湖温泉度假村',
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
