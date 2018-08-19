<template>
  <div class="banner">
    <div @click="imgSwiper=!imgSwiper">
      <div class="banner-img">
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg">
      </div>
      <div class="banner-title">
        金海湖风景区（AAA景区）
      </div>
    </div>
    <div class="img-swiper" v-show="imgSwiper" @click="imgSwiper=!imgSwiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl">
        </swiper-slide>
      </swiper>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            type: "fraction"
          },
          loop: true,
        },
        imgSwiper: false,
        bannerList: [
          {
            id: '01',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg'
          },
          {
            id: '02',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_r_800x800_93f1a7af.jpg'
          },
          {
            id: '03',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
  }

  .banner-img {
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    overflow: hidden;
  }

  .banner-img img {
    width: 100%;
  }

  .banner-title {
    position: absolute;
    bottom: .3rem;
    left: .3rem;
    font-size: .36rem;
    color: #fff;
  }

  .img-swiper {
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #000;
  }

  .img-swiper img {
    width: 100%;
  }

  .swiper-pagination {
    bottom: .6rem;
    font-size: .32rem;
    color: #fff;
  }
</style>
