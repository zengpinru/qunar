<template>

  <div ref="container" class="container">
   <div>
     <div class="hotCity">
       <div class="hotCity-title">热门城市</div>
       <ul class="hotCity-list">
         <li class="hotCity-item" v-for="(item,index) in hotCities" :key="index" @click="changeCity(item.name)">{{item.name}}</li>
       </ul>
     </div>

     <div class="letterSort">
       <div class="letterSort-title">字母排序</div>
       <ul class="letterSort-list">
         <li class="letterSort-item" v-for="(item,index) in letter" :key="index" @click="changeLetter(item)">{{item}}</li>
       </ul>
     </div>

     <div class="letterList">
       <div v-for="(val,key) in cities" :key="key" :ref="key">
         <div class="letterList-title">{{key}}</div>
         <ul class="letterList-list">
           <li class="letterList-item" v-for="(item) in val" @click="changeCity(item.name)">{{item.name}}</li>
         </ul>
       </div>
     </div>
   </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll';
  import {mapMutations} from 'vuex';
  export default {
    props:['hotCities','letter','cities'],
    data(){
      return {
        scroll:''
      }
    },
    mounted(){
      let container=this.$refs['container'];
      this.scroll=new BScroll(container);
    },
    methods:{
      //点击字母跳转到对应的城市
      changeLetter(letter){
        this.scroll.scrollToElement(this.$refs[letter][0]);
      },
      //跳转到首页，同时改变首页的城市名
      changeCity(cityName){
        this.$router.push('/');
        this.changeCityName(cityName);
      },
      ...mapMutations(['changeCityName'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/fn.styl"
  .container{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: .88rem;
    overflow: hidden;
    background: #f5f5f5;
  }
  /*热门城市*/
  .hotCity-title{
    padding: .3rem;
    font-size: .26rem;
    color: #212121;
  }
  .hotCity-list{
    position: relative;
    overflow: hidden;
    font-size: .28rem;
    background: #fff;
  }
  .hotCity-list:before{
    content: '';
    position: absolute;
    left:33.33%;
    width: 33.33%;
    height:100%;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .hotCity-item{
    position: relative
    float: left;
    width: 33.33%;
    height:.9rem;
    border-bottom: .02rem solid #ddd;
    text-align: center;
    line-height: .9rem;
  }
  /*字母排序*/
  .letterSort-title{
    padding: .3rem;
    font-size: .26rem;
    color: #212121;
  }
  .letterSort-list{
    position: relative;
    overflow: hidden;
    font-size: .28rem;
    background: #fff;
  }
  .letterSort-item{
    float: left;
    width: 16.66%;
    height:.9rem;
    text-align: center;
    line-height: .9rem;
  }
  /*城市列表*/
  .letterList-title{
    padding: .3rem;
    font-size: .26rem;
    color: #212121;
  }
  .letterList-list{
    position: relative;
    overflow: hidden;
    background: #fff;
  }
  .letterList-list:before{
    content: '';
    position: absolute;
    z-index: -1;
    left:25%;
    width: 25%;
    height: 100%;
    border-left:1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .letterList-list:after{
    content: '';
    position: absolute;
    z-index: -1;
    left:50%;
    width: 25%;
    height: 100%;
    border-right: 1px solid #ddd;
  }
  .letterList-item{
    float: left;
    width:25%;
    border-bottom: 1px solid #ddd;
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    textOverflow();
  }
</style>
