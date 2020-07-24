<template>
  <div>
    <Banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></Banner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import axios from 'axios';
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data: function() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo: function() {
      axios
        .get('/api/detail?id=', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSuccess);
    },
    handleGetDataSuccess: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted: function() {
    this.getDetailInfo();
  }
};
</script>
<style scoped lang="stylus">
.content
  height 50rem
</style>
