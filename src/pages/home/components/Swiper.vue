<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: 'swiper-pagination'
        },
        loop: true,
        observeParents: true,
        observer: true
      }
    };
  }
};
</script>
<style scoped lang="stylus">
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 37.8%
  background #eee
  .swiper-img
    width 100%
</style>
