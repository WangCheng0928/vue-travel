<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <div class="icon-desc">
            <p class="icon-desc-content">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        },
        {
          id: '0003',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '自然风光'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '木兰天池'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '文化古迹'
        },
        {
          id: '0006',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          desc: '武汉欢乐谷'
        },
        {
          id: '0007',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '剧场演出'
        },
        {
          id: '0008',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '景点门票'
        },
        {
          id: '0009',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/c0/1dbc12358f094e02.png',
          desc: '恩施大峡谷'
        }
      ]
    };
  },
  computed: {
    pages: function() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'
// 用于固定宽高比 设置height 0  overflow width 100% padding-bottom xx%

// 组件样式穿透
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons >>> .swiper-slide
  display flex
  flex-wrap wrap
.icons
  display flex
  flex-direction row
  flex-wrap wrap
  overflow hidden
  width 100%
  height 0
  padding-bottom 50%
  .icon
    display flex
    flex-direction column
    width 25%
    overflow hidden
    height 0
    padding-bottom 25%
    align-items center
    .icon-img
      margin-top .1rem
      text-align center
      .icon-img-content
        width 70%
    .icon-desc
      flex-grow 1
      overflow hidden
      .icon-desc-content
        ellipsis()
</style>
