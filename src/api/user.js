import request from '@/utils/request'

//用
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

//用
export function getInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params
  })
}

//用
export function getAllUserAndRoles() {
  return request({
    url: '/user/getAllUserAndRoles',
    method: 'get',
  })
}
//getAllUser
export function getAllUsers() {
  return request({
    url: '/getAllUser',
    method: 'get',
  })
}
//removeUserRole 用
export function removeUserRole(params) {
  return request({
    url: '/user/removeUserRole',
    method: 'get',
    params
  })
}
//addUserRole 用
export function addUserRole(params) {
  return request({
    url: '/user/addUserRoles',
    method: 'get',
    params
  })
}
//getUserRole
export function getUserRole(params) {
  return request({
    url: '/getUserRole',
    method: 'post',
    data:params
  })
}
//getCountUser 用
export function getCountUser(params) {
  return request({
    url: '/user/getCountByUserName',
    method: 'post',
    data:params
  })
}
//addUser 用
export function addUser(params) {
  return request({
    url: '/user/addUser',
    method: 'post',
    data:params
  })
}
//updatePassword
export function updatePassword(params) {
  return request({
    url: 'user/updatePassword',
    method: 'post',
    data:params
  })
}
//removeUserAndRole 用
export function removeUserAndRole(params) {
  return request({
    url: '/user/removeUser',
    method: 'get',
    params
  })
}
export function logout() {
  return 0
}
