<template>
  <div class="findMusic">
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个性推荐" name="index">个性推荐</el-tab-pane>
    <el-tab-pane label="歌单" name="playerlists">歌单</el-tab-pane>
    <el-tab-pane label="主播电台" name="radio">主播电台</el-tab-pane>
    <el-tab-pane label="排行榜" name="rank">排行榜</el-tab-pane>
    <el-tab-pane label="歌手" name="songer">歌手</el-tab-pane>
    <el-tab-pane label="最新音乐" name="new">最新音乐</el-tab-pane> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <!-- 路由占位符不要写在el-tab-pane中,否则会重复渲染 -->
    <router-view @activeTabChange="handleChange"></router-view>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  // components: {},
  data () {
    // 这里存放数据
    return {
      activeName: 'index',
      // tab遍历数组
      tabs: [
        { label: '个性推荐', name: 'index' },
        { label: '歌单', name: 'playerlists' },
        { label: '主播电台', name: 'radio' },
        { label: '排行榜', name: 'rank' },
        { label: '歌手', name: 'songer' },
        { label: '最新音乐', name: 'new' }
      ]
    }
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 标签页切换事件
    handleClick (tab) {
      // 默认接收当前点击的tab信息
      this.$router.push(`/music/${tab.name}`)
      window.sessionStorage.setItem('activetab', tab.name)
    },
    // 刷新时正确设置tab激活状态
    activeTabChange () {
      this.activeName = sessionStorage.getItem('activetab') ? sessionStorage.getItem('activetab') : 'index'
    },
    // 可操控当前状态
    handleChange (str) {
      window.sessionStorage.setItem('activetab', str) // 保证刷新时无误
      this.activeName = str // 保证tab栏正确激活
      this.$router.push(`/music/${str}`) // 跳转
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.activeTabChange()
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
.findMusic {
  height: 100%;
}
</style>
