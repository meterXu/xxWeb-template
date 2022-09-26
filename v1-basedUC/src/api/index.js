import bl_project from '../project'
import { portal, util } from '@dpark/s2-utils'
import { getActionSSO } from './manage'
const project = portal.getProject(bl_project)
export function queryPermissionsByUser() {
    const params = { appId: project.variable.appid }
    return new Promise((resolve, reject) => {
        getActionSSO('/app/appinfomenu', params).then(response => {
            if (response.data) {
                let menuList = {}
                menuList.menu = util.oAuthMenu2S2(response.data)
                menuList.allAuth = []
                menuList.allPerms = []
                menuList.auth = []
                resolve(menuList)
            } else {
                reject('获取权限失败！')
            }
        }).catch(err => {
            console.error(err)
            resolve({ 'menu': [] })
        })
    })
}
// 字典标签专用（通过code获取字典数组）
export const ajaxGetDictItems = (code, params) => getActionSSO(`/sys/dict/getDictItems/${code}`, params)
