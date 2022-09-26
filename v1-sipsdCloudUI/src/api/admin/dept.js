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

export function fetchTree(query) {
  return request({
    url: '/admin/dept/tree',
    method: 'get',
    params: query
  })
}

export function list(query) {
  return request({
    url: '/admin/dept/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/dept/',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/admin/dept/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/dept/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/dept/',
    method: 'put',
    data: obj
  })
}

/**
 * 解除本门与人员绑定
 */
export function disassociateDeptAndUser(obj) {
  return request({
    url: '/admin/dept/disassociateDeptAndUser',
    method: 'put',
    data: obj
  })
}

/**
 * 添加部门与人员绑定
 */
export function addRelationDeptAndUser(arr) {
  return request({
    url: '/admin/dept/addRelationDeptAndUser',
    method: 'post',
    data: arr
  })
}
