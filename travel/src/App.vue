<template>
<!-- 放在template里是组件的模板 -->
  <div id="app">
    <!-- 显示的是当前路由地址所对应的路由内容 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
      
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>


// 以Vue结尾是单文件组件