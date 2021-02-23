import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import findMusic from '../components/CenterMenu/recommend/findMusic'
import FM from '../components/CenterMenu/recommend/personFM'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/music',
      children: [
        // 注意: 以 / 开头的嵌套路径会被当作一个独立的路径,而不是父级path的子路径
        { path: '/music', component: findMusic },
        { path: '/fm', component: FM }
      ]
    }
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
