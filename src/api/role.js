import request from '@/utils/request'

export function getRoleId(params) {
  return request({
    url: '/getRoleId',
    method: 'get',
    params
  })
}

export function addRole(params) {
  return request({
    url: '/addUserRole',
    method: 'get',
    params
  })
}

// export function removeRole(params) {
//   return request({
//     url: '/removeUserRole',
//     method: 'get',
//     params
//   })
// }

//用
export function getAllAuth() {
  return request({
    url: '/role/getAllRolesAndAuth',
    method: 'get',
  })
}

export function getAuthInfo() {
  return request({
    url: '/getAuthInfo',
    method: 'get',
  })
}

//添加权限 用
export function addAuth(params) {
  return request({
    url: 'role/addRoleAuth',
    method: 'post',
    data:params
  })
}

//删除权限
export function removeAuth(params) {
  return request({
    url: 'role/removeRoleAuth',
    method: 'post',
    data:params
  })
}


//查询所有角色
export function getAllRoles() {
  return request({
    url: 'getAllRoles',
    method: 'get',
  })
}

//根据角色id查询所有权限 用
export function getAuthByRoleId(params) {
  return request({
    url: 'auth/getAuthByRoleId',
    method: 'get',
    params
  })
}

//查询所有权限 用
export function getAllAuths() {
  return request({
    url: 'auth/getAllAuth',
    method: 'get'
  })
}

//查询所有角色嵌套列表形式 用
export function getAllRoleByList() {
  return request({
    url: '/role/getAllRole',
    method: 'get',
  })
}

//添加角色 用
export function addRoles(params) {
  return request({
    url: 'role/addRole',
    method: 'post',
    data: params
  })
}

//删除角色 用
export function removeRoles(params) {
  return request({
    url: 'role/removeRoles',
    method: 'get',
    params
  })
}
