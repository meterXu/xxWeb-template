// 系统全局配置的接口
import { deleteAction, getAction, postAction, putAction } from '@/api/manage'
import {util} from '@dpark/s2-xxweb-utils'
if (util.getQueryVariable('roleIds')) {
  localStorage.setItem('roleIds', util.getQueryVariable('roleIds'));
}
const roleIds = localStorage.getItem('roleIds') ? localStorage.getItem('roleIds').split(',') : []
// 获取分组列表
export function getMenu(params) {
  return postAction('/getMenu', {
    appId: window.project.variable.appid,
    roleIds: roleIds
  },
  )
}
// 获取系统参数
export function getSysemParam(params) {
  return postAction('/getSysemParam', {
    appId: window.project.variable.appid
  },
  )
}