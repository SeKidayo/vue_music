<!--  -->
<template>
  <div class="left">
    <el-menu
      :default-active="currentIndex"
      class="el-menu-vertical-demo"
      router
    >
      <!-- 一级菜单 -->
      <el-submenu index="recommend">
        <template slot="title">
          <span class="titlestyle">推荐</span>
        </template>
          <!-- 二级菜单  -->
          <!-- el-menu 中 开启 router 模式, 下面的 index 即为 vue-router 中的路由 -->
          <!-- 下面的index若不添加 / , 则相当于在当前路径后添加此路径, 若加上则相当于一个独立路径 -->
          <el-menu-item index="/music">
            <i class="el-icon-magic-stick"></i>
            发现音乐
          </el-menu-item>
          <el-menu-item index="/fm">
            <i class="el-icon-video-camera"></i>
            私人FM
          </el-menu-item>
          <el-menu-item index="/live">
            <i class="el-icon-video-camera"></i>
            直播
          </el-menu-item>
          <el-menu-item index="/video">
            <i class="el-icon-video-camera"></i>
            视频
          </el-menu-item>
          <el-menu-item index="/friends">
            <i class="el-icon-video-camera"></i>
            朋友
          </el-menu-item>
      </el-submenu>
      <el-submenu index="createdPlaylists">
        <template slot="title">
          <span class="titlestyle">创建的歌单</span>
        </template>
          <!-- 待遍历  -->
          <el-menu-item index="/1-1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="collectedPlaylists">
        <template slot="title">
          <span class="titlestyle">收藏的歌单</span>
        </template>
          <!-- 待遍历 -->
          <el-menu-item index="/1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="mymusic">
        <template slot="title">
          <span class="titlestyle">我的音乐</span>
        </template>
          <el-menu-item index="/localmusic">本地音乐</el-menu-item>
          <el-menu-item index="/download">下载管理</el-menu-item>
          <el-menu-item index="/cloud">我的音乐云盘</el-menu-item>
          <el-menu-item index="/audio">我的电台</el-menu-item>
          <el-menu-item index="/collection">我的收藏</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      // 当前激活的菜单
      currentIndex: 'music'
    }
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 保存导航栏点击的状态
    saveDeafultActive () {
      // console.log(this.$route)
      // 消除多级地址的干扰
      var lastIndex = this.$route.path.lastIndexOf('/')
      var activePath = lastIndex === 0 ? this.$route.path : this.$route.path.slice(0, lastIndex)
      window.sessionStorage.setItem('activeMenu', activePath)
      this.currentIndex = sessionStorage.getItem('activeMenu')
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.saveDeafultActive()
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
.left {
 height: 100%;
}
.titlestyle {
  float: left;
  color: #666;
}
</style>
