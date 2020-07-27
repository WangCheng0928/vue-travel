<template>
  <div>
    <Banner :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"></Banner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
    <DetailComments></DetailComments>
  </div>
</template>
<script>
import Banner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import DetailComments from './components/Comments';
import axios from 'axios';
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList,
    DetailComments
  },
  data: function () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo: function () {
      axios
        .get('/api/detail?id=', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSuccess);
    },
    handleGetDataSuccess: function (res) {
      res = res.data;
      if (!res.status && res.data) {
        const data = res.data;
        this.sightName = data.data.sightName;
        this.bannerImg = data.data.bannerImg;
        this.gallaryImgs = data.data.gallaryImgs;
        this.list = data.data.categoryList;
      }
    }
  },
  mounted: function () {
    this.getDetailInfo();
  }
};
</script>
<style scoped lang="stylus"></style>
