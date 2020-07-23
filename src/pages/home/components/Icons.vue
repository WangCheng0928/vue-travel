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
  props: {
    iconList: Array
  },
  data() {
    return {};
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
  margin-top .1rem
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
      margin-top .1rem
      flex 1
      min-width 0
      .icon-desc-content
        ellipsis()
</style>
