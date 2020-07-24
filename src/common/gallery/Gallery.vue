<template>
  <div class="gallary-container" @click="handleGallaryShow">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: function() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallaryShow: function() {
      this.$emit('showGallary');
    }
  }
};
</script>
<style scoped lang="stylus">
..gallary-container >>> .swiper-container
  overflow inherit
.gallary-container
  z-index 99
  display flex
  flex-direction column
  justify-content center
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    text-align center
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
