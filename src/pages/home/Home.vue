<template>
  <div>
    <HomeHeader :city="city"></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function() {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    };
  },
  mounted: function() {
    axios.get('/api/index').then(res => this.setHomeInfo(res));
  },
  methods: {
    setHomeInfo: function(res) {
      const data = res.data;
      console.log(data);
      if (data.ret && data.data) {
        this.city = '北京';
        this.iconList = data.data.iconList;
        this.recommendList = data.data.recommendList;
        this.swiperList = data.data.swiperList;
        this.weekendList = data.data.weekendList;
      }
    }
  }
};
</script>

<style></style>
