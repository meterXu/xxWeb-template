import {util} from '@dpark/s2-xxweb-utils'
import {getAction} from './manage'
export function queryPermissionsByUser() {
  return new Promise((resolve, reject) => {
    let project = window.project
    const params = { appId: project.variable.appid}
    return new Promise((resolve, reject) => {
      getAction('/app/appinfomenu', params).then(response => {
        if (response.data) {
          let menuList = {}
          menuList.menu = util.oAuthMenu2S2(response.data,customIcon)
          menuList.allAuth = []
          menuList.allPerms = []
          menuList.auth = []
          resolve(menuList)
        }else{
          reject('获取权限失败！')
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}