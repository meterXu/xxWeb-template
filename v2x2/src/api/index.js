import {util} from '@dpark/s2-xxweb-utils'
import {getAction} from './manage'
export function queryPermissionsByUser() {
  return new Promise((resolve, reject) => {
    let project = window.project
    const params = { appId: project.variable.appid}
    getAction('/app/appinfomenu', params).then(response => {
      if (response.data) {
        let menuList = {}
        menuList.menu = util.oAuthMenu2S2(response.data,customIcon)
        menuList.allAuth = []
        menuList.allPerms = {
          add:true,
          search:true,
          edit:true,
          delete:true
        }
        menuList.auth = []
        resolve(menuList)
      }else{
        reject('获取权限失败！')
      }
    }).catch(err => {
      reject(err)
    })
  })
}

function customIcon(meta,icon){
  if(icon&&icon.indexOf('{')>-1){
    let iconObj = JSON.parse(icon)
    iconObj.conf.fill='currentColor'
    meta.icon = iconObj
  }else{
    meta.icon=''
  }
}