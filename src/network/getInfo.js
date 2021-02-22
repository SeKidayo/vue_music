import { request } from './request'

export function getAccountInfo () {
  return request({
    url: '/user/account'
  })
}
