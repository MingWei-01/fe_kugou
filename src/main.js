import Vue from 'vue'
import App from './App'
import router from './router'
import sotre from './store'

//基本样式
import './assets/base.css';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  sotre,
  render: h => h(App)
})
