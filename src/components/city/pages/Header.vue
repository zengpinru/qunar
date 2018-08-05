<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-title">
      城市选择
    </div>

  </div>
</template>

<script>
  export default {
    methods:{
      toHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/var.styl"
  .header {
    position relative
    width: 100%;
    height: .88rem;
    font-size: .32rem;
    line-height: .88rem;
    color: $textColor;
    background: $bgColor;
  }

  .header-left {
    position absolute
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
  }

  .header-title{
    text-align center;
  }
</style>
