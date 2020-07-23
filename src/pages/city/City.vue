<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hotCities="hotCities"></CityList>
    <CityAlphalist :cities="cities"></CityAlphalist>
  </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphalist from './components/Alphalist';

export default {
  name: 'City',
  data: function() {
    return {
      cities: {},
      hotCities: []
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphalist
  },
  methods: {
    handleGetCityInfo: function(res) {
      console.log(res.data);
      const data = res.data;
      if (data.ret && data.data) {
        this.cities = data.data.cities;
        this.hotCities = data.data.hotCities;
      }
    }
  },
  mounted: function() {
    axios.get('/api/city').then(res => this.handleGetCityInfo(res));
  }
};
</script>
<style scoped></style>
