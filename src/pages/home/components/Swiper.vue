<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: 'swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          url:
            'https://imgs.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg'
        },
        {
          id: '0002',
          url:
            'https://imgs.qunarzz.com/sight/source/1811/8c/80108ae993d1e3.jpg_r_640x214_89628567.jpg'
        },
        {
          id: '0003',
          url:
            'https://imgs.qunarzz.com/sight/source/1811/8c/80108ae993d1e3.jpg_r_640x214_89628567.jpg'
        }
      ]
    };
  }
};
</script>
<style scoped lang="stylus">
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 36.64%
  .swiper-img
    width 100%
</style>
