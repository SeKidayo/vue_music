<!--  -->
<template>
  <div class="container">
    <div class="home_bg"></div>
    <div id="home">
      <el-container>
        <el-header height="70px"><top></top></el-header>
        <el-container>
          <el-aside width="220px"><left></left></el-aside>
          <el-main><center></center></el-main>
        </el-container>
        <el-footer><bottom></bottom></el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Bottom from './Home/Bottom'
import Center from './Home/Center'
import Left from './Home/Left'
import Top from './Home/Top'

import { getAccountInfo } from '../network/getInfo'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    bottom: Bottom,
    Center,
    Left,
    Top
  },
  data () {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 初始化账号数据(需要在请求中携带cookie)
    initDataHome: function () {
      getAccountInfo().then(res => {
        if (res.code !== 200) return this.$message.error('获取用户信息失败￣へ￣')
        // console.log(res)
        // 将 账号数据 保存在 Vuex的store中
        this.$store.commit('getAccountInfo', res)
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 由于axios请求是异步任务,故而子组件不能直接获取到更新的vuex中的state
    // 解决方案: 子组件 在 watch 中监听
    this.initDataHome()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.home_bg {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: url(../assets/images/BG.png) no-repeat;
  background-size: 100% 100%;
  // background-color: aqua;
  // overflow: hidden;
  filter: blur(9px);
  transform: scale(1.1);
}
#home {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
// .el-container {
//   height: 100%;
// }
.el-header {
  background-color: #79bbff;
  color: #eee;
  text-align: center;
}
.el-footer {
  background-color: #79bbff;
  color: #333;
  text-align: center;
  padding: 0;
  // line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  height: 540px;
  color: #333;
  text-align: center;
  overflow: scroll;
}

.el-main {
  background-color: #eee;
  color: #333;
  text-align: center;
  // line-height: 160px;
  padding: 0;
  overflow: auto;
}
</style>
