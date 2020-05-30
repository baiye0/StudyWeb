// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import App from './App'   //没后缀会自动查找 App.vue
import router from './router'
//加载速度
import fastClick from 'fastclick'
//vuex 第二步
import store from './store/index.js'
//icon图标
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //vuex 第二步
  store,
  router:router,
  components: { App:App },  // App局部组件
  template: '<App/>'
})
