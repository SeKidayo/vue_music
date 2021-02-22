<template>
  <div class="topleft">
    <img :src="avatarURL" alt="avatarImg" title="你的头像" class="avatar" />
    <span class="nickname" :title="nickname">{{ nickname }}</span>
    <el-button size="small" round plain v-on:click="quit">退出</el-button>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      // 用户头像地址
      avatarURL: '',
      // 用户名
      nickname: ''
    }
  },
  // 计算属性 类似于data概念
  computed: {
    // 将state中的数据映射为 组件中的 数据
    ...mapState(['accountInfo'])
  },
  watch: {
    // 监控 vuex 中 state 数据的变化
    '$store.state.accountInfo': {
      handler: function () {
        this.nickname = this.accountInfo.profile.nickname
        this.avatarURL = this.accountInfo.profile.avatarUrl
      },
      deep: true // 深度监听; 普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听
    }
  },
  // 方法集合
  methods: {
    quit () {
      // 简单方法
      this.$router.push('/login')
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
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
.topleft {
  display: flex;
  padding-left: 16px;
  // 垂直居中
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    // vertical-align: middle;
    // vertical-align: middle;
  }
  .nickname {
    display: inline-block;
    width: 65px;
    // 一行显示, 溢出部分用...隐藏
    // ----------------------
    white-space: nowrap; // nowrap --- 使文本不换行,即使超出盒子本身宽度
    overflow: hidden;
    text-overflow: ellipsis;
    // --------------------
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
  }
}
</style>
