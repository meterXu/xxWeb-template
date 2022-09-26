/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the www.dpark.com.cn developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: chengtg (mr6201745@163.com)
 */

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params: query
  })
}
export function getAllUser(query) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params: query
  })
}
// export function getAllUser() {
//   return request({
//     url: '/admin/user/getAllUser',
//     method: 'get',
//   })
// }
export function userList(query) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params: query
  })
}
//根据部门id获取人员信息
export function fetchListByDeptId(query) {
  return request({
    url: '/admin/user/getDeptUser',
    method: 'get',
    params: query
  })
}
//模糊搜索
export function getUserInfoLike(query) {
  return request({
    url: '/admin/user/getUserInfoLike',
    method: 'get',
    params: query
  })
}

/**
 * 分页列表
 */
export function getUserVosNotDeptOrRole(query) {
  return request({
    url: '/admin/user/getUserVosNotDeptOrRole',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/user',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/admin/user/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/user/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/user',
    method: 'put',
    data: obj
  })
}

export function getDetails(obj) {
  return request({
    url: '/admin/user/details/' + obj,
    method: 'get'
  })
}

export function getRoleUser(query) {
  return request({
    url: '/admin/user/getRoleUser',
    method: 'get',
    params: query
  })
}

export function deleteRoleUsers(query) {
  return request({
    url: '/admin/user/deleteRoleUsers',
    method: 'delete',
    params: query
  })
}


export function saveRoleUsers(query) {
  return request({
    url: '/admin/user/saveRoleUsers',
    method: 'post',
    params: query
  })
}

export function getLeaderListByUserId(query) {
  return request({
    url: '/admin/user/getLeaderListByUserId',
    method: 'get',
    params: query
  })
}

export function getDeptByUserId(query) {
  return request({
    url: '/admin/user/getDeptByUserId',
    method: 'get',
    params: query
  })
}
// 部门人员列表
export function getDeptUserList(query) {
    return request({
        url: '/admin/user/getDeptUserList',
        method: 'get',
        params: query
      })
}


/**
 * 重置个人密码
 * @param query
 */
export function resetPassword(id) {
  return request({
    url: '/admin/user/resetPassword/'+ id,
    method: 'put',
    params: {}
  })
}
