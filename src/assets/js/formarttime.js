// 将时间戳转换为常见的时间表达形式
// 作为Vue过滤器中的函数使用
export function formartTime (time) {
  var date = new Date(time)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
