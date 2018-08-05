<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in page" :key="index">
        <div class="icons-item" v-for="item in items" :key="item.id">
          <img :src="item.imgUrl" :alt="item.title">
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props:['iconsList'],
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
    computed: {
      //栏目分页
      page() {
        let pages = [];
        this.iconsList.forEach((item, index) => {
          let idx = Math.floor(index / 8);
          if (!pages[idx]) {
            pages[idx] = [];
          }
          pages[idx].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style scoped>
  .icons {
    overflow: hidden;
    background: #fff;
  }

  .icons-item {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
  }

  .icons-item img {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    padding-top: .2rem;
    margin: 0 auto;
  }

  .icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
  }
</style>
