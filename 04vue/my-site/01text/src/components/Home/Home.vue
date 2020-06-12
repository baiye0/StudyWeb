<template>
  <div id="home">
      <!-- 轮播图 -->
    <mt-swipe :auto="4000" class='swiper'>
      <mt-swipe-item v-for='(item,index) in imgs' :key='index'>
          <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        imgs:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591470513145&di=01578853d341290f7c997f29e351bbd9&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg']
    };
  },
  created() {
  }
};
</script>
<style scoped>
.swiper{
    height: 250px;
}
.swiper img{
    width: 100%;
    height: 250px;
}
</style>