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
const scope = 'server'

export const loginByUsername = (username, password, code, randomStr) => {
  const grant_type = 'password'

  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      'Authorization': 'Basic ZmFjaWxpdHk6ZmFjaWxpdHk='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}
// 单点登录
export const ssoLogin = (code, redirectUri) => {
  const grant_type = 'authorization_code'
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      'Authorization': 'Basic ZmFjaWxpdHk6ZmFjaWxpdHk='
    },
    method: 'post',
    params: { code, grant_type, scope, 'redirect_uri': decodeURIComponent(redirectUri) }
  })
}

export const refreshToken = (refresh_token) => {
  const grant_type = 'refresh_token'
  return request({
    url: '/auth/oauth/token',
    headers: {
      'isToken': false,
      'TENANT-ID': '1',
      'Authorization': 'Basic ZmFjaWxpdHk6ZmFjaWxpdHk='
    },
    method: 'post',
    params: { refresh_token, grant_type, scope }
  })
}

export const loginByMobile = (mobile, code) => {
  const grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/sms',
    headers: {
      'TENANT-ID': '1',
      'Authorization': 'Basic ZmFjaWxpdHk6ZmFjaWxpdHk='
    },
    method: 'post',
    params: { mobile: 'SMS@' + mobile, code: code, grant_type }
  })
}

export const loginBySocial = (state, code) => {
  const grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/social',
    headers: {
      'TENANT-ID': '1',
      'Authorization': 'Basic ZmFjaWxpdHk6ZmFjaWxpdHk='
    },
    method: 'post',
    params: { mobile: state + '@' + code, grant_type }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}
export const SSOlogout = (redirect_uri) => {
  return request({
    url: '/auth/logout?redirect_url='+redirect_uri,
    method: 'post',
    params: {redirect_uri}
  })
}

