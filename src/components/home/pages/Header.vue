<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-search">
      <span class="iconfont">
        &#xe632;
      </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">{{city}}<span class="iconfont">&#xe604;</span></router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/var.styl"
  .header {
    display: flex;
    width: 100%;
    height: .88rem;
    font-size: .36rem;
    line-height: .88rem;
    color: $textColor;
    background: $bgColor;
  }

  .header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
  }

  .header-search {
    flex: 1;
    height: .6rem;
    padding-left: .2rem;
    margin: .14rem 0;
    border-radius: .1rem;
    line-height: .6rem;
    font-size: .28rem;
    color: #e4e7ea;
    background: #fff;
    cursor pointer;
  }

  .header-right {
    padding: 0 .2rem;
    font-size: .28rem;
  }

  .header-right a {
    color: #fff;
  }
</style>
