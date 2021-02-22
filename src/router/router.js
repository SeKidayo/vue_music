import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 直接访问login页面时, 直接放行
  if (to.path === '/login') return next()
  // 访问其他页面时, 需要token令牌(暂不支持) --- 这里采用标志位代替
  // const tokenstr = window.sessionStorage.getItem('token')
  // if (!tokenstr) return next('/login') // 没有令牌时, 禁止直接访问其他页面
  if (!document.cookie) return next('/login')
  next()
})

export default router
