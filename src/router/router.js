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
  if (to.path === '/login') return next()
  if (!document.cookie) return next('/login')
  next()
})

export default router
