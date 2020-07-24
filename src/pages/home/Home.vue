<template>
  <div>
    <HomeHeader></HomeHeader>
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
import { mapState } from 'vuex';

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
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    };
  },
  computed: {
    ...mapState(['city'])
  },
  mounted: function() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  methods: {
    setHomeInfo: function(res) {
      const data = res.data;
      console.log(data);
      if (data.ret && data.data) {
        this.iconList = data.data.iconList;
        this.recommendList = data.data.recommendList;
        this.swiperList = data.data.swiperList;
        this.weekendList = data.data.weekendList;
      }
    },
    getHomeInfo: function() {
      axios
        .get('/api/index?city=' + this.city)
        .then(res => this.setHomeInfo(res));
    }
  },
  activated: function() {
    console.log('actived');
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style></style>
