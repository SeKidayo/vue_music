import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    accountInfo: {}
  },
  // 改变state中的数据只能通过 调用 mutation或 actions 中 的方法实现
  mutations: {
    // 设置账号信息
    getAccountInfo (state, obj) {
      // mutations中第一个形参 固定为state对象
      // 第二个参数为 调用此方法时传递的参数
      state.accountInfo = obj // 浅拷贝
    }
  },
  actions: {
  }
})
