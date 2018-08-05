<template>
  <div class="like">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">猜你喜欢
    </div>
    <ul>
      <li class="like-item border-bottom" v-for="(item,index) in likeList" :key="index">
        <div class="like-img">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="like-text">
          <div class="like-title">
            {{item.title}}
          </div>
          <div class="like-comment">
            {{item.comment}}条评论
          </div>
          <div class="like-map">
            <span class="like-mark">￥<b>{{item.price}}</b></span>起
            <span class="like-item-map">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data:function () {
      return {

      };
    },
    props:['likeList']
  }
</script>

<style scoped>
  .like{
    padding: 0 .2rem;
    margin-top: .2rem;
    font-size: .28rem;
    background: #fff;
  }
  .like-top{
    padding: .2rem 0;
    font-size: .32rem;
  }
  .like-top img{
    width: .3rem;
    height: .3rem;
  }

  .like-item{
    position: relative;
    padding: .2rem 0;
    overflow: hidden;
  }
  .like-img{
    float: left;
  }
  .like-img img{
    width:2rem;
    height: 2rem;
  }
  .like-text{
    padding-left: .2rem;
    overflow: hidden;
  }
  .like-title{
    margin-top:.4rem;
    font-size: .36rem;
    color: #212121;
  }
  .like-comment{
    margin-top:.3rem;
    font-size: .24rem;
    color: #616161;
  }
  .like-map{
    position: relative;
    margin-top:.3rem;
    line-height: .4rem;
    color: #616161;
  }
  .like-mark{
    color: #ff8300;
  }
  .like-mark b{
    font-size:.4rem;
  }
  .like-item-map{
    position: absolute;
    right: 0;
  }
</style>
