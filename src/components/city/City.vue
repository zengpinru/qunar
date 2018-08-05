<template>
  <div class="city">
    <city-header></city-header>
    <letter-list :hotCities="hotCities" :letter="letter" :cities="cities"></letter-list>
  </div>
</template>

<script>
  import CityHeader from './pages/Header'
  import LetterList from './pages/letterList'

  export default {
    data(){
      return {
        hotCities:[],
        letter:[],
        cities:{}
      }
    },
    components:{
      "city-header":CityHeader,
      'letter-list':LetterList
    },
    mounted(){
      this.$http.get('/api/city.json')
        .then((res)=>{
          const data=res.data.data;
          this.hotCities=data.hotCities;
          this.letter=Object.keys(data.cities);
          this.cities=data.cities;
        });
    }
  }
</script>

<style>
  .city{
    background: #f5f5f5;
  }
</style>
