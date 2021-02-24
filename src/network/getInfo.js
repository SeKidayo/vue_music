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
