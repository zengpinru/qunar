<template>
  <div class="header">
    <div class="header-return" v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return" @click="toHome">&#xe624;</span>
    </div>
    <div class="header-top" v-show="!showHeader" :style="styleOpacity">
      <div class="header-left">
        <span class="iconfont" @click="toHome">&#xe624;</span>
      </div>
      <div class="header-title">标题标题</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHeader: true,
        styleOpacity: {
          opacity: 0
        }
      }
    },
    methods: {
      toHome() {
        this.$router.push('/');
      }
    },
    mounted() {
      let that = this;
      window.addEventListener('scroll', function () {
        let top = document.documentElement.scrollTop;
        if (top > 45) {
          let opacity = top / 130;
          opacity = opacity > 1 ? 1 : opacity;
          that.styleOpacity.opacity = opacity;
          that.showHeader = false;
        } else {
          that.showHeader = true;
        }
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "~stylus/var.styl"

  .header-return {
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
  }

  .border-return {
    display: block;
    width: .72rem;
    height: .72rem;
    border-radius: .36rem;
    background: #000;
    opacity: .5;
  }

  .return {
    position: absolute;
    left: 0;
    top: 0;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .2rem;
    font-size: .32rem;
    font-weight: bold;
    color: #fff;
  }

  .header-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    font-size: .32rem;
    line-height: .88rem;
    color: $textColor;
    background: $bgColor;
  }

  .header-left {
    position: absolute;
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
  }

  .header-title {
    text-align: center;
  }
</style>
