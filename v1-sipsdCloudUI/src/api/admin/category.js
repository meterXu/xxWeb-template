/*
 *    Copyright (c) 2018-2025, chengtg All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the sipsdcloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: chengtg (wangiegie@gmail.com)
 */

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/category/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/category',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/admin/category/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/category/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/category',
    method: 'put',
    data: obj
  })
}

export function childList(obj) {
  return request({
    url: '/admin/category/childList',
    method: 'get',
    data: obj
  })
}
export function tree() {
  return request({
    url: '/admin/category/tree',
    method: 'get',
    data: {}
  })
}
