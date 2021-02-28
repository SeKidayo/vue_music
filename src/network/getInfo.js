import { request } from './request'
// 获取账户信息
export function getAccountInfo () {
  return request({
    url: '/user/account'
  })
}
// 获取轮播图信息
export function getBanner () {
  return request({
    url: '/banner'
  })
}
// 获取热门歌单
export function getHotPL (order, limit, offset) {
  return request({
    url: '/top/playlist',
    params: {
      order: order,
      limit: limit,
      offset: offset
    }
  })
}
// 获取歌单详情
// 遗憾: 获取的 trackIds是完整的,但是tracks是不完整的
// 改进方案: 拿全部 trackIds 请求 song/detail 接口获取歌曲详情
export function getSonglistInfo (songlistID) {
  return request({
    url: '/playlist/detail',
    params: {
      id: songlistID
    }
  })
}
// 根据trackIds获取歌曲信息集合
export function getSongInfo () {
  var IDStr = arguments[0] + ''
  if (arguments) {
    for (var i = 1; i < arguments.length; i++) {
      IDStr += `,${arguments[i]}`
    }
  } else {
    console.log('请求参数应为数组！！')
    return 'The argument should be an array'
  }
  return request({
    url: '/song/detail',
    params: {
      ids: IDStr
    }
  })
}
// 根据歌单id获取全部歌曲信息并传入回调函数
export function gotoSonglist (idlist, callback) {
  getSonglistInfo(idlist).then(res => {
    var IDArr = res.playlist.trackIds.map((item) => {
      return item.id
    })
    getSongInfo(IDArr).then(res => {
      callback(res) // 执行回调函数并传入实参res
    })
  })
}
