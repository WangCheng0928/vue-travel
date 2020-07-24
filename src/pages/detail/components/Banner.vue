<template>
  <div class="banner">
    <div class="banner-wrapper" @click="handleGallaryShow">
      <img class="banner-img" :src="bannerImg" alt="爱情海水上乐园" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont northIcontupian banner-icon"></span
          >{{ imgsNum }}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallery
        @showGallary="handleGallaryClose"
        :imgs="gallaryImgs"
        v-show="showGallary"
      ></CommonGallery>
    </FadeAnimation>
  </div>
</template>
<script>
import CommonGallery from '@/common/gallery/Gallery';
import FadeAnimation from '@/common/fade/FadeAnimation';
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  computed: {
    imgsNum: function() {
      return this.gallaryImgs.length;
    }
  },
  data: function() {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1705/90/90f9d68b53356c56a3.img.jpg_r_800x800_8d32f8a7.jpg',
        'http://img1.qunarzz.com/sight/p0/1705/e7/e7dc03b8a0dcdf5da3.img.jpg_r_800x800_36d7a96d.jpg'
      ],
      showGallary: false
    };
  },
  methods: {
    handleGallaryShow: function() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style scoped lang="stylus">
.banner-wrapper
  position relative
  height 0
  overflow hidden
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    justify-content space-between
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    padding 0 .1rem
    color #fff
    background-image : linear-gradient(to bottom , rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
      flex 1
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      padding 0 .4rem
      margin-top .14rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .3rem
        padding-right .1rem
</style>
