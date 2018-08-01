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
      北京<span class="iconfont">&#xe604;</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
@import "~stylus/var.styl"
.header {
  display: flex;
  width: 100%;
  height: .88rem;

  font-size:.36rem;
  line-height:.88rem;

  color: $textColor;
  background: $bgColor;
}
.header-left {
  width:.4rem;
  padding: 0 .2rem;

  text-align: center;
  font-weight: bold;
}
.header-search {
  flex:1;
  height: .6rem;
  padding-left: .2rem;
  margin: .14rem 0;
  border-radius: .1rem;

  line-height: .6rem;
  font-size: .28rem;

  color: #e4e7ea;
  background: #fff;
}
.header-right {
  padding:0 .2rem;

  font-size: .28rem;
}
</style>
