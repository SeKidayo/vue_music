import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// Vue.use()操作后 之后的组件中可以直接使用,与 挂载到原型上效果一致(未经证实,自我猜测)
// 直接导入的文件不需要导出
import './plugins/element.js'
// 导入全局样式表
import './assets/css/style.css'
// 导入字体图标
import './assets/font_83lpfgrbh2w/iconfont.css'
// import axios from 'axios'

// 设置axios请求的根路径
// axios.defaults.baseURL = 'http://localhost:3000'  // 移动到network下的request.js下
// 设置axios请求携带cookie
// axios.defaults.withCredentials = true  // 移动到network下的request.js下
// 挂载axios到Vue的原型上
// Vue.prototype.$http = axios // 请求封装,不再需要全局挂载

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
