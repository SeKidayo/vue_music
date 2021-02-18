<!--  -->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="login_avatar">
        <img src="../assets/images/春夏秋冬.jpg" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        class="login_form"
        v-bind:model="loginForm"
        :rules="loginFormRules"
      >
        <!-- 用户名 -->
        <!-- 注意!!!!! --- 这里的 prop 的值 应该与 下面的 loginForm对象下的属性保持一致 -->
        <el-form-item prop="phone">
          <el-input
            v-model="loginForm.phone"
            placeholder="请输入电话哒!"
            prefix-icon="iconfont icon-yonghuming"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码哒!"
            prefix-icon="iconfont icon-mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="login_btn">
          <el-button type="success" round @click="login">登录</el-button>
          <el-button type="info" round @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登陆表单的表单对象
      // 这里的属性名不可以乱取,要与后台API文档保持一致
      loginForm: {
        phone: '15926196009',
        password: 'missmiaowsh'
      },
      loginFormRules: {
        // rules下的属性名要和 表单对象下的属性 一致
        // 验证用户名是否合法
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          {
            min: 7,
            max: 12,
            message: '电话格式不正确',
            trigger: 'blur'
          }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '密码长度请在6-12个字符内',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮后触发的事件
    reset: function () {
      // this指向 login.vue组件的实例对象
      // this.$refs 可以获取到ref绑定的标签的dom对象（这里获取的即是表单对象
      // 而loginFormRef表单对象下的方法resetFields()可以重置表单内容 (Element-UI定义)
      this.$refs.loginFormRef.resetFields()
    },
    // 发送请求前的校验 --- validata()方法
    // 根据validata方法的返回值真假决定是否需要发送请求
    login: function () {
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid) // 格式正确输出 true; 反之为false
        // 格式错误, 直接return
        if (!valid) return false
        // 格式正确,然后发送请求(通过axios)
        // 下为对象解构 | axios得到结果后才会进行后续操作
        const { data: res } = await this.$http.post('login/cellphone', this.loginForm)
        // console.log(res)
        // 根据返回的http状态码 打印错误信息(后修改为弹出消息框)
        if (res.code !== 200) return this.$message.error('登陆失败￣へ￣')
        // 设置服务器端传入的cookie
        if (!document.cookie) {
          document.cookie = res.cookie
        }
        // console.log(document.cookie)
        // console.log('登陆成功(*^_^*)')
        this.$message.success('登陆成功φ(゜▽゜*)♪')
        // 2.通过 编程式导航 跳转到后台主页,路由路径是 /home
        // this.$router.push()初见
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
.login_container {
  background: url(../assets/images/BG.png) no-repeat;
  background-size: 100% 100%;
  // background-color: #42b983;
  height: 100%;
}
.login_box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background-color: #fcfcfc;
  border-radius: 10px;
  .login_avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid #eeeeee;
    margin: -69px auto; // 水平居中法1
    padding: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px 4px #dddddd;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fbff00;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
.login_btn {
  display: flex;
  justify-content: center;
}
</style>
