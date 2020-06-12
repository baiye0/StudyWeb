// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from '../node_modules/axios'


//入口文件里引入mint-ui
import Mint from 'mint-ui'
Vue.use(Mint)

//配置axios
Vue.prototype.$axios = Axios;

//配置公共的URL
Axios.defaults.baseURL='http://...api/'

Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
