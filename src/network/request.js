/**
 * @file 此文件提供了axios请求的基本结构,同层次的请求文件直接调用即可
 */
import axios from 'axios'

export function request (config) {
  // axios.create方法创建一个axios实例(Promise对象)
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true // 允许cookie跨域访问
  })
  // 添加请求和响应拦截器
  // 这里的config和函数request的形参config不一样; 这里的是指请求信息 和 响应信息; 上面的则是axios请求的配置的代指
  instance.interceptors.request.use(config => {
    // 这里的代码表示 在发送请求前可以做点什么
    // // 为请求首部添加 token令牌
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    return config // 一定要return(规定写法) 此值即为请求内容
  }, err => {
    console.log('请求时的错误信息:', err) // 请求失败时做什么
  })
  instance.interceptors.response.use(res => {
    return res.data // 在接收响应数据前对其进行包装
  }, err => {
    console.log('响应时的错误信息', err)
  })
  // 返回配置后的axios实例
  return instance(config)
}
