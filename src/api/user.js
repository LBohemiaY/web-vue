import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: { token }
  })
}

export function usernameCheck(username) {
  return request({
    url: '/user/usernamecheck',
    method: 'get',
    params: { username }
  })
}

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
