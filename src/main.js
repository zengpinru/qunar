// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//css
import 'css/reset.css'
import 'css/common.css'
import 'css/iconfont.css'

//解决300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//axios
import Axios from 'axios'
Vue.prototype.$http=Axios

//vuex
import store from './store'

//引入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
