<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <!-- 轮播图遍历 -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
      list:Array
  },
  data() {
    return {
      //轮播图相关配置data
      swiperOptions: {
        pagination: ".swiper-pagination", //轮播小点
        loop: true, //循环轮播
        autoplay:3000
      },
    }
  },
  computed:{
      showSwiper (){
          return this.list.length
      }
  }
};
</script>

<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;

  .swiper-img {
    width: 100%;
  }
}
</style>