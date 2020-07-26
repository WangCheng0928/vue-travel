<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities"
              :hotCities="hotCities"
              :letter="letter"></CityList>
    <CityAlphalist :cities="cities"
                   @change="handleChange"></CityAlphalist>
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
  data: function () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphalist
  },
  methods: {
    handleGetCityInfo: function (res) {
      const data = res.data;
      if (!data.status && data.data) {
        this.cities = data.data.data.cities;
        this.hotCities = data.data.data.hotCities;
      }
    },
    handleChange: function (letter) {
      this.letter = letter;
    }
  },
  mounted: function () {
    axios.get('/api/city').then(res => this.handleGetCityInfo(res));
  }
};
</script>
<style scoped></style>
