<template>
  <div class="hotTopic">
    <div class="hotTopic-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span>本周热门榜单</span>
      <span class="hotTopic-title">全部榜单<span class="iconfont">&#xe70a;</span></span>
    </div>
    <ul class="hotTopic-list">
      <li class="hotTopic-item" v-for="(item,index) in hotTopicList" :key="index">
        <img :src="item.imgUrl" :alt="item.title">
        <p>{{item.title}}</p>
        <p>
          <span class="hotTopic-mark">￥{{item.mark}}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props:['hotTopicList']
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/fn.styl"
  .hotTopic{
    margin-top: .2rem;
    font-size:.28rem;
    background: #fff;
  }
  .hotTopic-top{
    position: relative;
    padding: .2rem;
  }
  .hotTopic-top img{
    width: .3rem;
    height: .3rem;
  }
  .hotTopic-top span{
    font-size: .32rem;
    color: #212121;
  }
  .hotTopic-top .hotTopic-title{
    position: absolute;
    right: .2rem;
    font-size: .24rem;
    color: #616161;
  }
  .hotTopic-top .iconfont{
    font-size:.24rem;
  }


  .hotTopic-list{
    padding-bottom: .4rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .hotTopic-item{
    display: inline-block;
    padding: 0 .2rem;
    width: 2rem;
  }
  .hotTopic-item img{
    width: 2rem;
    height: 2rem;
  }
  .hotTopic-item p{
    margin-top:.1rem;
    text-align: center;
    textOverflow();
  }
  .hotTopic p .hotTopic-mark{
    font-size:.32rem;
    color: #ff8300;
  }
</style>
