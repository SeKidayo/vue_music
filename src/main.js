import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vue.use()操作后 之后的组件中可以直接使用,与 挂载到原型上效果一致(未经证实,自我猜测)
// 直接导入的文件不需要导出
import './plugins/element.js'
import axios from 'axios'

// 设置axios请求的根路径
axios.defaults.baseURL = 'http://localhost:3000'
// 挂载axios到Vue的原型上
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
