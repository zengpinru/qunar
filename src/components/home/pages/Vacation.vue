<template>
  <div class="vacation">
    <div class="vacation-title">
      周末去哪
    </div>
    <ul>
      <li class="vacation-item" v-for="(item,index) in vacationList" :key="index">
        <div class="vacation-img">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="vacation-msg">
          <p>{{item.title}}</p>
          <p>{{item.msg}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['vacationList'],
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  .vacation-title{
    padding:0.24rem;
    font-size:.32rem;
  }
  .vacation-item{
    margin-bottom: .1rem;
    font-size:.28rem;
    background: #fff;
  }
  .vacation-img{
    height: 0;
    padding-bottom: 37.4375%;
  }
  .vacation-img img{
    width: 100%;
  }
  .vacation-msg{
    padding:0.2rem 0 .2rem .2rem;
  }
  .vacation-msg p{
    margin-top: .2rem;
  }
  .vacation-msg p+p{
    color: #616161;
    font-size:.24rem;
  }
</style>
