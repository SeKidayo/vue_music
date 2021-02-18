<!--  -->
<template>
  <div class="container">
    <div class="home_bg"></div>
    <div id="home">
      <el-container>
        <el-header><Top></Top></el-header>
        <el-container>
          <el-aside><Left></Left></el-aside>
          <el-main><Center></Center></el-main>
        </el-container>
        <el-footer><Bottom></Bottom></el-footer>
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
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Bottom,
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
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
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
  width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
