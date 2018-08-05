<template>
  <div class="home">
    <home-header></home-header>
    <home-swipe :swipeList="swipeList"></home-swipe>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot-topic :hotTopicList="hotTopicList"></home-hot-topic>
    <home-like :likeList="likeList"></home-like>
    <home-vacation :vacationList="vacationList"></home-vacation>
  </div>
</template>

<script>
  import HomeHeader from './pages/Header'
  import HomeSwipe from './pages/Swipe'
  import HomeIcons from './pages/Icons'
  import HomeLocation from './pages/Location'
  import HomeActivity from './pages/Activity'
  import HomeHotTopic from './pages/HotTopic'
  import HomeLike from './pages/Like'
  import HomeVacation from './pages/Vacation'
  import {mapState} from 'vuex'
  export default {
    components: {
      'home-header': HomeHeader,
      'home-swipe': HomeSwipe,
      'home-icons': HomeIcons,
      'home-location': HomeLocation,
      'home-activity':HomeActivity,
      'home-hot-topic':HomeHotTopic,
      'home-like':HomeLike,
      'home-vacation':HomeVacation
    },
    data(){
      return {
        swipeList:[],
        iconsList:[],
        hotTopicList:[],
        likeList:[],
        vacationList:[],
        currentCity:''
      }
    },
    computed:{
      ...mapState(['city']),
    },
    methods:{
      getHttp(){
        this.$http.get('/api/homeData.json')
          .then((res)=>{
            const data=res.data.data[0];
            this.swipeList=data.swipeList;
            this.iconsList=data.iconsList;
            this.hotTopicList=data.hotTopicList;
            this.likeList=data.likeList;
            this.vacationList=data.vacationList;
          });
      }
    },
    mounted(){
      this.currentCity=this.city;
      this.getHttp();
    },
    activated(){
      //在keep-alive组件激活时，重新发送请求（优化）
      if(this.city !== this.currentCity){
        this.getHttp();
        this.currentCity=this.city;
      }
    }
  }
</script>

<style scoped>
  .home{
    background: #f5f5f5;
  }
</style>
