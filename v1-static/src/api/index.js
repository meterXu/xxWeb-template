import { getActionSSO } from './manage'
import { util } from '@dpark/s2-utils'

export function staticPermission() {
  return {
    menu: util.parseRoutes([
      {
        'path': '/{{ namespace }}',
        'name': '@getRoutesName(path)',
        'meta': { title: '系统菜单', icon: 'menu' },
        'children': [
          {
            path: '/{{ namespace }}/m1/readme',
            name: '@getRoutesName(path)',
            meta: {
              title: '欢迎使用s2'
            }
          },
          {
            path: '/{{ namespace }}/m2/page_a',
            name: '@getRoutesName(path)',
            meta: {
              title: '我的页面'
            }
          }
        ]
      }
    ])
  }
}

// 字典标签专用（通过code获取字典数组）
export const ajaxGetDictItems = (code, params) => getActionSSO(`/sys/dict/getDictItems/${code}`, params)
