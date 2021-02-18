<template>
  <div class="topleft">
    <img :src="avatarURL" alt="avatarImg" title="你的头像" class="avatar" />
    <span class="nickname">{{ nickname }}</span>
    <el-button size="small" round plain v-on:click="quit">退出登录</el-button>
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
      // 用户头像地址
      avatarURL: '',
      // 用户名
      nickname: ''
    }
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    quit () {
      this.$router.push('/login')
    },
    // 获取账号信息
    async getAccount () {
      const { data: account } = await this.$http.get('/user/account')
      console.log(account)
      this.avatarURL = account.profile.avatarUrl
      this.nickname = account.profile.nickname
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 获取账号信息
    this.getAccount()
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
  // 垂直居中
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // vertical-align: middle;
    // vertical-align: middle;
  }
  .nickname {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
  }
}
</style>
