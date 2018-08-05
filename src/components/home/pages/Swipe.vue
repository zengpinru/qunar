<template>
  <div class="swipe">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swipeList" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
        },
      }
    },
    props:['swipeList']
  }
</script>

<style scoped lang="stylus">
.swipe {
  width:100%;
  height: 2rem;
}

.swipe img {
  width: 100%;
  height: 2rem;
}
.swipe >>> .swiper-pagination-bullet-active {
  background:#fff;
}
</style>
