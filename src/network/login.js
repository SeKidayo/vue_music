import { request } from './request.js'

// 在组件中调用此函数, 返回 request(config)函数执行后的返回值, 即为 axios实例
// 注意request(config) 中config可以覆盖预定义的属性设置
// 然后再通过 .then() 方法即可捕捉到 响应数据
export function loginByPhone (paramsObj) {
  // 默认是GET请求
  // 一定要 return request方法调用; 这样才能直接在方法后使用Promise的API ---> .then()方法
  return request({
    url: '/login/cellphone',
    method: 'post',
    data: paramsObj // post、put请求需要使用data来表明请求数据; get请求则是params
  })
}
